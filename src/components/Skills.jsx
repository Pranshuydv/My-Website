import React from "react";

const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    desc: "Semantic structure for modern web pages.",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    desc: "Styling beautiful and responsive designs.",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    desc: "Dynamic and interactive web features.",
  },
  {
    name: "jQuery",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    desc: "Simplified DOM manipulation.",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    desc: "Build fast and scalable UIs.",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    desc: "Pre-styled responsive component library.",
  },
  {
    name: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    desc: "Utility-first styling with full control.",
  },
  {
    name: "Git & GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    desc: "Version control & collaboration tools.",
  },
  {
    name: "Responsive Design",
    icon: "https://cdn-icons-png.flaticon.com/512/1865/1865269.png",
    desc: "Mobile-friendly and fluid layouts.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-400 text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 hover:border-green-400 p-6 rounded-xl shadow-md text-center hover:scale-[1.04] transition-transform duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className={`h-12 w-12 mx-auto mb-4 ${
                  skill.name === "Tailwind CSS" ? "invert" : ""
                }`}
              />
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
