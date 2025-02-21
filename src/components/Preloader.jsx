import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import cook1 from "../assets/cook1.png";
import cook2 from "../assets/cook2.png";
import {
  move,
  imgChange,
  containerUp,
} from "../components/preloaderAnimations";

const Preloader = ({ setLoading }) => {
  const [scope, animate] = useAnimate();

  async function myAnimation() {
    await animate("#imgcon", {
      clipPath: "polygon(50% 40%,50% 40%,50% 60%,50% 60%)",
      display: "none",
    });
    await animate(
      "#imgcon",
      { clipPath: "polygon(0 40%,100% 40%,100% 60%,0 60%)", display: "flex" },
      { delay: 0.45, duration: 0.4, ease: "easeInOut" }
    );
    await animate(
      "#imgcon",
      { clipPath: "polygon(0 0, 100% 0%,100% 100%, 0 100%)", display: "flex" },
      { delay: 0.2, duration: 0.4, ease: "easeInOut" }
    );
  }

  useEffect(() => {
    myAnimation();
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <motion.div
      variants={containerUp}
      initial="hidden"
      animate="show"
      className="bg-[#0e0e0e] h-screen w-screen absolute inset-0 overflow-hidden z-50"
      ref={scope}
    >
      <motion.div className="flex justify-center items-center w-full h-full">
        <div className="overflow-y-clip">
          <motion.h1
            variants={move}
            initial="hidden"
            animate={["moveUp", "moveLeft"]}
            custom={[100, 0.3]}
            className="text-white font-bold text-2xl md:text-[60px] "
          >
            NASHLES
          </motion.h1>
        </div>
        <div id="imgcon" className="w-[200px] h-max relative">
          <motion.img
            variants={imgChange}
            initial="hidden"
            animate="show"
            custom={1.8}
            src={cook2}
            alt=""
          />
          <motion.img
            variants={imgChange}
            initial="hidden"
            animate="show"
            custom={2.2}
            src={cook1}
            alt=""
          />

          <motion.img
            variants={imgChange}
            initial="hidden"
            animate="show"
            transition={{ delay: 3, duration: 0.6, ease: "easeInOut" }}
            src={cook2}
            alt=""
          />
        </div>
        <div className="overflow-y-clip">
          <motion.h1
            variants={move}
            initial="hidden"
            animate={["moveUp", "moveRight"]}
            custom={[-100, 0.3]}
            className="text-white font-bold  text-2xl md:text-[60px]"
          >
            KITCHEN
          </motion.h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
