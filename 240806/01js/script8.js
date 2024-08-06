document.querySelector("p").addEventListener("click", () => {
  console.log("p");
});

document.querySelector("section").addEventListener("click", () => {
  console.log("section");
});

document.querySelector("div").addEventListener("click", () => {
  console.log("div");
});

// 웹 브라우저 실행 => html, js 파싱(문서 읽으면서 기본적으로 실행될 수 있는 요소 실행)

const elements = document.querySelectorAll("*");
// 이벤트 버블링
/*elements.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(
      `e.target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}`
    );
  });
});*/
// 명확한 지점을 원하면 target, 버블링 조상들 중 선택하고 싶으면 currentTarget

// 이벤트 캡처링
elements.forEach((element) => {
  element.addEventListener(
    "click",
    (e) => {
      console.log(
        `e.target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}`
      );
    },
    true
  );
});
// true를 넣어야 캡쳐링됨
