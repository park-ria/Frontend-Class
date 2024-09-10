import "./App.css";
import Header from "./components/Header";
// import Body from "./components/Body";
// import Body1 from "./components/Body1";
// import Body2 from "./components/Body2";
//import Body3 from "./components/Body3";
//import Body4 from "./components/Body4";
import Body5 from "./components/Body5";
import Footer from "./components/Footer";

// function ChildComp() {
//   return <div>child component</div>;
// }

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Body>
        <ChildComp />
      </Body> */}
      {/* <Body {...BodyProps} /> */}
      {/* <Body1 /> */}
      {/* <Body2 /> */}
      {/* <Body3 /> */}
      {/* <Body4 /> */}
      <Body5 />
      <Footer />
    </div>
  );
}

export default App;
