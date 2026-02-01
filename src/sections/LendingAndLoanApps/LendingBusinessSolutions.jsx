"use client";

import { motion } from "framer-motion";
import { Activity, Users, Bank, CheckCheck, CheckCheckIcon } from "lucide-react";

const LendingBusinessSolutions = () => {
  const lendingSolutions = [
    {
      icon: <CheckCheckIcon className="w-6 h-6 text-blue-500" />,
      heading: "Small-Scale Fintech Startups",
      description:
        "Emerging fintech companies and loan app startups benefit from our plug-and-play lending infrastructure that eliminates the need for complex in-house development. Rapid market entry with automated credit verification, instant loan processing, and regulatory compliance features. Start with basic personal loan products and scale operations as your business grows.",
    },
    {
      icon: <CheckCheckIcon className="w-6 h-6 text-green-500" />,
      heading: "Mid-Scale NBFC Operations",
      description:
        "Established NBFCs and mid-market lending companies require sophisticated tools for managing diverse loan products and growing customer bases. Supports multiple lending verticals including personal loans, business loans, and specialized financing products. Advanced analytics and portfolio management tools provide insights while ensuring regulatory compliance.",
    },
    {
      icon: <CheckCheckIcon className="w-6 h-6 text-purple-500" />,
      heading: "Large-Scale Financial Institutions",
      description:
        "Enterprise lending institutions and banks need comprehensive platforms that handle high transaction volumes while maintaining strict security and compliance. Supports complex operations including consortium lending, multi-tier approval workflows, and advanced risk management systems. Seamless integration with core banking and third-party services.",
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
          AOPAY Tailored Solutions for Every Lending Business Size
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {lendingSolutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition hover:-translate-y-1 flex flex-col gap-4"
            >
              {/* Icon + Heading in one line */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {solution.heading}
                </h3>
              </div>

              {/* Description centered */}
              <p className="text-gray-600 text-base leading-relaxed text-center">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LendingBusinessSolutions;
