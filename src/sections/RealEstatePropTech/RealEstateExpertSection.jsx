"use client";

import { motion } from "framer-motion";

const RealEstateExpertSection = () => {
  const ctaSections = [
    {
      title: "Ready to Transform Your Real Estate Payment Processing?",
      description:
        "Explore AOPAY Real Estate Solutions, or create an account instantly to get started. Contact our specialists to design a custom payment platform that accelerates your property transactions and builds lasting client relationships.",
      buttonText: "Contact Sales",
      buttonLink: "#",
    },
    {
      title: "Mobile Real Estate Payments",
      description:
        "Enable on-the-go transaction processing with mobile-optimized payment flows designed for real estate professionals and their clients.",
      buttonText: "Explore Mobile Solutions",
      buttonLink: "#",
    },
    {
      title: "Rental Management Platform",
      description:
        "Comprehensive rental payment processing with automated collection, security deposit management, and tenant communication tools.",
      buttonText: "Explore Rental Solutions",
      buttonLink: "#",
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
          Build Your Real Estate Success with AOPAY Experts
        </motion.h2>

        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          AOPAY real estate payment specialists understand the unique challenges
          of property transactions and PropTech innovation. We guide you through
          optimizing every aspect of your payment experience to build client
          trust, ensure regulatory compliance, and accelerate deal closings.
        </p>

        <div className="space-y-8 mt-10">
          {ctaSections.map((cta, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-left"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {cta.title}
              </h3>
              <p className="text-gray-700 mb-4">{cta.description}</p>
              <a
                href={cta.buttonLink}
                className="inline-block bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                {cta.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealEstateExpertSection;
