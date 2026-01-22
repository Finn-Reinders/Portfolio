import React from "react";
import { motion } from "framer-motion";
import "../globals.css";

export default function SplitText({
  text = "",
  children,
  className = "",
  textSize = "",
  style = {},
  thicken = false,
  animationDelay = 0,
} = {}) {
  const name =
    typeof children === "string" && children.length ? children : text;
  const characters = String(name).split("");
  const startY = textSize;

  const fontWeight1 = 200;
  const fontWeight2 = 600;



  const duration = .75;  

  return (
    <motion.h1
    transition={{
      duration: 2,
    }}
      style={{ fontSize: textSize, ...style }}
      className={`split-text ${className}`.trim()}
    >
      {characters.map((char, i) => {
        const delay = animationDelay + 0.05 * i;

        return (
          <motion.span
            className="inline-block relative"
            initial={{ y: startY, fontWeight: fontWeight1 }}
            animate={thicken ? { y: 0, fontWeight: fontWeight2 } : { y: 0, fontWeight: fontWeight1 }}
            transition={{
              y: {
                duration: duration,
                delay,
                ease: [0.63, 0.2, 0.19, 0.88],
              },
              ...(thicken && {
                fontWeight: {
                  duration: duration,
                  delay: delay + duration,
                  ease: 'circInOut',
                },
              })
            }}
            key={`char_${i}`}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}
