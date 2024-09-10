//import React, { useState, useReducer } from "react";
import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "INIT":
      return 0;
    default:
      return state;
  }
};

const TestComp = () => {
  /*const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1);
  };
  const ondecrease = () => {
    setCount(count - 1);
  };*/

  const [count, dispatch] = useReducer(reducer, 0);
  // 0을 count라는 state가 받음
  // dispatch 상태변화를 촉발시키는 함수
  //reducer 상태 변화를 실행시키는 함수

  return (
    <div>
      <h4>테스트컴포넌트</h4>
      <div>
        {/* <b>{count}</b> */}
        <b>{count}</b>
      </div>
      <div>
        {/* <button onClick={onIncrease}>+</button>
        <button onClick={ondecrease}>-</button> */}
        <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "INIT" })}>0으로 초기화</button>
        <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>
          -
        </button>
      </div>
    </div>
  );
};
// dispatch 함수를 그냥 넣으면 바로 실행되므로 무한루프 빠질 수있으므로 콜백함수
//dispatch({type:"INCREASE", data : 1}) 액션객체

export default TestComp;
