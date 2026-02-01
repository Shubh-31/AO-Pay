"use client";

import { motion } from "framer-motion";
import { Users, Settings, ShieldCheck } from "lucide-react";

const ECommerceLogisticsExpertSupport = () => {
  const supportFeatures = [
    {
      imgSrc:
        "/assets/ECommerce/Expert Support for Logistics Payment Transformation/Implementation Consulting.png",
      title: "Implementation Consulting",
      description:
        "Dedicated project managers and technical experts guide you through system integration, ensuring minimal disruption to ongoing operations while maximizing implementation benefits.",
    },
    {
      imgSrc:
        "/assets/ECommerce/Expert Support for Logistics Payment Transformation/Operational Optimization.png",
      title: "Operational Optimization",
      description:
        "Ongoing analysis and recommendations to improve payment efficiency, reduce costs, and enhance driver and customer satisfaction through data-driven insights.",
    },
    {
      imgSrc:
        "/assets/ECommerce/Expert Support for Logistics Payment Transformation/Compliance Support.png",
      title: "Compliance Support",
      description:
        "Expert guidance on regulatory requirements, audit preparation, and compliance maintenance across all operational jurisdictions and service types.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Expert Support for Logistics Payment Transformation
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Partner with AOPAY's logistics payment experts to optimize your
          financial operations. Our team provides specialized consultation,
          implementation support, and ongoing optimization to maximize the value
          of your payment infrastructure investment.
        </motion.p>

        {/* Support Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {supportFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <img
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-100 rounded-full"
                src={feature.imgSrc} alt = {feature.title}
              />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-snug">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <button className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ECommerceLogisticsExpertSupport;
