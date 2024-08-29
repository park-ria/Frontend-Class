const canvas = document.querySelector("canvas");
const button = document.querySelector("button");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.dx = Math.floor(Math.random() * 4) + 1;
    this.dy = Math.floor(Math.random() * 4) + 1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  animate() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0)
      this.dx = -this.dx;
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0)
      this.dy = -this.dy;

    this.draw();
  }
}

//const circleOne = new Circle(100, 100, 50, "red");
//console.log(circleOne);
// const circleTwo = new Circle(200, 200, 20, "blue");
// circleOne.draw();
// circleTwo.draw();

const objs = [];
for (let i = 0; i < 20; i++) {
  const radius = Math.random() * 50 + 10; //반지름 최소 10에서 최대 50으로 지정
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  // canvas.width안에서 양옆 반지름 만큼씩 값을 빼면 애매하게 걸치는 원은 없어진다.
  const color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
  objs.push(new Circle(x, y, radius, color));
}

// objs.forEach((obj) => {
//   obj.draw();
// });

const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); //1초에 한번씩 리셋시킴
  for (let i = 0; i < objs.length; i++) {
    let obj = objs[i];
    obj.animate();
  }
  requestAnimationFrame(update);
};

update();
