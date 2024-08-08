const userQuestion = prompt(
  "만보 걷기 시작한 날짜를 입력해주세요!",
  "2024-06-14"
);

const now = new Date().getTime();
const firstDate = new Date(userQuestion).getTime();
const passedTime = Math.round((now - firstDate) / (24 * 60 * 60 * 1000));

const result = document.querySelector("#result");
result.innerText = `${passedTime}`;
