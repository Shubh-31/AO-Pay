"use client";

import { motion } from "framer-motion";
import { CreditCard, Users, Settings } from "lucide-react";

export const WhyNeoBanksChooseAOPAY = () => {
  const features = [
    {
      icon: <CreditCard className="w-6 h-6 text-green-500" />,
      heading: "Launch Subscription Banking",
      description:
        "Offer premium banking memberships with recurring subscription fees. AOPAY Billing helps you set up tiered plans, automate invoicing, manage upgrades and downgrades, and handle dunning for failed payments – all out of the box with minimal development effort.",
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      heading: "Extend to Physical Banking",
      description:
        "AOPAY Terminal enables you to build customized point-of-service experiences for branch banking, ATM alternatives, and assisted banking kiosks. Unify both digital and physical banking operations into a single omnichannel system with centralized customer data and transaction history.",
    },
    {
      icon: <Settings className="w-6 h-6 text-green-500" />,
      heading: "Integrate Your Banking Ecosystem",
      description:
        "Connect AOPAY with your existing tools for customer relationship management, loan origination, wealth management, accounting, and regulatory reporting. Access hundreds of pre-built integrations through the AOPAY App Marketplace or build custom integrations using our comprehensive API documentation.",
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
          Why Leading Neo Banks Choose AOPAY
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-gray-800 text-center md:text-left"
        >
          Grow Revenue with Unified Experiences
        </motion.h3>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl text-center md:text-left">
          From mobile-first banking experiences to physical branch services, you
          can quickly add new banking products, acquire customers across
          channels, and capture more revenue with AOPAY's complete API platform.
          Our unified infrastructure ensures consistent experiences whether
          customers interact through mobile apps, web platforms, or partner
          integrations.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-50 rounded-full">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {feature.heading}
                </h4>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
