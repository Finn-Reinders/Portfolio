import { motion } from "framer-motion";
import { anim } from "../anim";
export default function Inner({ children }) {
  return <motion.div>{children}</motion.div>;
}
