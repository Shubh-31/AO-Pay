"use client";

import { motion } from "framer-motion";

const TrustedBankingInfrastructure = () => {
  const stats = [
    { value: "500+", label: "Connected Banks" },
    { value: "99.9%", label: "API Uptime" },
    { value: "10M+", label: "Daily Transactions" },
    { value: "200ms", label: "Average Response Time" },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Trusted Banking Infrastructure
          <p className="text-xl font-semibold mt-4 text-gray-800">Powering the next generation of financial applications</p>
        </motion.h2>

        {/* Stats Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-indigo-600">
                {stat.value}
              </h3>
              <p className="mt-2 text-gray-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBankingInfrastructure;
