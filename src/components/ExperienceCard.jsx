import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ExperienceCard = ({ experience, index, inView, darkMode }) => {
  ExperienceCard.propTypes = {
    experience: PropTypes.shape({
      role: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      link: PropTypes.string, // Added link prop
    }).isRequired,
    index: PropTypes.number.isRequired,
    inView: PropTypes.bool.isRequired,
    darkMode: PropTypes.bool.isRequired,
  };
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`mb-8 relative flex flex-col md:flex-row md:justify-between items-start w-full
        ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      <div className="order-1 w-full md:w-5/12"></div>
      <div className="order-1 w-full md:w-5/12 px-4 md:px-1 py-4">
        <motion.div
          className={`${
            darkMode ? "bg-gray-800 bg-opacity-50" : "bg-white bg-opacity-20"
          } backdrop-filter backdrop-blur-lg rounded-lg p-4 md:p-6 shadow-xl`}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          <h3
            className={`font-bold text-xl md:text-2xl mb-1 ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            {experience.role}
          </h3>
          <h4
            className={`font-semibold text-lg md:text-xl mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            {experience.company}
          </h4>
          <p
            className={`text-xs md:text-sm mb-4 ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            {experience.period}
          </p>
          <ul
            className={`list-disc list-inside text-sm md:text-base ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {experience.responsibilities.map((resp, idx) => (
              <li key={idx} className="mb-1 text-sm">
                {resp}
              </li>
            ))}
          </ul>
          {experience.technologies && (
            <div className="mt-4">
              <h5
                className={`text-xs md:text-sm font-semibold mb-2 ${
                  darkMode ? "text-indigo-400" : "text-indigo-600"
                }`}
              >
                Technologies used:
              </h5>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-1 rounded-full text-xs ${
                      darkMode
                        ? "bg-gray-700 text-indigo-300"
                        : "bg-indigo-100 text-indigo-800"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          {experience.link && ( // Conditionally render link tab
            // Added enhanced styling for better visibility
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200`}
            >
              Visit Website
            </a>
          )}
        </motion.div>
      </div>
      <motion.div
        className={`absolute left-1/2 transform -translate-x-1/2 top-4 md:top-auto md:left-1/2 w-4 md:w-6 h-4 md:h-6 rounded-full ${
          darkMode ? "bg-indigo-400" : "bg-indigo-500"
        } shadow`}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      ></motion.div>
    </motion.div>
  );
};

export default ExperienceCard;