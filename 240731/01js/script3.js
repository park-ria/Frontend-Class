// 폼 요소(*input태그) 입력 될 값 절대 전역요소 찾아올 수 없습니다!!!
// 이벤트라는 액션이 발생된 이후에만 value 값을 찾아올 수 있음!!!

const btn = document.querySelector(`input[type="button"]`);
const showSales = () => {
  const price = document.querySelector("#price").value;
  const rate = document.querySelector("#rate").value;
  const savePrice = price * (rate / 100);
  const bottomInfo = document.querySelector(".bottomInfo>p");

  bottomInfo.innerText = `상품의 원래 가격은 ${price}원이고 , 할인률은 ${rate}% 입니다. ${savePrice}원을 절약한
    ${price - savePrice}원에 구매할 수 있습니다.`;
};

btn.addEventListener("click", showSales);
