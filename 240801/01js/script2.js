// window 객체 안에는 시간 관련 내장 함수 존재
// CB1 // jS에서 자주 만날 콜백함수 1번 예제
/*let count = 0;
const cbFunc = () => {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};

const timer = setInterval(cbFunc, 300);*/
// 1000 = 1s

// CB2 // jS에서 자주 만날 콜백함수 2번 예제
// map 함수
/*const arr = [10, 20, 30];
const newArr = arr.map((item, index) => (item + 5) * index);
console.log(newArr);*/

// CB3 // jS에서 자주 만날 콜백함수 3번 예제
// setTimeout => 일정 시간 지연 후 실행!!!
// this객체는 보통 일반적으로 현재 실행되고 있는 함수의 주체, 객체 등의 아이템
// setTimeout(function () {
//   console.log(this);
//   // window가 뜸 -> setTimeout는 window의 객체이기 때문에
// }, 300);

// CB4 // jS에서 자주 만날 콜백함수 4번 예제
/*const arr2 = [1, 2, 3, 4, 5];
arr2.forEach((item) => {
  console.log(this);
});*/

// CB5 // js에서 자주 만날 콜백함수 5번 예제
/*document.body.innerHTML += `<button id="a">Click</button>`;
document.querySelector("#a").addEventListener("click", function () {
  console.log(this);
});*/

// CB6 // js에서 자주 만날 콜백함수 6번 예제
// 객체 안에 있는 메서드 함수의 경우, this는 function의 경우, 해당 메서드 함수의 부모격인 객체를 찾아오지만, 만약 화살표 함수를 사용한다면, winodw 객체를 찾아온다!
// const obj = {
//   vals: [1, 2, 3],
//   logValues: function () {
//     console.log(this);
//   },
// };

// obj.logValues();

// // 객체 안에 메서드 형식으로 정의한 함수는 외부에 별도 존재하는 함수의 콜백함수로 사용할 시, 기존 객체와의 관계성이 제거된다
// const arr3 = [4, 5, 6];
// arr3.forEach(obj.logValues);

// 객체를 통해서 탄생된 메서드 함수를 콜백함수로 사용 시, 해당 요소의 부모를 찾아올 수 있도록 하는 방법
/*const obj1 = {
  name: "obj1",
  func: function () {
    const self = this;
    return function () {
      console.log(self.name);
    };
  },
};

const callback = obj1.func();
setTimeout(callback, 1000);*/

// 위 코드보다 효율적으로 this 객체를 사용하는 방법
/*const obj1 = {
  name: "obj1",
  func: function () {
    console.log(this.name);
  },
};

setTimeout(obj1.func.bind(obj1), 1000);*/

// 콜백함수 => 콜백지옥!
/*setTimeout(
  (name) => {
    let coffeeList = name;
    console.log(coffeeList);
    setTimeout(
      (name) => {
        coffeeList += `, ${name}`;
        console.log(coffeeList);
        setTimeout(
          () => {
            coffeeList += `, ${name}`;
            console.log(coffeeList);
            setTimeout(
              (name) => {
                coffeeList += `, ${name}`;
                console.log(coffeeList);
              },
              500,
              "카페라떼"
            );
          },
          500,
          "카페모카"
        );
      },
      500,
      "아메리카노"
    );
  },
  500,
  "에스프레소"
);*/
// setTimeout(실행시킬 함수, 딜레이 시간 값, 콜백함수에 들어갈 인자값)

// 콜백지옥 빠져나와서 천국행!!
// 1.리팩토링(비추천)
/*let coffeeList = "";
const addLatte = (name) => {
  coffeeList += `, ${name}`;
  console.log(coffeeList);
};

const addMocha = (name) => {
  coffeeList += `, ${name}`;
  console.log(coffeeList);
  setTimeout(addLatte, 500, "카페라떼");
};

const addAmericano = (name) => {
  coffeeList += `, ${name}`;
  console.log(coffeeList);
  setTimeout(addMocha, 500, "카페모카");
};

const addEspresso = (name) => {
  coffeeList = name;
  console.log(coffeeList);
  setTimeout(addAmericano, 500, "아메리카노");
};
setTimeout(addEspresso, 500, "에스프레소");*/

// 2. Promise() => 클래스로 선언되었을 때
// 반드시 대문자로 시작하고 new를 써야 함
// 어떤 함수가 실행 => 종료(또 다른 실행)
// 약속 => 이 함수가 정상적으로 실행된다면, 종료 => 함수 예약
//new Promise(); // Class로 생산된 프로토타입 함수 = 붕어빵 틀
/*let likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve("피자를 주문합니다!");
  } else {
    reject("피자를 주문하지 않습니다!");
  }
});

pizza.then((result) => {
  console.log(result);
});*/

const obj = new Promise((resolve) => {
  setTimeout(() => {
    const name = "에스프레소";
    console.log(name);
    resolve(name);
  }, 500);
})
  .then((prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const name = `${prevName} 카페모카`;
        console.log(name);
        resolve(name);
      }, 500);
    });
  })
  .then((prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const name = `${prevName} 카페라떼`;
        console.log(name);
        resolve(name);
      }, 500);
    });
  });
