"use client";

import { motion } from "framer-motion";

export default function SecondaryFeatures() {
  const data = {
    heading2: "Monetize Your P2P Lending Platform",
    heading2Para:
      "Maximize revenue with flexible pricing models, customizable fees, and comprehensive financial management tools.",
    blocks: [
      {
        heading3: "Flexible Contracts & Vendor Management",
        items: [
          "Vendor terms and conditions configuration",
          "Multiple customer contract types",
          "Different commission structures and limits",
          "Customer choice of contract preferences",
          "Monthly fee options and fee-free models",
        ],
      },
      {
        heading3: "Dynamic Fee Structure",
        items: [
          "Percentage-based fees",
          "Flat fee structures",
          "Combination fee bearer (sender/receiver)",
          "Transaction limits per period",
          "Amount-based restrictions",
        ],
      },
      {
        heading3: "Financial Reconciliation",
        items: [
          "Company liabilities reconciliation (coming soon)",
          "Client liability management",
          "Vendor obligation tracking",
          "Unmatched transaction identification",
          "Automated discrepancy resolution",
          "Cash desk operations management",
        ],
      },
      {
        heading3: "Cash Operations Management",
        items: [
          "Multi-currency cash accounting",
          "Cash desk operation management",
          "Physical cash-to-digital conversion tracking",
          "Branch-wise cash flow monitoring",
        ],
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-20 px-6">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4"
        >
          {data.heading2}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg"
        >
          {data.heading2Para}
        </motion.p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {data.blocks.map((block, index) => (
          <motion.div
            key={block.heading3}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition group border-l-4 border-[#0a2540]"
          >
            {/* Floating Header with Accent Line */}
            <div className="absolute -left-[2px] top-0 h-full w-1 bg-[#0a2540] rounded-l-lg group-hover:h-[102%] transition-all duration-300" />

            <h3 className="text-2xl font-semibold text-[#0a2540] mb-5">
              {block.heading3}
            </h3>

            <ul className="space-y-2 text-gray-700 leading-relaxed">
              {block.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#0a2540] font-semibold mr-2">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
