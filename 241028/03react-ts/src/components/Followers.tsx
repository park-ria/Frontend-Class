import React from "react";
import { useOutletContext } from "react-router-dom";

interface FollowerContext {
  nameOfMyUsers: string;
}

const Followers = () => {
  const { nameOfMyUsers } = useOutletContext<FollowerContext>();
  return <div>Here are {nameOfMyUsers}의 Followers</div>;
};

export default Followers;
