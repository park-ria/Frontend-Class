"use client"; //Client Component Page라고 정의 해줌.
import React, { useState } from "react";
// useState나 useEffect는 Sever Component Page에서 못 씀! 그래서 Client Component page로 바꿔줘야 함

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const onchangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={onchangeSearch} />
      <button>검색</button>
    </div>
  );
};

export default Searchbar;
