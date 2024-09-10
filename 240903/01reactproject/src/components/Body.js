import "./Body.css";

const Body = ({ name, location, favorList }) => {
  /*const number = {
    first: 1,
  };*/
  // 객체를 쓸 수 없음. 객체안의 value만 출력 가능
  //const number = 1;
  // const numA = 1;
  // const numB = 2;
  // const strA = "안녕";
  // const strB = " 리액트";
  // const boolA = true;
  // const boolB = false;

  const num = 19;

  return (
    // <div style={{ backgroundColor: "red", color: "white" }}>
    // <div className="body">
    <div>
      <h1>Body</h1>
      {/* <h2>{number}</h2> */}
      {/* <h2>{numA + numB}</h2>
      <h2>{strA + strB}</h2>
      <h2>{String(boolA || boolB)}</h2> */}
      {/* <h2>
        {num}는 {num % 2 === 0 ? "짝수" : "홀수"}입니다.
      </h2> */}
      <h2>
        {name}는 {location}에 거주하고 있습니다.
        <br />
        {favorList.length}개의 음식을 좋아합니다!
      </h2>
    </div>
  );
};

Body.defaultProps = {
  favorList: [],
};

export default Body;
