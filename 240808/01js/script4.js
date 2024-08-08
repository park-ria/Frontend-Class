frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = frm.userName.value;
  const userMajor = frm.major.value;
  if (userName === "" || userMajor === "")
    alert("정상적인 데이터를 입력하세요!");
  else {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML += `
    <tr>
      <td>${userName}</td>
      <td>${userMajor}</td>
    </tr>`;

    frm.userName.value = "";
    frm.major.value = "";
  }
});
