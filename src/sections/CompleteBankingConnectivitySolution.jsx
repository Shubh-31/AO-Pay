"use client";

import { motion } from "framer-motion";

const CompleteBankingConnectivitySolution = () => {
  const sections = [
    {
      title: "Multi-Bank Integration",
      desc: "Connect with hundreds of banks and financial institutions through a single, unified API. Seamlessly access account information, transaction history, and banking services across different providers.",
      points: [
        "Real-time Account Balance Retrieval",
        "Transaction History & Categorization",
        "Multi-Currency Account Support",
        "Cross-Border Banking Connectivity",
        "Automated Bank Reconciliation",
      ],
    },
    {
      title: "Enterprise Security & Compliance",
      desc: "Bank-grade security with comprehensive compliance coverage including Open Banking standards, PSD2, GDPR, and regional financial regulations.",
      points: [
        "OAuth 2.0 & OpenID Connect Authentication",
        "End-to-End Encryption (AES-256)",
        "PCI DSS Level 1 Compliance",
        "Real-time Fraud Detection",
        "Comprehensive Audit Trails",
      ],
    },
    {
      title: "Real-Time Fund Transfers",
      desc: "Enable instant money transfers, bulk disbursements, and automated payment processing with support for multiple payment rails and currencies.",
      points: [
        "Instant & Scheduled Transfers",
        "Bulk Payment Processing",
        "Payment Status Tracking",
        "Multi-Rail Payment Routing",
        "Automated Settlement Reports",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900"
        >
          Complete Banking Connectivity Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto"
        >
          AOPAY Connected Banking API revolutionizes how businesses interact
          with financial institutions. From startups building innovative fintech
          solutions to enterprises streamlining financial operations, AOPAY
          secure API infrastructure provides secure, compliant, and scalable
          banking connectivity across multiple financial institutions and
          payment networks.
        </motion.p>

        {/* Sections Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {sections.map((sec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {sec.title}
              </h3>
              <p className="mt-3 text-gray-600">{sec.desc}</p>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
                {sec.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompleteBankingConnectivitySolution;
