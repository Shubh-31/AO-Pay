"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const DeveloperFriendlyAPI = () => {
  const sections = [
    {
      heading3: "Comprehensive SDK Support",
      heading3Bullets: [
        "Python, Node.js, Java, PHP, Ruby, C# SDKs",
        "REST API with JSON responses",
        "GraphQL endpoint for flexible queries",
        "Webhook support for async notifications",
        "Batch processing for bulk verifications",
      ],
    },
    {
      heading3: "Enterprise-Grade Infrastructure",
      heading3Bullets: [
        "99.9% uptime SLA guarantee",
        "Auto-scaling for high-volume processing",
        "Rate limiting and quota management",
        "Encrypted data transmission (TLS 1.3)",
        "Geographic redundancy and failover",
      ],
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
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Developer-Friendly API Features
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-600 leading-relaxed">
          Built by developers, for developers. Our API prioritizes ease of
          integration and reliability.
        </p>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {section.heading3}
                </h3>
              </div>

              <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1 pl-8">
                {section.heading3Bullets.map((item, j) => (
                  <li key={j} className="text-base leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
