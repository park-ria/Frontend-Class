const frame = document.querySelector("section");

const deg = 45;
let musicArr = null;

// 시간 변환 함수
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
}

const setting = () => {
  musicArr.forEach((info, index) => {
    const pic = Object.assign(document.createElement("div"), {
      className: "pic",
    });
    pic.style.backgroundImage = `linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("./img/${info.album_img}")`;

    const h2 = document.createElement("h2");
    h2.innerText = info.title;

    const p = document.createElement("p");
    p.innerText = info.singer;

    const ul = document.createElement("ul");
    const li_1 = document.createElement("li");
    const audio = Object.assign(document.createElement("audio"), {
      src: `./music/${info.music}`,
      loop: true,
    });
    const replay = Object.assign(document.createElement("i"), {
      className: "fa-solid fa-rotate-right",
    });
    replay.addEventListener("click", (e) => {
      e.target.closest("article").querySelector(".pic").classList.add("on");
      audio.load();
      audio.play();
    });
    li_1.append(replay);

    const li_2 = document.createElement("li");
    const play = Object.assign(document.createElement("i"), {
      className: "play fa-solid fa-play",
    });
    play.style.fontSize = "28px";
    play.addEventListener("click", (e) => {
      if (play.classList.contains("fa-play")) {
        play.classList.replace("fa-play", "fa-pause");

        e.target.closest("article").querySelector(".pic").classList.add("on");
        audio.play();
      } else {
        play.classList.replace("fa-pause", "fa-play");
        e.target
          .closest("article")
          .querySelector(".pic")
          .classList.remove("on");
        audio.pause();
      }
    });
    li_2.append(play);

    const li_3 = document.createElement("li");
    const volume = Object.assign(document.createElement("i"), {
      className: "volume fa-solid fa-volume-high",
    });
    volume.addEventListener("click", (e) => {
      if (volume.classList.contains("fa-volume-high")) {
        volume.classList.replace("fa-volume-high", "fa-volume-xmark");
        audio.muted = true;
      } else {
        volume.classList.replace("fa-volume-xmark", "fa-volume-high");
        audio.muted = false;
      }
    });

    const volumeControl = Object.assign(document.createElement("input"), {
      type: "range",
      className: "volumeControl",
      min: "0",
      max: "1",
      value: "0.5",
      step: "0.01",
    });
    volumeControl.value = "0.5";

    const volumeWrapper = Object.assign(document.createElement("div"), {
      className: "volumeWrapper",
    });
    volumeWrapper.append(volume, volumeControl);
    li_3.append(volumeWrapper);

    // 볼륨 슬라이더 배경 업데이트 함수
    const updateVolumeBackground = () => {
      const percentage = volumeControl.value * 100;
      volumeControl.style.background = `linear-gradient(to right, #fff ${percentage}%, rgba(124 ,124, 124,0.6) ${percentage}%)`;
    };

    // 볼륨 조절 이벤트
    volumeControl.addEventListener("input", (e) => {
      const volumeValue = Number(e.target.value);
      audio.volume = volumeValue; // 오디오 볼륨 변경
      updateVolumeBackground();
    });
    updateVolumeBackground();
    ul.append(li_1, li_2, li_3);

    const currentTime = document.createElement("span");
    currentTime.innerText = "00:00";
    const duration = document.createElement("span");
    duration.innerText = "00:00";

    const progress = Object.assign(document.createElement("input"), {
      type: "range",
      className: "progress",
      min: "0",
      max: "100",
      value: "0",
      step: "1",
    });

    const progressWrapper = Object.assign(document.createElement("div"), {
      className: "progressWrapper",
    });
    progressWrapper.append(currentTime, progress, duration);

    // 진행 바 배경 업데이트 함수
    const updateProgressBackground = () => {
      const percentage = (progress.value / progress.max) * 100;
      progress.style.background = `linear-gradient(to right, #fff ${percentage}%, rgba(124 ,124, 124,0.6) ${percentage}%)`;
    };

    // 오디오 전체 시간 설정
    audio.addEventListener("loadedmetadata", () => {
      progress.max = audio.duration || 100;
      duration.textContent = formatTime(audio.duration);
      updateProgressBackground();
    });

    // 오디오 진행 바 & 현재 시간 업데이트
    audio.addEventListener("timeupdate", () => {
      progress.value = audio.currentTime;
      currentTime.textContent = formatTime(audio.currentTime);
      updateProgressBackground();
    });

    // 진행 바 변경 시 오디오 위치 이동
    progress.addEventListener("input", (e) => {
      audio.currentTime = e.target.value;
      updateProgressBackground();
    });

    const txt = Object.assign(document.createElement("div"), {
      className: "txt",
    });
    txt.append(h2, p, ul, progressWrapper, audio);

    const inner = document.createElement("div");
    inner.className = "inner";
    inner.append(pic, txt);

    const article = document.createElement("article");
    if (index === 0) article.classList.add("on");
    article.style.transform = `rotate(${deg * index}deg) translateY(-100vh)`;
    article.append(inner);

    frame.append(article);
  });
};

const initMusic = () => {
  const audios = document.querySelectorAll("audio");
  for (let audio of audios) {
    audio.pause();
    audio.load();
    audio.parentElement.previousElementSibling.classList.remove("on");
    audio
      .closest("article")
      .querySelector(".play")
      .classList.replace("fa-pause", "fa-play");
  }
};

const controlMusic = () => {
  const lists = frame.querySelectorAll("article");
  const prev = document.querySelector(".btnPrev");
  const next = document.querySelector(".btnNext");

  let num = 0;
  let active = 0;
  const len = lists.length - 1;

  const activation = (index, lists) => {
    const main = document.querySelector("main");
    main.style.background = `linear-gradient(25deg, ${musicArr[active].color1}, ${musicArr[active].color2})`;
    for (let list of lists) {
      list.classList.remove("on");
    }

    lists[index].classList.add("on");
  };

  prev.addEventListener("click", () => {
    initMusic();
    num++;
    frame.style.transform = `rotate(${num * deg}deg)`;

    active === 0 ? (active = len) : active--;
    activation(active, lists);
  });

  next.addEventListener("click", () => {
    initMusic();
    num--;
    frame.style.transform = `rotate(${num * deg}deg)`;

    active === len ? (active = 0) : active++;
    activation(active, lists);
  });
};

// push the db.json data
fetch("./db.json")
  .then((response) => response.json())
  .then((jsonData) => {
    musicArr = jsonData.data;
    setting();
    controlMusic();
  });
