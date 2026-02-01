"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const CorporateDueDiligence = () => {
  const features = [
    {
      heading3: "Unmatched Data Coverage",
      heading3Para:
        "Access 600M+ business records from official registries, commercial databases, and proprietary sources",
      imgSrc:
        "/assets/KYB/Why Choose Our Corporate Due Diligence Solution/Unmatched Data Coverage.png",
    },
    {
      heading3: "Fastest Verification",
      heading3Para:
        "Complete KYB checks in under 15 seconds with direct registry connections and optimized data retrieval",
      imgSrc:
        "/assets/KYB/Why Choose Our Corporate Due Diligence Solution/Fastest Verification.png",
    },
    {
      heading3: "Regulatory Compliant",
      heading3Para:
        "Meet AML/CFT, FATF, AMLD5, and jurisdiction-specific KYB requirements automatically",
      imgSrc:
        "/assets/KYB/Why Choose Our Corporate Due Diligence Solution/Regulatory Compliant.png",
    },
    {
      heading3: "Developer-Friendly",
      heading3Para:
        "RESTful API design, comprehensive documentation, SDKs, webhooks, and sandbox testing environment",
      imgSrc:
        "/assets/KYB/Why Choose Our Corporate Due Diligence Solution/Developer-Friendly.png",
    },
    {
      heading3: "Accurate UBO Identification",
      heading3Para:
        "Trace complex ownership structures through multiple layers to identify true beneficial owners",
      imgSrc:
        "/assets/KYB/Why Choose Our Corporate Due Diligence Solution/Accurate UBO Identification.png",
    },
    {
      heading3: "Real-Time Updates",
      heading3Para:
        "Automated monitoring alerts you to ownership changes, regulatory actions, and compliance risks instantly",
      imgSrc:
        "/assets/KYB/Why Choose Our Corporate Due Diligence Solution/Real-Time Updates.png",
    },
    {
      heading3: "Cost-Effective",
      heading3Para:
        "Reduce manual verification costs by up to 90% while improving accuracy and compliance coverage",
      imgSrc:
        "/assets/KYB/Why Choose Our Corporate Due Diligence Solution/Cost-Effective.png",
    },
    {
      heading3: "24/7 Support",
      heading3Para:
        "Expert technical support and compliance guidance from our dedicated team of KYB specialists",
      imgSrc:
        "/assets/KYB/Why Choose Our Corporate Due Diligence Solution/Support.png",
    },
  ];

  const buttons = [
    { label: "PCI DSS Compliant", href: "#" },
    { label: "SOC 2 Type II", href: "#" },
    { label: "GDPR Compliant", href: "#" },
    { label: "ISO 27001", href: "#" },
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
          Why Choose Our Corporate Due Diligence Solution?
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-600 leading-relaxed">
          Built for financial institutions and fintechs that demand accuracy,
          speed, and regulatory compliance.
        </p>

        {/* Features */}
        <div className="mt-6 space-y-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4 hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img src = {feature.imgSrc} alt = {feature.heading3}  className=" w-6 h-6 my-auto" />
              <div>
                
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.heading3}
                </h3>
                <p className="text-gray-600 text-base mt-1">
                  {feature.heading3Para}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
          {buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              className="bg-gray-50 text-black px-5 py-2 rounded-lg font-medium shadow-md hover:bg-gray-200 transition"
            >
              {btn.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
