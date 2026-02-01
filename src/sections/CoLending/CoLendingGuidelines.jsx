"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const CoLendingGuidelines = () => {
  const guidelines = [
    { text: "Priority Sector Lending" },
    { text: "Automated PSL classification" },
    { text: "Fair Practices Code" },
    { text: "Transparent borrower disclosures" },
    { text: "Data Protection" },
    { text: "Secure data sharing protocols" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Fully Compliant with RBI Co-Lending Guidelines
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our solution is built from the ground up to comply with the RBI’s
          Master Direction on Co-Lending, ensuring every partnership remains
          fully aligned with regulatory standards.
        </p>

        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {guidelines.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition"
            >
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-800 font-medium">{item.text}</span>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};
