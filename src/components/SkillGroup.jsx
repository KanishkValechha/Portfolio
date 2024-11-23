
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import SkillCard from "./SkillCard";

const SkillGroup = ({ group, inView, darkMode }) => {
  SkillGroup.propTypes = {
    group: PropTypes.object.isRequired,
    inView: PropTypes.bool.isRequired,
    darkMode: PropTypes.bool.isRequired
  }
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

export default SkillGroup;