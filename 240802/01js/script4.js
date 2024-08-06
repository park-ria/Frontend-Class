// form 요소 => form 태그 안에 있는 세부적인 태그들을 모두 지칭하는 표현
// 요소.value
// const button = document.querySelector("input[type='submit']");
// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   //const orderName = document.querySelector("#orderName");
//   // form name은 querySelector로 찾아오지 않아도 된다
//   const orderName = document.order.orderName;
//   console.log(orderName.value);
// });
// //const orderName = document.querySelector("#orderName");
// // input:button은 데이터를 보내지 않은 그냥 버튼 기능 -> button 노드에서 event는 click
// // input:submit은 form 태그의 데이터를 보내기 위한 버튼 -> form 노드에서 event는 submit

// console.log(document.forms[0].elements[4]); // form안의 요소들을 배열값으로 가져옴

const select = document.querySelector("#fruits");
/*console.log(select);
console.log(select.options);
console.log(select.options[1]);
console.log(select.options[1].value);*/

select.addEventListener("change", function () {
  console.log(this.options.selectedIndex);
  const selectedText = this.options[this.selectedIndex].innerText;
  alert(`${selectedText}를 선택하셨습니다! 가격은 5,000원 입니다!`);
});

const radioBox = document.querySelectorAll("input[name='userAge']");
radioBox.forEach((item) => {
  item.addEventListener("change", (e) => {
    const target = e.target;
    console.log(target.value);
    if (target.checked) {
      alert(`당신의 연령은 ${target.value}대 입니다!`);
    }
  });
});

const checkBox = document.querySelectorAll("input[name='alarm']");
checkBox.forEach((item) => {
  item.addEventListener("click", (e) => {
    const target = e.target;
    if (target.checked) {
      alert(`당신의 관심은 ${target.value}입니다!`);
    }
  });
});
