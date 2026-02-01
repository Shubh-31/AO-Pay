"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const infraFeatures = [
  {
    heading3: "Pre-Integrated Payment Ecosystem",
    points: [
      "Payment Acceptance: Credit/debit cards, digital wallets, bank transfers",
      "Card Issuance: Virtual and physical card programs",
      "KYC/KYB Compliance: Automated identity verification with trusted vendors",
      "AML & Fraud Prevention: Real-time transaction monitoring and risk management",
      "Banking Partners: Direct connections to major banking networks",
    ],
  },
  {
    heading3: "Flexible Deployment Models",
    points: [
      "Hybrid-Cloud Model: Fast, affordable launch with managed infrastructure",
      "Source Code License: Full control and independence with complete code access",
      "Customization Support: Tailor the solution to meet specific regulatory and business needs",
    ],
  },
];

export default function EnterprisePaymentInfra() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* H2 */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Enterprise-Grade Payment Infrastructure
        </motion.h2>

        {/* H3 Sections */}
        {infraFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 space-y-4 hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-green-600">
              {feature.heading3}
            </h3>
            <ul className="mt-2 space-y-2 text-gray-700 list-none">
              {feature.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="text-green-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
