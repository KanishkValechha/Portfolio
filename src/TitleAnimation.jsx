import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TitleAnimation = ({
  titles,
  className = "",
  speed = 50,
  pauseDuration = 2000,
}) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const animateText = () => {
      const currentTitle = titles[currentTitleIndex];

      if (!isDeleting && currentText === currentTitle) {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }

      if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        return;
      }

      const newText = isDeleting
        ? currentText.slice(0, -1)
        : currentTitle.slice(0, currentText.length + 1);

      setCurrentText(newText);
      timeout = setTimeout(animateText, speed);
    };

    timeout = setTimeout(animateText, speed);

    return () => clearTimeout(timeout);
  }, [
    currentTitleIndex,
    currentText,
    isDeleting,
    titles,
    speed,
    pauseDuration,
  ]);

  return (
    <div className={`relative h-[1.5em] ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 right-0"
        >
          {currentText}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            |
          </motion.span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default TitleAnimation;
