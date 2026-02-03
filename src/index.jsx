import { createRoot } from "react-dom/client";
import "./globals.css";
import Cursor from "./components/Cursor";
import Lenis from "@studio-freight/lenis";
import MobileMessage from "./components/Mobile";
import Loader from "./components/Loader";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';
import { useState, useEffect } from "react";
import WIP from "./components/Wip";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/contact", element: <Contact />},
  {path: "/projects/:projectName", element: <Project />},
]);

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function App() {
  const [pageLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 0);
    return () => clearTimeout(timer);
  }, []);

  let isMobile = false;
  if (navigator.userAgentData && navigator.userAgentData.mobile) {
    isMobile = true;
  } else if (navigator.userAgent) {
    isMobile = /Mobi|Android/i.test(navigator.userAgent);
  }

  return (
    <>
      {isMobile ? (<MobileMessage />) 
      : 
      (<RouterProvider router={router} />)}
      <Cursor />
      <WIP />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
