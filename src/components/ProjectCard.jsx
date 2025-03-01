import { motion } from "framer-motion";
import PropTypes from "prop-types";
import GitHubIcon from "./GitHubIcon";
import { useState, useEffect } from "react";

const ProjectCard = ({ project, index, darkMode, video, variants }) => {
  const [isHovered, setIsHovered] = useState(false);
  // Add a state to control when to load the iframe to improve performance
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false);
  // Add a state to track if description is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  // Set up a timer to delay iframe loading until needed
  useEffect(() => {
    if (isHovered && video && !shouldLoadIframe) {
      setShouldLoadIframe(true);
    }
  }, [isHovered, video, shouldLoadIframe]);

  ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    darkMode: PropTypes.bool.isRequired,
    video: PropTypes.string,
    variants: PropTypes.object.isRequired,
  };

  const isEven = index % 2 === 0;

  // Get the first line of the description
  const firstLine = project.description.split(".")[0] + ".";

  return (
    <motion.div
      variants={variants}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center gap-4 lg:gap-8 p-4 rounded-xl ${
        darkMode ? "hover:bg-gray-800/40" : "hover:bg-gray-200/40"
      } transition-colors duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Ensure the component is always rendered even if not visible
      style={{ willChange: "opacity, transform" }}
    >
      <div className="w-full lg:w-2/5">
        <motion.div
          className="relative rounded-xl overflow-hidden shadow-xl group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-48 sm:h-56 md:h-64 relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {video && (
              <iframe
                src={isHovered ? video : ""}
                title={`${project.title} Demo`}
                className="absolute top-0 left-0 w-full h-full transition-opacity duration-300"
                style={{ opacity: isHovered ? 1 : 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </motion.div>
      </div>
      <div className="w-full lg:w-3/5">
        <h3
          className={`text-xl sm:text-2xl font-bold mb-2 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {project.title}
        </h3>

        {/* Mobile description with expand/collapse functionality */}
        <div className="lg:hidden">
          <div
            className={`mb-3 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
            style={{
              maxHeight: isExpanded ? "1000px" : "20px", // Only show first line height
              transition: "max-height 0.3s ease-in-out",
            }}
          >
            {isExpanded ? project.description : firstLine}
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex items-center text-xs font-medium mb-3 ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            <span>{isExpanded ? "View less" : "View more"}</span>
            <svg
              className={`h-4 w-4 ml-1 transform transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop description (always fully visible) */}
        <p
          className={`mb-3 text-sm leading-relaxed hidden lg:block ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 pb-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-1 rounded-full text-xs ${
                darkMode
                  ? "bg-gray-800 text-indigo-300"
                  : "bg-white text-indigo-800"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3 pt-2">
          <motion.a
            href={project.link}
            className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition duration-300 ${
              darkMode
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
            <svg
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>
          {project.github && (
            <motion.a
              href={project.github}
              className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition duration-300 ${
                darkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-1">GitHub</span>
              <GitHubIcon className="h-4 w-4" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
