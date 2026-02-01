"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const GSTPricingSection = () => {
  const features = [
    "Pay per successful GST verification",
    "Volume discounts for 10K+ verifications",
    "Free sandbox environment for testing",
    "24/7 B2B technical support included",
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Transparent GST Verification API Pricing – AOPAY
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed">
            Simple, transparent pricing with no hidden fees. Pay only for
            successful GST verifications with volume discounts available for
            enterprise customers and B2B platforms processing high volumes.
          </p>

          {/* H3 */}
          <h3 className="text-2xl font-semibold text-gray-800">
            Pay-Per-Verification Model
          </h3>

          {/* Feature List */}
          <ul className="space-y-3">
            {features.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="text-green-600 w-5 h-5" />
                </div>
                <span className="text-gray-700 text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
