import React from "react";
import { BookData } from "@/mock/types";
import BookItem from "@/components/book-item";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  // 서버 컴포넌트 밑에 클라이언트 컴포넌트가 들어가면 각각 독립적으로 유지
  const books: BookData[] = await response.json();
  return (
    <div>
      {books.map((book) => (
        <BookItem {...book} />
      ))}
    </div>
  );
};

export default Page;
