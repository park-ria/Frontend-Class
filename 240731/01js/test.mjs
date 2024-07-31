// 사용자로부터 태어난 년도를 받으세요
// 태어난 년도를 기준으로 나이가 몇살인지 result 공간에 출력
// innerText 활용
const btn = document.querySelector("button");
const calc = () => {
  const birthYear = Number(
    prompt("당신이 태어난 년도를 입력해주세요.", "2000")
  );
  const result = document.querySelector("#result");
  result.innerText = `당신의 나이는 ${
    new Date().getFullYear() - birthYear + 1
  }입니다!`;
};

btn.addEventListener("click", calc);
