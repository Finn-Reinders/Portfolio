import React from "react";
import "../styles/App.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { div } from "framer-motion/client";
import SplitText from './SplitText';

export default function Main() {
  const projects = [
    { id: "project-1", title: 'Portfolio', description: '', technologies: [], githubLink: '', demoLink: '', date: '01 / 01 / 2000', },
    { id: "project-2", title: 'Portfolio', description: '', technologies: [], githubLink: '', demoLink: '', date: '', },
    { id: "project-3", title: 'Portfolio', description: '', technologies: [], githubLink: '', demoLink: '', date: '', },
    { id: "project-4", title: 'Portfolio', description: '', technologies: [], githubLink: '', demoLink: '', date: '', },
    { id: "project-5", title: 'Portfolio', description: '', technologies: [], githubLink: '', demoLink: '', date: '', },
  ];

  const hoverDelay = 0.5;

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <main className="origin-left h-screen w-screen flex justify-center items-center">
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0.9 }}
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{
              y: -20,
              opacity: 1,
              width: "50%",
              zIndex: i,
              marginLeft: 20,
              marginRight: 70,
            }}
            whileInView={{ width: "10%" }}
            transition={{
              duration: hoverDelay,
              damping: 15,
              type: "spring",
            }}
            viewport={{
              amount: 0.5,
              // once: true,
            }}
            key={i}
            style={{
              width: 0,
              backgroundColor: `rgb(${(255 / projects.length) * i} ${(255 / projects.length) * i} ${(255 / projects.length) * i})`,
              zIndex: i,
              marginLeft: i != 0 ? -50 : 0,
            }}
            className="max-w-[52%] rounded-[8rem] squircle h-[50%] w-[10%] flex flex-col px-12 py-8"
          >
            {hoveredIndex === i && (
              <section className="flex flex-col gap-4 h-full w-full">
                <article className="flex flex-row w-full h-[60%] gap-6">
                  <section className="flex flex-col w-[40%] gap-4">
                    <header className='w-full h-[15%] leading-8'>
                     <SplitText animationDelay={hoverDelay} text={project.title} textSize={'2rem'} className="mix-blend-difference text-white" />
                    </header>
                    <p className="w-full h-[85%] bg-blue-500">Description</p>
                  </section>
                  <AnimatePresence mode='wait'>
                    <motion.figure
                      initial={{
                        clipPath: "inset(50% round 12px)",
                        filter: "blur(20px)",
                      }}
                      animate={{
                        clipPath: "inset(0% round 12px)",
                        filter: "blur(0px)",
                      }}
                      exit={{
                        clipPath: 'inset(50% round 12px)',
                      }}
                      className="h-full w-[60%] bg-lime-500 flex items-center justify-center"
                      transition={{
                        delay: hoverDelay,
                        ease: [0.82, 0.05, 0.27, 1],
                        duration: 1,
                      }}
                      >
                      <motion.img className='object-cover w-full h-full text-white' src='/assets/videos/file_example_MP4_480_1_5MG.gif' initial={{scale: 3}} animate={{scale: 1}} transition={{duration: 1, delay: hoverDelay,ease: [0.82, 0.05, 0.27, 1]}}>
                      </motion.img>
                    </motion.figure>
                  </AnimatePresence>
                </article>
                <footer className="flex h-[10%] w-full justify-between bg-white">
                  <aside className="w-fit px-8 h-full bg-teal-600 flex items-center justify-center">
                    Technologies
                  </aside>
                  <nav className="flex w-fit h-full gap-3">
                    <a
                      className="aspect-square h-full bg-purple-500 flex items-center justify-center"
                      href="#"
                      aria-label="Github"
                      >
                      Github
                    </a>
                    <a
                      className="aspect-square h-full bg-purple-500 flex items-center justify-center"
                      href="#"
                      aria-label="Demo"
                      >
                      Demo
                    </a>
                  </nav>
                </footer>
                <time className="absolute bottom-8 right-12 w-fit px-4 py-1 bg-white">
                  {project.date ? project.date : 'date'}
                </time>
              </section>
            )}
          </motion.div>
        ))}
      </main>
    </>
  );
}
