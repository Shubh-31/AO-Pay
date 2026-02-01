"use client";

import { motion } from "framer-motion";

const BusinessIntelligenceReporting = () => {
  const features = [
    {
      title: "Real-Time Dashboard",
      points: [
        "Live payment tracking and collection monitoring",
        "Success rate analytics and failure analysis",
        "Revenue tracking and payment volume trends",
        "Customer acquisition and retention metrics",
      ],
    },
    {
      title: "Advanced Analytics",
      points: [
        "Payment pattern analysis and customer behavior insights",
        "Geographic distribution of payments and customers",
        "Payment method preference analysis",
        "Seasonal trends and peak usage identification",
      ],
    },
    {
      title: "Custom Reporting",
      points: [
        "Scheduled reports with custom date ranges and filters",
        "Export capabilities in CSV, PDF, and Excel formats",
        "API access to raw analytics data",
        "Integration with business intelligence tools",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900"
        >
          AOPAY Payments: Advanced Business Intelligence & Reporting
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto"
        >
          Gain valuable insights into your payment collection performance with
          comprehensive analytics and reporting capabilities.
        </motion.p>

        {/* Features Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessIntelligenceReporting;
