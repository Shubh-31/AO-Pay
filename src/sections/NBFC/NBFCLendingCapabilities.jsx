"use client";

import { motion } from "framer-motion";

export default function NBFCLendingCapabilities() {
  const features = [
    {
      imgSrc:
        "/assets/NBFC/Advanced NBFC Lending Solution Capabilities/Digital Customer Onboarding.png",
      title: "Digital Customer Onboarding",
      points: [
        "Video KYC integration",
        "Aadhaar-based eKYC",
        "Biometric authentication",
        "Document AI for verification",
        "Customer risk profiling",
      ],
    },
    {
      imgSrc:
        "/assets/NBFC/Advanced NBFC Lending Solution Capabilities/Intelligent Underwriting.png",
      title: "Intelligent Underwriting",
      points: [
        "Machine learning credit models",
        "Alternative data integration",
        "Automated decision engines",
        "Customizable scoring algorithms",
        "Real-time approval workflows",
      ],
    },
    {
      imgSrc:
        "/assets/NBFC/Advanced NBFC Lending Solution Capabilities/Collections & Recovery.png",
      title: "Collections & Recovery",
      points: [
        "Automated reminder systems",
        "Multi-channel communication",
        "Agent management tools",
        "Payment gateway integration",
        "Legal case management",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Advanced NBFC Lending Software Capabilities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-4xl mx-auto"
        >
          AOPAY NBFC Lending Solution provides end-to-end lending capabilities
          designed specifically for the Indian NBFC ecosystem. From origination
          to collections, every aspect of the lending process is digitized and
          optimized for maximum efficiency.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-left hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={feature.imgSrc}
              alt={feature.title}
              className="w-6 h-auto mb-2"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {feature.title}
            </h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              {feature.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
