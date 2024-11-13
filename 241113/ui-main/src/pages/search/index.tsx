import React from "react";
import { useRouter } from "next/router";

const Search = () => {
  // 쿼리스트링 찾아오는 방법
  const router = useRouter();
  const {
    query: { q },
  } = router;

  return <h1>Search : {q}</h1>;
};

export default Search;
