// Header Nav
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  const header = document.querySelector("header");
  const book = document.querySelector("#book");

  if (scroll > 50) {
    header.classList.add("active");
    book.classList.add("active");
  } else {
    header.classList.remove("active");
    book.classList.remove("active");
  }
});

// Trigger
const trigger = document.querySelector(".trigger");
const gnb = document.querySelector(".gnb");
const gnbLinks = gnb.querySelectorAll("a");

trigger.addEventListener("click", function () {
  const gnb = document.querySelector(".gnb");
  this.classList.toggle("active");
  gnb.classList.toggle("active");
});

gnbLinks.forEach((link) => {
  link.addEventListener("click", () => {
    trigger.classList.remove("active");
    gnb.classList.remove("active");
  });
});

// Book Tab
const tabBtn = document.querySelectorAll(".book_tab_btn");
tabBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    tabBtn.forEach((sibling) => {
      if (sibling !== btn) {
        sibling.classList.remove("active");
      }
    });
    this.classList.add("active");

    const tabNm = btn.getAttribute("data-tab-nm");
    document.querySelectorAll(".book_tab_desc").forEach((item) => {
      if (item.id === tabNm) {
        document.getElementById(tabNm).classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
});

// booking_type_btn
const bookingTypeBtn = document.querySelectorAll(".booking_type_btn");
bookingTypeBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    bookingTypeBtn.forEach((sibling) => {
      if (sibling !== btn) {
        sibling.classList.remove("active");
      }
    });
    this.classList.add("active");
  });
});

// slide
const slides = document.querySelector(".slides");
const slidePagination = document.querySelector(".slide_pagination");

fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    jsonData.data.forEach((item, index) => {
      const price = new Intl.NumberFormat("ko-kr", {
        currency: "KRW",
      }).format(item.price);

      // 슬라이드 이미지 넣기
      const li = document.createElement("li");
      li.className = "slide_item";
      const imgDiv = document.createElement("div");
      imgDiv.className = "slide_img";
      imgDiv.style.background = `url(./img/${item.img}) center/cover no-repeat`;
      li.appendChild(imgDiv);
      const slideDesc = document.createElement("div");
      slideDesc.className = "slide_desc";
      slideDesc.innerHTML = `
          <div>
            <span class="badge">Special</span>
            <p>${item.city}</p>
          </div>
          <p>왕복 <span class="slide_price">${price}</span>원 ~</p>
        </div>
      `;
      li.appendChild(slideDesc);
      slides.appendChild(li);

      // 슬라이드 페이지네이션
      if (index % 4 === 0) {
        slidePagination.innerHTML += `
        <span class="slide_pager ${index === 0 ? `active` : ``}"></span>
      `;
      }
    });
    // 슬라이드 복제
    const btns = document.querySelectorAll(".slide_button");
    const prevBtn = document.querySelector(".slide_button.prev");
    const nextBtn = document.querySelector(".slide_button.next");
    const slide = slides.querySelectorAll("li");
    const slideCount = slide.length;
    const slideWidth = 300;
    const slideMargin = 30;
    const moveSlideCount = 4;

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
      const initialTranslateValue =
        -(slideWidth + slideMargin) * moveSlideCount;
      slides.style.transform = `translateX(${initialTranslateValue}px)`;
    };

    const makeClone = () => {
      for (let i = 0; i < moveSlideCount; i++) {
        const cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add("clone");
        slides.appendChild(cloneSlide);
      }
      for (let i = slideCount - 1; i >= slideCount - moveSlideCount; i--) {
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

    // 슬라이드 페이저 이동함수
    const pagers = slidePagination.querySelectorAll("span");
    const movePager = (num) => {
      pagers.forEach((item) => {
        item.classList.remove("active");
      });
      pagers[num].classList.add("active");
    };

    const moveSlide = (num) => {
      const showIndex =
        (slideCount / moveSlideCount + num) % (slideCount / moveSlideCount);
      movePager(showIndex);

      slides.style.left = `${
        -num * (slideWidth + slideMargin) * moveSlideCount
      }px`;

      currentIdx = num;
      if (currentIdx === slideCount / moveSlideCount || currentIdx === -1) {
        setTimeout(() => {
          slides.classList.remove("animated");
          slides.style.left =
            num > 0
              ? "0px"
              : `${-showIndex * (slideWidth + slideMargin) * moveSlideCount}px`;
          currentIdx = num > 0 ? 0 : 2;
        }, 500);
        setTimeout(() => {
          slides.classList.add("animated");
        }, 600);
      }
    };

    let timer = undefined;

    const autoSlide = () => {
      if (timer === undefined) {
        timer = setInterval(() => {
          moveSlide(currentIdx + 1);
        }, 3000);
      }
    };

    autoSlide();

    const stopSlide = () => {
      clearInterval(timer);
      timer = undefined;
    };

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

    slides.addEventListener("mouseenter", () => {
      stopSlide();
    });

    slides.addEventListener("mouseleave", () => {
      autoSlide();
    });

    btns.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        stopSlide();
      });

      btn.addEventListener("mouseleave", () => {
        autoSlide();
      });
    });

    // 마우스 드래그 이벤트
    let startPoint = 0;
    let endPoint = 0;

    // PC 드래그 이벤트
    slides.addEventListener("mousedown", (e) => {
      slides.style.cursor = "grabbing";
      //console.log("mousedown", e.pageX);
      startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
    });

    slides.addEventListener("mouseup", (e) => {
      slides.style.cursor = "grab";
      //console.log("mouseup", e.pageX);
      endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
      if (startPoint < endPoint) {
        // 마우스가 오른쪽으로 드래그 된 경우
        moveSlide(currentIdx - 1);
      } else if (startPoint > endPoint) {
        // 마우스가 왼쪽으로 드래그 된 경우
        moveSlide(currentIdx + 1);
      }
    });

    // 모바일 터치 이벤트 (스와이프)
    slides.addEventListener("touchstart", (e) => {
      //console.log("touchstart", e.touches[0].pageX);
      startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
    });
    slides.addEventListener("touchend", (e) => {
      //console.log("touchend", e.changedTouches[0].pageX);
      endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
      if (startPoint < endPoint) {
        // 오른쪽으로 스와이프 된 경우
        moveSlide(currentIdx + 1);
      } else if (startPoint > endPoint) {
        // 왼쪽으로 스와이프 된 경우
        moveSlide(currentIdx - 1);
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
