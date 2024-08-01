// 사용자로부터 수학점수를 받으세요.
// 사용자로부터 국어점수를 받으세요.

// 함수를 사용해서 수학 + 국어 점수의 평균점수를 계산하여 알림창을 통해서 출력해주세요

const arr = ["수학", "국어"];

const testAvg = () => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(prompt(`${arr[i]}점수를 입력해주세요`));
  }

  return sum / arr.length;
};

alert(`평균 점수는 ${testAvg()}점 입니다.`);
