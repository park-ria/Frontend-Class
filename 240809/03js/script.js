const nums = document.querySelectorAll(".number");

for (let i = 0; i < nums.length; i++) {
  // nums[i] + 1 => 어떤 숫자인지를 체크
  if (i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue;

  // 래디언 구하기 Math.PI / 6 = 30deg
  const angle = (i + 1) * (Math.PI / 6);

  //const x = 142 + 142 * Math.abs(Math.sin(angle)) - nums[i].offsetWidth / 2;
  const x = 132 + 132 * Math.abs(Math.sin(angle)) - nums[i].offsetWidth / 2;
  // 150반지름 - 8(border px) = 142
  // 142 만큼 이동하면 중간이고 거기에 30도의 sin값으로 x축을 더하면 x축이 나옴 142(반지름,빗변) * 싸인(각도) = 높이 => x 축 = 142 * Math.abs(Math.sin(angle))
  // (nums[i].offsetWidth / 2) 본인의 너비의 절반 만큼 빼주면 들어옴
  // 132로 한 이유는 시계에 숫자가 너무 딱 붙어있어서 보더와의 간격을 좀 주고싶어서 10더 작은 숫자로 빗변을 삼음

  // const y = 142 - 142 * Math.abs(Math.cos(angle));
  const y = 132 - 132 * Math.abs(Math.cos(angle));

  //nums[0].style.left = `${x}px`;
  //nums[0].style.top = `${y}px`;

  if (i + 1 > 6) nums[i].style.right = `${x}px`;
  else nums[i].style.left = `${x}px`;

  if ((i + 1 >= 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3))
    nums[i].style.top = `${y}px`;
  else nums[i].style.bottom = `${y}px`;
}

const hourPointer = document.querySelector("#hour");
const minutePointer = document.querySelector("#minute");
const secondPointer = document.querySelector("#second");
const clock = () => {
  // Analog clock
  const currentTime = new Date();

  let second = currentTime.getSeconds();
  let secondAngle = second * 6;
  // 1바퀴 60초 니까 360도 / 60초 = 6도 => 1초에 6도씩 움직이면 됨
  let secondAngleValue = `rotate(${secondAngle}deg)`;

  let minute = currentTime.getMinutes();
  let minuteAngle = minute * 6;
  let minuteAngleValue = `rotate(${minuteAngle}deg)`;

  let hour = currentTime.getHours();
  let hourAngle =
    (hour > 12 ? (hour - 12) * 30 : hour * 30) + (minute / 60) * 30;
  // hour는 360/12 = 30도씩 움직임
  // 현재 분 / 60 나눠서 30도씩 움직이게끔 (minute / 60 *30)
  let hourAngleValue = `rotate(${hourAngle}deg)`;

  secondPointer.style.transform = secondAngleValue;
  minutePointer.style.transform = minuteAngleValue;
  hourPointer.style.transform = hourAngleValue;

  // Digital clock
  const digitalClock = document.querySelector(".digital-clock");
  let period = "오전";
  if (hour === 0) hour = 12;
  else if (hour > 12) {
    hour -= 12;
    period = "오후";
  }

  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  digitalClock.innerText = `${period} ${hour}시 ${minute}분 ${second}초`;
};
setInterval(clock, 1000);
