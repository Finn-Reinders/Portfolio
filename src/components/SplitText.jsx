import React from "react";
import { motion } from "framer-motion";
import "../globals.css";

export const SplitText = ({
  hover,
  text = "fill in the text prop",
  className = "",
  textSize = "1rem",
  style = {},
  thicken = false,
  animationDelay = 0,
  href = null,
  fontWeight = 200,
  type = "",
  tag = "h1",
  paddingBottom = "0px",
  play = true,
  ...motionProps
}) => {
  let characters;
  if (type === "char") {
    characters = text.split("");
  } else {
    const words = text.split(" ");
    characters = [];
    words.forEach((word, idx) => {
      characters.push(word);
      if (idx < words.length - 1) {
        characters.push(" ");
      }
    });
  }
  const startY = `calc(${textSize} + ${paddingBottom})`;

  const fontWeight1 = fontWeight;
  const fontWeight2 = 600;

  const duration = 0.75;

  const rootProps = { ...motionProps };
  if (!rootProps.transition) rootProps.transition = { duration: 2 };
  rootProps.onMouseEnter = hover;
  rootProps.style = { fontSize: textSize, ...style, ...(rootProps.style || {}) };
  rootProps.className = `overflow-hidden ${className}`.trim();

  return React.createElement(
    motion[tag] || motion.h1,
    rootProps,
    characters.map((char, i) => {
      const delay =
        type === "char" ? animationDelay + 0.05 * i : animationDelay + 0.01 * i;
      if (char === " ") {
        return " ";
      }
      return (
        <span
          key={`wrapper_${i}`}
          style={{
            paddingBottom,
            ...(type === "char" ? {} : { overflow: "hidden" }),
          }}
          className="relative inline-block w-fit"
        >
          <motion.span
            className="inline-block relative"
            initial={{ y: startY, fontWeight: fontWeight1 }}
            animate={
              play
                ? thicken
                  ? { y: 0, fontWeight: fontWeight2 }
                  : { y: 0, fontWeight: fontWeight1 }
                : undefined
            }
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
                  ease: "circInOut",
                },
              }),
            }}
            key={`char_${i}`}
          >
            {type === "char" && char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      );
    }),
  );
};

export default SplitText;
