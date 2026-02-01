"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyPartnerWithAOPay() {
  const reasons = [
    {
      imgSrc:
        "/assets/NBFCCollaboration/Why Partner with AOPay for NBFC Collaboration/Expert.png",
      title: "1. Expert Regulatory Guidance",
      desc: "Navigate evolving RBI guidelines confidently with our regulatory experts. We ensure adherence to TDS, GST, NPA provisioning, and CIC reporting requirements so compliance never hinders your growth trajectory.",
    },
    {
      imgSrc:
        "/assets/NBFCCollaboration/Why Partner with AOPay for NBFC Collaboration/EndToEnd.png",
      title: "2. End-to-End Collaboration Support",
      desc: "Benefit from strategic expertise across all collaboration models—co-lending, on-lending, and FLDG partnerships. We handle documentation, agreement structuring, and ongoing management for seamless execution.",
    },
    {
      imgSrc:
        "/assets/NBFCCollaboration/Why Partner with AOPay for NBFC Collaboration/RiskManagement.png",
      title: "3. Risk Management Excellence",
      desc: "We establish secure escrow accounts, implement CIC reporting protocols, and facilitate monthly reconciliations, providing clarity and minimizing financial exposure for all parties.",
    },
    {
      imgSrc:
        "/assets/NBFCCollaboration/Why Partner with AOPay for NBFC Collaboration/Operational.png",
      title: "4. Operational Efficiency Enhancement",
      desc: "Our co-lending and on-lending support establishes clear structures for risk and profit-sharing, helping you achieve smooth operational flows and reduced administrative burden.",
    },
    {
      imgSrc:
        "/assets/NBFCCollaboration/Why Partner with AOPay for NBFC Collaboration/MarketAccess.png",
      title: "5. Market Access Expansion",
      desc: "Through our extensive network, we help you tap into new demographics and customer segments. Partner with carefully vetted fintechs that make onboarding faster, more personalized, and resource-efficient.",
    },
    {
      imgSrc:
        "/assets/NBFCCollaboration/Why Partner with AOPay for NBFC Collaboration/FutureReady.png",
      title: "6. Future-Ready Strategies",
      desc: "Our flexible collaboration models and advisory services keep your NBFC adaptable and aligned with latest fintech innovations and banking trends, ensuring long-term competitiveness.",
    },
    {
      imgSrc:
        "/assets/NBFCCollaboration/Why Partner with AOPay for NBFC Collaboration/TrackRecord.png",
      title: "7. Proven Track Record",
      desc: "With hundreds of successful NBFC collaborations facilitated, we bring battle-tested frameworks and best practices that accelerate your partnership success.",
    },
    {
      imgSrc:
        "/assets/NBFCCollaboration/Why Partner with AOPay for NBFC Collaboration/Technology.png",
      title: "8. Technology Integration Support",
      desc: "We assist in evaluating and integrating fintech platforms, ensuring seamless technology adoption that enhances customer experience and operational efficiency.",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          Why Partner with AOPay for NBFC Collaboration?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-600 max-w-3xl mx-auto mb-16"
        >
          AOPay stands as India's trusted advisor for NBFC-fintech-bank
          collaborations, bringing unmatched expertise and comprehensive support
          throughout your partnership journey.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 border border-gray-200"
            >
              <Image src={item.imgSrc} alt={item.title} className="w-6 mb-2" width={100} height={100}/>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
