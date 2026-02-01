"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  Wallet,
  HeartPulse,
  Smartphone,
  Shield,
} from "lucide-react";

const PatientPaymentExperience = () => {
  const paymentMethods = [
    "Credit Cards",
    "Debit Cards",
    "ACH Transfers",
    "Payment Plans",
    "HSA/FSA Cards",
    "Apple Pay",
    "Google Pay",
    "PayPal",
    "AOPAY",
    "CareCredit",
    "Insurance Claims",
    "Electronic Checks",
    "Contactless Payments",
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900"
        >
          AOPAY Optimize Your Patient Payment Experience
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto"
        >
          AOPAY's pre-built healthcare payment forms provide an optimized
          experience for patients. Our platform reduces friction, supports
          relevant payment methods, and adapts to patient preferences and
          devices while maintaining strict HIPAA compliance. Build a fully
          customized patient billing experience and simplify compliance using
          our flexible integration options designed specifically for healthcare
          providers.
        </motion.p>

        {/* Icons Row */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-blue-50 rounded-xl p-6 shadow-sm w-48"
          >
            <CreditCard className="w-10 h-10 text-blue-600 mb-3" />
            <p className="text-gray-700 font-medium">Flexible Payments</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-green-50 rounded-xl p-6 shadow-sm w-48"
          >
            <HeartPulse className="w-10 h-10 text-green-600 mb-3" />
            <p className="text-gray-700 font-medium">Patient-Centered</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-purple-50 rounded-xl p-6 shadow-sm w-48"
          >
            <Smartphone className="w-10 h-10 text-purple-600 mb-3" />
            <p className="text-gray-700 font-medium">Mobile Friendly</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-red-50 rounded-xl p-6 shadow-sm w-48"
          >
            <Shield className="w-10 h-10 text-red-600 mb-3" />
            <p className="text-gray-700 font-medium">HIPAA Secure</p>
          </motion.div>
        </div>

        {/* Payment Methods List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">
            Supported Payment Methods:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-700 text-sm md:text-base">
            {paymentMethods.map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-50 px-4 py-2 rounded-lg shadow-sm text-center hover:bg-blue-50 transition"
              >
                {method}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PatientPaymentExperience;
