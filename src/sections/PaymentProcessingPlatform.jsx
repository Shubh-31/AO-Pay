"use client";

import { motion } from "framer-motion";

const PaymentProcessingPlatform = () => {
  const sections = [
    {
      title: "Multi-Channel Payment Processing",
      desc: "Accept payments through multiple channels with our unified API. Support online transactions, in-store payments, mobile apps, and custom integrations.",
      points: [
        "Credit & Debit Card Processing",
        "Digital Wallet Integration",
        "Bank Transfer Support",
        "QR Code Payments",
        "Recurring Billing",
      ],
      imgSrc:
        "/assets/ConnectedBanking/Complete Online Payment Processing Platform/Multi-Channel Payment Processing.png",
    },
    {
      title: "Developer-First API Design",
      desc: "RESTful API with comprehensive documentation, SDKs for popular languages, and sandbox environment for seamless integration testing.",
      points: [
        "Comprehensive API Documentation",
        "Multiple Programming Language SDKs",
        "Sandbox Testing Environment",
        "Webhook Integration",
        "Real-time Transaction Status",
      ],
      imgSrc:
        "/assets/ConnectedBanking/Complete Online Payment Processing Platform/Developer-First API Design.png",
    },
    {
      title: "Enterprise Security & Compliance",
      desc: "Bank-grade security with PCI DSS compliance, advanced fraud detection, and comprehensive risk management tools.",
      points: [
        "PCI DSS Level 1 Compliance",
        "End-to-End Encryption",
        "Advanced Fraud Detection",
        "3D Secure Authentication",
        "Comprehensive Audit Trails",
      ],
      imgSrc:
        "/assets/ConnectedBanking/Complete Online Payment Processing Platform/Enterprise Security & Compliance.png",
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
          AOPAY Connected Banking & Payment Processing Platform for Businesses
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto"
        >
          Our API‑first solution empowers secure online transactions for
          e‑commerce and SaaS platforms. Accept credit cards, digital wallets,
          bank transfers and emerging payment rails—all through one robust API.
          Built by developers, trusted by enterprises.
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
              <img
                src={sec.imgSrc}
                alt={sec.title}
                className="w-6 mb-2 mx-auto"
              />
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

export default PaymentProcessingPlatform;
