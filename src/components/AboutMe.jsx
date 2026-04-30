import { motion } from "framer-motion";
import { anim } from "../anim";
import SplitText from "./SplitText";
import { useState } from "react";
import { footerData } from "../data/footerData";
import { div } from "framer-motion/client";

export default function AboutMe() {
  const aboutMeEnter = {
    initial: {
      rotateX: 45,
      opacity: 0,
      y: 100,
    },
    enter: (custom) => ({
      rotateX: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: custom,
        ease: [0.25, 1, 0.5, 1],
      },
    }),
    exit: {
      clipPath: "inset(50%)",
      transition: {
        duration: 1,
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
    <div className="flex justify-center items-center gap-4 px-4 perspective-md relative w-fit h-fit mx-auto mt-14 mb-32">
      <motion.main
        onViewportEnter={() => setInView(true)}
        initial={"initial"}
        animate={inView && "enter"}
        exit={"exit"}
        variants={aboutMeEnter}
        className="w-[40rem]  h-fit flex flex-col bg-[#C0C0C0] p-4 rounded-lg"
      >
        {inView && (
          <>
            <SplitText
              text="About Me"
              textSize="2rem"
              // animationDelay={1.5}
              type="char"
              tag="h2"
              className="font-['Instrument'] leading-[1.2] rounded-md"
              />
            <SplitText
              text="Hey, I'm Finn! I'm 18 and studying front-end web development at SintLucas—currently in my second year. I'm passionate about building creative, interactive websites with React and Framer Motion. For the past month i've been learning Next.js and TypeScript to level up my skills. Feel free to check out my projects to see what I've been working on!"
              textSize={"1.25rem"}
              className=" leading-[1.15] "
              type="word"
              // animationDelay={}
              tag="p"
              />
              </>
        )}
      </motion.main>
      {inView && (<motion.div
        variants={aboutMeEnter}
        initial={"initial"}
        custom={0.4}
        animate={inView && "enter"}
        exit={"exit"}
        className="h-fit w-40 p-2 bg-[#969696] rounded-lg absolute -right-24 -bottom-20"
      >
        <SplitText
          text="Links"
          type="char"
          animationDelay={0.4}
          textSize="2rem"
          tag="h2"
          className="font-['Instrument'] leading-none"
        />
        <ul>
          {footerData.socials.map((link, i) => {
            return (
              <li className="" key={`link-${i}`}>
                <a target="_blank" href={link.link}>
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </motion.div>)}
    </div>
  );
}
