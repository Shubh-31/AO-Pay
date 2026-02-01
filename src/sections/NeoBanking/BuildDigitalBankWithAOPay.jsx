"use client";

import { motion } from "framer-motion";
import { Users, ShieldCheck, Activity, Cpu } from "lucide-react";

export const BuildDigitalBankWithAOPAY = () => {
  const services = [
    {
      icon: <Cpu className="w-6 h-6 text-green-500" />,
      title: "Technical Architecture Review",
      description:
        "Design optimal integration strategies for your banking infrastructure.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "Compliance Consulting",
      description:
        "Navigate RBI regulations, KYC requirements, and anti-money laundering rules.",
    },
    {
      icon: <Activity className="w-6 h-6 text-green-500" />,
      title: "Conversion Optimization",
      description:
        "Analyze and improve account opening flows, payment acceptance, and customer retention.",
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Fraud Strategy Development",
      description:
        "Create custom fraud prevention rules tailored to your customer base and risk profile.",
    },
    {
      icon: <Activity className="w-6 h-6 text-green-500" />,
      title: "Performance Monitoring",
      description:
        "Ongoing analysis of transaction success rates, authorization metrics, and system performance.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-green-500" />,
      title: "Migration Support",
      description:
        "Seamlessly transition from legacy systems or other payment providers to AOPAY.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center md:text-left"
        >
          Build Your Digital Bank with AOPAY Experts Guidance
        </motion.h2>

        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl text-center md:text-left">
          AOPAY's banking technology experts guide neo banks through every stage
          of development – from initial architecture design and API integration
          to optimization, scaling, and expansion into new products. Our team
          brings deep expertise in digital banking, payment processing,
          regulatory compliance, and financial technology.
        </p>
        <h3 className="mb-2 text-md text-gray-600">
          Comprehensive Support Services :
        </h3>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-50 rounded-full">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h4>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.a
            href="/contact-us"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition-colors"
          >
            Schedule Consultation
          </motion.a>
        </div>
      </div>
    </section>
  );
};
