import { projectsArr } from "../data/projectData";
import { useParams } from "react-router-dom";
import SplitText from "../components/SplitText";
import { AnimatePresence, motion } from "framer-motion";
import { anim } from "../anim";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";
import { lenis } from "../index";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Project() {
  useEffect(() => {
    lenis.scrollTo(0, { immediate: true });
  }, []);

  const [imgIndex, setImgIndex] = useState(0);
  const intervalRef = useRef(null);

  const { projectName } = useParams();
  const project = projectsArr.find((p) => p.projectName === projectName);
  const {
    name,
    src,
    description,
    technologies,
    githubLink,
    demoLink,
    imageArr,
  } = project;
  const title = {
    initial: { clipPath: "inset(0% 50% round 12px)" },
    enter: { clipPath: "inset(0% 0% round 12px)" },
    exit: { clipPath: "inset(0% 50% round 12px)" },
  };

  const otherProjects = projectsArr.filter(
    (p) => p.projectName !== projectName,
  );

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!project.imageArr) return;
    intervalRef.current = setInterval(() => {
      setImgIndex((prevIndex) =>
        prevIndex < project.imageArr.length - 1 ? prevIndex + 1 : 0,
      );
    }, 5000);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [project]);

  const itemPopUp = {
    initial: {
      rotateX: 90,
      y: 150,
      z: 100,
      opacity: 0,
      rotateZ: 0,
    },
    enter: ({ delay = 0, rotation = 0, z = 0 } = {}) => ({
      rotateX: 0,
      opacity: 1,
      y: 0,
      z: z,
      rotateZ: rotation,
      transition: { duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.7 + delay },
    }),
    exit: {
      clipPath: "inset(50% round 12px)",
      filter: "blur(12px)",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const [play, setPlay] = useState(false);

  const clipPathAnim = {
    initial: {
      clipPath: "inset(50%)",
      filter: "blur(12px)",
      transition: { ease: [0.76, 0, 0.24, 1] },
    },
    enter: (custom) => ({
      clipPath: "inset(0%)",
      filter: "blur(0px)",
      transition: { delay: custom, duration: 1, ease: [0.76, 0, 0.24, 1] },
    }),
  };

  const headerAnim = {
    initial: { clipPath: "inset(0% 50%)" },
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1 },
    enter: {
      clipPath: "inset(0% 0%)",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      clipPath: "inset(0% 50%)",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const nameEnterLeft = {
    initial: { opacity: 0, y: 80, x: -50, rotateX: 90 },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      transition: { delay: 0.5, duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: { opacity: 0 },
  };
  const nameEnterRight = {
    initial: { opacity: 0, y: 80, x: 50, rotateX: 90 },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      transition: { delay: 0.5, duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: { opacity: 0 },
  };

  const [left, setLeft] = useState(false);

  const imageVariants = {
    // opened: {
    //   opacity: 1,
    //   filter: "blur(0px)",
    //   y: 0,
    //   rotateX: 0,
    //   rotateY: 0,
    //   zIndex: 1,
    //   clipPath: "inset(0% 0% 0% 0% round 0.375rem)",
    //   transition: { duration: .8, ease: [0.76, 0, 0.24, 1], delay: .7 },
    // },
    // closed: {
    //   // opacity: 0,
    //   // y: 100,
    //   // rotateX: 45,
    //   zIndex: 0,
    //   rotateY: 45,
    //   filter: "blur(12px)",
    //   clipPath: "inset(25% 0% 25% 100% round 0.375rem)",
    //   transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    // },

    opened: {
      opacity: 1,
      zIndex: 2,
      filter: "blur(0px)",
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      zIndex: 1,
      filter: "blur(12px)",
      transition: { duration: 0.3 },
    },
  };

  const indicatorAnim = {
    start: {
      // scaleX: 0,
      transformOrigin: "0%",
      opacity: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    end: { scaleX: 1, transformOrigin: "0%", transition: { duration: 5 } },
  };

  return (
    <>
      {/* Project Content */}
      <div className="h-[calc(100vh-57px)] w-screen relative px-4 flex flex-row p-4">
        {/* Title */}
        <motion.div
          {...anim(title)}
          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          className="z-10 perspective-sm absolute right-4 top-4 flex bg-black w-fit h-fit p-4"
        >
          <motion.h1
            {...anim(nameEnterLeft)}
            className="text-white mix-blend-difference font-['Instrument'] text-6xl flex items-center"
          >
            {name}
          </motion.h1>
          <div className="h-[5.5rem] mx-2">
            <motion.img
              src={src}
              className="object-cover aspect-video h-full"
            />
          </div>
          <motion.h1
            {...anim(nameEnterRight)}
            className="text-white font-['Instrument'] text-6xl flex items-center"
          >
            Website
          </motion.h1>
        </motion.div>
        <div className="flex items-center justify-center pb-96 z-0 relative flex-col w-screen h-full perspective-md">
          <div className="w-fit h-fit relative  perspective-lg">
            {/* Description Container */}
            <motion.div
              {...anim(itemPopUp)}
              custom={{ delay: 0, rotation: 1 }}
              className="bg-[#C0C0C0] rounded-xl px-5 py-2.5 top-[50%] left-[50%] rotate-1 h-fit w-[35rem] shadow-md"
            >
              <h1 className="font-['Instrument'] text-3xl">Description</h1>
              <SplitText
                tag="p"
                paddingBottom="3px"
                className="leading-[1.1]"
                type="word"
                animationDelay={1.35}
                text={description}
              />
            </motion.div>
            <div className="absolute -left-64 w-fit h-fit  perspective-md">
              {/* Technologies Container */}
              <motion.div
                {...anim(itemPopUp)}
                custom={{ delay: 0.2, rotation: -2, z: 10 }}
                className="-rotate-2 px-5 -mt-1 py-2.5 rounded-xl shadow-md bg-[#969696] h-fit w-80"
              >
                <h1 className="font-['Instrument'] text-3xl">Technologies</h1>
                <ul>
                  {technologies.map((technology, i) => {
                    return (
                      <li className="flex h-5" key={`technology_${i}`}>
                        <motion.span {...anim(clipPathAnim)} custom={1.3}>
                          <img
                            className="h-full w-full object-cover"
                            src={technology.src}
                          />
                        </motion.span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5 }}
                          className="ml-1 mr-1.5 flex items-center"
                        >
                          ·
                        </motion.span>
                        <SplitText
                          type="char"
                          text={technology.name}
                          textsize="1rem"
                          animationDelay={1.55}
                          className="leading-[1.3] my-auto"
                        ></SplitText>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
              {/* Links Container */}
              <motion.div
                {...anim(itemPopUp)}
                custom={{ delay: 0.4, rotation: 4, z: 20 }}
                className="absolute -right-24 rotate-[4deg] px-5 py-2.5 -mt-8 w-32 rounded-xl bg-[#C0C0C0] flex flex-col shadow-md"
              >
                <h1 className="font-['Instrument'] text-3xl">Links</h1>
                <ul className="w-full flex flex-row justify-between h-10">
                  <a href={githubLink} target="_blank">
                    <motion.li
                      {...anim(clipPathAnim)}
                      className="aspect-square h-full"
                    >
                      <img
                        src="/assets/images/github-logo.svg"
                        className="object-cover w-full h-full"
                        alt=""
                      />
                    </motion.li>
                  </a>
                  <a
                    href={demoLink}
                    target="_blank"
                    className="aspect-square h-full"
                  >
                    <svg
                      width="98"
                      height="98"
                      className='w-full h-full'
                      viewBox="0 0 98 98"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.8769 67L31 63.1231L57.5846 36.5385H33.7692V31H67V64.2308H61.4615V40.4154L34.8769 67Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </ul>
              </motion.div>
            </div>
            {/* Images Container */}
            <motion.div
              {...anim(itemPopUp)}
              custom={{ delay: 0.6, rotation: 3, z: 10 }}
              className="bg-[#757575] rounded-xl absolute -right-80 text-white shadow-md p-2.5 w-[30rem] h-[28rem] rotate-3"
            >
              <div
                style={
                  left
                    ? { perspectiveOrigin: "left" }
                    : { perspectiveOrigin: "right" }
                }
                className="h-full w-full relative  perspective-sm"
              >
                {imageArr.map((image, i) => {
                  return (
                    <motion.div
                      key={`project_image_${i}`}
                      variants={imageVariants}
                      initial="initial"
                      animate={imgIndex === i ? "opened" : "closed"}
                      className=" absolute z-[1] w-full h-full"
                    >
                      <img
                        className="w-full h-full rounded-md object-cover"
                        src={image.src}
                      />
                    </motion.div>
                  );
                })}
                <div className="absolute z-20 flex flex-col gap-2 bottom-0 left-0 w-[50%] overflow-hidden px-1.5 py-1 ml-2.5 mb-2.5 bg-black bg-opacity-40 backdrop-blur-sm rounded-sm">
                  <div className="flex w-full justify-between items-center">
                    <div className="w-[75%] flex flex-col">
                      <h2 className="w-full leading-[1]">
                        {imageArr[imgIndex].title}
                      </h2>
                      <ul className="flex h-6 w-full overflow-hidden whitespace-nowrap technology-list">
                        {imageArr[imgIndex].technologies.map((tech, i) => {
                          return (
                            <li
                              className="flex h-full w-fit text-sm font-thin"
                              key={`li-tech${tech.name}`}
                            >
                              {tech.name}
                              {i <
                                imageArr[imgIndex].technologies.length - 1 && (
                                <span className="mx-1">·</span>
                              )}
                            </li>
                          );
                        })}
                        {/* {imageArr.technologies.map((tech, i) => {
                                return (
                                  <li
                                    className="flex h-full w-fit text-sm"
                                    key={`image_tech_${i}`}
                                  >
                                    {tech.name}
                                    {i < imageArr.technologies.length - 1 && (
                                      <span className="mx-1">·</span>
                                    )}
                                  </li>
                                );
                              })} */}
                      </ul>
                    </div>
                    <Link
                      to="/projects/:projectName/:descriptionModal"
                      state={{ backgroundLocation: location }}
                      className="w-[20%] aspect-square rounded-md"
                    >
                      <img src="/assets/svgs/arrow.svg" alt="" />
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    {[...Array(imageArr.length)].map((_, i) => {
                      return (
                        <div
                          style={{ backgroundColor: "#7A7A7A" }}
                          key={`image_indicator_${i}`}
                          className="w-full h-0.5"
                        >
                          <motion.div
                            style={{ opacity: 1 }}
                            animate={imgIndex === i ? "end" : "start"}
                            variants={indicatorAnim}
                            className="h-full bg-white"
                          ></motion.div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <button
                  className="absolute z-[10] left-0 top-[50%] translate-y-[-50%] ml-2.5 bg-black bg-opacity-40 backdrop-blur-sm w-6 h-6 rounded-sm"
                  onClick={() => {
                    setLeft(true);
                    if (imgIndex > 0) {
                      setImgIndex(imgIndex - 1);
                    } else {
                      setImgIndex(imageArr.length - 1);
                    }
                    resetInterval();
                  }}
                ></button>
                <button
                  className="absolute right-0 top-[50%] z-[3] translate-y-[-50%] bg-black mr-2.5 bg-opacity-40 backdrop-blur-sm w-6 h-6 rounded-sm"
                  onClick={() => {
                    setLeft(false);
                    if (imgIndex < imageArr.length - 1) {
                      setImgIndex(imgIndex + 1);
                    } else {
                      setImgIndex(0);
                    }
                    resetInterval();
                  }}
                ></button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {otherProjects.length > 1 && (
        <>
          <motion.header
            {...anim(headerAnim)}
            className="bg-black h-fit py-4 w-screen"
          >
            <h1 className="uppercase text-white text-4xl font-['Instrument']">
              Check out some of my other projects
            </h1>
          </motion.header>
          <Projects projects={otherProjects} />
        </>
      )}
      <Footer />
    </>
  );
}
