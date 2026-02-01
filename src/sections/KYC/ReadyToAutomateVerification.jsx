"use client";

import { motion } from "framer-motion";

export const ReadyToAutomateVerification = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Ready to Automate Customer Verification?
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-600 leading-relaxed">
          Join 1,000+ banks, fintechs, and digital platforms that trust our KYC
          API for identity verification. Start with our sandbox and experience
          fast, accurate, and compliant customer onboarding.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <a
            href="#"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-green-700 transition"
          >
            Start Verification Today
          </a>
          <a
            href="#"
            className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium shadow-sm hover:bg-green-50 transition"
          >
            Contact Sales
          </a>
        </div>
      </motion.div>
    </section>
  );
};
