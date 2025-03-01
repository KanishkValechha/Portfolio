import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import SkillGroup from "./SkillGroup";
import { skillGroups } from "../data/skillsData";

const SkillsSection = ({ darkMode }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-16 md:py-24 relative overflow-hidden ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100"
      }`}
    >
      {/* Decorative elements similar to hero section */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="relative w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              inView
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
            className={`absolute top-20 left-1/4 w-96 h-96 rounded-full 
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
              inView
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
            className={`absolute top-40 -right-4 w-80 h-80 rounded-full 
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
              inView
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
            className={`absolute bottom-20 left-20 w-80 h-80 rounded-full 
              filter blur-xl animate-blob
              ${
                darkMode
                  ? "bg-cyan-500 mix-blend-screen"
                  : "bg-pink-300 mix-blend-multiply opacity-70"
              }`}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              inView
                ? {
                    opacity: darkMode ? 0.15 : 0.4,
                    scale: 1,
                    transition: {
                      duration: 2,
                      delay: 0.6,
                      ease: "easeOut",
                    },
                  }
                : { opacity: 0, scale: 0.5 }
            }
            className={`absolute bottom-40 right-1/3 w-72 h-72 rounded-full 
              filter blur-xl animate-blob animation-delay-3000
              ${
                darkMode
                  ? "bg-indigo-500 mix-blend-screen"
                  : "bg-blue-300 mix-blend-multiply opacity-70"
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
              : "from-indigo-100 via-transparent to-pink-100/80"
          } opacity-60`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className={`text-3xl md:text-5xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.8 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Technologies and tools I&apos;ve been working with
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {skillGroups.map((group, index) => (
            <SkillGroup
              key={group.title}
              group={group}
              inView={inView}
              darkMode={darkMode}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

SkillsSection.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default SkillsSection;
