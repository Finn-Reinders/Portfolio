import { motion } from "framer-motion";
import { anim } from '../anim';
export default function Inner({ children }) {


  const opacity = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 1,

      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
        <motion.div {...anim(opacity)}>{children}</motion.div>
  );
}
