import { motion } from "framer-motion";
import { anim } from "../anim";
import SplitText from "./SplitText";
import { useState } from "react";

export default function AboutMe() {
  const aboutMeEnter = {
    initial: {
      clipPath: "inset(50%)",
    },
    enter: {
      clipPath: "inset(0%)",
      transition: {
        duration: 1.5,
        ease: [0.85, 0, 0.15, 1],
        scale: 1,
      },
    },
    exit: {
      clipPath: "inset(50%)",
      transition: {
        duration: 1.5,
        ease: [0.85, 0, 0.15, 1],
      },
    },
  };

  const childLeave = {
    enter: { opacity: 1 },
    exit: {
      opacity: 0,
      filter: "blur(12px)",
      transition: {
        duration: 0.5,
      },
    },
  };

  const [inView, setInView] = useState(false);

  return (
    <div className="flex justify-center items-center gap-4 px-4 my-14">
      <motion.main
        onViewportEnter={() => setInView(true)}
        initial={"initial"}
        animate={inView && "enter"}
        exit={"exit"}
        variants={aboutMeEnter}
        className="w-[50vw] flex flex-col aspect-video bg-black p-4"
      >
        {inView && (
          <motion.div {...anim(childLeave)}>
            <SplitText
              text="About Me"
              textSize="1.75rem"
              animationDelay={1.5}
              type="char"
              tag="h2"
              className="font-['Instrument'] leading-[1.2] text-white"
            />
            <SplitText
              text="Hi, I’m Finn, a software developer who’s passionate about turning ideas into efficient, scalable software. I specialize in designing clean, maintainable code and creating intuitive digital experiences.
          My focus is on building reliable solutions that not only work — but work well. I’m always exploring new technologies, refining my craft, and collaborating on projects that push me to grow as a developer."
              textSize={"1rem"}
              className="text-white leading-[1.15] "
              type="word"
              animationDelay={1.5}
              tag="p"
            />
          </motion.div>
        )}
      </motion.main>
      <motion.div
        variants={aboutMeEnter}
        initial={"initial"}
        animate={inView && "enter"}
        exit={"exit"}
        className="h-[20vw] aspect-square bg-black"
      >
        <img
          alt="photograph of me"
          className="object-cover w-full h-full flex justify-center items-center font-['instrument'] text-white"
        />
      </motion.div>
    </div>
  );
}
