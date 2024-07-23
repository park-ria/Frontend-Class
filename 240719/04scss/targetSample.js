const button = document.querySelector("button");

const buttonAction = (e) => {
  console.log(e); // 이벤트 핸들러가 발생되기전에 currentTarget이 비동기적으로 찍히므로 null임

  console.log(e.target);
  // 실제로 이벤트가 발생되어진 요소 : <span>Google</span>
  console.log(e.currentTarget);
  // 실제 이벤트 핸들러가 달려있는 요소 : <button>...</button>
  // 비동기적 발생 -> 클릭 되고 이벤트 핸들러가 발생 된 후에 찍으므로 여기서는 null이 아님
};

button.addEventListener("click", buttonAction);
// 동기적 방식이 같이 실행되지 않는것 스텝 바이 스텝
// 비동기적 방식은 같이 실행되는 것
