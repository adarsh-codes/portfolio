"use client";
import React from "react";

const Projecttag = ({ name, onClick, isSelected }) => {
  const buttonstyles = isSelected
    ? "text-white bg-purple-500"
    : "text-[#ADB7BE] bg-slate-600 hover:border-white";
  return (
    <button
      className={` ${buttonstyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default Projecttag;
