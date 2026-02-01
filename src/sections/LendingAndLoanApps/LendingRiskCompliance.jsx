"use client";

import { motion } from "framer-motion";
import { Shield, FileText, BarChart2, Lock } from "lucide-react";

const LendingRiskCompliance = () => {
  const riskFeatures = [
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      heading: "Real-Time Fraud Detection",
      description:
        "Advanced machine learning algorithms monitor loan applications and disbursements for fraudulent patterns, protecting your business from identity theft, synthetic fraud, and application manipulation.",
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      heading: "Regulatory Compliance Automation",
      description:
        "Automated compliance monitoring ensures adherence to RBI guidelines, fair practices code, and industry regulations. Generate required reports, maintain audit trails, and stay updated with changing regulatory requirements.",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-green-500" />,
      heading: "Portfolio Risk Analytics",
      description:
        "Comprehensive risk assessment tools analyze portfolio performance, predict default probabilities, and optimize lending strategies based on historical data and market trends.",
    },
    {
      icon: <Lock className="w-6 h-6 text-purple-500" />,
      heading: "Data Security & Privacy",
      description:
        "Enterprise-grade security infrastructure protects sensitive borrower data with encryption, access controls, and secure data storage compliant with data protection regulations.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Advanced Risk Management & Regulatory Compliance
        </motion.h2>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
  {riskFeatures.map((feature, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition hover:-translate-y-1 flex flex-col gap-4"
    >
      {/* Icon + Heading in one line */}
      <div className="flex items-center gap-1">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">
          {feature.heading}
        </h3>
      </div>

      {/* Description centered */}
      <p className="text-gray-600 text-base leading-relaxed text-center">
        {feature.description}
      </p>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default LendingRiskCompliance;
