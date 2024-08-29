const cursorItem = document.querySelector(".cursorItem");
const circle = cursorItem.querySelector(".circle");
const buttonAll = document.querySelectorAll("a");

let x = 0; //마우스 x좌표
let y = 0; //마우스 y좌표
let targetX = 0; //target x좌표
let targetY = 0; //target y좌표
const speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed; //(마우스 x좌표 - 타겟X의 x좌표) * speed => 마우스와 타겟의 x좌표 차이 * speed => 0.1초씩 타겟x좌표가 마우스 x좌표에 수렴하게 된다. => 타겟이 마우스에 천천히 따라붙음
  targetY += (y - targetY) * speed;
  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;

  window.requestAnimationFrame(loop);
};

loop();

buttonAll.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    circle.style.transform = "scale(0.3)";
  });
  item.addEventListener("mouseleave", () => {
    circle.style.transform = "scale(1)";
  });
});
