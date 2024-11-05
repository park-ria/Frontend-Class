import { atom } from "recoil";

export interface ToDo {
  id: number;
  text: string;
}

interface ToDoState {
  [key: string]: ToDo[]; //인덱스 타입: 이러한 형식이 여러개 일때 씀
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    ToDo: [
      { id: 1, text: "Hello" },
      { id: 2, text: "World" },
    ],
    Doing: [],
    Done: [],
  },
});
