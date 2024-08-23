/*const xhr = new XMLHttpRequest();
xhr.open("GET", "student-2.json");
xhr.send();

const renderHTML = (students) => {
  let output = "";
  for (let student of students) {
    output += `
      <h2>${student.name}</h2>
      <ul>
        <li>전공 : ${student.major}</li>
        <li>학년 : ${student.grade}</li>
      </ul>
    `;
  }
  document.querySelector("#result").innerHTML = output;
};

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const students = JSON.parse(xhr.responseText);
    renderHTML(students);
  }
};*/

//console.log(fetch("student-2.json"));
// fetch를 콘솔로 찍어보면 promise이기 때문에 then이랑 catch 그리고 response를 쓸 수 있었던 것...

fetch("student-2.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.forEach((student) => {
      output += `
        <h2>${student.name}</h2>
        <ul>
          <li>전공: ${student.major}</li>
          <li>학년: ${student.grade}</li>
        </ul>
      `;
    });
    document.querySelector("#result").innerHTML = output;
  })
  .catch((err) => console.log(err));
