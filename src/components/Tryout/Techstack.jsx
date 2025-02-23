import React from "react";
import { motion } from "framer-motion";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const Techstack = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const tech = [
    { id: 1, icon: <SiHtml5 />, name: "HTML", color: "#CD505A" },
    { id: 2, icon: <SiCss3 />, name: "CSS", color: "#14CF93" },
    { id: 3, icon: <SiTailwindcss />, name: "Tailwind", color: "#0E0F14" },
    { id: 4, icon: <SiJavascript />, name: "JavaScript", color: "#CD505A" },
    { id: 5, icon: <SiGit />, name: "Git", color: "#14CF93" },
    { id: 6, icon: <SiReact />, name: "React", color: "#0E0F14" },
    { id: 7, icon: <SiReactrouter />, name: "React Router", color: "#CD505A" },
    {
      id: 8,
      icon: <TbBrandFramerMotion />,
      name: "Framer Motion",
      color: "#14CF93",
    },
  ];
  return (
    <div className=" w-full  py-12 px-4 ">
      <h1 className=" text-center text-4xl font-bold font-family text-white mb-8">
        TECHSTACK
      </h1>
      <div className="max-w-7xl mx-auto p-4   relative  ">
        {/* cards */}
        <div
          variants={container}
          initial="hidden"
          animate="show"
          className=" flex gap-8 text-xl"
        >
          {tech.map((item) => (
            <motion.div
              key={item.id}
              variants={item}
              className={`bg-[#F1F0EB] border border-[${item.color}]  rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:scale-110 duration-300 hover:shadow-2xl`}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techstack;
