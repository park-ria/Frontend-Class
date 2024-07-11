const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("dark");
  // contains 매개변수의 값이 있으면 ture, 없으면 false
  if (document.body.classList.contains("dark")) {
    // 바디 안에 dark라는 클래스가 있으면 true
    btn.innerText = "라이트모드로 바꾸기";
  } else {
    btn.innerText = "다크모드로 바꾸기";
  }
});
