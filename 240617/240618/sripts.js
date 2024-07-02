// scroll event
window.addEventListener("scroll", (e) => {
  const header = document.querySelector("header");
  //스크롤 휠이 움직이면 헤더라는 태그를 찾아 그 헤더의 모든 요소를 header라는 변수에 담아줘
  const nav = document.querySelector("nav");
  const logo = document.querySelector("#logo");
  const gnbDesktop = document.querySelector(".gnbDesktop");
  const gnbMobile = document.querySelector(".gnbMobile");
  const trigger = document.querySelectorAll(".trigger span");

  if (window.scrollY > 60) {
    header.classList.add("active");
    nav.classList.add("active");
    logo.classList.add("active");
    gnbDesktop.classList.add("active");
    gnbMobile.classList.add("active");
    trigger.forEach((bar) => {
      bar.classList.add("active");
    });
  } else {
    header.classList.remove("active");
    nav.classList.remove("active");
    logo.classList.remove("active");
    gnbDesktop.classList.remove("active");
    gnbMobile.classList.remove("active");
    trigger.forEach((bar) => {
      bar.classList.remove("active");
    });
  }
});

// toggle event
const toggleBtn = document.querySelector(".trigger");
toggleBtn.addEventListener("click", function () {
  const gnbMobile = document.querySelector(".gnbMobile");
  gnbMobile.classList.toggle("open");
  this.classList.toggle("active");
});

// searchbar trigger
const searchBar = document.querySelectorAll("ul .fa-magnifying-glass");
const searchResult = document.querySelector(".search_bar");
const closeBtn = document.querySelector(".fa-xmark");

searchBar.forEach((item) => {
  item.addEventListener("click", () => {
    searchResult.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  searchResult.classList.remove("active");
});

// main slide
const slideContainerArrow = document.querySelector(".slide_container_arrow");
const slideArrows = document.querySelectorAll(".slide_container_btn"); // 슬라이드 버튼
const slidePagers = document.querySelectorAll(".slide_pager span"); // 슬라이드 페이저
const slideImg = document.querySelector(".slide_img"); // 슬라이드 이미지

// 배열
const pics = ["slide1.png", "slide2.png", "slide3.png"];
let i = 0;
let slideInterval;
let isTransitioning = false; // 마우스 연타를 막기 위한 변수

//slideImg.style.backgroundImage = "url('/img/slide1.png')";
// 백틱을 써서 pic 배열을 문자열에 넣을 수 있다
//slideImg.style.backgroundImage = `url(/img/${pics[i]})`;
slideImg.style.backgroundImage = `url(https://pra9128.cafe24.com/chef/${pics[i]})`;
slidePagers[0].classList.add("active");

// 실제 이미지 및 페이저 값을 변경시켜주는 함수
const updateSlide = (i) => {
  // 페이저 actvie 제거
  slidePagers.forEach((item) => {
    item.classList.remove("active");
  });

  //slideImg.style.backgroundImage = `url(./img/${pics[i]})`;
  slideImg.style.backgroundImage = `url(https://pra9128.cafe24.com/chef/${pics[i]})`;
  slidePagers[i].classList.add("active");
};

// 자동으로 슬라이드 이미지가 변경되도록 해주는 함수
const startSlideShow = () => {
  slideInterval = setInterval(() => {
    i = (i + 1) % pics.length; // 한칸 증가
    updateSlide(i); // 수동으로 버튼 누르면 updateSlide함수 타줘
  }, 4000); // 4초에 한번씩 슬라이드 증가해줘
};

// 자동 슬라이드 기능을 정지 시켜주는 함수
const stopSlideShow = () => {
  clearInterval(slideInterval);
};

// 자동 슬라이드 재시작을 실행시켜주는 함수
const resetSlideShow = () => {
  stopSlideShow();
  isTransitioning = false;
  startSlideShow();
};

// 화살표 클릭 및 이미지 변경 함수
slideArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (isTransitioning) return;
    isTransitioning = true;

    stopSlideShow(); // 수동으로 클릭하면 자동 슬라이드 인터벌을 멈춰야 함
    if (e.target.id === "leftArrow") {
      i = (i - 1 + pics.length) % pics.length;
    } else if (e.target.id === "rightArrow") {
      i = (i + 1) % pics.length;
    }

    updateSlide(i);

    // 특정 시간이 지나면 처리해
    setTimeout(() => {
      isTransitioning = false;
      startSlideShow();
    }, 500);
    // 0.5초가 지나면 클릭하게 끔
  });
});

// 페이저 클릭 시, 슬라이드 이미지 변경 함수
slidePagers.forEach((pager, index) => {
  pager.addEventListener("click", () => {
    stopSlideShow();
    i = index;
    updateSlide(i);

    setTimeout(startSlideShow, 500);
  });
});

startSlideShow(); // 슬라이드 자동 함수 실행

// 마우스 오버가 되면 슬라이드가 멈추도록
slideContainerArrow.addEventListener("mouseover", stopSlideShow);
slideContainerArrow.addEventListener("mouseout", resetSlideShow);
