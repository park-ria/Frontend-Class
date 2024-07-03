// 1. 웹 브라우저에게 클릭할 이벤트 대상을 알려준다.
// querySelector()
// addEventListner()

// 2. 클릭했을 때, css로 정의해놓은 가상클래스를 원하는 요소에 적용시킨다.
// classList
// add() || remove()
// button => 기본속성 : 서버에 데이터 값을 주려는 속성이 있음 -> 기본 속성을 방해해야함
// preventDefault()

// 2_1. 가상클래스 = filledA & filledB

//const femaleBtn = document.querySelector("#femaleBtn"); // 여러 속성을 찾으므로 선택자를 넣어야 함
const femaleBtn = document.getElementById("femaleBtn"); // id밖에 못 찾으므로 선택자 없어도 됨
const maleBtn = document.getElementById("maleBtn");

femaleBtn.addEventListener("click", (e) => {
  e.preventDefault(); // 서버로 데이터 값을 보내고자하는 속성을 없앰
  femaleBtn.querySelector("i").classList.toggle("filledA"); // toggle add와 remove를 번갈아가면서
  maleBtn.querySelector("i").classList.remove("filledB");
});

maleBtn.addEventListener("click", (e) => {
  e.preventDefault(); // 서버로 데이터 값을 보내고자하는 속성을 없앰
  maleBtn.querySelector("i").classList.toggle("filledB");
  femaleBtn.querySelector("i").classList.remove("filledA");
});
