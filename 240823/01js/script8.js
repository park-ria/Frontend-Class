const display = (users) => {
  const result = document.querySelector("#result");
  let output = "";

  users.forEach((user) => {
    output += `
      <table>
        <tr>
          <th>이름</th>
          <td class="test">${user.name}</td>
        </tr>
        <tr>
          <th>아이디</th>
          <td>${user.username}</td>
        </tr>
        <tr>
          <th>이메일</th>
          <td>${user.email}</td>
        </tr>
      </table>
    `;
  });

  result.innerHTML = output;
};

const init = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  display(users);
  fn_event();
};

init();
const fn_event = () => {
  console.log(document.querySelectorAll(".test"));
};
