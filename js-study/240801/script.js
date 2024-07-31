// 유효한 자연수 3개 입력받기
const trglArr = [];
for (let i = 0; i < 3; i++) {
  const num = Number(
    prompt(`삼각형을 만들기 위한 ${i + 1}번째 변의 길이를 입력해주세요`),
    "12"
  );
  if (!num || num < 1) {
    alert(
      "자연수가 아닙니다.\n자연수는 0과 음수가 아닌 숫자를 의미합니다. 다시 입력해주세요!"
    );
    location.reload();
    break;
  }
  trglArr.push(num);
}

// 오름차순으로 숫자 정렬
const sortArr = trglArr.sort((a, b) => {
  return a - b;
});

console.log(sortArr[0] + sortArr[1] < sortArr[2] ? "YES" : "NO");
