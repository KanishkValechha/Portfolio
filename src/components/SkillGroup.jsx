import { motion } from "framer-motion";
import PropTypes from "prop-types";
import SkillCard from "./SkillCard";

const SkillGroup = ({ group, inView, darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mb-6 md:mb-12"
    >
      <h3
        className={`text-lg md:text-2xl font-bold mb-3 md:mb-6 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        {group.title}
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
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

SkillGroup.propTypes = {
  group: PropTypes.object.isRequired,
  inView: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired
}

export default SkillGroup;