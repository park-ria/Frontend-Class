/*const str = "hello Sir";
const arr = ["today", "first", "theday"];
console.log(str.length);
console.log(arr.length);*/

// 1) charAt(인덱스) : 특정 위치의 문자에 접근!!!
//console.log(str.charAt(4));

/*const counting = (string, word) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === word) count += 1;
  }
  return count;
};

const string = prompt("원하시는 문자열을 입력하세요!");
const word = prompt("그 중 찾고싶은 문자열은 무엇인가요?");

const result = counting(string, word);
document.write(
  `${string}에는 ${word}이라는 알파벳이 ${result}번 사용되었습니다!`
);*/

// 2) indexOf() : 특정 문자열을 인자값을 제공 => 해당 문자열의 시작하는 인덱스 값을 찾아 줌
/*const str1 = "Good morning, everyone. Beautiful morning. Nice morning";
console.log(str1.indexOf("morning"));
console.log(str1.indexOf("evening"));

let firstIndex = str1.indexOf("morning");
console.log(firstIndex);
let secondIndex = str1.indexOf("morning", firstIndex + 1);
console.log(secondIndex);
let thirdIndex = str1.indexOf("morning", secondIndex + 1);
console.log(thirdIndex);*/

// 3) 특정 문자열로 시작하거나 끝나거나 혹은 포함하고 있거나
// startsWith() // endsWith() // includes()
// 상기의 해당 조건에 부합하는지 여부 체크할 때 주로 사용!!
// 조건에 부합하면 true // false

//const str2 = "Hello, everyone.";

// console.log(str2.startsWith("Hello")); //true
// console.log(str2.startsWith("hello")); //false
// console.log(str2.startsWith("He")); //true
// console.log(str2.startsWith("Hello, ev")); //true

// console.log(str2.startsWith("el")); //false
// console.log(str2.startsWith("el", 1)); //true
// console.log(str2.startsWith("o", 4)); //true

// console.log(str2.endsWith("everyone.")); //true
// console.log(str2.endsWith("Everyone.")); //false
// console.log(str2.endsWith("one.")); //true
// console.log(str2.endsWith("everyo.")); //false

// ES6 이전문법
// console.log(str2.indexOf("every") === 5); //false
// console.log(str2.includes("every")); //true

// let str3 = " ab cd ef ";
// console.log(str3.trim());
//trim은 앞 뒤 공백 제거 -> 가운데는 제거하지 않음
// console.log(str3.trimStart());
// console.log(str3.trimEnd());

// const str4 = "Hello, everyone.";
// console.log(str4.toUpperCase());
// console.log(str4.toLowerCase());

// 문자열에서 특정 문자를 추출하는 방법
const str5 = "Good morning.";
console.log(str5.length); //13
console.log(str5.substring(5)); //5번자리 뒤부터 출력 //morning.
console.log(str5.substring(0, 4)); //substring(시작index, 종료index-1) //Good

console.log(str5.slice(0, 4)); //Good
// slice()와 substring()차이점 : slice는 음수값을 사용!
console.log(str5.slice(-5, 12)); // 뒤에서 5개자리부터 마지막자리-1인 12까지 출력 //ning

console.log(str5.split(" "));
console.log(str5.split(""));
