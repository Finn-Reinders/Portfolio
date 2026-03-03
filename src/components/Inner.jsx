import { motion } from "framer-motion";
import { anim } from "../anim";
export default function Inner({ children }) {
  const opacity = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0,
      }
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0,
      },
    },
    exit: {
      opacity: 1,
      transition: {
        duration: 0,
      },
    },
  };

  return <motion.div>{children}</motion.div>;
}
