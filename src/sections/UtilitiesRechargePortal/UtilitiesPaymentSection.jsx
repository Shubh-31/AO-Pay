"use client";

import { motion } from "framer-motion";

const UtilitiesPaymentSection = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/80 border border-gray-200 rounded-3xl shadow-sm px-6 md:px-10 py-10 md:py-12">
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
          >
            Transforming Payment Operations in Utilities and Services
          </motion.h2>

          {/* Divider accent */}
          <div className="mt-4 mb-6 flex justify-center">
            <span className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-green-500" />
          </div>

          {/* Paragraphs */}
          <div className="space-y-5 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Utilities and recharge industry has evolved significantly with
              digital transformation, changing customer expectations, and the
              need for seamless payment experiences. As utility companies,
              telecom providers, and recharge portals scale their operations,
              they face increasing complexity in managing diverse payment
              methods, regulatory compliance, customer service efficiency, and
              revenue optimization across multiple service categories.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Modern utility and recharge businesses require sophisticated
              payment infrastructure that can handle high-volume transactions,
              multiple service types, real-time processing, and comprehensive
              customer management while maintaining security and compliance
              standards. AOPAY&apos;s specialized platform addresses these
              unique challenges with purpose-built solutions for the utilities
              and services sector.
            </motion.p>
          </div>

          {/* Key Metrics */}
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 grid gap-4 text-gray-700 text-base md:text-lg"
          >
            <li className="flex items-start gap-3 bg-gray-50 rounded-2xl px-4 py-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
              <span>
                75% Faster payment processing for utility bills and recharge
                transactions
              </span>
            </li>
            <li className="flex items-start gap-3 bg-gray-50 rounded-2xl px-4 py-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
              <span>
                90% Reduction in payment-related customer service queries
              </span>
            </li>
            <li className="flex items-start gap-3 bg-gray-50 rounded-2xl px-4 py-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
              <span>
                85% Improvement in revenue collection efficiency and cash flow
              </span>
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default UtilitiesPaymentSection;
