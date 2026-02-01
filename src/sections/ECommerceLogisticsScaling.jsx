"use client";

import { motion } from "framer-motion";
import { Globe, Truck, Package, Cpu, Shield, BarChart } from "lucide-react";

const ECommerceLogisticsScaling = () => {
  const growthFeatures = [
    {
      icon: <Globe className="w-6 h-6 text-green-600" />,
      title: "Geographic Expansion",
      description: "Support for multi-state and international operations",
    },
    {
      icon: <Truck className="w-6 h-6 text-green-600" />,
      title: "Fleet Scaling",
      description: "Handle payments for thousands of drivers and vehicles",
    },
    {
      icon: <Package className="w-6 h-6 text-green-600" />,
      title: "Service Diversification",
      description: "Add new logistics services without payment system changes",
    },
    {
      icon: <Cpu className="w-6 h-6 text-green-600" />,
      title: "Technology Evolution",
      description:
        "Integrate emerging payment technologies as they become available",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Regulatory Adaptation",
      description: "Automatic updates for changing compliance requirements",
    },
    {
      icon: <BarChart className="w-6 h-6 text-green-600" />,
      title: "Performance Optimization",
      description: "Advanced analytics for continuous improvement",
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
          Scale Your Payment Infrastructure with Business Growth
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          As your logistics business expands from local operations to regional
          or national presence, AOPAY's platform scales seamlessly to support
          increased transaction volumes, additional service lines, and complex
          operational requirements without requiring major system overhauls.
        </motion.p>

        {/* Growth Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {growthFeatures.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
                {item.icon}
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-snug">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ECommerceLogisticsScaling;
