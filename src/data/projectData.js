const technologies = {
  react: {
    name: 'React',
    src: '/assets/images/react-logo.svg',
  },
  framerMotion: {
    name: 'Framer Motion',
    src: '/assets/images/framer-motion-logo.svg',
  },
  nextJs: {
    name: 'Next.js',
    src: '/assets/images/next-js-logo.svg',
  },
  postgreSql: {
    name: 'PostgreSQL',
    src: '/assets/images/postgresql-logo.svg',
  },
  express: {
    name: 'Express.js',
    src: '/assets/images/express-js-logo.svg',
  },
  sass: {
    name: 'Sass',
    src: '/assets/images/sass-logo.svg',
  },
  vite: {
    name: 'Vite',
    src: '/assets/images/vite-logo.svg',
  },
  tailwind: {
    name: 'Tailwind',
    src: '/assets/images/tailwind-css-logo.svg',
  },
  threejs: {
    name: 'Three.js',
    src: '/assets/images/three-js-logo.svg',
  },
  reactPageRouter: {
    name: 'React Router DOM',
    src: '/assets/images/react-router-dom-logo.svg',
  },
  lenis: {
    name: 'Lenis',
    src: '/assets/images/lenis-logo.svg',
  },
}

const {react, framerMotion, nextJs, postgreSql, express, lenis, sass, vite, tailwind, reactPageRouter, threejs} = technologies

export const projectsArr = [
  {
    projectName: "portfolio",
    name: "Portfolio",
    src: "/assets/images/dawg.jpg",
    bg: "hsl(124 100 22)",
    technologies: [react, framerMotion, tailwind, vite, reactPageRouter, threejs, lenis],
    githubLink: 'https://www.github.com',
    demoLink: 'finnreinders.com',
    description:
      "A personal portfolio website showcasing my web development skills, creative projects, and design philosophy. Built with modern technologies, it features interactive animations, responsive layouts, and a curated selection of work, offering visitors an engaging and immersive experience. The site also includes a contact form and links to my social profiles.",
    imageArr: [
      { src: "/assets/images/photo2.jpg", scale: 1 },
      { src: "/assets/images/photo3.jpg", scale: 2 },
      { src: "/assets/images/photo7.jpg", scale: 4 },
      { src: "/assets/images/photo5.jpg", scale: 1 },
      { src: "/assets/images/photo6.jpg", scale: 4 },
    ],
  },
  {
    projectName: "placeholder-2-website",
    name: "Placeholder 2",
    src: "/assets/images/dawg.jpg",
    bg: "hsl(124 100 22)",
    technologies: [react, framerMotion, tailwind, vite],
    githubLink: 'https://www.github.com',
    demoLink: 'finnreinders.com',
    description:
      "A personal portfolio website showcasing my web development skills, creative projects, and design philosophy. Built with modern technologies, it features interactive animations, responsive layouts, and a curated selection of work, offering visitors an engaging and immersive experience. The site also includes a contact form and links to my social profiles.",
    imageArr: [
      { src: "/assets/images/photo2.jpg", scale: 1 },
      { src: "/assets/images/photo3.jpg", scale: 2 },
      { src: "/assets/images/photo7.jpg", scale: 4 },
      { src: "/assets/images/photo5.jpg", scale: 1 },
      { src: "/assets/images/photo6.jpg", scale: 4 },
    ],
  },
  {
    projectName: "placeholder-3-website",
    name: "Placeholder 3",
    src: "/assets/images/dawg.jpg",
    bg: "hsl(124 100 22)",
    technologies: [react, framerMotion, tailwind, vite],
    githubLink: 'https://www.github.com',
    demoLink: 'finnreinders.com',
    description:
      "A personal portfolio website showcasing my web development skills, creative projects, and design philosophy. Built with modern technologies, it features interactive animations, responsive layouts, and a curated selection of work, offering visitors an engaging and immersive experience. The site also includes a contact form and links to my social profiles.",
    imageArr: [
      { src: "/assets/images/photo2.jpg", scale: 1 },
      { src: "/assets/images/photo3.jpg", scale: 2 },
      { src: "/assets/images/photo7.jpg", scale: 4 },
      { src: "/assets/images/photo5.jpg", scale: 1 },
      { src: "/assets/images/photo6.jpg", scale: 4 },
    ],
  },
];