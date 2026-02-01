"use client";

import { motion } from "framer-motion";

const ServiceProviderSolutions = () => {
  const providerTiers = [
    {
      title: "Small-Scale Service Providers and Retailers",
      description:
        "Small recharge shops, local service providers, and retail outlets benefit from simple, cost-effective payment solutions that enable immediate service offering without complex technical setup. Our platform provides essential payment processing for mobile recharges, bill payments, and basic utility services while maintaining competitive commission structures and reliable service availability for growing businesses.",
    },
    {
      title: "Mid-Scale Multi-Service Platforms",
      description:
        "Growing service aggregators and multi-utility platforms require scalable infrastructure that supports diverse service categories and customer management. Our comprehensive solution handles advanced features like customer portals, recurring payments, agent management, and detailed analytics while providing white-label options for brand customization and business growth.",
    },
    {
      title: "Large-Scale Utility Companies and Corporations",
      description:
        "Enterprise utility companies and large service providers need secure platforms that handle millions of transactions with advanced security, compliance, and integration capabilities. Our enterprise solution supports complex billing structures, enterprise customer management, system integrations, and comprehensive reporting for regulatory compliance and business intelligence.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          AOPAY Tailored Solutions for Every Service Provider Size
        </motion.h2>

        {/* Provider Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {providerTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {tier.title}
              </h3>
              <p className="text-gray-700">{tier.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProviderSolutions;
