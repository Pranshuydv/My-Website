import React from "react";
import projects from "../data/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-950 text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-400 text-center mb-12">
          My Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-green-400/20 transition group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.desc}</p>
                <p className="text-sm text-green-400">
                  Tech: {project.tech.join(", ")}
                </p>

                <div className="flex gap-4 mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-4 py-1.5 border border-green-500 rounded hover:bg-green-500 hover:text-white text-sm transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    className="px-4 py-1.5 border border-gray-600 rounded hover:bg-white hover:text-black text-sm transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Pranshuydv"
            target="_blank"
            className="inline-block px-6 py-2 border border-green-500 rounded-md text-green-400 hover:bg-green-500 hover:text-white transition font-medium"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
