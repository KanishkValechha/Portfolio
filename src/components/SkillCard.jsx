import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SkillCard = ({ skill, darkMode }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      y: -5,
      scale: 1.05,
      boxShadow: darkMode
        ? "0 10px 25px -5px rgba(0, 0, 0, 0.5)"
        : "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className={`flex flex-col items-center justify-center p-4 rounded-xl backdrop-blur-sm ${
        darkMode
          ? "bg-gray-700/40 hover:bg-gray-700/60 border border-gray-600/50"
          : "bg-white/70 hover:bg-white/90 border border-gray-100 shadow-md"
      } transition-all duration-300`}
    >
      <motion.div
        initial={{ rotate: 0 }}
        whileHover={{
          rotate: [0, -5, 5, -5, 0],
          transition: { duration: 0.5 },
        }}
        className="mb-3"
      >
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
      </motion.div>
      <span
        className={`text-sm md:text-base font-medium text-center ${
          darkMode ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {skill.name}
      </span>
    </motion.div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.object.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default SkillCard;
