// geolocation => 사용자의 위치를 파악하기 위한 목적 API
// getCurrentPosition(successCB, errorCB, options) // 사용자의 위치 파악
// window.navigator.geolocation

const getLocation = document.querySelector("#getLocation");

const showPosition = (position) => {
  const result = document.querySelector("#result");
  result.innerText = `위도 : ${position.coords.latitude}, 경도 : ${position.coords.longitude}`;
  console.log(position);
};

const errorPosition = (err) => {
  alert(err.message);
};

getLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    // getCurrentPosition : 1번만 위치 출력
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

    const options = {
      enableHighAccuracy: true, //정교한 위치값이 필요할 때
      maximumAge: 0, //위치 정보의 유효기간(밀리초 1000=1초), 최대한 최신 값을 받아오기 위해 0, 시간이 길수록 지연이 생김
      timeout: 5000, //통신이 잘 안터지는 곳 같은 경우, 5초간 기다렸는데 안되면 로딩 끊고 다시 연결
    };

    // watchPosition : 실시간 위치 출력
    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      errorPosition,
      options
    );

    // 실시간 위치이다 보니 배터리가 많이 소모됨. 그래서 시간이 지나면 종료되도록 setTimeout으로 30초 시간이 지나면 clearWatch(watchId)해서 실시간 위치 조회 종료
    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 30000);
  } else {
    alert("Geolocation을 지원하지 않습니다.");
  }
});
