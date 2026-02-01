"use client";
import { motion } from "framer-motion";

export default function PANVerificationSection() {
  const features = [
    {
      title: "Real-Time PAN Card Verification",
      points: [
        "Instant PAN number validation with ITD database",
        "Real-time verification status and response codes",
        "Webhook notifications for asynchronous processing",
        "Support for both individual and bulk verification",
      ],
    },
    {
      title: "Advanced Name Matching Technology",
      points: [
        "Fuzzy logic algorithms for name variations",
        "Phonetic matching for pronunciation differences",
        "Nickname and abbreviation recognition",
        "Multi-language name matching support",
      ],
    },
    {
      title: "Enhanced Verification Features",
      points: [
        "PAN format validation and checksum verification",
        "Duplicate PAN detection across your platform",
        "Risk scoring based on verification patterns",
        "Comprehensive verification history and analytics",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Comprehensive PAN Verification Solutions
        </h2>
        <p className="text-gray-600 text-lg">
          AOPAY complete API suite covers all aspects of PAN card verification,
          from basic format validation to advanced name matching, designed
          specifically for financial services and regulatory compliance needs.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-black mb-4 border-b border-gray-300 pb-2">
              {feature.title}
            </h3>
            <ul className="text-gray-700 text-sm space-y-2 text-left">
              {feature.points.map((point, j) => (
                <li key={j} className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
