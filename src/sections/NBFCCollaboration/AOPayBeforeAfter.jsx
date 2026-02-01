"use client";

import { motion } from "framer-motion";

export default function AOPayBeforeAfter() {
  const beforePoints = [
    "Relying on guesswork for collaboration decisions",
    "Risking costly errors due to lack of regulatory expertise",
    "Struggling to coordinate effectively with multiple partners",
    "Feeling overwhelmed by numerous collaboration options",
    "Unable to structure optimal revenue-sharing models",
    "Compliance concerns creating operational delays",
    "Difficulty accessing quality fintech or NBFC partners",
    "Manual reconciliation consuming excessive time",
  ];

  const afterPoints = [
    "Strategic insights eliminating guesswork in decision-making",
    "Reduced risk through expert oversight and regulatory support",
    "Seamless coordination with partners via structured frameworks",
    "Simplified decision-making with tailored, proven solutions",
    "Optimized revenue models maximizing profitability",
    "Proactive compliance management ensuring smooth operations",
    "Access to vetted network of 9000+ NBFCs and fintech partners",
    "Automated reconciliation and performance analytics",
  ];

  return (
    <section className="bg-gray-50 text-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          Transform Your Business with AOPay – Before and After
        </motion.h2>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-6"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              ⚠️ Before AOPay Partnership
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              {beforePoints.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900 text-white rounded-2xl shadow-md border border-gray-800 p-6"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              ✅ After AOPay Partnership
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
              {afterPoints.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
