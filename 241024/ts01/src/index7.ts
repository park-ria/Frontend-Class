// 제네릭이 필요한 상황
// General : 종합적인 타입을 정의하고 싶을 때 사용
// 값이 뭐가 들어올지 모를 때 사용

// 왜 any와 unknown은 안되는가?
// 1. any가 안되는 이유
// const func = (value: any) => {
//   return value;
// };
//const num = func(10);
//console.log(num.toUpperCase());
// any를 쓰면 숫자를 toUpperCase를 할 수 없는데 오류가 안남

// 2. unknown이 안되는 이유
// const func = (value: unknown) => {
//   return value;
// };
//const num = func(10);
// if(typeof num === "string") {
//   console.log(num.toUpperCase());
// }
// unknown은 그냥 num.toUpperCase() 해주면 에러가 뜨지만 타입가드를 매번 해줘야 함

// func("David");
// func([1, 2]);
// func({ name: "ria", age: 20 });

// 제네릭 사용
const func = <T>(value: T): T => {
  return value;
};

// 다중 매개변수 제네릭 사용방법
const swap = <T, U>(a: T, b: U) => {
  return [b, a];
};
const [a, b] = swap("1", 2);
//console.log(a, b);//2 1

const funcArray = <T>(data: T[]): T => {
  return data[0];
};

let num = funcArray([0, 1, 2]);
console.log(num); //0

let str = funcArray([1, "Hello", "World"]);
console.log(str); //1

const returnFirst = <T>(data: [T, ...unknown[]]): T => {
  return data[0];
  // return data[1]로 하면 에러남=> 반환값을 T로 줬는데 첫번째 값만 T를 선언해놨기 때문에 나머지 자리에서는 에러가 남
};
const str1 = returnFirst([1, "hello", "world"]);
console.log(str1); //1

// 이터러블한 매개변수만 받고 싶을 때(배열, 스트링, 객체)
const func4 = <T extends { length: number }>(data: T): number => {
  return data.length;
};
console.log(func4("123")); //3
console.log(func4([1, 2, 3])); //3
console.log(func4({ length: 1 })); //1
//console.log(func4(10)); // 숫자는 이터러블하지 않으므로 안됨
