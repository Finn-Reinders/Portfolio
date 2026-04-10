import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <div className='bg-black w-full h-20 text-white text-3xl'>Projects</div>
      <Projects />
      <Footer />
    </>
  );
}
