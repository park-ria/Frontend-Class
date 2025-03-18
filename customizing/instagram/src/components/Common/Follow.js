import React, { useContext } from "react";
import { StateContext } from "../../App";
import { follow } from "../../utils/utils";

const Follow = ({ txt, uid }) => {
  const { myProfile } = useContext(StateContext);

  return <span onClick={() => follow(myProfile.uid, uid)}>{txt}</span>;
};

export default Follow;
