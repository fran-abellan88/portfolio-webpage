import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Publications from "@/components/sections/Publications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ParticlesBgLoader from "@/components/ui/ParticlesBgLoader";

export default function Home() {
  return (
    <>
      <ParticlesBgLoader />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
