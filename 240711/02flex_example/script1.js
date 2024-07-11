const hamberger = document.querySelector(".hamberger");
const gnb = document.querySelector(".gnb");
const sns = document.querySelector(".sns");
hamberger.addEventListener("click", () => {
  hamberger.classList.toggle("active");
  gnb.classList.toggle("active");
  sns.classList.toggle("active");
});
