import React from "react";

export default function Projects() {
  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Movie App</h3>
            <p className="text-gray-400 mb-4">
              A movie rental web application. This app allows users to browse
              movie, rent them and manage their rented movies.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Firebase", "Bootstrap"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/kristijanmateski/movieApp-react-js"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project &rarr;
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">
              CRUD App with Spring boot and React JS
            </h3>
            <p className="text-gray-400 mb-4">
              A full-stack CRUD application. This app allows users to create,
              read, update, and delete data — a common pattern in many web
              applications.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Spring boot", "Bootstrap"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/kristijanmateski/CRUD-application-with-Spring-Boot-and-ReactJS"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project &rarr;
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a
            href="https://github.com/kristijanmateski"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            View more on my GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
