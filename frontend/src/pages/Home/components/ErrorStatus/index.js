import PropTypes from 'prop-types';

import { Container } from './styles';

import Button from '../../../../components/Button';
import sadIcon from '../../../../assets/images/icons/sad.svg';

export default function ErrorStatus({ onTryAgain }) {
  return (
    <Container>
      <img src={sadIcon} alt="Sad Icon" />
      <div className="details">
        <strong>Ocorreu um erro ao obter os seus contatos!</strong>
        <Button onClick={onTryAgain}>Tentar novamente</Button>
      </div>
    </Container>
  );
}

ErrorStatus.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
};
