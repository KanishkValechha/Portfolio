import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import XLogo from "../assets/x.svg";

const Alert = ({ children, className = "", type = "info" }) => {
  Alert.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(["info", "success", "warning", "error"]),
  };

  const baseClasses =
    "rounded-lg p-4 mb-4 flex flex-col items-start shadow-md transition-all duration-300 ease-in-out";
  const typeClasses = {
    info: "bg-blue-50 text-blue-800 border-l-4 border-blue-500",
    success: "bg-green-50 text-green-800 border-l-4 border-green-500",
    warning: "bg-yellow-50 text-yellow-800 border-l-4 border-yellow-500",
    error: "bg-red-50 text-red-800 border-l-4 border-red-500",
  };

  return (
    <div
      className={`${baseClasses} ${typeClasses[type]} ${className}`}
      role="alert"
    >
      {children}
    </div>
  );
};

const AlertTitle = ({ children, className = "" }) => {
  return (
    <h3 className={`text-lg font-semibold mb-1 ${className}`}>{children}</h3>
  );
};

AlertTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const AlertDescription = ({ children, className = "" }) => {
  return <div className={`text-sm opacity-90 ${className}`}>{children}</div>;
};

AlertDescription.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const ContactForm = ({ darkMode }) => {
  ContactForm.propTypes = {
    darkMode: PropTypes.bool.isRequired,
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mbljjoka", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowPopup(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 pb-56 relative overflow-hidden`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className={`backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden tracking-tight`}
        >
          <div className="md:flex">
            <div
              className={`md:w-1/2 ${
                darkMode
                  ? "bg-gradient-to-br from-indigo-600 to-purple-700"
                  : "bg-gradient-to-br from-indigo-500 to-purple-600"
              } p-8 text-white`}
            >
              <h2 className="text-3xl font-extrabold mb-4">Get in Touch</h2>
              <p className="mb-4">
                I&apos;d love to hear from you! Whether you have a question or
                just want to say hi, feel free to drop a message.
              </p>
              <div className="flex items-center mb-4 cursor-pointer">
                <Send size={20} className="mr-2" />
                <a
                  href="mailto:kanishkvalecha09@gmail.com"
                  className="hover:underline"
                >
                  kanishkvalecha09@gmail.com
                </a>
              </div>

              <div className="flex space-x-4 mt-8">
                <a
                  href="https://www.linkedin.com/in/kanishk-valechha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-200 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/KanishkValechha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-200 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                <a
                  href="https://x.com/kanishkvalecha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-200 transition-colors"
                >
                  <img
                    src={XLogo}
                    alt="Twitter"
                    className={`w-6 h-6 filter invert `}
                  />
                </a>
              </div>
            </div>
            <div
              className={`md:w-1/2 p-8 ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`mt-1 w-full block h-9 py-4 px-2 rounded-md ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border-gray-300 text-gray-900"
                    } shadow-sm focus:ring focus:ring-opacity-50 ${
                      darkMode
                        ? "focus:border-indigo-500 focus:ring-indigo-500"
                        : "focus:border-indigo-300 focus:ring-indigo-200"
                    }`}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`mt-1 h-9 py-4 px-2 block w-full rounded-md ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border-gray-300 text-gray-900"
                    } shadow-sm focus:ring focus:ring-opacity-50 ${
                      darkMode
                        ? "focus:border-indigo-500 focus:ring-indigo-500"
                        : "focus:border-indigo-300 focus:ring-indigo-200"
                    }`}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className={`mt-1 block w-full py-2 px-3 rounded-md ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border-gray-300 text-gray-900"
                    } shadow-sm focus:ring focus:ring-opacity-50 ${
                      darkMode
                        ? "focus:border-indigo-500 focus:ring-indigo-500"
                        : "focus:border-indigo-300 focus:ring-indigo-200"
                    }`}
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full font-bold py-2 px-4 rounded-md transition duration-300 ${
                    darkMode
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <Alert
              className={`${
                darkMode ? "bg-green-800 text-white" : "bg-green-100"
              } w-72`}
            >
              <CheckCircle
                className={`h-4 w-4 ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              />
              <AlertTitle
                className={`${darkMode ? "text-green-100" : "text-green-800"}`}
              >
                Success!
              </AlertTitle>
              <AlertDescription
                className={`${darkMode ? "text-green-200" : "text-green-700"}`}
              >
                Your message has been sent successfully.
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"
            : "bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500"
        } opacity-10`}
        style={{ pointerEvents: "none" }}
      ></div>
    </section>
  );
};

export default ContactForm;
