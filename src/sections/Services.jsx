"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    imgSrc:
      "/assets/Home/Everything Your Business Needs, Nothing It Doesn't/Payment Infrastructure.png",
    title: "Payment Infrastructure",
    description:
      "End-to-end payment processing ecosystem with multi-channel support, real-time settlement, and intelligent routing.",
  },
  {
    imgSrc:
      "/assets/Home/Everything Your Business Needs, Nothing It Doesn't/Verification Services.png",
    title: "Verification Services",
    description:
      "Comprehensive KYC and identity verification suite with instant validation across multiple data sources.",
  },
  {
    imgSrc:
      "/assets/Home/Everything Your Business Needs, Nothing It Doesn't/Core Banking.png",
    title: "Core Banking",
    description:
      "Full-stack banking infrastructure designed for NBFCs, cooperatives, and modern financial institutions.",
  },
  {
    imgSrc:
      "/assets/Home/Everything Your Business Needs, Nothing It Doesn't/Lending Solutions.png",
    title: "Lending Solutions",
    description:
      "Complete loan origination, underwriting, and management systems with flexible configuration.",
  },
  {
    imgSrc:
      "/assets/Home/Everything Your Business Needs, Nothing It Doesn't/Treasury & Escrow.png",
    title: "Treasury & Escrow",
    description:
      "Advanced fund management capabilities with automated workflows and compliance tracking.",
  },
  {
    imgSrc:
      "/assets/Home/Everything Your Business Needs, Nothing It Doesn't/Account Management.png",
    title: "Account Management",
    description:
      "Virtual accounts, e-wallets, and simple account structures for complex business models.",
  },
  {
    imgSrc:
      "/assets/Home/Everything Your Business Needs, Nothing It Doesn't/IntegratedServices.png",
    title: "50+ Integrated Services",
    description: "A complete suite of modular services for seamless scaling.",
  },
  {
    imgSrc:
      "/assets/Home/Everything Your Business Needs, Nothing It Doesn't/API.png",
    title: "99.9% API Uptime SLA",
    description: "Reliable infrastructure with enterprise-grade redundancy.",
  },
  {
    imgSrc:
      "/assets/Home/Everything Your Business Needs, Nothing It Doesn't/Average.png",
    title: "<100ms Average Response Time",
    description:
      "Fast and responsive API calls for critical business workflows.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Everything Your Business Needs, Nothing It Doesn't
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          Stop juggling multiple vendors, disparate systems, and integration
          nightmares. AOPAY modular platform delivers a complete suite of
          banking and financial services through a single, powerful API layer.
          Deploy what you need today, scale seamlessly tomorrow.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gray-800 rounded-2xl p-6 flex flex-col items-start space-y-4 hover:bg-gray-700 transition-all"
            >
              <div className="text-white w-full py-5 flex justify-between">
                <Image
                  src={service.imgSrc}
                  width={50}
                  height={50}
                  alt={service.title}
                />
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-400 text-left">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
