const btn = document.querySelector("#open");
const modalBox = document.querySelector("#modal_box");
const close = document.querySelector("#close");

btn.addEventListener("click", () => {
  modalBox.classList.add("active");
});

close.addEventListener("click", () => {
  modalBox.classList.remove("active");
});

modalBox.addEventListener("click", function () {
  this.classList.remove("active");
});

// 2015년도 Javascript를 만드는 기관 => ES6문법 release
// 화살표 함수 -> this 객체 못씀
// function + 선언 & 호출 위치
// hoisting -> 끌어올리다
