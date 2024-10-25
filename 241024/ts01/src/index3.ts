type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 업캐스팅
//b = a;
// 슈퍼타입은 서브타입 호환 가능
// number가 슈퍼타입이므로 a에 리터럴인 서브타입 b가 들어올 수 있다

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

//c = d;
d = c; // 다운 캐스팅 // 서브타입이 슈퍼타입 호환 가능

type Animal = {
  name: string;
}; // 슈퍼타입

const animalFunc = (animal: Animal): void => {
  console.log(animal.name);
};

type Dog = {
  name: string;
  color: string;
}; // 서브타입(값이 많은 수록 서브타입)

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

//animalFunc = dogFunc;
dogFunc = animalFunc;
// 함수의 매개변수인 경우에만 유일하게 다운 캐스팅이 되는 예외적 상황이다
// 서브타입이 슈퍼타입으로 호환이 가능함(다운 캐스팅)
// 함수 매개변수의 값은 거의 유일하게 다운캐스팅이 허용되는 상황!!!

// 매개변수의 개수가 다른경우!!!
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
//func2 = func1;

// 함수 시그니처를 실제 구현되는 함수 위에다가 사전 작성 => 함수 오버로딩
// 함수의 시그니처를 오버로딩 시킨 상황
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 함수 선언부
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// 함수 실행 & 호출
func(1);
//func(1, 2); //오버로드가 되지 않아서 안됨
func(1, 2, 3);

// 함수를 활용한 타입 가드 방법
type Dog1 = {
  name: string;
  isBark: boolean;
};

type Cat1 = {
  name: string;
  isScratch: boolean;
};

type Animal1 = Dog1 | Cat1;

// 서로소 방식
// const warning = (animal:Animal) => {
//   if("isBark" in animal){
//     console.log(animal.isBark? "짖습니다!":"안짖어요!");
//   } else if ("isScratch" in animal) {
//     console.log(animal.isScratch? "할큅니다!":"안할큅니다!");
//   }
// };

const isDog = (animal: Animal1): animal is Dog1 => {
  return (animal as Dog1).isBark !== undefined;
  // as Dog1를 써서 단언해서 isBark는 true, false이므로 무조건 결과가 true 하나 나올 수 밖에 없음
};
// 무조건 참이니까 반환값은 animal is Dog1야라고 단언

const isCat = (animal: Animal1): animal is Cat1 => {
  return (animal as Cat1).isScratch !== undefined;
};

const warning = (animal: Animal1) => {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다!" : "안짖어요!");
  } else {
    console.log(animal.isScratch ? "할큅니다!" : "안할큅니다!");
  }
};
