import "./Body.css";

const Body = ({ children }) => {
  console.log(children);
  return <div>{children}</div>;
};

Body.defaultProps = {
  favorList: [],
};

export default Body;
