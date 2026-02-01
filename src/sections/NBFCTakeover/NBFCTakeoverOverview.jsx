"use client";
import React from "react";

export default function NBFCTakeoverOverview() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading and Intro */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center md:text-left">
          What is NBFC Takeover - Complete Overview
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          A Non-Banking Financial Company (NBFC) is a corporate entity
          registered under the Companies Act (1956 or 2013) that engages in
          financial lending, investments, and related activities as defined
          under Section 45-IA of the RBI Act, 1934. To operate legally, NBFCs
          must obtain a Certificate of Registration (CoR) from the Reserve Bank
          of India through the standard NBFC registration process.
        </p>
        <p className="text-gray-700 mb-10 leading-relaxed">
          However, there’s an alternative route to entering the NBFC business:{" "}
          <strong>NBFC Takeover</strong>. This is the process of acquiring an
          already functioning, RBI-registered NBFC rather than applying for
          fresh registration from scratch. While this approach offers speed and
          certainty, it involves complex legal, financial, and regulatory
          considerations that require expert navigation.
        </p>

        {/* Why Choose Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Why Choose NBFC Takeover Over New Registration?
          </h3>
          <p className="text-gray-700">
            NBFC takeover is ideal for individuals and corporates seeking speedy
            entry into financial services with an established market presence.
            Instead of waiting 6–9 months for new registration, acquire a
            functioning NBFC in 60 days with AOPay’s expert support.
          </p>
        </div>

        {/* Benefits & Key Considerations */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h4 className="text-lg font-semibold text-green-600 mb-3">
              ✓ NBFC Takeover Benefits
            </h4>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Faster market entry (60 days vs 180+ days)</li>
              <li>Inherit existing RBI license</li>
              <li>Established market presence</li>
              <li>Existing customer base</li>
              <li>Proven operational systems</li>
              <li>Immediate revenue generation</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h4 className="text-lg font-semibold text-red-600 mb-3">
              ⚠ Key Considerations
            </h4>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Comprehensive due diligence required</li>
              <li>RBI approval for major changes</li>
              <li>Accurate valuation assessment</li>
              <li>Legal compliance verification</li>
              <li>Hidden liabilities check</li>
              <li>Operational viability analysis</li>
            </ul>
          </div>
        </div>

        {/* Closing Paragraph */}
        <p className="text-gray-700 mt-10 leading-relaxed">
          At <strong>AOPay</strong>, our team of professionals — including
          Chartered Accountants, Company Secretaries, Cost Accountants, and
          Legal Experts — specialize in RBI registrations and NBFC takeover
          procedures. We streamline your acquisition journey, completing the
          entire process in less than 60 days.
        </p>
      </div>
    </section>
  );
}
