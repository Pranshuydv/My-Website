// src/components/About.jsx
import React from "react";
import aboutImg from "../assets/About.png"; // Add your image in assets folder

const About = () => {
    return (
        <section
            id="about"
            className="w-full bg-gray-950 text-white py-20 px-6 md:px-12"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                {/* Image Section */}
                <div className="md:w-1/2">
                    <img
                        src={aboutImg}
                        alt="About"
                        className="rounded-xl shadow-2xl w-full max-w-md mx-auto"
                    />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-400">
                        About Me
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed">
                        I'm <span className="text-green-400 font-semibold">Pranshu Yadav</span>, a
                        <span className="text-white font-semibold"> Junior Software Developer</span> with a strong focus on
                        frontend development. I build modern and responsive web applications using
                        <span className="text-white font-semibold">
                            {" "}HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap, jQuery
                        </span>
                        , along with basic backend experience in
                        <span className="text-white font-semibold"> Python, Flask, SQL/MySQL</span>.
                        <br /><br />
                        I enjoy creating clean, user-friendly interfaces and continuously improving
                        my skills while learning modern development practices.
                    </p>


                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Skills:</h3>
                        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                            {[
                                "HTML5", "CSS3", "JavaScript",
                                "React.js", "Tailwind CSS", "Bootstrap",
                                "jQuery", "Git & GitHub",
                                "Python", "Flask", "SQL/MySQL"
                            ].map((skill) => (
                                <li key={skill} className="before:content-['✔'] before:mr-2 before:text-green-400">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
