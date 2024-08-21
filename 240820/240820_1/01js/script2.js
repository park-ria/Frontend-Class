const result = document.querySelector("#result");

const member1 = ["Html", "Node", "React"];
const member2 = ["CSS", "Javascript", "React"];
const member3 = ["Javascript", "React"];

const subjects = [...member1, ...member2, ...member3];
console.log(subjects);

const resultList = new Set();
subjects.forEach((subject) => {
  resultList.add(subject);
});
console.log(resultList);
console.log(...resultList);
console.log([...resultList]);
console.log(`${[...resultList]}`);
//result.innerText = `${[...resultList]}`;

result.innerHTML = `
  <ul>
    ${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
  </ul>
`;

// html안에는 실행문 안됨, 표현식은 가능
// 표현식 VS 실행문
// 실행문 : if문, for문, forEach는 못쓴다
// 표현식 : map, 삼항조건연산자
// html안에 반복은 map을 쓰고, 조건문은 삼항조건연산자를 씀!!!

// json을 활용해서 data
// js에서 fetch() 출력
// 이벤트 X
// 1) fetch() 데이터를 가져오는 함수 내부에서 이벤트
// 2) Promise() // async & await
