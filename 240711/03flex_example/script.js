// js 변수 선언 var let const
// var는 전역변수, 지역변수 가능 그래서 쓰지 않는게 좋음

// 전역변수 / 지역변수
// let은 재설정 재할당이 가능, const는 재설정 재할당이 불가능
const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", function () {
  const gnb = document.querySelector(".gnb ul");
  const sns = document.querySelector(".sns");
  gnb.classList.toggle("on");
  sns.classList.toggle("on");
  this.classList.toggle("active");
  // 화살표 함수일 때는 this는 window를 지칭함
});
