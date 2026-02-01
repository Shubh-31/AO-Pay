"use client";

import { motion } from "framer-motion";

const ServiceGrowthSection = () => {
  const growthPoints = [
    "Service Expansion: Add new utility categories and service providers seamlessly",
    "Geographic Scaling: Expand to new regions with localized service integration",
    "Technology Evolution: Integrate emerging technologies like smart meters and IoT devices",
    "Customer Growth: Handle millions of customers with consistent performance",
    "Partner Network: Scale agent and retailer networks efficiently",
    "Regulatory Compliance: Adapt to changing regulations and compliance requirements",
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
          Scale Your Service Platform with Industry Growth
        </motion.h2>

        {/* Subheading */}
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          As the utilities and digital services industry continues expanding
          with smart city initiatives, IoT integration, and digital
          transformation, AOPAY's platform evolves with your business,
          supporting growth from local services to nationwide operations without
          infrastructure limitations.
        </p>

        {/* Growth Points */}
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        >
          {growthPoints.map((point, idx) => (
            <li
              key={idx}
              className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-black hover:shadow-md transition"
            >
              {point}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default ServiceGrowthSection;
