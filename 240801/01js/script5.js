// 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 중에서 10보다 큰 숫자만 콘솔창에 나타나도록 해주세요!!
const arr = [];
for (let i = 1; i < 20; i++) {
  if (i % 2 === 1 && i > 10) arr.push(i);
}

console.log(arr);
