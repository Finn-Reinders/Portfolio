import React from "react";
import "../styles/App.css";
import { motion } from "framer-motion";

export default function Main() {
  const projects = [
    { id: "project-1" },
    { id: "project-2" },
    { id: "project-3" },
    { id: "project-4" },
    { id: "project-5" },
  ];

  return (
    <>
      <main className="h-screen w-screen flex justify-center items-center">
        {projects.map((project, i) => (
          <motion.div
            initial={{opacity: 0.9}}
            whileHover={{y: -20, opacity: 1, width: '50%', zIndex: i, marginLeft: 20, marginRight: 70}}
            whileInView={{ width: "10%" }}
            transition={{
              duration: 0.5,
              damping: 15,
              type: 'spring',
            }}
            viewport={{
              amount: 0.5,
              // once: true,
            }}
            key={project.id}
            style={{width: 0, backgroundColor: `rgb(${(255 / projects.length) * i} ${(255 / projects.length) * i} ${(255 / projects.length) * i})`, zIndex: i, marginLeft: i != 0 ? -50 : 0}}
            className="max-w-[52%] rounded-[8rem] squircle h-[50%] w-[10%]"
          ></motion.div>
        ))}
      </main>
    </>
  );
}
