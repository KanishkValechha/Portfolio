import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

const ProjectCard = ({ project, index, darkMode, video }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (isHovered && video && !shouldLoadIframe) {
      setShouldLoadIframe(true);
    }
  }, [isHovered, video, shouldLoadIframe]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    darkMode: PropTypes.bool.isRequired,
    video: PropTypes.string,
  };

  const isEven = index % 2 === 0;

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariants = {
    rest: {
      scale: 1,
      boxShadow: `0px 10px 30px -15px ${
        darkMode ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.2)"
      }`,
    },
    hover: {
      scale: 1.05,
      boxShadow: `0px 20px 40px -15px ${
        darkMode ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.3)"
      }`,
    },
  };

  const firstLine = project.description.split(".")[0] + ".";

  return (
    <>
      <motion.div
        ref={cardRef}
        variants={cardVariants}
        className={`relative flex flex-col ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } 
          rounded-2xl overflow-hidden ${
            darkMode
              ? "bg-gray-800/40 backdrop-blur-sm"
              : "bg-white/80 backdrop-blur-sm"
          } shadow-xl hover:shadow-2xl transition-all duration-500`}
        whileHover={{ y: -5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Card content */}
        <div
          className={`relative overflow-hidden w-full md:w-2/5 h-56 md:h-auto ${
            darkMode ? "bg-gray-900/50" : "bg-gray-100/50"
          }`}
        >
          <motion.div
            className="w-full h-full relative"
            variants={imageVariants}
            initial="rest"
            animate={isHovered ? "hover" : "rest"}
            transition={{ duration: 0.4 }}
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover hover:cursor-pointer"
            />
            {video && shouldLoadIframe && (
              <div
                className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
              >
                <svg
                  className="w-16 h-16 text-white opacity-80"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </motion.div>
        </div>

        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col h-auto justify-between">
          <div>
            <h3
              className={`text-xl sm:text-2xl font-bold mb-3 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {project.title}
            </h3>

            {/* Mobile description with expand/collapse functionality */}
            <div className="md:hidden">
              <div
                className={`mb-4 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
                style={{
                  maxHeight: isExpanded ? "1000px" : "20px",
                  transition: "max-height 0.3s ease-in-out",
                }}
              >
                {isExpanded ? project.description : firstLine}
              </div>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`flex items-center text-xs font-semibold mb-3 ${
                  darkMode ? "text-blue-400" : "text-blue-600"
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
              className={`hidden md:mb-4 text-sm leading-relaxed md:block ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {project.description}
            </p>

            {/* Tech tags - visible on all devices */}
            <div className="flex flex-wrap gap-1 pb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    darkMode
                      ? "bg-gray-700/70 text-blue-300"
                      : "bg-gray-100 text-blue-800"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                darkMode
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Project
              <svg
                className="h-4 w-4 ml-2"
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
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-700 text-white hover:bg-gray-600"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Source Code
              </motion.a>
            )}

            {video && (
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  darkMode
                    ? "bg-pink-600 text-white hover:bg-pink-700"
                    : "bg-pink-600 text-white hover:bg-pink-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Demo
              </motion.button>
            )}
          </div>
        </div>

        {/* Background gradient effect */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
            darkMode
              ? "bg-gradient-to-r from-blue-900/10 via-indigo-900/10 to-purple-900/10"
              : "bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50"
          }`}
        ></div>
      </motion.div>

      {/* Video Modal */}
      {isModalOpen && video && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={video}
                title={`${project.title} Demo`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-gray-900 text-white">
              <h3 className="font-bold text-lg">{project.title} Demo</h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectCard;
