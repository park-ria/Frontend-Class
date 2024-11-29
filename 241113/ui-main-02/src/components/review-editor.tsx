"use client";

import React, { useActionState, useEffect } from "react";
import style from "./review-editor.module.css";
import { createReviewAction } from "@/actions/create-review-actiohns";

const ReviewEditor = ({ bookId }: { bookId: string }) => {
  // 리뷰를 업로드하는 로딩 중에 중복 등록 방지하기 위해
  // formAction은 최신 문법이라 정의된 타입이 없어서 create-review-action.ts의 createReviewAction에 _:any라는 타입을 주어야 함
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null
  );
  // isPending을 통해서 연타 불가하게 막음

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section>
      <form className={style.form_container} action={formAction}>
        <input type="text" name="bookId" value={bookId} hidden readOnly />
        <textarea
          disabled={isPending}
          name="content"
          placeholder="리뷰내용"
          required
        />
        <div className={style.submit_container}>
          <input
            disabled={isPending}
            type="text"
            name="author"
            placeholder="작성자"
            required
          />
          <input
            disabled={isPending}
            type="submit"
            value={isPending ? "..." : "작성하기"}
          />
        </div>
      </form>
    </section>
  );
};

export default ReviewEditor;
