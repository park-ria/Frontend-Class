import { Deque } from "./deque.mjs";

let deque = new Deque();

console.log("=== addFirst ===");
console.log(`isEmpty: ${deque.isEmpty()}`);

deque.addFirst(1);
deque.addFirst(2);
deque.addFirst(3);
deque.addFirst(4);
deque.addFirst(5);
deque.printAll();
console.log(`isEmpty: ${deque.isEmpty()}`);
// === addFirst ===
// isEmpty: true
// [5, 4, 3, 2, 1]
// isEmpty: false

console.log("=== removeFirst ===");
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
console.log(`isEmpty: ${deque.isEmpty()}`);
// === removeFirst ===
// [4, 3, 2, 1]
// [3, 2, 1]
// [2, 1]
// [1]
// []
// isEmpty: true

console.log("=== adddList ===");
deque.addFirst(1);
deque.addFirst(2);
deque.addFirst(3);
deque.addFirst(4);
deque.addFirst(5);
deque.printAll();
console.log(`imEmpty: ${deque.isEmpty()}`);
// === adddList ===
// [5, 4, 3, 2, 1]
// imEmpty: false

console.log("=== removeLast ===");
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
console.log(`imEmpty: ${deque.isEmpty()}`);
// === removeLast ===
// [5, 4, 3, 2]
// [5, 4, 3]
// [5, 4]
// [5]
// []
// imEmpty: true
