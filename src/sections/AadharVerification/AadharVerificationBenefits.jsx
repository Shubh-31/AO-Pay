"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Server, Book, Lock, BarChart } from "lucide-react";

export default function AadhaarVerificationBenefits() {
  const benefits = [
    {
      text: "99.9% Verification Accuracy Rate",
      icon: <Shield className="w-6 h-6 text-[#0a2540]" />,
    },
    {
      text: "Real-time Response Under 2 Seconds",
      icon: <Zap className="w-6 h-6 text-[#0a2540]" />,
    },
    {
      text: "UIDAI Compliant & Government Approved",
      icon: <Server className="w-6 h-6 text-[#0a2540]" />,
    },
    {
      text: "24/7 Technical Support & Monitoring",
      icon: <Book className="w-6 h-6 text-[#0a2540]" />,
    },
    {
      text: "Comprehensive Developer Documentation",
      icon: <Book className="w-6 h-6 text-[#0a2540]" />,
    },
    {
      text: "Flexible Integration Options",
      icon: <Zap className="w-6 h-6 text-[#0a2540]" />,
    },
    {
      text: "Advanced Security & Encryption",
      icon: <Lock className="w-6 h-6 text-[#0a2540]" />,
    },
    {
      text: "Scalable Infrastructure for High Volume",
      icon: <Server className="w-6 h-6 text-[#0a2540]" />,
    },
    {
      text: "Detailed Analytics & Reporting",
      icon: <BarChart className="w-6 h-6 text-[#0a2540]" />,
    },
    {
      text: "Regulatory Compliance Support",
      icon: <Shield className="w-6 h-6 text-[#0a2540]" />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#0a2540]"
        >
          Benefits of Using AOPAY Aadhaar Verification API
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700 mt-4 text-lg max-w-3xl mx-auto"
        >
          Transform your digital identity verification process with our
          enterprise-grade Aadhaar authentication solution designed for
          businesses requiring reliable, secure, and scalable KYC solutions.
        </motion.p>
      </div>

      {/* Benefits Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {benefits.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0a2540] transition"
          >
            <div className="flex-shrink-0 bg-[#eaf1fa] rounded-xl p-3">
              {item.icon}
            </div>
            <p className="text-gray-800 font-medium leading-snug text-left">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
