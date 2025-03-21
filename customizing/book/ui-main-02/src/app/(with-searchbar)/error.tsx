"use client";

import { startTransition, useEffect } from "react";
import { useRouter } from "next/navigation";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  useEffect(() => {
    console.log(error.message);
  }, [error]);
  return (
    <div>
      <h3>오류가 발생했습니다.</h3>
      {/* reset()은 클라이언트에서 재실행 */}
      {/* <button onClick={() => reset()}>에러해결</button> */}
      {/* window.location.reload()는 서버까지 렌더링 재실행 */}
      {/* <button onClick={() => window.location.reload()}>에러해결</button> */}
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh(); // 현재 페이지에 필요한 서버정보만 다시  불러와주는 역할
            reset(); // 클라이언트 컴포넌트에서 발생한 문제를 해결하기 위해서 retry
          });
        }}
      >
        에러해결
      </button>
    </div>
  );
};

export default Error;
// 에러컴포넌트 페이지는 client component page로 해줘야함 => use client
