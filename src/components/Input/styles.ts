import styled from "styled-components";

export const StyledInput = styled.input`
  display: flex;
  padding: 1rem;
  align-items: center;
  flex: 1 1 0;

  border-radius: 8px;
  border: 1px solid var(--gray-700);
  background: var(--gray-500);
  color: var(--gray-100);

  &::placeholder {
    color: var(--gray-300);
  }

  &:focus {
    outline: none;
    border-color: var(--purple-dark);
  }
`;
