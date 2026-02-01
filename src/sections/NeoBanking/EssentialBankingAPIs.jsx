"use client";

import { motion } from "framer-motion";
import { CreditCard, Wallet, Shield, Banknote } from "lucide-react";

export const EssentialBankingAPIs = () => {
  const apiSections = [
    {
      icon: <CreditCard className="w-7 h-7 text-indigo-600" />,
      title: "Payment Processing APIs",
      description:
        "Enable seamless payment acceptance across multiple channels with our comprehensive payment APIs:",
      items: [
        "Payment Gateway API: Accept credit cards, debit cards, and net banking payments with PCI DSS compliance built-in.",
        "UPI & QR Payment API: Integrate UPI payments and dynamic QR codes for instant money transfers.",
        "Payment Collection API: Streamline bulk payment collection for recurring deposits and loan EMIs.",
        "PayOut API: Automate disbursements, refunds, and instant payouts to customers and merchants.",
        "Payment Link: Generate secure payment links for card issuance fees, account upgrades, and service charges.",
      ],
    },
    {
      icon: <Wallet className="w-7 h-7 text-indigo-600" />,
      title: "Account & Wallet Services",
      description:
        "Provide core banking functionality with flexible account management solutions:",
      items: [
        "Virtual Account API: Create unique virtual accounts for each customer to receive payments and manage funds.",
        "E-Wallet Integration: Enable digital wallet features for prepaid accounts and stored value services.",
        "Connected Banking: Aggregate customer accounts from multiple banks for comprehensive financial insights.",
        "ESCROW Services: Secure fund holding for marketplace transactions and third-party payment processing.",
      ],
    },
    {
      icon: <Shield className="w-7 h-7 text-indigo-600" />,
      title: "KYC & Verification APIs",
      description:
        "Streamline customer onboarding and meet regulatory compliance requirements:",
      items: [
        "Aadhaar Verification API: Real-time Aadhaar authentication for instant customer verification.",
        "PAN Verification API: Validate PAN cards and retrieve taxpayer information.",
        "Bank Account Verification API: Verify account ownership through penny drop or account statement analysis.",
        "GST Verification API: Authenticate business customers and verify GST registration details.",
      ],
    },
    {
      icon: <Banknote className="w-7 h-7 text-indigo-600" />,
      title: "Lending & Deposit Products",
      description:
        "Expand your neo bank's product offerings with lending and savings features:",
      items: [
        "CIBIL API: Pull credit reports and scores for loan underwriting and risk assessment.",
        "FD & RD API: Enable fixed deposit and recurring deposit creation and management.",
        "E-NACH: Automate loan EMI collection and recurring payment mandates.",
        "AEPS API: Provide Aadhaar-enabled payment services for cash withdrawal and balance inquiry.",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Essential Banking APIs for Neo Banks
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {apiSections.map((section, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 flex flex-col space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                {section.icon}
                <h3 className="text-2xl font-semibold text-gray-900">{section.title}</h3>
              </div>

              <p className="text-gray-600 leading-relaxed">{section.description}</p>

              <ul className="space-y-2 list-disc list-inside text-gray-700">
                {section.items.map((item, i) => (
                  <li key={i} className="leading-snug">
                    {item}
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
