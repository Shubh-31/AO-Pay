"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Lock, FileCheck } from "lucide-react";

const LogisticsSecurity = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-blue-600" />,
      title: "Real-Time Transaction Monitoring",
      description:
        "Monitor all payment transactions in real-time with advanced machine learning algorithms that detect suspicious patterns and prevent fraudulent activities before they impact your operations.",
    },
    {
      icon: <UserCheck className="w-7 h-7 text-blue-600" />,
      title: "Driver Identity Verification",
      description:
        "Comprehensive KYC verification for drivers and partners ensures legitimate onboarding while preventing identity fraud and maintaining regulatory compliance across all operational regions.",
    },
    {
      icon: <Lock className="w-7 h-7 text-blue-600" />,
      title: "Secure Payment Processing",
      description:
        "All transactions processed through PCI DSS compliant infrastructure with end-to-end encryption, ensuring maximum security for sensitive financial data and payment information.",
    },
    {
      icon: <FileCheck className="w-7 h-7 text-blue-600" />,
      title: "Compliance Management",
      description:
        "Automated compliance monitoring ensures adherence to financial regulations, tax requirements, and industry standards while simplifying audit processes and regulatory reporting.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          AOPAY Advanced Security for Logistics Payment Operations
        </motion.h2>

        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          Protect your logistics business with enterprise-grade security
          features designed for the transportation industry. Our comprehensive
          fraud prevention system safeguards driver payments, customer
          transactions, and financial data while maintaining operational
          efficiency.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl shadow-lg p-6 text-left hover:shadow-blue-500/20 transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogisticsSecurity;
