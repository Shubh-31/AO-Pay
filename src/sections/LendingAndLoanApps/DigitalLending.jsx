"use client";

import { motion } from "framer-motion";
import { CreditCard, Clock, UserCheck } from "lucide-react";

const DigitalLending = () => {
  const features = [
    {
      icon: <Clock className="w-7 h-7 text-blue-600" />,
      title: "Faster Loan Processing",
      description:
        "90% faster loan processing with automated verification workflows, reducing turnaround time and improving borrower satisfaction.",
    },
    {
      icon: <CreditCard className="w-7 h-7 text-blue-600" />,
      title: "Automated Underwriting",
      description:
        "75% reduction in manual underwriting tasks through intelligent automation and data-driven credit assessment models.",
    },
    {
      icon: <UserCheck className="w-7 h-7 text-blue-600" />,
      title: "Enhanced Borrower Experience",
      description:
        "85% improvement in borrower onboarding experience and satisfaction with seamless, digital-first loan application flows.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Revolutionizing Digital Lending Operations
        </motion.h2>

        {/* Intro Paragraph */}
        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          Lending industry has transformed dramatically with the rise of digital
          loan apps, fintech platforms, and alternative lending models. As
          lending businesses scale from startup NBFCs to established financial
          institutions, they face increasing complexity in managing borrower
          verification, credit assessment, loan disbursement, and regulatory
          compliance across diverse market segments.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl shadow-lg p-6 text-left hover:shadow-blue-500/20 transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalLending;
