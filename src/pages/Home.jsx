import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollIndicator from "../components/ScrollIndicator";
import Spacer from "../components/Spacer";
import Projects from "../components/Projects";
import { motion } from "framer-motion";
import Inner from '../components/Inner';
import AboutMe from '../components/AboutMe';

export default function Home() {
  return (
    <Inner>
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </Inner>
  );
}
