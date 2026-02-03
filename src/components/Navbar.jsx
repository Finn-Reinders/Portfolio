import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SplitText } from "./SplitText";
import { langHover } from "./Cursor";

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
    initial: { y: -57 },
    enter: { y: 0 },
    exit: { y: -57 },
  };

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
        className="flex z-20 w-screen fixed h-[57px]"
      >
        <div className="px-20 content z-10 relative flex items-center justify-between h-full w-full">
          <h2 className="text-black font-extrabold text-xl"></h2>
          <div className="gap-3 flex text-sm flex-row text-gray-700 font-[550] font-['Chillax']">
            <a
              href="/projects"
              className="font w-fit h-[33px] flex px-5 py-2.5 items-center bg-[#e6e6e680] backdrop-blur-[16px] bg-opacity-10 rounded-lg hover:bg-neutral-100 transition duration-300"
            >
              <span className="uppercase">projects</span>
            </a>
            <a
              href="/contact"
              className="w-fit h-[33px] flex px-5 py-2.5 items-center bg-[#e6e6e680] backdrop-blur-[16px] bg-opacity-10 rounded-md hover:bg-neutral-100 transition duration-300"
            >
              <span>
                <svg width="12px" height="12px">
                  <path
                    fill="rgb(55 65 81)"
                    d="M2.413 5.194a10.099 10.099 0 0 0 4.394 4.393L8.273 8.12c.18-.18.447-.24.68-.16.747.247 1.554.38 2.38.38.367 0 .667.3.667.667v2.327c0 .367-.3.667-.667.667C5.073 12 0 6.927 0 .667 0 .3.3 0 .667 0H3c.367 0 .667.3.667.667 0 .833.133 1.633.38 2.38a.669.669 0 0 1-.167.68L2.413 5.194Z"
                  ></path>
                </svg>
              </span>
            </a>
            <div className="relative">
              <button
                onClick={handleToggle}
                className="cursor-none font w-fit h-[33px] flex px-5 py-2.5 items-center bg-[#e6e6e680] backdrop-blur-[16px] bg-opacity-10 rounded-lg hover:bg-neutral-100 transition duration-300"
              >
                <span className="uppercase">en</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    key="lang-dropdown"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={langVariants}
                    className="justify-center items-center rounded-xl absolute w-32 h-28 flex bg-[rgba(1,1,1,.4)] backdrop-blur-sm top-[calc(100%+0.5rem)] right-0 z-50"
                    style={{ isolation: "isolate" }}
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                  >
                    <ul className="text-white w-full h-full flex flex-col justify-center gap-1 px-4 font-sans text-lg language">
                        <SplitText
                          className="leading-[1] font-['Chillax']"
                          paddingBottom="4px"
                          textSize="1rem"
                          text="English"
                          hover={langHover}
                          fontWeight={400}
                          animationDelay={0.45}
                          type="word"
                          tag='li'
                        />
                        <SplitText
                          hover={langHover}
                          className="leading-[1] font-['Chillax']"
                          textSize="1rem"
                          text="Nederlands"
                          fontWeight={400}
                          animationDelay={0.45}
                          type="word"
                          tag='li'
                        />
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
