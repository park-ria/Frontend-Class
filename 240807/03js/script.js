const liItems = document.querySelectorAll("li");
liItems.forEach((liItem, index) => {
  const photo = document.querySelector(".photo");
  liItem.addEventListener("mouseenter", function () {
    photo.style.background = `url("${this.getAttribute(
      "data-image"
    )}") center/cover no-repeat`;
  });
  liItem.addEventListener("mouseleave", () => {
    photo.style.background = ``;
  });
});
