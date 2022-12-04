import {
  useCallback, useRef, useState, createRef, useEffect,
} from 'react';

export default function useAnimatedList(initialValue = []) {
  const [items, setItems] = useState(initialValue);
  const [pendingRemovalItemsId, setPendingRemovalItemsId] = useState([]);

  const animatedRefs = useRef(new Map());
  const animationEndListeners = useRef(new Map());

  const handleAnimationEnd = useCallback((itemId) => {
    const removeListener = animationEndListeners.current.get(itemId);
    removeListener();

    animationEndListeners.current.delete(itemId);
    animatedRefs.current.delete(itemId);

    setItems((prevState) => prevState.filter((item) => item.id !== itemId));
    setPendingRemovalItemsId((prevState) => prevState.filter((id) => id !== itemId));
  }, []);

  useEffect(() => {
    pendingRemovalItemsId.forEach((itemId) => {
      const animatedRef = animatedRefs.current.get(itemId);
      const animatedElement = animatedRef?.current;
      const alreadyHasListener = animationEndListeners.current.has(itemId);

      if (animatedElement && !alreadyHasListener) {
        const onAnimationEnd = () => handleAnimationEnd(itemId);
        const removeListener = () => {
          animatedElement.removeEventListener('animationend', onAnimationEnd);
        };

        animatedElement.addEventListener('animationend', onAnimationEnd);
        animationEndListeners.current.set(itemId, removeListener);
      }
    });
  }, [pendingRemovalItemsId, handleAnimationEnd]);

  useEffect(() => {
    const removeListeners = animationEndListeners.current;

    return () => {
      removeListeners.forEach((removeListener) => removeListener());
    };
  }, []);

  const handleRemoveItem = useCallback((id) => {
    setPendingRemovalItemsId(
      (prevState) => [...prevState, id],
    );
  }, []);

  const getAnimatedRef = useCallback((id) => {
    let animatedRef = animatedRefs.current.get(id);

    if (!animatedRef) {
      animatedRef = createRef();
      animatedRefs.current.set(id, animatedRef);
    }

    return animatedRef;
  }, []);

  const renderList = useCallback((renderItem) => (
    items.map((item) => {
      const isLeaving = pendingRemovalItemsId.includes(item.id);
      const animatedRef = getAnimatedRef(item.id);

      return renderItem(item, {
        isLeaving,
        animatedRef,
      });
    })
  ), [items, pendingRemovalItemsId, getAnimatedRef]);

  return {
    items,
    setItems,
    handleRemoveItem,
    renderList,
  };
}
