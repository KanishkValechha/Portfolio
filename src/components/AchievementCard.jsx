import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const AchievementCard = ({ achievement, index, inView, darkMode }) => {
  AchievementCard.propTypes = {
    achievement: PropTypes.shape({
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    inView: PropTypes.bool.isRequired,
    darkMode: PropTypes.bool.isRequired,
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.3 }}
      className={`relative p-6 rounded-lg shadow-lg overflow-hidden ${
        darkMode ? "bg-gray-800 bg-opacity-50" : "bg-white bg-opacity-80"
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-2 h-full ${
          darkMode ? "bg-indigo-500" : "bg-indigo-600"
        }`}
      ></div>
      <div className="flex items-center mb-4">
        <div
          className={`p-3 rounded-full mr-4 ${
            darkMode
              ? "bg-indigo-500 text-white"
              : "bg-indigo-100 text-indigo-600"
          }`}
        >
          {achievement.icon}
        </div>
        <div>
          <h3
            className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {achievement.title}
          </h3>
          <p
            className={`text-sm ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {achievement.year}
          </p>
        </div>
      </div>
      <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        {achievement.description}
      </p>
    </motion.div>
  );
};

export default AchievementCard