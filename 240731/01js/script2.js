// 아래 id 및 pw는 A사용자의 id & pw 입니다.
const id = "ezen";
const pw = 1234;

// 1. 사용자로부터 id 및 pw 정보값을 순차적으로 받습니다!!!
const userId = prompt("아이디를 입력해주세요");

// 2. 사용자가 입력한 id값이 위에 저장된 id와 일치하면 pw값을 받을 수 있는 단계로 넘어가고, 만약 id 값이 일치하지 않으면 값이 일치하지 않는다는 알림창

// 3. pw 값을 입력하는 단계에 도착해서 역시 pw 일치하면 사용자님 반갑습니다.라는 알림창이 나타나게 해주시고 만약 pw가 일치하지 않는다면 pw 값이 일치하지 않습니다 알림창

if (userId === id) {
  const userPw = prompt("비밀번호를 입력해주세요");
  if (userPw === String(pw)) {
    alert("ezen님 반갑습니다!");
  } else {
    alert("비밀번호가 일치하지 않습니다.");
    location.reload();
  }
} else {
  alert("아이디가 일치하지 않습니다");
  location.reload();
}
