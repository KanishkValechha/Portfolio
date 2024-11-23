import { motion } from "framer-motion";
import PropTypes from "prop-types";
import GitHubIcon from "./GitHubIcon";
import { useState } from "react";

const ProjectCard = ({ project, index, darkMode, video, variants }) => {
  const [isHovered, setIsHovered] = useState(false);

  ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    darkMode: PropTypes.bool.isRequired,
    video: PropTypes.string,
    variants: PropTypes.object.isRequired
  }
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={variants}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center gap-6 lg:gap-12`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full lg:w-3/5">
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl group"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full relative">
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
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </motion.div>
      </div>
      <div className="w-full lg:w-2/5">
        <h3
          className={`text-2xl sm:text-3xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`mb-6 text-lg leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pb-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 rounded-full text-sm ${
                darkMode
                  ? "bg-gray-800 text-indigo-300"
                  : "bg-white text-indigo-800"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-6 place-items-center md:place-items-start">
          <motion.a
            href={project.link}
            className={` max-w-52 inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold transition duration-300 ${
              darkMode
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
            <svg
              className="h-5 w-5 ml-2"
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
          <motion.a
            href={project.github}
            className={`max-w-52 inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold transition duration-300 ${
              darkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">GitHub</span>
            <GitHubIcon className="" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;