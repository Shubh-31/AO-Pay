"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const KYBComplianceAPI = () => {
  const steps = [
    {
      heading3: "Step 1: Simple API Integration",
      heading3Para:
        'Integrate our KYB API using our comprehensive SDKs for Python, Node.js, Java, PHP, and more. Our sandbox environment lets you test all features before going live.\n\nExample API call:\nPOST /api/v1/kyb/verify\n{\n  "company_name": "Tech Innovations Inc",\n  "registration_number": "12345678",\n  "country": "US",\n  "jurisdiction": "Delaware",\n  "include_ubo": true,\n  "screening": {\n    "sanctions": true,\n    "pep": true,\n    "adverse_media": true\n  }\n}',
    },
    {
      heading3: "Step 2: Comprehensive Verification",
      heading3Para:
        "Our system automatically queries official business registries, validates company information, identifies beneficial owners, and screens against sanctions lists - all in real-time.",
    },
    {
      heading3: "Step 3: Instant Results & Reporting",
      heading3Para:
        "Receive detailed verification reports including company status, ownership structure, UBO details, risk scores, and compliance flags. All data is audit-ready and formatted for regulatory reporting.",
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
          How AOPAYKYB Compliance API Works
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-600 leading-relaxed">
          Simple integration, powerful results. Start verifying businesses in
          minutes with our developer-friendly API.
        </p>

        {/* Steps */}
        <div className="mt-6 space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex flex-col md:flex-row items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4 hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0 mt-1 md:mt-0" />
              <div className="whitespace-pre-line">
                <h3 className="text-lg font-semibold text-gray-800">
                  {step.heading3}
                </h3>
                <p className="text-gray-600 text-base mt-1">
                  {step.heading3Para}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
