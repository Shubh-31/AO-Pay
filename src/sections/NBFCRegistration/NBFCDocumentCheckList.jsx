"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function NBFCDocumentChecklist() {
  const documents = [
    "PAN Card of the company and all directors",
    "Bank statements proving ₹10 crore minimum paid-up capital",
    "Complete KYC documentation for directors and shareholders",
    "Professional background details of all directors",
    "Net worth certificates (CA-certified) for directors and shareholders",
    "Confidential banker reports for shareholders and directors",
    "Attested copies of highest educational qualifications",
    "Credit reports from authorized credit bureaus",
    "CA-certified capital structure documentation",
    "Memorandum and Articles of Association (MOA & AOA)",
    "Board-approved business plan with 5-year financial projections",
    "Employment certificates and business experience proof",
    "Banker confirmation of ₹10 crore fixed deposit",
    "Board-approved credit policy and lending norms",
    "Business Standard Operating Procedures (SOPs)",
    "Technology and software implementation plan",
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Documents Required for NBFC Registration - Complete Checklist
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Preparing comprehensive documentation is critical for smooth NBFC
            registration processing. Here's your complete document checklist:
          </p>
        </motion.div>

        {/* Checklist Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg p-8"
        >
          <div className="grid md:grid-cols-2 gap-4">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-gray-800 text-base leading-relaxed">{doc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-700 text-lg max-w-6xl mx-auto"
        >
          <span className="font-semibold text-green-700">
            AOPay consultants
          </span>{" "}
          assist with complete document preparation, verification, and
          submission to ensure zero delays in your application process.
        </motion.p>
      </div>
    </section>
  );
}
