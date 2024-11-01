import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoState, toDoSelector, categoryState, Categories } from "../atoms";
import ToDo from "./ToDo";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
`;

const ToDoList = () => {
  // useRecoilValue : atom 함수 안에서 관리하고 있는 상태 관리 value를 찾아와주는 역할
  const toDos = useRecoilValue(toDoSelector);
  //useRecoilState: useRecoilValue + useSetRecoilState 기능을 합쳐놓은 역할
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <Container>
      <Title>ToDo List</Title>
      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>TODO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDoItem) => (
        <ToDo key={toDoItem.id} {...toDoItem} />
      ))}
    </Container>
  );
};
export default ToDoList;
