import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import { motion } from "framer-motion";
import { clipPath } from "framer-motion/client";

export default function Home() {
  const variants = {
    initial: {
      clipPath: "inset(0% 50%)",
    },
    enter: {
      clipPath: "inset(0%)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      clipPath: "inset(0% 50%)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <>
      <Hero />
      <AboutMe />
      <motion.div
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        className="bg-black w-full h-[72px] font-['instrument'] text-4xl text-white flex items-center"
      >
        <h1 className='ml-4 uppercase'>Check out some of my projects</h1>
      </motion.div>
      <Projects />
      <Footer />
    </>
  );
}
