class CardFlipOnScroll {
  constructor(wrapper, sticky) {
    this.wrapper = wrapper;
    this.sticky = sticky;
    this.cards = sticky.querySelectorAll(".card");
    this.length = this.cards.length;

    this.start = 0;
    this.end = 0;
    this.step = 0;
  }

  init() {
    this.start = this.wrapper.offsetTop - 100;
    this.end =
      this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight * 1.2;
    this.step = (this.end - this.start) / (this.length * 2);
  }

  animate() {
    this.cards.forEach((card, i) => {
      const s = this.start + this.step * i;
      const e = s + this.step * (this.length + 1);

      if (scrollY <= s) {
        card.style.transform = `
        perspective(100vw)
        translateX(100vw) 
        rotateY(180deg)
      `;
      } else if (scrollY > s && scrollY <= e - this.step) {
        card.style.transform = `
        perspective(100vw)
        translateX(${100 + ((scrollY - s) / (e - s)) * -100}vw)
        rotateY(180deg)
      `;
      } else if (scrollY > e - this.step && scrollY <= e) {
        card.style.transform = `
        perspective(100vw)
        translateX(${100 + ((scrollY - s) / (e - s)) * -100}vw)
        rotateY(${180 + (-(scrollY - (e - this.step)) / this.step) * 180}deg)
      `;
      } else if (scrollY > e) {
        card.style.transform = `
        perspective(100vw)
        translateX(0vw) 
        rotateY(0deg)
      `;
      }
    });
  }
}

const mainContent1 = document.querySelector(".main-content-1");
const sticky = document.querySelector(".sticky");
const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky);
cardFlipOnScroll.init();

window.addEventListener("scroll", () => {
  cardFlipOnScroll.animate();
});

window.addEventListener("resize", () => {
  cardFlipOnScroll.init();
});

const goalImg = document.querySelectorAll(".goal_img");
goalImg.forEach((item) => {
  item.addEventListener("click", () => {
    const target = document.querySelector(
      `.${item.getAttribute("data-alt")} .goal_desc`
    );
    item.classList.toggle("active");
    target.classList.toggle("active");
  });
});

// 스크롤 효과
const mainTit = document.querySelector("#main_title");
const about = document.querySelector(".sticky-background");
const favorite = document.querySelector("#favorite");
const goal = document.querySelector("#goal");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  //console.log(value);

  if (value < 200) {
    mainTit.style.animation =
      "scale-in-center 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards";
  } else {
    mainTit.style.animation =
      "scale-out-center 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
  }

  if (matchMedia("screen and (min-width: 1098px)").matches) {
    if (value < 1000) {
      about.style.animation = "disappearAni 1s ease-out forwards";
    } else {
      about.style.animation = "appearAni 1s ease-out";
    }

    if (value < 5100) {
      favorite.style.animation = "disappearAni 1s ease-out forwards";
    } else {
      favorite.style.animation = "appearAni 1s ease-out";
    }

    if (value < 6150) {
      goal.style.animation = "disappearAni 1s ease-out forwards";
    } else {
      goal.style.animation = "appearAni 1s ease-out";
    }
  }
});
