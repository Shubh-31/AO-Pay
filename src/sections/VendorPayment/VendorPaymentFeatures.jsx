"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const vendorFeatures = [
  {
    imgSrc:
      "/assets/VendorPayment/Advanced Vendor Payment & Payout Features/Flexible Payment Processing Options.png",
    heading3: "Flexible Payment Processing Options",
    points: [
      "Multi-Channel Payment Disbursement",
      "Single payout API for individual vendor payments",
      "Bulk payment processing for high-volume disbursements",
      "Payment link generation for vendor self-service collection",
      "Direct bank account transfers (NEFT, RTGS, IMPS)",
      "Digital wallet payouts (UPI, mobile wallets)",
      "Card-based disbursements for instant payments",
    ],
  },
  {
    imgSrc:
      "/assets/VendorPayment/Advanced Vendor Payment & Payout Features/Automated Vendor Management.png",
    heading3: "Automated Vendor Management",
    points: [
      "Comprehensive Vendor Onboarding & Verification",
      "Digital vendor registration with document collection",
      "Automated KYB (Know Your Business) verification",
      "Bank account validation and beneficiary verification",
      "Tax compliance documentation (W-9, 1099, TIN verification)",
      "Vendor risk scoring and assessment",
      "Payment method preferences and configuration",
      "Vendor portal for self-service account management",
    ],
  },
  {
    imgSrc:
      "/assets/VendorPayment/Advanced Vendor Payment & Payout Features/Intelligent Payment Workflow Automation.png",
    heading3: "Intelligent Payment Workflow Automation",
    points: [
      "Approval & Control Management",
      "Multi-level approval workflows with customizable rules",
      "Role-based access control and permissions",
      "Payment scheduling and batch processing",
      "Automated payment holds and review queues",
      "Spending limits and threshold controls",
      "Duplicate payment detection and prevention",
      "Exception handling and escalation workflows",
      "Audit trail for all payment activities",
    ],
  },
  {
    imgSrc:
      "/assets/VendorPayment/Advanced Vendor Payment & Payout Features/Real-Time Payment Tracking & Reconciliation.png",
    heading3: "Real-Time Payment Tracking & Reconciliation",
    points: [
      "End-to-End Payment Visibility",
      "Real-time payment status tracking and notifications",
      "Automated reconciliation with bank statements",
      "Transaction-level reporting and analytics",
      "Failed payment handling and retry logic",
      "Settlement reports and cash flow forecasting",
      "ERP and accounting system integration",
      "Customizable dashboards for AP teams",
    ],
  },
  {
    imgSrc:
      "/assets/VendorPayment/Advanced Vendor Payment & Payout Features/Security & Compliance Controls.png",
    heading3: "Security & Compliance Controls",
    points: [
      "Enterprise Security & Regulatory Compliance",
      "PCI DSS Level 1 compliance for card transactions",
      "End-to-end encryption for sensitive payment data",
      "Multi-factor authentication for payment approvals",
      "Fraud detection and prevention mechanisms",
      "AML screening and sanctions list checking",
      "Comprehensive audit logs and compliance reporting",
      "GDPR and data privacy compliance",
    ],
  },
  {
    imgSrc:
      "/assets/VendorPayment/Advanced Vendor Payment & Payout Features/Developer-Friendly Integration.png",
    heading3: "Developer-Friendly Integration",
    points: [
      "API-First Architecture & Tools",
      "RESTful API with comprehensive documentation",
      "SDK support for major programming languages",
      "Webhook notifications for real-time updates",
      "Sandbox environment for testing and development",
      "Postman collections and API examples",
      "Rate limiting and throttling controls",
      "24/7 developer support and assistance",
    ],
  },
];

export default function VendorPaymentsFeatures({ btnText, btnLink }) {
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
          Advanced Vendor Payment & Payout Features
        </motion.h2>

        {/* H3 Sections */}
        {vendorFeatures.map((feature, index) => (
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
                className="w-8 h-8"
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

        {/* Optional CTA Button */}
        {btnText && btnLink && (
          <div className="text-center mt-8">
            <a
              href={btnLink}
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              {btnText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
