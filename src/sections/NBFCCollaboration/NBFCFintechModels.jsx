"use client";

import { motion } from "framer-motion";

export default function NBFCFintechModels() {
  const models = [
    {
      title: "1. Co-Lending Model",
      structure:
        "Fintechs provide decision-making tools, data analytics, and lead sourcing to NBFCs for rapid loan processing. Operates through escrow accounts with First Loss Default Guarantee (FLDG) protection.",
      terms: [
        "Fintech FLDG coverage: 70% of loan portfolio",
        "NBFC funding: Remaining 30%",
        "Fintech ROI share: 24–36% of interest income",
        "Expense coverage: 100% by fintech",
        "NPA management: 100% fintech responsibility",
      ],
      buttons: ["Risk Sharing", "Profit Sharing"],
    },
    {
      title: "2. Lead-Based Model",
      structure:
        "Fintechs focus on sourcing quality leads and providing advanced risk assessment software to NBFCs. This model emphasizes customer acquisition over funding.",
      terms: [
        "Lead sourcing by fintech",
        "Risk assessment tools provided",
        "Commission to fintech: 1–3% of loan value",
        "Full lending capital from NBFC",
        "All risk retained by NBFC",
      ],
      buttons: ["Commission Based", "Low Risk for Fintech"],
    },
    {
      title: "3. FLDG Model",
      structure:
        "First Loss Default Guarantee model where fintechs provide collateral or guarantee protection, safeguarding NBFCs against initial loan defaults and NPAs.",
      terms: [
        "Fintech guarantees initial losses",
        "NBFC protected from early defaults",
        "Risk-sharing clearly defined by RBI guidelines",
        "Enhanced NBFC confidence in lending",
        "Regulatory compliance maintained",
      ],
      buttons: ["Risk Protection", "RBI Compliant"],
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
          3 Primary Models of NBFC-Fintech Collaboration
        </motion.h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          NBFCs can choose from multiple collaboration frameworks based on their
          strategic objectives, risk appetite, and operational capabilities.
          Each model offers distinct advantages.
        </p>
      </div>

      {/* Model Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {models.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300 rounded-l-2xl" />

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {m.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {m.structure}
            </p>

            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
              {m.terms.map((term, idx) => (
                <li key={idx}>{term}</li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              {m.buttons.map((btn, j) => (
                <motion.button
                  key={j}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 text-sm rounded-full border border-gray-800 font-medium transition ${
                    j === 0
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {btn}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
