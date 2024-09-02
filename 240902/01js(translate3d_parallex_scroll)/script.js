const imageAll = document.querySelectorAll(".parallaxImg");
const totalNum = imageAll.length;

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;

  if (scrollNum < 2500) {
    imageAll.forEach((item, index) => {
      item.style.transform = `translate3d(0,0,${
        scrollNum / (3 * (totalNum - index))
      }px)`;
      // scrollNum만 줬더니 같이 움직임.. 서로 다르게 주려고 index랑 totalNum을 줌
    });
  }
});
