interface Person {
  name: string;
  age?: number;
  sayHi?: () => void;
}

// const person: Person = {
//   name: "David",
//   sayHi: () => {
//     console.log("Hi");
//   },
// };

// const person01: Person = {
//   name: "Peter",
//   age: 20,
// };

type Type1 = number | string;
type Type2 = number & string;

// interface Person {
//   name: string;
//   age: number;
// } | number;

//인터페이스는 유니온처럼 쓸 수 없음

type Type3 = number | string | Person;
const person: Type3 = {
  name: "David",
  age: 20,
};

//extends
// interface Animal {
//   name: string;
//   age: number;
// }

/*interface Dog {
  name: string;
  age: number;
  isBark: boolean;
}

interface Cat {
  name: string;
  age: number;
  isScratch: boolean;
}

interface Chicken {
  name: string;
  age: number;
  isFly: boolean;
}*/

type Animal = {
  name: string;
  age: number;
};

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 extends
interface DogCat extends Dog, Cat {
  breed: string;
}

const dog: Dog = {
  name: "뽀삐",
  age: 5,
  isBark: true,
};
