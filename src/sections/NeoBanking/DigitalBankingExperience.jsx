"use client";

import { motion } from "framer-motion";


export const DigitalBankingExperience = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-10 text-center md:text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Optimize Your Digital Banking Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto md:mx-auto">
            AOPAY's pre-built payment forms and account opening interfaces
            provide an optimized experience for your customers. Our solutions
            reduce friction during onboarding, support multiple payment methods
            relevant to your target market, and automatically adapt to your
            customer's preferred language and device.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto md:mx-auto">
            You can also build completely customized banking experiences using
            our flexible API integration options while simplifying PCI
            compliance and regulatory requirements. Our modular architecture
            allows you to choose the components you need and integrate them
            seamlessly into your existing infrastructure.
          </p>
        </motion.div>

        {/* Features Grid */}
   
      </div>
    </section>
  );
};
