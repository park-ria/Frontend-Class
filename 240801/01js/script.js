// 함수 선언
// 호출할 때 전달하는 인자값, 함수 안에서 불러오는 값은 매개변수
// 인자 = 매개변수

// 일반함수 혹은 function함수
/*function calcSum() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(`1부터 10까지 더하면 ${sum}`);
}

calcSum();*/

// 익명함수
/*const calcSum = function () {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(`1부터 10까지 더하면 ${sum}`);
};

calcSum();*/

// 화살표(=> : 화살표 모양이 function 키워드를 대체할 수 있도록) 함수
/*const calcSum = () => {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(`1부터 10까지 더하면 ${sum}`);
};

calcSum();*/

/*function sum(a, b) {
  const result = a + b;
  alert(`두 수의 합은 ${result}`);
}
sum(1, 2);*/

/*const num = Number(prompt("숫자를 입력하세요!"));
function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  //console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
  return sum;
}

alert(`1부터 ${num}까지 더하면 ${calcSum(num)} 입니다!`);*/

// 기본 매개변수 -> 값을 안 받은 인자는 10으로 주겠다! 왼쪽부터 진행 됨
/*function multiple(a, b, c = 10) {
  console.log(a + b + c);
}
multiple(2, 4);*/

document.body.innerHTML += `<button id="btn">Click!</button>`;
const button = document.querySelector("#btn");
function display() {
  alert("클릭");
}

button.addEventListener("click", display);
