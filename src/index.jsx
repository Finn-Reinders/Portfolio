import { createRoot } from "react-dom/client";
import "./globals.css";
import Hero from "./components/Hero";
import Cursor from "./components/Cursor";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Lenis from "@studio-freight/lenis";
import ScrollIndicator from "./components/ScrollIndicator";
import MobileMessage from "./components/Mobile";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function App() {
  const [pageLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {pageLoaded ? (
        <>
          <Navbar />
          <Hero />
          <Main />
          <Footer />
          <ScrollIndicator />
          <MobileMessage />
        </>
      ) : (
        <Loader />
      )}
      <Cursor />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
