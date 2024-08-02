/*function greeting(timer) {
  console.log("안녕하세요");
}

const timer = setInterval(greeting, 2000);
clearInterval(timer);*/

/*
let counter = 0;
const timer = setInterval(() => {
  console.log("hi!");
  counter++;
  if (counter === 5) clearInterval(timer);
}, 2000);*/

// 재귀함수 호출
/*
let counter = 0;
let num = 0;
const testFnc = () => {
  num++;
  document.write(num, "<br/>");
  if (num === 10) return;
  testFnc();
};

testFnc();*/

// return() => 문장종결 x
// 함수가 연산 완료 후 값을 반환할 때 씀

setTimeout(() => {
  console.log("3초가 지났습니다.");
}, 3000);
