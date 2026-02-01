"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const ECommerceCheckoutFlowSection = () => {
  const paymentMethods = [
    "Apple Pay",
    "Google Pay",
    "Paytm",
    "PhonePe",
    "BHIM",
    "CRED",
    "BOS PAY",
    "AOPAY",
    "MobiKwik",
    "Jupiter",
    "YONO SBI",
    "Axis Pay",
    "Wise",
    "DBS DigiBank",
    "QuickBooks",
    "Square",
    "Wise",
    "Wallet",
  ];

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
          Optimize Your Checkout Flow for Maximum Revenue
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto"
        >
          AOPAY&apos;s pre-built payment form provides an optimized checkout
          experience for your customers. It reduces friction, supports relevant
          global payment methods, and adapts to your customer&apos;s language
          and device.
          <br />
          <br />
          You can also build a fully customized experience and simplify PCI
          compliance using our flexible integration options.
        </motion.p>

        {/* Supported Payment Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Supported Payment Methods
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            {paymentMethods.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-gray-100 border border-gray-200 rounded-xl p-3 hover:bg-gray-200 transition"
              >
                <CheckCircle className="text-green-700 w-5 h-5 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{method}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ECommerceCheckoutFlowSection;
