import { atom } from "recoil";

// const x = ["a", "b", "c", "d", "e"];
// x.splice(0, 1);
// a

//x.splice(2, 0, "a");
//["b","c","a","d","e"]

const toDos = {
  x: ["a", "b"],
  y: ["c", "d"],
};
Object.keys(toDos);
//["x","y"]

Object.values(toDos);
// [["a","b"], ["c","d"]]

toDos["x"]; //["a","b"]
toDos["y"]; //["c","d"]
