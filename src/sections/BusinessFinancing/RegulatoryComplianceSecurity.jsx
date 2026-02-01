"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export const RegulatoryComplianceSecurity = () => {
  const sections = [
    {
      heading3: "Compliance Management",
      points: [
        "RBI lending guidelines compliance",
        "KYC/AML/CFT regulatory requirements",
        "Fair lending practices and documentation",
        "Data privacy regulations (GDPR, DPDPA)",
        "Complete audit trails and reporting",
        "Automated regulatory report generation",
      ],
    },
    {
      heading3: "Enterprise Security",
      points: [
        "Bank-grade encryption (TLS 1.3, AES-256)",
        "SOC 2 Type II and ISO 27001 certified",
        "Role-based access control (RBAC)",
        "Multi-factor authentication (MFA)",
        "Regular security audits and penetration testing",
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
        {/* Heading2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Regulatory Compliance & Security
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-600 leading-relaxed">
          Built-in compliance and enterprise-grade security to meet regulatory
          requirements.
        </p>

        {/* Sections */}
        <div className="mt-6 space-y-6">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                {section.heading3}
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
