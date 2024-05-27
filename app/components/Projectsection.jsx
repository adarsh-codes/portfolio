"use client";
import React,{useRef, useState} from "react";
import ProjectCard from "./ProjectCard";
import Projecttag from "./Projecttag";
import {motion , useInView} from 'framer-motion'

const project = [
  {
    title: "Calculator",
    id: 1,
    desc: "A user-friendly React app designed for seamless arithmetic calculations. Its intuitive interface enables users to perform basic operations like addition, subtraction, multiplication, and division efficiently. With clear input fields and instant results, it offers a convenient way to crunch numbers on web platforms with ease and accuracy.",
    image: "/calc.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adarsh-codes/calculator-react",
    previewUrl: "",
  },
  {
    title: "Live Clock",
    id: 2,
    desc: "A React-based live clock app showcasing real-time accuracy. Built with React components, it dynamically updates to reflect the current time, providing users with an accurate and responsive digital clock experience on web platforms, enhancing usability and convenience for timekeeping needs.",
    image: "/clock.png",
    tag: ["All","Web"],
    gitUrl: "https://github.com/adarsh-codes/live-clock",
    previewUrl: "",
  },
  {
    title: "To-Do List",
    id: 3,
    desc: "A React-based  to-do list app. Users can easily add tasks, view them in a structured list, and manage their workload effectively. Each task includes edit and delete buttons for seamless modifications. The edit function allows updating task details directly within the list, while the delete option removes tasks permanently. The app ensures a user-friendly experience with responsive design and intuitive controls. State management is handled using React's useState hook, ensuring dynamic updates. This app enhances productivity by providing a simple yet powerful way to organize and track daily tasks efficiently.",
    image: "/todo.png",
    tag: ["All","Web"],
    gitUrl: "https://github.com/adarsh-codes/todo",
    previewUrl: "",
  },
];
const Projectsection = () => {
  const [tag, settag] = useState("All");
  const ref = useRef(null);
  const isinview = useInView(ref,{once : true});

  const handletagchange = (newtag) => {
    settag(newtag);
  }

  const filterproject = project.filter((proj)=>
  proj.tag.includes(tag)
)
const cardvariant = {
  initial:{y:50,opacity:0},
  animate:{y:0,opacity:1}
}
  return (
    <section id="projects">
      <h2 className="text-white text-4xl text-center">My Projects</h2>

      <div className="flex text-white flex-row justify-center items-center gap-2 py-6">
        <Projecttag
          name="All"
          onClick={handletagchange}
          isSelected={tag === "All"}
        />
        <Projecttag
          name="Web"
          onClick={handletagchange}
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterproject.map((pro,index) => (
          <motion.li key={index} variants={cardvariant} initial="initial" animate={isinview ? "animate":"initial"} transition={{duration:0.3,delay:index*0.4}}>
          <ProjectCard 
            key={pro.id}
            title={pro.title}
            desc={pro.desc}
            imgurl={pro.image}
            gitUrl={pro.gitUrl}
            previewUrl={pro.previewUrl}
          />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projectsection;
