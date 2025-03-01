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

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  const [hasBeenInView, setHasBeenInView] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  // Update hasBeenInView state when section comes into view
  useEffect(() => {
    if (inView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [inView, hasBeenInView]);

  // Get unique technologies for filtering
  const allTechnologies = [
    "All",
    ...new Set(Projects.flatMap((p) => p.technologies)),
  ];

  // Filter projects based on selected technology
  const filteredProjects =
    activeFilter === "All"
      ? Projects
      : Projects.filter((project) =>
          project.technologies.includes(activeFilter)
        );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 relative overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 opacity-50 pointer-events-none">
        <div
          className={`w-full h-full ${
            darkMode
              ? "bg-gradient-to-b from-indigo-900/20 to-transparent"
              : "bg-gradient-to-b from-indigo-100 to-transparent"
          }`}
        ></div>
      </div>

      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none bg-gradient-to-r from-purple-400 to-indigo-600"></div>
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none bg-gradient-to-r from-pink-400 to-orange-400"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={inView || hasBeenInView ? "visible" : "hidden"}
        >
          <motion.h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className={`max-w-2xl mx-auto text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Explore my latest work and technical projects
          </motion.p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={
            inView || hasBeenInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {allTechnologies.slice(0, 10).map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === tech
                  ? darkMode
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                    : "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView || hasBeenInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:gap-10"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              darkMode={darkMode}
              video={project.video}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView || hasBeenInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="https://github.com/KanishkValechha"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-white text-gray-800 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
