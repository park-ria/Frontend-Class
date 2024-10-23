// 타입 구조도
// 모든 타입 슈퍼타입 & 서브타입
// 타입 수용 => 타입 호환성

let num1: number = 10;
let num2: 10 = 10; //리터럴 타입 : 직접 선업하는 타입

num1 = num2; // 문제없음
//num2 = num1; // 문제있음 // 리터럴 타입은 서브 타입이라서 슈퍼 타입의 값을 받을 수 없음

// 타입스크립트에 기본적으로 내장되어있는 내장타입 > 리터럴 타입
// 서브타입을 슈퍼타입으로 호환시키는 액션을 "업캐스팅"이라고 함, 대부분 허용
// 슈퍼타입을 서브타입으로 호환시키려고 하는 액션을 "다운캐스팅"이라고 함, 거의 대부분 불가(any만 가능)

interface Animal {
  name: string;
  color: string;
}

let animal: Animal = {
  name: "고양이",
  color: "white",
};

interface Dog {
  name: string;
  color: string;
  breed: string;
}

let dog: Dog = {
  name: "강아지",
  color: "brown",
  breed: "진돗개",
};

animal = dog; //됨 -> animal은 2개이고 dog는 3개인데 슈퍼타입은 상대적으로 받아 들일 수있으면(수용) 슈퍼타입임 animal은 breed가 없어도 되지만 dog는 breed가 있어야 함
//dog = animal; //에러

// animal은 dog보다 슈퍼타입
// dogsms animal보다 서브타입

interface Book {
  name: string;
  price: number;
}

let book: Book;

interface ProgrammingBook {
  name: string;
  price: number;
  skill: string;
}

let programmingBook: ProgrammingBook = {
  name: "TS",
  price: 33000,
  skill: "Typescript",
};

book = programmingBook; //됨
//programmingBook = book; //안됨
//Book이 ProgrammingBook 보다 슈퍼 타입임.. 슈퍼타입은 서브 타입을 수용하기 때문에 직접적으로 객체에 슈퍼타입을 넣을 수 있을까?

// let programmingBook2: Book = {
//   name:"TS",
//   price: 33000,
//   skill: "Typescript"
// };
// 에러남
// 직접적으로 슈퍼타입을 선언하면 skill이 오류남, 직접적으로 서브타입의 형식을 가지고 있는 객체에 슈퍼타입을 지정할 수 없음 -> 변수에 재할당하고 슈퍼타입을 지정할 수 있음

// 초과 프로퍼티 검사
let book3: Book = programmingBook;
// 이렇게 변수로 슈퍼타입으로 지정 할 수 있음

// 대수타입
// 복수의 타입을 합성하거나 교차한 형태의 타입을 새롭게 만든 것
// 합집합의 형태로 타입 : union 타입
// 교집합의 형태로 타입 : intersection 타입

// union 타입(합집합)
let a: string | number;
a = 1;
a = "Hello";

type Dog1 = {
  name: string;
  color: string;
};

type Person1 = {
  name: string;
  language: string;
};

type Union1 = Dog1 | Person1;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
}; // Union1이 합집합이여서 가능

// let union4: Union1 = {
//   name: "",
// }; // 에러
// Dog1과 Person1의 교집합은 name만 있는 것은 합집합인 Union1으로 선언할 수 없음..
// union 타입은 합집합이라는 개념보다는 Dog1, Person1, Dog1+Person1 형태임..
// 그래서 name 하나만 존재하는 것은 별개의 타입이 됨

type Intersection = Dog1 & Person1;
let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};
// Intersection은 Dog1+Person1 형태

interface Person01 {
  name: string;
  age: number;
}

// 타입 단언
// let person01: Person01 = {};
// person01.name = "";
// person01.age = 20;
// 이렇게 하면 에러남

let person01 = {} as Person01;
person01.name = "";
person01.age = 20;
// as를 써서 타입 단언을 하면 에러가 안남

// type Dog01 = {
//   name: string;
//   color: string;
// };

// let dog01:Dog01 = {
//   name: "뽀삐",
//   color: "brown",
//   breed: "똥개",
// };
// 슈퍼타입을 서비타입에 직접적으로 넣으면 에러남 -> 초과프로퍼티 검사 통과 못함

type Dog01 = {
  name: string;
  color: string;
};

let dog01: Dog01 = {
  name: "뽀삐",
  color: "brown",
  breed: "똥개",
} as Dog01;
// 프로퍼티가 초과했지만 as로 단언을 하면 가능.

// 타입 단언은 any 다음으로 치트키
let num3 = 10 as never;
// 타입을 추론해서 숫자(number) 10이 됐지만, as로 타입을 단언하면(약속) never 타입이 됨
// 원래는 never에 10 못 들어감

// 타입 단언을 실행시키려면 반드시 다음의 조건이 필요
// 상호간 슈퍼 & 서브타입이어야 함
let num4 = 10 as unknown;
//let num5 = 10 as string; // 타입 단언이 안되는 경우는 타입 구조도에서 같은 항렬일 때 안됨
let num5 = 10 as unknown as string; // 같은 항렬이 안되므로 다른 항렬의 타입으로 단언했다가 하면 됨.. 근데 잘 안씀

let num6: 10 = 10; // 리터럴 타입으로 숫자 10만 들어오게 함
let num7 = 10 as const; // const는 상수여서 값이 변하지 않으므로 상수로 단언하면 리터럴 타입처럼 쓸 수 있음

// 타입 가드 = 타입좁히기
const func = (value: number | string) => {
  //value.toFixed(2); //'string' 형식에 'toFixed' 속성이 없습니다.
  //value.toUpperCase(); //'number' 형식에 'toUpperCase' 속성이 없습니다.

  if (typeof value === "number") {
    value.toFixed(2); // 소수점 두자리까지
  } else if (typeof value === "string") {
    value.toUpperCase();
  }
};
