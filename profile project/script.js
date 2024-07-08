const slides = document.querySelector(".about_skills .slides");
const slidePager = document.querySelector(".about_skills .slide_pager");
const projectWrapper = document.querySelector(".project_wrapper");

fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    jsonData.data.forEach((item) => {
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
    });

    // 슬라이드 페이저 이동함수
    const pagers = slidePager.querySelectorAll("span");

    const movePager = (num) => {
      pagers.forEach((item) => {
        item.classList.remove("active");
      });
      pagers[num].classList.add("active");
    };
    movePager(0);

    // 슬라이드 복제
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

    // 프로젝트 값 넣기
    let prevYear = undefined;
    let projectDetail = document.createElement("div");
    projectDetail.classList.add("project_detail");
    let projectDesc = document.createElement("div");

    jsonData.project.forEach((item) => {
      if (item.year !== prevYear) {
        if (prevYear != undefined) {
          projectWrapper.appendChild(projectDetail);
        }
        projectDetail = document.createElement("div");
        projectDetail.classList.add("project_detail");

        const projectYear = document.createElement("div");
        projectYear.classList.add("project_year");
        projectYear.innerHTML = item.year;
        projectDetail.appendChild(projectYear);

        projectDesc = document.createElement("div");
        projectDesc.classList.add("project_desc");
        projectDetail.appendChild(projectDesc);

        prevYear = item.year;
      }
      let pTag = document.createElement("p");
      pTag.innerText = item.period + " " + item.description;
      projectDesc.appendChild(pTag);

      if (item.id === jsonData.project.length - 1)
        projectWrapper.appendChild(projectDetail);
    });

    // project p태그 클릭 이벤트
    const projectPtags = document.querySelectorAll(".project_desc > p");
    const modal = document.querySelector("#modal");
    const projectIndex = document.querySelector("#project_index");
    const modalNm = document.querySelector("#modal_nm");
    const modalPrd = document.querySelector("#modal_prd");
    const modalPstn = document.querySelector("#modal_pstn");
    const modalSkill = document.querySelector("#modal_skill");
    const modalSite = document.querySelector("#modal_site");

    //backFilter
    const backFilter = document.querySelector("#backFilter");

    projectPtags.forEach((item, index) => {
      item.classList.remove("active");
      item.addEventListener("click", () => {
        projectPtags[index].classList.add("active");
        projectIndex.innerHTML = index;
        modalNm.innerHTML = jsonData.project[index].description;
        modalPrd.innerHTML = jsonData.project[index].period;
        modalPstn.innerHTML = jsonData.project[index].position;
        modalSkill.innerHTML = jsonData.project[index].skills;

        const siteLine = document.querySelector(".siteLine");
        if (jsonData.project[index].site !== "") {
          const siteAtag = document.createElement("a");
          siteAtag.innerHTML = jsonData.project[index].site;
          siteAtag.href = jsonData.project[index].site;
          siteAtag.target = "_blank";
          modalSite.appendChild(siteAtag);
          siteLine.style.display = "flex";
        } else {
          siteLine.style.display = "none";
        }

        modal.style.display = "block";

        //backFilter
        backFilter.style.display = "block";
      });
    });

    // modal 닫기
    const closeModal = () => {
      //backFilter
      backFilter.style.display = "none";

      projectPtags[parseInt(projectIndex.innerHTML)].classList.remove("active");
      modal.style.display = "none";
      modalNm.innerHTML = "";
      modalPrd.innerHTML = "";
      modalPstn.innerHTML = "";
      modalSkill.innerHTML = "";
      const modalSiteAtag = document.querySelector("#modal_site > a");
      if (modalSiteAtag) modalSiteAtag.remove();
    };

    const modalXbtn = document.querySelector("#modal_close_btn");
    modalXbtn.addEventListener("click", () => {
      closeModal();
    });

    //backFilter
    backFilter.addEventListener("click", () => {
      if (backFilter.style.display === "block") closeModal();
    });
  });

// 스크롤 효과
const mainTit = document.querySelector("#main_title");
const about = document.querySelector("#about");
const project = document.querySelector("#project");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  //console.log(value);

  if(value < 200) {
    mainTit.style.animation = "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
  } else{
     mainTit.style.animation ="scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
  }

  if (value < 450) {
    about.style.animation = "disappearAni 1s ease-out forwards";
  } else {
    about.style.animation = "appearAni 1s ease-out";
  }

  if (value < 1600) {
    project.style.animation = "disappearAni 1s ease-out forwards";
  } else {
    project.style.animation = "appearAni 1s ease-out";
  }
});

