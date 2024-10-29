import React from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import { users } from "../db";

const User = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>
        User with id {userId} is name: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      {/* http://localhost:3000/followers -> 부모 경로 쓰지 않음 : 절대경로
      <Link to={"/followers"}>See Followers</Link> */}
      {/* http://localhost:3000/users/2/followers -> 부모 경로 뒤에 붙음 : 상대경로 */}
      <Link to={"followers"}>See Followers</Link>
      <Outlet
        context={{
          nameOfMyUsers: users[Number(userId) - 1].name,
        }}
      />
    </>
  );
};

export default User;
