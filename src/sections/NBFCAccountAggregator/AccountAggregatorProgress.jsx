"use client";

import { motion } from "framer-motion";

export default function AccountAggregatorProgress() {
  const stats = [
    {
      number: "578",
      label: "Financial institutions live as FIP and FIU",
    },
    {
      number: "56",
      label: "Financial institutions live as FIP",
    },
    {
      number: "410",
      label: "Financial institutions live as FIU",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        >
          Current Progress of Account Aggregator Ecosystem in India
        </motion.h2>

        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          The Account Aggregator framework has witnessed remarkable adoption and
          growth, establishing itself as a foundational infrastructure for
          India&apos;s digital finance future.
        </p>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-center"
            >
              <h3 className="text-5xl font-bold text-black mb-2">
                {item.number}
              </h3>
              <p className="text-gray-700 text-base">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
