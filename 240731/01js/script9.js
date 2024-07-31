/*const table = document.querySelector("#table");
for (let i = 0; i < 5; i++) {
  const tr = document.createElement("tr");
  for (let j = 1; j < 6; j++) {
    const td = document.createElement("td");
    td.innerText = i * 5 + j;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}*/

let num = 1;
let t = `<table border=1>`;
for (let i = 1; i <= 5; i++) {
  t += `<tr>`;
  for (let k = 1; k <= 5; k++) {
    t += `<td>${num}</td>`;
    num++;
  }
  t += `</tr>`;
}

t += `</table>`;
document.write(t);
