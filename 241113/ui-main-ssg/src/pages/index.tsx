import React, { ReactNode } from "react";
import style from "./index.module.css";
// 그냥 css는 못찾아오고 css를 모듈화한 css만 가져올 수 있음
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
// @는 절대좌표(src)를 의미
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

export const getStaticProps = async () => {
  // SSG 방식은 export const getStaticProps 함수를 만들어 주기만 하면 됨
  // build 단계에서
  // 서버에서 관리하는 데이터 패칭 영역임

  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: {
      allBooks,
      recoBooks,
    },
    //revalidate: 3, //3초에 한 번씩 재검증시킴 => ISR방식
  };
};

//InferGetServerSidePropsType<typeof getServerSideProps>는 SSR 방식의 데이터 타입은 무조건 이걸로 씀!!!
const Home = ({
  allBooks,
  recoBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>한입북스</title>
        <meta property="og:image" content="/thumnail.png" />
        <meta property="og:title" content="한입북스" />
        <meta
          property="og:description"
          content="한입북스에 등록된 도서들을 만나보세요"
        />
      </Head>
      <main className={style.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          {recoBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          {allBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
      </main>
    </>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Home;
