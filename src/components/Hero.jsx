import React, { Suspense } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { SplitText } from "./SplitText.jsx";
import { Canvas } from "@react-three/fiber";
import ThreeScene from "./ThreeScene.jsx";
import { anim } from "../anim.js";

const textureUrls = [
  'https://images.unsplash.com/photo-1768409234914-96f61529b7e2?q=60&w=800&auto=format&fit=crop',
  'https://plus.unsplash.com/premium_photo-1725408037993-f891474828c9?q=60&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1761839258753-85d8eecbbc29?q=60&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1769095383888-c1fc328a81af?q=60&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1768222780460-3cb1027f51e2?q=60&w=800&auto=format&fit=crop',
];

export default function Hero() {
  const sectionParent = useRef(null);
  const [sceneReady, setSceneReady] = useState(false);
  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: sectionParent,
    offset: ["start start", "end start"],
  });

  const heroAnim = {
    initial: { clipPath: "inset(50% round 12px)", filter: "blur(20px)" },
    enter: { clipPath: "inset(0% round 12px)", filter: "blur(0px)" },
    exit: { clipPath: "inset(50% round 12px)", filter: "blur(20px)" },
  };

  const splitAnim = {
    initial: { backdropFilter: "blur(0px)" },
    enter: { backdropFilter: "blur(0px)", transition: {delay: 1, duration: 1} },
    exit: { backdropFilter: "blur(0px)" },
  };

  return (
    <div className="h-[calc(100vh-57px)] z-2 relative" ref={sectionParent}>
      <section className="top-0 justify-center h-full px-3 pb-3">
        <motion.div
          {...anim(heroAnim)}
          transition={{
            duration: 1,
            ease: [0.82, 0.05, 0.27, 1],
          }}
          className="z-[1] relative h-full w-full overflow-hidden"
        >
          <motion.div
            initial={{ scale: 3 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: [0.82, 0.05, 0.27, 1] }}
            className="relative w-full h-full bg-black"
          >
            <div className="background absolute ml-10 inset-0 z-10">
              <SplitText
                {...anim(splitAnim)}
                style={{}}
                className="whitespace-nowrap absolute backdrop-blur-md leading-[1] rounded-[1rem] text-white tracking-[-.4rem] px-8 font-['Instrument'] top-[calc(50%-4rem)] translate-y-[-50%]"
                text="Finn Reinders"
                textSize="7rem"
                animationDelay={0.7}
                type="char"
              />
              <SplitText
                {...anim(splitAnim)}
                text="Creative Developer"
                textSize="5rem"
                className="whitespace-nowrap absolute leading-[1] rounded-[1rem] ml-10 backdrop-blur-sm text-white tracking-[-.4rem] px-8 font-['Instrument'] top-[calc(50%+1.5rem)] translate-y-[-50%]"
                animationDelay={0.7}
                type="char"
              />
            </div> 
            <div 
              className="absolute inset-0 z-[9] transition-opacity duration-500"
              style={{ opacity: sceneReady ? 1 : 0 }}
            >
              <Canvas
                resize={{ offsetSize: true }}
                dpr={1}
                className="w-full h-full"
                camera={{ position: [1, 0, 5] }}
                gl={{ 
                  antialias: false,
                  powerPreference: 'high-performance',
                  stencil: false,
                  depth: true,
                }}
                performance={{ min: 0.5 }}
                onCreated={() => setSceneReady(true)}
              >
                <Suspense fallback={null}>
                  <ThreeScene textureUrls={textureUrls} />
                </Suspense>
              </Canvas>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
