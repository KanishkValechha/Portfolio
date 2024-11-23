
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import SkillGroup from "./SkillGroup";
import ReactLogo from "../assets/react-logo.png";
import CPPLogo from "../assets/cpp-logo.png";
import CLogo from "../assets/c-logo.png";
import NodeLogo from "../assets/nodejs-logo.png";
import JavaScriptLogo from "../assets/javascript-logo.png";
import CSSLogo from "../assets/css-logo.png";
import HTMLLogo from "../assets/html-logo.png";
import PythonLogo from "../assets/python-logo.png";
import GitLogo from "../assets/git-logo.png";
import Docker from "../assets/docker-logo.png";
import TailwindLogo from "../assets/tailwindcss-logo.png";
import TypescriptLogo from "../assets/typescript-logo.png";
import DjangoLogo from "../assets/django-logo.png";
import SassLogo from "../assets/sass-logo.png";
import NextjsLogo from "../assets/nextjs-logo.png";
import MysqlLogo from "../assets/mysql-logo.png";
import VSCodeLogo from "../assets/vscode-logo.png";
import FirebaseLogo from "../assets/firebase.png";
import AstroLogo from "../assets/astro.png";


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
      { name: "Astro", icon: AstroLogo },
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

const SkillsSection = ({ darkMode }) => {
  SkillsSection.propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };
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

export default SkillsSection;