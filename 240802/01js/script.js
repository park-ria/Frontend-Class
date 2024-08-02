// 함수에서 만날 수 있는 전개연산자 구문
/*const fruits = ["apple", "banana", "grape"];
console.log(...fruits);*/

/*function addNum(a, b, c = 10) {
  return a + b + c;
}*/

/*function addNum(...numbers) {
  console.log(...numbers);
  console.log(numbers);
  console.log(`${numbers}`);
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
console.log(addNum(1, 3, 7, 4));*/

// 전개 연산자 구문은 해당 매개변수 중 마지막에 와야한다.
function displayFavorites(first, ...favs) {
  //const str = `가장 좋아하는 과일은 ${favs} 입니다.`;
  const str = `가장 좋아하는 과일은 ${first} 입니다.`;
  return str;
}

console.log(displayFavorites("사과", "포도", "토마토"));
