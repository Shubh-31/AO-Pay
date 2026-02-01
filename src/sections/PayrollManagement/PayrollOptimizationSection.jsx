"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function PayrollOptimizationSection() {
  const sections = [
    {
      imgSrc:
        "/assets/PayrollManagement/Optimize Payroll Operations & Reduce Costs/Automated Workflow & Process Efficiency.png",
      heading3: "Automated Workflow & Process Efficiency",
      points: [
        "Eliminate manual data entry with automated data import",
        "Reduce payroll processing time from days to hours",
        "Minimize errors with automated calculations and validations",
        "Streamline approval workflows for faster processing",
        "Automated reconciliation with bank statements",
      ],
    },
    {
      imgSrc:
        "/assets/PayrollManagement/Optimize Payroll Operations & Reduce Costs/Compliance & Risk Management.png",
      heading3: "Compliance & Risk Management",
      points: [
        "Stay compliant with automated tax calculations and updates",
        "Reduce penalties with timely statutory payments",
        "Automated form generation for tax filing",
        "Audit-ready reports and documentation",
        "Real-time compliance monitoring and alerts",
      ],
    },
    {
      imgSrc:
        "/assets/PayrollManagement/Optimize Payroll Operations & Reduce Costs/Cost Tracking & Budget Management.png",
      heading3: "Cost Tracking & Budget Management",
      points: [
        "Real-time visibility into payroll costs and trends",
        "Department and project-wise cost allocation",
        "Budget vs. actual payroll expense tracking",
        "Overtime and variable pay monitoring",
        "Predictive analytics for payroll forecasting",
      ],
    },
    {
      imgSrc:
        "/assets/PayrollManagement/Optimize Payroll Operations & Reduce Costs/Employee Experience Enhancement.png",
      heading3: "Employee Experience Enhancement",
      points: [
        "Self-service portal reduces HR support tickets",
        "Instant access to payslips and tax documents",
        "Transparent salary breakdown and calculations",
        "Quick reimbursement and advance processing",
        "Mobile app for on-the-go access",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Optimize Payroll Operations & Reduce Costs
          </h2>
        </motion.div>

        {/* Sections */}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 space-y-4"
          >
            {/* Icon + Title in one line */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={section.imgSrc}
                alt={section.heading3}
                className="w-6 h-auto"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                {section.heading3}
              </h3>
            </div>

            <ul className="space-y-2">
              {section.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 text-green-500">
                    <CheckCircle className="w-5 h-5" />
                  </span>
                  <p className="text-gray-600">{point}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
