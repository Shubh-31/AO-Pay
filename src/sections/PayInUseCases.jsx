"use client";

import { motion } from "framer-motion";

export const PayInUseCases = () => {
  const useCases = [
    {
      title: "E-commerce Platforms",
      desc: "Perfect for online stores and e-commerce platforms. Accept payments seamlessly during checkout with our Payment Gateway API and increase conversion rates.",
    },
    {
      title: "SaaS & Subscription Billing",
      desc: "Automate recurring billing and subscription management with our PayIn API. Handle trials, upgrades, downgrades, and payment retries automatically.",
    },
    {
      title: "Marketplaces",
      desc: "Enable seamless payments between buyers and sellers on your marketplace platform with split payments and escrow functionality.",
    },
    {
      title: "Online Services",
      desc: "Accept payments for digital services, consultations, bookings, and appointments with flexible payment collection options.",
    },
    {
      title: "Educational Platforms",
      desc: "Process course fees, tuition payments, and educational service charges with our secure Payment Collection API.",
    },
    {
      title: "Healthcare & Telemedicine",
      desc: "Secure payment processing for healthcare services, telemedicine consultations, and medical billing with HIPAA compliance.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          PayIn API Use Cases for Every Business
        </h2>
        <p>
          AOPAY Payment Gateway API serves diverse business needs across
          industries. Whether you're an e-commerce platform, SaaS company,
          marketplace, or enterprise, our PayIn API adapts to your specific
          payment collection requirements.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
        {useCases.map((item, index) => (
          <motion.div
            key={index}
            className="
              bg-white border border-gray-200 rounded-2xl shadow-md 
              hover:shadow-lg transition-all duration-300 
              p-6 flex flex-col text-center space-y-3
              w-full sm:w-[calc(50%-1rem)] lg:w-[45%]
            "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
