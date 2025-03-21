const delay = async (ms: number) => {
  // 시간을 지연시키는 함수, skeleton ui 확인하기 위해 일부러 지연시간 줌
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, ms);
  });
};

export default delay;
