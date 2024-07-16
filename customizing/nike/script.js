document.getElementById("shoes1").classList.add("active");
const btns = document.querySelectorAll(".btn a");

btns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    const items = document.querySelector(".items");
    items.style.left = `${-index * 100}%`;

    const desc = document.querySelectorAll(".desc");
    desc.forEach((shoes) => {
      shoes.classList.remove("active");
    });

    const targetId = this.getAttribute("data-alt");
    if (targetId) {
      document.getElementById(targetId).classList.add("active");
    }
  });
});
