import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NewTask = styled.form`
  display: flex;
  width: 46rem;
  align-items: center;
  gap: 8px;
  transform: translateY(-50%);
  margin-bottom: 3rem;
`;

export const NewTaskButton = styled.button`
  display: flex;
  padding: 1rem;
  margin: auto;

  border-radius: 8px;
  background: var(--blue-dark);
  color: var(--gray-100);
  border: none;
  gap: 8px;
`;

export const TasksCounter = styled.div`
  width: 100%;
  max-width: 736px;
  display: flex;
  justify-content: space-between;
`;

export const CreatedTasksCounter = styled.p`
  color: var(--blue);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;

  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  span {
    display: flex;
    padding: 2px 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 999px;
    background: var(--gray-400);
    color: var(--gray-200);
    font-size: 12px;
  }
`;

export const CompletedTasksCounter = styled.div`
  color: var(--purple);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  span {
    display: flex;
    padding: 2px 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 999px;
    background: var(--gray-400);
    color: var(--gray-200);
    font-size: 12px;
  }
`;
