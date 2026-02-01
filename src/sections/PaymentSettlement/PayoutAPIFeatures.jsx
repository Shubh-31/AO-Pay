"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const payoutFeatures = [
  {
    imgSrc:
      "/assets/PaymentSettlement/Comprehensive Payout API Features for Modern Businesses/Single & Bulk Payout Processing.png",
    heading3: "Single & Bulk Payout Processing",
    points: [
      "Instant single payouts via IMPS/UPI",
      "Bulk payment processing with Excel upload",
      "Automated retry logic for failed transactions",
      "Real-time status tracking and notifications",
    ],
  },
  {
    imgSrc:
      "/assets/PaymentSettlement/Comprehensive Payout API Features for Modern Businesses/Multi-Channel Settlement Options.png",
    heading3: "Multi-Channel Settlement Options",
    points: [
      "Domestic bank account transfers",
      "UPI instant settlements",
      "Digital wallet disbursements",
      "Card settlements and mobile money",
    ],
  },
  {
    imgSrc:
      "/assets/PaymentSettlement/Comprehensive Payout API Features for Modern Businesses/Payment Link Generation.png",
    heading3: "Payment Link Generation",
    points: [
      "Branded payment link pages",
      "Multi-channel link distribution",
      "Flexible redemption options",
      "Link expiry and security controls",
    ],
  },
  {
    imgSrc:
      "/assets/PaymentSettlement/Comprehensive Payout API Features for Modern Businesses/Advanced Security & Compliance.png",
    heading3: "Advanced Security & Compliance",
    points: [
      "PCI DSS compliant infrastructure",
      "End-to-end encryption",
      "Fraud detection and prevention",
      "Complete transaction audit logs",
    ],
  },
  {
    imgSrc:
      "/assets/PaymentSettlement/Comprehensive Payout API Features for Modern Businesses/Automated Reconciliation & Reporting.png",
    heading3: "Automated Reconciliation & Reporting",
    points: [
      "Automated settlement reconciliation",
      "Customizable financial reports",
      "Transaction-level data export",
      "ERP system integration support",
    ],
  },
  {
    imgSrc:
      "/assets/PaymentSettlement/Comprehensive Payout API Features for Modern Businesses/Flexible Fee & Limit Management.png",
    heading3: "Flexible Fee & Limit Management",
    points: [
      "Dynamic fee configuration",
      "Segment-based pricing models",
      "Transaction and turnover limits",
      "Individual merchant tariffs",
    ],
  },
];

export default function PayoutApiFeatures() {
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
          Comprehensive Payout API Features for Modern Businesses
        </motion.h2>

        {/* H3 Sections */}
        {payoutFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 space-y-4 hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Icon + Title in one line */}
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
    </section>
  );
}
