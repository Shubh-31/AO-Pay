"use client";

import { motion } from "framer-motion";

const InsurancePremiums = () => {
  const features = [
    "Credit Cards",
    "Debit Cards",
    "Bank Transfers",
    "Auto-Debit",
    "UPI Payments",
    "QR Payments",
    "Digital Wallets",
    "Premium Financing",
    "Installment Plans",
    "Claims Settlements",
    "Agent Commissions",
    "Mobile Payments",
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Optimize Your Insurance Premium Collection Experience With{" "}
          <span className="text-blue-600">AOPAY</span>
        </motion.h2>

        {/* Paragraph */}
        <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
          AOPAY's pre-built payment solutions provide an optimized experience
          designed specifically for insurance companies and InsurTech platforms.
          Our system reduces friction for premium payments, supports
          insurance-specific payment schedules, and adapts to different policy
          types while maintaining complete regulatory compliance and security
          standards.
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {features.map((item, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="px-5 py-2 bg-blue-50 text-blue-700 rounded-full shadow-sm hover:bg-blue-100 transition text-sm font-medium"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsurancePremiums;
