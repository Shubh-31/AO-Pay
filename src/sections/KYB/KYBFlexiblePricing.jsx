"use client";

import { motion } from "framer-motion";
import { Rocket, Building2, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function KYBFlexiblePricing() {
  const plans = [
    {
      icon: <Rocket className="w-6 h-6 text-green-400" />,
      title: "Startup Plan",
      description:
        "Perfect for early-stage companies and fintechs. Includes essential KYB verification features with pay-as-you-grow pricing.",
    },
    {
      icon: <Building2 className="w-6 h-6 text-green-400" />,
      title: "Business Plan",
      description:
        "For growing companies with higher verification volumes. Includes advanced features, priority support, and volume discounts.",
    },
    {
      icon: <Crown className="w-6 h-6 text-green-400" />,
      title: "Enterprise Plan",
      description:
        "Custom solutions for large financial institutions. Dedicated infrastructure, SLA guarantees, and white-label options available.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-950 to-black py-20 px-6 text-gray-100">
      <div className="max-w-6xl mx-auto space-y-12 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-400">
            Flexible Pricing for Every Business Size
          </h2>
          <p className="mt-3 text-gray-400 text-lg max-w-2xl mx-auto">
            From startups to enterprises, we have a plan that scales with your
            business needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-green-700/20 hover:border-green-600/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center bg-green-600/20 p-4 rounded-xl mb-5 w-fit mx-auto">
                {plan.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {plan.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {plan.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button className="mt-10 bg-green-600 hover:bg-green-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300">
            Get Pricing Details
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
