"use client";

import { motion } from "framer-motion";

const ComprehensiveIntegrationSupport = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Comprehensive Integration Support
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Multiple Integration Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Multiple Integration Options
            </h3>
            <ul className="space-y-3 text-gray-700 list-disc pl-6">
              <li>Hosted Payment Pages</li>
              <li>Direct API Integration</li>
              <li>Mobile SDK Integration</li>
              <li>Plugin Solutions</li>
            </ul>
          </motion.div>

          {/* Development Resources */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Development Resources
            </h3>
            <ul className="space-y-3 text-gray-700 list-disc pl-6">
              <li>Interactive API Documentation</li>
              <li>Code Examples & Tutorials</li>
              <li>Testing Sandbox Environment</li>
              <li>24/7 Developer Support</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveIntegrationSupport;
