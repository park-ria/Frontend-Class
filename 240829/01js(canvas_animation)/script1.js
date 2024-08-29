const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.fillStyle = "#ccc";
// ctx.fillRect(150, 150, 100, 100);

// ctx.translate(150, 150); // canvas의 원점을 이동시킴
// ctx.rotate((Math.PI / 180) * 45);
// ctx.strokeRect(0, 0, 100, 100);

ctx.fillStyle = "#ccc";
ctx.fillRect(50, 50, 100, 50);

ctx.save();
ctx.scale(3, 2); //배율
ctx.strokeRect(20, 70, 100, 50);
//배율에 영향을 미치므로(60,140,300,100)되버림
//x축좌표와 y축좌표의 배율과 x축으로 부터떨어진 거리와 y축으로 떨어진 거리가 scale(3,2)영향을 받음

//ctx.strokeRect(200, 50, 100, 50);////배율에 영향을 미치므로(400,100,300,100)되버림

//배율의 영향을 받고싶지 않으면 restore()를 써야함
ctx.restore();
ctx.strokeRect(200, 50, 100, 50);
