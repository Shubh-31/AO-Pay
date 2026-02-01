"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  Apple,
  Google,
  DollarSign,
  Wallet,
  Calendar,
  QrCode,
  Bank,
} from "lucide-react";

const features = [
  {
   
    label: "Credit Cards",
  },
  {
  
    label: "Debit Cards",
  },
  { label: "Apple Pay" },
  {  label: "Google Pay" },
  {  label: "PayPal" },
  {
   
    label: "Buy Now, Pay Later",
  },
  {  label: "QR Payments" },
  {
   
    label: "Digital Wallets",
  },
  {  label: "Bank Transfers" },
  {
   
    label: "Subscription Billing",
  },
  {
  
    label: "Mobile Payments",
  },
  {
   
    label: "UPI Payments",
  },
];

const FMCGPaymentMethods = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Supercharge Your D2C Checkout Experience
        </motion.h2>

        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          Deliver a checkout your customers will love. Our ready-to-use forms
          reduce friction, support global and local payment options, and adapt
          seamlessly to any device. Enhance your brand experience while keeping
          payments fast, secure, and optimized for conversion.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-md hover:shadow-xl cursor-pointer transition-all"
            >
             
              <span className="text-gray-800 font-semibold">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
            Start Free Trial
          </button>
          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition">
            Explore Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FMCGPaymentMethods;
