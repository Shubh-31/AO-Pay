"use client";

import { motion } from "framer-motion";
import { CheckCircle, DollarSign } from "lucide-react";

const walletMonetizationContent = [
  {
    title: "Monetize Your Wallet Platform",
    description:
      "Unlock revenue opportunities and optimize profitability with flexible fee structures, advanced analytics, and loyalty programs built for modern digital wallets.",
    points: [
      {
        heading: "Flexible Revenue Models",
        items: [
          "Transaction fees on wallet-to-wallet transfers",
          "Top-up fees with percentage or flat rate models",
          "Withdrawal fees to bank accounts or cards",
          "Premium wallet features and subscription tiers",
          "Merchant fees for payment acceptance",
        ],
      },
      {
        heading: "Customizable Fee Management",
        items: [
          "Configure transaction fees by user segments",
          "Volume-based pricing tiers for high-value users",
          "Fee bearer configuration (sender or receiver)",
          "Dynamic pricing based on payment method",
          "Promotional fee waivers and discounts",
        ],
      },
      {
        heading: "Advanced Analytics & Reporting",
        items: [
          "Real-time wallet usage and transaction analytics",
          "User behavior and spending pattern insights",
          "Revenue tracking and fee collection reports",
          "Wallet balance distribution analysis",
          "Churn prediction and retention metrics",
        ],
      },
      {
        heading: "Loyalty & Engagement Features",
        items: [
          "Cashback and rewards program integration",
          "Referral bonuses credited to wallets",
          "Gamification with points and achievements",
          "Promotional campaigns and wallet incentives",
        ],
      },
    ],
    buttons: [
      { text: "Explore Monetization Options", link: "/wallet-monetization" },
    ],
  },
];

export const WalletMonetizationSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">
        {walletMonetizationContent.map((block, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">{block.title}</h2>
            <p className="text-gray-600 text-lg">{block.description}</p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {block.points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="text-green-600 w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {point.heading}
                    </h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {point.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {block.buttons && (
              <div className="mt-6 flex flex-wrap gap-4">
                {block.buttons.map((btn, i) => (
                  <a
                    key={i}
                    href={btn.link}
                    className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition"
                  >
                    {btn.text}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
