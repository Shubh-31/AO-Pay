"use client";

import { motion } from "framer-motion";

const InsuranceBusinessModels = () => {
  const sections = [
    {
      imgSrc:
        "/assets/Insurance/Insurance Payment Solutions for Every Business Model/Independent Insurance Agents.png",
      title: "Independent Insurance Agents",
      desc: "For individual agents and small insurance brokerages, AOPAY's payment gateway enables secure premium collection without complex infrastructure. Our KYC verification builds client confidence from the first policy quote, while automated commission processing ensures agents receive timely payments. Simple integration gets your payment processing running quickly with minimal technical resources.",
      features: [
        "Quick Setup: Start collecting premiums in days with agent-friendly interfaces",
        "Commission Automation: Automated commission calculations and payments for agents",
        "Compliance Support: Built-in regulatory compliance for independent operations",
      ],
    },
    {
      imgSrc:
        "/assets/Insurance/Insurance Payment Solutions for Every Business Model/Mid-Size Insurance Companies.png",
      title: "Mid-Size Insurance Companies",
      desc: "Growing insurance companies benefit from AOPAY's advanced policy management that handles increasing premium volumes with intelligent routing and verification. Treasury management systems provide sophisticated financial oversight, while comprehensive reporting tools help demonstrate solvency and compliance to regulatory authorities.",
      features: [
        "Volume Scaling: Handle growing policy volumes with automated processing",
        "Risk Management: Advanced fraud detection and risk assessment capabilities",
        "Regulatory Reporting: Comprehensive compliance and solvency reporting",
      ],
    },
    {
      imgSrc:
        "/assets/Insurance/Insurance Payment Solutions for Every Business Model/InsurTech Platforms and Enterprise Insurers.png",
      title: "InsurTech Platforms and Enterprise Insurers",
      desc: "Large-scale insurance operations and InsurTech companies require sophisticated payment orchestration across global markets and multiple product lines. AOPAY's platform supports high transaction volumes with intelligent routing, multi-currency processing, and comprehensive financial management for complex insurance ecosystems.",
      features: [
        "Platform Integration: Easy integration with InsurTech platforms and core systems",
        "Global Operations: Multi-currency and international compliance for global insurance",
        "Enterprise Features: Advanced treasury management and institutional-grade reporting",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
        >
          Insurance Payment Solutions for Every Business Model
        </motion.h2>

        {/* Sections */}
        <div className="grid gap-12">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-sm rounded-2xl p-8 border border-gray-100"
            >
              {/* Icon + title in one line */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={section.imgSrc}
                  alt={section.title}
                  className="w-6 h-auto"
                />
                <h3 className="text-2xl font-semibold text-blue-700">
                  {section.title}
                </h3>
              </div>

              <p className="text-gray-700 mb-6">{section.desc}</p>

              <ul className="space-y-2 text-gray-600">
                {section.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="before:content-['•'] before:mr-2 before:text-blue-600"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceBusinessModels;
