import React, { useState, useEffect } from "react";

export const Typewriter = ({ words, delay = 100, pauseTime = 1000 }) => {
  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentWord === words[currentIndex]) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }

      if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        return;
      }

      setCurrentWord((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : words[currentIndex].slice(0, prev.length + 1)
      );
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting, currentIndex, words, delay, pauseTime]);

  return <span className="text-blue-500">{currentWord}</span>;
};
