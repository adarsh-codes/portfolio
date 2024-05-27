"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navlink from "./Navlink";
import { Bars3Icon,XMarkIcon,XmarkIcon} from "@heroicons/react/24/solid";
import Menuoverlay from "./Menuoverlay";
import { Image } from "@chakra-ui/react"
import about from "./Aboutsection";



const Navlinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];



const Navbar = () => {
  
    const [navbaropen, setnavbaropen] = useState(false);

  return (
    <nav className="fixed top-0 border-[#33353F] border-b left-0 right-0 z-10 bg-opacity-90 bg-[#121212]">
      <div className="flex lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          className="text-2xl md:text-5xl text-white font-semibold"
          href="/"
        >
          <Image src={"/portfolio.png"} height={60} width={60} className="ml-10"/>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbaropen ? (
            <button onClick={()=> setnavbaropen(true)} className=" hover:text-white hover:border-white flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200">
                <Bars3Icon className="h-5 w-5"/>
            </button>
          ) : (
              <button onClick={()=> setnavbaropen(false)} className=" hover:text-white hover:border-white flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200">
               <XMarkIcon className='h-5 w-5'/>
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 md-space mt-0">
            {Navlinks.map((link, index) => (
              <li key={index}>
                <Navlink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbaropen ? <Menuoverlay links={Navlinks}/>: null}
    </nav>
  );
};

export default Navbar;
