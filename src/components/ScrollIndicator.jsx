import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ScrollIndicator() {
  let showIndicator = false;
  function scrollCheck() {
    window.addEventListener("scroll", () => {});
  }
  return (
    <AnimatePresence>
      {showIndicator && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1  }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 1,
            ease: 'backInOut',
          }}
          className="fixed scroll-indicator backdrop-blur-sm mix-blend-difference bottom-5 flex justify-center items-center px-5 py-2 left-[50%] translate-x-[-50%] z-[100] rounded-3xl text-white"
        >
          Scroll
        </motion.div>
      )}
    </AnimatePresence>
  );
}
