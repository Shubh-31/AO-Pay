"use client";

import { motion } from "framer-motion";

const RealEstatePaymentSection = () => {
  const features = [
    "98% Transaction success rate",
    "24/7 Escrow monitoring",
    "100% Regulatory compliance",
    "$2B+ Properties transacted",
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 px-6 py-10 md:px-10 md:py-12"
        >
          <div className="space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Maximize Trust with Smart Real Estate Payment Processing
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Process property transactions from buyers and sellers worldwide in
              minutes. Our platform is designed to build confidence at every step of
              the real estate transaction flow – from secure escrow management and
              identity verification to fraud prevention and automated settlement
              processes tailored for property professionals.
            </p>
          </div>

          {/* Features */}
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
          >
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3 shadow-xs border border-gray-100 hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-50 flex-shrink-0">
                  <span className="w-3 h-3 bg-blue-600 rounded-full" />
                </span>
                <span className="text-gray-800 text-sm md:text-base">
                  {feature}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default RealEstatePaymentSection;
