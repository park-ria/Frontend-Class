// const today = new Date();
// console.log(today);

// const month = today.getMonth() + 1; //월만 0부터 시작함, 하나가 작은 숫자가 나옴
// console.log(month);

// const date = today.getDate();
// console.log(date);

// const day = today.getDay();
// console.log(day); // 0:일, 1:월, ..., 6:토

// document.write(`<h1>오늘 날짜 정보</h1>`);
// document.write(`현재 월 : ${month}월<br/>`);
// document.write(`현재재 일 : ${date}일`);

// 밀리초 변환 개념
// 초 / 분 / 시
// 1초 = 1000밀리초
// 1분 = 60초 = (60*1000) = 60,000밀리초
// 1시간 = (60*60*1000) = 3,600,000밀리초
// 1일 = (24*60*60*1000) = 86,400,000밀리초

const today = new Date();
const year = today.getFullYear();
const lastDate = new Date(year, 11, 31);
console.log(lastDate);
const diffDate = lastDate - today;
console.log(diffDate);

const result = Math.round(diffDate / (24 * 60 * 60 * 1000));
alert(`올 연말 마지막 날까지 ${result}일 남았습니다.`);
