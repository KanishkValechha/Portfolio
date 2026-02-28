import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { Nav } from "@/components/nav";
import { Home } from "@/components/home";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import {
  personalInfo,
  socialLinks,
  skills,
  experiences,
  projects,
  achievements,
} from "@/data/portfolioData";

export default function App() {
  const [active, setActive] = useState("home");

  const handleNav = useCallback((id) => {
    setActive(id);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const renderPage = () => {
    switch (active) {
      case "home":
        return <Home key="home" personalInfo={personalInfo} socialLinks={socialLinks} onNav={handleNav} />;
      case "skills":
        return <Skills key="skills" skills={skills} achievements={achievements} />;
      case "experience":
        return <Experience key="experience" experiences={experiences} />;
      case "projects":
        return <Projects key="projects" projects={projects} />;
      case "contact":
        return <Contact key="contact" personalInfo={personalInfo} socialLinks={socialLinks} />;
      default:
        return <Home key="home" personalInfo={personalInfo} socialLinks={socialLinks} onNav={handleNav} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav active={active} onNav={handleNav} />
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
    </div>
  );
}
