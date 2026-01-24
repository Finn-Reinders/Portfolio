import React, { useEffect, useState } from "react";
import "../globals.css";
import { motion, animate } from "framer-motion";

export function langHover() {
  const item = document.getElementById("cursor");
  animate(item, { width: ".75rem", height: ".75rem" });
}

export function resetCursor() {
  const item = document.getElementById("cursor");
  animate(item, { width: "1.5rem", height: "1.5rem", });
}

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
      id="cursor"
      className="rounded-full z-[1000] bg-[rgb(76,76,76)] pointer-events-none fixed isolate mix-blend-difference"
      style={{
        transform: "translate(-50%, -50%)",
        width: "1.5rem",
        height: "1.5rem",
      }}
    ></motion.div>
  );
}
