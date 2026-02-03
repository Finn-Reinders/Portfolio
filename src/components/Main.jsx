import React from "react";
import "../styles/App.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { SplitText } from "./SplitText";
import { div, image } from "framer-motion/client";

export default function Main() {
  const projects = [
    {
      id: "project-1",
      title: "Weather App",
      description:
        "A modern weather application that provides real-time weather updates, forecasts, and interactive weather maps. Users can search for any city worldwide, view detailed meteorological data, and receive weather alerts. Built with React, OpenWeatherMap API, and responsive design for a seamless experience across devices.",
      technologies: ["React", "OpenWeatherMap API", "CSS Modules"],
      githubLink: "",
      demoLink: "",
      date: "12 / 03 / 2024",
      backgroundColor: "rgba(68, 112, 216, 0.9)",
      hoverBackgroundColor: "rgba(10, 10, 10, 1)",
      images: [
                "/assets/images/photo4.jpg",
        "/assets/images/photo5.jpg",
        "assets/images/photo6.jpg",
        "assets/images/photo7.jpg",
      ],
      alt: [],
      imageDescription: [],
    },
    {
      id: "project-2",
      title: "Task Manager",
      description:
        "A productivity tool for managing daily tasks and to-dos. Features include task creation, categorization, deadlines, and progress tracking. The intuitive UI allows users to drag and drop tasks, set reminders, and filter by status. Developed using React and Framer Motion for smooth UI transitions.",
      technologies: ["React", "Framer Motion", "LocalStorage"],
      githubLink: "",
      demoLink: "",
      date: "27 / 07 / 2023",
      backgroundColor: "rgba(59, 96, 197, 0.9)",
      hoverBackgroundColor: "rgba(59, 96, 197, 1)",
      images: [
                "/assets/images/photo4.jpg",
        "/assets/images/photo5.jpg",
        "assets/images/photo6.jpg",
        "assets/images/photo7.jpg",
      ],
      alt: [],
      imageDescription: [],
    },
    {
      id: "project-3",
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform supporting product listings, shopping cart, secure checkout, and order management. Includes user authentication, product search, and admin dashboard. Built with React, Node.js, and Stripe API for payment processing.",
      technologies: ["React", "Node.js", "Stripe API", "MongoDB"],
      githubLink: "",
      demoLink: "",
      date: "15 / 11 / 2025",
      backgroundColor: "rgba(45, 71, 167, 0.9)",
      hoverBackgroundColor: "rgba(45, 71, 167, 1)",
      images: [
                "/assets/images/photo4.jpg",
        "/assets/images/photo5.jpg",
        "assets/images/photo6.jpg",
        "assets/images/photo7.jpg",
      ],
      alt: [],
      imageDescription: [],
    },
    {
      id: "project-4",
      title: "Chat Application",
      description:
        "A real-time chat application enabling users to join chat rooms, send direct messages, and share media. Features typing indicators, message history, and online presence. Built with React, Socket.io, and Node.js for instant communication.",
      technologies: ["React", "Socket.io", "Node.js"],
      githubLink: "",
      demoLink: "",
      date: "02 / 02 / 2022",
      backgroundColor: "rgba(31, 47, 138, 0.9)",
      hoverBackgroundColor: "rgba(31, 47, 138, 1)",
      images: [
                "/assets/images/photo4.jpg",
        "/assets/images/photo5.jpg",
        "assets/images/photo6.jpg",
        "assets/images/photo7.jpg",
      ],
      alt: [],
      imageDescription: [],
    },
    {
      id: "project-5",
      title: "Fitness Tracker",
      description:
        "A fitness tracking app that allows users to log workouts, set fitness goals, and monitor progress with interactive charts. Includes exercise database, calendar integration, and personalized recommendations. Built with React and Chart.js for data visualization.",
      technologies: ["React", "Chart.js", "LocalStorage"],
      githubLink: "https://github.com",
      demoLink: "https://finnreinders.com/",
      date: "19 / 09 / 2021",
      backgroundColor: "rgba(22, 30, 117, 0.9)",
      hoverBackgroundColor: "rgba(22, 30, 117, 1)",
      images: [
        "/assets/images/photo4.jpg",
        "/assets/images/photo5.jpg",
        "assets/images/photo6.jpg",
        "assets/images/photo7.jpg",
      ],
      alt: [],
      imageDescription: ["Photo 1", "Photo 2", "Photo 3", "Photo 4"],
    },
  ];

  const technologies = [
    { name: "react", src: "" },
    { name: "javascript", src: "" },
  ];

  const hoverDelay = 0.5;

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [manualActionCount, setManualActionCount] = useState(0);

  const [isHovering, setIsHovering] = useState(false);

  const [githubPopUp, setGithubPopUp] = useState(false);
  const [demoPopUp, setDemoPopUp] = useState(false);

  const prevHoveredRef = useRef(null);

  useEffect(() => {
    if (hoveredIndex === null) {
      setCurrentImageIndex(0);
      prevHoveredRef.current = null;
      return;
    }

    const project = projects[hoveredIndex];
    if (!project || project.images.length <= 1) return;

    prevHoveredRef.current = hoveredIndex;

    // Restart interval when hoveredIndex or manualActionCount changes.
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hoveredIndex, manualActionCount]);

  return (
    <>
      <main className=" origin-left h-screen w-screen flex justify-between p-8 flex-col">
        <div className="w-full h-full items-center flex justify-center">
          {/* Mapping through the projects so that each project is displayed */}
          {projects.map((project, i) => (
            <motion.div
              initial={{}}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => {
                setHoveredIndex(null);
                setCurrentImageIndex(0);
              }}
              whileHover={{
                y: -20,
                opacity: 1,
                width: "50%",
                zIndex: i,
                marginLeft: 20,
                marginRight: 75 + 20,
                borderRadius: "4rem",
                // backgroundColor: "rgb(51 51 51 / 1)",
              }}
              whileInView={{ width: "10%" }}
              transition={{
                duration: hoverDelay,
                damping: 15,
                type: "spring",
              }}
              viewport={{
                amount: 0.15,
                once: true,
              }}
              key={project.id}
              style={{
                width: 0,
                backgroundColor: `rgb(${(255 / projects.length) * i} ${(255 / projects.length) * i} ${(255 / projects.length) * i})`,
                zIndex: i,
                marginLeft: i !== 0 ? -75 : 0,
                opacity: .9,
                borderRadius: "8rem",
              }}
              className="max-w-[52%] h-[50vh] w-[10%] flex flex-col px-12 py-8 backdrop-blur-sm"
            >
              {/* Adding the content of the project if the project is hovered */}
              {hoveredIndex === i ? (
                <AnimatePresence mode="sync" key={`animatepresence_${i}`}>
                  <motion.section
                    key={`project_${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-4 h-full w-full"
                    transition={{
                      duration: hoverDelay,
                    }}
                  >
                    <article className="flex flex-row w-full h-[60%] gap-6">
                      <section className="flex flex-col w-[40%] gap-2">
                        <SplitText
                          animationDelay={hoverDelay}
                          text={project.title}
                          textSize={"2rem"}
                          className="w-full h-8 leading-8 mix-blend-difference text-white"
                          type="word"
                          tag="header"
                          fontWeight={300}
                        />
                        <SplitText
                          type="word"
                          tag="p"
                          animationDelay={hoverDelay}
                          textSize="1.25rem"
                          paddingBottom="4px"
                          className="text-white mix-blend-difference leading-[1] w-full"
                          text={project.description}
                        />
                      </section>
                      <AnimatePresence mode="sync">
                        <motion.figure
                          initial={{
                            clipPath: "inset(50% round 12px)",
                            filter: "blur(20px)",
                          }}
                          animate={{
                            clipPath: "inset(0% round 12px)",
                            filter: "blur(0px)",
                          }}
                          className="relative h-full w-[60%] flex items-center justify-center"
                          transition={{
                            delay: hoverDelay,
                            ease: [0.82, 0.05, 0.27, 1],
                            duration: 1,
                          }}
                          onHoverStart={() => setIsHovering(true)}
                          onHoverEnd={() => setIsHovering(false)}
                        >
                          {project.images.map((src, index) => (
                            <motion.div
                              className="w-full h-full absolute"
                              key={`image_${index}`}
                              style={{ zIndex: -index }}
                              initial={
                                  index === 0
                                    ? { scale: 3, opacity: 1 }
                                    : { opacity: 0 }
                                }
                                animate={
                                  index === 0
                                    ? {
                                        scale: 1,
                                        opacity:
                                          currentImageIndex === index ? 1 : 0,
                                        filter:
                                          currentImageIndex === index
                                            ? "blur(0px)"
                                            : "blur(20px)",
                                      }
                                    : {
                                        opacity:
                                          currentImageIndex === index ? 1 : 0,
                                        filter:
                                          currentImageIndex === index
                                            ? "blur(0px)"
                                            : "blur(20px)",
                                      }
                                }
                                transition={{
                                  scale: {
                                    duration: 1,
                                    delay: hoverDelay,
                                    ease: [0.82, 0.05, 0.27, 1],
                                  },
                                  opacity: {
                                    duration: 0.6,
                                    ease: "easeInOut",
                                  },
                                  blur: {
                                    duration: 1,
                                    ease: "easeInOut",
                                  },
                                }}
                            >
                              <img
                                className="object-cover absolute w-full h-full text-white"
                                src={
                                  src.length
                                    ? src
                                    : "assets/videos/file_example_MP4_480_1_5MG.gif"
                                }
                                
                                alt={
                                  project.alt[index] ||
                                  `Project image ${index + 1}`
                                }
                                
                              />
                              <h2 className="w-fit h-fit px-5 rounded-full squircle py-3 text-white absolute m-4 bg-black bg-opacity-0 top-0 right-0 z-50 backdrop-blur-sm mix-blend-difference border-2 border-white">
                                {project.imageDescription[index]}
                              </h2>
                            </motion.div>
                          ))}
                          {project.images.length > 1 && (
                            <div className="flex absolute bottom-1 gap-1 w-full justify-center">
                              <AnimatePresence mode="sync">
                                {project.images.map((_, index) => (
                                  <motion.div
                                    initial={{
                                      opacity: 0,
                                      y: 10,
                                      scale: 0,
                                      transition: { delay: 2, duration: 1 },
                                    }}
                                    animate={{
                                      opacity:
                                        currentImageIndex === index ? 1 : 0.5,
                                      y: currentImageIndex === index ? -3 : 0,
                                      scale:
                                        currentImageIndex === index ? 1.1 : 1,
                                    }}
                                    transition={{
                                      duration: 0.5,
                                      ease: "backInOut",
                                    }}
                                    key={`indicator_${index}`}
                                    onClick={() => {
                                      setCurrentImageIndex(index);
                                      setManualActionCount((c) => c + 1);
                                    }}
                                    className="bg-white w-1.5 h-1.5 rounded-full cursor-pointer"
                                  ></motion.div>
                                ))}
                              </AnimatePresence>
                            </div>
                          )}
                          {/* Cycling through the images to the left */}
                          <AnimatePresence mode="sync">
                            {isHovering && project.images.length > 1 && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{
                                  type: "spring",
                                  duration: 1,
                                  damping: 10,
                                  stiffness: 100,
                                  ease: "easeInOut",
                                }}
                                onClick={() => {
                                  if (currentImageIndex > 0) {
                                    setCurrentImageIndex((prev) => prev - 1);
                                  } else {
                                    setCurrentImageIndex(
                                      project.images.length - 1,
                                    );
                                  }
                                  setManualActionCount((c) => c + 1);
                                }}
                                className="w-6 h-6 rounded-full bg-white absolute left-4 top-[50%] translate-y-[-50%]"
                              ></motion.div>
                            )}
                          </AnimatePresence>
                          {/* Cycling through the images to the right */}
                          <AnimatePresence mode="sync">
                            {isHovering && project.images.length > 1 && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{
                                  type: "spring",
                                  duration: 1,
                                  damping: 10,
                                  stiffness: 100,
                                  ease: "easeInOut",
                                }}
                                onClick={() => {
                                  if (
                                    currentImageIndex <
                                    project.images.length - 1
                                  ) {
                                    setCurrentImageIndex((prev) => prev + 1);
                                  } else {
                                    setCurrentImageIndex(0);
                                  }
                                  setManualActionCount((c) => c + 1);
                                }}
                                className="w-6 h-6 rounded-full bg-white absolute right-4 top-[50%] translate-y-[-50%]"
                              ></motion.div>
                            )}
                          </AnimatePresence>
                        </motion.figure>
                      </AnimatePresence>
                    </article>
                    <AnimatePresence mode="sync">
                      <motion.footer
                        initial={{ y: 30, scale: 0.95, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        transition={{
                          duration: 1,
                          delay: hoverDelay,
                          ease: "easeInOut",
                        }}
                        className="flex h-[10%] w-full justify-between"
                      >
                        <aside className="w-fit px-8 h-full bg-teal-600 flex items-center justify-center">
                          Technologies
                        </aside>
                        <nav className="flex w-fit h-full gap-3">
                          {project.githubLink && (
                            <motion.a
                              whileHover={{
                                backgroundColor: "rgb(255 255 255 / 1)",
                              }}
                              style={{
                                backgroundColor: "rgb(255 255 255 / 0)",
                              }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="p-1 aspect-square h-full border-2 border-white rounded-full squircle flex items-center justify-center relative"
                              href={project.githubLink}
                              aria-label="Github"
                              target="_blank"
                              onHoverStart={() => setGithubPopUp(true)}
                              onHoverEnd={() => setGithubPopUp(false)}
                            >
                              <AnimatePresence mode="sync">
                                {githubPopUp && (
                                  <motion.div
                                    initial={{ y: 10, opacity: 0 }}
                                    exit={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                      duration: 0.5,
                                      ease: "backInOut",
                                    }}
                                    className="w-fit squircle rounded-full h-fit px-4 py-1 bg-white whitespace-nowrap absolute top-[-3rem]"
                                  >
                                    <h3 className="font-['Inter',sans-serif] ">
                                      Github Link
                                    </h3>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                              <img
                                className="mix-blend-difference"
                                src="/assets/svgs/github.svg"
                              />
                            </motion.a>
                          )}

                          {project.demoLink && (
                            <motion.a
                              whileHover={{
                                backgroundColor: "rgb(255 255 255 / 1)",
                              }}
                              style={{
                                backgroundColor: "rgb(255 255 255 / 0)",
                              }}
                              onHoverStart={() => setDemoPopUp(true)}
                              onHoverEnd={() => setDemoPopUp(false)}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="p-1 aspect-square h-full border-2 mix-blend-difference border-white rounded-full squircle flex items-center justify-center relative"
                              href={project.demoLink}
                              aria-label="Demo"
                              target="_blank"
                            >
                              <AnimatePresence mode="sync">
                                {demoPopUp && (
                                  <motion.div
                                    initial={{ y: 10, opacity: 0 }}
                                    exit={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                      duration: 0.5,
                                      ease: "backInOut",
                                    }}
                                    className="w-fit squircle rounded-full h-fit px-4 py-1 z-10 bg-white whitespace-nowrap absolute top-[-3rem]"
                                  >
                                    <h3 className="font-['Inter',sans-serif] ">
                                      Live Demo
                                    </h3>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                              <img
                                className="mix-blend-difference"
                                src="/assets/svgs/arrow.svg"
                              />
                            </motion.a>
                          )}
                        </nav>
                      </motion.footer>
                    </AnimatePresence>
                    <AnimatePresence mode="sync">
                      <motion.time
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: hoverDelay,
                          duration: 1,
                          ease: "easeInOut",
                        }}
                        className="absolute bottom-8 right-12 w-fit px-4 py-1 text-white"
                      >
                        {project.date ? project.date : "date"}
                      </motion.time>
                    </AnimatePresence>
                  </motion.section>
                </AnimatePresence>
              ) : (
                <AnimatePresence mode="sync">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-['Chillax'] rotate-90 text-2xl flex whitespace-nowrap justify-center items-center my-auto text-white"
                  >
                    <h1>{project.title}</h1>
                  </motion.div>
                </AnimatePresence>
              )}
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
