"use client";

import { motion } from "framer-motion";
import { Globe2, Wallet, Store, Repeat, Building2 } from "lucide-react";

const ECommerceScalePaymentInfrastructure = () => {
  const features = [
    {
      title: "Global Expansion",
      description: "Add new countries and currencies instantly.",
      icon: Globe2,
    },
    {
      title: "New Payment Methods",
      description:
        "Integrate wallets, buy-now-pay-later, and emerging payment technologies.",
      icon: Wallet,
    },
    {
      title: "Marketplace Features",
      description:
        "Support multi-vendor platforms with split payments and automated settlements.",
      icon: Store,
    },
    {
      title: "Subscription Evolution",
      description:
        "Scale from one-time purchases to complex subscription models.",
      icon: Repeat,
    },
    {
      title: "B2B Capabilities",
      description:
        "Expand from B2C to B2B with advanced invoicing and payment terms.",
      icon: Building2,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
        >
          Scale Your Payment Infrastructure as You Grow
        </motion.h2>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center"
        >
          As your e-commerce business evolves from startup to enterprise,
          AOPAY's platform grows with you. Our flexible architecture supports
          your expansion into new markets, currencies, and business models
          without requiring major technical overhauls.
        </motion.p>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-700 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ECommerceScalePaymentInfrastructure;
