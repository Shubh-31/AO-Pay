"use client";

import { motion } from "framer-motion";

const FeaturesSection = ({ title, description, sections }) => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-black"
        >
          {title}
        </motion.h2>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            {description}
          </motion.p>
        )}

        {/* Features Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 border border-gray-100
          ${idx % 3 === 1 ? "lg:translate-y-6" : ""}
          ${idx % 3 === 2 ? "lg:-translate-y-6" : ""}
        `}
              >
                {/* Gradient border hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-200 to-blue-200 opacity-0 group-hover:opacity-30 transition duration-300" />

                {/* Icon + Heading */}
                <div className="flex flex-col items-center mb-6">
                  {section.imgSrc && (
                    <img
                      src={section.imgSrc}
                      alt={section.heading || "Feature image"}
                      className="w-12 h-12 object-contain mb-3 transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {section.heading}
                  </h3>
                </div>

                {/* Points List */}
                <ul className="space-y-3 text-gray-700 text-left">
                  {section.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 leading-relaxed text-base"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
