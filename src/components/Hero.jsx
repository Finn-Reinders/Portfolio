import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SplitText from "./SplitText.jsx";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { Box, Cone, Torus, Dodecahedron } from "./Shapes.jsx";
import { langHover } from './Cursor.jsx';

export default function Hero() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setPageLoaded(true);
      return;
    }
    const onLoad = () => setPageLoaded(true);
    window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, []);

  const sectionParent = useRef(null);
  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: sectionParent,
    offset: ["start start", "end start"],
  });

  const scrollScale = useTransform(sectionScrollProgress, [0, 1], [1, 0.5]);

  const textScroll = useTransform(
    sectionScrollProgress,
    [0, 1],
    ["0%", "100%"],
  );

  const canvasBlur = useTransform(sectionScrollProgress, [0, 1], [
    "blur(0px)",
    "blur(20px)",
  ]);


  return (
    <div ref={sectionParent} className="h-[150vh] z-2 relative">
      <section className="sticky top-0 justify-center h-screen px-3 pb-3">
        <motion.div
          style={{ scale: scrollScale }}
          initial={{
            clipPath: "inset(50% round 12px)",
            filter: "blur(20px)",
          }}
          animate={
            pageLoaded
              ? {
                  clipPath: "inset(0% round 12px)",
                  filter: "blur(0px)",
                }
              : undefined
          }
          transition={{
            duration: 1,
            ease: [0.82, 0.05, 0.27, 1],
          }}
          className="z-[1] top-[57px] relative h-[calc(100%-57px)] w-full overflow-hidden"
        >
          <motion.div
            initial={{ scale: 3 }}
            animate={pageLoaded ? { scale: 1 } : undefined}
            transition={{ duration: 1, ease: [0.82, 0.05, 0.27, 1] }}
            className="relative w-full h-full"
          >
            {pageLoaded && (
              <div className="background absolute inset-0 z-10">
                <SplitText
                  style={{ left: textScroll }}
                  className="p-[2rem] text-background top-[calc(50%-4.5rem)] translate-y-[-50%]"
                  text="FinnReinders"
                  textSize="12rem"
                  thicken={true}
                  animationDelay={0.7}
                />
                <SplitText
                  style={{ right: textScroll }}
                  text="Front-End Dev"
                  textSize="8rem"
                  className="p-[2rem] text-background top-[calc(50%+4.5rem)] translate-y-[-50%]"
                  thicken={true}
                  animationDelay={0.7}
                />
              </div>
            )}
            <motion.div className="absolute inset-0 z-[9]" style={{ filter: canvasBlur }}>
              <Canvas
                resize={{ offsetSize: true }}
                dpr={[1, 1.5]}
                className="w-full h-full"
                camera={{ position: [1, 1, 3] }}
              >
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 6]} intensity={1} />
                <group position={[-2, -2, 0]} scale={0.75}>
                  <Cone color="#3E5AB8" position={[-5.4, 4.6, -2.6]} />
                  <Cone color="#2563EB" position={[6.4, 4.0, -3.0]} />
                  <Box color="#3D65FC" position={[-5.1, 1.0, -2.0]} />
                  <Box color="#1D4ED8" position={[6.9, -1.7, -2.3]} />
                  <Dodecahedron color="#4F46E5" position={[1.2, 5.0, -1.9]} />
                  <Dodecahedron color="#2E54FF" position={[0.8, -2.9, -2.7]} />
                  <Torus color="#0369A1" position={[-5.8, -2.8, -2.2]} />
                  <Torus color="#1E40AF" position={[7.3, 0.9, -1.9]} />
                </group>
                <Environment preset="studio" />
              </Canvas>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
