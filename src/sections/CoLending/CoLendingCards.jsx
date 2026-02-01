"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const coLendingFeatures = [
  {
    imgSrc:
      "/assets/CoLending/Comprehensive Co-Lending Platform Features/Digital Borrower Onboarding & KYC.png",
    heading3: "Digital Borrower Onboarding & KYC",
    heading4: "Unified Customer Acquisition",
    points: [
      "Self-service loan application portal for borrowers",
      "Automated document collection and verification",
      "Integrated KYC/KYB processing with leading vendors",
      "Multi-party credit assessment and approval workflows",
      "Real-time application status tracking for all partners",
      "Consent management compliant with data protection norms",
    ],
  },
  {
    imgSrc:
      "/assets/CoLending/Comprehensive Co-Lending Platform Features/Intelligent Loan Origination & Decisioning.png",
    heading3: "Intelligent Loan Origination & Decisioning",
    heading4: "Automated Credit Assessment",
    points: [
      "AI-powered credit scoring and risk assessment",
      "Integration with credit bureaus and alternative data sources",
      "Customizable underwriting rules for each partnership",
      "Multi-level approval workflows for bank and NBFC",
      "Automated loan agreement generation and e-signing",
      "Real-time decisioning APIs for instant approvals",
    ],
  },
  {
    imgSrc:
      "/assets/CoLending/Comprehensive Co-Lending Platform Features/Multi-Party Disbursement & Payment Processing.png",
    heading3: "Multi-Party Disbursement & Payment Processing",
    heading4: "Seamless Fund Management",
    points: [
      "Single payout for individual loan disbursements",
      "Bulk disbursement processing for high-volume operations",
      "Automated fund split as per co-lending ratio",
      "Payment link generation for borrower collections",
      "Multi-bank account management and reconciliation",
      "Real-time payment tracking and settlement",
      "Escrow account management for compliance",
      "Automated refund and reversal processing",
    ],
  },
  {
    imgSrc:
      "/assets/CoLending/Comprehensive Co-Lending Platform Features/Comprehensive Loan Servicing & Collections.png",
    heading3: "Comprehensive Loan Servicing & Collections",
    heading4: "Portfolio Management & EMI Processing",
    points: [
      "Automated EMI schedule generation and tracking",
      "Multi-channel payment collection (UPI, NACH, cards)",
      "Intelligent payment allocation between partners",
      "Delinquency management and collection workflows",
      "Pre-closure and part-payment processing",
      "Automated interest calculation and accrual",
    ],
  },
  {
    imgSrc:
      "/assets/CoLending/Comprehensive Co-Lending Platform Features/Regulatory Compliance & Risk Management.png",
    heading3: "Regulatory Compliance & Risk Management",
    heading4: "RBI-Compliant Operations",
    points: [
      "Co-lending guidelines compliance automation",
      "Priority sector lending (PSL) classification and tracking",
      "AML/CFT monitoring and suspicious transaction alerts",
      "Regulatory reporting automation (RBI, credit bureaus)",
      "Comprehensive audit trail and investigation tools",
      "Risk exposure monitoring and portfolio analytics",
      "Fraud detection and prevention mechanisms",
    ],
  },
  {
    imgSrc:
      "/assets/CoLending/Comprehensive Co-Lending Platform Features/Partnership Management & Analytics.png",
    heading3: "Partnership Management & Analytics",
    heading4: "Co-Lending Operations Dashboard",
    points: [
      "Real-time portfolio performance monitoring",
      "Partner-wise exposure and contribution tracking",
      "Customizable reports for banks and NBFCs",
      "Settlement and reconciliation automation",
      "Revenue sharing and commission calculations",
      "Analytics and system health monitoring",
    ],
  },
];

export const CoLendingCards = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 mx-auto text-center">
      <h2 className="text-3xl mb-4">
        Comprehensive Co-Lending Features For Borrowers & Lenders
      </h2>
      <p className="text-xl mb-4 text-gray-700">
        Everything you need to launch and scale co-lending partnerships with
        automated operations, compliance, and portfolio management.
      </p>
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2">
        {coLendingFeatures.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={feature.imgSrc}
              alt={feature.heading3}
              className="w-8 h-auto mx-auto"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {feature.heading3}
            </h3>
            <h4 className="text-lg font-medium text-gray-700 mb-4">
              {feature.heading4}
            </h4>
            <ul className="space-y-2">
              {feature.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
