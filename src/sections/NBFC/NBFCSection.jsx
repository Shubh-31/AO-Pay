"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function NBFCSection() {
  const points = [
    "RESTful APIs for seamless third-party integration",
    "Webhook support for real-time event notifications",
    "Credit Bureau Integration (CIBIL, Experian, Equifax)",
    "Bank Account Verification APIs for instant validation",
    "Document Verification services integration",
    "Comprehensive SDK for multiple programming languages",
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          NBFC Banking Solution & API Integration
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Leverage AOPAY NBFC Solution capabilities to connect seamlessly with
          multiple financial institutions, payment networks, and third-party
          service providers. Our NBFC Banking Application supports comprehensive
          API integration, enabling you to build innovative financial products
          and expand your service ecosystem.
        </motion.p>

        {/* Two-column Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {points.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3 p-5 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-base leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
