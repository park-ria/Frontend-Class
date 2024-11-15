import React, { ReactNode } from "react";
//import { useRouter } from "next/router";
import SearchableLayout from "@/components/searchable-layout";
//import books from "@/mock/book.json";
import BookItem from "@/components/book-item";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
// GetServerSidePropsContext는 서버사이드 렌더링 방식의 데이터 패칭을 쓴다면 쿼리스트링을 찾아올 때 쓰는 타입
import fetchBooks from "@/lib/fetch-books";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  //console.log(context);
  // 서버 사이드 렌더링 방식으로 하기때문에 웹이서는 출력할 수 없지만 터미널에는 찍힘
  // 서버에만 있고 아직 웹으로 가지 않음

  const q = context.query.q;
  const books = await fetchBooks(q as string);

  return {
    props: { books },
  };
};

const Page = ({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // 쿼리스트링 찾아오는 방법
  // const router = useRouter();
  // const {
  //   query: { q },
  // } = router;

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Page;
