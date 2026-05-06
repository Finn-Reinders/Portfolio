import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SplitText } from "./SplitText";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false);

  function handleToggle() {
    setLangOpen((prev) => !prev);
  }

  const langVariants = {
    closed: {
      clipPath: "inset(50% round 15px)",
      opacity: 0,
    },
    open: {
      clipPath: "inset(0% round 15px)",
      opacity: 1,
    },
  };

  const navVariants = {
    initial: { y: 57 },
    enter: { y: 0, transition: { duration: 1 } },
  };

  const [contactOpen, setContactOpen] = useState(false);

  return (
    <AnimatePresence>
      <motion.nav
        transition={{
          duration: 0.4,
        }}
        initial="initial"
        exit="exit"
        animate="enter"
        variants={navVariants}
        className="flex z-20 w-screen fixed mt-[-57px] h-[57px]"
      >
        <div className="px-20 content z-10 relative flex items-center justify-between h-full w-full">
          <div className="bg-[hsl(0,0%,84%)] hover:bg-[hsl(0,0%,64%)] transition-all w-fit h-fit px-2 py-1 rounded-lg">
            <Link to={"/"}>
              {/* <img src="/assets/svgs/home.svg" alt="" /> */}
              <p className="font-['Instrument'] text-xl">Take me home</p>
            </Link>
          </div>
          <div className="gap-3 flex text-sm flex-row text-gray-700 font-[550] font-['Chillax']">
            <div className="relative"></div>
          </div>
        </div>
        <div className="progressive-blur-container">
          <div className="blur-filter"></div>
          <div className="blur-filter"></div>
          <div className="blur-filter"></div>
          <div className="blur-filter"></div>
          <div className="blur-filter"></div>
          <div className="blur-filter"></div>
          <div className="blur-filter"></div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
