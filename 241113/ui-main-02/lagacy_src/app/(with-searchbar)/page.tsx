//"use client";
// 기본적으로 서버컴퍼넌트임 "use client"를 해줘서 클라이언트 컴포넌트가 돼서 useState나 useEffect를 쓰는데 오류가 없음

// import { useState, useEffect } from "react";
import styles from "./page.module.css";
import ClientComponent from "../../components/client-component";
import ServerComponent from "../../components/server-component";

export default function Home() {
  // console.log("컴포넌트 실행!");
  // const [state, setState] = useState("");
  // useEffect(() => {
  //   console.log("test");
  // }, []);

  // 클라이언트컴포넌트 안에 서버컴포넌트를 넣으면 웹 콘솔에 서버컴포넌트의 콘솔이 찍힘.. 원래 서버컴포넌트는 웹에서 안찍히고 터미널에만 찍힘
  // 클라이언트 컴포넌트 밑에 서버 컴포넌트가 들어가면 서버 컴포넌트가 클라이언트 컴포넌트 화가 됨
  return (
    <div className={styles.page}>
      인덱스 페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
