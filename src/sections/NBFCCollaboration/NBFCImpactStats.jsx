"use client";

import { motion } from "framer-motion";

export default function NBFCImpactStats() {
  const stats = [
    {
      value: "3x",
      label: "Average Revenue Growth Post-Collaboration",
    },
    {
      value: "60%",
      label: "Reduction in Customer Acquisition Cost",
    },
    {
      value: "45%",
      label: "Faster Loan Processing Time",
    },
    {
      value: "2.5x",
      label: "Increase in Geographic Reach",
    },
  ];

  return (
    <section className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Success Stories: Real Impact of NBFC Collaboration
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all p-6 flex flex-col items-center justify-center"
            >
              <h3 className="text-4xl font-bold text-black mb-3">
                {item.value}
              </h3>
              <p className="text-gray-700 text-sm text-center leading-relaxed">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
