"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import EmailSection from "./Emailsection";
import {motion} from 'framer-motion'



const Herosection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Hello, my name is {
                 
            }</span>
            <br></br>
             <TypeAnimation
                  sequence={[
                    'Adarsh!',
                    3000, 
                    'Web Developer',
                    1000,
                    'Problem Solver',
                    1000,
                  
                  
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '1em', display: 'inline-block' }}
                  repeat={Infinity}
                />
          </h1>
          <p className="text-white text-base mb-6 sm:text-lg lg:text-xl">
          I&apos;m currently looking for new opportunities in the field of software engineering and web development, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
          </p>
          <div>
            <button onClick={()=>{
              
            }} className="px-6 py-3 w-full sm:w-fit text-black rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200">Hire Me</button>
            <button className="px-1 py-1 w-full sm:w-fit mt-3 bg-gradient-to-r rounded-full from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </button>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[350px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border rounded-lg"
              src={"/img.png"}
              width={200}
              alt="propic"
              height={200}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
