import React from "react";
import heroImage from "../assets/Hero.png";
import resumePDF from "../assets/resume.pdf";


const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-tr from-black via-gray-900 to-black text-white flex items-center px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16 py-28">

        {/* Text Content */}
        <div className="md:w-1/2 space-y-8">
          <p className="text-lg text-gray-300">
            Hello, I’m{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 font-bold text-2xl border-b-2 border-green-400">
              Pranshu Yadav
            </span>
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            I build <span className="text-green-500">custom websites</span><br />
            that grow your business
          </h1>

          <p className="text-gray-400 text-lg max-w-xl">
            A passionate frontend developer crafting sleek and responsive websites using HTML, CSS, JavaScript, jQuery, Bootstrap, Tailwind CSS, and React.js.
          </p>

          <a
            href={resumePDF}
            download="Pranshu_Yadav_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-green-600 hover:bg-green-500 text-white text-lg px-8 py-3 rounded-md transition-all duration-300 shadow-lg"
          >
            📄 Download Resume
          </a>

        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Hero"
            className="w-[400px] lg:w-[520px] xl:w-[600px] drop-shadow-2xl rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
