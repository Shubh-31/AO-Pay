"use client";

import { motion } from "framer-motion";

export const PayrollCTASection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Transform Your Payroll Operations Today
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-gray-600 text-lg md:text-xl"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Connect with our payroll specialists to discover how our software can
          reduce processing time by{" "}
          <span className="font-semibold text-green-600">80%</span>, ensure{" "}
          <span className="font-semibold text-green-600">100% compliance</span>,
          and enhance employee experience.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="/get-started"
            className="px-8 py-3 bg-green-600 text-white rounded-2xl font-semibold shadow-md hover:bg-green-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="/contact-expert"
            className="px-8 py-3 bg-gray-900 text-white rounded-2xl font-semibold shadow-md hover:bg-black transition-colors"
          >
            Speak with Expert
          </a>
        </motion.div>

        {/* Supporting Text */}
        <motion.p
          className="text-gray-600 text-base mt-6"
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="font-semibold text-gray-800">
            Ready to modernize your payroll operations?
          </span>{" "}
          Join <span className="text-green-600 font-bold">500+ companies</span>{" "}
          that have automated their payroll processing and reduced costs by{" "}
          <span className="text-green-600 font-bold">60%</span>.
        </motion.p>
      </div>
    </section>
  );
};
