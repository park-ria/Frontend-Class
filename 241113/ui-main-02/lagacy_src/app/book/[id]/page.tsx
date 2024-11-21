import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div>book/[id] page : {id} 입니다!</div>;
};

export default Page;
