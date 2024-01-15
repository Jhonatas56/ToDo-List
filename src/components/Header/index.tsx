import Rocket from "../../assets/rocket.svg";
import Todo from "../../assets/todo.svg";
import { StyledHeader } from "./styles";

export function Header() {
  return (
    <StyledHeader>
      <img src={Rocket} alt="Rocket Logo" />
      <img src={Todo} alt="Todo Logo" />
    </StyledHeader>
  );
}
