const output = document.querySelector("#output");

const arr = [2, 1, 3, 10];

//const arr1 = arr.map((item) => item * 2); // 4, 2, 6, 20
// forEach & for & for of => 기존 원본 데이터를 바꿔버림, map은 원본을 바꾸지 않음!!!

//arr.sort(); //기본으로 오름차순으로 기능함 1, 10, 2, 3 => 유니코드 정렬이라서

/*arr.sort((a, b) => {
  if (a > b) {
    return 1; 앞a와 뒤b를 비교해서 앞의 a가 크면 1을 부여해서 뒤로 보냄
  }
  if (a === b) {
    return 0;
  }
  if (a < b) {
    return -1; 앞a와 뒤b를 비교해서 앞의 a가 작으면 -1을 부여해서 앞으로 보냄
  }
});*/

// 오름차순 => 1,2,3,10
/*arr.sort((a, b) => {
  return a - b;
});*/

// 내림차순 => 10,3,2,1
//오름차순은 a-b였기 때문에 내림차순으로 바꾸기 위해서는 -를 곱해주면 가장 큰 값이 음수를 달아서 가장 작아지고, 가장 작은 값이 음수를 달아도 가장 큰수가 되므로 (a-b)였던 오름차순에 -(a-b)여서 -a+b가 되어 b - a가 된다
/*arr.sort((a, b) => {
  return b - a;
});*/
// {}가 있기 때문에 표현식이기 때문에 return을 써야 값이 바뀜!!!

arr.sort((a, b) => b - a);
// {}가 없는 실행문이기 때문에 return을 안써도 적용이 됨

output.innerText = arr;
