const ul = document.querySelector("ul");
const grid = [9, 5];
const col = grid[0];
const row = grid[1];
const allElem = col * row;

for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  ul.appendChild(li);
}

const tl = anime.timeline({
  targets: "li",
  loop: true,
  direction: "alternate",
  delay: anime.stagger(200, { grid: [9, 5], from: "center" }),
  // grid는 열 행 순으로 가운데부터 0.2초 동안
});

tl.add({
  scale: [
    { value: 0.1, easing: "easeOutSine", duration: 500 },
    { value: 1, easing: "easeOutQuad", duration: 1200 },
  ],
}).add({
  translateX: anime.stagger(10, { grid: [9, 5], from: "center", axis: "x" }),
  translate7: anime.stagger(10, { grid: [9, 5], from: "center", axis: "7" }),
  rotate: anime.stagger([0, 90], { grid: [9, 5], from: "center", axis: "x" }),
});
