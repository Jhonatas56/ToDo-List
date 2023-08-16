import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { NoTasksContent } from "./NoTasksContent";
import { Tasks } from "./Tasks";

interface TaksLength {
  tasksLength: number;
}

export function NewTask() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [completeTask, setCompleteTask] = useState(0)

  function TaskExistence({ tasksLength }: TaksLength) {
    if (tasksLength === 0) {
      return <NoTasksContent />;
    } else {
      return tasks.map((task, index) => {
        return <Tasks key={index} content={task} id={String(index)} />;
      });
    }
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, newTask]);
  }

  const tasksCount = tasks.length

  const taskCompleted = function(){
    tasks.map( task => {
      if(task.checked === true){
        setCompleteTask(task+1)
      }
    })
  }

  return (
    <div>
      <form className={styles.formTask} onSubmit={handleNewTask}>
        <input
          className={styles.newTaskInput}
          onChange={handleNewTaskChange}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button className={styles.newTaskButton} type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>

      <div className={styles.tasksCount}>
        <p className={styles.tasksCreatedCount}>
          Tarefas criadas <span>{tasksCount}</span>
        </p>
        <p className={styles.tasksCompletedCount}>
          Concluídas <span>0 de {tasks.length}</span>
        </p>
      </div>

      <div className={styles.content}>
        <TaskExistence tasksLength={tasks.length} />
      </div>
    </div>
  );
}
