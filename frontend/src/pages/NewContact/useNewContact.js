import { useRef } from 'react';

import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function useNewContact() {
  const contactFormRef = useRef();

  async function handleSubmit(contact) {
    try {
      await ContactsService.createContact(contact);

      contactFormRef.current.resetFields();

      toast({
        type: 'success',
        text: 'Contato cadastro com sucesso!',
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: error.message,
      });
    }
  }

  return {
    contactFormRef,
    handleSubmit,
  };
}
