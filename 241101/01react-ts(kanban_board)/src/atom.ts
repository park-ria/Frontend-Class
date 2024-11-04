import { atom } from "recoil";

interface ToDoState {
  [key: string]: string[]; //인덱스 타입: 이러한 형식이 여러개 일때 씀
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    ToDo: ["포폴준비하기", "리액트복습하기", "자바스크립트공부"],
    Doing: ["노드js공부하기"],
    Done: ["운동하기", "흑백요리사 시청"],
  },
});
