import React from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
  console.log(q);

  // 서버 컴포넌트 밑에 클라이언트 컴포넌트가 들어가면 각각 독립적으로 유지
  return (
    <div>
      Search 페이지 : {q}
      <></>
    </div>
  );
};

export default Page;