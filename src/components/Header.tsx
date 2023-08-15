import Rocket from "../assets/rocket.svg"
import Todo from "../assets/todo.svg"

import styles from "./Header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Rocket} alt="Rocket Logo" />
      <img src={Todo} alt="Todo Logo" />
    </header>
  )
}