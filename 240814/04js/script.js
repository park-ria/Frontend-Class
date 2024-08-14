// 원기둥의 부피를 계산
// 원기둥 부피 = 밑면적 x 높이
// 원기둥이 밑면적 = 파이 x 반지름 x 반지름
const form = document.querySelector("form");
const result = document.querySelector("#result");

// 생성자 함수
// function Cylinder(diameter, height) {
//   this.diameter = diameter;
//   this.height = height;

//   this.getVolume = function () {
//     //반지름
//     let radius = this.diameter / 2;isNaN
//     return (Math.PI * radius * radius * height).toFixed(2);
//     // 소수점 두번째자리까지 자름
//   };
// }

// Class
class Cylinder {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }

  getVolume = function () {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  };
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const diameter = document.querySelector("#diameter").value;
  const height = document.querySelector("#height").value;

  if (
    diameter === "" ||
    height === "" ||
    isNaN == typeof diameter ||
    isNaN == typeof height
  )
    result.innerText = `정확한 지름 값과 높이 값을 입력해주세요!`;
  else {
    const cylinder01 = new Cylinder(diameter, height);
    result.innerText = `원기둥의 부피는 ${cylinder01.getVolume()}입니다!`;
  }
});

// 인스턴스 객체
//const cyliner01 = new Cylinder(8, 10); //프로토타입 객체
//console.log(`원기둥의 부피는 ${cyliner01.getVolume()} 입니다.`);
