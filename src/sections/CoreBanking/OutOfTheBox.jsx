"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function OutOfTheBox() {
  const [openIndex, setOpenIndex] = useState(null);

  const features = [
    {
      title: "Remote Customer Onboarding",
      items: [
        "Self-registration via email or phone",
        "Flexible survey and document uploading system",
        "Identity verification and utility bill processing",
        "Automated KYC/KYB via pre-integrated vendors",
        "Manual verification through back-office interface",
        "Digital signature integration",
      ],
    },
    {
      title: "Comprehensive Transaction Processing",
      items: [
        "Top-ups and withdrawals management",
        "Payment gateway operations with vendor integration",
        "In-system transfers and payments",
        "Real-time currency exchange capabilities",
        "External currency exchange integration",
        "Payment links and QR-code payments",
        "Refund and chargeback processing",
      ],
    },
    {
      title: "Flexible Payment Acceptance",
      items: [
        "In-store payments via credit/debit cards",
        "Digital wallet integration (Apple Pay, Google Pay, etc.)",
        "Bank account direct payments",
        "Online checkout page payments",
        "Tip and gratuity acceptance",
      ],
    },
    {
      title: "AML/Anti-Fraud Protection",
      items: [
        "Real-time suspicious transaction identification",
        "Customer confirmation protocols for fraud prevention",
        "Proof of income verification for AML compliance",
        "Account freeze/unfreeze functionality",
        "Automated case closure workflows",
        "Comprehensive audit trail maintenance",
      ],
    },
    {
      title: "Built-in CRM System",
      items: [
        "Centralized customer details and activity tracking",
        "Multi-channel communication management",
        "In-system messaging service for customer support",
        "Customer interaction history and notes",
        "Automated follow-up and reminder systems",
        "Performance analytics and reporting",
      ],
    },
    {
      title: "User Actions Log & Security",
      items: [
        "Comprehensive Activity Logging: Complete log of system activities by clients and team members",
        "Detailed Session Tracking: Full details including logins, sessions, and actions performed",
        "Investigation Tools: Valuable data for audit and investigation purposes",
        "Real-time Monitoring: Live tracking of all banking operations and user activities",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Out-of-the-Box Digital Banking Features for Quick Launch
      </h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        AOPAY Core Banking Solution comes with comprehensive pre-built features
        to ensure impeccable customer service from day one. Everything you need
        to launch a modern digital bank is included in our platform.
      </p>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="relative bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <h3 className="flex items-center justify-center text-lg font-semibold mb-3 text-gray-900">
              {feature.title}
              <ChevronDown className="ml-2 w-5 h-5 text-gray-700" />
            </h3>
            {/* Animate Expand/Collapse */}
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-3 text-left">
                    {feature.items.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
