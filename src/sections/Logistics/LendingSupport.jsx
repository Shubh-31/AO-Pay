"use client";

import { motion } from "framer-motion";

const LendingSupport = () => {
  const supportPoints = [
    {
      heading: "Platform Implementation",
      description:
        "End-to-end implementation support including system design, integration, testing, and go-live assistance with dedicated project management and technical expertise.",
    },
    {
      heading: "Regulatory Consulting",
      description:
        "Expert guidance on RBI regulations, compliance requirements, and industry best practices to ensure your lending operations meet all regulatory standards.",
    },
    {
      heading: "Business Optimization",
      description:
        "Ongoing analysis and recommendations to improve approval rates, reduce defaults, optimize pricing strategies, and enhance overall lending performance.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Expert Support for Digital Lending Transformation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg leading-relaxed"
        >
          Partner with AOPAY's lending technology experts to build, optimize,
          and scale your digital lending operations. Our specialized team
          provides comprehensive support from platform design to regulatory
          compliance and business optimization.
        </motion.p>

        <div className="mt-12 space-y-6 text-left">
          {supportPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-4 items-start bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-800 font-bold text-lg">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {point.heading}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default LendingSupport;
