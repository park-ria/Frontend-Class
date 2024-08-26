// 저장공간 loaclstorage : window안의 localstorage

// setItem(key, value)
// getItem(key)
// removeItem(key)
// clear() : 모든 데이터 리셋, 별로 사용 안함

let students = ["Kim", "Lee", "Park"];
localStorage.setItem("students", JSON.stringify(students));

let localData;
if (localStorage.getItem("students") === null) localData = [];
else localData = JSON.parse(localStorage.getItem("students"));

localData.push("Choi");
localStorage.setItem("students", JSON.stringify(localData));
console.log(localData);
