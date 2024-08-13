// 객체생성 => 선언

/*const book1 = {
  title: "자바스크립트",
  level: "normal",
  study: "done",
};*/

// 객체 안에 담겨있는 데이터를 찾아
// 프로퍼티(속성)에 접근 2가지 방법
// 1) 온점 표기법
// 2) 대괄호 표기법

/*console.log(book1.title);
console.log(book1["level"]);

book1.study = "ready";
console.log(book1);

book1.master = "David";
console.log(book1);*/

// JS 어딘가에 Class 생성자함수를 활용해서 이미 누군가가 객체를 만들어놓았음

// class 생성자함수를 통해서 이미 생성되어진 요소를 가져와서 사용할 때에는 new 예약어 + prototype 함수를 활용해야 함

// prototype을 통해서 생성된 값을 인스턴스 객체

// 최초에 선언한 벼수의 값으로 할당된다

/*let book2 = new Object();
book2.title = "타입스크립트";
book2.author = "김지선";
book2.bestSeller = "Yes";
console.log(book2);*/
//console.log(typeof book2);

/*let book3 = new Array();
console.log(book3);
console.log(typeof book3);*/

/*delete book2.bestSeller;
console.log(book2);*/

// 객체 중첩
// const student = {
//   name: "전진우",
//   age: 20,
//   favorite: "game",
//   score: {
//     history: 85,
//     science: 90,
//     average: function () {
//       return (this.history + this.science) / 2;
//     },
//     /*average: () => {
//       return (student.score.history + student.score.science) / 2;
//     },*/
//     like() {
//       alert(`전진우님은 컴퓨터를 좋아합니다!`);
//     },
//   },
// };

// function -> 직계 부모 요소를 찾아 올 수 있음 -> this를 치면 부모인 student.score를 가져옴
//화살표함수 -> 직계부모 찾아올 수 없음 -> this치면 window가져옴

// console.log(student.score.history);
// console.log(student.score.average());

// 함수와 배열은 객체의 자식이다 => 객체지향 언어다
// 객체 안에 property 일부로서 탄생된 함수는 method라고 칭한다!!!
//student.score.like();
