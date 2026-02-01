"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const walletFeatures = [
  {
    heading3: "Wallet Creation & Management",
    points: [
      "Loyalty points and virtual currency wallets",
      "Multi-wallet support per user account",
      "Real-time balance tracking and updates",
      "Wallet freeze/unfreeze capabilities",
      "Sub-wallet creation for business accounts",
      "Automated wallet provisioning via API",
    ],
    imgSrc:
      "/assets/EWallet/Comprehensive E-Wallet Features & Capabilities/Wallet Creation & Management.png",
  },
  {
    heading3: "Fund Management & Transfers",
    points: [
      "Wallet top-ups via cards, bank transfers, UPI",
      "Wallet-to-wallet instant transfers",
      "Single payout to bank accounts",
      "Bulk payout processing for marketplace settlements",
      "Payment link generation for wallet top-ups",
      "QR code payments for in-store and online",
      "Request money and split payment features",
      "Scheduled and recurring payments",
    ],
    imgSrc:
      "/assets/EWallet/Comprehensive E-Wallet Features & Capabilities/Fund Management & Transfers.png",
  },
  {
    heading3: "User Onboarding & Verification",
    points: [
      "Self-registration with email or phone verification",
      "Two-factor authentication (2FA) for security",
      "Automated KYC/KYB with document verification",
      "Risk-based wallet limits and tier upgrades",
      "User profile and settings management",
      "Linked cards and bank accounts",
      "Biometric authentication support",
    ],
    imgSrc:
      "/assets/EWallet/Comprehensive E-Wallet Features & Capabilities/User Onboarding & Verification.png",
  },
  {
    heading3: "Transaction Processing & Settlement",
    points: [
      "Instant wallet-to-wallet transfers",
      "Real-time balance updates and notifications",
      "Automated settlement and reconciliation",
      "Transaction holds and pending amounts",
      "Refund and chargeback processing",
      "Split payments for multiple recipients",
      "Fee management and commission distribution",
    ],
    imgSrc:
      "/assets/EWallet/Comprehensive E-Wallet Features & Capabilities/Transaction Processing & Settlement.png",
  },
  {
    heading3: "Security & Compliance Framework",
    points: [
      "PCI DSS Level 1 compliance for card transactions",
      "End-to-end encryption for all sensitive data",
      "AML transaction monitoring and suspicious activity alerts",
      "Fraud detection with machine learning algorithms",
      "Wallet freeze capabilities for compliance",
      "Comprehensive audit trails and activity logs",
      "GDPR and data privacy compliance",
    ],
    imgSrc:
      "/assets/EWallet/Comprehensive E-Wallet Features & Capabilities/Security & Compliance Framework.png",
  },
  {
    heading3: "Merchant & Business Wallets",
    points: [
      "Merchant wallet accounts with settlement management",
      "Payment acceptance via wallet balance",
      "Multi-user access with role-based permissions",
      "Transaction reporting and analytics",
      "Automatic settlement scheduling",
      "Invoice generation and payment requests",
      "Reconciliation tools for accountants",
    ],
    imgSrc:
      "/assets/EWallet/Comprehensive E-Wallet Features & Capabilities/Merchant & Business Wallets.png",
  },
];

export const EWalletFeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          E-Wallet Features & Capabilities for Businesses
        </motion.h2>

        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          Everything you need to build, launch, and scale digital wallet
          solutions for your platform with enterprise-grade security and
          performance.
        </p>

        {/* ✅ Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {walletFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl shadow-md p-8 space-y-4 hover:shadow-xl transition-shadow duration-300 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={feature.imgSrc}
                  alt={feature.heading3}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
                <h3 className="text-2xl font-semibold text-gray-800">
                  {feature.heading3}
                </h3>
              </div>

              <ul className="mt-4 space-y-2">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="text-green-600 w-5 h-5" />
                    </div>
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
};
