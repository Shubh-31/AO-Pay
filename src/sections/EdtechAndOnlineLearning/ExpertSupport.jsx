"use client";

import { motion } from "framer-motion";
import { GraduationCap, LineChart, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExpertSupport = () => {
  const services = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "Platform Integration Support",
      description:
        "Comprehensive technical support for integrating payment solutions with LMS, student portals, and educational applications with minimal disruption.",
    },
    {
      icon: <LineChart className="w-8 h-8 text-green-600" />,
      title: "Enrollment Conversion Optimization",
      description:
        "Data-driven analysis and recommendations to improve enrollment rates, reduce payment friction, and enhance onboarding through optimized payment flows.",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-indigo-600" />,
      title: "Global Expansion Consulting",
      description:
        "Expert guidance for entering new educational markets including payment localization, compliance, and cultural adaptation strategies.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Expert Support for EdTech Payment Optimization
        </motion.h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Partner with AOPAY's EdTech specialists to maximize your platform's
          payment performance. Our team provides guidance for enrollment
          optimization, student experience enhancement, and revenue growth
          strategies.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col space-y-4"
            >
              {/* Icon + Title in one line */}
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white rounded-xl w-fit shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-md"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertSupport;
