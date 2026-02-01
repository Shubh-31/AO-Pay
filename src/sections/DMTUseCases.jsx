"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const DMTUseCases = () => {
  const useCases = [
    {
      imgSrc:
        "/assets/DMTIntegration/AOPAYSolutionPerfectforDiverseFinancialUseCases/Banking&NBFCIntegration.png",
      heading: "Banking & NBFC Integration",
      description:
        "Enhance your banking applications with comprehensive money transfer capabilities. Perfect for retail banks, neo-banks, and small finance banks.",
    },
    {
      imgSrc:
        "/assets/DMTIntegration/AOPAYSolutionPerfectforDiverseFinancialUseCases/Payroll&HRPlatforms.png",
      heading: "Payroll & HR Platforms",
      description:
        "Streamline salary disbursements and employee reimbursements with bulk transfer capabilities and automated processing workflows.",
    },
    {
      imgSrc:
        "/assets/DMTIntegration/AOPAYSolutionPerfectforDiverseFinancialUseCases/Lending&CreditPlatforms.png",
      heading: "Lending & Credit Platforms",
      description:
        "Disburse loans instantly to borrower accounts with real-time confirmation and comprehensive transaction tracking for compliance.",
    },
    {
      imgSrc:
        "/assets/DMTIntegration/AOPAYSolutionPerfectforDiverseFinancialUseCases/GigEconomySolutions.png",
      heading: "Gig Economy Solutions",
      description:
        "Enable instant payments to freelancers, delivery partners, and gig workers with flexible disbursement schedules and multiple transfer options.",
    },
    {
      imgSrc:
        "/assets/DMTIntegration/AOPAYSolutionPerfectforDiverseFinancialUseCases/CorporateTreasuryManagement.png",
      heading: "Corporate Treasury Management",
      description:
        "Manage vendor payments, supplier disbursements, and inter-company transfers with enterprise-grade controls and approval workflows.",
    },
    {
      imgSrc:
        "/assets/DMTIntegration/AOPAYSolutionPerfectforDiverseFinancialUseCases/Ecommerce&Marketplace.png",
      heading: "E-commerce & Marketplace",
      description:
        "Process seller payments, refunds, and marketplace settlements with automated reconciliation and detailed reporting capabilities.",
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
          AOPAY Money Transfer API Solution: Perfect for Diverse Financial Use
          Cases
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          AOPAY versatile API solution caters to various business models and
          financial service requirements across multiple industries.
        </motion.p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {useCases.map((useCase, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-green-100"
          >
            <div className="flex items-start gap-3">
              <img
                src={useCase.imgSrc}
                alt={useCase.heading}
                className="w-8 mb-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {useCase.heading}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DMTUseCases;
