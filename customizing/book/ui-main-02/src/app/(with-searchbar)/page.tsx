import styles from "./page.module.css";
import BookItem from "@/components/book-item";
import { BookData } from "@/mock/types";
import delay from "@/util/delay";
import { Suspense } from "react";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
// 특정 페이지의 유형을 강제로 static, dynamic 페이지로 설정하도록 하는 옵션들
// 1. auto : 페이지 컴포넌트의 기본값을 보장 => static, dynamic을 강제하지 않음
// 2. force-dynamic : 페이지를 강제적으로 Dynamic 페이지로 설정
// 3. force-static : 페이지를 강제적으로 Static 페이지로 설정
// 4. error

const RecoBooks = async () => {
  await delay(3000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    {
      next: {
        revalidate: 3, //3초가 지나면 캐시 저장
      },
    } //no-store 캐시를 저장하지 않음, force-cache 캐시를 저장
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const recoBooks: BookData[] = await response.json();
  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

const AllBooks = async () => {
  await delay(1500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" } // 캐시값을 가지고있어서 한입북스 서버를 끄더라도 값이 보임
    //{ cache: "no-store" } // 캐시를 저장하지 않겠다
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const allBooks: BookData[] = await response.json();
  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
};

export const metadata: Metadata = {
  title: "한입 북스",
  description: "한입 북스에 등록된 도서를 만나보세요!",
  openGraph: {
    title: "한입 북스",
    description: "한입 북스에 등록된 도서를 만나보세요!",
    images: ["/thumbnail.png"],
  },
};

const Home = async () => {
  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <Suspense fallback={<BookListSkeleton count={3} />}>
          <RecoBooks />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <Suspense fallback={<BookListSkeleton count={10} />}>
          <AllBooks />
        </Suspense>
      </section>
    </div>
  );
};

export default Home;
