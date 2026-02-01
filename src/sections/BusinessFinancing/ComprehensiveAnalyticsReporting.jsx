"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const ComprehensiveAnalyticsReporting = () => {
  const points = [
    {
      imgSrc:
        "/assets/BusinessFinancing/Comprehensive Analytics & Reporting/Real-Time Dashboards.png",
      heading3: "Real-Time Dashboards",
      heading3Para:
        "Executive dashboards showing loan pipeline, approval rates, disbursement volumes, portfolio health, and key performance indicators in real-time.",
    },
    {
      imgSrc:
        "/assets/BusinessFinancing/Comprehensive Analytics & Reporting/Portfolio Analytics.png",
      heading3: "Portfolio Analytics",
      heading3Para:
        "Deep dive into portfolio composition, vintage analysis, delinquency trends, credit loss provisions, and risk-adjusted returns.",
    },
    {
      imgSrc:
        "/assets/BusinessFinancing/Comprehensive Analytics & Reporting/Predictive Insights.png",
      heading3: "Predictive Insights",
      heading3Para:
        "Forecasting for default probability, prepayment likelihood, collection effectiveness, and portfolio profitability projections.",
    },
    {
      imgSrc:
        "/assets/BusinessFinancing/Comprehensive Analytics & Reporting/Custom Reports.png",
      heading3: "Custom Reports",
      heading3Para:
        "Build custom reports and export data in multiple formats for regulatory submissions, board presentations, and operational analysis.",
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
          Comprehensive Analytics & Reporting
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-600 leading-relaxed">
          Data-driven insights for optimizing lending operations and portfolio
          performance.
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
