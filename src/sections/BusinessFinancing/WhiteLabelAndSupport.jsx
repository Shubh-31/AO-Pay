"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const WhiteLabelAndSupport = () => {
  const sections = [
    {
      heading2: "White-Label Lending Platform",
      heading2Para:
        "Launch your branded lending business with our fully customizable platform.",
      points: [
        {
          imgSrc:
            "/assets/BusinessFinancing/White-Label Lending Platform/Custom Branding.png",
          heading3: "Custom Branding",
          heading3Para:
            "Complete white-label solution with your logo, colors, and branding across web portals, mobile apps, and customer communications.",
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/White-Label Lending Platform/Configurable Workflows.png",
          heading3: "Configurable Workflows",
          heading3Para:
            "Customize lending workflows, approval processes, documentation requirements, and business rules to match your operational model.",
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/White-Label Lending Platform/Multi-Tenant Architecture.png",
          heading3: "Multi-Tenant Architecture",
          heading3Para:
            "Support multiple lending businesses or brands on a single platform with isolated data, configurations, and reporting for each tenant.",
        },
      ],
    },
    {
      heading2: "Implementation & Support",
      heading2Para:
        "Comprehensive onboarding and ongoing support for successful platform adoption.",
      points: [
        {
          imgSrc:
            "/assets/BusinessFinancing/Implementation & Support/Rapid Deployment.png",
          heading3: "Rapid Deployment",
          heading3Para:
            "Go live in 1-2 weeks with our proven implementation methodology. Includes system configuration, data migration, integration setup, and user training.",
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Implementation & Support/Training & Documentation.png",
          heading3: "Training & Documentation",
          heading3Para:
            "Comprehensive training programs for operational teams, IT staff, and management. Detailed documentation, video tutorials, and knowledge base.",
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Implementation & Support/24_7 Technical Support.png",
          heading3: "24/7 Technical Support",
          heading3Para:
            "Round-the-clock technical support with dedicated account manager, regular health checks, and proactive monitoring to ensure optimal performance.",
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 md:p-12 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Heading2 */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {section.heading2}
            </h2>

            {/* Paragraph */}
            <p className="text-lg text-gray-600 leading-relaxed">
              {section.heading2Para}
            </p>

            {/* Points */}
            <div className="mt-6 space-y-4">
              {section.points.map((point, i) => (
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
                    <p className="text-gray-600 text-base">
                      {point.heading3Para}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
