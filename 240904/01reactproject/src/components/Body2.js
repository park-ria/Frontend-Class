import React, { useState } from "react";

const Body2 = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [bio, setBio] = useState("");

  const onChanageName = (e) => {
    setName(e.target.value);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChnage={onChanageName} placeholder="이름" />
      </div>
      <div>
        <select value={gender} onChange={onChangeGender}>
          <option>남성</option>
          <option>여성</option>
        </select>
      </div>
      <div>
        <input value={birth} type="date" onChange={onChangeBirth} />
      </div>
      <div>
        <textarea value={bio} onChange={onChangeBio} />
      </div>
    </div>
  );
};
export default Body2;
