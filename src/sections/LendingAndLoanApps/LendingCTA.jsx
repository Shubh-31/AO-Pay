"use client";

import { motion } from "framer-motion";

const LendingCTA = () => {
  const lendingServices = [
    {
      imgSrc:
        "/assets/LoanLending/Ready to Transform Your Digital Lending Operations/Loan Management Solutions.png",
      heading: "Loan Management Solutions",
      description:
        "Comprehensive loan processing, automated underwriting, portfolio management, and collection automation for efficient lending operations.",
      buttonText: "Explore Loan Management",
    },
    {
      imgSrc:
        "/assets/LoanLending/Ready to Transform Your Digital Lending Operations/Credit Verification Services.png",
      heading: "Credit Verification Services",
      description:
        "Real-time CIBIL scoring, identity verification, income validation, and comprehensive borrower assessment for informed lending decisions.",
      buttonText: "Explore Verification",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Ready to Transform Your Digital Lending Operations?
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg leading-relaxed"
        >
          Launch your loan app or scale your existing lending business with
          AOPAY's comprehensive platform. From credit verification to loan
          management, we provide everything you need to succeed in digital
          lending.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Start Now
          </button>
        </motion.div>

        {/* Lending Service Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {lendingServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition flex flex-col gap-4"
            >
              {/* Icon + heading in one line */}
              <div className="flex items-center gap-3">
                <img
                  src={service.imgSrc}
                  alt={service.heading}
                  className="w-6 h-auto"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.heading}
                </h3>
              </div>

              {/* Description centered */}
              <p className="text-gray-600 text-base leading-relaxed text-center">
                {service.description}
              </p>

              {/* Button centered */}
              <div className="w-full flex justify-center">
                <button className="bg-gray-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition">
                  {service.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600 text-base leading-relaxed mt-12"
        >
          As the digital lending industry continues to evolve with technological
          innovation and changing consumer expectations, having the right
          technology infrastructure is crucial for sustainable growth and
          competitive advantage. AOPAY's comprehensive lending platform ensures
          your business stays ahead of market trends while maintaining
          operational excellence, regulatory compliance, and superior borrower
          experiences in the dynamic financial services landscape.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-lg font-semibold text-gray-900 mt-8"
        >
          Ready to revolutionize your lending business? Join leading NBFCs and
          fintech companies already using AOPAY to transform their digital
          lending operations and achieve remarkable growth.
        </motion.h3>
      </div>
    </section>
  );
};

export default LendingCTA;
