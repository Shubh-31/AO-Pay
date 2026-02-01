"use client";

import { motion } from "framer-motion";
import { BarChart2, Globe, Users, RefreshCw, Cpu, Link } from "lucide-react";

const LendingGrowth = () => {
  const growthPoints = [
    {
      icon: <BarChart2 className="w-6 h-6 text-blue-500" />,
      heading: "Product Expansion",
      description: "Add new loan products and financial services seamlessly.",
    },
    {
      icon: <Globe className="w-6 h-6 text-green-500" />,
      heading: "Geographic Scaling",
      description:
        "Expand to new states and regions with automated compliance.",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      heading: "Volume Handling",
      description:
        "Process thousands of loans daily with high-performance infrastructure.",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-orange-500" />,
      heading: "Market Adaptation",
      description: "Quick deployment of new features based on market demands.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-pink-500" />,
      heading: "Technology Evolution",
      description:
        "Regular updates with latest fintech innovations and regulatory changes.",
    },
    {
      icon: <Link className="w-6 h-6 text-teal-500" />,
      heading: "Partnership Integration",
      description:
        "Connect with new banking and fintech partners effortlessly.",
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
          Scale Your Lending Platform with Industry Growth
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto"
        >
          As the digital lending industry continues to evolve, AOPAY's platform
          grows with your business, supporting expansion into new products,
          markets, and customer segments without requiring major infrastructure
          changes.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
          {growthPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition hover:-translate-y-1 flex gap-4 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                {point.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {point.heading}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LendingGrowth;
