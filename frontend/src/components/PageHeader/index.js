import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

import arrowIcon from '../../assets/images/icons/arrow.svg';

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrowIcon} alt="Go Back Arrow Icon" />
        <span>Voltar</span>
      </Link>

      <h1>{ title }</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
