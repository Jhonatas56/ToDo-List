import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  padding: 1rem;
  margin: auto;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: var(--blue-dark);
  color: var(--gray-100);
  border: none;
  gap: 8px;

  &:hover {
    background-color: var(--blue);
    cursor: pointer;
  }
`