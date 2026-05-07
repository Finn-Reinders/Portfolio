const technologies = {
  react: {
    name: "React",
    src: "/assets/images/react-logo.svg",
  },
  framerMotion: {
    name: "Framer Motion",
    src: "/assets/images/framer-motion-logo.svg",
  },
  nextJs: {
    name: "Next.js",
    src: "/assets/images/next-js-logo.svg",
  },
  postgreSql: {
    name: "PostgreSQL",
    src: "/assets/images/postgresql-logo.svg",
  },
  express: {
    name: "Express.js",
    src: "/assets/images/express-js-logo.svg",
  },
  sass: {
    name: "Sass",
    src: "/assets/images/sass-logo.svg",
  },
  vite: {
    name: "Vite",
    src: "/assets/images/vite-logo.svg",
  },
  tailwind: {
    name: "TailwindCSS",
    src: "/assets/images/tailwind-css-logo.svg",
  },
  threejs: {
    name: "Three.js",
    src: "/assets/images/three-js-logo.svg",
  },
  reactPageRouter: {
    name: "React Router DOM",
    src: "/assets/images/react-router-dom-logo.svg",
  },
  lenis: {
    name: "Lenis",
    src: "/assets/images/lenis-logo.svg",
  },
  mongoDB: {
    name: "MongoDB",
    src: "/assets/images/mongodb-logo.svg",
  },
  vercel: {
    name: "Vercel",
    src: "/assets/images/vercel-logo.svg",
  },
  typescript: {
    name: "Typescript",
    src: "/assets/images/typescript-logo.svg",
  },
  gsap: {
    name: "GSAP",
    src: "/assets/images/gsap-logo.svg",
  },
};

const {
  react,
  framerMotion,
  nextJs,
  postgreSql,
  express,
  lenis,
  sass,
  vite,
  tailwind,
  reactPageRouter,
  mongoDB,
  threejs,
  vercel,
  typescript,
  gsap
} = technologies;

export const projectsArr = [
  {
    projectName: "portfolio-v2",
    name: "New",
    name2: "Portfolio",
    src: "/assets/images/front/WIP.png",
    imageArr: [
      {
        src: "/assets/videos/other-projects.gif",
        title: "Project Opening Animation",
        technologies: [gsap, framerMotion],
      },
    ],
    technologies: [nextJs, gsap, framerMotion, tailwind],
    description:
      "A redesigned portfolio with more content and more focus on the design. The reason I am redesigning my portfolio is that I'm not satisfied with my current one because there isn't enough thought put into the design or motion.",
  },
  {
    projectName: "natlab-website",
    name: "NatLab",
    name2: "Website",
    src: "/assets/images/front/natlab.png",
    imageArr: [
      {
        src: "/assets/videos/natlab-opening.gif",
        title: "Opening Animation",
        technologies: [gsap, framerMotion],
      },
    ],
    technologies: [nextJs, gsap, framerMotion, tailwind],
    description:
      "A project for NatLab developed during my studies at SintLucas. The assignment isn't clear yet but the opening animation and navbar is finished already.",
  },
  {
    projectName: "opening-animation",
    name: "Opening",
    name2: "Animation",
    src: "/assets/images/ravi-klaassens.png",
    imageArr: [
      {
        src: "/assets/videos/ravi-klaassens-opening.gif",
        title: "Opening Animation",
        technologies: [gsap, react],
      },
    ],
    technologies: [gsap, react, vite],
    description:
      "Recreated the opening animation from Ravi Klaassen's portfolio that I found on Awwwards. My first time using GSAP, and it was the perfect fit – the timeline feature lets you chain animations together smoothly, which is exactly what you need for a slick page opener.",
  },
  {
    projectName: "avenoir",
    name: "Avenoir",
    name2: "Clothing",
    src: "/assets/images/front/WIP.png",
    imageArr: [
      {
        src: "/assets/videos/avenoir-transition.gif",
        href: "https://ambitie-p7-avenoir-clothing-catalog.vercel.app",
        title: "Page Transition",
        technologies: [nextJs],
      },
      {
        src: "/assets/images/avenoir-explore.png",
        href: "https://ambitie-p7-avenoir-clothing-catalog.vercel.app/explore",
        title: "Explore Page",
        technologies: [framerMotion, nextJs],
      },
    ],
    technologies: [nextJs, typescript, framerMotion, tailwind, mongoDB, vercel],
    githubLink: "https://github.com/Finn-Reinders/ambitie-p7-avenoir-clothing-catalogue.git",
    demoLink: "https://ambitie-p7-avenoir-clothing-catalog.vercel.app",
    description:
      "Avenoir Clothing Catalogue is an ambition project developed with Daniël Bovee. A collaborative platform where users can upload garments, share fashion discoveries, and contribute to a community-driven catalogue. Built with Next.js, TypeScript, Framer Motion, and MongoDB for a smooth, responsive experience.",
  },
  {
    projectName: "portfolio",
    name: "Portfolio",
    name2: "Finn Reinders",
    src: "/assets/images/front/portfolio.png",
    imageArr: [
      {
        src: "/assets/images/front/portfolio.png",
        title: "Hero Section",
        technologies: [threejs, framerMotion],
      },
      {
        src: "/assets/images/projects.png",
        title: "Projects",
        technologies: [react, framerMotion],
      },
      {
        src: "/assets/images/projectpage.png",
        title: "Project Page",
        technologies: [reactPageRouter, framerMotion, nextJs],
      },
    ],
    technologies: [
      react,
      framerMotion,
      tailwind,
      vite,
      reactPageRouter,
      threejs,
      lenis,
    ],
    githubLink: "https://github.com/Finn-Reinders/Portfolio",
    demoLink: "https://finnreinders.com",
    description:
      "A React-based portfolio showcasing web development projects, animations, and interactive design experiments. Features a custom Three.js hero section, smooth page transitions powered by Framer Motion, and modern styling with Tailwind CSS.",
  },
  {
    projectName: "the-hub",
    name: "The Hub",
    name2: "Movies",
    src: "/assets/images/front/thehub.png",
    imageArr: [
      {
        src: "/assets/images/front/thehub.png",
        title: "Front page",
        href: "https://finn-reinders.github.io/the-hub",
      },
    ],
    description:
      "An early web development project built with vanilla JavaScript and HTML/CSS. This project marked the beginning of my web development journey and helped me discover my passion for creating interactive web experiences.",
  },
];
