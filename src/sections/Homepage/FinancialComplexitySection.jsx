"use client";
import { motion } from "framer-motion";

export default function FinancialComplexitySection() {
  const items = [
    {
      imgSrc:
        "/assets/Home/Built for Financial Services Complexity/Multi-Channel Distribution.png",
      title: "Multi-Channel Distribution",
      desc: "Deploy across web, mobile, API, and agent networks with unified backend management and real-time synchronization.",
    },
    {
      imgSrc:
        "/assets/Home/Built for Financial Services Complexity/Developer-First Architecture.png",
      title: "Developer-First Architecture",
      desc: "RESTful APIs, SDKs, sandbox environments, and detailed documentation that accelerates integration to days, not months.",
    },
    {
      imgSrc:
        "/assets/Home/Built for Financial Services Complexity/Intelligence & Analytics.png",
      title: "Intelligence & Analytics",
      desc: "Built-in business intelligence, custom dashboards, and predictive analytics to drive data-informed decisions and optimize operations.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight"
        >
          Built for Financial Services Complexity
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700 text-base md:text-lg mb-5 max-w-3xl mx-auto leading-relaxed"
        >
          Financial services demand more than basic payment processing. You need
          easy & smooth workflows, regulatory compliance, real-time analytics,
          and the flexibility to innovate rapidly. AOPAY platform is architected
          from the ground up to handle the unique challenges of modern banking
          and lending operations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto"
        >
          Whether you're launching digital lending products, building a
          neo-banking experience, allowing peer-to-peer transactions, or
          modernizing legacy systems — AOPAY infrastructure adapts to your
          business model, not the other way around.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto">
        <ul className="space-y-5">
          {items.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group flex items-start gap-4 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl px-5 py-4 md:px-6 md:py-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex-shrink-0 rounded-xl bg-gray-50 p-2 md:p-2.5 border border-gray-100 group-hover:border-gray-200 transition">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-8 h-8 md:w-9 md:h-9 object-contain"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1.5 text-base md:text-lg">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
