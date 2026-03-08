import { projectsArr } from "../data/projectData";
import { useParams } from "react-router-dom";
import SplitText from "../components/SplitText";
import { AnimatePresence, motion } from "framer-motion";
import { anim } from "../anim";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { lenis } from "../index";

export default function Project() {
  useEffect(() => {
    lenis.scrollTo(0, { immediate: true });
  }, []);

  const { projectName } = useParams();
  const project = projectsArr.find((p) => p.projectName === projectName);
  const { name, src, description, technologies, githubLink, demoLink } =
    project;
  const title = {
    initial: { clipPath: "inset(0% 50% round 12px)" },
    enter: { clipPath: "inset(0% 0% round 12px)" },
    exit: { clipPath: "inset(0% 50% round 12px)" },
  };

  const otherProjects = projectsArr.filter(
    (p) => p.projectName !== projectName,
  );

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

  return (
    <>
      {/* Project Content */}
      <div className="h-[calc(100vh-57px)] w-screen relative px-4 flex flex-row p-4">
        {/* Title */}
        <motion.div
          {...anim(title)}
          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          className="preserve z-10 perspective-sm absolute right-4 top-4 flex bg-black w-fit h-fit p-4"
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
        <div className="flex items-center justify-center pb-96 z-0 relative flex-col w-screen h-full preserve perspective-md">
          <div className="w-fit h-fit relative preserve perspective-lg">
            {/* Description Container */}
            <motion.div
              {...anim(itemPopUp)}
              custom={{ delay: 0, rotation: 1 }}
              className="bg-[#C0C0C0] rounded-xl px-5 py-2.5 top-[50%] left-[50%] rotate-1 h-fit w-[35rem]"
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
              <div className="absolute -left-64 w-fit h-fit preserve perspective-md">
                {/* Technologies Container */}
                <motion.div
                  {...anim(itemPopUp)}
                  custom={{ delay: 0.2, rotation: -2, z: 10 }}
                  className="-rotate-2 px-5 -mt-1 py-2.5 rounded-xl bg-[#969696] h-fit w-80"
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
                          <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.5}} className="ml-1 mr-1.5 flex items-center">
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
                  className="absolute -right-24 rotate-[4deg] px-5 py-2.5 -mt-8 w-32 rounded-xl bg-[#C0C0C0] flex flex-col"
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
                    <li className="bg-black aspect-square h-full"></li>
                  </ul>
                </motion.div>
              </div>
              {/* Images Container */}
              <motion.div
                {...anim(itemPopUp)}
                custom={{ delay: 0.6, rotation: 3, z: 10 }}
                className="bg-[#757575] rounded-xl absolute -right-80 text-white p-2.5 w-[30rem] h-[24rem] rotate-3"
              >
                <div className="h-full w-full">
                  <img
                    className="object-cover w-full h-full rounded-md"
                    src="/assets/images/photo6.jpg"
                  />
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
