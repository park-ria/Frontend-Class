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
const lottoButton = document.querySelector(".wrapper_lotto_btn");
const result = document.querySelector(".game_lotto_number");

const luckyNumber = {
  digitCount: 6,
  maxNumber: 44,
};

const startLotto = () => {
  const { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }

  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = "재추첨 하겠습니다!";
  }
};

lottoButton.addEventListener("click", startLotto);
