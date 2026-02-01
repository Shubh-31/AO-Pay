"use client";

import { motion } from "framer-motion";

export default function NBFCTakeoverCTASection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-white rounded-2xl shadow-md">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6"
      >
        Get Started with Your NBFC Takeover Journey Today
      </motion.h2>

      {/* Paragraph */}
      <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Acquiring an NBFC offers tremendous strategic advantages for investors,
        corporates, and financial institutions looking to rapidly enter or
        expand in India’s growing financial services sector. However, success
        requires expert navigation of complex regulatory, legal, and financial
        considerations.
      </p>

      {/* Main CTA Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-10 overflow-hidden"
      >
        {/* Gradient left border */}
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-orange-400 to-blue-400 rounded-l-2xl" />

        <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Ready to Acquire Your Target NBFC?
        </h3>
        <p className="text-gray-700 mb-6 text-center">
          Join corporates and investors who trust AOPay for seamless NBFC
          takeover execution.
        </p>

        <button className="px-6 py-3 bg-gradient-to-r from-orange-400 to-blue-400 text-white font-semibold rounded-xl shadow hover:shadow-md transition text-center mx-auto block">
          Schedule Free Consultation
        </button>
      </motion.div>

      {/* Subcards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all overflow-hidden"
        >
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-orange-400 to-blue-400 rounded-l-2xl" />
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            📞 Speak with Experts
          </h4>
          <p className="text-gray-700 mb-4">
            Get personalized consultation on your NBFC takeover requirements.
          </p>
          <a
            href="#"
            className="text-blue-600 font-semibold hover:underline transition"
          >
            Contact Now →
          </a>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all overflow-hidden"
        >
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-orange-400 to-blue-400 rounded-l-2xl" />
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            📋 Request Proposal
          </h4>
          <p className="text-gray-700 mb-4">
            Receive detailed service proposal and pricing for your acquisition.
          </p>
          <a
            href="#"
            className="text-blue-600 font-semibold hover:underline transition"
          >
            Get Proposal →
          </a>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all overflow-hidden"
        >
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-orange-400 to-blue-400 rounded-l-2xl" />
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            🎯 Target Identification
          </h4>
          <p className="text-gray-700 mb-4">
            Access our database of NBFCs available for acquisition.
          </p>
          <a
            href="#"
            className="text-blue-600 font-semibold hover:underline transition"
          >
            View NBFCs →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
