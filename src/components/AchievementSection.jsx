import { Award, Star, Trophy, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AchievementCard from "./AchievementCard";
import PropTypes from "prop-types";
const achievements = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Ranked 3rd at Abacus",
    description: "Ranked 3rd at State Level Abacus Competition",
    year: "2017",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "3 Star at Codechef",
    description:
      "Consistently performed well in Codechef contests, demonstrating a high level of competitive programming ability.",
    year: "2024",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "SIH 2024 Finalists",
    description: "Finalists at Smart India Hackathon 2024 for Health Dome",
    year: "2022",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Knight at LeetCode",
    description:
      "Achieved the title of Knight on LeetCode, solving 100+ problems.",
    year: "2024",
  },
];

const AchievementsSection = ({ darkMode }) => {
  AchievementsSection.propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="achievements"
      ref={ref}
      className={` py-48 pb-60 relative overflow-hidden  ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className={`text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Achievements & Milestones
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              index={index}
              inView={inView}
              darkMode={darkMode}
            />
          ))}
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
export default AchievementsSection;
