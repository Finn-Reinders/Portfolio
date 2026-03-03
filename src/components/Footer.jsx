import React from "react";
import { motion } from "framer-motion";
import { anim } from "../anim";

export default function Footer() {
  const footerLeave = {
    initial: {
      y: 40 + "vh",
      transition: { duration: 1, ease: [0.85, 0, 0.15, 1] },
    },
    enter: {
      y: 0,
      transition: { duration: 1, ease: [0.85, 0, 0.15, 1] },
    },
    exit: {
      y: 40 + "vh",
      transition: { duration: 1, ease: [0.85, 0, 0.15, 1] },
    },
  };
  return (
    <div className='w-fit h-fit overflow-hidden'>
      <motion.section
        {...anim(footerLeave)}
        className="p-4 h-[40vh] flex w-screen bg-black text-white"
      >
        <h2 className="text-4xl font-['Instrument']">Footer</h2>
      </motion.section>
    </div>
  );
}
