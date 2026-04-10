import { AnimatePresence, motion } from "framer-motion";
import SplitText from "./SplitText";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projectsArr } from "../data/projectData";

export default function Projects({ projects }) {
  const list = projects || projectsArr;
  return (
    <section
      style={{ height: list.length * 8.75 + "rem" }}
      className="flex flex-col gap-3 w-screen mt-4"
    >
      {list.map((proj, i) => {
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
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const [projectHovered, setProjectHovered] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  return (
    <Link to={`/projects/${proj.projectName}`}>
      <motion.div
        initial="initial"
        animate={inView && "enter"}
        exit="exit"
        variants={variants}
        onViewportEnter={() => setInView(true)}
        style={{ backgroundColor: "#000", height: "8rem" }}
        className="w-screen origin-right p-8 items-center"
        onHoverStart={() => setProjectHovered(true)}
        onHoverEnd={() => setProjectHovered(false)}
      >
        {inView && (
          <header className="w-full h-full items-center flex justify-center relative">
            <SplitText
              animationDelay={enterDuration - 0.1}
              tag="h1"
              type="char"
              text={proj.name}
              className="text-white w-fit px-2 font-['Instrument'] h-[5rem] leading-[1]"
              textSize={"5rem"}
            />
            <motion.div
              initial={{ width: 0 }}
              animate={
                projectHovered
                  ? { width: "10rem", filter: "blur(0px)" }
                  : { width: 0, filter: "blur(20px)" }
              }
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="h-[5.5rem] origin-center flex items-center overflow-hidden"
            >
              <motion.img
                className="h-full aspect-video overflow-hidden w-full object-cover"
                src={proj.src}
              />
            </motion.div>
            <SplitText
              animationDelay={enterDuration + 0.3}
              tag="h1"
              type="char"
              text={proj.name2}
              className="text-white w-fit px-2 font-['Instrument'] h-[5rem] leading-[1]"
              textSize={"5rem"}
            />
            <AnimatePresence mode="wait">
              {projectHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onHoverStart={() => setLinkHovered(true)}
                    onHoverEnd={() => setLinkHovered(false)}
                    className="absolute right-0 top-[50%] p-1 translate-y-[-50%] rounded-full border-white border-2 h-[6rem] aspect-square flex justify-center items-center"
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
              )}
            </AnimatePresence>
          </header>
        )}
      </motion.div>
    </Link>
  );
}
