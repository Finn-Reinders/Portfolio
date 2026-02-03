import { projectsArr } from "../data/projectData";
import { useParams } from "react-router-dom";
import SplitText from "../components/SplitText";
import { motion, AnimatePresence } from "framer-motion";

export default function Project() {
  const { projectName } = useParams();
  const project = projectsArr.find((p) => p.projectName === projectName);

  const { name, bg } = project;

  const variants = {
    initial: {
        opacity: 1
    },
    enter: {
        opacity: 1
    },
    exit: {
        opacity: 1
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={{duration: 1, delay: 1}}
        className="h-screen w-screen"
      >
        <SplitText
          type="char"
          animationDelay={0.2}
          className="font-['Instrument'] leading-[1]"
          text={`${name} Website`}
          textSize="8rem"
        />
      </motion.div>
    </AnimatePresence>
  );
}
