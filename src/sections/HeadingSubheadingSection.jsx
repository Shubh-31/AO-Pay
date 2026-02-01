"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const HeadingSubheadingSection = ({ HeadingSubheadings }) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto grid gap-12">
        {HeadingSubheadings.map((block, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Heading2 */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              {block.heading2}
            </h2>

            {/* Heading2 Paragraph */}
            {block.heading2Para && (
              <p className="text-lg text-gray-600 leading-relaxed">
                {block.heading2Para}
              </p>
            )}

            {/* Points with Heading3 */}
            {block.points && (
              <div className="mt-6 space-y-4">
                {block.points.map((point, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4 hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Icon Badge */}
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-green-100">
                      {point.imgSrc ? (
                        <img
                          src={point.imgSrc}
                          alt={point.title || "icon"}
                          className="w-6 h-6"
                        />
                      ) : (
                        <CheckCircle className="text-green-600 w-6 h-6" />
                      )}
                    </div>

                    {/* Content */}
                    <div>
                      {point.heading3 && (
                        <h3 className="text-lg font-semibold text-gray-800">
                          {point.heading3}
                        </h3>
                      )}
                      {point.heading3Para && (
                        <p className="text-gray-600 text-base leading-snug">
                          {point.heading3Para}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
