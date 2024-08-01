// 사용자에게 숫자 1개를 받습니다!
// 단, 무조건 1보다 큰 숫자를 받습니다.

// 사용자에게 받은 숫자를 기준으로 1부터 해당 숫자까지의 수들 가운데 짝수만 찾아서 더한 결과값을 콘솔창에 출력해주세요

const num = Number(prompt("1보다 큰 숫자를 입력해주세요"));
if (!num || num < 1) {
  alert("1보다 큰 숫자가 아닙니다. 숫자를 다시 입력해주세요.");
  location.reload();
} else {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) continue;
    sum += i;
  }

  alert(`숫자의 합은 ${sum}입니다`);
}
