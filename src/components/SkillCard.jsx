import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SkillCard = ({ skill, index, inView, darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex md:flex-col items-center p-2 md:p-4 rounded-lg md:rounded-xl ${
        darkMode ? "bg-gray-800" : "bg-white"
      } shadow-sm md:shadow-lg hover:shadow-xl transition-all duration-300 md:transform md:hover:scale-105`}
    >
      <img src={skill.icon} alt={skill.name} className="w-6 h-6 md:w-12 md:h-12 md:mb-2" />
      <span
        className={`text-xs md:text-sm font-medium md:font-bold ml-2 md:ml-0 ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {skill.name}
      </span>
    </motion.div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  inView: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired
};

export default SkillCard;