"use client";

import { motion } from "framer-motion";

const UtilitiesCTASection = () => {
  const ctaItems = [
    {
      imgSrc:
        "/assets/UtilitiesAndRecharge/Ready to Transform Your Utility and Recharge Operations/Utility Payment Solutions.png",
      title: "Utility Payment Solutions",
      description:
        "Comprehensive bill payment processing, automated collections, and customer management tools designed for utility companies and service aggregators.",
      buttonText: "Explore Utility Solutions",
    },
    {
      imgSrc:
        "/assets/UtilitiesAndRecharge/Ready to Transform Your Utility and Recharge Operations/Recharge Service Platform.png",
      title: "Recharge Service Platform",
      description:
        "Complete recharge infrastructure for mobile, DTH, and digital services with real-time processing, agent management, and revenue optimization tools.",
      buttonText: "Explore Recharge Platform",
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
          Ready to Transform Your Utility and Recharge Operations?
        </motion.h2>

        {/* Subheading */}
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Launch or optimize your utility payment platform with AOPAY's comprehensive solution. From bill payments to recharge services, we provide everything needed to build successful, scalable service operations.
        </p>

        {/* CTA Items */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {ctaItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-black hover:shadow-md transition"
            >
              <img src = {item.imgSrc} alt = {item.title} className="w-6 mb-2" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <button className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition">
                {item.buttonText}
              </button>
            </div>
          ))}
        </motion.div>

        {/* Closing Paragraph */}                 
        <p className="text-gray-700 max-w-3xl mx-auto text-md">
          As the utilities and digital services industry continues evolving with smart infrastructure, IoT integration, and digital transformation initiatives, having secure, scalable payment infrastructure is essential for competitive advantage and sustainable growth. AOPAY's comprehensive platform ensures your business stays at the forefront of service innovation while maintaining operational excellence, customer satisfaction, and revenue optimization in the dynamic utilities and services market.
        </p>

        {/* Final CTA */}
        <div className="mt-8">
          <h3 className="text-md md:text-xl font-semibold text-gray-900 mb-4">
            Ready to revolutionize utility and recharge services? Join leading service providers and utility companies already using AOPAY to transform their payment operations and deliver exceptional customer experiences.
          </h3>
          <button className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default UtilitiesCTASection;
