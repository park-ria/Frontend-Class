import { Stack } from "./stack.mjs";

let stack = new Stack();
console.log("=== 첫 번째 출력===");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
//=== 첫 번째 출력===
//4
//3
//2
//1

console.log("=== 두 번째 출력 ===");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek().data); //peek()는 0번째 값을 참조
stack.pop();
console.log(stack.peek().data);
console.log(`isEmpty: ${stack.isEmpty()}`);
stack.pop();
stack.pop();
stack.pop();
console.log(`isEmpty: ${stack.isEmpty()}`);
console.log(stack.pop());
// === 두 번째 출력 ===
// 4
// 3
// isEmpty: false
// isEmpty: true
// null
