"use client";

import { motion } from "framer-motion";

export default function NBFCCompliance() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* H2 + Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            NBFC Banking Solution with Full Compliance
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            AOPAY NBFC Company Software ensures complete regulatory compliance
            with RBI guidelines, helping you navigate the complex regulatory
            landscape while maintaining operational efficiency. Built-in
            compliance features reduce manual oversight and ensure audit
            readiness.
          </p>
        </motion.div>

        {/* Grid Section for RBI + Risk */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* RBI Compliance Framework */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition p-8 space-y-6"
          >
            <img
              src="/assets/NBFC/NBFC Banking Transformation with Full Compliance/RBI Compliance Framework.png"
              alt="RBI Compliance Framework"
              className="w-12 mb-2"
            />
            <h3 className="text-2xl font-semibold text-gray-900">
              RBI Compliance Framework
            </h3>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              {[
                "RBI Guidelines",
                "KYC/AML",
                "Audit Trail",
                "Data Protection",
              ].map((btn, i) => (
                <button
                  key={i}
                  className="bg-green-600 text-white px-5 py-1 rounded-lg shadow hover:bg-green-700 transition text-sm"
                >
                  {btn}
                </button>
              ))}
            </div>

            {/* Bullet Points */}
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Automated regulatory reporting</li>
              <li>Fair practice code implementation</li>
              <li>Interest rate compliance monitoring</li>
              <li>Loan classification and provisioning</li>
            </ul>
          </motion.div>

          {/* Risk Management & Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition p-8 space-y-6"
          >
            <img
              src="/assets/NBFC/NBFC Banking Transformation with Full Compliance/Risk Management & Controls.png"
              alt="Risk Management & Controls"
              className="w-12 mb-2"
            />
            <h3 className="text-2xl font-semibold text-gray-900">
              Risk Management & Controls
            </h3>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Real-time fraud detection systems</li>
              <li>Credit risk assessment models</li>
              <li>Portfolio concentration limits</li>
              <li>Early warning systems</li>
              <li>Stress testing capabilities</li>
              <li>Regulatory capital adequacy monitoring</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
