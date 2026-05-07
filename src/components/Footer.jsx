import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { anim } from "../anim";
import { footerData } from "../data/footerData";
import { li } from "framer-motion/client";
import { Link } from "react-router-dom";
import { useState } from "react";
import { projectsArr } from '../data/projectData' 

export default function Footer() {
  const footerLeave = {
    initial: {
      y: 40 + "vh",
      transition: { duration: 1, ease: [0.85, 0, 0.15, 1] },
    },
    enter: {
      y: 0,
      transition: { duration: 1, ease: [0.85, 0, 0.15, 1] },
    },
    exit: {
      y: 40 + "vh",
      transition: { duration: 1, ease: [0.85, 0, 0.15, 1] },
    },
  };

  const [isHovering, setIsHovering] = useState(null);

  const hoverLink = {
    initial: { opacity: 0, transition: { duration: 0.2 } },
    enter: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const hoverLinkText = {
    initial: { x: 0, transition: { duration: 1 } },
    enter: { x: 1, transition: { duration: 1 } },
    exit: { x: 0, transition: { duration: 1 } },
  };
  return (
    <footer className="w-fit h-fit overflow-hidden">
      <motion.section
        {...anim(footerLeave)}
        className=" py-4 pl-8 h-80 flex flex-col w-screen bg-black text-white"
      >
        <div className="flex gap-40">
          <div className="flex gap-16">
            <div className="flex flex-col ">
              <h2 className="font-['Instrument'] text-3xl">Contact</h2>
              <ul>
                {footerData.contact.map((item, i) => {
                  return (
                    <li className='text-white/80' key={`contact_item_${item.name}`}>
                      {item.link ? (
                        <Link target='_blank' to={item.link}>{item.name}</Link>
                      ) : (
                        <>{item.name}</>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col  ">
              <h2 className="font-['Instrument'] text-3xl">Socials</h2>
              <ul>
                {footerData.socials.map((item, i) => {
                  return (
                    <li className='text-white/80' key={`socials_item_${item.name}`}>
                      <Link target="_blank" to={item.link}>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col  ">
              <h2 className="font-['Instrument'] text-3xl">About Me</h2>
              <p className='text-white/80 w-60'>Hey! I am a self taught Front-End Developer. Specializing in Next.js and Framer Motion</p>
            </div>
          </div>
          <div className="flex flex-row w-fit h-fit  ">
            <Link to={`/projects/${projectsArr[0].projectName}`}  className='flex flex-col w-60'>
            <h2 className="font-['Instrument'] text-3xl whitespace-nowrap">{projectsArr[0].name} {projectsArr[0].name2}</h2>
              <p className='w-full text-white/80'>Go check this project out it. It is the latest project i've created.</p>
            </Link>
            <div className='w-20 h-20'><img className='object-cover w-full h-full rounded-md' src={`${projectsArr[0].src}`} alt="" /></div>
          </div>
        </div>
      </motion.section>
    </footer>
  );
}
