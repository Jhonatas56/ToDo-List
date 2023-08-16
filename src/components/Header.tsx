import Rocket from "../assets/rocket.svg"
import Todo from "../assets/todo.svg"

import styles from "./Header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.rocket} src={Rocket} alt="Rocket Logo" />
      <img className={styles.todo} src={Todo} alt="Todo Logo" />
    </header>
  )
}