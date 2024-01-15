import Clipboard from "../../assets/clipboard.svg";
import { Content } from "./styles";

export const NoContent = () => {
  return (
    <Content>
      <img src={Clipboard} />
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </Content>
  );
};
