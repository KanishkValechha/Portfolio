import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import Aconews from "../assets/aconews.png";
import Healthdome from "../assets/HealthDome.png";
import Stock from "../assets/Stock.png";
import ChanceChat from "../assets/ChanceChat.png";
const Projects = [
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
    title: "AcoNews",
    description:
      "Developed Aconews, a responsive news app using Vite. Integrated Gnews API, providing articles from 60,000+ sources in 22 languages across 30 countries. Implemented search functionality, enabling users to filter through 100+ news categories.Deployed the website using Firebase.",
    image: Aconews,
    link: "https://aconews-2898d.web.app/",
    github: "https://github.com/KanishkValechha/AcoNews",
    technologies: ["React", "TailwindCSS", "Framer Motion", "Firebase"],
  },
  {
    title: "Health Dome",
    description:
      "Developed system for Delhi hospitals, optimizing care for millions monthly patients. Implemented Llama AI for symptom-to-disease prediction with 90% accuracy created hybrid queuing model using disease tiers for reducing wait times.Applied EOQ model for inventory, decreasing stockouts and integrated comprehensive patient management. Shortlisted for Smart India Hackathon Round 2 among 200+ temas.",
    image: Healthdome,
    link: "https://github.com/KanishkValechha/Health_Dome",
    github: "https://github.com/KanishkValechha/Health_Dome",
    technologies: [
      "ReactJS",
      "TailwindCSS",
      "Python",
      "Flask",
      "SQL",
      "Docker",
    ],
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
    darkMode: PropTypes.bool.isRequired
  }
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
      className={`py-10 pt-20 relative overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 tracking-tight ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-32"
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