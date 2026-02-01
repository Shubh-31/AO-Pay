"use client";

import { motion } from "framer-motion";

const D2CExpertsSection = () => {
  const sections = [
    {
      imgSrc:
        "/assets/FMCG/Build Your D2C Success with AOPAY Experts/Ready to Transform Your Brand's Payment Experience.png",
      title: "Ready to Transform Your Brand's Payment Experience?",
      description:
        "Explore AOPAY D2C Solutions, or create an account instantly to get started. Contact our specialists to design a custom payment platform that accelerates your consumer brand growth and maximizes every customer interaction.",
      buttonText: "Contact Sales",
    },
    {
      imgSrc:
        "/assets/FMCG/Build Your D2C Success with AOPAY Experts/Mobile-First Payment Experience.png",
      title: "Mobile-First Payment Experience",
      description:
        "Optimize for mobile-first consumers with lightning-fast checkout flows, social commerce integration, and app-based payment solutions.",
      buttonText: "Explore Mobile Solutions",
    },
    {
      imgSrc:
        "/assets/FMCG/Build Your D2C Success with AOPAY Experts/Subscription Revenue Optimization.png",
      title: "Subscription Revenue Optimization",
      description:
        "Maximize subscription revenue with intelligent billing, retention tools, and recovery optimization designed for consumer products.",
      buttonText: "Explore Subscription Billing",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Build Your D2C Success with AOPAY Experts
        </motion.h2>

        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          AOPAY consumer brand payment specialists understand the unique
          challenges of direct-to-consumer commerce. We guide you through
          optimizing every aspect of your payment experience to maximize
          conversion, reduce abandoned carts, and build lasting customer
          relationships.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between"
            >
              <img src = {section.imgSrc} alt = {section.title} className="w-8 h-auto mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {section.title}
              </h3>
              <p className="text-gray-700 mb-6">{section.description}</p>
              <button className="mt-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                {section.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default D2CExpertsSection;
