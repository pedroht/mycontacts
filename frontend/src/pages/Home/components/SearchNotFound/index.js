/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';

import { Container } from './styles';
import magnifierQuestionIcon from '../../../../assets/images/icons/magnifier-question.svg';

export default function SearchNotFound({ searchTerm }) {
  return (
    <Container>
      <img src={magnifierQuestionIcon} alt="Magnifier Question Icon" />
      <span>
        Nenhum resultado foi encontrado para <strong>{searchTerm}</strong>.
      </span>
    </Container>
  );
}

SearchNotFound.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
