"use client";

import { motion } from "framer-motion";

const GigEconomyTailoredSolutions = () => {
  const solutions = [
    {
      title: "Small-Scale Freelance Marketplaces",
      description:
        "Emerging freelance platforms and niche marketplaces benefit from essential payment infrastructure that enables secure transactions without complex setup requirements. Our platform provides core escrow services, basic payment processing, and simple freelancer payout capabilities that allow new platforms to focus on community building and service quality while ensuring reliable payment operations from day one.",
    },
    {
      title: "Mid-Scale Gig Platforms",
      description:
        "Growing gig economy platforms require sophisticated features to handle diverse service categories, multi-stakeholder relationships, and increasing transaction volumes. Our comprehensive solution supports advanced escrow management, automated dispute resolution, multi-currency operations, and detailed analytics that enable platforms to scale operations while maintaining quality user experiences and regulatory compliance.",
    },
    {
      title: "Enterprise Gig Marketplaces",
      description:
        "Large-scale freelance platforms and enterprise gig marketplaces need secure infrastructure that handles millions of transactions, complex compliance requirements, and global operations. Our enterprise solution provides advanced features including white-label payment processing, custom workflow integration, comprehensive reporting, and dedicated support that ensures seamless operations at massive scale while maintaining security and compliance standards.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 border-b-2 border-black inline-block pb-2"
        >
          AOPAY Tailored Solutions for Every Gig Economy Platform
        </motion.h2>

        {/* Solutions */}
        <motion.div
          className="mt-10 space-y-6 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {solutions.map((solution, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-700">{solution.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GigEconomyTailoredSolutions;
