const mainTitleTxt = document.querySelector("#main_title_txt");
const txt = "Hello, Ria world!";
let txtIndex = 0;

// typing 함수
let typing = function () {
  mainTitleTxt.innerHTML += txt[txtIndex];
  txtIndex++;
  if (txtIndex > txt.length) {
    mainTitleTxt.textContent = "";
    txtIndex = 0;
  }
};

setInterval(typing, 200);
