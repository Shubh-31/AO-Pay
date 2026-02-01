"use client";

import { motion } from "framer-motion";

export const LoanManagementUseCases = () => {
  const useCases = [
    {
      imgSrc:
        "/assets/LoanManagement/Real-World Applications and Use Cases/Digital Lending Platforms.png",
      title: "Digital Lending Platforms",
      desc: "Powered end-to-end digital lending experiences from application to disbursement. Support for personal loans, business loans, and specialized lending products.",
    },
    {
      imgSrc:
        "/assets/LoanManagement/Real-World Applications and Use Cases/Salary Advance Programs.png",
      title: "Salary Advance Programs",
      desc: "Enabled employees to access salary advances through automated processing workflows. Perfect for HR departments and payroll lending companies.",
    },
    {
      imgSrc:
        "/assets/LoanManagement/Real-World Applications and Use Cases/Merchant Financing Solutions.png",
      title: "Merchant Financing Solutions",
      desc: "Provided quick financing solution to merchants and small businesses. Integrate with POS systems and payment processors for seamless fund transfers.",
    },
    {
      imgSrc:
        "/assets/LoanManagement/Real-World Applications and Use Cases/P2P Lending Platforms.png",
      title: "P2P Lending Platforms",
      desc: "Support peer-to-peer lending platforms with automated fund transfers between lenders and borrowers. Include escrow services and automated distribution mechanisms.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Real-World Applications and Use Cases
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
        {useCases.map((item, index) => (
          <motion.div
            key={index}
            className="
              bg-white border border-gray-200 rounded-2xl shadow-md 
              hover:shadow-lg transition-all duration-300 
              p-6 flex flex-col text-center space-y-3
              w-full sm:w-[calc(50%-1rem)] lg:w-[45%]
            "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src = {item.imgSrc} alt = {item.title}  className="w-6 h-auto mb-4 mx-auto"/>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
