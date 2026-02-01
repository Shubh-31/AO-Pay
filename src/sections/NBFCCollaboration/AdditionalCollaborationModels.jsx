"use client";

import { motion } from "framer-motion";

export default function AdditionalCollaborationModels() {
  const models = [
    {
      title: "Co-Lending with Banks",
      structure:
        "Banks and NBFCs jointly originate loans with shared risk and profit distribution, supported by fintech credit assessment tools for efficient risk management.",
      parameters: [
        "Risk Distribution: NBFCs hold minimum 20% risk, banks manage remaining 80%",
        "Fixed Rate Loans: Blended interest rate based on each lender's risk proportion",
        "Floating Rate Loans: Weighted rate reflecting contribution percentages",
        "Loan Management: Shared escrow account with unified borrower statements",
        "Benefits: Improved borrower experience and simplified transactions",
      ],
    },
    {
      title: "On-Lending Model",
      structure:
        "Banks provide wholesale loans to NBFCs, who then retail these funds to end-customers. This cascade lending structure benefits all parties.",
      parameters: [
        "For NBFCs: Expanded reach and access to lower-cost funding from banks",
        "For Banks: Achieve Priority Sector Lending (PSL) targets with favorable interest rates",
        "PSL Classification: Loans may qualify as priority sector based on end-use",
        "Scalability: Banks leverage NBFC distribution without building infrastructure",
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-white">
      {/* Section Heading */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Additional Collaboration Models for Financial Innovation
        </motion.h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Beyond the core three models, NBFCs can explore advanced collaboration
          frameworks that combine banking partnerships with fintech
          capabilities.
        </p>
      </div>

      {/* Model Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {models.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-300 rounded-l-2xl" />

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {m.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {m.structure}
            </p>

            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
              {m.parameters.map((param, idx) => (
                <li key={idx}>{param}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
