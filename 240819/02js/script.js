const playButton = document.querySelector(".play-pause");
const video = document.querySelector("video");
const volumeBar = document.querySelector("input[type='range']");

const play = () => {
  playButton.innerText = " || ";
  video.play();
};

const pause = () => {
  playButton.innerText = " ▶ ";
  video.pause();
};

const togglePlay = () => {
  video.paused ? play() : pause();
};

const setVolume = (e) => {
  video.volume = e.target.value;
};

const formatting = (time) => {
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600);

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}:${min}:${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime);
  // video.currentTime 영상 소스 해당 시간 측정
  duration.innerText = formatting(video.duration);
  // video.duration 영상 전체 총 시간 측정
};

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime); // 해당 영상이 재생되고 있다면
volumeBar.addEventListener("change", setVolume);
