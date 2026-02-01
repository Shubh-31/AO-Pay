"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function NBFCProcessSection() {
  const steps = [
    {
      step: "1",
      title: "Co-Origination Agreement Execution",
      description:
        "Establish foundational agreements between NBFC and fintech defining collaboration terms, loan origination processes, risk-sharing mechanisms, and operational protocols. This legal framework governs the entire partnership.",
    },
    {
      step: "2",
      title: "Intercorporate Deposit Agreement",
      description:
        "Fintechs sign agreements with designated fund managers to structure deposits effectively. This ensures proper utilization of funds and maintains financial transparency between collaborating parties.",
    },
    {
      step: "3",
      title: "Dedicated Escrow Account Setup",
      description:
        "Open separate escrow accounts for managing repayments and disbursements. Appoint qualified Chartered Accountants to oversee fund management, ensuring compliance and financial accuracy.",
    },
    {
      step: "4",
      title: "Comprehensive Compliance Management",
      description:
        "Implement systems for meeting all regulatory requirements including TDS deductions, GST compliance, credit bureau reporting (CIBIL, Experian), and CKYC protocols as mandated by RBI.",
    },
    {
      step: "5",
      title: "NPA Provisioning Implementation",
      description:
        "NBFCs must follow RBI's provisioning norms for non-performing assets using the 45/90-day classification framework. Establish clear protocols for identifying, tracking, and managing NPAs.",
    },
    {
      step: "6",
      title: "CIC Reporting and Reconciliation",
      description:
        "Both collaborators maintain transparency through monthly Credit Information Company (CIC) reporting. Conduct regular reconciliations ensuring data accuracy and regulatory compliance.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Complete NBFC Collaboration Process - Step by Step
        </motion.h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Establishing effective partnerships between NBFCs, banks, and fintechs
          requires systematic execution across multiple stages. Here's the
          comprehensive process:
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="p-6 bg-gradient-to-br from-orange-50 to-blue-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-orange-600">
                Step {item.step}
              </span>
              <ArrowRight className="text-blue-500" size={18} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
