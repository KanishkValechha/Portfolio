import { motion } from "framer-motion";
import PropTypes from "prop-types";
import SkillCard from "./SkillCard";

const SkillGroup = ({ group, inView, darkMode, index }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2 + index * 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`p-6 rounded-2xl backdrop-blur-md ${
        darkMode
          ? "bg-gray-800/30 border border-gray-700/50"
          : "bg-white/60 shadow-lg border border-white/50"
      } transition-all duration-300 hover:shadow-xl`}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
        className="flex items-center mb-6"
      >
        <h3
          className={`text-xl md:text-2xl font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {group.title}
        </h3>
        <div
          className={`h-[1px] flex-grow ml-4 ${
            darkMode ? "bg-gray-600" : "bg-gray-300"
          }`}
        ></div>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {group.skills.map((skill, skillIndex) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={skillIndex}
            inView={inView}
            darkMode={darkMode}
          />
        ))}
      </div>
    </motion.div>
  );
};

SkillGroup.propTypes = {
  group: PropTypes.object.isRequired,
  inView: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default SkillGroup;
