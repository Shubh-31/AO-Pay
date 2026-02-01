"use client";

import { motion } from "framer-motion";

const PropTechPaymentExperience = () => {
  const paymentMethods = [
    "Wire Transfers",
    "ACH Transfers",
    "Credit Cards",
    "Earnest Money",
    "Escrow Payments",
    "Rent Collection",
    "Security Deposits",
    "Commission Splits",
    "UPI Payments",
    "QR Payments",
    "Digital Wallets",
    "Bank Verification",
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
          AOPAY Optimize Your PropTech Transaction Experience Everyday
        </motion.h2>

        <p className="text-gray-700 text-lg">
          AOPAY's pre-built payment solutions provide an optimized experience
          designed specifically for real estate and PropTech platforms. Our
          system reduces friction, supports property-specific payment methods,
          and adapts to different transaction types while maintaining complete
          security and regulatory compliance. Build a fully customized property
          transaction experience that matches your brand and simplify compliance
          using our flexible integration options designed for real estate
          professionals and technology platforms.
        </p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-left max-w-3xl mx-auto"
        >
          {paymentMethods.map((method, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition"
            >
              <span className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></span>
              <span className="text-gray-700 font-medium">{method}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default PropTechPaymentExperience;
