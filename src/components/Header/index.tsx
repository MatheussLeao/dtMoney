import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps { 
  onNewTransactionModal: () => void;
}

export function Header({ onNewTransactionModal }: HeaderProps) {


  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onNewTransactionModal}>Nova Transação</button>
      </Content>
    </Container>
  );
}
