"use client";

import { motion } from "framer-motion";
import { Truck, Wallet } from "lucide-react";

const LogisticsFinalSection = () => {
  const solutions = [
    {
      icon: <Wallet className="w-7 h-7 text-green-600" />,
      title: "Driver Payment Solutions",
      description:
        "Streamline driver settlements, expense management, and partner payments with automated, secure processing that improves satisfaction and operational efficiency.",
      button: "Explore Driver Payments",
    },
    {
      icon: <Truck className="w-7 h-7 text-green-600" />,
      title: "Fleet Financial Management",
      description:
        "Comprehensive financial tools for fleet operations including digital wallets, expense tracking, fuel management, and integrated banking services.",
      button: "Explore Fleet Solutions",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Ready to Transform Your Logistics Payment Operations?
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Explore AOPAY's comprehensive payment platform designed specifically
          for logistics companies. Start optimizing your driver payments,
          customer collections, and financial operations today.
        </motion.p>

        {/* Top CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-6"
        >
          <button className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition">
            Contact Sales
          </button>
          <button className="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition">
            Start Now
          </button>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/90 shadow-sm hover:shadow-xl border border-gray-100 rounded-3xl p-6 md:p-7 flex flex-col items-stretch justify-between transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon + title row */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-green-50 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5 flex-1">
                {item.description}
              </p>

              {/* Button */}
              <button className="inline-flex items-center justify-center px-5 py-2.5 bg-green-600 text-white rounded-full font-medium text-sm md:text-base hover:bg-green-700 transition-colors duration-200 shadow-sm hover:shadow-md ">
                {item.button}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-gray-500 text-md leading-relaxed mb-6">
            As the logistics industry continues to evolve with technology
            adoption and changing customer expectations, having the right
            payment infrastructure is critical to operational success. AOPAY's
            comprehensive platform ensures your business stays ahead of industry
            trends while optimizing financial operations and driving sustainable
            growth in the competitive transportation market.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Ready to get started?
          </h3>
          <p className="text-gray-700">
            Join thousands of logistics companies already using AOPAY to
            streamline their payment operations and drive business growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LogisticsFinalSection;
