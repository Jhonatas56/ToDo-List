import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

export function NewTask() {
  const [tasks, setTasks] = useState(['']);
  const [newTask, setNewTask] = useState('');

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, newTask]);
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

      
    </div>
  );
}
