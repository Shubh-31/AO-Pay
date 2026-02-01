"use client";

import { motion } from "framer-motion";
import { Truck, Wallet, Users } from "lucide-react";

const ECommerceLogisticsReadySection = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Driver Payment Solutions",
      description:
        "Streamline driver settlements, expense management, and partner payments with automated, secure processing that improves satisfaction and operational efficiency.",
      buttonText: "Explore Driver Payments",
    },
    {
      icon: <Truck className="w-6 h-6 text-green-600" />,
      title: "Fleet Financial Management",
      description:
        "Comprehensive financial tools for fleet operations including digital wallets, expense tracking, fuel management, and integrated banking services.",
      buttonText: "Explore Fleet Solutions",
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

        {/* Description */}
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

        {/* Main CTAs */}
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              {/* Icon + Title in one line */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </div>

              {/* Description centered */}
              <p className="text-gray-600 text-base leading-snug text-center">
                {feature.description}
              </p>

              {/* Button centered */}
              <div className="w-full flex justify-center">
                <button className="mt-2 px-5 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition">
                  {feature.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Join thousands of logistics companies already using AOPAY to
            streamline their payment operations and drive business growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ECommerceLogisticsReadySection;
