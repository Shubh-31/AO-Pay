"use client";

import { motion } from "framer-motion";

const NonProfitDonationExperience = () => {
  const donationMethods = [
    "Credit Cards",
    "Debit Cards",
    "Bank Transfers",
    "Recurring Gifts",
    "QR Donations",
    "UPI Payments",
    "Digital Wallets",
    "PayPal",
    "Apple Pay",
    "Google Pay",
    "Text-to-Give",
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          AOPAY Optimize Your Nonprofit Donation Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg max-w-3xl mx-auto"
        >
          AOPAY's pre-built donation forms provide an optimized giving
          experience for your supporters. Our solution reduces friction,
          supports multiple donation methods, and adapts to donor preferences
          while maintaining complete transparency about fund usage and impact.
          Build a fully customized donation experience that reflects your
          mission and simplify compliance using our flexible integration options
          designed specifically for nonprofit organizations.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-left"
        >
          {donationMethods.map((method, idx) => (
            <li
              key={idx}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition text-gray-700 font-medium"
            >
              {method}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default NonProfitDonationExperience;
