const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// 2차 베지에 곡선
//quadracticCurveTo(조절점x좌표, 조절점y좌표, x축, y축)
//quadracticCurveTo(cpx, cpy, x, y);

// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(200, 50, 350, 200);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 100); //시작점
// ctx.quadraticCurveTo(100, 50, 150, 100); //quadracticCurveTo(조절점x좌표, 조절점y좌표, 끝점 x축, 끝점y축)
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// ctx.stroke();

// 3차 베지에 곡선
// bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

// ctx.beginPath();
// ctx.moveTo(50, 100); //시작점
// ctx.bezierCurveTo(90, 250, 310, 10, 350, 100); //ctx.bezierCurveTo(조절점1 x좌표, 조절점1 y좌표, 조절점2 x좌표, 조절점2 y좌표, 끝점 x축, 끝점y축);
// ctx.strokeStyle = "green";
// ctx.stroke();

let triangle = new Path2D();
triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();

let circle = new Path2D();
circle.arc(200, 155, 50, 0, Math.PI * 2);
ctx.stroke(triangle);
ctx.fillStyle = "green";
ctx.fill(circle);
