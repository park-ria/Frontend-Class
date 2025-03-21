"use client";

import { deleteReviewAction } from "@/actions/delete-review-action";
import React, { useRef, useActionState, useEffect } from "react";
//useActionState는 sercerAction을 사용하는 곳에서만 사용할 수 있음

const ReviewTtemDeleteButton = ({
  reviewId,
  bookId,
}: {
  reviewId: number;
  bookId: number;
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null
  );

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
      <input type="text" name="reviewId" value={reviewId} hidden readOnly />
      <input type="text" name="bookId" value={bookId} hidden readOnly />
      {isPending ? (
        <div>...</div>
      ) : (
        <div onClick={() => formRef.current?.requestSubmit()}>삭제하기</div>
      )}
    </form>
  );
};

export default ReviewTtemDeleteButton;
