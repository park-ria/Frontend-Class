const phoneNumber = document.querySelector("input[type='text']");
const warningMessage = document.querySelector("#warningMessage");

phoneNumber.addEventListener("keyup", function () {
  const numberValue = this.value;
  const trimNumber = numberValue.replace(/-/g, "");

  //const regexp = /^[0]\d{8,9}[0-9]$/.test(trimNumber);
  const regexp = /^[0][0-9]{9,10}$/.test(trimNumber);
  // 반드시 0으로 시작하고 끝은 0에서 9 사이의 숫자

  if (regexp === false)
    warningMessage.innerText = "전화번호의 형식에 맞춰서 입력해주세요!";
  else warningMessage.innerText = "";
});
