/* eslint-disable react/jsx-one-expression-per-line */
import emptyBoxIcon from '../../../../assets/images/empty-box.svg';
import { Container } from './styles';

export default function EmptyList() {
  return (
    <Container>
      <img src={emptyBoxIcon} alt="Empty Box Icon" />
      <p>
        Você ainda não tem nenhum contato cadastrado!
        Clique no botão <strong>”Novo contato”</strong> à cima
        para cadastrar o seu primeiro!
      </p>
    </Container>
  );
}
