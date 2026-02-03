import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollIndicator from "../components/ScrollIndicator";
import Spacer from "../components/Spacer";
import Projects from "../components/Projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Spacer />
      <Projects />
      <Spacer />
      <Footer />
      <ScrollIndicator />
    </>
  );
}
