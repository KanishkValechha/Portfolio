import { motion } from "framer-motion";
import KanishkPhoto from "../assets/Kanishk.jpg";
import AnimatedText from "./AnimatedText";
import PropTypes from "prop-types";
// import social media logos
import githubLogo from "../assets/github-logo.svg";
import leetcodeLogo from "../assets/leetcode-logo.svg";
import codeforcesLogo from "../assets/codeforces-logo.svg";
import codechefLogo from "../assets/codechef-logo.svg";
import linkedinLogo from "../assets/linkedin-logo.svg";
import twitterLogo from "../assets/twitter-logo.svg";

const HeroSection = ({ darkMode, loadingComplete }) => {
  return (
    <div
      id="home"
      className={`relative min-h-screen overflow-hidden px-4 ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100"
      }`}
    >
      <div className="max-w-7xl mx-auto sm:px-6 md:pt-16 lg:px-8 h-full flex items-center z-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-8 md:py-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              loadingComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center md:text-left"
          >
            <h2
              className={`text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Hello, I&apos;m{" "}
              <span
                className={darkMode ? "text-indigo-400" : "text-indigo-600"}
              >
                Kanishk
              </span>
            </h2>
            <h1
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              I am a <AnimatedText darkMode={darkMode} />
            </h1>
            <p
              className={`text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto md:mx-0 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I am Fullstack Developer who likes to code, I do competitive
              programming as a habit, love to see new technologies be it in dev
              or non-dev world.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#projects"
                className={`inline-flex items-center justify-center px-6 py-2 sm:px-8 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white ${
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
                className={`inline-flex items-center justify-center px-6 py-2 sm:px-8 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md ${
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
            <div className="mt-8 flex space-x-4 justify-center md:justify-start">
              <a
                href="https://github.com/KanishkValechha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={githubLogo}
                  alt="GitHub"
                  className={`w-6 h-6 ${darkMode ? "filter invert" : ""}`}
                />
              </a>
              <a
                href="https://leetcode.com/u/kanishkvalecha09/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={leetcodeLogo}
                  alt="LeetCode"
                  className={`w-6 h-6 ${darkMode ? "filter invert" : ""}`}
                />
              </a>
              <a
                href="https://codeforces.com/profile/kanishkvalechha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={codeforcesLogo}
                  alt="Codeforces"
                  className={`w-6 h-6 ${darkMode ? "filter invert" : ""}`}
                />
              </a>
              <a
                href="https://www.codechef.com/users/kanishk099"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={codechefLogo}
                  alt="CodeChef"
                  className={`w-6 h-6 ${darkMode ? "filter invert" : ""}`}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/kanishk-valechha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinLogo}
                  alt="LinkedIn"
                  className={`w-6 h-6 ${darkMode ? "filter invert" : ""}`}
                />
              </a>
              <a
                href="https://x.com/kanishkvalecha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={twitterLogo}
                  alt="Twitter"
                  className={`w-6 h-6 ${darkMode ? "filter invert" : ""}`}
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="max-w-[280px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[540px] mx-auto relative p-8 sm:p-12 md:p-16 pt-12 pb-4 order-first md:order-last"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              loadingComplete
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.5 }}
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
              } rounded-full p-3 sm:p-4 shadow-xl`}
            >
              <motion.svg
                className={`h-6 w-6 sm:h-8 sm:w-8 ${
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={loadingComplete ? { opacity: 0.3 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className={`absolute top-0 left-0 right-0 h-32 sm:h-64 ${
          darkMode
            ? "bg-gradient-to-b from-gray-800 to-transparent"
            : "bg-gradient-to-b from-indigo-200 to-transparent"
        }`}
      />
      <div
        className={`absolute top-0 left-0 right-0 h-32 sm:h-64 ${
          darkMode
            ? "bg-gradient-to-b from-gray-800 to-transparent"
            : "bg-gradient-to-b from-indigo-200 to-transparent"
        } opacity-30`}
      ></div>
      <div
        className={`absolute bottom-0 left-0 right-0 h-32 sm:h-64 ${
          darkMode
            ? "bg-gradient-to-t from-gray-800 to-transparent"
            : "bg-gradient-to-t from-pink-200 to-transparent"
        } opacity-30`}
      ></div>
      <div className="absolute top-24 sm:top-48 left-24 sm:left-48 w-full h-full pointer-events-none">
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

HeroSection.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  loadingComplete: PropTypes.bool.isRequired,
};

export default HeroSection;
