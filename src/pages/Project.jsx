import { projectsArr } from "../data/projectData";
import { useParams } from "react-router-dom";
import SplitText from "../components/SplitText";
import { motion } from "framer-motion";
import Inner from "../components/Inner";
import { anim } from "../anim";
import Projects from "../components/Projects";
import { useState } from "react";
import Footer from '../components/Footer';

export default function Project() {
  const { projectName } = useParams();
  const project = projectsArr.find((p) => p.projectName === projectName);
  const { name, src, imageArr } = project;
  const title = {
    initial: { clipPath: "inset(0% 50%)" },
    enter: { clipPath: "inset(0% 0%)" },
    exit: { clipPath: "inset(0% 50%)" },
  };

  const otherProjects = projectsArr.filter(
    (p) => p.projectName !== projectName,
  );

  const imgEnter = {
    initial: { scale: 0, filter: "blur(20px)" },
    enter: {
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1, delay: 1.5, ease: [0.76, 0, 0.24, 1] },
    },
    exit: { scale: 0, transition: {duration: 1} },
  };

  return (
    <Inner>
      {/* Project Content */}
      <div className="h-screen w-screen px-4 flex flex-row p-4">
        {/* Title */}
        <motion.div
          {...anim(title)} transition={{duration: 1, delay: .5, ease: [0.76, 0, 0.24, 1]}}
          className="absolute left-[50%] top-[50%] flex translate-x-[-50%] z-10 translate-y-[-50%] bg-black w-fit h-fit p-4"
        >
          <SplitText
            type="word"
            animationDelay={0.8}
            className="whitespace-nowrap flex items-center font-['Instrument'] text-white leading-[1]"
            text={`${name}`}
            textSize="4rem"
          />
          <div className="h-[5.5rem] mx-2">
            <motion.img
              src={src}
              className="object-cover aspect-video h-full"
            />
          </div>
          <SplitText
            type="word"
            animationDelay={0.8}
            className="whitespace-nowrap flex items-center font-['Instrument'] text-white leading-[1]"
            text={`Website`}
            textSize="4rem"
          />
        </motion.div>

      </div>
      <Projects projects={otherProjects} />
      <Footer />  
    </Inner>
  );
}
