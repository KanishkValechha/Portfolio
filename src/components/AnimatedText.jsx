import PropTypes from "prop-types";


const AnimatedText = ({ darkMode }) => {
  AnimatedText.propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };
  const roles = [
    "Full Stack Developer",
    "Tech Enthusiast",
    "Competitive Coder",
    "ML Enthusiast",
  ];

  return (
    <div className="text-wrapper relative h-[40px] overflow-hidden pl-4 pt-1">
      <div className="text-animation inline-block">
        {roles.map((role, index) => (
          <div
            key={index}
            className={`text-item block text:lg md:text-2xl lg:text-4xl font-bold ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            {role}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;