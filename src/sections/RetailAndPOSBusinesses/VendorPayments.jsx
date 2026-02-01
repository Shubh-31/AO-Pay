"use client";

import { motion } from "framer-motion";

const VendorPayments = () => {
  const features = [
    {
      imgSrc:
        "/assets/RetailAndPOS/Streamlined Vendor Payment and Settlement Systems/Automated Vendor Payments.png",
      title: "Automated Vendor Payments",
      description:
        "Process vendor payments automatically based on delivery confirmations, invoice approvals, and scheduled payment terms. Handle bulk payments, individual settlements, and complex payment structures with detailed audit trails.",
    },
    {
      imgSrc:
        "/assets/RetailAndPOS/Streamlined Vendor Payment and Settlement Systems/Supply Chain Payment Integration.png",
      title: "Supply Chain Payment Integration",
      description:
        "Connect payment processing with supply chain management systems for seamless vendor onboarding, purchase order management, and payment scheduling. Strengthen supplier relationships through timely, accurate, and transparent payments.",
    },
    {
      imgSrc:
        "/assets/RetailAndPOS/Streamlined Vendor Payment and Settlement Systems/Financial Reporting and Analytics.png",
      title: "Financial Reporting and Analytics",
      description:
        "Generate comprehensive financial reports covering vendor payments, customer transactions, and business performance metrics. Support accounting, tax reporting, and business planning with detailed analytics and export features.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Streamlined Vendor Payment and Settlement Systems
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Manage vendor payments, supplier settlements, and business
          disbursements efficiently with automated processing and comprehensive
          tracking capabilities designed for retail operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="w-6 h-6"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VendorPayments;
