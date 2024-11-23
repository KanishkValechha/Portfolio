
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SkillCard = ({ skill, index, inView, darkMode }) => {
  SkillCard.propTypes = {
    skill: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    inView: PropTypes.bool.isRequired,
    darkMode: PropTypes.bool.isRequired
  }
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

export default SkillCard;