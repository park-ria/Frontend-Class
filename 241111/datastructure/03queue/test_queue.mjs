import { Queue } from "./Queue.mjs";

let queue = new Queue();

console.log("=== enqeue() ===");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front());

console.log("=== enqueue() ===");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(`isEmpty: ${queue.isEmpty()}`);
// === enqeue() ===
// <ref *1> Node {
//   data: 1,
//   next: null,
//   prev: <ref *2> Node {
//     data: 2,
//     next: [Circular *1],
//     prev: Node { data: 3, next: [Circular *2], prev: null }
//   }
// }
// === enqueue() ===
// Node {
//   data: 1,
//   next: null,
//   prev: <ref *1> Node {
//     data: 2,
//     next: null,
//     prev: Node { data: 3, next: [Circular *1], prev: null }
//   }
// }
// Node {
//   data: 2,
//   next: null,
//   prev: Node { data: 3, next: null, prev: null }
// }
// Node { data: 3, next: null, prev: null }
// null
// null
// isEmpty: true
