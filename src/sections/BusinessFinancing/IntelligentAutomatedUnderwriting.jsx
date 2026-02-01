"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const IntelligentAutomatedUnderwriting = () => {
  const points = [
    {
      imgSrc:
        "/assets/BusinessFinancing/Intelligent Automated Underwriting/Multi-Source Data Analysis.png",
      heading3: "Multi-Source Data Analysis",
      heading3Para:
        "Analyze credit bureau reports, bank statements, GST returns, financial statements, and alternative data sources for comprehensive creditworthiness assessment.",
    },
    {
      imgSrc:
        "/assets/BusinessFinancing/Intelligent Automated Underwriting/Configurable Credit Policies.png",
      heading3: "Configurable Credit Policies",
      heading3Para:
        "Define custom credit rules, risk parameters, and approval matrices based on loan products, borrower segments, and risk appetite.",
    },
    {
      imgSrc:
        "/assets/BusinessFinancing/Intelligent Automated Underwriting/Real-Time Decisioning.png",
      heading3: "Real-Time Decisioning",
      heading3Para:
        "Instant credit decisions powered by machine learning models that continuously learn from historical data to improve accuracy over time.",
    },
    {
      imgSrc:
        "/assets/BusinessFinancing/Intelligent Automated Underwriting/Risk-Based Pricing.png",
      heading3: "Risk-Based Pricing",
      heading3Para:
        "Automatically calculate interest rates, processing fees, and loan terms based on borrower risk profile and market conditions.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <motion.div
        className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 md:p-12 space-y-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Heading2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Intelligent Automated Underwriting
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-600 leading-relaxed">
          AI-powered credit decisioning that reduces processing time from days
          to minutes.
        </p>

        {/* Points Section */}
        <div className="mt-6 space-y-4">
          {points.map((point, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4 hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={point.imgSrc}
                alt={point.heading3 || "Feature icon"}
                className="w-6 h-6 flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {point.heading3}
                </h3>
                <p className="text-gray-600 text-base">{point.heading3Para}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
