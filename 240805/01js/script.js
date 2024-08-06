// Sticky Event
window.addEventListener("scroll", () => {
  const hashList = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  if (scrollY > 310) {
    hashList.classList.add("active");
  } else {
    hashList.classList.remove("active");
  }
});

// Touch Event
const hashContent = document.querySelector(".hashcontent");
const listClientWidth = hashContent.clientWidth;
const listScrollWidth = hashContent.clientWidth + 200;

// 최초 터치 및 마우스다운 지점
let startX = 0;

// 현재 이동중인 지점
let noxX = 0;

// 터치 종료 지점
let endX = 0;

// 2번째 터치 지점
let listX = 0;

const getClientX = (e) => {
  // const isTouches = e.touches ? true : false;
  // return isTouches ? e.touches[0].clientX : e.clientX;
  return e.toucheds ? e.touches[0].clientX : e.clientX;
};

const getTranslate = () => {
  // css에서 정의한 속성 값을 찾아옴
  //console.log(window.getComputedStyle(hashContent).transform);
  //console.log(getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g));
  //console.log(getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]);
  return parseInt(
    getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
  );
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

const onScrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
};

const onscrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslate();
  if (listX > 0) {
    setTranslateX(0);
    hashContent.style.transition = `all 0.1s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    hashContent.style.transition = `all 0.1s ease`;
    listX = listClientWidth - listScrollWidth;
  }

  window.removeEventListener("touchstart", onScrollStart);
  window.removeEventListener("mousedown", onScrollStart);
  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mousemove", onScrollMove);
  window.removeEventListener("touchend", onscrollEnd);
  window.removeEventListener("mouseup", onscrollEnd);
};

const onScrollStart = (e) => {
  startX = getClientX(e);

  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mousemove", onScrollMove);
  window.addEventListener("touchend", onscrollEnd);
  window.addEventListener("mouseup", onscrollEnd);
};

hashContent.addEventListener("touchstart", onScrollStart);
hashContent.addEventListener("mousedown", onScrollStart);
