"use client";

import { motion } from "framer-motion";
import { Headset, TrendingUp, ShieldCheck } from "lucide-react";

const ECommerceExpertSupportSection = () => {
  const supportFeatures = [
    {
      title: "Implementation Support",
      description:
        "Dedicated technical support during integration and go-live phases.",
      icon: Headset,
    },
    {
      title: "Optimization Consulting",
      description:
        "Ongoing consultation to improve conversion rates and reduce payment friction.",
      icon: TrendingUp,
    },
    {
      title: "Compliance Guidance",
      description:
        "Expert guidance on regulatory requirements across different markets.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Expert Support for E-commerce Payment Optimization
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg max-w-3xl mx-auto"
        >
          Build your e-commerce experience with help from AOPAY experts. Our
          team guides you through optimizing every part of the checkout
          experience to convert more customers and reduce operational overhead.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {supportFeatures.map((feature, i) => {
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
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-700 mb-4 mx-auto">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ECommerceExpertSupportSection;
