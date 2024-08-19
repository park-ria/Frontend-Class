// JS ES6 => 혼종!
// Map & Set
// 배열 & 객체
// 배열 : 인덱스 // 개수 // 넣고, 빼고
// 객체 : 프로퍼티 형태(*어떤 자료가 무슨 의미인지)
// 배열 + 객체 => Map
// Map => 배열의 형태를 띄고 있는 이터러블한 객체의 자료구조들의 공통적인 약점!!! => 중복되는 값을 제어X

/*const bag = new Map();
bag.set("color", "red");
console.log(bag);*/
// 배열처럼 index와 size가 생김, 형태는 배열인데 객체처럼 property를 가짐

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);
console.log(myCup);
// 배열처럼 index와 size로 배열의 형태를 가지고 있음

myCup.set("type", "mini");
console.log(myCup);
