"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Globe2 } from "lucide-react";

export const NeoBankingSolutions = () => {
  const solutions = [
    {
      icon: <Zap className="w-6 h-6 text-green-500" />,
      heading: "Startup Neo Banks",
      description:
        "For emerging digital banks, AOPAY's Payment Gateway API enables immediate acceptance of multiple payment methods without the complexity of managing individual processor relationships. Our KYC APIs allow you to onboard customers securely within minutes, ensuring regulatory compliance from day one while preventing fraudulent account openings.",
      benefits:
        "Rapid time-to-market, minimal infrastructure investment, built-in compliance, and affordable pricing for early-stage growth.",
    },
    {
      icon: <Layers className="w-6 h-6 text-green-500" />,
      heading: "Mid-Scale Digital Banks",
      description:
        "Growing neo banks benefit from AOPAY's Virtual Account API and Connected Banking features that integrate seamlessly with your core banking system, ensuring smooth cash flow management and real-time reconciliation. Our KYB APIs verify business customers and partners, reducing risk while expanding your commercial banking services.",
      benefits:
        "Automated reconciliation, multi-product expansion, enhanced fraud prevention, and operational efficiency at scale.",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-green-500" />,
      heading: "Enterprise Digital Banking Platforms",
      description:
        "Large-scale neo banks processing millions of transactions daily leverage AOPAY's complete API suite to support international payments, multi-currency accounts, and cross-border remittances. Our Banking & Financial Software provides detailed analytics, regulatory reporting, and tax compliance across multiple jurisdictions while maintaining sub-second response times.",
      benefits:
        "Global scalability, comprehensive reporting, multi-region compliance, advanced API customization, and dedicated enterprise support.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center md:text-left"
        >
          Neo Banking Solutions for Every Scale
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-50 rounded-full">{sol.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {sol.heading}
                </h3>
              </div>
              <p className="text-gray-600 mb-3">{sol.description}</p>
              <p className="text-gray-800 font-medium">
                <span className="text-green-500 font-semibold">
                  Key Benefits:{" "}
                </span>
                {sol.benefits}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
