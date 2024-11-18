import "@/styles/globals.css";
import { ReactNode } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
import GlobalLayout from "@/components/global-layout";

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  // getLayout을 추가하기 위해 & { Component: NextPageWithLayout } 추가

  // const router = useRouter();

  // const onClickButton = () => {
  //   router.push("/test"); // 이동, 뒤로가기 가능
  //   //router.replace("/test"); // replace는 이동을 하긴하지만 뒤로가기 방지해줌
  //   //router.back(); // 뒤로가기
  // };

  // useEffect(() => {
  //   // 현재 사용자가 보고 있는 페이지에서 이동 가능한 페이지들을 사전에 불러와서 대기해주는 역할
  //   router.prefetch("/test");
  // }, []);

  // return (
  //   <>
  //     <header>
  //       <Link href={"/"}>Index</Link>
  //       &nbsp;
  //       {/* prefetch는 기본으로 true인데 prefetch 안하고 싶으면 false를 해야한다 반영을 하기 위해서는 서버를 끄고 npm run build를 해줘야 함*/}
  //       <Link href={"/search"} prefetch={false}>
  //         /Search
  //       </Link>
  //       &nbsp;
  //       <Link href={"/book/1"}>Book/1</Link>
  //       <div>
  //         <button onClick={onClickButton}>/test 페이지로 이동</button>
  //       </div>
  //     </header>
  //     <Component {...pageProps} />
  //   </>
  // );

  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
