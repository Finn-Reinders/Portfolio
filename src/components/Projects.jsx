import { AnimatePresence, motion } from "framer-motion";
import SplitText from "./SplitText";
import { useState } from "react";
import { Link } from 'react-router-dom';
import {projectsArr} from '../data/projectData';

export default function Projects() {
  return (
    <section
      style={{ height: projectsArr.length * 14 + "rem" }}
      className="flex flex-col gap-3 w-screen mt-4"
    >
      {projectsArr.map((proj, i) => {
        return <ProjectCard proj={proj} i={i} key={`project_${i}`} />;
      })}
    </section>
  );
}

function ProjectCard({ proj, i }) {
  const [inView, setInView] = useState(false);
  const enterDuration = 0.8;
  const variants = {
    initial: { clipPath: "inset(0% 50%)" },
    enter: {
      clipPath: "inset(0% 0%)",
      transition: {
        duration: enterDuration,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.1,
      },
    },
    exit: { 
      clipPath: "inset(0% 50%)", 
      transition: { 
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      } 
    },
  };

  const [projectHovered, setProjectHovered] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  return (
    <motion.div
      initial="initial"
      animate={inView ? "enter" : "initial"}
      exit="exit"
      variants={variants}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      style={{ backgroundColor: "#000", height: "14rem" }}
      className="w-screen origin-right p-8 items-center"
      onHoverStart={() => setProjectHovered(true)}
      onHoverEnd={() => setProjectHovered(false)}
    >
        {inView && (
          <motion.header className="w-full h-full items-center flex justify-center relative">
            <SplitText
              animationDelay={enterDuration - 0.1}
              tag="h1"
              type="char"
              text={proj.name}
              className="text-white w-fit px-2 font-['Instrument'] h-[9rem] leading-[1]"
              textSize={"9rem"}
            />
            <motion.div
              initial={{ width: 0 }}
              animate={
                projectHovered
                  ? { width: "17rem", filter: "blur(0px)" }
                  : { width: 0, filter: "blur(20px)" }
              }
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="h-[10rem] origin-center flex items-center overflow-hidden"
            >
              <img
                className="h-full aspect-video overflow-hidden w-full object-cover"
                src={proj.src}
              />
            </motion.div>
            <SplitText
              animationDelay={enterDuration + 0.3}
              tag="h1"
              type="char"
              text="Website"
              className="text-white w-fit px-2 font-['Instrument'] h-[9rem] leading-[1]"
              textSize={"9rem"}
            />
            <AnimatePresence mode="wait">
              {projectHovered && (
                <Link to={`/projects/${proj.projectName}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onHoverStart={() => setLinkHovered(true)}
                    onHoverEnd={() => setLinkHovered(false)}
                    className="absolute right-0 top-[50%] p-2 translate-y-[-50%] rounded-full border-white border-4 h-full aspect-square flex justify-center items-center"
                  >
                    <motion.div
                      animate={
                        linkHovered ? { width: "100%" } : { width: "0%" }
                      }
                      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
                      className="aspect-square bg-white mix-blend-difference rounded-full"
                    ></motion.div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="50%"
                      viewBox="0 -960 960 960"
                      width="50%"
                      fill="#fff"
                      className="absolute mix-blend-difference"
                    >
                      <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                    </svg>
                  </motion.div>
                </Link>
              )}
            </AnimatePresence>
          </motion.header>
        )}
      </motion.div>
  );
}
