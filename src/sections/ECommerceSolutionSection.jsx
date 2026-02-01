"use client";

import { motion } from "framer-motion";

const EcommerceSolutionsSection = () => {
  const solutions = [
    {
      heading: "Small-Scale E-commerce Businesses",
      description:
        "For small e-commerce platforms just starting their journey, integrating our payment gateway allows immediate acceptance of credit card payments without the complexity of managing individual payment processors. KYC services help onboard customers securely and quickly, ensuring compliance while preventing fraudulent transactions. Virtual accounts simplify reconciliation, making financial management effortless even with limited resources.",
    },
    {
      heading: "Mid-Scale E-commerce Operations",
      description:
        "Mid-scale e-commerce businesses benefit from advanced banking integrations that connect payments with business accounts, ensuring smooth cash flow management. KYB verification becomes critical for verifying suppliers and business partners, reducing risk and maintaining trust within the supply chain. ESCROW solutions protect high-value transactions, while domestic money transfer capabilities streamline vendor payments and marketplace operations.",
    },
    {
      heading: "Large-Scale Enterprise E-commerce",
      description:
        "Large e-commerce enterprises face high transaction volumes and complex international requirements. Our comprehensive payment platform supports global payments across multiple currencies and regions. Advanced banking and financial software provides detailed insights into business performance, facilitating tax compliance and financial reporting across multiple jurisdictions. Machine learning-powered fraud prevention scales with transaction volume, maintaining security without impacting legitimate customers.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          AOPAY Tailored Solutions for Every E-commerce Business Size
        </motion.h2>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-10">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                {item.heading}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceSolutionsSection;
