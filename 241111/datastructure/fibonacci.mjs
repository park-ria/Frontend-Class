// 피보나치 수열은 1, 1로 시작해서 앞의 두 숫자의 합이 다음 숫자가 됨
// 1, 1, 2, 3, 5, 8 ...

const fibonacci = (n) => {
  if (n === 0 || n === 1) return n;
  return fibonacci(n - 2) + fibonacci(n - 1);
};

// memoization
const fibonacci2 = (n, memo) => {
  if (n === 0 || n === 1) return n;
  if (memo[n] == null) {
    memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
  }
  return memo[n];
};

let start = new Date();
console.log(fibonacci(5));
let end = new Date();
console.log(`fibonacci 함수 실행시간: ${end - start}ms`);

start = new Date();
console.log(fibonacci2(5, []));
end = new Date();
console.log(`fibonacci2 함수 실행시간: ${end - start}ms`);
