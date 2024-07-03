const btns = document.querySelector(".controls");
const prevBtn = btns.querySelector(".prev");
const nextBtn = btns.querySelector(".next");

const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");

const slideCount = slide.length;
const slideWidth = 200;
const slideMargin = 30;

let currentIdx = 0;

// 복제한 5개의 li노드를 왼쪽으로 이동시키기 위한 함수(1)
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  const newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;
  slides.style.width = newWidth;
};

// 복제한 5개의 li노드를 왼쪽으로 이동시키기 위한 함수(2)
const setInitialPos = () => {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};

// li 노드를 복제하기 위한 함수
const makeClone = () => {
  // 뒤에 5개 복사
  for (let i = 0; i < slideCount - 1; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }

  // 앞에 5개 복사
  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }

  updateWidth();
  setInitialPos();
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100); // setTimeout(실행시킬 함수, 시간) => 몇초 이후에 함수를 실행해라 => 0.1초후 animated를 줘라
};

// 복사본 만들고 원본 인덱스에 맞게 이동하는 함수 실행
makeClone();

// 버튼 클릭을 통해서 실제 슬라이드를 출력시켜주는 함수
const moveSlide = (num) => {
  //현재는 left는 0
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIdx = num;
  //console.log(currentIdx, slideCount);

  // 복제본으로 가면 0으로 돌림
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 500);
    //0.1초는 위에서 애니메이트를 줬기때문에 그 이후 0.4초가 더 지난 0.5초에 애니메이트 제거
    //0.4초 후 animate 제거 시키고 0번째로 바꿈 animated를 제거하고 index를 0으로 바꿔야 티가 안남
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600); // 다시 animated를 줌
  }
};

// 버튼 클릭 이벤트 함수
nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});

prevBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});

// 자동슬라이드 기능 함수
let timer = undefined;

const autoSlide = () => {
  if (timer === undefined) {
    timer = setInterval(() => {
      moveSlide(currentIdx + 1);
    }, 3000); //3초에 한 번씩 1칸씩 뒤로 움직였음 좋겠다
  }
};
//setTimeout 시간 이후에 실행해라 => 시간 지연
//setInterval 시간 주기에 맞춰서 반복적으로 실행해라

autoSlide();

// 자동슬라이드 정지 기능 함수
const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

slides.addEventListener("mouseenter", () => {
  stopSlide();
});

slides.addEventListener("mouseleave", () => {
  autoSlide();
});

btns.addEventListener("mouseenter", () => {
  stopSlide();
});

btns.addEventListener("mouseleave", () => {
  autoSlide();
});
