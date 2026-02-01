"use client";

import { motion } from "framer-motion";
import { Package, Truck, Building2 } from "lucide-react";

const LogisticsBusinessSolutions = () => {
  const tiers = [
    {
      icon: <Package className="w-7 h-7 text-green-600" />,
      title: "Small-Scale Logistics Operations",
      description:
        "Small logistics companies and independent operators benefit from simplified payment processing that eliminates complex administrative tasks. Our driver payment solutions enable immediate settlements without manual calculations or bank visits. UPI and QR code payments facilitate instant customer collections, improving cash flow for growing businesses. Bank account verification ensures secure onboarding of new drivers and partners while maintaining compliance with minimal overhead.",
    },
    {
      icon: <Truck className="w-7 h-7 text-green-600" />,
      title: "Mid-Scale Transportation Companies",
      description:
        "Mid-scale logistics businesses require integrated solutions that connect driver payments with fleet management systems. Our platform enables automated expense management through driver wallets, reducing administrative burden on back-office teams. AEPS integration expands service offerings in rural markets, while comprehensive payment collection tools support diverse customer payment preferences. Real-time financial tracking and reconciliation improve operational visibility and decision-making capabilities.",
    },
    {
      icon: <Building2 className="w-7 h-7 text-green-600" />,
      title: "Large-Scale Logistics Enterprises",
      description:
        "Enterprise logistics companies manage complex operations across multiple regions with thousands of drivers and diverse service offerings. Our scalable platform supports high-volume payment processing with advanced fraud detection and compliance features. Integrated banking services facilitate multi-currency operations and international settlements. Comprehensive reporting and analytics provide insights for optimizing costs, managing cash flow, and supporting strategic business decisions across all operational segments.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          AOPAY Tailored Solutions for Every Logistics Business Size
        </motion.h2>

        {/* Three-Tier Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {tiers.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition"
            >
              {/* Icon + title in one line */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogisticsBusinessSolutions;
