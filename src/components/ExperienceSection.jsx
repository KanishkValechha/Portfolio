import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    role: "Fullstack Developer Intern",
    company: "Software Development Centre MUJ",
    period: "Jan 2025 - Present",
    responsibilities: [
      "Developing a Wall of Fame website for college using Next.js and MongoDB, creating an interactive platform to showcase student achievements."
    ],
    technologies: ["Next.js", "MongoDB"],
    link: "https://wall-of-fame-rho.vercel.app/",
  },
  {
    role: "Freelance Web Developer",
    company: "TechPI Solutions",
    period: "Nov 2024 - Nov 2024",
    responsibilities: [
      "Led the development of a their new website",
      "Implemented complex visual animations for improved user experience",
      "Optimized website performance and improved SEO",
    ],
    technologies: ["Astro", "Tailwind CSS", "Motion"],
    link: "https://tech-pi-website.vercel.app/", 
  },
  {
    role: "Web Developer",
    company: "Cyber Space Club",
    period: "May 2024 - Present",
    responsibilities: [
      "Planned the overhaul of the clubs website, utilizing Next.js to enhance dynamic content delivery.",
      "Utilizing Next.js reduced the initial load time by up to 50% compared to the previous React app.",
      "Improved website SEO by 25% through optimized meta tags and content structure.",
      "Implemented event registration features and integrated a newsletter section for better engagement.",
    ],
    technologies: ["NextJS", "Tailwind CSS"],
    link: "https://csc-24.vercel.app",
  },
];

const ExperienceSection = ({ darkMode }) => {
  ExperienceSection.propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-10 md:py-20 pt-24 md:pt-36 relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`text-3xl md:text-5xl font-extrabold text-center mb-8 md:mb-16 tracking-tight ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Professional Journey
        </motion.h2>
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
              inView={inView}
              darkMode={darkMode}
            />
          ))}
          <div
            className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 ${
              darkMode ? "bg-gray-600" : "bg-indigo-300"
            } transform md:-translate-x-1/2 hidden md:block`}
          ></div>
        </div>
      </div>
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"
            : "bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500"
        } opacity-10`}
      ></div>
    </section>
  );
};

export default ExperienceSection;