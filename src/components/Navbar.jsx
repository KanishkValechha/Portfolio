import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Sun, Moon, Menu, X } from "lucide-react";
import PropTypes from "prop-types";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav
      className={` fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 header-scrolled" : "py-4"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`header-internal relative`}>
          <div className={`flex items-center justify-between rounded-full `}
          >
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                "Home",
                "Skills",
                "Experience",
                "Projects",
                "Achievements",
                "Contact",
              ].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  <motion.span
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      darkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.span>
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${
                  darkMode
                    ? "bg-gray-700 text-yellow-300"
                    : "bg-gray-200 text-gray-700"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              {/* Hamburger Menu Button */}
              <motion.button
                className="md:hidden p-2"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className={`md:hidden absolute top-full left-0 rounded-lg w-100vh mt-2 px-4
                  backdrop-blur-md shadow-lg border ${
                    darkMode 
                      ? "bg-gray-900/95 border-gray-700" 
                      : "bg-white/95 border-gray-200"
                  }`}
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
              >
                <div className="flex flex-col space-y-4 p-6">
                  {[
                    "Home",
                    "Skills",
                    "Experience",
                    "Projects",
                    "Achievements",
                    "Contact",
                  ].map((item) => (
                    <Link
                      key={item}
                      to={item.toLowerCase()}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.span
                        className={`block px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                          darkMode
                            ? "text-gray-300 hover:text-white"
                            : "text-gray-700 hover:text-gray-900"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item}
                      </motion.span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Navbar;
