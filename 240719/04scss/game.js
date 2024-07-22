// 끝말잇기 게임

// 1. 제시어의 끝단어 확인
// 1_1. 컴퓨터에게 최초의 제시어가 무엇인지 알려줘야 함
// 1_2. 3_1에서 이벤트의 시작을 알리는 "입력버튼"이 무엇인지 알려줘야 함

// 2. 끝단어로 시작하는 단어를 입력
// 2_1. 사용자가 입력한 단어 무엇인지를 알아야 함
// 2_2. 끝단어로 시작하는 단어 == 사용자가 입력한 단어

// 3. 단어 입력 후 입력버튼
// 3_1. 입력버튼이 클릭 -> 검증(*이벤트)

// 4. 문제 여부 판단 -> 문제없다 || 문제있다 출력
// 4_1. 조건에 따라서 값을 어떻게 출력

// form태그 안의 submit태그는 click 이벤트를 쓰지 않고, submit을 쓴다!!!!!!!!
/*const button = document.querySelector(".search");
button.addEventListener("click", (e) => {
  e.preventDefault();
});*/

// submit button을 감싸고있는 form 태그를에 submit 이벤트를 줘야 함
// word game
const gameStart = (e) => {
  e.preventDefault();
  let word = document.querySelector("#word").innerText;
  let myword = document.querySelector("#myword").value;
  let lastword = word[word.length - 1];
  let firstword = myword[0];
  if (lastword === firstword) {
    document.querySelector("#word").innerText = myword;
    document.querySelector("#result").innerText = "정답입니다!";
  } else {
    document.querySelector("#result").innerText = "틀렸습니다!";
  }

  document.querySelector("#myword").value = "";
};

const button = document.querySelector(".word_text form");
button.addEventListener("submit", gameStart);

// lotto game
// 1부터 45까지의 6개의 숫자가 중복없이 랜덤으로 동시에 추출되어야 함

// 1.클릭 버튼이 무엇인지를 컴퓨터에게 알려줘야 함

// 2. 클릭 버튼 클릭 시, 숫자 생성되어야 함(*이벤트)

// 3. JS > 내장 객체 > 숫자를 랜덤으로 생성해주는 함수
// 3_1. random() => 0~1미만의 실수 & 난수 생성
// (*실수 : 소수점을 가지고 있는 숫자)
// (*난수 : 불규칙적으로 숫자를 생성하는 행위)
// 소수점을 없애야 한다 : floor() => 소수점을 버림, ceil() => 소수점을 올림, round() => 소수점을 반올림

// 4. 중복x
// 4_1. set() 클래스 => 무작위로 생성된 숫자를 배열에 한개씩 담을 예정 => 중복된 값이 생성된 경우, 1개로 합쳐주는 역할
// 4_2. 6개의 숫자 완성 => 2번째 & 4번째 숫자가 같은 경우 문제 => 6개 이하의 숫자가 생성 됨
// 조건문 재추첨!

const lottoButton = document.querySelector(".wrapper_lotto_btn");
const result = document.querySelector(".game_lotto_number");

const luckyNumber = {
  digitCount: 6,
  maxNumber: 44,
};

// 클래스 생성
/*class LottoTest {
  //생성자
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

// 클래스를 통해서 만들어진 함수 -> 프로토타입 함수 -> new 뒤에 new LottoTest(300, 150);
const lottoTest2 = new LottoTest(300, 150);*/

const startLotto = () => {
  // 구조분해할당
  const { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
    // 0.9999999999 * 44 => 0 ~ 44 => +1 해서 1~45
  }

  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
    // set은 객체와 배열 둘다 포함 index를 갖고있음. 그래서 서로 비교 가능
    // set은 단순 객체 같지만 index를 갖기때문에 그렇지 않음 -> 문자열이 아니기 때문에 바로 출력할 수 없음. -> 문자열로 변환 시켜서 출력해야함
    // [...myNumber] 전개 연산자 구문을 써서 myNumber 변수라는 값을 문자처럼 식별하기 위해서 씀
    // `${}` -> 리터럴 함수를 써서 변수를 문자처럼 인식해서 찾아오겠다
  } else {
    result.innerText = "재추첨 하겠습니다!";
  }
};

lottoButton.addEventListener("click", startLotto);
