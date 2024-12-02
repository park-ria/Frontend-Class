/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { ReactNode, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import style from "./modal.module.css";
import { useRouter } from "next/navigation";

const Modal = ({ children }: { children: ReactNode }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({ top: 0 });
    }
  }, []);
  return createPortal(
    <dialog
      onClose={() => router.back()}
      onClick={(e) => {
        if ((e.target as any).nodeName === "DIALOG") {
          router.back();
        }
      }}
      className={style.modal}
      ref={dialogRef}
    >
      {children}
    </dialog>,
    // dialog는 부모 요소를 기준으로 그 위에 덮어지는 글로벌 적인 요소의 태그
    document.getElementById("modal-root") as HTMLElement
    // 서버컴포넌트 기반이라서 document를 못찾음 클라이언트 컴포넌트 페이지로 바꿔줘야함
  );
};

export default Modal;
