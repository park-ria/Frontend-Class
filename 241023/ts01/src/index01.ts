// 콜백함수
const calc = (value: number, cb: (arg: number) => void): void => {
  let add = (a: number, b: number) => a + b;
  let multiply = (a: number, b: number) => a * b;

  let result = multiply(add(1, 2), value);
  cb(result);
};

calc(30, (result: number) => console.log(`result is ${result}`));

// 시그니처 함수
type NumberToNumber = (arg0: number) => number; //숫자를 받아서 숫자를 반환한다
const add = (a: number): NumberToNumber => {
  const _add = (b: number): number => {
    return a + b;
  };
  return _add;
};
const result = add(1)(2);
console.log(result);

//고차함수
const add1 =
  (a: number): ((arg0: number) => number) =>
  (b: number) =>
    a + b;
const result1 = add1(1)(2);
console.log(result1);
