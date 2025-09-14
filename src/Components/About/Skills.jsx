import React from "react";
import { assets } from "../../../public/images/assets";

const Skills = () => {
  return (
    <div className="mt-12 px-4 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-700">Tech Stack</h1>

      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {assets.map(({ label, imgSrc, desc }) => (
          <div
            key={label}
            className="flex flex-col xs:flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 p-4 rounded-lg bg-gray-100 border border-gray-300 hover:shadow-lg transition duration-300"
          >
            <img
              src={imgSrc}
              alt={label}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />
            <div className="flex flex-col justify-center sm:justify-start">
              <p className="text-base sm:text-lg font-semibold">{label}</p>
              <p className="text-xs sm:text-sm text-gray-500">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
