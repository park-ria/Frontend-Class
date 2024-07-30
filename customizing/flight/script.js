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
      slides.innerHTML += `
      <li class="slide_item">
        <img class="slide_img" src="./img/${item.img}" alt="${item.alt}" />
        <div class="slide_desc">
          <div>
            <span class="badge">Special</span>
            <p>${item.city}</p>
          </div>
          <p>왕복 <span class="slide_price">${price}</span>원 ~</p>
        </div>
      </li>
    `;

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
      slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
      currentIdx = num;
      if (currentIdx === slideCount || currentIdx === -slideCount) {
        setTimeout(() => {
          slides.classList.remove("animated");
          slides.style.left = "0px";
          currentIdx = 0;
        }, 500);
        setTimeout(() => {
          slides.classList.add("animated");
        }, 600);
      }
    };

    nextBtn.addEventListener("click", () => {
      moveSlide(currentIdx + 1);
    });

    prevBtn.addEventListener("click", () => {
      moveSlide(currentIdx - 1);
    });

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

    slides.addEventListener("mouseenter", () => {
      stopSlide();
    });

    slides.addEventListener("mouseleave", () => {
      autoSlide();
    });

    /*btns.addEventListener("mouseenter", () => {
      stopSlide();
    });

    btns.addEventListener("mouseleave", () => {
      autoSlide();
    });*/
  })
  .catch((err) => {
    console.log(err);
  });
