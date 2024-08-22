const xhr = new XMLHttpRequest();
xhr.open("GET", "student.json"); // 클라이언트 입장에서 요청
xhr.send(); // 서버 입장에서 보냄
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 정상적인 자료로딩과 정상적인 통신이이라면
    const students = JSON.parse(xhr.responseText); //서버로부터 받은 정보는 xhr.responseText에 있음 -> 웹 브라우저에 출력하기 위해 json형식으로 바꿈
    const result = document.querySelector("#result");
    result.innerText = `${students.name}은 ${students.major} 학과의 ${students.grade}학년 입니다!`;
  }
};
