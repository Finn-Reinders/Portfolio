import { createRoot } from "react-dom/client";
import "./globals.css";
import Cursor from "./components/Cursor";
import Lenis from "@studio-freight/lenis";
import MobileMessage from "./components/Mobile";
import { useState } from "react";
import WIP from "./components/Wip";
import App from "./components/App";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function Index() {
  const [pageLoaded] = useState(true);

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

  return (
    <>
    {
    pageLoaded && (
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    )}
    <Cursor />
    </>
  );
}

createRoot(document.getElementById("root")).render(<Index />);
