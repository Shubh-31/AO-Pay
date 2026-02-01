"use client";

import { motion } from "framer-motion";

export default function PayrollAutomation() {
  return (
    <section className="py-20 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            AOPAY Advanced Payroll Automation
          </h2>
          <p className="text-gray-800 text-lg max-w-3xl mx-auto">
            Everything HR and finance teams need to streamline payroll
            operations, ensure compliance, and enhance employee experience.
          </p>
        </motion.div>

        {/* Sections */}
        {[
          {
            imgSrc:
              "/assets/PayrollManagement/AOPAY Advanced Payroll Automation/Automated Salary Disbursement.png",
            title: "Automated Salary Disbursement",
            items: [
              "Multi-Channel Payment Processing",
              "Single payout API for individual salary payments",
              "Bulk salary processing for entire workforce",
              "Payment links for ad-hoc payments and bonuses",
              "Direct bank account transfers (ACH, NEFT, RTGS)",
              "Digital wallet payments for gig workers",
              "Scheduled payments with auto-processing",
              "Failed payment retry mechanisms",
            ],
          },
          {
            imgSrc:
              "/assets/PayrollManagement/AOPAY Advanced Payroll Automation/Comprehensive Tax & Compliance Management.png",
            title: "Comprehensive Tax & Compliance Management",
            items: [
              "Automated income tax calculations with latest tax slabs",
              "TDS computation and deduction management",
              "Provident fund and social security contributions",
              "Professional tax and other statutory deductions",
              "Form 16, Form 24Q generation and filing",
              "ESI, EPF, and labor law compliance",
              "Audit trails for compliance verification",
              "Multi-jurisdiction tax support",
              "Employee Self-Service Capabilities",
            ],
          },
          {
            imgSrc:
              "/assets/PayrollManagement/AOPAY Advanced Payroll Automation/Empower Your Workforce.png",
            title: "Empower Your Workforce",
            items: [
              "Mobile and web access to payslips and salary history",
              "Tax declaration and investment proof submission",
              "Reimbursement claim submission with receipts",
              "Salary advance requests and tracking",
              "Download tax forms and salary certificates",
              "View salary structure and components breakdown",
              "Update bank account and personal details",
              "Real-time notifications for salary credits",
            ],
          },
          {
            imgSrc:
              "/assets/PayrollManagement/AOPAY Advanced Payroll Automation/Integration with HR & Accounting Systems.png",
            title: "Integration with HR & Accounting Systems",
            items: [
              "HRIS integration for employee master data sync",
              "Time and attendance system integration",
              "Accounting software integration (QuickBooks, Xero, Tally)",
              "ERP system connectivity (SAP, Oracle, Workday)",
              "Leave management system integration",
              "Banking system integration for disbursements",
              "Real-time data synchronization",
              "API-first architecture for custom integrations",
            ],
          },
          {
            imgSrc:
              "/assets/PayrollManagement/AOPAY Advanced Payroll Automation/Payroll Analytics & Reporting.png",
            title: "Payroll Analytics & Reporting",
            items: [
              "Real-time payroll cost tracking and forecasting",
              "Department-wise and location-wise payroll reports",
              "Salary structure analysis and benchmarking",
              "Tax liability tracking and projections",
              "Compliance status monitoring dashboards",
              "Employee cost analysis and headcount reports",
              "Custom report generation and scheduling",
              "Audit reports for internal and external audits",
            ],
          },
          {
            imgSrc:
              "/assets/PayrollManagement/AOPAY Advanced Payroll Automation/Security & Access Control.png",
            title: "Security & Access Control",
            items: [
              "Role-based access control for HR and finance teams",
              "Multi-factor authentication for sensitive operations",
              "End-to-end encryption for salary and banking data",
              "Audit trails for all payroll activities",
              "Secure employee data management and privacy",
              "GDPR and data protection compliance",
              "IP whitelisting and session management",
            ],
          },
        ].map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-white-200 to-white border border-gray-800 rounded-3xl p-8 shadow-xl"
          >
            {/* Icon + Title in one line */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={section.imgSrc}
                alt={section.title}
                className="w-6 h-auto"
              />
              <h3 className="text-2xl md:text-3xl font-semibold text-green-400">
                {section.title}
              </h3>
            </div>

            <ul className="space-y-2 text-gray-800 text-base list-disc list-inside">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
