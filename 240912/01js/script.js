// const numA = 10;
// const numB = 20;
// const numC = undefined;

// 병합연산자
// 병합연산자 ?? : 좌항에 값이 존재하면 좌항 출력, 좌항이 없으면 우항 출력
// console.log(numA ?? numB); // 10
// console.log(numC ?? numB); // 20

// 삼항조건연산자
// const strA = "안녕하세요!";
// typeof strA === "string"
//   ? console.log("문자자료형")
//   : console.log("문자자료형 아님!");

// switch문
// 바닐라 자바스크립트에서는 break, 리액트에서는 return을 써서 break와 값을 반환함
// const fruit = "apple";
// switch (fruit) {
//   case "apple":
//     console.log("사과");
//     break;
//   case "banana":
//     console.log("바나나");
//     break;
//   default:
//     console.log("찾는 과일 없음");
// }

// Object 생성 및 온점, 대괄호 표기법
// let objA = {};
// objA.numA = 1;
// objA["numB"] = 2;
// console.log(objA);

// let objB = new Object();
// console.log(objB);
// console.log(objA.numA);

// 객체의 값을 반복실행하고자 할 때
// const person = {
//   name: "David",
//   age: 20,
//   location: "Seoul",
// };

// // 객체 안에 있는 key값을 배열로 반환!!
// const keyArrs = Object.keys(person);
// console.log(keyArrs);

// keyArrs.forEach((item) => {
//   let value = person[item];
//   console.log(item, value);
// });

// 구조분해할당
// const test0 = {
//   name: "David",
//   age: 20,
//   skill: "JS",
// };

// // const name = test0.name;
// // const age = test0.age;
// // const skill = test0.skill;

// const { name, age, skill } = test0;
// console.log(name, age, skill);

// 단락회로평가
// const calcA = () => {
//   console.log("A");
//   return false;
// };

// const calcB = () => {
//   console.log("B");
//   return true;
// };

// console.log(calcA() && calcB()); // A false

// console.log(calcA() || calcB()); // A B true
// react는 기본적으로 브라우저를 통해서 앱을 여는 순간 => 컴포넌트가 무조건 마운트!!
// 가상돔 => 영화 데이터를 찾아오도록하는 fetch()
// 정상적으로 fetch()를 통해서 불러오는 영화 api 데이터를 찾아오지 출력하지 못함

// 찾아온 영화데이터를 가지고 약 3000픽셀 높이값을 가지고 있는 브라우저 화면을 채워야하는 상황 => 20개

// 로딩스피너
//console.log(movieData && data.title);

// 전개연산자
// const arrA = [1, 2, 3];
// const arrB = [4, 5, 6];

// const arrC = [arrA, arrB];
// console.log(arrC); //[Array(3), Array(3)] 중첩배열이 됨

// const arrD = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// const arrE = [...arrA, ...arrB];

// console.log(arrD); //[Array(3), Array(3)] 중첩배열이 됨
// console.log(arrE); //[1, 2, 3, 4, 5, 6]

// const objA = {
//   a: 1,
//   b: 2,
// };

// const objB = { c: 3 };
// const objC = {
//   objA,
// };
// console.log(objC); // {objA: {…}} 중첩배열

// const objD = {
//   ...objA,
// };
// console.log(objD); // {a: 1, b: 2}

// 배열 메서드 특집!!!
let food = ["짜장면", "피자", "치킨"];
// const newLength = food.push("탕수육");

// console.log(newLength); // 4
// push는 값을 추가 시키고 현재의 총 갯수를 반환시킴!!

// const removedItem = food.pop();
// console.log(removedItem); // 치킨
// console.log(food); // ['짜장면', '피자']

// const newLength = food.unshift("갈비찜");
// console.log(food, newLength); // ['갈비찜', '짜장면', '피자'] 3

// const removeItem = food.shift();
// console.log(removeItem); // 갈비찜
// console.log(food); // ['짜장면', '피자']

// const sliced = food.slice(0, 2);
// console.log(sliced); // ['짜장면', '피자']

// const sliced = food.slice(1);
// console.log(sliced); // ['피자', '치킨']

// const arrA = [1, 2];
// const arrB = [3, 4];
// const arrC = arrA.concat(arrB);
// console.log(arrC); // [1, 2, 3, 4]

// console.log(food.indexOf("짜장면")); // 0
// console.log(food.indexOf("피자")); // 1
// console.log(food.indexOf("치킨")); // 2

// console.log(food.includes("마라샹궈")); //false
// console.log(food.includes("피자")); //true

// find
// const arr = [
//   { name: "david" },
//   { name: "martin" },
//   { name: "romeo" },
//   { name: "juliet" },
// ];
// const element = arr.find((item) => item.name === "david");
// console.log(element); // {name: 'david'}

// console.log(arr); // 원본 건들지 않음

const arr = [
  { name: "슛돌이", hobby: "축구" },
  { name: "통키", hobby: "피구" },
  { name: "강속구", hobby: "야구" },
  { name: "태백산", hobby: "피구" },
];

// filter
// 실행문 : 바로 실행하므로 {}와 return이 필요 없음
// const filteredArr = arr.filter((item) => item.hobby === "피구");
// console.log(filteredArr);

// // 표현식문 : {}와 return 필요
// const filterArr1 = arr.filter((item) => {
//   return item.hobby === "피구";
// });
// console.log(filterArr1);
// console.log(arr); // 원본 데이터 보존

// map
// const newArr = arr.map((item) => item.name);
// console.log(newArr); // ['슛돌이', '통키', '강속구', '태백산']

// sort
// const arr1 = [10, 5, 3];
// arr1.sort();
// console.log(arr1); // [10, 3, 5] : 10은 앞의 1이 3보다 작으므로 앞으로 옴

// const compare = (a, b) => {
//   // if (a > b) return 1;
//   // else if (a < b) return -1;
//   // else return 0;

//   return a - b; // 오름차순 => [3, 5, 10]
//   //return b - a; // 내림차순 => [10, 5, 3]
// };

// arr1.sort(compare);
// console.log(arr1);

// join
// console.log(food.join("")); // 짜장면피자치킨
// console.log(food.join("_")); // 짜장면_피자_치킨

const arr3 = [1, 2, 3, 4, 5];
const result = arr3.reduce((acc, item) => acc + item, 0);
console.log(result); // 15
// acc는 최초 0(reduce의 오른쪽 값)의 값을 받고 item은 배열의 각각 item을 의미
