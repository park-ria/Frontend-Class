import "./App.css";
import { useState, useEffect, useRef } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const didMountRef = useRef(false);
  // useRef(boolean) : useRef에 boolean 값이 들어가면 전체 노드를 컨트롤 하겠다라는 의미!! 원래는 안들어감
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  // useEffect(() => {
  //   console.log("업데이트 : ", count, text);
  // }, [count, text]);
  // 반드시 두개 인자값 받음
  // count라는 값이 변화가 되면 앞에 콜백함수를 실행해라

  // useEffect(() => {
  //   console.log("컴포넌트 업데이트");
  // });
  // 의존성 배열에 어떤한 값도 정의되지 않으면 뭘 하던지 간에 무조건 실행됨

  useEffect(() => {
    if (!didMountRef.current) didMountRef.current = true;
    else console.log("컴포넌트 업데이트!");
  });

  useEffect(() => {
    console.log("컴포넌트 마운트!");
  }, []);

  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     console.log("깜빡");
  //   }, 1000);

  //   return () => {
  //     console.log("클린업!");
  //     clearInterval(intervalID);
  //   };
  // });
  //useEffect에 return을 쓰는 경우는 unmount하는 경우 밖에 없다!!!!!
  // return을 쓰지 않는 경우 버튼 클릭한 갯수 대로 계속 마운트가 돼서 콘솔이 엄청 많이 찍힘. 1초보다 더 빠르게 콘솔 찍힘
  // return을 써서 언마운트를 하면 아무리 많이 클릭해도 마운트가 되지 않아서 정속으로 콘솔이 찍힘

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
