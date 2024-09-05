anime({
  targets: ".svg2 path",
  strokeDashoffset: [anime.setDashoffset, 100],
  // dash(점선) 형태의 외각선의 offset 얼만큼 떨어져있는지
  // strokeDashoffset: [anime.setDashoffset, 100], -> 시작점과 100만큼 떨어져있져 있는 부분부터
  duration: 8000,
  easing: "easeInOutSine",
  // loop: true,
  // direction: "alternate",
});
