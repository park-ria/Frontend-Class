const frame = document.querySelector("section");

const deg = 45;
let musicArr = null;

const setting = () => {
  musicArr.forEach((info, index) => {
    const dot = Object.assign(document.createElement("div"), {
      className: "dot",
    });

    const pic = Object.assign(document.createElement("div"), {
      className: "pic",
    });
    pic.style.backgroundImage = `url("./img/${info.album_img}")`;
    pic.append(dot);

    const h2 = document.createElement("h2");
    h2.innerText = info.title;

    const p = document.createElement("p");
    p.innerText = info.singer;

    const ul = document.createElement("ul");
    const li_1 = document.createElement("li");
    const pause = Object.assign(document.createElement("i"), {
      className: "fa-solid fa-pause",
    });
    pause.addEventListener("click", (e) => {
      e.target.closest("article").querySelector(".pic").classList.remove("on");
      e.target.closest("article").querySelector("audio").pause();
    });
    li_1.append(pause);

    const li_2 = document.createElement("li");
    const play = Object.assign(document.createElement("i"), {
      className: "fa-solid fa-play",
    });
    play.addEventListener("click", (e) => {
      e.target.closest("article").querySelector(".pic").classList.add("on");
      e.target.closest("article").querySelector("audio").play();
    });
    li_2.append(play);

    const li_3 = document.createElement("li");
    const replay = Object.assign(document.createElement("i"), {
      className: "fa-solid fa-rotate-right",
    });
    li_3.append(replay);
    replay.addEventListener("click", (e) => {
      e.target.closest("article").querySelector(".pic").classList.add("on");
      e.target.closest("article").querySelector("audio").load();
      e.target.closest("article").querySelector("audio").play();
    });
    ul.append(li_1, li_2, li_3);

    const audio = Object.assign(document.createElement("audio"), {
      src: `./music/${info.music}`,
    });

    const txt = Object.assign(document.createElement("div"), {
      className: "txt",
    });
    txt.append(h2, p, ul, audio);

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
