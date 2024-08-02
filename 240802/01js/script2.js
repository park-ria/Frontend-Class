//const main = document.querySelector("main");
//const profile = main.querySelector("#profile");
//const profile = document.getElementById("profile");
// getElementById => DOM>id만 검색 => 메모리의 효율성 극대화!
// 객체 속성을 받으시 document로 지정하고 가야한다
// querySelector => 전역요소의 모든 node
//const h1 = main.querySelector("h1");
// const h1 = document.getElementsByTagName("h1");
// console.log(h1);
// const desc = document.querySelector("#desc");
// const user = desc.querySelectorAll(".user");
// const img = document.getElementsByClassName("image");
// console.log(img);
// console.log(profile);
// console.log(user[user.length - 1]);
// 유사배열
// 99% 배열이 가지고 있는 속성

/*user.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("click");
  });
});*/

/*const desc = document.querySelector("#desc");
const iu = desc.querySelectorAll(".user")[0];
console.log(iu);
console.log(iu.innerText);
console.log(desc);
console.log(desc.innerHTML);
console.log(desc.innerText);
console.log(desc.textContent);*/

const title = document.querySelector("#title");
title.addEventListener("click", function () {
  this.innerText = "나의 프로필";
  this.style.backgroundColor = "black";
  this.style.color = "#fff";
});

const pfImg = document.querySelector("#profile img");
pfImg.addEventListener("click", function () {
  this.src = "./img/pf2.png";
});

const firstP = document.querySelector("#desc > p:first-child");
firstP.addEventListener("click", function () {
  this.innerHTML = "이름 : <b>태연</b>";
});

const secondP = document.querySelector("#desc > p:nth-child(2)");
secondP.addEventListener("click", function () {
  //this.classList.toggle("active");
  if (!this.classList.contains("active")) {
    this.classList.add("active");
  } else {
    this.classList.remove("active");
  }
});
