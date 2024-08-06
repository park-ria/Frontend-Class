const box = document.querySelector("#box");
box.addEventListener("click", (event) => {
  //console.log(event.target, event.currentTarget);
  alert(`이벤트 발생위치 : ${event.pageX}, ${event.pageY}`);
});
