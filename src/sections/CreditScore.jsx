"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CreditScoreSection = ({ features, creditContent }) => {
  return (
    <section className="py-16 px-6 md:px-12 mt-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          {creditContent}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex items-start space-x-4"
          >
            <div className="flex-shrink-0">
              <Image src={feature.icon} width={60} height={60} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CreditScoreSection;
