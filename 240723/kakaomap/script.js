// Current Position
const showPosition = (position) => {
  const latitude = position.coords.latitude; //위도
  const longitude = position.coords.longitude; //경도

  // 1. Kakao Map
  const container = document.querySelector("#map");
  const options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);

  // 5. Olive Store Info
  const positions = [
    {
      title: "올리브영 강남우성점",
      latlng: new kakao.maps.LatLng(37.4918902, 127.0309525),
      address: "서울특별시 강남구 강남대로 320",
    },
    {
      title: "올리브영 강남중앙점",
      latlng: new kakao.maps.LatLng(37.4962484, 127.0287983),
      address: "서울특별시 강남구 강남대로 374",
    },
    {
      title: "올리브영 서초타운점",
      latlng: new kakao.maps.LatLng(37.4950544, 127.0280286),
      address: "서울특별시 강남구 서초대로 78길",
    },
    {
      title: "올리브영 서초대로점",
      latlng: new kakao.maps.LatLng(37.4940977, 127.0158607),
      address: "서울특별시 강남구 서초대로 314",
    },
    {
      title: "올리브영 역삼점",
      latlng: new kakao.maps.LatLng(37.4987564, 127.0292784),
      address: "서울특별시 강남구 태헤란로 111",
    },
  ];

  for (let i = 0; i < positions.length; i++) {
    let marker = new kakao.maps.Marker({
      map: map,
      position: positions[i].latlng,
    });

    const infowindow = new kakao.maps.InfoWindow({
      content: positions[i].title,
    });

    const makeOverListener = (map, marker, infowindow) => {
      return () => {
        infowindow.open(map, marker);
      };
    };

    const makeOutListener = (infowindow) => {
      return () => {
        infowindow.close();
      };
    };

    kakao.maps.event.addListener(
      marker,
      "mouseover",
      makeOverListener(map, marker, infowindow)
    );

    kakao.maps.event.addListener(
      marker,
      "mouseout",
      makeOutListener(infowindow)
    );
  }

  // 2. Kakao Marker
  // 마커가 표시될 위치입니다
  const markerPosition = new kakao.maps.LatLng(latitude, longitude);

  // 마커를 생성합니다
  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  // 3. Kakao Marker InfoWindow
  // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
  const iwContent = '<div class="iwItem">현재 내 위치!</div>';
  const iwRemoveable = true; // x버튼 생성

  // 인포윈도우를 생성합니다
  const infowindow = new kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable,
  });

  // 마커에 클릭이벤트를 등록합니다
  kakao.maps.event.addListener(marker, "click", function () {
    // 마커 위에 인포윈도우를 표시합니다
    infowindow.open(map, marker);
  });
};

const errorPosition = (err) => {
  alert(err.message);
};

//window.location.geolocation : 웹 브라우저 탑재된 위치 api
//window 객체는 생략이 가능함
navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
// 위치 파악하겠습니까?라는 alert이 안뜨면 console보면 Third-party cookie가 뜨는건 https가 아니여서 뜸
// 크롬 점 세개 -> 설정 -> 개인정보보호 및 보안 -> 사이트 설정 -> 권한 -> 위치 -> 기본동작 : 사이트에서 위치 정보를 요청할 수 있음 체크
// vscode 설정에서 live sever config > settings:host에서 127.0.0.1로 바꿔줘야 함
