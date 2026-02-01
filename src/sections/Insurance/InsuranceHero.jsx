"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, TrendingUp, Database } from "lucide-react";

const InsuranceHero = () => {
  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      text: "25% Increase in premium collection",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      text: "98% Regulatory compliance rate",
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      text: "24/7 Automated processing",
    },
    {
      icon: <Database className="w-6 h-6 text-purple-600" />,
      text: "$500M+ Premiums processed",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Maximize Premium Collection with{" "}
          <span className="text-blue-600">
            AOPAY Smart Insurance Payment Processing
          </span>
        </motion.h2>

        {/* Paragraph */}
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          Process insurance premiums and claims from customers worldwide in
          minutes. Our platform is designed to increase payment success at every
          step of the insurance transaction flow – from optimized premium
          collection interfaces and regulatory compliance to seamless claims
          processing and automated settlement systems tailored for insurance
          operations.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition"
            >
              {item.icon}
              <span className="text-gray-800 font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceHero;
