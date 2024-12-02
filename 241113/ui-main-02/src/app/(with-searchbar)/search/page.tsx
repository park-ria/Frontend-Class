import React, { Suspense } from "react";
import { BookData } from "@/mock/types";
import BookItem from "@/components/book-item";
import delay from "@/util/delay";
import { Metadata } from "next";

//export const dynamic = "force-dynamic";

const SearchResult = async ({ q }: { q: string }) => {
  await delay(1500);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
    { cache: "force-cache" }
  );
  // 한 번이라도 검색한게 있으면 캐시에 남아있게해서 매번 서버로 가서 가져오지 않고 부분적으로 static한 페이지가 될 수 있게끔

  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  // 서버 컴포넌트 밑에 클라이언트 컴포넌트가 들어가면 각각 독립적으로 유지
  const books: BookData[] = await response.json();
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}): Promise<Metadata> => {
  const { q } = await searchParams;

  return {
    title: `${q} : 한입북스 검색`,
    description: `${q}의 검색 결과입니다.`,
    openGraph: {
      title: `${q} : 한입북스 검색`,
      description: `${q}의 검색 결과입니다.`,
      images: ["/thumbnail.png"],
    },
  };
};

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  return (
    <Suspense
      key={(await searchParams).q || ""}
      fallback={<div>Loading...</div>}
    >
      <SearchResult q={(await searchParams).q || ""} />
    </Suspense>
  );
};

export default Page;
