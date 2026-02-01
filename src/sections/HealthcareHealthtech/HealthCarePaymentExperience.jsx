"use client";

import { motion } from "framer-motion";
import { CreditCard, Repeat, Heart, Shield } from "lucide-react";

const HealthcarePaymentExperience = () => {
  const features = [
    {
      icon: <CreditCard className="w-6 h-6 text-blue-500" />,
      heading: "Point-of-Care Payments",
      description:
        "Provide seamless payment experiences across all patient touchpoints, from online scheduling to in-person visits.",
      button: "Explore Point-of-Care Solutions",
    },
    {
      icon: <Repeat className="w-6 h-6 text-green-500" />,
      heading: "Recurring Healthcare Payments",
      description:
        "Manage subscription health services, payment plans, and recurring treatments with automated billing and patient-friendly payment recovery tools.",
      button: "Explore Healthcare Billing",
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      heading: "Expert Guidance & Compliance",
      description:
        "Work with AOPAY healthcare specialists to optimize the patient payment experience while maintaining strict HIPAA and regulatory compliance.",
      button: "Learn More",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Build Your Healthcare Payment Experience with AOPAY Experts
        </motion.h2>

        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          AOPAY healthcare payment specialists guide you through optimizing
          every part of the patient financial experience to improve collection
          rates and patient satisfaction.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Learn More
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 border border-gray-100 rounded-3xl shadow-sm p-6 md:p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Icon + heading in one line */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-100 shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {feature.heading}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 flex-1">
                {feature.description}
              </p>

              {/* Button (if present) */}
              {feature.button && (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-2 bg-green-600 text-white font-semibold px-4 py-2.5 rounded-full shadow-sm hover:bg-green-700 transition-colors duration-200 self-center"
                >
                  {feature.button}
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcarePaymentExperience;
