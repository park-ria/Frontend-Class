const startBtn = document.getElementById("startBtn");
const video = document.getElementById("preview");

const handleStop = () => {
  startBtn.innerText = "Start Recording";
  startBtn.removeEventListener("click", handleStop);
  startBtn.addEventListener("click", handleStart);
};

const handleStart = () => {
  startBtn.innerText = "Stop Recording";
  startBtn.removeEventListener("click", handleStart);
  startBtn.addEventListener("click", handleStop);

  const recorder = new MediaRecorder(stream);
};

const init = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true,
    //video: { width: 200, height: 200 },
  });
  video.srcObject = stream;
  video.play();
  // 컴퓨터에 내장 카메라와 스피커가 없으면 Droidcam 설치
};

init();

startBtn.addEventListener("click", handleStart);
