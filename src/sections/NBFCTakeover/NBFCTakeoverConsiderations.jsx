"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function NBFCTakeoverConsiderations() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
        >
          Critical Points to Consider Before NBFC Takeover
        </motion.h2>

        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          Successful NBFC acquisition requires meticulous planning and
          comprehensive evaluation. Below are essential considerations to review
          before proceeding with an acquisition.
        </p>

        {/* Three main considerations */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* 1. Due Diligence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 overflow-hidden border border-gray-100"
          >
            {/* gradient top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-blue-400 rounded-t-2xl" />
            <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-3">
              1. Comprehensive Due Diligence Process
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Conduct extensive background research and verification before
              committing to any acquisition. Create a detailed checklist
              covering financial, legal, operational, and compliance aspects.
              Define clear business objectives and assess whether the target
              NBFC can realistically achieve them. Due diligence should uncover
              hidden liabilities, pending litigations, regulatory notices, or
              operational inefficiencies that could impact post-acquisition
              performance.
            </p>
          </motion.div>

          {/* 2. Candidate Suitability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 overflow-hidden border border-gray-100"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-blue-400 rounded-t-2xl" />
            <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-3">
              2. Candidate Suitability Assessment
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Develop a shortlist of suitable target NBFCs and evaluate
              candidates on asset quality, customer base, geographic presence,
              technology infrastructure, and strategic fit. Prioritize NBFCs
              that complement your business model or fill targeted market gaps.
            </p>
          </motion.div>

          {/* 3. Financial Position Evaluation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 overflow-hidden border border-gray-100"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-blue-400 rounded-t-2xl" />
            <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-3">
              3. Financial Position Evaluation
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Analyze profitability trends, asset quality, capital adequacy,
              liquidity, and growth trajectory. Use valuation methods (DCF,
              comparables, net asset value) to determine a fair price and plan
              your financing mix — equity, debt, or a combination — to support
              the acquisition.
            </p>
          </motion.div>
        </div>

        {/* Red flags card (full width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white border border-red-100 rounded-2xl shadow-md p-6"
        >
          <div className="flex items-start gap-8">
            {/* Icon */}
            <div className="flex-shrink-0 bg-red-50 rounded-full p-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>

            {/* Content */}
            <div>
              <h4 className="text-lg font-semibold text-red-700 mb-3">
                ⚠️ Common Due Diligence Red Flags
              </h4>

              <div className="grid md:grid-cols-2 gap-x-16 gap-y-2 text-gray-700">
                {/* Left Column */}
                <ul className="list-disc list-inside space-y-2">
                  <li>High Non-Performing Assets (NPA) ratio</li>
                  <li>Pending regulatory notices or violations</li>
                  <li>Ongoing legal disputes or litigations</li>
                  <li>Negative net owned funds</li>
                </ul>

                {/* Right Column */}
                <ul className="list-disc list-inside space-y-2">
                  <li>Poor corporate governance practices</li>
                  <li>Outdated technology infrastructure</li>
                  <li>High management turnover</li>
                  <li>Concentration risk in customer or asset portfolio</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/contact-us" className="inline-block">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full shadow-md transition">
              Get Expert Due Diligence Support
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
