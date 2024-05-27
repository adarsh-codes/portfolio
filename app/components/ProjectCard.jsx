"use client";
import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgurl, title, desc, gitUrl, previewUrl }) => {
 
  
  return (
    <div className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgurl})`, backgroundSize: "cover" }}
      >
        <div className="overlay absolute items-center justify-center top-0 left-0 h-full w-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={`${gitUrl}`}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group/link-hover:text-white" />
          </Link>
          <Link
            href={`${previewUrl}`}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group/link-hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white mt-3 rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
