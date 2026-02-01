"use client";

import { motion } from "framer-motion";

export default function NBFCCollaborationAdvantages() {
  const advantages = [
    {
      icon: "🚀",
      title: "Accelerated Market Expansion",
      desc: "Rapidly expand reach into new markets and customer segments. Access underserved regions and niche audiences, attracting high-potential borrowers that traditional channels miss.",
    },
    {
      icon: "💎",
      title: "Enhanced Profitability",
      desc: "Reduce operational costs while increasing profit margins. Pool lending capital, risk management tools, and technology infrastructure to unlock new revenue streams.",
    },
    {
      icon: "⚡",
      title: "Speed to Market",
      desc: "Gain competitive advantage through fintech innovations. Advanced credit assessment, onboarding, and loan management tools enable quick adaptation to market shifts and customer needs.",
    },
    {
      icon: "🛡️",
      title: "Risk Diversification",
      desc: "Each collaboration model—co-lending, on-lending, or FLDG—diversifies risk and creates healthier loan portfolios. Strategic credit exposure management strengthens resilience against market volatility.",
    },
    {
      icon: "✅",
      title: "Seamless Compliance",
      desc: "Effortlessly meet evolving regulations with partnership support. Stay compliant with TDS, GST, CKYC requirements while focusing on business expansion with confidence.",
    },
    {
      icon: "🎯",
      title: "Shared Resources",
      desc: "Leverage combined strengths—NBFCs provide regulatory expertise and capital, fintechs deliver technology and customer reach, banks offer funding scale and credibility.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-white rounded-2xl shadow-md my-10">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
        Strategic Advantages of NBFC Collaboration Partnerships
      </h2>

      {/* Grid of Advantages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {advantages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-3 flex items-center gap-2">
              <span className="text-2xl">{item.icon}</span> {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg shadow-md transition-all duration-300">
            Explore Partnership Opportunities
          </button>
        </motion.div>
      </div>
    </section>
  );
}
