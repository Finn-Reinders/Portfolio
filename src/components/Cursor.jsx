import React, { useEffect, useState } from "react";
import "../globals.css";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setPos({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
      <motion.div
        animate={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
        transition={{
          duration: 0.1,
        }}
        className="rounded-full z-[1000] bg-[rgb(76,76,76)] pointer-events-none h-6 w-6 fixed isolate mix-blend-difference"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      ></motion.div>
  );
}
