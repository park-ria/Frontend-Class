// 1. 인라인 스크립트를 활용한 이벤트 적용방법
/*const testFnc = () => {
  alert("click");
};*/

// 2. 이벤트 핸들러를 활용한 이벤트 적용방법
/*const button = document.querySelector("button");
button.onclick = function () {
  alert("click");
};*/

// 3. addEventListener를 활용한 이벤트 적용방법
const button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("클릭!");
});
