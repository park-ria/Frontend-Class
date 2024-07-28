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
