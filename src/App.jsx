import { useState } from "react";

import "./index.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/ContactForm";
import AchievementsSection from "./components/AchievementSection";



const PortfolioWebsite = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 text-gray-900"
      }`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection darkMode={darkMode} />
      <SkillsSection darkMode={darkMode} />
      <ExperienceSection darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} />
      <AchievementsSection darkMode={darkMode} />
      <ContactForm darkMode={darkMode} />
    </div>
  );
};

export default PortfolioWebsite;
