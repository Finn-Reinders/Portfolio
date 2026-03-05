import { projectsArr } from "../data/projectData";
import { useParams } from "react-router-dom";
import SplitText from "../components/SplitText";
import { motion } from "framer-motion";
import Inner from "../components/Inner";
import { anim } from "../anim";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Project() {
  const { projectName } = useParams();
  const project = projectsArr.find((p) => p.projectName === projectName);
  const { name, src } = project;
  const title = {
    initial: { clipPath: "inset(0% 50% round 12px)" },
    enter: { clipPath: "inset(0% 0% round 12px)" },
    exit: { clipPath: "inset(0% 50% round 12px)" },
  };

  const otherProjects = projectsArr.filter(
    (p) => p.projectName !== projectName,
  );

  const itemPopUp = {
    initial: {scale: 0, rotateY: 20 },
    enter: {scale: 1, transition: {duration: 1} },
    exit: {scale: 0},
  }

  const nameEnterLeft = {
    initial: { opacity: 0, y: 80, x: -50, rotateX: 90 },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      transition: { delay: 0.8, duration: 1, ease: [0.76, 0, 0.24, 1] },
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
      transition: { delay: 0.8, duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: { opacity: 0 },
  };

  return (
    <Inner>
      {/* Project Content */}
      <div className="h-screen w-screen relative px-4 flex flex-row p-4">
        {/* Title */}
        <motion.div
          {...anim(title)}
          transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="project-title absolute right-4 top-4 flex z-10 bg-black w-fit h-fit p-4"
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
        <div className="flex items-center flex-col w-screen h-screen">
          <motion.div {...anim(itemPopUp)} className="bg-[#C0C0C0] rounded-xl px-5 py-2.5 mt-[5.5rem] rotate-1 h-fit w-[50rem]">
            <h1 className="font-['Instrument'] text-3xl">Description</h1>
            <p className="leading-5">
              Mollit est mollit ex aliquip proident aliquip cillum commodo dolor
              veniam anim aute. Cillum nostrud occaecat ad dolore veniam
              pariatur cillum veniam eiusmod. Nulla anim laborum duis sit enim
              aliqua anim cillum ad sunt sunt occaecat adipisicing. Et Lorem
              incididunt commodo exercitation in excepteur eiusmod labore
              adipisicing. Laboris eu voluptate exercitation tempor fugiat non
              ex laboris aliqua esse commodo reprehenderit nulla ipsum. Occaecat
              Lorem est aliquip Lorem deserunt cupidatat cupidatat aliquip.
              Dolor qui adipisicing commodo id do irure ea officia nostrud. Ea
              aliquip eu mollit non. Esse culpa aute tempor est officia. Esse
              elit excepteur eiusmod in in proident qui Lorem veniam. Occaecat
              adipisicing nisi minim tempor nisi enim duis veniam elit non.
              Ullamco reprehenderit fugiat ut dolor id ipsum sunt velit
              reprehenderit excepteur.
            </p>
          </motion.div>
          <div className="flex justify-between w-[65%] flex-row">
            <div className='relative w-fit h-fit'>
            <motion.div {...anim(itemPopUp)} className="-rotate-2 px-5 py-2.5 rounded-xl bg-[#969696] h-fit w-80">
              <h1 className="font-['Instrument'] text-3xl">Technologies</h1>
              <ul>
                <li>Next.js</li>
                <li>Framer-Motion</li>
                <li></li>
              </ul>
            </motion.div>
              <motion.div {...anim(itemPopUp)} className="absolute rotate-[4deg] -bottom-16 -right-6 px-5 py-2.5 w-32 rounded-xl bg-[#C0C0C0] flex flex-col">
                <h1 className="font-['Instrument'] text-3xl">Links</h1>
                <ul className="w-full flex flex-row justify-between h-10">
                  <li className="bg-black aspect-square h-full">
                    <a href=""></a>
                  </li>
                  <li className="bg-black aspect-square h-full">
                    <a href=""></a>
                  </li>
                </ul>
              </motion.div>
            </div>
            <motion.div {...anim(itemPopUp)} className='bg-[#757575] rounded-xl text-white p-2.5 w-[30rem] h-[24rem] rotate-3'>
              <div className='h-full w-full'><img className='object-cover w-full h-full rounded-md' src='/assets/images/photo6.jpg' /></div>
            </motion.div>
          </div>
        </div>
      </div>
      <header className="bg-black h-fit py-4 w-screen">
        <h1 className="uppercase text-white text-4xl font-['Instrument']">
          Check out some of my other projects
        </h1>
      </header>
      <Projects projects={otherProjects} />
      <Footer />
    </Inner>
  );
}
