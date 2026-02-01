"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileCheck2 } from "lucide-react";

export default function SecurityCompliance() {
  const securityPoints = [
    "End-to-end encryption for all data transmissions",
    "SOC 2 Type II certified infrastructure",
    "ISO 27001 information security standards",
    "Regular third-party security audits",
    "Multi-factor authentication and role-based access",
    "GDPR and CCPA compliant data handling",
  ];

  return (
    <section className="bg-gradient-to-b from-gray-950 to-black py-20 px-6 text-gray-100">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-400">
            Enterprise Security & Compliance
          </h2>
          <p className="mt-3 text-gray-400 text-lg max-w-2xl mx-auto">
            Your data security and regulatory compliance are our top priorities.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Bank-Grade Security */}
          <motion.div
            className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-green-700/20 transition-all duration-300"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-600/20 p-3 rounded-xl">
                <ShieldCheck className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Bank-Grade Security
              </h3>
            </div>

            <ul className="space-y-3 text-gray-300">
              {securityPoints.map((point, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-green-500 flex-shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Audit-Ready Reporting */}
          <motion.div
            className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-green-700/20 transition-all duration-300"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-600/20 p-3 rounded-xl">
                <FileCheck2 className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Audit-Ready Reporting
              </h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Generate comprehensive audit trails, compliance reports, and
              documentation for regulatory examinations. All verification
              activities are logged with timestamps and data provenance to
              ensure traceability and compliance integrity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
