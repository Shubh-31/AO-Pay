"use client";

import { motion } from "framer-motion";

// Reusable Component
const FeaturesSection = ({ featuresList }) => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
        >
          {featuresList.title}
        </motion.h2>

        {/* Paragraph */}
        {description && (
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto">
            {featuresList.description}
          </p>
        )}

        {/* Sections */}
        <div className="space-y-12">
          {featuresList.map((featuresList, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">
                {featuresList.heading}
              </h3>

              <ul className="space-y-2 pl-5 list-disc text-gray-700">
                {featuresList.points.map((point, i) => (
                  <li key={i} className="text-base leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
