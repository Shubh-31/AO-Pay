"use client";

import { motion } from "framer-motion";
import { CreditCard, Smartphone, BarChart3 } from "lucide-react";

const LogisticsFleetWalletSection = () => {
  const features = [
    {
      icon: <CreditCard className="w-7 h-7 text-green-600" />,
      title: "Driver Wallet Management",
      description:
        "Provide drivers with digital wallets for managing fuel expenses, toll payments, and maintenance costs. Enable real-time expense tracking, automated reimbursements, and better financial control over fleet operations.",
    },
    {
      icon: <Smartphone className="w-7 h-7 text-green-600" />,
      title: "Recharge & Bill Payment Services",
      description:
        "Offer mobile recharge, bill payment, and utility services through driver wallets. Create additional convenience for your workforce while generating supplementary revenue through commission-based services.",
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-green-600" />,
      title: "Expense Control & Monitoring",
      description:
        "Implement spending controls and real-time monitoring for all wallet transactions. Set spending limits, track expense categories, and generate detailed reports for better financial oversight and cost management.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Digital Wallet Solutions for Fleet Management
        </motion.h2>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Implement comprehensive digital wallet solutions for your drivers and
          fleet operations. Manage fuel cards, maintenance payments, toll
          charges, and other operational expenses through integrated wallet
          systems.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition"
            >
              {/* Icon + title in one line */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 text-base leading-snug">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogisticsFleetWalletSection;
