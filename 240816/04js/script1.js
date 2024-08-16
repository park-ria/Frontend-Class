/*let pets = ["dog", "cat", "mouse"];
console.log(pets.length);
console.log(pets);
console.log(pets[0]);
pets[0] = "hamster";
console.log(pets);*/

// 배열 => 이터러블 객체
// 이터레이터 요소
// 제너레이터 // map & set
// 반복문

// for // for of // forEach
// 배열 선언 값
// 1) 복수형
// 2) 블록변수 값
//const colors = ["red", "green", "blue", "white", "black"];

/*for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}*/
// 초기값 // 범위 // 증감

/*for (let color of colors) {
  console.log(color);
}

colors.forEach((color, index) => {
  console.log(`color[${index}] : ${color}`);
});*/

/*colors.forEach((color, index, array) => {
  console.log(`[${array}][${index}]:${color}`);
});*/

// const vegitable = ["양상추", "토마토", "피클"];
// const meat = ["불고기"];

// const meatBurger = vegitable.concat(meat);
// console.log(meatBurger); //['양상추', '토마토', '피클', '불고기']
// console.log(meat.concat(vegitable)); //['불고기', '양상추', '토마토', '피클']
// console.log(vegitable.concat(meat, "빵")); //['양상추', '토마토', '피클', '불고기', '빵']

// const cheese = ["모짜렐라", "슈레드"];

// //전개연산자
// const cheeseBurger = [...vegitable, ...cheese, "빵"];
// console.log(cheeseBurger); //['양상추', '토마토', '피클', '모짜렐라', '슈레드',빵]

/*let numbers = [6, 9, 3, 21, 18];
console.log(numbers);
console.log(numbers.reverse());*/

// let week = ["sun", "mon", "tue"];
// let values = [5, 20, 3, 11, 4, 15];

// 1. 배열 선언할 때, 변수명 복수
// 2. 일반 for문 선언, 블록변수 0dmfh tlwkr
// 3. 배열을 담는 변수를 선언할 때, const VS let
// => 배열의 특정 메서드 함수들 => 새로운 배열을 생성해주는 메서드 함수
// => 빈 배열 생성 후 push나 shift를 값을 추가하는 행위 많음

// console.log(week); // ['sun', 'mon', 'tue']
// console.log(week.sort()); // ['mon', 'sun', 'tue'] 알파벳 오름차순으로 출력 됨
// console.log(values); // [5, 20, 3, 11, 4, 15]
// console.log(values.sort()); // [11, 15, 20, 3, 4, 5] 앞자리 오름차순으로 출력 됨

// sort => 개발자가 정의하고자 하는 함수를 콜백함수로 반드시 입력!!!

// values.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   if (a === 0) return 0;
// });
// console.log(values); // [3, 4, 5, 11, 15, 20]

// 오름차순 축약
// values.sort((a, b) => {
//   return a - b;
// });
// console.log(values); // [3, 4, 5, 11, 15, 20]

// 내림차순
// values.sort((a, b) => {
//   return b - a;
// });
// console.log(values); // [20, 15, 11, 5, 4, 3]

// let animals = ["lion", "bear", "bird"];
// console.log(animals); //['lion', 'bear', 'bird']
// animals.pop(); // 뒤 항목 제거
// console.log(animals); //['lion', 'bear']
// animals.push("tiger"); // 뒤에 추가
// console.log(animals); //['lion', 'bear', 'tiger']

// let fruits = ["apple", "pear", "banana"];
// fruits.shift(); // 앞 항목 제거
// console.log(fruits); //['pear', 'banana']

// fruits.unshift("cherry"); // 앞 항목 추가
// console.log(fruits); //['cherry', 'pear', 'banana']

let subjects = ["html", "css", "javascript", "react", "typescript"];
//console.log(subjects.splice(2)); // 2번부터 끝까지 출력 ['javascript', 'react', 'typescript']

let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
//console.log(week.splice(1, 5)); // splice(시작인덱스, 출력 갯수);  //['mon', 'tue', 'wed', 'thu', 'fri']
//week.splice(1, 5, "holiday");
//console.log(week); // 1번째 인덱스부터 5개를 들어내고 그 자리에 holiday를 넣는다
//['sun', 'holiday', 'sat']
week.splice(4, 0, "holiday");
console.log(week); //['sun', 'mon', 'tue', 'wed', 'holiday', 'thu', 'fri', 'sat']
// 4번째 인덱스부터 0개를 들어내고 holiday를 넣는다
// splice는 원본 값은 변경함!!

let colors = ["red", "green", "blue", "white", "black"];
console.log(colors.slice(2)); // 시작 인덱스부터 끝까지 // ['blue', 'white', 'black']
console.log(colors.slice(1, 4)); // 1번째 자리부터 4+1=5번째 자리 까지 //['green', 'blue', 'white']
console.log(colors); //['red', 'green', 'blue', 'white', 'black']
// slice는 원본 값을 변경하지 않음!!
