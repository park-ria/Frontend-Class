import emotion1 from "./emotion/emotion1.png";
// import emotion2 from "../public/emotion2.png";

function App1() {
  return (
    <div>
      Emotion
      <img src={emotion1} />
      {/* public에 있는 소스를 가져올 때는 직접적으로 절대좌표를 넣어야 함! */}
      <img src={"/emotion1/emotion2.png"} />
      <img src={`${process.env.PUBLIC_URL}/emotion1/emotion2.png`} />
    </div>
  );
}

export default App1;
