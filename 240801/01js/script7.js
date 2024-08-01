// 사용자로부터 2개의 숫자를 받습니다!
// 2개의 숫자의 최대공약수를 찾아서 콘솔창에 출력!
// 최대공약수란? 복수의 숫자를 동시에 나눌 수 있는 수 중에서 가장 큰 수
// 예를 들어 4와 12의 최대공약수는 4입니다!

const num1 = Number(prompt("최대공약수를 구할 숫자를 입력해주세요"));
const num2 = Number(prompt("최대공약수를 구할 숫자를 입력해주세요"));

function getGCD() {
  const max = num1 > num2 ? num1 : num2;
  let gcd = 0;
  for (i = 0; i < max; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

alert(`${num1}와 ${num2}의 최대공약수 : ${getGCD()}`);
