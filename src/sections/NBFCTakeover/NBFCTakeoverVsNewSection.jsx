"use client";

import { motion } from "framer-motion";

export default function NBFCTakeoverVsNewSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-white rounded-2xl shadow-md">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-black text-center mb-6"
      >
        NBFC Takeover vs New Registration – Which is Right for You?
      </motion.h2>

      {/* Subtitle */}
      <p className="text-center text-gray-700 mb-10">
        A detailed comparison between acquiring an existing NBFC and registering a new one from scratch.
      </p>

      {/* Comparison Table */}
      <div className="overflow-x-auto mb-12">
        <table className="min-w-full border border-gray-200 rounded-2xl overflow-hidden">
          <thead className="bg-gradient-to-r from-orange-400 to-blue-400 text-white">
            <tr>
              <th className="text-left px-6 py-3 text-lg font-semibold">Parameter</th>
              <th className="text-left px-6 py-3 text-lg font-semibold">NBFC Takeover</th>
              <th className="text-left px-6 py-3 text-lg font-semibold">New NBFC Registration</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
              <td className="px-6 py-3 font-medium">Timeline</td>
              <td className="px-6 py-3">60–180 days</td>
              <td className="px-6 py-3">180–270 days</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-200 hover:bg-gray-100 transition">
              <td className="px-6 py-3 font-medium">Market Entry Speed</td>
              <td className="px-6 py-3">Immediate with existing operations</td>
              <td className="px-6 py-3">Build from scratch</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
              <td className="px-6 py-3 font-medium">Customer Base</td>
              <td className="px-6 py-3">Inherit existing customers</td>
              <td className="px-6 py-3">Acquire new customers</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-200 hover:bg-gray-100 transition">
              <td className="px-6 py-3 font-medium">Revenue Generation</td>
              <td className="px-6 py-3">Immediate from day one</td>
              <td className="px-6 py-3">After months of operations</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
              <td className="px-6 py-3 font-medium">Brand Recognition</td>
              <td className="px-6 py-3">Leverage existing market presence</td>
              <td className="px-6 py-3">Build brand from zero</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-200 hover:bg-gray-100 transition">
              <td className="px-6 py-3 font-medium">Regulatory Risk</td>
              <td className="px-6 py-3">Inherit compliance history</td>
              <td className="px-6 py-3">Fresh compliance start</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
              <td className="px-6 py-3 font-medium">Initial Investment</td>
              <td className="px-6 py-3">Higher (acquisition premium)</td>
              <td className="px-6 py-3">Lower (minimum capital only)</td>
            </tr>
            <tr className="bg-gray-50 border-b border-gray-200 hover:bg-gray-100 transition">
              <td className="px-6 py-3 font-medium">Operational Systems</td>
              <td className="px-6 py-3">Established infrastructure</td>
              <td className="px-6 py-3">Build new systems</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
              <td className="px-6 py-3 font-medium">Due Diligence Need</td>
              <td className="px-6 py-3">Extensive required</td>
              <td className="px-6 py-3">Not applicable</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100 transition">
              <td className="px-6 py-3 font-medium">Flexibility</td>
              <td className="px-6 py-3">Work with existing structure</td>
              <td className="px-6 py-3">Design custom structure</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Decision Framework */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative bg-white rounded-2xl shadow-md p-8 border border-gray-100"
      >
        {/* Gradient left border */}
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-orange-400 to-blue-400 rounded-l-2xl" />

        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          🧭 Decision Framework
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* NBFC Takeover */}
          <div className="bg-gray-50 p-6 rounded-xl border hover:shadow-md transition">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Choose NBFC Takeover if:</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You need rapid market entry and immediate operations</li>
              <li>Existing customer base and market presence are valuable</li>
              <li>You have capital for acquisition premium</li>
              <li>You can integrate existing operations with your strategy</li>
              <li>Time-to-revenue is critical for your business model</li>
            </ul>
          </div>

          {/* New Registration */}
          <div className="bg-gray-50 p-6 rounded-xl border hover:shadow-md transition">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Choose New Registration if:</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You prefer building custom infrastructure and culture</li>
              <li>You want complete control over systems and processes</li>
              <li>Capital is limited to minimum regulatory requirements</li>
              <li>Your business model is unique requiring custom setup</li>
              <li>You can afford longer time to market entry</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
