// 배열 타입 정의
const numArr: number[] = [1, 2, 3]; // 숫자 배열 타입
const strArr: string[] = ["hello", "world"]; // 문자열 배열 타입
const boolArr: boolean[] = [true, false, true]; // 불리언 배열 타입
const genericArr: Array<boolean> = [true, false, true]; // 제네릭 배열 타입
let multiArr: (number | string)[] = [1, "hello"]; // 유니온 배열 타입
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
]; // 중첩 배열
let tup1: [number, number] = [1, 2]; // 튜플 타입 배열 : 길이와 타입이 고정된 배열
//tup1 = [1,2,3]; // 2개만 받아야 하는데 그 이상이나 이하로 재 할당할 때 에러가 뜸
tup1.push(5);
console.log(tup1); // [1,2,5] 라고 결과 뜸 저렇게 푸시했을 때는 막을 수 없음

// 객체 & 함수 타입 정의
// 1.구조적 타입 시스템을 적용
const userObject: object = {
  id: 1,
  name: "David",
};
//const result1 = user.id; //에러

const user: {
  id?: number; //?는 선택적 타입
  name: string;
} = {
  id: 1,
  name: "David",
};
const result2 = user.id;

let config: {
  readonly apikey: string; //readonly는 읽기전용으로만 써서 밖에서 접근 못함
} = {
  apikey: "12345678923",
};
//config.apikey = "Hacked"; //  안됨

// 2.타입 별칭, 앞에 대문자, 중복선언 불가
type User = {
  id: number;
  name: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "David",
  location: "Seoul",
};

let user2: User = {
  id: 2,
  name: "Peter",
  location: "Incheon",
};

const fnc = () => {
  type User = {};
};
// 전역이 아닌 지역에서는 타입별칭명 중복 가능

// 3.인덱스 시그니처
// 타입별칭으로 어떤 타입을 정의 => 하위 요소의 모든 타입의 형태가 동일한 경우
type CountryCodes = {
  [key: string]: string;
};

const countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

// 4.interface 타입 : 객체의 타입 중 최우선의 방법, 추천
// 외부 확장성 용이 implements, extends 가능
interface User01 {
  id: number;
}

interface Person {
  name: string;
  age: number;
  etc?: boolean;
}

const person01: Person = {
  name: "Peter",
  age: 20,
};

const person02: Person = {
  name: "Peter",
  age: 20,
  etc: true,
};

class Person1 {
  name: string;
  age: number;
}
const person03: Person1 = new Person1();
person03.name = "Peter";
person03.age = 20;

console.log(person03);

// class Person2 {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// public 접근제어를 쓰면 아래처럼 쓸 수 있음
class Person2 {
  constructor(public name: string, public age?: number) {}
}

const person04 = new Person2("Romeo", 20);
console.log(person04);

interface Person5 {
  name: string;
  age: number;
}

// 반드시 쓰고자 할 때 implements를 쓰면 무조건 써야함
class Person6 implements Person5 {
  constructor(public name: string, public age: number) {}
}

const person05 = new Person6("Juliet", 20);
console.log(person05);

// 추상클래스
// 어떤 클래스를 정의하기 위해서 추상적인 개념을 만들어 놓고, 해당 추상적인 개념을 모티브로 클래스를 선언 & 생성

// 추상적 개념 선언
abstract class Person7 {
  constructor(public name: string, public age: number) {}
}

class Person8 extends Person7 {
  constructor(name: string, age: number, location: string) {
    super(name, age);
  }
}
// implments와 extends는 다르다. implements는 무조건 선언한 대로 반드시 써야하므로 추가할 수 없지만 extends는 상속받아서 추가할 수 있음

const person06 = new Person8("Bruce", 20, "New york");
console.log(person06);

// static 속성
class TestA {
  static initailValue = 1;
}

const test01A = TestA.initailValue; // static을 써서 바로 찾아올 수 있음
console.log(test01A);

// 타입 단언
let obj: object = {
  name: "David",
};
//obj.name; // 안됨 objcect에서 name을 가져 올 수 없음!!! 그러나 타입을 단언하면 가능

// 타입 단언 1
interface Nameable {
  name: string;
}

let name1 = (<Nameable>obj).name;
name1;

// 타입 단언2
let name2 = (obj as Nameable).name;
console.log(name1, name2);

// Enum 타입
// const userInfo1 = {
//   name: "David",
//   role: "ADMIN",
//   id: 0,
// };
// const userInfo2 = {
//   name: "David",
//   role: "USER",
//   id: 1,
// };
// const userInfo3 = {
//   name: "David",
//   role: "GUEST",
//   id: 2,
// };

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const userInfo1 = {
  name: "David",
  role: Role.ADMIN,
};
const userInfo2 = {
  name: "David",
  role: Role.USER,
};
const userInfo3 = {
  name: "David",
  role: Role.GUEST,
};
console.log(userInfo1, userInfo2, userInfo3); //{ name: 'David', role: 0 } { name: 'David', role: 1 } { name: 'David', role: 2 }

// any
//let test01 = 10;
//test01 = "Hello"; // 숫자를 선언해놓고 문자를 받을 수 없음

let test01: any = 10;
test01 = "Hello"; // any를 쓰면 가능

// unknown
let test02: unknown;
test02 = "World";
test02 = 1;
test02 = () => {};

let test03 = test01;
let test04: number = 20;
test04 = test01;
//test04 = test02;
//any는 되고 unknown은 안됨 => unknown은 값을 무한정으로 받아올 순 있으나 값을 재할당 할 수 없으므로 unknown을 다시 쓸 수 없음. any는 값도 아무거나 받고 재할당 할 수 있음 그래서, 타입이 뭔지 모를땐 any를 씀

// 타입 제한 적용 : unknown을 쓰고자 할 때는 타입을 제한 해주면 쓸 수 있다.
if (typeof test02 === "number") {
  test04 = test02;
}

//void : 함수에 반환 값이 없을 때 씀!
const func1 = (): string => {
  return "hello";
};
//함수의 반환 값을 정의할 때는 매개변수 뒷 자리에 선언함

const func2 = (): void => {
  console.log("World");
};

let test05: void;
//test05 = 1; // 에러
// void로 선언 한 타입은 undefined만 됨

test05 = undefined; // 됨
// undefined는 void의 하위의 sub타입이라서

// never 타입 : 어떤 값도 정의 할 수 없는 경우에 씀
let test06: never;
// test06 = 1;
// test06 = "Hello";
// test06 = true;
// test06 = undefined;
// test06 = any;
// test06 = null;
// test06 = unknown;
// 모두 에러

// 함수 타입 기본 방식
// 매개 변수에도 타입을 선언해야 함. 뭘 받을지 모르겠으면 any선언
// 함수의 반환 값을 정의할 때는 매개변수 뒷 자리에 선언함
const add = (a: number, b: number): number => {
  return a + b;
};

const printMe1 = (name: string, age: number): void => {
  console.log(`name: ${name}, age: ${age}`);
};
printMe1("ria", 34); //name: ria, age: 34 출력

// 함수 시그니처(고차 합수)
const printMe2: (arg01: string, arg02: number) => void = (name, age) => {
  console.log(`name: ${name}, age: ${age}`);
};

// 타입 별칭 + 함수 시그니처
type PrintMeFnc = (name: string, age: number) => void;
const printMe3: PrintMeFnc = (name, age) => {
  console.log(`name: ${name}, age: ${age}`);
};

// 타입 가드 설정
interface Nameable02 {
  name: string;
}

// 타입 가드 1
const getName = (o: Nameable02) => {
  return o !== undefined ? o.name : "Loading...";
};

const dataResult = getName(undefined);
console.log(dataResult); //Loading...
console.log(getName({ name: "ria" })); //ria

// 타입 가드 2
const getName2 = (o: Nameable02 | undefined) => {
  return o !== undefined ? o.name : "Loading...";
};
