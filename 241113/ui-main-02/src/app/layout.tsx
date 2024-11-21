import React, { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";

const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📕ONBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <footer>제작 @Ria</footer>
        </div>
      </body>
    </html>
  );
};

export default Rootlayout;
