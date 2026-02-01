"use client";

import { motion } from "framer-motion";

export default function AOPayServicesSection() {
  const services = [
    {
      title: "📜 Agreement & MoU Creation",
      desc: "Expert drafting of platform aggregation agreements, co-origination contracts, and Memorandums of Understanding tailored to your collaboration model and business objectives.",
    },
    {
      title: "💹 Revenue Model Structuring",
      desc: "Design optimal revenue-sharing frameworks and co-lending partnership structures balancing risk, reward, and regulatory compliance for all parties.",
    },
    {
      title: "🔗 Strategic Partner Matching",
      desc: "Connect NBFCs with vetted, high-quality fintech players and banking partners from our extensive network across India.",
    },
    {
      title: "🏛️ Escrow Account Setup",
      desc: "Complete assistance in opening and managing dedicated escrow accounts with appointed CAs for fund oversight and compliance.",
    },
    {
      title: "📈 Performance Analytics & Reporting",
      desc: "Comprehensive NPA tracking, FLDG reporting, business performance analysis, and monthly reconciliation services for transparency.",
    },
    {
      title: "✅ Regulatory Compliance Management",
      desc: "Full-spectrum compliance support covering TDS, GST, credit reporting, CKYC, RBI guidelines, and ongoing regulatory changes.",
    },
    {
      title: "⚖️ Legal Advisory Services",
      desc: "Expert legal guidance on collaboration structures, risk mitigation, dispute resolution, and regulatory interpretation.",
    },
    {
      title: "📋 Business Plan Development",
      desc: "Strategic business plan creation for fintech companies entering NBFC collaborations, including financial projections and market analysis.",
    },
    {
      title: "🛡️ Risk Management Framework",
      desc: "Implement secure risk-sharing protocols, CIC reporting systems, and transparency mechanisms for effective portfolio management.",
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
          Comprehensive AOPay Services for NBFC Collaboration Success
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-600 max-w-3xl mx-auto mb-16"
        >
          AOPay delivers end-to-end support for establishing and managing
          successful NBFC-fintech-bank partnerships. Our specialized services
          ensure regulatory compliance, operational efficiency, and sustainable
          growth.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 border border-gray-200"
            >
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
