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
  const SlideLeft = {
    hidden: { x: "50%", opacity: 0 },

    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        delay: index * 0.2,
      },
    }),
  };
  return (
    <div className="bg-[#F1F0EB] w-full  py-12 px-4 mb-16">
      <h1 className=" text-center text-4xl font-bold font-family text-[#0E0F14] mb-8">
        TECHSTACK
      </h1>
      <div className="max-w-7xl mx-auto p-4   relative  ">
        {/* cards */}
        <motion.div className="  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-xl">
          <motion.div
            variants={SlideLeft}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="bg-[#F1F0EB] border-[#CD505A]  border text-[#CD505A] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-[#F1F0EB] hover:scale-110 duration-300 hover:shadow-2xl"
          >
            <SiHtml5 /> HTML
          </motion.div>
          <motion.div
            variants={SlideLeft}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="bg-[#F1F0EB] border-[#14CF93]  border text-[#14CF93] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-[#F1F0EB] hover:scale-110 duration-300 hover:shadow-2xl"
          >
            <SiCss3 /> CSS
          </motion.div>
          <motion.div
            variants={SlideLeft}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="bg-[#F1F0EB] border-[#0E0F14]  border text-[#0E0F14] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-[#F1F0EB] hover:scale-110 duration-300 hover:shadow-2xl"
          >
            Tailwind <SiTailwindcss />
          </motion.div>
          <motion.div
            variants={SlideLeft}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="bg-[#F1F0EB] border-[#CD505A]  border text-[#CD505A] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-[#F1F0EB] hover:scale-110 duration-300 hover:shadow-2xl"
          >
            Javascript <SiJavascript />
          </motion.div>
          <motion.div
            variants={SlideLeft}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="bg-[#F1F0EB] border-[#14CF93] border text-[#14CF93]  rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-[#F1F0EB] hover:scale-110 duration-300 hover:shadow-2xl"
          >
            Git <SiGit />
          </motion.div>
          <motion.div
            variants={SlideLeft}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="bg-[#F1F0EB] border-black border text-[#0E0F14] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-[#F1F0EB] hover:scale-110 duration-300 hover:shadow-2xl"
          >
            React <SiReact />
          </motion.div>
          <motion.div
            variants={SlideLeft}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="bg-[#F1F0EB] border-[#CD505A]  border text-[#CD505A]  rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-[#F1F0EB] hover:scale-110 duration-300 hover:shadow-2xl"
          >
            React Router <SiReactrouter />
          </motion.div>
          <motion.div
            variants={SlideLeft}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="bg-[#F1F0EB] border-[#14CF93] border text-[#14CF93] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-[#F1F0EB] hover:scale-110 duration-300 hover:shadow-2xl"
          >
            Framer Motion <TbBrandFramerMotion />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Techstack;
