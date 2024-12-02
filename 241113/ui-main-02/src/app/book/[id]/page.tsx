import React from "react";
import style from "./page.module.css";
import { notFound } from "next/navigation";
import { BookData, ReviewData } from "@/mock/types";
import ReviewItem from "@/components/review-item";
import ReviewEditor from "@/components/review-editor";

//export const dynamicParams = false;
// 존재하는 파라미터라도 generateStaticParams 지정되지 않은 페이지는 404페이지로 이동 -> 굉장히 엄격

const Booktail = async ({ bookId }: { bookId: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`,
    { cache: "force-cache" }
  ); // 어떤 페이지를 찾을지 모르니까 미리 id를 정해놓고 페이지를 정적으로 만들어 놓는다,

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다...</div>;
  }

  const book = await response.json();

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url("${coverImgUrl}")` }}
      >
        <img src={coverImgUrl} alt={title} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`,
    { cache: "force-cache" }
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const book: BookData = await response.json();

  return {
    title: `${book.title} - 한입북스`,
    description: book.description,
    openGraph: {
      title: `${book.title} - 한입북스`,
      description: book.description,
      images: [book.coverImgUrl],
    },
  };
};

// generateStaticParams 함수명 자체가 static(정적인) Parameter를 생성하는 함수
export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};
// 단점 : 미리 지정해놓은 페이지는 캐시에 넣어놓으면 좋으나, 존재하지 않는 페이지도 캐시값에 넣음 -> 이럴땐 404페이지 -> notFound();

const ReviewList = async ({ bookId }: { bookId: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`,
    {
      next: {
        tags: [`review-${bookId}`],
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Review fetch failed: ${response.statusText}`);
  }

  const reviews: ReviewData[] = await response.json();
  return (
    <section>
      {reviews.map((review) => (
        <ReviewItem key={`review-item-${review.id}`} {...review} />
      ))}
    </section>
  );
};

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <div className={style.container}>
      <Booktail bookId={(await params).id} />
      <ReviewEditor bookId={(await params).id} />
      <ReviewList bookId={(await params).id} />
    </div>
  );
};

export default Page;
