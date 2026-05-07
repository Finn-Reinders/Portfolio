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
    <div className="flex justify-center items-center gap-4 px-4 perspective-md relative w-fit h-fit mx-auto mt-14 mb-72 pl-28">
      <motion.main
        onViewportEnter={() => setInView(true)}
        initial={"initial"}
        animate={inView && "enter"}
        exit={"exit"}
        variants={aboutMeEnter}
        className="w-[40rem]  h-fit flex flex-col bg-[#C0C0C0] p-4 rounded-lg shadow-lg z-20"
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
              text="Hey, I'm Finn, a Front-End Developer with a thing for clean, creative animation. What drew me to front-end development and what keeps me hooked is the way motion can bring a UI to life. What I'm working towards is developing a sharper eye for design and learning to use animation with real purpose."
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
        className="h-fit w-40 p-2 bg-[#969696] rounded-lg absolute -right-24 -bottom-20 shadow-lg z-30"
      >
        <SplitText
          text="Links"
          type="char"
          animationDelay={0.4}
          textSize="2rem"
          tag="h2"
          className="font-['Instrument'] leading-none"
        />
        <ul className='flex h-14'>
          {footerData.socials.map((link, i) => {
            return (
              <li className="" key={`link-${i}`}>
                <a className='' target="_blank" href={link.link}>
                  <img className='h-full w-full object-fit' src={link.img.src} alt={link.img.alt} />
                </a>
              </li>
            );
          })}
        </ul>
      </motion.div>)}
      {inView && (<motion.div
        variants={aboutMeEnter}
        initial={"initial"}
        custom={0.4}
        animate={inView && "enter"}
        exit={"exit"}
        className="h-80 w-80 bg-[#969696] rounded-lg absolute -left-[10rem] -bottom-60 p-2 shadow-lg z-10"
      >
        <img src="/assets/images/portrait.jpg" className='w-full h-full object-cover rounded-md' alt="" />
      </motion.div>)}
    </div>
  );
}
