// http://dummyjson.com/quotes
// json 데이터를 가져와서 화면에 출력
// 새로고침이 될 때마다 랜덤형식으로 출력될 수 있도록
// 랜덤함수 0~29

const display = (data) => {
  const randomVal = Math.floor(Math.random() * 30);
  document.querySelector(".quote").innerText = data.quotes[randomVal].quote;
  document.querySelector(
    ".author"
  ).innerText = `-${data.quotes[randomVal].author}-`;
};

const init = async () => {
  const response = await fetch("http://dummyjson.com/quotes");
  const data = await response.json();
  display(data);
};

init();
