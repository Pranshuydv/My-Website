import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-white font-semibold text-base tracking-wide">
            © {new Date().getFullYear()} <span className="text-green-600">Pranshu Yadav</span>
          </h2>
          <p className="text-xs text-gray-500 mt-1">Made with 💻 React & Tailwind CSS</p>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/Pranshuydv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/295pranshuydv/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/918954382678"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
