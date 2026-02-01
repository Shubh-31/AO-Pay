"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const CoLendingMonetization = () => {
  const features = [
    {
      imgSrc:
        "/assets/CoLending/Monetize Co-Lending Partnerships Effectively/Partnership Agreement Management.png",
      heading: "Partnership Agreement Management",
      points: [
        "Flexible partnership terms and conditions configuration",
        "Multiple co-lending models within single platform",
        "Automated revenue sharing and commission calculations",
        "White-label options for bank and NBFC branding",
      ],
    },
    {
      imgSrc:
        "/assets/CoLending/Monetize Co-Lending Partnerships Effectively/Advanced Fee & Commission Structure.png",
      heading: "Advanced Fee & Commission Structure",
      points: [
        "Customizable processing fees and interest rate splits",
        "Configurable commission structures for partners",
        "Automated fee allocation and settlement",
        "Volume-based incentive calculations",
        "Dynamic pricing based on credit profiles",
      ],
    },
    {
      imgSrc:
        "/assets/CoLending/Monetize Co-Lending Partnerships Effectively/Comprehensive Reconciliation & Settlement.png",
      heading: "Comprehensive Reconciliation & Settlement",
      points: [
        "Automated partner settlement processing",
        "Real-time reconciliation of collections and disbursements",
        "Multi-party payment allocation and tracking",
        "Discrepancy identification and resolution workflows",
        "Regulatory reporting for audit compliance",
      ],
    },
    {
      imgSrc:
        "/assets/CoLending/Monetize Co-Lending Partnerships Effectively/Portfolio Analytics & Insights.png",
      heading: "Portfolio Analytics & Insights",
      points: [
        "Real-time portfolio performance metrics",
        "Partner-wise contribution and risk analysis",
        "Delinquency tracking and early warning systems",
        "ROI calculation for co-lending partnerships",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Monetize Co-Lending Partnerships with RBI-Compliant Solution
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={feature.imgSrc}
                alt={feature.heading}
                className="w-8 h-auto mx-auto"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {feature.heading}
              </h3>
              <ul className="space-y-2">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 text-green-600 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
