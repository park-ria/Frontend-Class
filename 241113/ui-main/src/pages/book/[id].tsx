import React from "react";
//import { useRouter } from "next/router";
import style from "./[id].module.css";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import fetchOneBook from "@/lib/fetch-one-books";

// 값을 받을때는 []표기법을 파일명으로 써서 받음 : /book/1
// 값을 여러개 받을 때는 [...id].tsx와 같이 변경해주면 됨
// 복수의 동적 파라미터 값을 반영하는 path의 경우, Catch All Segment 기능 사용
// [[...idx]].tsx는 /book이후에 파라미터 값이 없는 것과 있는 것을 모두다 받을 때 사용

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id;
  //? undefined가 될 수도 있다, !는 값이 존재한다고 확정
  const book = await fetchOneBook(Number(id));

  return {
    props: { book },
  };
};

const Index = ({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!book) return "문제가 발생했습니다! 다시 시도해주세요";

  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;

  // const router = useRouter();
  // const { id } = router.query;

  // const {
  //   query: { id },
  // } = router;

  // console.log(id);

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url("${coverImgUrl}")` }}
      >
        <img src={coverImgUrl} alt="bookImg" />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
};

export default Index;
