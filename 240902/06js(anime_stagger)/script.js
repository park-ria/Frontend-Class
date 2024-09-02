const ul = document.querySelector("ul");

// 3행 9열 => anime는 열먼저 씀
const grid = [9, 3];
const col = grid[0];
const row = grid[1];
const allElem = col * row;

for (let i = 0; i < 27; i++) {
  const li = document.createElement("li");
  ul.appendChild(li);
}

anime({
  targets: "li",
  easing: "linear",
  duration: 1000,
  scale: anime.stagger([0.5, 1], { grid: [9, 3], from: "center", axis: "z" }),
  // 안에는 0.5 바깥으로 갈 수록 1
  // from: "center"는 가운데 부터 시작함을 의미
  // axis:"z" z축을 중심으로
});
