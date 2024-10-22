// TS 타입
// 기본 제공 타입
// number, string, boolean, object
// unkown, any, null, undefied, void, symbol, never.....

// 점진적 타입 시스템 => 타입추론 => 타입주석을 입력하지 않아도 타입 정의
let num: number = 1;
num = 10;

let str: string = "Hello";
str = "World";

let bool: boolean = true;
let obj = { name: "David" };

// 다양한 종류의 타입 가운데, 치트키 역할
// any는 모든 타입을 수용할 수 있음
let sample: any = 0;
sample = "Hello";

// undefined : undefined만 수용 가능한 제일 엄격한 타입
let sample01: undefined = undefined;
sample01 = undefined;

let sample02: unknown = 10;
sample02 = true;

// 배열 타입
const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["David", "Peter"];
const boolArr: Array<boolean> = [true, false, true];

// union 타입
const multiArr: (string | number | boolean)[] = [1, "hello", true];

// 중첩배열
const doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 길이 & 타입이 고정된 배열 = Tuple타입
const tup1: [number, number] = [1, 2];
tup1.push(1); // 튜플은 고정 값이기 때문에 추가되지 않음

const users: [string, number][] = [
  ["David", 1],
  ["Romeo", 2],
  ["Juliet", 3],
  ["Peter", 4],
];
