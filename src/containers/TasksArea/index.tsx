import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  CompletedTasksCounter,
  Content,
  CreatedTasksCounter,
  NewTask,
  TasksCounter,
} from "./styles";
import { Input } from "../../components/Input";
import { AddTaskButton } from "../../components/buttons/AddTaskButton";
import { NoContent } from "../../components/NoContent";
import { Task } from "../../components/Task";

export function TasksArea() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleAddNewTask = (event: FormEvent) => {
    event.preventDefault();
    setTasks((prevState) => [...prevState, newTask]);
    setNewTask("");
  };

  const handleChangeTaskValue = (event: ChangeEvent) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    setNewTask(event.target.value);
  };

  return (
    <Content>
      <NewTask onSubmit={handleAddNewTask}>
        <Input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleChangeTaskValue}
        />
        <AddTaskButton type="submit">
          Criar
          <PlusCircle size={16} />
        </AddTaskButton>
      </NewTask>

      <TasksCounter>
        <CreatedTasksCounter>
          Tarefas criadas <span>{tasks.length}</span>
        </CreatedTasksCounter>
        <CompletedTasksCounter>
          Concluídas <span>{tasks.length}</span>
        </CompletedTasksCounter>
      </TasksCounter>
      {!tasks.length ? (
        <NoContent />
      ) : (
        tasks.map((item) => <Task content={item} id={item} />)
      )}

      {/*<div className={styles.content}>
        <TaskExistence tasksLength={tasks.length} />
      </div> */}
    </Content>
  );
}
