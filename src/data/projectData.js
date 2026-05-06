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
    src: "/assets/images/front/natlab.png",
    imageArr: [
      {
        src: "/assets/videos/other-projects.gif",
        title: "Opening Animation",
        technologies: [gsap, framerMotion],
      },
    ],
    bg: "hsl(124 100 22)",
    technologies: [nextJs, gsap, framerMotion, tailwind],
    githubLink: "https://github.com/Finn-Reinders/ambitie-p7-avenoir-clothing-catalogue.git",
    demoLink: "https://ambitie-p7-avenoir-clothing-catalog.vercel.app/?_vercel_share=U2VD7aemCa8SkgqqEayoqJSfoPfNUfNA",
    description:
      "So I decided to make a new portfolio because I am not satisfied with this one. This time I am focussing on working on a website from a design and branding which I previously didn't really do. Sadly I started a little late on this portfolio so i can't apply for interships with it so I am just going to apply with this portfolio.",
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
    bg: "hsl(124 100 22)",
    technologies: [nextJs, gsap, framerMotion, tailwind],
    githubLink: "https://github.com/Finn-Reinders/ambitie-p7-avenoir-clothing-catalogue.git",
    demoLink: "https://ambitie-p7-avenoir-clothing-catalog.vercel.app/?_vercel_share=U2VD7aemCa8SkgqqEayoqJSfoPfNUfNA",
    description:
      "This is a project i got in the 8th phase on the SintLucas. The client for this project was NatLab.",
  },
  {
    projectName: "opening-animation",
    name: "Opening",
    name2: "Animation",
    src: "/assets/images/avenoir-explore.png",
    imageArr: [
      {
        src: "/assets/images/avenoir-explore.png",
        title: "Explore Page",
        technologies: [gsap, react],
      },
    ],
    bg: "hsl(124 100 22)",
    technologies: [gsap, react, vite],
    githubLink: "https://github.com/Finn-Reinders/ambitie-p7-avenoir-clothing-catalogue.git",
    demoLink: "https://ambitie-p7-avenoir-clothing-catalog.vercel.app/?_vercel_share=U2VD7aemCa8SkgqqEayoqJSfoPfNUfNA",
    description:
      "Recreated the opening animation from Ravi Klaassen's portfolio that I found on Awwwards. My first time using GSAP, and it was the perfect fit – the timeline feature lets you chain animations together smoothly, which is exactly what you need for a slick page opener.",
  },
  {
    projectName: "avenoir",
    name: "Avenoir",
    name2: "Clothing",
    src: "/assets/images/avenoir-explore.png",
    imageArr: [
      {
        src: "/assets/images/avenoir-explore.png",
        title: "Explore Page",
        technologies: [framerMotion, nextJs],
      },
    ],
    bg: "hsl(124 100 22)",
    technologies: [nextJs, typescript, framerMotion, tailwind, vite, mongoDB, vercel],
    githubLink: "https://github.com/Finn-Reinders/ambitie-p7-avenoir-clothing-catalogue.git",
    demoLink: "https://ambitie-p7-avenoir-clothing-catalog.vercel.app/?_vercel_share=U2VD7aemCa8SkgqqEayoqJSfoPfNUfNA",
    description:
      "Avenoir Clothing Catalogue is an ambitious project I started in my second year of web development, working alongside Daniël Bovee. The site is still in development, but the idea is simple: anyone can upload their own garments or share cool pieces they’ve found online. You can create an account easily with Google or your email, and start contributing to the catalogue. It’s a collaborative space for fashion lovers to discover, share, and showcase unique styles.",
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
    bg: "hsl(124 100 22)",
    technologies: [
      react,
      framerMotion,
      tailwind,
      vite,
      reactPageRouter,
      threejs,
      lenis,
    ],
    githubLink: "https://www.github.com",
    demoLink: "https://finnreinders.com",
    description:
      "This portfolio is my creative playground and the result of my second deep dive into React. I’m still experimenting with new tools and ideas, so you’ll find a mix of animations, interactive elements, and a few things that might not be perfect yet (but that’s part of the fun). The site is a collection of my web development projects, design experiments, and a bit about me. Built with modern tech, it’s meant to be both a showcase and a space where I try out new things as I learn. If you want to see my current skills, just take a look at my project Avenoir Clothing Catalogue. Feel free to explore, check out my work, and get in touch if you want to connect or collaborate!",
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
        technologies: [],
      },
      {
        src: "/assets/images/dawg.jpg",
        title: "wut da dawg doin",
        technologies: [react, framerMotion, nextJs],
      },
      {
        src: "/assets/images/photo6.jpg",
        title: "6",
        technologies: [postgreSql, framerMotion, nextJs],
      },
    ],
    bg: "hsl(124 100 22)",
    technologies: [
      react,
      framerMotion,
      tailwind,
      vite,
      reactPageRouter,
      threejs,
      lenis,
    ],
    githubLink: "https://github.com/Finn-Reinders/Finn-Reinders.github.io",
    demoLink: "https://finn-reinders.github.io/the-hub/",
    description:
      "A personal portfolio website showcasing my web development skills, creative projects, and design philosophy. Built with modern technologies, it features interactive animations, responsive layouts, and a curated selection of work, offering visitors an engaging and immersive experience. The site also includes a contact form and links to my social profiles.",
  },
];
