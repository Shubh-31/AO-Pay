"use client";

import { motion } from "framer-motion";

const UtilitiesExpertSupport = () => {
  const supportPoints = [
    {
      imgSrc:
        "/assets/UtilitiesAndRecharge/Expert Support for Utilities and Recharge Platform Optimization/Platform Implementation.png",
      title: "Platform Implementation",
      description:
        "Comprehensive technical implementation including system integration, service provider onboarding, payment gateway setup, and testing with dedicated project management and go-live support.",
    },
    {
      imgSrc:
        "/assets/UtilitiesAndRecharge/Expert Support for Utilities and Recharge Platform Optimization/Revenue Optimization.png",
      title: "Revenue Optimization",
      description:
        "Data-driven analysis and recommendations to improve transaction success rates, reduce operational costs, and maximize revenue through optimized pricing strategies and service offerings.",
    },
    {
      imgSrc:
        "/assets/UtilitiesAndRecharge/Expert Support for Utilities and Recharge Platform Optimization/Compliance and Security.png",
      title: "Compliance and Security",
      description:
        "Expert guidance on regulatory requirements, security standards, and compliance framework implementation for utilities and financial services operations.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 inline-block pb-2"
        >
          Expert Support for Utilities and Recharge Platform Optimization
        </motion.h2>

        {/* Subheading */}
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Partner with AOPAY's utilities payment experts to maximize your
          platform's performance, optimize revenue collection, and enhance
          customer satisfaction through specialized guidance and ongoing
          support.
        </p>

        {/* Support Points */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
        >
          {supportPoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-black hover:shadow-md transition"
            >
              <img src = {point.imgSrc} alt = {point.title} className="w-6 mb-2 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-700">{point.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Button */}
        <div className="mt-8">
          <button className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default UtilitiesExpertSupport;
