// 자바스크립트 for문 활용해서 구구단 2단부터 9단까지 출력
/*for (let i = 2; i < 10; i++) {
  document.write(`=== ${i}단 ===<br/>`);
  for (let j = 1; j < 10; j++) {
    document.write(`${i} * ${j} = ${i * j} <br/>`);
  }
  document.write("<br/>");
}*/

for (let i = 1; i < 10; i++) {
  for (let j = 2; j < 10; j++) {
    document.write(`&emsp;${j} * ${i} = ${j * i}&emsp;`);
  }
  document.write("<br/>");
}
