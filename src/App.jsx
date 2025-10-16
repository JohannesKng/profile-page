import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaMoon, FaSun } from "react-icons/fa";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-700 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-purple-950 to-indigo-900 text-gray-100"
          : "bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200 text-gray-800"
      } p-6`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`relative ${
          darkMode
            ? "bg-white/10 border-white/20 text-gray-100"
            : "bg-white/40 border-white/40 text-gray-800"
        } backdrop-blur-xl rounded-3xl border shadow-2xl p-8 w-full max-w-md text-center`}
      >
        {/* Tombol Dark Mode */}
        <button
          onClick={toggleTheme}
          className="absolute top-6 right-6 bg-white/40 hover:bg-white/60 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 p-2 rounded-full shadow-md transition-transform transform hover:scale-110"
          title="Toggle Dark Mode"
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>

        {/* Foto Profil */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <img
            src="/foto-profil.jpg" // bisa diganti URL online
            alt="Johannes Kristian Nainggolan"
            className="w-36 h-36 rounded-full border-4 border-white shadow-lg mb-4 hover:scale-105 transition-transform"
          />
          <h1 className="text-3xl font-bold tracking-wide">
            Johannes Kristian Nainggolan
          </h1>
          <p
            className={`mt-1 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            } font-medium`}
          >
            Front-End Developer • Sleman, Yogyakarta
          </p>
        </motion.div>

        {/* Biodata */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={`mt-6 rounded-xl p-5 text-sm space-y-3 flex flex-col items-center ${
            darkMode ? "bg-white/10" : "bg-white/60"
          }`}
        >
          <p className="text-center">
            <span className="font-semibold">Nama Lengkap:</span><br />
            Johannes Kristian Nainggolan
          </p>
          <p className="text-center">
            <span className="font-semibold">Domisili:</span><br />
            Sleman, Yogyakarta
          </p>
          <p className="text-center">
            <span className="font-semibold">Pendidikan:</span><br />
            S1 Teknik Informatika — Universitas Prima Indonesia
          </p>
          <p className="text-center">
            <span className="font-semibold">Keahlian:</span><br />
            React.js, Tailwind CSS, JavaScript, UI/UX Design
          </p>
          <p className="text-center">
            <span className="font-semibold">Email:</span><br />
            johanneskristiannainggolan@gmail.com
          </p>
        </motion.div>

        {/* Sosial Media */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center gap-6 mt-8"
        >
          <a href="https://github.com/JohannesKng" target="_blank">
            <FaGithub size={26} />
          </a>
          <a href="https://www.linkedin.com/in/johannes-kristian-nainggolan-694189389?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank">
            <FaLinkedin size={26} className="hover:text-blue-500" />
          </a>
          <a href="https://www.instagram.com/johannesskng?igsh=YW12YnR0bHNkdmI2" target="_blank">
            <FaInstagram size={26} className="hover:text-pink-500" />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className={`mt-8 text-xs ${
            darkMode ? "text-gray-400" : "text-gray-600"
          } text-center`}
        >
          © 2025 Johannes Kristian Nainggolan — Profile Page
        </motion.footer>
      </motion.div>
    </div>
  );
}
