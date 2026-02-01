"use client";

import { motion } from "framer-motion";

const RealEstatePaymentSolutions = () => {
  const solutions = [
    {
      title: "Independent Real Estate Agents",
      description:
        "For individual agents and small brokerages, AOPAY's payment processing enables secure transaction handling without complex infrastructure. Our escrow services build client confidence from the first showing, while KYC verification ensures qualified buyers and sellers. Simple integration gets your payment processing running quickly with minimal technical resources.",
      features: [
        "Simple Setup: Start processing transactions in days with agent-friendly interfaces",
        "Client Trust: Professional escrow services build confidence with high-value clients",
        "Commission Management: Automated commission splits and payment processing",
      ],
    },
    {
      title: "Growing Real Estate Brokerages",
      description:
        "Scaling real estate businesses benefit from AOPAY's advanced transaction management that handles increasing deal volumes with intelligent routing and verification. Virtual account systems enable sophisticated fund management across multiple properties, while comprehensive reporting tools help demonstrate performance to investors and regulatory bodies.",
      features: [
        "Volume Scaling: Handle growing transaction volumes with automated processing",
        "Agent Management: Comprehensive tools for managing multiple agents and transactions",
        "Financial Insights: Advanced analytics for business performance optimization",
      ],
    },
    {
      title: "PropTech Platforms and Enterprise Real Estate",
      description:
        "Large-scale real estate operations and PropTech companies require sophisticated payment orchestration across global markets and multiple property types. AOPAY's platform supports high transaction volumes with intelligent routing, multi-currency processing, and comprehensive financial management for complex real estate ecosystems.",
      features: [
        "Platform Integration: Easy integration with PropTech platforms and enterprise systems",
        "Global Operations: Multi-currency and international compliance for global real estate",
        "Enterprise Features: Advanced treasury management and institutional-grade reporting",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Real Estate Payment Solutions for Every Business Model
        </motion.h2>

        <div className="space-y-12">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-700 mb-4">{solution.description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {solution.features.map((feature, fIdx) => (
                  <li key={fIdx}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealEstatePaymentSolutions;
