"use client";

import { motion } from "framer-motion";

const D2CPaymentProcessing = () => {
  const benefits = [
    "28% Average conversion increase",
    "15% Reduction in cart abandonment",
    "99.9% Payment success rate",
    "150+ Global payment methods",
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
          Maximize Conversion with Smarter D2C Payment Processing
        </motion.h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Accept payments from customers around the world in minutes. Our
          platform is designed to increase conversion at every step of the
          payment flow – from optimized checkout experiences and fraud
          prevention to frictionless one-click purchasing and intelligent
          payment routing designed specifically for consumer brands.
        </p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 space-y-3 text-left max-w-md mx-auto list-disc list-inside text-gray-700"
        >
          {benefits.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default D2CPaymentProcessing;
