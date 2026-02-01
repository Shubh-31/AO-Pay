"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const AnalyticsSection = () => {
  const analyticsFeatures = [
    {
      heading: "Real-Time Dashboard",
      features: [
        "Live transaction monitoring and status tracking",
        "Success rate analytics and failure pattern analysis",
        "Volume trends and peak usage insights",
        "Revenue tracking and cost optimization metrics",
      ],
      imgSrc:
        "/assets/DMTIntegration/BusinessIntelligence&Analytics/RealTimeDashboard.png",
    },
    {
      heading: "Detailed Reporting",
      features: [
        "Customizable reports with flexible date ranges",
        "Export capabilities in CSV, PDF, and Excel formats",
        "Automated report scheduling and email delivery",
        "Compliance reports for regulatory requirements",
      ],
      imgSrc:
        "/assets/DMTIntegration/BusinessIntelligence&Analytics/DetailedReporting.png",
    },
    {
      heading: "Advanced Analytics",
      features: [
        "Transaction pattern analysis and fraud detection",
        "Customer behavior insights and usage analytics",
        "Performance benchmarking and optimization recommendations",
        "Predictive analytics for capacity planning",
      ],
      imgSrc:
        "/assets/DMTIntegration/BusinessIntelligence&Analytics/AdvancedAnalytics.png",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Business Intelligence & Analytics for Transactions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Gain valuable insights into your transfer operations with
          comprehensive reporting and analytics capabilities.
        </motion.p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {analyticsFeatures.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-green-100"
          >
            <div className="flex flex-col gap-4">
              <img
                src={item.imgSrc}
                alt={item.heading}
                className="mb-2 w-8 h-auto"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.heading}
              </h3>
              <ul className="space-y-2 text-gray-700 list-none">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AnalyticsSection;
