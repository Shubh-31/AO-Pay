"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, ExternalLink, Clipboard, Check } from "lucide-react";

const apiEndpoints = [
  {
    title: "Create Co-Lending Partnership",
    method: "POST",
    endpoint: "/api/v1/colending/partnership/create",
    payload: `{
  "bank_id": "BANK001",
  "nbfc_id": "NBFC001",
  "partnership_model": "bank_led",
  "sharing_ratio": { "bank": 80, "nbfc": 20 },
  "product_types": ["personal_loan", "msme_loan"],
  "psl_eligible": true
}`,
  },
  {
    title: "Originate Loan",
    method: "POST",
    endpoint: "/api/v1/colending/loan/originate",
    payload: `{
  "borrower_id": "CUST12345",
  "loan_amount": 500000,
  "tenure_months": 24,
  "partnership_id": "PART001",
  "credit_score": 750
}`,
  },
  {
    title: "Bulk Loan Disbursement",
    method: "POST",
    endpoint: "/api/v1/colending/disbursement/bulk",
    payload: `{
  "partnership_id": "PART001",
  "loans": [
    {"loan_id": "LOAN001", "amount": 500000},
    {"loan_id": "LOAN002", "amount": 300000}
  ],
  "split_mode": "auto"
}`,
  },
];

export const DeveloperFriendlyAPIs = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (payload, index) => {
    navigator.clipboard.writeText(payload);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2s
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Developer-Friendly Co-Lending Solution
        </motion.h2>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="/api-docs"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 flex items-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            View API Documentation
          </a>
          <a
            href="/sandbox"
            className="px-6 py-3 bg-gray-200 text-gray-900 font-medium rounded-xl shadow hover:bg-gray-300 flex items-center gap-2"
          >
            <Code className="w-5 h-5" />
            Access Sandbox Environment
          </a>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {apiEndpoints.map((api, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {api.title}
                </h3>
              </div>
              <p className="font-mono bg-gray-100 p-3 rounded text-sm text-gray-700 mb-2">
                <span className="font-bold">{api.method}</span> {api.endpoint}
              </p>
              <pre className="bg-gray-50 p-3 rounded overflow-x-auto text-sm text-gray-800 mb-3">
                {api.payload}
              </pre>
              <button
                onClick={() => handleCopy(api.payload, idx)}
                className="flex items-center gap-2 px-4 py-2 rounded bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition"
              >
                {copiedIndex === idx ? (
                  <>
                    <Check className="w-4 h-4" /> Copied
                  </>
                ) : (
                  <>
                    <Clipboard className="w-4 h-4" /> Copy Payload
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
