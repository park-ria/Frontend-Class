const songs = document.querySelectorAll(".albumTable_song");
// for of 유사 배열에 많이 씀
for (let song of songs) {
  const play = song.querySelector(".fa-caret-right");
  const pause = song.querySelector(".fa-pause");

  play.addEventListener("click", (e) => {
    console.log(e);
    // 가장 가까이에 있는 td
    e.target.closest("td").querySelector("audio").play();
  });

  pause.addEventListener("click", (e) => {
    e.target.closest("td").querySelector("audio").pause();
  });
}

// e 객체 > target || currentTarget
// currentTarget : 이벤트 핸들러가 부착되어진 요소를 의미
// target : 실제 이벤트가 발생된 요소를 의미
