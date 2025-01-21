import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from 'prop-types';

const MinimalistLoadingScreen = ({ darkMode, onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 500);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            onLoadingComplete(true); // Pass true to indicate loading is complete
          }, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  const slideUpVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            },
          }}
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${
            darkMode
              ? "bg-gray-900"
              : "bg-gradient-to-br from-indigo-50 via-white to-pink-50"
          }`}
        >
          <div className="relative w-full max-w-lg mx-auto px-4">
            {/* Main content container */}
            <motion.div
              initial="hidden"
              animate={showContent ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Minimalist loading indicator */}
              <motion.div
                className="mb-12"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100">
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={darkMode ? "#4f46e5" : "#4338ca"}
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progress / 100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    stroke={darkMode ? "#818cf8" : "#6366f1"}
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progress / 100 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  />
                </svg>
              </motion.div>

              {/* Welcome text with staggered animation */}
              <motion.div
                variants={slideUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <motion.h1
                  className={`text-3xl font-light tracking-wider ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  WELCOME
                </motion.h1>
                <motion.div
                  variants={slideUpVariants}
                  className={`text-sm font-light tracking-widest ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                  transition={{ delay: 0.5 }}
                >
                  LOADING YOUR EXPERIENCE
                </motion.div>
              </motion.div>

              {/* Progress text */}
              <motion.div
                variants={slideUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.7 }}
                className={`mt-8 text-sm font-light ${
                  darkMode ? "text-gray-500" : "text-gray-500"
                }`}
              >
                {progress}%
              </motion.div>
            </motion.div>

            {/* Minimalist decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div
                className={`absolute w-64 h-64 rounded-full ${
                  darkMode ? "bg-indigo-900/5" : "bg-indigo-100/30"
                }`}
                style={{ top: "-20%", right: "-20%" }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className={`absolute w-48 h-48 rounded-full ${
                  darkMode ? "bg-purple-900/5" : "bg-purple-100/30"
                }`}
                style={{ bottom: "-10%", left: "-10%" }}
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [90, 0, 90],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

MinimalistLoadingScreen.propTypes = {
  darkMode: PropTypes.bool,
  onLoadingComplete: PropTypes.func
};

export default MinimalistLoadingScreen;
