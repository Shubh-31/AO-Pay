"use client";

import { motion } from "framer-motion";

const NonProfitFundraising = () => {
  const benefits = [
    "35% Average donation increase",
    "98% Payment success rate",
    "24/7 Real-time fund tracking",
    "150+ Supported currencies",
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
          AOPAY Maximize Fundraising Impact with Smart Donation Processing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg max-w-3xl mx-auto"
        >
          Accept donations from supporters around the world in minutes. Our
          nonprofit payment platform is designed to increase conversion at every
          step of the donation flow – from optimized giving forms and fraud
          prevention to transparent fund management and donor engagement tools.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left mt-8"
        >
          {benefits.map((item, idx) => (
            <li
              key={idx}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md hover:border hover:border-green-500 transition text-gray-700 font-medium"
            >
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default NonProfitFundraising;
