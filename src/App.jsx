import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KanishkPhoto from "./assets/Kanishk.jpg";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { Sun, Moon, Send, CheckCircle } from "lucide-react";
import "./index.css";
import { Award, Star, Trophy, Target } from "lucide-react";
import Aconews from "./assets/aconews.png";
import Healthdome from "./assets/HealthDome.png";
import Stock from "./assets/Stock.png";
import PropTypes from "prop-types";

import ReactLogo from "./assets/react-logo.png";
import CPPLogo from "./assets/cpp-logo.png";
import CLogo from "./assets/c-logo.png";
import NodeLogo from "./assets/nodejs-logo.png";
import JavaScriptLogo from "./assets/javascript-logo.png";
import CSSLogo from "./assets/css-logo.png";
import HTMLLogo from "./assets/html-logo.png";
import PythonLogo from "./assets/python-logo.png";
import GitLogo from "./assets/git-logo.png";
import Docker from "./assets/docker-logo.png";
import TailwindLogo from "./assets/tailwindcss-logo.png";
import TypescriptLogo from "./assets/typescript-logo.png";
import DjangoLogo from "./assets/django-logo.png";
import SassLogo from "./assets/sass-logo.png";
import NextjsLogo from "./assets/nextjs-logo.png";
import MysqlLogo from "./assets/mysql-logo.png";
import VSCodeLogo from "./assets/vscode-logo.png";
import FirebaseLogo from "./assets/firebase.png";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  Navbar.propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 header-scrolled" : "py-4"
      } ${darkMode ? "text-white" : "text-gray-900"}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`header-internal ${
            scrolled ? "elementor-sticky--effects" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              {[
                "Home",
                "Skills",
                "Experience",
                "Projects",
                "Achievements",
                "Contact",
              ].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  <motion.span
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      darkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.span>
                </Link>
              ))}
            </div>
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-700 text-yellow-300"
                  : "bg-gray-200 text-gray-700"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const AnimatedText = ({ darkMode }) => {
  const roles = [
    "Full Stack Developer",
    "Tech Enthusiast",
    "Competitive Coder",
    "ML Enthusiast",
  ];

  return (
    <div className="text-wrapper relative h-[40px] overflow-hidden pl-4 pt-1">
      <div className="text-animation inline-block">
        {roles.map((role, index) => (
          <div
            key={index}
            className={`text-item block text-2xl font-bold ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            {role}
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSection = ({ darkMode }) => {
  return (
    <div
      id="home"
      className={`relative min-h-screen overflow-hidden ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center z-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className={`text-4xl font-extrabold sm:text-5xl md:text-6xl mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Hello, I'm{" "}
              <span
                className={darkMode ? "text-indigo-400" : "text-indigo-600"}
              >
                Kanishk
              </span>
            </h2>
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 flex items-center ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              I am a <AnimatedText darkMode={darkMode} />
            </h1>
            <p
              className={`mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Crafting beautiful and intuitive user interfaces with cutting-edge
              web technologies.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 relative z-10">
              <motion.a
                href="#projects"
                className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white ${
                  darkMode
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } md:text-lg transition duration-300 shadow-lg hover:shadow-xl`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${
                  darkMode
                    ? "text-indigo-300 bg-gray-800 hover:bg-gray-700"
                    : "text-indigo-600 bg-white hover:bg-gray-50"
                } md:text-lg transition duration-300 shadow-lg hover:shadow-xl`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="relative p-16 pt-24"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className={`aspect-w-1 aspect-h-1 rounded-full overflow-hidden ${
                darkMode ? "bg-indigo-400" : "bg-indigo-500"
              } p-2`}
            >
              <img
                src={KanishkPhoto}
                alt="Kanishk"
                className="object-cover object-center rounded-full"
              />
            </div>
            <div
              className={`absolute -bottom-4 -right-4 ${
                darkMode ? "bg-gray-800" : "bg-white"
              } rounded-full p-4 shadow-xl`}
            >
              <motion.svg
                className={`h-8 w-8 ${
                  darkMode ? "text-indigo-400" : "text-indigo-600"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </motion.svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className={`absolute top-0 left-0 right-0 h-64 ${
          darkMode
            ? "bg-gradient-to-b from-gray-800 to-transparent"
            : "bg-gradient-to-b from-indigo-200 to-transparent"
        } opacity-30`}
      ></div>
      <div
        className={`absolute bottom-0 left-0 right-0 h-64 ${
          darkMode
            ? "bg-gradient-to-t from-gray-800 to-transparent"
            : "bg-gradient-to-t from-pink-200 to-transparent"
        } opacity-30`}
      ></div>
      <div className="absolute top-48 left-48 w-full h-full pointer-events-none">
        <div
          className={`absolute w-1/3 h-1/2 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${
            darkMode ? "" : "bg-blue-300"
          }`}
        ></div>
        <div
          className={`absolute w-1/3 h-1/2 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${
            darkMode ? "" : "bg-violet-300"
          }`}
        ></div>
      </div>
    </div>
  );
};
const skillGroups = [
  {
    title: "Language",
    skills: [
      { name: "C", icon: CLogo },
      { name: "C++", icon: CPPLogo },
      { name: "Python", icon: PythonLogo },
      { name: "CSS3", icon: CSSLogo },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: HTMLLogo },
      { name: "CSS3", icon: CSSLogo },
      { name: "JavaScript", icon: JavaScriptLogo },
      { name: "Typescript", icon: TypescriptLogo },
      { name: "TailwindCSS", icon: TailwindLogo },
      { name: "Sass", icon: SassLogo },
      { name: "ReactJS", icon: ReactLogo },
      { name: "Next.js", icon: NextjsLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: NodeLogo },
      { name: "Django", icon: DjangoLogo },
      { name: "MySQL", icon: MysqlLogo },
      { name: "Docker", icon: Docker },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: GitLogo },
      { name: "VS Code", icon: VSCodeLogo },
      { name: "Firebase", icon: FirebaseLogo },
    ],
  },
  // You can add more groups or skills as needed
];

const SkillCard = ({ skill, index, inView, darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col items-center p-4 rounded-xl ${
        darkMode ? "bg-gray-800" : "bg-white"
      } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
    >
      <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
      <span
        className={`text-sm font-bold ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {skill.name}
      </span>
    </motion.div>
  );
};

const SkillGroup = ({ group, inView, darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mb-12"
    >
      <h3
        className={`text-2xl font-bold mb-6 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        {group.title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {group.skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
            inView={inView}
            darkMode={darkMode}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 relative overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-4xl md:text-5xl font-extrabold text-center mb-16 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          My Toolkit
        </motion.h2>

        {skillGroups.map((group) => (
          <SkillGroup
            key={group.title}
            group={group}
            inView={inView}
            darkMode={darkMode}
          />
        ))}
      </div>

      {/* Background decoration */}
      <div className={` ${darkMode ? "hidden" : ""}`}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="absolute top-0 left-3/4 w-full h-full  pointer-events-none">
          <div className=" absolute w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="  absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className=" absolute w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
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

const Projects = [
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
  {
    title: "AcoNews",
    description:
      "Developed Aconews, a responsive news app using Vite. Integrated Gnews API, providing articles from 60,000+ sources in 22 languages across 30 countries. Implemented search functionality, enabling users to filter through 100+ news categories.Deployed the website using Firebase.",
    image: Aconews,
    link: "https://aconews-2898d.web.app/",
    github: "https://github.com/KanishkValechha/AcoNews",
    technologies: ["React", "TailwindCSS", "Framer Motion", "Firebase"],
  },
  // Add more projects as needed
];

const experiences = [
  {
    role: "Freelance FullStack Developer",
    company: "Shivanand Infrastructures",
    period: "June 2024 - Present",
    responsibilities: [
      "Led the development of a their new website",
      "Implemennted complex visual animations for improved user experience",
      "Optimized website performance and improved SEO",
    ],
    technologies: ["React", "Tailwind CSS"],
  },
  {
    role: "Webmaster",
    company: "Cyber Space Club",
    period: "May 2024 - Present",
    responsibilities: [
      "Planned the overhaul of the clubs website, utilizing Next.js to enhance dynamic content delivery.",
      "Utilizing Next.js reduced the initial load time by up to 50% compared to the previous React app.",
      "Improved website SEO by 25% through optimized meta tags and content structure.",
      "Implemented event registration features and integrated a newsletter section for better engagement.",
    ],
    technologies: ["NextJS", "Tailwind CSS"],
  },
  // Add more experiences...
];

const ExperienceSection = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-20 pt-36 relative overflow-hidden $`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`text-5xl font-extrabold text-center mb-16 tracking-tight ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Professional Journey
        </motion.h2>
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
              inView={inView}
              darkMode={darkMode}
            />
          ))}
          <div
            className={`absolute left-1/2 top-0 bottom-0 w-0.5 ${
              darkMode ? "bg-gray-600" : "bg-indigo-300"
            } transform -translate-x-1/2`}
          ></div>
        </div>
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

const ExperienceCard = ({ experience, index, inView, darkMode }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`mb-8 flex justify-between items-center w-full ${
        isEven ? "flex-row-reverse left-timeline" : "right-timeline"
      }`}
    >
      <div className="order-1 w-5/12"></div>
      <div className="order-1 w-5/12 px-1 py-4">
        <motion.div
          className={`${
            darkMode ? "bg-gray-800 bg-opacity-50" : "bg-white bg-opacity-20"
          } backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl`}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          <h3
            className={`font-bold text-2xl mb-1 ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            {experience.role}
          </h3>
          <h4
            className={`font-semibold text-xl mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            {experience.company}
          </h4>
          <p
            className={`text-sm mb-4 ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            {experience.period}
          </p>
          <ul
            className={`list-disc list-inside ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {experience.responsibilities.map((resp, idx) => (
              <li key={idx} className="mb-1">
                {resp}
              </li>
            ))}
          </ul>
          {experience.technologies && (
            <div className="mt-4">
              <h5
                className={`text-sm font-semibold mb-2 ${
                  darkMode ? "text-indigo-400" : "text-indigo-600"
                }`}
              >
                Technologies used:
              </h5>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-1 rounded-full text-xs ${
                      darkMode
                        ? "bg-gray-700 text-indigo-300"
                        : "bg-indigo-100 text-indigo-800"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
      <motion.div
        className={`absolute left-1/2 w-6 h-6 rounded-full ${
          darkMode ? "bg-indigo-400" : "bg-indigo-500"
        } shadow ${isEven ? "-translate-y-4" : "translate-y-4"}`}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      ></motion.div>
    </motion.div>
  );
};

const ProjectsSection = ({ darkMode }) => {
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
      className={`py-20 pt-36 relative overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-7xl font-extrabold text-center mb-24 tracking-tight ${
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

const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ProjectCard = ({ project, index, darkMode, variants }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={variants}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center gap-12`}
    >
      <div className="w-full lg:w-3/5">
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl group"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full  object-cover transition-transform duration-300 group-hover:scale-110"
          />

          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </motion.div>
      </div>
      <div className="w-full lg:w-2/5">
        <h3
          className={`text-4xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`mb-8 text-xl leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 rounded-full text-sm ${
                darkMode
                  ? "bg-gray-800 text-indigo-300"
                  : "bg-white text-indigo-800"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <motion.a
            href={project.link}
            className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold transition duration-300 ${
              darkMode
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
            <svg
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>
          <motion.a
            href={project.github}
            className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold transition duration-300 ${
              darkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">GitHub</span>
            <GitHubIcon className="" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};
const Alert = ({ children, className = "", type = "info" }) => {
  const baseClasses =
    "rounded-lg p-4 mb-4 flex flex-col items-start shadow-md transition-all duration-300 ease-in-out";
  const typeClasses = {
    info: "bg-blue-50 text-blue-800 border-l-4 border-blue-500",
    success: "bg-green-50 text-green-800 border-l-4 border-green-500",
    warning: "bg-yellow-50 text-yellow-800 border-l-4 border-yellow-500",
    error: "bg-red-50 text-red-800 border-l-4 border-red-500",
  };

  return (
    <div
      className={`${baseClasses} ${typeClasses[type]} ${className}`}
      role="alert"
    >
      {children}
    </div>
  );
};

const AlertTitle = ({ children, className = "" }) => {
  return (
    <h3 className={`text-lg font-semibold mb-1 ${className}`}>{children}</h3>
  );
};

const AlertDescription = ({ children, className = "" }) => {
  return <div className={`text-sm opacity-90 ${className}`}>{children}</div>;
};


const ContactForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mbljjoka", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowPopup(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 pb-56 relative overflow-hidden`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className={`backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden tracking-tight`}
        >
          <div className="md:flex">
            <div
              className={`md:w-1/2 ${
                darkMode
                  ? "bg-gradient-to-br from-indigo-600 to-purple-700"
                  : "bg-gradient-to-br from-indigo-500 to-purple-600"
              } p-8 text-white`}
            >
              <h2 className="text-3xl font-extrabold mb-4">Get in Touch</h2>
              <p className="mb-4">
                I'd love to hear from you! Whether you have a question or just
                want to say hi, feel free to drop a message.
              </p>
              <div className="flex items-center mb-4">
                <Send size={20} className="mr-2" />
                <span>kanishkvalecha09@gmail.com</span>
              </div>
              <div className="flex space-x-4 mt-8">
                <a
                  href="#"
                  className="text-white hover:text-indigo-200 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-indigo-200 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-indigo-200 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>
            <div
              className={`md:w-1/2 p-8 ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`mt-1 w-full block h-9 py-4 px-2 rounded-md ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border-gray-300 text-gray-900"
                    } shadow-sm focus:ring focus:ring-opacity-50 ${
                      darkMode
                        ? "focus:border-indigo-500 focus:ring-indigo-500"
                        : "focus:border-indigo-300 focus:ring-indigo-200"
                    }`}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`mt-1 h-9 py-4 px-2 block w-full rounded-md ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border-gray-300 text-gray-900"
                    } shadow-sm focus:ring focus:ring-opacity-50 ${
                      darkMode
                        ? "focus:border-indigo-500 focus:ring-indigo-500"
                        : "focus:border-indigo-300 focus:ring-indigo-200"
                    }`}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className={`mt-1 block w-full py-2 px-3 rounded-md ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border-gray-300 text-gray-900"
                    } shadow-sm focus:ring focus:ring-opacity-50 ${
                      darkMode
                        ? "focus:border-indigo-500 focus:ring-indigo-500"
                        : "focus:border-indigo-300 focus:ring-indigo-200"
                    }`}
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full font-bold py-2 px-4 rounded-md transition duration-300 ${
                    darkMode
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <Alert
              className={`${
                darkMode ? "bg-green-800 text-white" : "bg-green-100"
              } w-72`}
            >
              <CheckCircle
                className={`h-4 w-4 ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              />
              <AlertTitle
                className={`${darkMode ? "text-green-100" : "text-green-800"}`}
              >
                Success!
              </AlertTitle>
              <AlertDescription
                className={`${darkMode ? "text-green-200" : "text-green-700"}`}
              >
                Your message has been sent successfully.
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"
            : "bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500"
        } opacity-10`}
        style={{ pointerEvents: "none" }}
      ></div>
    </section>
  );
};


const achievements = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Ranked 3rd at Abacus",
    description: "Ranked 3rd at State Level Abacus Competition",
    year: "2017",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "3 Star at Codechef",
    description:
      "Consistently performed well in Codechef contests, demonstrating a high level of competitive programming ability.",
    year: "2024",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "SIH 2024 Finalists",
    description: "Finalists at Smart India Hackathon 2024 for Health Dome",
    year: "2022",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Knight at LeetCode",
    description:
      "Achieved the title of Knight on LeetCode, solving 100+ problems.",
    year: "2024",
  },
];

const AchievementCard = ({ achievement, index, inView, darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.3 }}
      className={`relative p-6 rounded-lg shadow-lg overflow-hidden ${
        darkMode ? "bg-gray-800 bg-opacity-50" : "bg-white bg-opacity-80"
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-2 h-full ${
          darkMode ? "bg-indigo-500" : "bg-indigo-600"
        }`}
      ></div>
      <div className="flex items-center mb-4">
        <div
          className={`p-3 rounded-full mr-4 ${
            darkMode
              ? "bg-indigo-500 text-white"
              : "bg-indigo-100 text-indigo-600"
          }`}
        >
          {achievement.icon}
        </div>
        <div>
          <h3
            className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {achievement.title}
          </h3>
          <p
            className={`text-sm ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {achievement.year}
          </p>
        </div>
      </div>
      <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        {achievement.description}
      </p>
    </motion.div>
  );
};

const AchievementsSection = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="achievements"
      ref={ref}
      className={` py-48 pb-60 relative overflow-hidden  ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className={`text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Achievements & Milestones
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              index={index}
              inView={inView}
              darkMode={darkMode}
            />
          ))}
        </div>
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
