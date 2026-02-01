"use client";

import { motion } from "framer-motion";

const ServiceIntegrationSection = () => {
  const integrations = [
    "Utility Provider Integration: Direct connections with electricity, water, gas, and telecom providers",
    "Banking System Connectivity: Integration with banks and financial institutions for payment processing",
    "Customer Management Systems: CRM and customer service platform integration",
    "Accounting Software: Automated financial reporting and reconciliation",
    "Agent Management Platforms: Multi-level distribution and commission management",
    "Mobile Applications: White-label mobile apps for customer and agent management",
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 inline-block pb-2"
        >
          Easy Integration with Service Ecosystems
        </motion.h2>

        {/* Subheading */}
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Connect AOPAY with your existing systems and service provider networks
          to create unified operations that maximize efficiency and provide
          comprehensive service management capabilities.
        </p>

        {/* Integration List */}
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        >
          {integrations.map((item, idx) => (
            <li
              key={idx}
              className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-black hover:shadow-md transition"
            >
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default ServiceIntegrationSection;
