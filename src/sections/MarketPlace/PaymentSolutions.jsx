"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Users,
  Layers,
  Building2,
  Lock,
  Globe,
  BarChart3,
  Settings,
} from "lucide-react";

const marketplaceSolutions = [
  {
    heading: "Small-Scale Marketplaces",
    description:
      "For emerging marketplaces, AOPAY's payment gateway enables immediate acceptance of multiple payment methods without the complexity of managing individual processors. Our escrow services build buyer confidence from day one, while KYC verification ensures vendor quality. Simple integration gets you up and running quickly with minimal technical resources.",
    features: [
      {
        icon: <Rocket className="w-5 h-5 text-blue-500" />,
        title: "Quick Setup",
        description: "Go live in days with pre-built payment flows",
      },
      {
        icon: <ShieldCheck className="w-5 h-5 text-green-500" />,
        title: "Basic Escrow",
        description: "Essential buyer protection builds marketplace trust",
      },
      {
        icon: <Users className="w-5 h-5 text-purple-500" />,
        title: "Vendor Onboarding",
        description: "Streamlined KYC processes for new sellers",
      },
    ],
  },
  {
    heading: "Mid-Scale Marketplace Operations",
    description:
      "Growing marketplaces benefit from AOPAY's advanced escrow management that automatically handles complex transaction flows. Virtual account systems enable sophisticated fund management, while comprehensive fraud protection scales with your transaction volume. Advanced vendor management tools help maintain quality and compliance across hundreds of sellers.",
    features: [
      {
        icon: <Layers className="w-5 h-5 text-indigo-500" />,
        title: "Advanced Escrow",
        description: "Automated release conditions and dispute management",
      },
      {
        icon: <Building2 className="w-5 h-5 text-yellow-500" />,
        title: "Virtual Accounts",
        description: "Sophisticated fund management and tracking",
      },
      {
        icon: <Lock className="w-5 h-5 text-red-500" />,
        title: "Fraud Prevention",
        description: "ML-powered risk assessment protects growth",
      },
    ],
  },
  {
    heading: "Large-Scale Marketplace Enterprises",
    description:
      "Enterprise marketplaces require sophisticated payment orchestration across global markets. AOPAY's platform supports high transaction volumes with intelligent routing, multi-currency settlements, and comprehensive financial reporting. Advanced vendor management tools handle thousands of sellers with automated compliance monitoring and flexible settlement options.",
    features: [
      {
        icon: <Globe className="w-5 h-5 text-teal-500" />,
        title: "Global Operations",
        description: "Multi-currency, multi-region payment processing",
      },
      {
        icon: <BarChart3 className="w-5 h-5 text-orange-500" />,
        title: "Enterprise Reporting",
        description: "Advanced analytics and financial insights",
      },
      {
        icon: <Settings className="w-5 h-5 text-gray-700" />,
        title: "Custom Solutions",
        description: "Tailored workflows for unique business models",
      },
    ],
  },
];

const PaymentSolutions = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
        >
          Marketplace Payment Solutions for Every Scale
        </motion.h2>

        {/* Sections (Small / Mid / Large) */}
        {marketplaceSolutions.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* H3 */}
            <h3 className="text-2xl font-semibold text-gray-800">
              {section.heading}
            </h3>

            <p className="text-gray-600 max-w-4xl">{section.description}</p>

            {/* Features H4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
              {section.features.map((feature, fIdx) => (
                <motion.div
                  key={fIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: fIdx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {feature.icon}
                    <h4 className="text-lg font-semibold text-gray-800">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PaymentSolutions;
