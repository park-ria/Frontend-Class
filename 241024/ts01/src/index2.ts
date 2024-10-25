// 함수
//기본 매개변수 타입
const func = (a: number, b: number): number => {
  return a + b;
};

const func1 = (name = "David"): void => {
  console.log(`name: ${name}`);
};
//func1(1); 안됨 문자열로 해야함

// 선택적 매개변수 타입
// 중요!  선택적 매개변수는 가장 마지막에 위치해야 함
const self = (name = "사용자", age: number, tall?: number): void => {
  console.log(`${age}세 ${name}님 반갑습니다!`);
  if (typeof tall === "number") {
    console.log(`${name}님의 키는 ${tall} 입니다.`);
  }
};

// 매개변수 갯수가 가변적일 때
const getItem = (...rest: number[]): number => {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
};

// 타입 별칭 생성 후 함수 시그니처 적용!
type Add = (a: number, b: number) => number;
const add0: Add = (a, b) => a + b;
const add1: Add = (a, b) => a - b;
const add2: Add = (a, b) => a * b;
const add3: Add = (a, b) => a / b;
