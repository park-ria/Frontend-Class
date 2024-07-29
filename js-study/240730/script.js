let arr = [];
const numCheck = (num) => {
  if (num % 1 === 0 && num <= 100) {
    arr.push(num);
  }
};

for (let i = 0; i < 3; i++) {
  const num = prompt(`100이하의 자연수 3개를 입력해주세요!(${i + 1}/3)`);
  numCheck(num);
}

if (arr.length < 3) {
  alert("100이하의 정수가 아닙니다! 다시 입력해주세요!");
  location.reload();
} else {
  const result = arr.sort((a, b) => {
    return a - b;
  });
  alert(`제일 작은 숫자는 "${result[0]} 입니다!!!"`);
}
