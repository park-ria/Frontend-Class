import React from "react";

const Viewer = ({ number }) => {
  return (
    <div>
      <h3>{number % 2 === 0 ? "짝수" : "홀수"}</h3>
    </div>
  );
};

export default Viewer;
