import { Trash } from "phosphor-react";

import styles from "./Tasks.module.css";

interface TasksProps {
  content: string;
  id: string;
  checked: boolean;
}

export function Tasks({ content, id, checked }: TasksProps) {
  return (
    <div className={styles.tasksContent}>
      <div className={styles.round}>
        <input
          id={id}
          type="checkbox"
          checked = {checked}
        />
        <label htmlFor={id}></label>
      </div>
      <textarea value={content} cols={30} rows={2} disabled />
      <Trash />
    </div>
  );
}
