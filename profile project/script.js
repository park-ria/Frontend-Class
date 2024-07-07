/* slide image 삽입*/
const slides = document.querySelector(".about_skills .slides");
const slidePager = document.querySelector(".about_skills .slide_pager");
fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    for (item of jsonData.data) {
      const li = document.createElement("li");
      const imgDiv = document.createElement("div");
      const pager = document.createElement("span");

      imgDiv.classList.add("slide_img");
      imgDiv.style.backgroundImage = `url(./img/${item.fileNm})`;
      slides.appendChild(li).appendChild(imgDiv);

      const txt = document.createElement("p");
      txt.innerHTML = item.name;
      slides.appendChild(li).appendChild(txt);
      slidePager.appendChild(pager);
    }
    /* 슬라이드 페이저 이동함수 */
    const pagers = slidePager.querySelectorAll("span");

    const movePager = (num) => {
      pagers.forEach((item) => {
        item.classList.remove("active");
      });
      pagers[num].classList.add("active");
    };
    movePager(0);

    /* 슬라이드 복제*/
    const btns = document.querySelectorAll(".slide_control");
    const prevBtn = document.querySelector(".slide_control.prev");
    const nextBtn = document.querySelector(".slide_control.next");
    const slide = slides.querySelectorAll("li");
    const slideCount = slide.length;
    const slideWidth = 100;
    const slideMargin = 80;

    let currentIdx = 0;

    const updateWidth = () => {
      const currentSlides = document.querySelectorAll(".slides li");
      const newSlideCount = currentSlides.length;
      const newWidth = `${
        (slideWidth + slideMargin) * newSlideCount - slideMargin
      }px`;
      slides.style.width = newWidth;
    };

    const setInitialPos = () => {
      const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
      slides.style.transform = `translateX(${initialTranslateValue}px)`;
    };

    const makeClone = () => {
      for (let i = 0; i < slideCount; i++) {
        const cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add("clone");
        slides.appendChild(cloneSlide);
      }

      for (let i = slideCount - 1; i >= 0; i--) {
        const cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add("clone");
        slides.prepend(cloneSlide);
      }

      updateWidth();
      setInitialPos();
      setTimeout(() => {
        slides.classList.add("animated");
      }, 100);
    };

    makeClone();

    const moveSlide = (num) => {
      movePager((slideCount + num) % 10);

      slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
      currentIdx = num;

      if (Math.abs(currentIdx) === slideCount) {
        setTimeout(() => {
          slides.classList.remove("animated");
          slides.style.left = "0";
          currentIdx = 0;
        }, 500);

        setTimeout(() => {
          slides.classList.add("animated");
        }, 600);
      }
    };

    // 버튼 클릭 이벤트 함수
    nextBtn.addEventListener("click", () => {
      moveSlide(currentIdx + 1);
    });

    prevBtn.addEventListener("click", () => {
      moveSlide(currentIdx - 1);
    });

    pagers.forEach((item, index) => {
      item.addEventListener("click", () => {
        moveSlide(index);
      });

      item.addEventListener("mouseenter", () => {
        stopSlide();
      });

      item.addEventListener("mouseleave", () => {
        autoSlide();
      });
    });

    // 자동슬라이드 기능 함수
    let timer = undefined;

    const autoSlide = () => {
      if (timer === undefined) {
        timer = setInterval(() => {
          moveSlide(currentIdx + 1);
        }, 3000);
      }
    };

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

    btns.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        stopSlide();
      });

      item.addEventListener("mouseleave", () => {
        autoSlide();
      });
    });
  });

/* 스크롤 효과*/
const contentsTitle = document.querySelector(".contents_title");
const about = document.querySelector("#about");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  //console.log(value);

  if (value < 450) {
    about.style.animation = "disappearAni 1s ease-out forwards";
  } else {
    about.style.animation = "appearAni 1s ease-out";
  }
});
