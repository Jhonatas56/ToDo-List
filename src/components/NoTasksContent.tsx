import Clipboard from "../assets/clipboard.svg"

import styles from "./NoTasksContent.module.css"

export function NoTasksContent(){
  return (
    <div className={styles.noContentBody}>
      <img src={Clipboard}/>
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}