"use client";

import { motion } from "framer-motion";

const GigEconomyPaymentMethods = () => {
  const paymentMethods = [
    "Credit/Debit Cards",
    "Bank Transfers",
    "Digital Wallets",
    "PayPal",
    "Stripe Connect",
    "Wire Transfers",
    "UPI Payments",
    "SEPA Transfers",
    "ACH Payments",
    "Mobile Money",
    "Prepaid Cards",
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 border-b-2 border-black inline-block pb-2"
        >
          Comprehensive Payment Method Support
        </motion.h2>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed">
          Accommodate diverse payment preferences of clients and freelancers
          worldwide with extensive payment method support designed for gig
          economy transactions.
        </p>

        {/* Payment Method List */}
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {paymentMethods.map((method, idx) => (
            <li
              key={idx}
              className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition flex items-center justify-center font-medium text-gray-800"
            >
              {method}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default GigEconomyPaymentMethods;
