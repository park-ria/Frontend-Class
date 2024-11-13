import { HashSet } from "./hashSet.mjs";

let hashSet = new HashSet();
console.log(`isEmpty: ${hashSet.isEmpty()}`);
// isEmpty: true

console.log("=== 데이터 삽입 ===");
hashSet.add(1);
hashSet.add(1);
hashSet.add(123);
hashSet.add(512);
hashSet.printAll();
console.log(`isEmpty: ${hashSet.isEmpty()}`);
// === 데이터 삽입 ===
// 1
// 512
// 123
// isEmpty: false

console.log("=== 데이터 체크1 ===");
console.log(`isContain: ${hashSet.isContain(1)}`);
// === 데이터 체크1 ===
// isContain: true

console.log("=== 데이터1 제거 ===");
hashSet.remove(1);
hashSet.printAll();
console.log(`isContain: ${hashSet.isContain(1)}`);
// === 데이터1 제거 ===
// 512
// 123
// isContain: false

console.log("=== clear ===");
hashSet.clear();
hashSet.printAll();
console.log(`isEmpty: ${hashSet.isEmpty()}`);
// === clear ===
// isEmpty: true
