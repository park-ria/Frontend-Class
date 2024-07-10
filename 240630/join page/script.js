/*const year = document.querySelector("#year");
for (i = 2024; i >= 2015; i--) {
  const opt = document.createElement("option");
  opt.value = i;
  const txt = document.createTextNode(i + "년");
  opt.appendChild(txt);
  year.appendChild(opt);
}

const month = document.querySelector("#month");
for (i = 1; i < 13; i++) {
  const opt = document.createElement("option");
  opt.value = i;
  const txt = document.createTextNode(i + "월");
  opt.appendChild(txt);
  month.appendChild(opt);
}

const day = document.querySelector("#day");
for (i = 1; i < 32; i++) {
  const opt = document.createElement("option");
  opt.value = i;
  const txt = document.createTextNode(i + "일");
  opt.appendChild(txt);
  day.appendChild(opt);
}*/

const femaleBtn = document.getElementById("femaleBtn");
const maleBtn = document.getElementById("maleBtn");

femaleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  femaleBtn.querySelector("i").classList.toggle("filledA");
  maleBtn.querySelector("i").classList.remove("filledB");
});

maleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  maleBtn.querySelector("i").classList.toggle("filledB");
  femaleBtn.querySelector("i").classList.remove("filledA");
});
