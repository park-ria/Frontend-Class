const songs = document.querySelectorAll(".albumTable_song");
// for of 유사 배열에 많이 씀
for (let song of songs) {
  const play = song.querySelector(".fa-caret-right");
  const pause = song.querySelector(".fa-pause");

  play.addEventListener("click", (e) => {
    e.target.closest("td").querySelector("audio").play();
  });

  pause.addEventListener("click", (e) => {
    e.target.closest("td").querySelector("audio").pause();
  });
}

//전체선택
const total = document.querySelector("#total");
const checkItems = document.querySelectorAll(".checkItems");
total.addEventListener("click", function () {
  const checkVal = this.checked;

  checkItems.forEach((item) => {
    item.checked = checkVal;
  });
});

//선택해제
checkItems.forEach((item) => {
  item.addEventListener("click", function () {
    if (
      checkItems.length ===
      document.querySelectorAll(".checkItems:checked").length
    ) {
      total.checked = true;
    } else {
      total.checked = false;
    }
  });
});
