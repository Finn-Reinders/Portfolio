import { projectsArr } from "../data/projectData";
import { useParams } from "react-router-dom";
import SplitText from "../components/SplitText";
import { motion, AnimatePresence } from "framer-motion";
import Inner from "../components/Inner";
import { anim } from "../anim";

export default function Project() {
  const { projectName } = useParams();
  const project = projectsArr.find((p) => p.projectName === projectName);

  const { name, bg } = project;

  const title = {
    initial: { clipPath: "inset(0% 50%)" },
    enter: { clipPath: "inset(0% 0%)" },
    exit: { clipPath: "inset(0% 50%)" },
  };

  return (
    <Inner>
        <motion.div
          {...anim(title)}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="bg-black w-fit h-fit p-8"
        >
          <SplitText
            type="char"
            animationDelay={0.8}
            className="px-[4px] font-['Instrument'] text-white leading-[1]"
            text={`${name} Website`}
            textSize="8rem"
          />
        </motion.div>
    </Inner>
  );
}
