"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Secondaryfeatures = {
  heading2: "Optimize Treasury Operations & Financial Performance",
  blocks: [
    {
      heading3: "Advanced Contract & Relationship Management",
      items: [
        "Banking service agreements and fee optimization analysis",
        "Vendor payment terms negotiation and management",
        "Multi-tier service level agreements with financial institutions",
        "Automated contract compliance monitoring and renewal management",
      ],
    },
    {
      heading3: "Sophisticated Fee Management & Cost Control",
      items: [
        "Comprehensive banking fee analysis and optimization",
        "Transaction cost allocation and chargeback mechanisms",
        "Multi-entity cost center allocation and reporting",
        "ROI tracking for treasury technology investments",
        "Benchmark analysis against industry treasury performance",
      ],
    },
    {
      heading3: "Enterprise Reconciliation & Settlement",
      items: [
        "Automated multi-bank account reconciliation across global locations",
        "Real-time settlement tracking and exception management",
        "Inter-entity reconciliation and netting optimization",
        "Comprehensive variance analysis and discrepancy resolution",
        "Automated month-end and quarter-end treasury closing processes",
      ],
    },
    {
      heading3: "Treasury Operations Optimization",
      items: [
        "Centralized cash management across Indian subsidiaries",
        "Automated investment and borrowing decision optimization",
        "Treasury workflow automation and approval processes",
        "Performance analytics and continuous improvement tracking",
      ],
    },
  ],
};

export default function TreasuryFeaturesTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          {Secondaryfeatures.heading2}
        </h2>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Tabs */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
            {Secondaryfeatures.blocks.map((block, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`flex-1 md:flex-none px-4 py-3 rounded-xl text-left font-semibold transition-all border ${
                  i === activeIndex
                    ? "bg-black text-white shadow-lg border-black"
                    : "bg-white text-gray-800 border-gray-200 hover:border-black hover:text-black"
                }`}
              >
                {block.heading3}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-md border border-gray-100 p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-black mb-6">
                  {Secondaryfeatures.blocks[activeIndex].heading3}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  {Secondaryfeatures.blocks[activeIndex].items.map(
                    (item, j) => (
                      <li key={j}>{item}</li>
                    )
                  )}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
