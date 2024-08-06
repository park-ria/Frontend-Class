const btn = document.querySelector(".detailBtn");
const text = document.querySelector(".text-wrapper");
console.log(btn);
btn.addEventListener("click", () => {
  text.classList.toggle("active");
});
