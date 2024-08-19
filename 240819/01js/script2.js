// 1. 매개변수 기본값
const hello = (name, message = "안녕하세요!") => {
  console.log(`${name}님! ${message}`);
};

hello("원빈", "반갑습니다");
hello("현빈");

// 2. 전개연산자
// 1) 함수의 매개변수 : 인자값에 들어오는 개수와 상관없이 이터러블한 객체로 받음
const addNum = (...numbers) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

console.log(addNum(1, 2));
console.log(addNum(1, 2, 3, 4, 5));

// 2) 참조타입 변수 값의 독립화
const fruits = ["apple", "banana", "cherry"];
const favorite = [...fruits];

favorite[1] = "grape";
console.log(fruits, favorite);

// 3) 서로 다른 2개의 배열을 하나로 병합
const animal = ["bird", "cat"];
const fruits01 = ["melon", "fineapple"];

console.log(animal.concat(fruits01)); // 이제 잘 안쓴다
// ['bird', 'cat', 'melon', 'fineapple']
console.log([animal, fruits01]); // 이중배열 이므로 X
// [Array(2), Array(2)]
console.log([...animal, ...fruits01]); //['bird', 'cat', 'melon', 'fineapple']

// 4) 구조분해할당, 전개연산자 구문
let [teacher, ...students] = ["kim", "lee", "park", "choi"];
console.log(teacher);
console.log(students);

// 3. 객체 key에 접근방법
// 대괄호 표기법
const book = {
  title: "Javascript",
  pages: 500,
};

book.published = "2024-08-19"; // 온전표기법
console.log(book);
console.log(book["title"]); // 대괄호표기법

// 객체 키 생성 방법
const fn = () => {
  return "result";
};

const add = (a, b) => {
  return a + b;
};

const obj = {
  [fn()]: "함수 키",
  [`${add(10, 20)} key`]: "계산 키",
};

console.log(obj);

// 객체 축약법 => 많이 사용됨!!!!!!!!!!!!!!!!!
let user = {
  name: "슛돌이",
};

user.age = 25;
console.log(user);

// 객체 선언 시, key 네이밍 === value값으로 할당하고자 하는 매개변수의 이름이 동일!!!
/*const makeUser = (name, age) => {
  return {
    name: name,
    age: age,
  };
};*/

const makeUser = (name, age) => {
  return {
    name,
    age,
  };
};

const user1 = makeUser("영심이", 20);
console.log(user1);

// 1. 객체에 심벌키 사용방법 : 유일무이한 값을 생성하고자 할 때
let id1 = Symbol();
let id2 = Symbol();
console.log(id1 === id2);

const id = Symbol("id"); // id라는 이름을 받은 유일한 값
const tel = Symbol("telephone number");

const member = {
  name: "David",
  age: 20,
  [id]: 1234,
  [tel]: () => {
    prompt("당신의 전화번호는?");
  },
};

console.log(member);

for (let item in member) {
  console.log(`${item}`); // key 중에 symbol이 출력되지 않음
}

// 2. 객체 안에 있는 key값을 은폐하고싶을 때 사용가능!!!

console.log(member[id]); // 대괄호 표기법이 아님 대괄호 표기법이였으면 ["id"]라고 적었어야 함 member[id]는 심볼에 접근하겠다는 뜻

//console.log(member[tel]());

// 4. 구조분해할당
// JS 컴포넌트화 => 함수형 // Class
const fruits02 = ["사과", "복숭아"];

//const apple = fruits02[0];
//const peach = fruits02[1];

const [apple, peach] = fruits02;
console.log(apple, peach);

const member03 = {
  name: "David",
  age: 20,
};
const { name: userName, age } = member03;
console.log(name, age);
console.log(userName, age);
//userName이라는 새로운 이름으로 가능

// 5. 배열 메서드
// map // filter // reduce
// map : 배열안에 있는 아이템(*요소)들에게 특정 함수 안에 있는 기능을 동일하게 실행, 적용 => 새로운 배열로 다시 생성
