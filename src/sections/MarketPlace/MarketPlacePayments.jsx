"use client";

import { motion } from "framer-motion";
import { Globe, Shield, Repeat, CreditCard } from "lucide-react";

const MarketPlacePayments = () => {
  const metrics = [
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      value: "32%",
      label: "Average fraud reduction",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-green-500" />,
      value: "15%",
      label: "Conversion rate increase",
    },
    {
      icon: <Repeat className="w-6 h-6 text-blue-500" />,
      value: "24/7",
      label: "Automated settlements",
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      value: "150+",
      label: "Supported currencies",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          AOPAY Maximize Conversion with Smart Marketplace Payments
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Accept payments from buyers worldwide while managing complex vendor
          settlements in minutes. Our marketplace payment platform is designed
          to increase conversion at every step of the transaction flow – from
          optimized checkout experiences and fraud prevention to frictionless
          escrow services and intelligent vendor management.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition hover:-translate-y-1"
            >
              <div className="mb-3">{metric.icon}</div>
              <span className="text-2xl md:text-3xl font-bold text-gray-900">
                {metric.value}
              </span>
              <p className="text-gray-600 text-center mt-2">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketPlacePayments;
