"use client";

import { CheckCheckIcon } from "lucide-react";
import React from "react";

const FeatureCards = ({ heading, subheading, blocks }) => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
        {heading}
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
        {subheading}
      </p>

      {/* Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blocks.map((block, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <img src={block.imgSrc} alt = {block.title} className="w-12 mb-2 mx-auto"/>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {block.title}
            </h3>
            <p className="text-gray-600 mb-4">{block.description}</p>
            <ul className="text-gray-700 space-y-2">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 font-medium">
                  <span className="text-green-600 mt-1"><CheckCheckIcon/></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
