// Math 수학객체 = > 함수
/*let num = 2.1234;
let num01 = 2.8765;
let maxNum = Math.max(10, 5, 8, 30);
let minNum = Math.min(10, 5, 8, 30);
let roundNum = Math.round(num);
let floorNum = Math.floor(num01);
let ceilNum = Math.ceil(num);
let rndNum = Math.random();
let piNum = Math.PI;

document.write(maxNum, "<br />");
document.write(minNum, "<br />");
document.write(roundNum, "<br />");
document.write(floorNum, "<br />");
document.write(ceilNum, "<br />");
document.write(rndNum, "<br />");
document.write(piNum, "<br />");*/

const character = document.querySelector(".character");
let degree = 0;
const loop = () => {
  // 사람이 아는 60분법의 각도를 컴퓨터가 이해하는 레디언으로 바꿈
  const rotation = (degree * Math.PI) / 180;
  const targetX = window.innerWidth / 2 - 50 + 100 * Math.cos(rotation); // x축 중앙에 두고 싶어서, 원하는 각도에 따라 x값을 계산
  // 빗변 분의 밑변이 코싸인이여서 밑변을 구하려면 빗변 * 코싸인(각도) // 빗변은 원래 반지름 넣고구하는데 크게 돌고 싶어서 지름을 넣음
  const targetY = window.innerHeight / 2 - 50 + 100 * Math.sin(rotation); // y축 중앙에 두고 싶어서
  // 빗변분의 높이가 싸인인데 높이를 구하기 위해서 빗변 * 싸인(각도)
  // 100px이니까 반인 50을 빼줌 => translate(-50%, -50%)

  character.style.left = `${targetX}px`;
  character.style.top = `${targetY}px`;

  degree += 1;
  requestAnimationFrame(loop);
  //console.log(rotation);
};
loop();
