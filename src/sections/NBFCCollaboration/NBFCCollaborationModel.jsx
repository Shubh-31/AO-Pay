"use client";

import { motion } from "framer-motion";

export default function NBFCCollaborationModel() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-white rounded-2xl shadow-md">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
        Understanding NBFC Collaboration Model in India
      </h2>

      {/* Intro Paragraph */}
      <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center max-w-4xl mx-auto mb-10">
        India's NBFC sector comprises over{" "}
        <strong>9,000 registered entities</strong>, yet only{" "}
        <strong>954 companies</strong> maintain a book size exceeding ₹40
        crores. The majority operate with the minimum required capital of ₹2
        crores, creating significant opportunities for strategic collaboration
        that accelerates growth for both NBFCs and their partner firms.
      </p>

      <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center max-w-4xl mx-auto mb-12">
        The NBFC collaboration model allows license-holding companies to partner
        with fintechs or banks for lead sourcing and access to additional
        lending capital. Through structured agreements, collaborating parties
        share revenues and, in some models, even distribute risk associated with
        non-performing assets (NPAs).
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { value: "9,000+", label: "Registered NBFCs in India" },
          { value: "954", label: "NBFCs with ₹40Cr+ Book Size" },
          { value: "70%", label: "Typical FLDG Coverage" },
          { value: "24–36%", label: "ROI Share for Fintechs" },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-6 rounded-2xl shadow-sm text-center"
          >
            <h4 className="text-3xl font-bold text-black mb-2">
              {item.value}
            </h4>
            <p className="text-gray-700 font-medium">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Market Context */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-inner">
        <h3 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
          📈 Market Context: Why NBFC Collaboration Matters Now
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          Large NBFCs have faced significant challenges since 2019, experiencing
          intense competition from agile small and medium-sized NBFCs that
          demonstrate superior performance. This market dynamic has driven many
          established NBFCs to actively seek partnerships with fintech firms and
          banks to raise additional funds and acquire quality leads.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Simultaneously, fintechs bring technological innovation, customer
          acquisition capabilities, and digital-first approaches that complement
          traditional NBFC strengths in risk management and regulatory
          compliance. This synergy creates win-win partnerships that benefit all
          stakeholders.
        </p>
      </div>
    </section>
  );
}
