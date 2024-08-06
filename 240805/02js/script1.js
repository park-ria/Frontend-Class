/*const form = document.querySelector("form[name='frm']");*/
frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const num1 = Number(frm.firstNum.value);
  const num2 = Number(frm.secondNum.value);
  const max = num1 > num2 ? num1 : num2;

  let gcd = 0;
  for (let i = 0; i < max; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  const answer = document.querySelector(".answer");
  answer.innerText = gcd;
});
