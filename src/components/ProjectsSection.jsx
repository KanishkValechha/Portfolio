import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import Aconews from "../assets/aconews.png";
import Healthdome from "../assets/HealthDome.png";
import Stock from "../assets/Stock.png";
import ChanceChat from "../assets/ChanceChat.png";
import LeetwithGit from "../assets/LeetwithGit.png";
import WallOfFame from "../assets/WallOfFame.png";
const Projects = [
  {
    title: "Wall of Fame",
    description:
      "Developed a Wall of Fame website for college using Next.js and MongoDB, creating an interactive platform to showcase student achievements. Integrated dynamic content delivery and optimized website performance, improving SEO and user engagement. Deployed the website on Vercel.",
    image: WallOfFame,
    link: "https://wall-of-fame-rho.vercel.app/",
    github: "",
    technologies: ["Next.js", "MongoDB", "Vercel"],
  },
  {
    title: "Chance Chat",
    description:
      "Decentralized social media application utilizing Aptos Roll API to generate truly random content distribution, providing a level playing field for all users. The platform features a responsive UI built with Framer Motion and integrates seamlessly with the Aptos blockchain.",
    image: ChanceChat,
    link: "https://chance-chat.vercel.app/",
    github: "https://github.com/KanishkValechha/ChanceChat",
    technologies: [
      "React",
      "Aptos",
      "Move",
      "IPFS",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Vercel",
    ],
    video: "https://www.youtube.com/embed/4GPMp6Fk5ZU", // Updated embed URL
  },
  {
    title: "Health Dome",
    description:
      "Developed system for Delhi hospitals, optimizing care for millions monthly patients. Implemented Llama AI for symptom-to-disease prediction with 90% accuracy created hybrid queuing model using disease tiers for reducing wait times.Applied EOQ model for inventory, decreasing stockouts and integrated comprehensive patient management. Shortlisted for Smart India Hackathon Round 2 among 200+ teams.",
    image: Healthdome,
    link: "https://youtu.be/gC629wksFf8",
    github: "https://github.com/KanishkValechha/Health_Dome",
    technologies: [
      "ReactJS",
      "TailwindCSS",
      "Python",
      "Flask",
      "SQL",
      "Docker",
      "AWS",
    ],
    video: "https://www.youtube.com/embed/gC629wksFf8?si=aYfVgvZ-9z8C_LHY", // Updated embed URL
  },
  {
    title: "LeetwithGit",
    description:
      "Developed a Leetcode extension which pushes the users LC submission on Github with a single click, also users can add friends and see their submissions. Integrated Github API for fetching user data and submissions. Implemented OAuth for user authentication and authorization. Deployed the extension on Chrome Web Store(WIP).",
    image: LeetwithGit,
    link: "https://github.com/KanishkValechha/LeetWithGit",
    github: "https://github.com/KanishkValechha/LeetWithGit",
    technologies: ["Javascript", "Github API", "OAuth", "Chrome Extension"],
  },
  {
    title: "AcoNews",
    description:
      "Developed Aconews, a responsive news app using Vite. Integrated Gnews API, providing articles from 60,000+ sources in 22 languages across 30 countries. Implemented search functionality, enabling users to filter through 100+ news categories.Deployed the website using Firebase.",
    image: Aconews,
    link: "https://aconews-2898d.web.app/",
    github: "https://github.com/KanishkValechha/AcoNews",
    technologies: ["React", "TailwindCSS", "Framer Motion", "Firebase"],
  },
  {
    title: "Stock Price Prediction",
    description:
      "Formulated an LSTM-based model to analyze and forecast stock market prices using historical data. Measured prediction accuracy, achieving over 70% for determining the directional movement of stock prices.Constructed a Streamlit-powered web interface to display predictive analytics and graphs for stocks. Integrated Yahoo Finance API to provide real-time stock price data, including prices for the past 10 years.",
    image: Stock,
    link: "https://github.com/KanishkValechha/Stock-Price-Prediction-Model",
    github: "https://github.com/KanishkValechha/Stock-Price-Prediction-Model",
    technologies: ["Python", "TensorFlow", "Streamlit", "Yahoo Finance API"],
  },
];

const ProjectsSection = ({ darkMode }) => {
  ProjectsSection.propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };

  // Update the intersection observer configuration
  const [ref, inView] = useInView({
    triggerOnce: false, // Keep this false to allow re-animation
    threshold: 0.1,
    rootMargin: "0px 0px 0px 0px", // Adjust this to start detection earlier
  });

  // Track if we've ever been in view to prevent the blank state
  const [hasBeenInView, setHasBeenInView] = useState(false);

  // Update hasBeenInView state when section comes into view
  useEffect(() => {
    if (inView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [inView, hasBeenInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-8 pt-16 relative overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={
            inView || hasBeenInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -30 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 tracking-tight ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView || hasBeenInView ? "visible" : "hidden"}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="space-y-6"
        >
          {Projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              darkMode={darkMode}
              video={project.video} // Pass the video prop
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"
            : "bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500"
        } opacity-10`}
      ></div>
    </section>
  );
};

export default ProjectsSection;
