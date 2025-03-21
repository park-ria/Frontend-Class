/* eslint-disable @typescript-eslint/no-explicit-any */

//"use server"를 넣으면 서버 액션 -> 서버의 값을 제어함
"use server";

import delay from "@/util/delay";
import { revalidatePath } from "next/cache";

export const createReviewAction = async (_: any, formData: FormData) => {
  const bookId = formData.get("bookId")?.toString();
  const content: FormDataEntryValue | null | undefined = formData
    .get("content")
    ?.toString();
  const author: FormDataEntryValue | null | undefined = formData
    .get("author")
    ?.toString();

  if (!content || !author || !bookId) {
    return {
      status: false,
      error: "리뷰 내용과 작성자를 입력해주세요!",
    };
  }

  try {
    await delay(2000);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }),
      }
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // revalidatePath 옵션 5가지
    // 1. 특정 주소 해당 및 관련 컴포넌트 페이지들의 재검증
    //revalidatePath(`book/${bookId}`); // 알아서 재검증 -> 새로고침하지 않아도 바로 반영됨(리렌더링) //단점은 ReviewEditor만 재검증 되는게 아니라 같은 형제인 Booktail, ReviewList도 같이 리렌더링 됨
    // 기존에 가지고 있던 요소도 다 날리고 리렌더링함

    // 2. 특정 경로의 모든 페이지를 재검증
    //revalidatePath(`book/[id]`, "page");

    // 3. 특정 레이아웃을 갖는 모든 페이지 재검증
    //revalidatePath(`/(with-searchbar)`, "layout");

    // 4. 현재 작업중인 모든 페이지 재검증
    //revalidatePath("/", "layout");

    // 5. 태그 기준, 데이터 캐시 재검증 => 추천!
    revalidatePath(`review-${bookId}`); // book/id/page.tsx의 태그 값이 같은 것만 리렌더링 함

    return {
      status: true,
      error: "",
    };
  } catch (err) {
    console.error(err);
    return {
      status: false,
      error: `리뷰 저장에 실패했습니다. : ${err}`,
    };
  }
};
