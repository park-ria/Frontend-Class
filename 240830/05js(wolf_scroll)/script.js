const imageAll = document.querySelectorAll(".imageWrap .parallexImage");
const subpageImage = document.querySelector(".subPage .parallexImage");

const totalNum = imageAll.length;
let scrollNum = 0;
let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  imageAll.forEach((image, index) => {
    if (index < 4) {
      image.style.transform = `translateY(${
        -scrollNum / (2 * (totalNum - index))
      }px)`; // 수식에 큰 의미는 없고 스크롤 올라갈 때 속도가 다 다르게 주고싶어서 index를 활용한 것..
    }
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2; //그냥 마우스 page값을 주면 너무 크므로 화면 절반값을 뺀 이유도 있고 음수값도 같이 주기 위해서
});

const loop = () => {
  targetX += (x - targetX) * speed;
  imageAll[4].style.transform = `scale(1.1) translate(${-targetX / 50}px, ${
    -scrollNum / (2 * totalNum - 4)
  }px)`;
  imageAll[5].style.transform = `scale(1.1) translate(${-targetX / 100}px, ${
    -scrollNum / (2 * totalNum - 5)
  }px)`;
  subpageImage.style.transform = `scale(1.1) translateX(${-targetX / 20}px)`;
  window.requestAnimationFrame(loop);
};

loop();
