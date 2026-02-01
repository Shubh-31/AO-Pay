"use client";

import { motion } from "framer-motion";

export default function NBFCGrowthSection() {
  return (
    <section className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Unlock Growth Through Strategic NBFC Collaboration
        </motion.h2>

        {/* Supporting Paragraph */}
        <p className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          The future of financial services lies in collaborative ecosystems
          where NBFCs, banks, and fintechs combine strengths to serve customers
          better, manage risks intelligently, and scale profitably. Whether
          you're an NBFC seeking fintech partnerships, a bank exploring
          co-lending opportunities, or a fintech company looking for NBFC
          collaborators, AOPay provides the expertise and network to make your
          partnerships successful.
        </p>

        {/* CTA Div Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-8 mb-10 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-black mb-3">
            Ready to Transform Your Financial Business?
          </h3>
          <p className="text-gray-700 mb-6">
            Partner with India&apos;s leading NBFC collaboration advisory to
            unlock new revenue streams
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Schedule Free Consultation
          </motion.button>
        </motion.div>

        {/* Key Benefits */}
        <div className="flex flex-wrap justify-center text-gray-700 text-sm gap-x-6 gap-y-2 mb-12">
          <p>✓ Connect with 9000+ NBFCs</p>
          <p>✓ Expert Compliance Support</p>
          <p>✓ Revenue Model Optimization</p>
          <p>✓ Risk Management Framework</p>
          <p>✓ Technology Integration</p>
          <p>✓ Ongoing Partnership Support</p>
        </div>

        {/* Two Final Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Speak with Experts */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-8 text-left"
          >
            <h4 className="text-xl font-semibold text-black mb-2 flex items-center gap-2">
              📞 Speak with Experts
            </h4>
            <p className="text-gray-700 mb-4">
              Get personalized guidance on optimal collaboration models for your
              business objectives
            </p>
            <a
              href="#contact"
              className="text-blue-600 font-medium hover:underline"
            >
              Contact Now →
            </a>
          </motion.div>

          {/* Find Partners */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-8 text-left"
          >
            <h4 className="text-xl font-semibold text-black mb-2 flex items-center gap-2">
              🤝 Find Partners
            </h4>
            <p className="text-gray-700 mb-4">
              Access our verified network of NBFCs, banks, and fintechs seeking
              collaboration
            </p>
            <a
              href="#network"
              className="text-blue-600 font-medium hover:underline"
            >
              Explore Network →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
