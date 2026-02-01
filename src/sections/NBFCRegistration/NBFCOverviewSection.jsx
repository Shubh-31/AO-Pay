"use client";

import { motion } from "framer-motion";

export default function NBFCRegistrationOverview() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* H2 Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Understanding NBFC Registration in India - Complete Overview
          </h2>
          <div className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl shadow-sm p-8 text-gray-700 text-justify leading-relaxed">
            <p className="mb-4">
              Non-Banking Financial Companies play a vital role in India's
              financial ecosystem by providing essential financial services
              without holding a traditional banking license. An NBFC license
              from the Reserve Bank of India (RBI) enables companies to acquire
              shares, stocks, bonds, debentures, and government securities,
              making them crucial players in capital markets.
            </p>
            <p>
              Every NBFC operates under dual regulatory frameworks — registered
              under the Companies Act 2013 and regulated by RBI through the RBI
              Act, 1934. According to Section 45-I(c) of the RBI Act, any
              non-banking institution functioning as a financial entity
              qualifies as a Non-Banking Financial Company, subject to specific
              registration requirements and ongoing compliance obligations.
            </p>
          </div>
        </motion.div>

        {/* H3: Regulatory Framework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Regulatory Framework for NBFC Operations
          </h3>
          <p className="text-gray-700 leading-relaxed">
            NBFCs operate under Chapter IIIB of the Reserve Bank of India Act,
            1934, which establishes the comprehensive legal foundation governing
            their operations. This regulatory structure ensures NBFCs maintain
            financial discipline, consumer protection standards, and systemic
            stability while serving diverse market segments.
          </p>
        </motion.div>

        {/* H3: Registration and Approval Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 space-y-6"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Registration and Approval Process Requirements
          </h3>

          {/* H4: Company Registration */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Company Registration
            </h4>
            <p className="text-gray-700 leading-relaxed">
              NBFCs must be incorporated as companies under the Companies Act of
              2013 (or 1956 for older entities), establishing their legal
              identity before approaching the RBI for financial services
              authorization.
            </p>
          </div>

          {/* H4: Object Clause Mandate */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Object Clause Mandate
            </h4>
            <p className="text-gray-700 leading-relaxed">
              The Memorandum of Association must explicitly include financial
              activities as core business objectives, clearly defining the scope
              of proposed operations.
            </p>
          </div>

          {/* H4: RBI Approval Necessity */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              RBI Approval Necessity
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Before commencing any financial operations, companies must secure
              formal Certificate of Registration (CoR) from the RBI. This
              rigorous approval process ensures only qualified and compliant
              entities enter India's financial marketplace, protecting
              stakeholder interests.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
