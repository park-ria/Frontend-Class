const showPosition = (position) => {
  const url =
    "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=500&pageNo=1&MobileOS=ETC&MobileApp=Apptest&serviceKey=KFmuQQCZ2GVxzj%2FBd6guL87F2N7eWVMonKZBRFelxNDNruE%2BzpYbw%2Fzm%2FAVUY0W2yxqDC2txedOldSwCFZm1hw%3D%3D&_type=json";

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const data = json.response.body.items.item;
      const { latitude, longitude } = position.coords;

      const mapContainer = document.querySelector("#map"); // 지도를 표시할 div
      const mapOption = {
        center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
      const map = new kakao.maps.Map(mapContainer, mapOption);

      // 마커 클러스터러를 생성합니다
      const clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 10, // 클러스터 할 최소 지도 레벨
      });

      let markers = [];

      for (let i = 0; i < data.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        //const imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        //const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX), // 마커를 표시할 위치
        });

        markers.push(marker);

        const infowindow = new kakao.maps.InfoWindow({
          content: data[i].facltNm,
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

      // 클러스터러에 마커들을 추가합니다
      clusterer.addMarkers(markers);
    });
};

const errorPosition = (err) => {
  alert(err.message);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
} else {
  alert("Geolocation을 지원하지 않는 기기입니다.");
}
