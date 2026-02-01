"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const H2H3WithPoints = ({ content }) => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-16">
        {content.map((block, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {block.tag && (
              <p className="text-sm leading-tight text-gray-400 border border-gray-100 rounded-md p-2 max-w-xs">
                {block.tag}
              </p>
            )}

            {/* Heading2 */}
            <h2 className="text-3xl md:text-4xl font-bold text-black-gradient">
              {block.heading2}
            </h2>

            {/* Heading2 Paragraph */}
            {block.heading2Para && (
              <p className="text-lg text-gray-600 max-w-full mx-auto">
                {block.heading2Para}
              </p>
            )}

            {/* Points rendered as cards */}
            {/* Points rendered as flex */}
            {block.points && (
              <div className="flex flex-wrap justify-center gap-6 mt-6">
                {/* Points rendered in flex 2-column layout */}
                {block.points && (
                  <div className="flex flex-wrap mt-6 gap-6">
                    {block.points.map((point, i) => (
                      <motion.div
                        key={i}
                        className={`bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col gap-3 
          w-full sm:w-[48%] 
          ${
            i === block.points.length - 1 && block.points.length % 2 !== 0
              ? "sm:mx-auto"
              : ""
          }`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center gap-2">
                          {point.imgSrc ? (
                            <img
                              src={point.imgSrc}
                              alt={point.heading3 || "Feature icon"}
                              className="w-8 h-auto flex-shrink-0"
                            />
                          ) : (
                            <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
                          )}

                          {point.heading3 && (
                            <h3 className="text-xl font-semibold text-gray-900">
                              {point.heading3}
                            </h3>
                          )}
                        </div>

                        {point.heading3Para && (
                          <p className="text-gray-600 text-base">
                            {point.heading3Para}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Conditionally Render Button */}
            {block.btn1 && block.btnLink && (
              <div className="mt-6">
                <a
                  href={block.btnLink}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-700"
                >
                  {block.btn1}
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
