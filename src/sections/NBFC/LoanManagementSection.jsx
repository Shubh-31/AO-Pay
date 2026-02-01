"use client";

import { motion } from "framer-motion";

const LoanManagementSection = () => {
  const features = [
    {
      imgSrc:
        "/assets/NBFC/Complete NBFC Loan Management Software Solution/Advanced Loan Origination Software.png",
      title: "Advanced Loan Origination Software",
      items: [
        "Automated loan application processing",
        "Digital KYC and document verification",
        "Credit scoring and risk assessment",
        "Customizable underwriting workflows",
        "Real-time loan approval systems",
        "Multi-product loan origination",
      ],
    },
    {
      imgSrc:
        "/assets/NBFC/Complete NBFC Loan Management Software Solution/Comprehensive Loan Management System.png",
      title: "Comprehensive Loan Management System",
      items: [
        "End-to-end loan lifecycle management",
        "Automated EMI calculation and scheduling",
        "Payment collection and tracking",
        "Delinquency management and recovery",
        "Loan restructuring capabilities",
        "Portfolio analytics and reporting",
      ],
    },
    {
      imgSrc:
        "/assets/NBFC/Complete NBFC Loan Management Software Solution/NBFC Co-Lending Solution.png",
      title: "NBFC Co-Lending Solution",
      items: [
        "Multi-lender collaboration platform",
        "Automated loan syndication",
        "Risk sharing and distribution",
        "Real-time partner integration",
        "Regulatory compliance for co-lending",
        "Transparent fee and commission management",
      ],
    },
    {
      imgSrc:
        "/assets/NBFC/Complete NBFC Loan Management Software Solution/Digital Payment Processing.png",
      title: "Digital Payment Processing",
      items: [
        "Multiple payment gateway integrations",
        "UPI, NEFT, RTGS support",
        "Automated payment reconciliation",
        "Digital wallet integration",
        "Real-time payment notifications",
        "Flexible repayment options",
      ],
    },
  ];

  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Gradient background and decorative shapes */}

      <div className="relative z-10">
        {/* Main Heading & Intro */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900"
        >
          Complete NBFC Loan Management Software Solution
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-14"
        >
          Discover our comprehensive NBFC Software Architecture that streamlines
          lending operations, enhances customer experience, and accelerates your
          digital transformation journey. Our platform offers everything you
          need to build a world-class NBFC business with advanced loan
          management capabilities.
        </motion.p>

        {/* Feature Cards Grid */}
        <div className="relative border border-gray-100 rounded-2xl bg-white shadow-lg p-10">
          {/* Top gradient accent bar */}

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-6">
            {features.map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border border-gray-200 rounded-xl p-6 bg-gray-50 hover:bg-blue-50 hover:shadow-md transition-all duration-300"
              >
                <img
                  src={block.imgSrc}
                  alt={block.title}
                  className="w-8 mx-auto mb-2"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                  {block.title}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-base font-medium"
                    >
                      <span className="text-blue-500 mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 011.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanManagementSection;
