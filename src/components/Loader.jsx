import React from "react";
import { motion, animate, AnimatePresence } from "framer-motion";
import { useRef } from "react";

export default function Loader() {
  const variants = {
    startLoading: { opacity: 0},
    loading: { opacity: 1},
    doneLoading: {opacity: 0},
  };

  return (
      <div className="w-screen h-screen absolute flex justify-center items-center top-0 left-0 z-[200]">
        <motion.div
          initial="startLoading"
          animate="loading"
          exit="doneLoading"
          variants={variants}
          transition={{
            duration: 1,
          }}
          className="loader bg-black w-5 h-5"
        ></motion.div>
      </div>
  );
}
