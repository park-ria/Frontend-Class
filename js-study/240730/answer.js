const a = Number(prompt("첫번째 숫자를 입력하세요!"));
const b = Number(prompt("두번째 숫자를 입력하세요!"));
const c = Number(prompt("세번째 숫자를 입력하세요!"));

const solution = (a, b, c) => {
  let answer;
  if(a<b) answer=a;
  else answer=b;
  if(c<answer) answer=c; 
  return answer;
}

console.log(solution(a, b, c));