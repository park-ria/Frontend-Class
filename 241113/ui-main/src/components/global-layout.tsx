import { ReactNode } from "react";
import Link from "next/link";
import style from "./global-layout.module.css";

//파일 명은 소문자로 하더라도 함수형 컴포넌트는 대문자로 시작해야함
const GlobalLayout = ({ children }: { children: ReactNode }) => {
  // 자식요소의 타입은 ReactNode 해주면 된다
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>📘 Book Lists</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>Copyright @Riapark</footer>
    </div>
  );
};
export default GlobalLayout;
