import React from "react";
import { projects } from "../../../public/images/assets.js";

const Works = () => {
  return (
    <section
      id="works"
      className="w-full flex flex-col items-center justify-center pt-20 px-6 md:px-12 bg-gradient-to-b "
    >
      <h2 className="text-4xl font-bold mb-3 text-gray-600">Projects</h2>
      <p className="text-gray-400 text-center max-w-2xl mb-12">
        Here are some of the projects I’ve worked on recently. Each project
        reflects my passion for building modern, user-friendly web apps.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {projects.map(({ imgSrc, title, description, link }, index) => (
          <div
            key={index}
            className="relative cursor-pointer group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/5 backdrop-blur-lg border border-white/10"
          >
            {/* Image Section */}
            <img
              src={imgSrc}
              alt={title}
              className="w-full h-56 object-cover opacity-90 group-hover:opacity-40 transition duration-500"
            />

            {/* Overlay on Hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 px-4">
              <h3 className="text-2xl font-semibold  mb-3">
                {title}
              </h3>
              <p className="text-gray-900 text-sm mb-5 line-clamp-3">
                {description}
              </p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-400 hover:bg-cyan-500 text-white px-5 py-2 rounded-lg font-medium transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
