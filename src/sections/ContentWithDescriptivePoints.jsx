"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const ContentWithDescriptivePoints = ({ content }) => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-12">
        {content.map((block, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 space-y-6 hover:shadow-md transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Heading2 */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
              {block.heading2}
            </h2>

            {/* Heading2 Para */}
            {block.heading2Para && (
              <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
                {block.heading2Para}
              </p>
            )}

            {/* Points rendered as cards */}
            {block.points && (
              <div className="mt-6 flex flex-wrap justify-center gap-6">
                {block.points.map((point, i) => (
                  <motion.div
                    key={i}
                    className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-5 flex flex-col gap-3 w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(50%-0.75rem)] lg:w-[calc(50%-0.75rem)] max-w-xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Heading3 */}
                    <div className="flex items-center gap-2">
                      {point.imgSrc ? (
                        <img
                          src={point.imgSrc}
                          alt={point.heading3 || "Feature icon"}
                          className="w-6 h-6 flex-shrink-0"
                        />
                      ) : (
                        <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
                      )}
                      {point.heading3 && (
                        <h3 className="text-lg font-semibold text-gray-900">
                          {point.heading3}
                        </h3>
                      )}
                    </div>

                    {/* Para */}
                    {point.heading3Para && (
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {point.heading3Para}
                      </p>
                    )}

                    {/* ✅ Conditionally render button */}
                    {point.heading3Btn && point.heading3BtnLink && (
                      <div className="mt-3">
                        <a
                          href={point.heading3BtnLink}
                          className="inline-block bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
                        >
                          {point.heading3Btn}
                        </a>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {/* ✅ Conditionally render block-level button */}
            {block.btn1 && block.btnLink && (
              <div className="text-center mt-8">
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
