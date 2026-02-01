"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const CollectionsRecoveryManagement = () => {
  const points = [
    {
      imgSrc:
        "/assets/BusinessFinancing/Collections & Recovery Management/Automated Collection Strategies.png",
      heading3: "Automated Collection Strategies",
      heading3Para:
        "Configure multi-channel collection workflows with automated reminders via SMS, email, WhatsApp, and IVR calls. Escalation rules based on delinquency buckets and customer segmentation.",
    },
    {
      imgSrc:
        "/assets/BusinessFinancing/Collections & Recovery Management/Agent Management.png",
      heading3: "Agent Management",
      heading3Para:
        "Field collection agent assignment, tracking, and performance monitoring. Mobile apps for agents with offline capabilities and real-time synchronization.",
    },
    {
      imgSrc:
        "/assets/BusinessFinancing/Collections & Recovery Management/Recovery Tools.png",
      heading3: "Recovery Tools",
      heading3Para:
        "• Payment promise tracking and monitoring\n• Restructuring and settlement workflows\n• Legal notice generation and tracking\n• Collateral seizure management\n• Write-off and recovery accounting",
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
          Collections & Recovery Management
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-600 leading-relaxed">
          Automated collections workflows to maximize recovery and minimize
          delinquencies.
        </p>

        {/* Points Section */}
        <div className="mt-6 space-y-4">
          {points.map((point, i) => (
            <motion.div
              key={i}
              className="flex flex-col md:flex-row items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4 hover:bg-gray-100 transition-colors"
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
                {/* Handle multiline bullet points */}
                {point.heading3Para.includes("•") ? (
                  <ul className="list-disc list-inside text-gray-600 space-y-1 mt-1">
                    {point.heading3Para.split("\n").map((line, idx) => (
                      <li key={idx}>{line.replace("• ", "")}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 text-base mt-1">
                    {point.heading3Para}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
