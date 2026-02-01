"use client";

import { motion } from "framer-motion";

export default function NBFCChallengesSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 bg-white rounded-2xl shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
        Common Challenges in NBFC Takeover and How AOPay Solves Them
      </h2>

      <p className="text-gray-700 text-center mb-12 leading-relaxed">
        The NBFC acquisition process often encounters hurdles that can delay
        completion or cause post-acquisition complications. Here's how AOPay's
        expertise mitigates these risks.
      </p>

      {/* Challenges Card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 overflow-hidden border border-gray-100 mb-10"
      >
        {/* gradient left border */}
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-orange-400 to-blue-400 rounded-l-2xl" />

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          ⚠️ Common Challenges
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Hidden liabilities and NPAs</li>
          <li>Inaccurate or manipulated financial statements</li>
          <li>Pending regulatory notices or unresolved compliance issues</li>
          <li>Overvaluation or unrealistic valuation of target NBFC</li>
          <li>Complex and time-consuming RBI approval process</li>
          <li>Resistance from key stakeholders or management</li>
          <li>Operational or cultural integration difficulties</li>
          <li>Gaps in statutory and compliance documentation</li>
          <li>Errors or omissions in legal paperwork</li>
        </ul>
      </motion.div>

      {/* Solutions Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 overflow-hidden border border-gray-100"
      >
        {/* gradient left border */}
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-green-400 to-blue-500 rounded-l-2xl" />

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          ✅ AOPay Solutions
        </h3>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Forensic Due Diligence:</strong> Identify hidden
            liabilities, NPAs, or compliance risks early.
          </li>
          <li>
            <strong>Independent Audit Verification:</strong> Validate the
            financial integrity of the target NBFC.
          </li>
          <li>
            <strong>Regulatory Compliance Review:</strong> Ensure RBI and MCA
            compliance before deal finalization.
          </li>
          <li>
            <strong>Professional Valuation Services:</strong> Obtain accurate
            fair-value reports aligned with RBI standards.
          </li>
          <li>
            <strong>Expert RBI Liaison:</strong> Smooth coordination with RBI
            for faster approvals.
          </li>
          <li>
            <strong>Stakeholder Communication Strategy:</strong> Build trust and
            alignment between both parties.
          </li>
          <li>
            <strong>Integration Playbook Development:</strong> Achieve seamless
            operational and cultural integration.
          </li>
          <li>
            <strong>Compliance Gap Remediation:</strong> Address all
            pre-existing regulatory shortcomings.
          </li>
          <li>
            <strong>Meticulous Documentation:</strong> Prepare legally sound and
            RBI-compliant transaction papers.
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
