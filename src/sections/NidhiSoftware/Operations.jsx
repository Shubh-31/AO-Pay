"use client";

import React from "react";

const BranchFeatureCards = ({ heading, subheading, blocks }) => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-white">
      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
        {heading}
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-md">
        {subheading}
      </p>

      {/* Cards Grid 2x2 */}
      <div className="grid gap-8 md:grid-cols-2">
        {blocks.map((block, i) => {
          // Split heading3 into short title + description if needed
          const [title, ...descParts] = block.heading3.split(":");
          const description = descParts.join(":").trim();
          const imgSrc = block.imgSrc;

          return (
            <div
              key={i}
              className="relative bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300"
            >
              {/* Decorative top bar */}
              <div className="absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r from-green-400 to-blue-500"></div>
              <span className="flex flex-row align-center justify-start">
                <img src={imgSrc} alt={title} className="w-8 h-auto mb-2 mr-2" />
                {/* Card Title */}
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {title}
                </h3>
              </span>
              {/* Card Description */}
              {description && (
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {description}
                </p>
              )}

              {/* Features List */}
              <ul className="space-y-2 text-gray-700">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 font-medium">
                    <span className="text-green-500 mt-1 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 011.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BranchFeatureCards;
