import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from "react";
import { StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { placeholder, ...rest }: InputProps,
  ref
) => {
  return <StyledInput placeholder={placeholder} ref={ref} {...rest} />;
};

export const Input = forwardRef(InputBase);
