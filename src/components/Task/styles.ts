import styled from "styled-components";

export const Content = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  display: flex;
  padding: 1rem;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;

  border-radius: 8px;
  border: 1px solid var(--gray-400);
  background: var(--gray-500);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
`;

export const RoundedCheckbox = styled.div`
  position: relative;
`;

export const Label = styled.label`
  background-color: transparent;
  border: 2px solid var(--blue);
  border-radius: 50%;
  cursor: pointer;
  height: 1rem;
  right: 0;
  position: absolute;
  bottom: 0;
  width: 1rem;
`;

export const Checkbox = styled.input`
  visibility: hidden;

  &:checked + label {
    background-color: var(--purple-dark);
    border: none;
  }

  &:checked + label::after {
    opacity: 1;
  }
`;

export const TaskDescription = styled.p`
  color: var(--gray-100);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

// .tasksContent textarea {
//   background: transparent;
//   border: none;
//   resize: none;
//   width: 100%;
//   color: var(--gray-100);
//   height: auto;
// }
