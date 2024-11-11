import { LinkedList } from "./linkedList.mjs";

console.log("=== LinkedList 생성 ===");
let list = new LinkedList(); // list는 인스턴스 객체가 됨

console.log("=== insertAt() 호출 ===");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);

console.log("=== printAll() 호출 ===");
list.printAll();
// node test.mjs로 실행결과 확인
// === LinkedList 생성 ===
// === insertAt() 호출 ===
// === printAll() 호출 ===
// [0, 1, 2, 3, 4]

console.log("=== clear() 호출 ===");
list.clear();
list.printAll();

console.log("=== insertLast() 호출 ===");
list.insertLast(0);
list.insertLast(1);
list.insertLast(2);
list.printAll();
// node test.mjs로 실행결과 확인
// === clear() 호출 ===
// []
// === insertLast() 호출 ===
// [0, 1, 2]

console.log("=== deleteAt() 호출 ===");
list.deleteAt(0);
list.printAll();
// === deleteAt() 호출 ===
// [1, 2]

console.log("=== deleteLast() 호출 ===");
list.deleteLast();
list.printAll();
// === deleteLast() 호출 ===
// [1]

console.log("=== insertLast() 호출 ===");
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);
list.printAll();
// === insertLast() 호출 ===
// [1, 2, 3, 4, 5]

console.log("=== getNodeAt() 호출 ===");
let secondNode = list.getNodeAt(2);
console.log(secondNode);
// === getNodeAt() 호출 ===
// Node {
//   data: 3,
//   next: Node { data: 4, next: Node { data: 5, next: null } }
// }
