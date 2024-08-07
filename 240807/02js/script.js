// 별모양 querySelectorAll
// 별 클릭시 컬러 변경
// 어떤 별을 클릭하던지 간에 무조건 별 색상 제거
// 조건문 -> 선택된 별의 개수에 따라서 안에 들어가는 이미지 및 문장이 변경
// innerText

const stars = document.querySelectorAll(".fa-star");
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((sibling, i) => {
      if (i <= index) {
        sibling.classList.add("active");
      } else {
        sibling.classList.remove("active");
      }
    });

    const print = document.querySelector(".print");
    let message = "";
    switch (index) {
      case 0:
        message = "별로에요";
        break;
      case 1:
        message = "보통이에요";
        break;
      case 2:
        message = "그냥그래요";
        break;
      case 3:
        message = "맘에들어요";
        break;
      case 4:
        message = "아주좋아요";
        break;
    }
    print.innerHTML = `<img src="./img/star-lv${index + 1}.png" />${message}`;
  });
});
