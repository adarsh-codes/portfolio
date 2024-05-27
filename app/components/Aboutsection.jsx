"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import Tabbutton from "./Tabbutton";
import {motion} from 'framer-motion'

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>React.js</li>
        <li>MongoDB</li>
        <li>C++</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>IET DAVV, Indore (2021-2025)</li>
        <li>St. Joseph's School, Shaktinagar (2020)</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Developed Several React applications</li>
        <li>GITHUB LINK</li>
      </ul>
    ),
  },
];

const Aboutsection = () => {
  const [tab, settab] = useState("skills");
  const [pending, starttransition] = useTransition();

  const handletabchange = (id) => {
    starttransition(() => {
      settab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/about-image.png" height={500} width={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-white text-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a skilled full-stack web developer adept in HTML, CSS,
            JavaScript, React, Next.js, C++, and data structures/algorithms.
            Collaborative by nature, I excel in team environments, leveraging
            strong communication and problem-solving abilities to achieve
            collective objectives. Continual learning is my ethos, ensuring I
            remain at the forefront of industry trends and technologies. With a
            focus on delivering high-quality solutions, I optimize code for
            efficiency and performance. My passion for innovation drives me to
            explore new avenues in web development, contributing to dynamic and
            responsive applications. As a dedicated professional, I strive to
            exceed expectations and foster success in every project.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <Tabbutton
              selectTab={() => handletabchange("skills")}
              active={tab === "skills"}
            >
              {""}
              Skills{""}
            </Tabbutton>
            <Tabbutton
              selectTab={() => handletabchange("education")}
              active={tab === "education"}
            >
              {""}
              Education{""}
            </Tabbutton>
            <Tabbutton
              selectTab={() => handletabchange("experience")}
              active={tab === "experience"}
            >
              {""}
              Experience{""}
            </Tabbutton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t)=>t.id === tab).content}</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Aboutsection;
