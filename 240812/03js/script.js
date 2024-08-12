const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const number01 = form.number01.value;
  const number02 = form.number02.value;
  const result = document.querySelector("#result");

  let winner = "";
  let pickedNumbers = [];

  for (let i = 0; i < number02; i++) {
    //let picked = Math.ceil(Math.random() * number01); 라고 해도 됨
    let picked;

    // 중복제거 값이 같으면 계속 picked을 만들어라
    do {
      picked = Math.floor(Math.random() * number01 + 1);
    } while (pickedNumbers.includes(picked));

    pickedNumbers.push(picked);
    winner += `${picked}번 `;
  }

  result.innerText = `${winner}`;
});
