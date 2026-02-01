"use client";

import { motion } from "framer-motion";

const TechIntegrationSection = () => {
  const features = [
    {
      imgSrc:
        "/assets/UtilitiesAndRecharge/Advanced Technology Integration and Automation/Smart Transaction Routing.png",
      title: "Smart Transaction Routing",
      description:
        "Intelligent transaction routing optimizes success rates and processing costs through dynamic provider selection, load balancing, and automatic failover mechanisms for maximum reliability.",
    },
    {
      imgSrc:
        "/assets/UtilitiesAndRecharge/Advanced Technology Integration and Automation/Real-Time Reconciliation.png",
      title: "Real-Time Reconciliation",
      description:
        "Automated financial reconciliation with real-time transaction matching, automated settlement processing, and comprehensive financial reporting for accurate accounting and cash flow management.",
    },
    {
      imgSrc:
        "/assets/UtilitiesAndRecharge/Advanced Technology Integration and Automation/Fraud Prevention and Security.png",
      title: "Fraud Prevention and Security",
      description:
        "Advanced security measures including transaction monitoring, fraud detection, and risk assessment protect your business and customers while maintaining smooth payment experiences.",
    },
    {
      imgSrc:
        "/assets/UtilitiesAndRecharge/Advanced Technology Integration and Automation/System Integration Capabilities.png",
      title: "System Integration Capabilities",
      description:
        "Easy integration with existing billing systems, customer management platforms, and third-party services through comprehensive documentation and flexible integration options.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 inline-block pb-2"
        >
          Advanced Technology Integration and Automation
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition border-l-4 border-black"
            >
              <img src = {feature.imgSrc} alt = {feature.title} className="w-6 mb-2" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechIntegrationSection;
