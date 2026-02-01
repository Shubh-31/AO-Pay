"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NBFCBackgroundVerification() {
  const checks = [
    {
      imgSrc:
        "/assets/NBFCCollaboration/Essential/Financial Strength Assessment.png",
      title: "Financial Strength Assessment",
      desc: "Review audited financials, capitalization levels, funding sources, and cash flow stability.",
    },
    {
      imgSrc: "/assets/NBFCCollaboration/Essential/Promoter Profile Check.png",
      title: "Promoter Profile Check",
      desc: "Verify backgrounds, track records, and credibility of founding team and key stakeholders.",
    },
    {
      imgSrc:
        "/assets/NBFCCollaboration/Essential/Technology Infrastructure.png",
      title: "Technology Infrastructure",
      desc: "Evaluate platform security, scalability, data protection measures, and server locations.",
    },
    {
      imgSrc: "/assets/NBFCCollaboration/Essential/Regulatory Compliance.png",
      title: "Regulatory Compliance",
      desc: "Confirm adherence to RBI guidelines, data localization norms, and industry regulations.",
    },
    {
      imgSrc: "/assets/NBFCCollaboration/Essential/Operational Capability.png",
      title: "Operational Capability",
      desc: "Assess customer acquisition track record, collection efficiency, and risk management systems.",
    },
    {
      imgSrc: "/assets/NBFCCollaboration/Essential/Legal Standing.png",
      title: "Legal Standing",
      desc: "Review pending litigations, regulatory notices, and past compliance violations.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Essential Background Verification for NBFC-Fintech Partnerships
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-4 leading-relaxed"
        >
          Before entering collaboration agreements, NBFCs must conduct thorough
          due diligence on fintech partners to ensure financial stability,
          regulatory compliance, and operational capability. This verification
          becomes especially critical when partnering with foreign fintech
          companies.
        </motion.p>
      </div>

      {/* Grid of checks — black / white / gray theme */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {checks.map((c, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            {/* slim left accent in dark gray */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300 rounded-l-2xl" />
          <Image src={c.imgSrc} alt={c.title} className="w-6 mx-4" width={100} height={100}/>
            <h3 className="ml-4 text-lg font-semibold text-gray-900 mb-2">
              {c.title}
            </h3>
            <p className="ml-4 text-sm text-gray-600 leading-relaxed">
              {c.desc}
            </p>
          </motion.article>
        ))}
      </div>

      {/* Note / CTA */}
      <div className="mt-10 max-w-3xl mx-auto text-center">
        <p className="text-gray-700 mb-6">
          Comprehensive background checks protect NBFCs from regulatory,
          reputational, and financial risks. AOPay's verification framework
          covers financial, legal, technical and operational reviews to ensure
          reliable partnerships.
        </p>

        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href="#contact"
          className="inline-block px-6 py-3 rounded-full border border-gray-800 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition"
        >
          Request Verification Support
        </motion.a>
      </div>
    </section>
  );
}
