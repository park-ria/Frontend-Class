// 사용자에게 화씨 온도를 받아서 콘솔창에서 해당 온도를 섭씨 온도로 변환했을 때의 값을 출력해주세요!!
// 섭씨 온도 = (화씨온도 - 32) / 1.8

/*const num = prompt("화씨온도 입력해주세요", "45");
alert(`입력하신 화씨 온도${num}는 섭씨${(parseFloat(num) - 32) / 1.8}입니다.`);*/

const fah = parseFloat(prompt("화씨온도를 입력하세요!", "45"));
const cel = ((fah - 32) / 1.8).toFixed(2); // to.Fixed(2)는 소수점 두자리 까지
alert(`화씨온도 ${fah}는 섭씨온도 ${cel}도 입니다!`);
