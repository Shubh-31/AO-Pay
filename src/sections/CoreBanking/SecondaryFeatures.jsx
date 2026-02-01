"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function SecondaryFeatures() {
  const Secondaryfeatures = [
    {
      title: "Contracts & Vendor Management",
      items: [
        "Vendor terms and conditions input system",
        "Customer contract creation with variable commissions",
        "Multiple contract types and pricing tiers",
        "Automated contract management workflows",
      ],
    },
    {
      title: "Advanced Fees & Limits Configuration",
      items: [
        "Customizable fees: percentage, flat fee, or combination",
        "Configurable fee bearer (sender or receiver)",
        "Transaction limits per period, amount, or number",
        "Dynamic pricing based on customer segments",
      ],
    },
    {
      title: "Reconciliation & Settlement",
      items: [
        "Company liabilities reconciliation",
        "Client and vendor liability management",
        "Unmatched transaction identification",
        "Automated discrepancy resolution",
      ],
    },
    {
      title: "Cash Operations Management",
      items: [
        "Any type of cash accounting capabilities",
        "Cash-desk operations management",
        "Physical cash integration with digital platform",
        "Multi-location cash management",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Monetize Your Digital Banking Platform
      </h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Maximize revenue potential with AOPAY Core Banking Solution's advanced
        monetization features. Create flexible pricing models and manage vendor
        relationships efficiently.
      </p>

      {/* Grid Layout */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {Secondaryfeatures.map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white/20 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-6 hover:shadow-lg transition-all"
          >
            {/* Title */}
            <h3 className="flex items-center text-xl font-semibold text-gray-900 mb-4">
              <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" />
              {feature.title}
            </h3>

            {/* Items */}
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {feature.items.map((item, k) => (
                <li key={k} className="text-sm leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
