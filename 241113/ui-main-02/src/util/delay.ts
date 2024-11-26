const delay = async (ms: number) => {
  // 시간을 지연시키는 함수
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, ms);
  });
};

export default delay;
