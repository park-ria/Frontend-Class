import React, { ReactNode } from "react";
import style from "./index.module.css";
// 그냥 css는 못찾아오고 css를 모듈화한 css만 가져올 수 있음
import SearchableLayout from "@/components/searchable-layout";
//import books from "@/mock/book.json";
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";
// @는 절대좌표(src)를 의미
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";

export const getServerSideProps = async () => {
  // SSR 방식은 export const getServerSideProps라는 함수를 만들어 주기만 하면 됨
  // Home이라는 페이지 컴포넌트가 실행되기 전에 먼저 실행되어서, 컴포넌트에 필요한 데이터를 사전에 패칭 및 불러와주는 기능을 하는 함수
  // 컴포넌트 페이지가 마운트가 되기전에 사전에 준비를 함
  // 서버에서 관리하는 데이터 패칭 영역임

  //window.location; // window는 브라우저이기 때문에 window is not defined 뜸
  //console.log("서버사이드 프롭스!");
  // 서버에서 동작하므로 터미널에 찍히지만, 웹 console에는 찍히지 않음
  // 데이터를 출력시키기 위해 준비시키는 단계여서 component에 도달하지 않음

  //const data = "hello";

  /*const allBooks = await fetchBooks();
  const recoBooks = await fetchRandomBooks();*/
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: {
      //data,
      allBooks,
      recoBooks,
    },
  };
};

//InferGetServerSidePropsType<typeof getServerSideProps>는 SSR 방식의 데이터 타입은 무조건 이걸로 씀!!!
const Home = ({
  //data,
  allBooks,
  recoBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  //console.log(data); // hello라고 터미널과 브라우저 콘솔에 찍힘

  // useEffect(() => {
  //   console.log(window);
  //   // 마운트 된 순간이므로 브라우저에 출력 가능
  // }, []);

  //console.log(allBooks);

  return (
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
  );
};

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Home;
