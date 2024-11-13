import React from "react";
import { useRouter } from "next/router";

// 값을 받을때는 []표기법을 파일명으로 써서 받음 : /book/1
// 값을 여러개 받을 때는 [...id].tsx와 같이 변경해주면 됨
// 복수의 동적 파라미터 값을 반영하는 path의 경우, Catch All Segment 기능 사용
// [[...idx]].tsx는 /book이후에 파라미터 값이 없는 것과 있는 것을 모두다 받을 때 사용

const Index = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  console.log(id);

  return <h1>Book</h1>;
};

export default Index;
