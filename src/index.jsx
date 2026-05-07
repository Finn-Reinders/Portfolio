import { createRoot } from "react-dom/client";
import "./globals.css";
import Lenis from "@studio-freight/lenis";
import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import ScrollIndicator from "./components/ScrollIndicator";

export const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function Index() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = async () => {
      await document.fonts.ready;

      setTimeout(() => {
        setPageLoaded(true);
      }, 100);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  let isMobile = false;
  if (navigator.userAgentData && navigator.userAgentData.mobile) {
    isMobile = true;
  } else if (navigator.userAgent) {
    isMobile = /Mobi|Android/i.test(navigator.userAgent);
  }

  function AnimatedRoutes() {
    const location = useLocation();

    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:projectName" element={<Project />} />
        </Routes>
      </AnimatePresence>
    );
  }
  if (window.innerWidth < 1000) {
    return (<div className='w-screen h-screen bg-black'>
      <p className="text-white">your screen is too small please enter on a desktop/laptop device</p>
    </div>);
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: pageLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {pageLoaded && (
          <Router>
            <Navbar />
            <ScrollIndicator />
            <AnimatedRoutes />
          </Router>
        )}
      </motion.div>
      {/* <Cursor /> */}
    </>
  );
}

createRoot(document.getElementById("root")).render(<Index />);
