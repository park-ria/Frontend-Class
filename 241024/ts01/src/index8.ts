// const arr: number[] = [1, 2, 3];
// const newArr = arr.map((it) => it * 2);
// console.log(newArr); //[ 2, 4, 6 ]

// 명령형 방식 프로그래밍 코드
// 선언형 방식 프로그래밍 코드

// const map = (
//   arr: unknown[],
//   callback: (item: unknown) => unknown
// ): unknown[] => {};// unknown은 값을 받기만 하고 주지 않기 때문에 에러남
// 그래서 제네릭 필요

// high-level 함수(고급합수)
// 선언형 방식
const map = <T>(arr: T[], callback: (item: T) => T): T[] => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
};

// lov-level 함수(저급함수)
// 명령형 방식
const arrTest = [1, 2, 3];
const result = arrTest.map((item) => item);
