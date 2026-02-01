"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const platformFeatures = [
  {
    imgSrc:
      "/assets/PaymentSettlement/Complete Payment Platform Features/Individual & Corporate Client Management.png",
    heading3: "Individual & Corporate Client Management",
    points: [
      "Streamlined onboarding with two-factor authentication (2FA)",
      "Customer profiles with configurable settings",
      "Ongoing KYC/KYB verification with trusted vendors",
      "Linked cards and IBAN account numbers",
      "Send, request, or exchange funds functionality",
      "Payment links and QR code generation",
      "Cash point operations for physical locations",
    ],
  },
  {
    imgSrc:
      "/assets/PaymentSettlement/Complete Payment Platform Features/Merchant-Specific Features.png",
    heading3: "Merchant-Specific Features",
    points: [
      "Offline payment acceptance via POS and QR codes",
      "Online payment gateway with customizable checkout",
      "Dispute resolution for refunds and chargebacks",
      "Comprehensive transaction and settlement reports",
      "Automated invoice and receipt generation",
      "Multi-store management capabilities",
    ],
  },
  {
    imgSrc:
      "/assets/PaymentSettlement/Complete Payment Platform Features/System Administration & Management.png",
    heading3: "System Administration & Management",
    points: [
      "Currency and digital asset creation engine",
      "Flexible fee and transaction limit configuration",
      "Built-in CRM and customer communication tools",
      "Detailed transaction monitoring and analytics",
      "Advanced reporting and business intelligence",
      "AML and anti-fraud officer workspace",
      "Complete user action history and audit trails",
      "Reconciliation and settlement management section",
      "Granular roles and permissions system",
    ],
  },
];

export default function CompletePaymentPlatform() {
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
          Complete Payment Platform Features
        </motion.h2>

        {/* H3 Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 space-y-4 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Icon + title in one line */}
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={feature.imgSrc}
                  alt={feature.heading3}
                  className="w-6 h-auto"
                />
                <h3 className="text-xl font-semibold text-green-600">
                  {feature.heading3}
                </h3>
              </div>

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
      </div>
    </section>
  );
}
