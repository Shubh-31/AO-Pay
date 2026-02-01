"use client";

import { motion } from "framer-motion";

const marketplaceExpertContent = [
  {
    heading3:
      "Ready to Transform Your Marketplace Payments? - Explore AOPAY Marketplace Solutions, or create an account instantly to get started. Contact our specialists to design a custom payment solution for your marketplace platform.",
    buttonLabel: "Start Now",
  },
  {
    heading3:
      "Mobile Marketplace Payments: Provide seamless payment experiences across all devices with mobile-optimized checkout flows and app integration capabilities.",
    buttonLabel: "Explore Mobile Solutions",
  },
  {
    heading3:
      "Subscription Marketplace Billing: Manage recurring marketplace models with automated vendor revenue sharing, subscription billing, and retention optimization tools.",
    buttonLabel: "Explore Subscription Billing",
  },
];

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Build Your Marketplace Experience with AOPAY Experts
        </motion.h2>

        {/* Paragraph under H2 */}
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          AOPAY marketplace payment specialists guide you through optimizing
          every aspect of your payment flow to increase conversion rates, build
          customer trust, and streamline vendor management.
        </p>

        {/* Learn More Button */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>

        {/* H3 Sections with Buttons */}
        <div className="space-y-8 mt-12">
          {marketplaceExpertContent.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                {item.heading3}
              </h3>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                {item.buttonLabel}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
