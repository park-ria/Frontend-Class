// 숫자 3자리 정규표현식
// d(digit)는 숫자의미, 그냥 쓰면 안먹히고 \와 써야 먹힘
//const regexp = /\d{3}/;
// const regexp = new RegExp(/\d{3}/);

// console.log(regexp.test("Hello")); //false
// console.log(regexp.test("123")); // true
// console.log(regexp.exec("123")); // 배열
// console.log(regexp.exec("test")); // null
// 정규식.test() : 정규표현식이 맞는지 분별해주는 함수 => true, false
// 정규식.exec() : 정규표현식이 맞으면 배열로 반환 아니면 null

//const str = "ES2024 is powerfull";
// console.log(str.match(/ES2024/));
// // ['ES2024', index: 0, input: 'ES2024 is powerfull', groups: undefined]
// // 패턴에 일치하면 배열에 형태로 일치하는 index 값을 가져욤

// console.log(str.match(/ES6/)); // 패턴에 맞지 않아서 null 반환
// console.log(str.replace(/ES2024/, "Javascript")); //Javascript is powerfull

//const regexp = /es/;
//console.log(regexp.test(str)); // false // 대소문자 구별하기때문에 안됨

//const regexp = /es/i;
//console.log(regexp.test(str)); // true // i를 써서 대소문자 구별하지 않아서 true

//console.log(str.match(/ES/));
// ['ES', index: 0, input: 'ES2024 is powerfull', groups: undefined]
//console.log(str.match(/ES\d/));
// ['ES2', index: 0, input: 'ES2024 is powerfull', groups: undefined]
//console.log(str.match(/ES\d\d\d\d/));
// ['ES2024', index: 0, input: 'ES2024 is powerfull', groups: undefined]

// const hello = "Hello, everyone.";
// console.log(/H/.test(hello)); //true -> H의 순서와 상관없이 존재하기만 하면 true
// console.log(/^H/.test(hello)); //true -> ^의로 인해 맨 앞글자가 H인지 판별
// console.log(/^o/.test(hello)); //false -> o가 첫 글자가 아니라서
// console.log(/^h/i.test(hello)); //true -> i가 붙어서 대소문자 구별없이 h가 맨앞으로 오냐 판별

// console.log(/one.$/.test(hello)); //true -> one. 으로 끝나는가 판별
// console.log(/e.$/.test(hello)); //true -> e.로 끝나는가 판별
// console.log(/one$/.test(hello)); //false -> one으로 끝나지 않고 one.으로 끝나기 때문

//const str = "ES2024";
//console.log(str.match(/0-9/));
// null
//console.log(str.match(/[0-9]/));
// ['2', index: 2, input: 'ES2024', groups: undefined]
// [] 범위를 지정하고 싶을 때 사용
// 0-9까지 숫자를 가지고 있는 패턴을 찾아주세요
// 2하나만 찾아옴
//console.log(str.match(/[0-9]/g));
// ['2', '0', '2', '4']
// g를 넣어서 해당하는 숫자 다 찾아옴
//console.log(str.match(/^[0-9]/g));
// null
// ^이 있어서 맨 앞글자가 숫자가 아니라서 null
//console.log(str.match(/[^0-9]/g));
// ['E', 'S']
// 범위를 의미하는 []안에 ^를 쓰면 반대를 의미 0-9의 숫자가 아닌 글자를 가져옴!!

//const str = "Oooops";
//console.log(str.match(/o{2}/));
//['oo', index: 1, input: 'Oooops', groups: undefined]
// 두번 반복하는 요소 찾기
//console.log(str.match(/o{2,}/));
// /o{2,}/ : 최소 두번 이상 박복하는거 찾아오기
//['ooo', index: 1, input: 'Oooops', groups: undefined]
//console.log(str.match(/o{2,4}/));
// ['ooo', index: 1, input: 'Oooops', groups: undefined]
// 최소 두번이상 최대4번까지 반복하는 찾아오기
//console.log(str.match(/o{2,4}/i));
// ['Oooo', index: 0, input: 'Oooops', groups: undefined]
// 대소문자 구별 없이 최소 두번이상 최대 4번까지 반복하는거 찾아오기

//const str2 = "ES2024(ES8) is powerful";
//const regexp = /ES2024|ES8/; // 둘 중에 하나 맞으면 반환 -> or를 쓰고 싶으면 | 하나만 써야되며 띄어쓰기 조차 정규식에 조건이 되기때문에 띄어쓰기를 원하지 않는다면 띄어쓰기 없어야 함
//console.log(regexp.test(str2)); //true

// 1) 숫자만 가능한 정규표현식 패턴
const regexp = /^[0-9]+$/;
//^시작, +한번이상 반복, $마지막이 숫자여야만 함

// 2) 양의 정수만 가능한 정규표현식 패턴
const regexp1 = /^[1-9]\d*$/;
// 정수니까 0부터 시작하면 안됨
// 양의 정수여야 하니까 \d
// 양의 정수일 때 +보다 보통 *씀

// 3) 음의 정수만 가능한 정규표현식 패턴
const regexp2 = /^\-[1-9]\d*$/;
// -가 특수문자 임을 알려줘야하기때문에 \-를 써야 함

// 4) 영문자만 찾아오도록 하는 정규표현식 패턴
const regexp3 = /^[a-zA-Z]+$/;

// 5) 숫자와 영문자를 찾아오도록 하는 정규표현식 패턴
const regexp4 = /^[a-zA-Z0-9]+$/;

// 6) 한글만 찾아오도록 하는 정규표현식 패턴
const regxp5 = /^[가-힣]+$/;

// 7) 한글과 영문자만 가능한 정규표현식 패턴
const regexp6 = /^[가-힣a-zA-Z]+$/;

// 8) 예) 문자열의 길이가 5~10개 패턴
const regexp7 = /^.{5,10}$/;
