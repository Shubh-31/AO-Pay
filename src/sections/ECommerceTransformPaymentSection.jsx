"use client";

import { motion } from "framer-motion";

const ECommerceTransformPaymentsSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Ready to Transform Your E-commerce Payments?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg max-w-3xl mx-auto"
        >
          Explore AOPAY Payments, or create an account instantly to get started.
          You can also contact us to design a custom package for your business.
        </motion.p>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-4"
        >
          <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition">
            Contact Sales
          </button>
          <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition">
            Start Now
          </button>
        </motion.div>

        {/* Subsections */}
        <div className="grid gap-8 sm:grid-cols-2 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              In-Person Payments
            </h3>
            <p className="text-gray-600 mb-4">
              Provide a seamless customer experience across channels, like
              reserving online and picking up in store.
            </p>
            <button className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Explore Terminal
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Recurring Payments
            </h3>
            <p className="text-gray-600 mb-4">
              Bill one-off or on a recurring basis, manage subscriptions and
              reduce payment declines with AOPAY's recovery tools.
            </p>
            <button className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Explore Billing
            </button>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg max-w-4xl mx-auto mt-10"
        >
          As the e-commerce industry continues to grow and evolve, having the
          right technology partner is critical to managing the complexities of
          payment processing, compliance, and financial operations. Leverage
          AOPAY's comprehensive suite of solutions to future-proof your business
          and unlock new growth opportunities in the global marketplace.
        </motion.p>
      </div>
    </section>
  );
};

export default ECommerceTransformPaymentsSection;
