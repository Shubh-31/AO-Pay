"use client";

import { motion } from "framer-motion";
import { Truck, Home, CreditCard, Layers, Smartphone, Cpu } from "lucide-react";

const ECommerceLogisticsIntegration = () => {
  const integrations = [
    {
      icon: <Truck className="w-6 h-6 text-green-600" />,
      title: "Fleet Management Systems",
      description: "Sync with GPS tracking and fleet optimization platforms",
    },
    {
      icon: <Home className="w-6 h-6 text-green-600" />,
      title: "Warehouse Management",
      description: "Connect with inventory and order management systems",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-green-600" />,
      title: "Accounting Software",
      description:
        "Automated financial data sync with popular accounting platforms",
    },
    {
      icon: <Layers className="w-6 h-6 text-green-600" />,
      title: "Customer Portals",
      description:
        "Integrate payment capabilities into customer-facing applications",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-green-600" />,
      title: "Mobile Applications",
      description: "Driver and customer mobile app integration",
    },
    {
      icon: <Cpu className="w-6 h-6 text-green-600" />,
      title: "ERP Systems",
      description: "Enterprise resource planning system connectivity",
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
          Easy Integration with Logistics Management Systems
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Connect AOPAY with your existing logistics management software, fleet
          tracking systems, and accounting platforms. Our flexible integration
          options ensure smooth data flow and unified operations across all
          business functions.
        </motion.p>

        {/* Integration Capabilities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {integrations.map((item, idx) => (
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

export default ECommerceLogisticsIntegration;
