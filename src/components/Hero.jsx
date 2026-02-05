import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SplitText } from "./SplitText.jsx";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import Plane from "./Shapes.jsx";
import { anim } from "../anim.js";

export default function Hero() {
  const sectionParent = useRef(null);
  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: sectionParent,
    offset: ["start start", "end start"],
  });

  const scrollScale = useTransform(sectionScrollProgress, [0, 1], [1, 0.75]);

  const heroAnim = {
    initial: { clipPath: "inset(50% round 12px)", filter: "blur(20px)" },
    enter: { clipPath: "inset(0% round 12px)", filter: "blur(0px)" },
    exit: { clipPath: "inset(50% round 12px)", filter: "blur(20px)" },
  };

  const splitAnim = {
    initial: { backdropFilter: "blur(0px)" },
    enter: { backdropFilter: "blur(12px)", transition: {delay: 1, duration: 1} },
    exit: { backdropFilter: "blur(0px)" },
  };

  return (
    <div ref={sectionParent} className="h-[100vh] z-2 relative">
      <section className="sticky top-0 justify-center h-screen px-3 pb-3">
        <motion.div
          {...anim(heroAnim)}
          transition={{
            duration: 1,
            ease: [0.82, 0.05, 0.27, 1],
          }}
          className="z-[1] top-[57px] relative h-[calc(100%-57px)] w-full overflow-hidden"
        >
          <motion.div
            initial={{ scale: 3 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: [0.82, 0.05, 0.27, 1] }}
            className="relative w-full h-full bg-black"
          >
            <div className="background absolute inset-0 z-10">
              <SplitText
                {...anim(splitAnim)}
                style={{}}
                className="whitespace-nowrap absolute backdrop-blur-md leading-[1] rounded-[1rem] text-white tracking-[-.4rem] px-8 font-['Instrument'] top-[calc(50%-5.5rem)] translate-y-[-50%]"
                text="Finn Reinders"
                textSize="12rem"
                animationDelay={0.7}
                type="char"
              />
              <SplitText
                {...anim(splitAnim)}
                text="Front-End Dev"
                textSize="8rem"
                className="whitespace-nowrap absolute leading-[1] rounded-[1rem] backdrop-blur-sm text-white tracking-[-.4rem] px-8 font-['Instrument'] top-[calc(50%+5.5rem)] translate-y-[-50%]"
                animationDelay={0.7}
                type="char"
              />
            </div> 
            <motion.div className="absolute inset-0 z-[9]">
              <Canvas
                resize={{ offsetSize: true }}
                dpr={[1, 1.5]}
                className="w-full h-full"
                camera={{ position: [.5, 0, 5] }}
              >
                Mountains
                <Plane intensity={1} speed={0.6} rotationIntensity={0.3} pos={[2, -1, 2]} size={[2.5]} texture={'https://images.unsplash.com/photo-1768409234914-96f61529b7e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
                {/* Grass Plane */}
                <Plane intensity={1.0} speed={1.0} rotationIntensity={0.7} pos={[-2.5, -2, -1]} size={[5]} texture={'https://plus.unsplash.com/premium_photo-1725408037993-f891474828c9?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
                {/* Bus Plane */}
                <Plane intensity={0.9} speed={1.0} rotationIntensity={0.4} pos={[0, 0, 1.7]} size={[4]} texture={'https://images.unsplash.com/photo-1761839258753-85d8eecbbc29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
                {/* City Plane */}
                <Plane intensity={0.9} speed={0.9} rotationIntensity={0.5} pos={[-3, 1.5, 1]} size={[3]} texture={'https://images.unsplash.com/photo-1769095383888-c1fc328a81af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
                {/* Interstellar Plane */}
                <Plane intensity={0.8} speed={0.9} rotationIntensity={0.35} pos={[2, 1, 1]} size={[4]} texture={'https://images.unsplash.com/photo-1768222780460-3cb1027f51e2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
                <Environment preset={'city'}/>
              </Canvas>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
