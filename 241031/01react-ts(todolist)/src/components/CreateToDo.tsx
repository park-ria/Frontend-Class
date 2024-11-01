import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toDoState, categoryState } from "../atoms";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface Form {
  toDo: string;
}

const CreateToDo = () => {
  // useRecoilState: useRecoilValue + useSetRecoilState 기능을 합쳐놓은 역할
  //const [toDos, setToDos] = useRecoilState(toDoState);
  // 주석처리 한 이유는 toDos가 쓰지 않고 있기때문에 useRecoilState 아닌 useSetRecoilState로 바꿈
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<Form>();

  const handleValid = ({ toDo }: Form) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please Write a ToDo...",
        })}
        type="text"
        placeholder="Write a ToDo"
      />
      <input type="submit" value={"ADD"} />
    </Form>
  );
};

export default CreateToDo;
