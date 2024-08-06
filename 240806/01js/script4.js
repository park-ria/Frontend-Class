//const inputText = document.querySelector("input[type='text']");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const word = frm.inputBox.value;
  alert(`입력하신 ${word}의 글자수는 ${word.length}입니다!`);
});
