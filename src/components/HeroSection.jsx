import { motion } from "framer-motion";
// import KanishkPhoto from "../assets/Kanishk.jpg";
import AnimatedText from "./AnimatedText";
import PropTypes from "prop-types";
// import social media logos
import githubLogo from "../assets/github-logo.svg";
import leetcodeLogo from "../assets/leetcode-logo.svg";
import codeforcesLogo from "../assets/codeforces-logo.svg";
import codechefLogo from "../assets/codechef-logo.svg";
import linkedinLogo from "../assets/linkedin-logo.svg";
import twitterLogo from "../assets/x.svg";

const HeroSection = ({ darkMode, loadingComplete }) => {
  return (
    <div
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden px-2 sm:px-4 ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100"
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="relative w-full max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              loadingComplete
                ? {
                    opacity: darkMode ? 0.15 : 0.4,
                    scale: 1,
                    transition: {
                      duration: 2,
                      ease: "easeOut",
                    },
                  }
                : { opacity: 0, scale: 0.5 }
            }
            className={`absolute top-0 left-1/4 w-72 h-72 rounded-full 
              filter blur-xl animate-blob animation-delay-2000
              ${
                darkMode
                  ? "bg-blue-500 mix-blend-screen"
                  : "bg-purple-300 mix-blend-multiply opacity-70"
              }`}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              loadingComplete
                ? {
                    opacity: darkMode ? 0.15 : 0.4,
                    scale: 1,
                    transition: {
                      duration: 2,
                      delay: 0.2,
                      ease: "easeOut",
                    },
                  }
                : { opacity: 0, scale: 0.5 }
            }
            className={`absolute top-0 -right-4 w-72 h-72 rounded-full 
              filter blur-xl animate-blob animation-delay-4000
              ${
                darkMode
                  ? "bg-purple-500 mix-blend-screen"
                  : "bg-yellow-300 mix-blend-multiply opacity-70"
              }`}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              loadingComplete
                ? {
                    opacity: darkMode ? 0.15 : 0.4,
                    scale: 1,
                    transition: {
                      duration: 2,
                      delay: 0.4,
                      ease: "easeOut",
                    },
                  }
                : { opacity: 0, scale: 0.5 }
            }
            className={`absolute -bottom-8 left-20 w-72 h-72 rounded-full 
              filter blur-xl animate-blob
              ${
                darkMode
                  ? "bg-cyan-500 mix-blend-screen"
                  : "bg-pink-300 mix-blend-multiply opacity-70"
              }`}
          />
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            darkMode
              ? "from-gray-900/80 via-transparent to-gray-900/80"
              : "from-indigo-100 via-transparent to-pink-100"
          } opacity-40`}
        />
      </div>

      {/* Main content */}
      <div className="max-w-7xl w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={
            loadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
          }
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2
            className={` font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Hello, I&apos;m{" "}
            <span className={darkMode ? "text-indigo-400" : "text-indigo-600"}>
              Kanishk
            </span>
          </h2>
          <h1
            className={`text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-6 flex flex-row items-center justify-center gap-1 sm:gap-2 ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            I am a <AnimatedText darkMode={darkMode} />
          </h1>
          <p
            className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xl mx-auto px-4 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I am Fullstack Developer who likes to code, I do competitive
            programming as a habit, love to see new technologies be it in dev or
            non-dev world.
          </p>
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <motion.a
              href="#projects"
              className={`w-auto inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-3 border border-transparent text-sm font-medium rounded-md text-white ${
                darkMode
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } transition duration-300 shadow-lg hover:shadow-xl`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className={`w-auto inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-3 border border-transparent text-sm font-medium rounded-md ${
                darkMode
                  ? "text-indigo-300 bg-gray-800 hover:bg-gray-700"
                  : "text-indigo-600 bg-white hover:bg-gray-50"
              } transition duration-300 shadow-lg hover:shadow-xl`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
          <div className="mt-6 sm:mt-8 flex space-x-4 justify-center">
            <a
              href="https://github.com/KanishkValechha"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <img
                src={githubLogo}
                alt="GitHub"
                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  darkMode ? "filter invert" : ""
                }`}
              />
            </a>
            <a
              href="https://leetcode.com/u/kanishkvalecha09/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <img
                src={leetcodeLogo}
                alt="LeetCode"
                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  darkMode ? "filter invert" : ""
                }`}
              />
            </a>
            <a
              href="https://codeforces.com/profile/kanishkvalechha"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <img
                src={codeforcesLogo}
                alt="Codeforces"
                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  darkMode ? "filter invert" : ""
                }`}
              />
            </a>
            <a
              href="https://www.codechef.com/users/kanishk099"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <img
                src={codechefLogo}
                alt="CodeChef"
                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  darkMode ? "filter invert" : ""
                }`}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/kanishk-valechha/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <img
                src={linkedinLogo}
                alt="LinkedIn"
                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  darkMode ? "filter invert" : ""
                }`}
              />
            </a>
            <a
              href="https://x.com/kanishkvalecha"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <img
                src={twitterLogo}
                alt="Twitter"
                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  darkMode ? "filter invert" : ""
                }`}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  loadingComplete: PropTypes.bool.isRequired,
};

export default HeroSection;
