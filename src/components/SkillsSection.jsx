import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import SkillGroup from "./SkillGroup";
import { skillGroups } from "../data/skillsData";

const SkillsSection = ({ darkMode }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-10 md:py-20 relative overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 ${
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

      <div className={`absolute inset-0 opacity-10 ${
        darkMode
          ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"
          : "bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500"
      }`}
      ></div>
    </section>
  );
};

SkillsSection.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default SkillsSection;