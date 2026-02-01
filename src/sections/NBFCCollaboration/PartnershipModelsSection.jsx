"use client";

import { motion } from "framer-motion";

export default function PartnershipModelsSection() {
  const models = [
    {
      icon: "🏦",
      title: "Bank-NBFC Partnerships",
      description:
        "Access additional funding channels and broaden customer reach by leveraging a bank's extensive branch network, brand credibility, and cost-efficient capital. Ideal for NBFCs seeking scale and PSL-driven bank partners looking to penetrate underserved segments.",
      bestFor:
        "Large-scale lending, priority sector lending targets, geographic expansion.",
    },
    {
      icon: "💻",
      title: "Fintech-NBFC Alliances",
      description:
        "Leverage fintech's technological strengths, digital customer acquisition capabilities, and innovative solutions to enhance operational efficiency. Combine NBFC regulatory compliance and capital with fintech agility and customer-centricity.",
      bestFor:
        "Digital lending, customer experience enhancement, millennial/Gen-Z segments.",
    },
    {
      icon: "🔄",
      title: "Tri-Party Collaborations",
      description:
        "Sophisticated three-way partnerships combining banks (capital), NBFCs (regulatory expertise), and fintechs (technology). This model delivers comprehensive solutions leveraging each entity's core strengths for maximum market impact.",
      bestFor:
        "Complex product offerings, multi-channel distribution, comprehensive financial services.",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Types of Strategic Partnership Models We Support
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-3xl">{model.icon}</span> {model.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {model.description}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-900 text-sm font-medium">
                  <span className="font-semibold text-gray-800">Best For:</span>{" "}
                  {model.bestFor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
