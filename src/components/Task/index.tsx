import { Trash } from "phosphor-react";
import {
  Checkbox,
  Content,
  Label,
  RoundedCheckbox,
  TaskDescription,
} from "./styles";
import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from "react";

interface TaskProps extends InputHTMLAttributes<HTMLInputElement> {
  content: string;
  id: string;
}

const TaskBase: ForwardRefRenderFunction<HTMLInputElement, TaskProps> = (
  { content, id, ...rest }: TaskProps,
  ref
) => {
  return (
    <Content>
      <RoundedCheckbox>
        <Checkbox id={id} type="checkbox" ref={ref} {...rest} />
        <Label htmlFor={id}></Label>
      </RoundedCheckbox>
      <TaskDescription>{content}</TaskDescription>
      <Trash />
    </Content>
  );
};

export const Task = forwardRef(TaskBase);
