"use client";

import { motion } from "framer-motion";

const RetailTransformation = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900  inline-block pb-2"
        >
          Transforming Payment Operations in Retail and Commerce
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
        >
          Retail industry has undergone significant transformation with the rise
          of omnichannel commerce, digital payment preferences, and evolving
          customer expectations. As retail businesses scale from single-location
          stores to multi-channel operations, they face increasing complexity in
          managing diverse payment methods, inventory synchronization, customer
          data integration, and seamless experiences across online and offline
          touchpoints.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
        >
          Modern retail businesses require sophisticated payment infrastructure
          that can handle in-store transactions, online purchases, mobile
          payments, and emerging payment technologies while maintaining
          security, speed, and customer satisfaction. AOPAY's specialized
          platform addresses these unique challenges with purpose-built
          solutions for the retail and point-of-sale sector.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            {
              stat: "95%",
              desc: "Faster transaction processing for improved customer experience",
            },
            {
              stat: "80%",
              desc: "Increase in payment method acceptance and customer satisfaction",
            },
            {
              stat: "70%",
              desc: "Reduction in transaction failures and payment-related issues",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-3xl font-bold text-black">{item.stat}</h3>
              <p className="text-gray-700 mt-2">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RetailTransformation;
