// 문자열 && 배열
// 1) 둘 다 length
// 2) 둘 다 length (0부터 다시 시작 // 좌측 시작)

// ES6 문법이 적용되기 전
/*const str = "Hello, everyone";
const array = str.split("");
console.log(array);

const array1 = [...str];
console.log(array1);
const str2 = array1.join("");
console.log(str2);*/

//const string = prompt("영문 소문자로 된 문자열을 입력하세요.");
/*const firstCh = string[0].toUpperCase(); //H
const remainStr = string.slice(1); //ello
const result = firstCh + remainStr; //Hello
document.write(result);*/

//const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
//document.write(result); //hello

// 자료구조 & 알고리즘
// 1) 생성자 함수
let arr = new Array();
arr[0] = "first";
arr[1] = "second";
console.log(arr);

//let obj = new Object();

// 2) 변수 // 빈배열 할당 및 선언
let season = [];
season[0] = "spring";
season[1] = "summer";
season[2] = "fall";
season[3] = "winter";
console.log(season);

// 3) 직접 배열 선언 및 할당 -> 제일 많이 사용
const pets = ["dog", "cat", "lion"];
console.log(pets);
