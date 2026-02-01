"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  Apple,
  Google,
  DollarSign,
  Wallet,
  Calendar,
  Globe,
  QrCode,
  Cpu,
  Bank,
} from "lucide-react";

const paymentMethods = [
  {
    icon: <CreditCard className="w-5 h-5 text-blue-500" />,
    label: "Credit Cards",
  },
  { icon: <Apple className="w-5 h-5 text-gray-900" />, label: "Apple Pay" },
  { icon: <Google className="w-5 h-5 text-red-500" />, label: "Google Pay" },
  { icon: <DollarSign className="w-5 h-5 text-green-500" />, label: "PayPal" },
  {
    icon: <Bank className="w-5 h-5 text-purple-500" />,
    label: "Bank Transfers",
  },
  {
    icon: <Wallet className="w-5 h-5 text-yellow-500" />,
    label: "Digital Wallets",
  },
  {
    icon: <Calendar className="w-5 h-5 text-indigo-500" />,
    label: "Buy Now Pay Later",
  },
  {
    icon: <Globe className="w-5 h-5 text-teal-500" />,
    label: "Local Payment Methods",
  },
  { icon: <QrCode className="w-5 h-5 text-pink-500" />, label: "QR Payments" },
  { icon: <Cpu className="w-5 h-5 text-gray-700" />, label: "UPI Payments" },
  { icon: <Bank className="w-5 h-5 text-blue-700" />, label: "SEPA Transfers" },
];

const CheckoutExperience = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          AOPAY Optimize Your Marketplace Checkout Experience
        </motion.h2>

        {/* Paragraph */}
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          AOPAY's pre-built payment forms provide an optimized checkout
          experience for marketplace buyers. Our solution reduces friction,
          supports relevant global payment methods, and adapts to customer
          language and device preferences while maintaining trust through
          transparent escrow processes. Build a fully customized marketplace
          experience and simplify compliance using our flexible integration
          options designed specifically for multi-vendor platforms.
        </p>

        {/* Payment Methods Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {paymentMethods.map((method, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex-shrink-0">{method.icon}</div>
              <span className="text-gray-700 font-medium">{method.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CheckoutExperience;
