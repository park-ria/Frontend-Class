"use client"; //Client Component Page라고 정의 해줌.
import React, { useState } from "react";
// useState나 useEffect는 Sever Component Page에서 못 씀! 그래서 Client Component page로 바꿔줘야 함
import { useRouter } from "next/navigation";
//app router 방식은 next/navigation에서 useRouter를 불러봐야 한다

const Searchbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const onchangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={search} type="text" onChange={onchangeSearch} />
        <input type="submit" value="검색" />
      </form>
    </div>
  );
};

export default Searchbar;
