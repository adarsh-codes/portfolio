"use client";
import React from "react";

const Tabbutton = ({active, selectTab, children}) => {

    const buttonclasses = active ? 'text-white border-b border-purple-500': 'text-[#ADB7BE]'
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonclasses}`}>
        {children}
      </p>
    </button>
  );
};

export default Tabbutton;
