"use client";

import { motion } from "framer-motion";

const GigPlatformGrowth = () => {
  const growthPoints = [
    "Service Category Expansion: Add new freelance services and skill categories seamlessly",
    "Global Market Entry: Expand internationally with localized payment methods and compliance",
    "User Scaling: Support millions of freelancers and clients with consistent performance",
    "Technology Evolution: Integrate AI matching, blockchain payments, and emerging technologies",
    "Partnership Enablement: Connect with enterprise clients and service provider networks",
    "Regulatory Adaptation: Stay compliant with evolving gig economy and employment regulations",
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 border-b-2 border-black inline-block pb-2"
        >
          Scale Your Gig Platform with Industry Evolution
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg md:text-xl"
        >
          As the gig economy continues expanding with remote work normalization,
          specialized skill marketplaces, and AI-enhanced matching, AOPAY's
          platform evolves with your business, supporting growth from startup
          marketplace to global gig economy leader without infrastructure
          limitations.
        </motion.p>

        {/* Growth Points */}
        <motion.ul
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {growthPoints.map((point, idx) => (
            <li
              key={idx}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-gray-800"
            >
              {point}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default GigPlatformGrowth;
