"use client";

import { motion } from "framer-motion";

const walletApiContent = [
  {
    title: "Fast & Easy E-Wallet API Integration for Developers",
    description:
      "Get started quickly with our developer-friendly API designed for seamless wallet integration into your platform, mobile app, or web application.",
    codeSnippets: [
      `POST /api/v1/wallet/create
{
  "user_id": "USER12345",
  "currency": "INR",
  "wallet_type": "personal",
  "initial_balance": 0
}`,
      `POST /api/v1/wallet/transfer
{
  "from_wallet_id": "WALLET001",
  "to_wallet_id": "WALLET002",
  "amount": 50.00,
  "currency": "INR",
  "description": "Payment for services",
  "reference": "TXN-2024-001"
}`,
      `POST /api/v1/wallet/topup
{
  "wallet_id": "WALLET001",
  "amount": 100.00,
  "payment_method": "card",
  "card_token": "tok_xxxxx"
}`,
      `POST /api/v1/wallet/withdraw
{
  "wallet_id": "WALLET001",
  "amount": 200.00,
  "bank_account": {
    "account_number": "XXXX1234",
    "routing_number": "123456789"
  }
}`,
      `GET /api/v1/wallet/{wallet_id}/balance
Returns current wallet balance and transaction history`,
    ],
    buttons: [
      { text: "View API Documentation", link: "/api-docs" },
      { text: "Access Developer Sandbox", link: "/sandbox" },
    ],
  },
];

export const EWalletApiSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-12">
        {walletApiContent.map((block, idx) => (
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

            <div className="space-y-4">
              {block.codeSnippets.map((snippet, i) => (
                <pre
                  key={i}
                  className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm shadow-md"
                >
                  {snippet}
                </pre>
              ))}
            </div>

            {block.buttons && (
              <div className="flex flex-wrap gap-4 mt-4">
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
