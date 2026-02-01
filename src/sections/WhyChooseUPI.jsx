"use client";

import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

const WhyChooseUPI = () => {
  const points = [
    {
      title: "24x7 - Always Available",
      description:
        "Round-the-clock payment processing with instant confirmation and real-time transaction monitoring.",
    },
    {
      title: "Competitive Pricing",
      description:
        "Industry-leading transaction fees with transparent pricing and no hidden charges for UPI payments.",
    },
    {
      title: "Quick Integration",
      description:
        "Fastest API integration in the industry with pre-built SDKs and comprehensive documentation.",
    },
    {
      title: "100% - Secure Transactions",
      description:
        "Bank-grade security with advanced fraud detection and PCI DSS compliance for complete protection.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl shadow-lg">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Our UPI & QR Payment Solutions?
          </h2>
          <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-4"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Reliable, secure, and designed for every business size — our
            solutions help you accept payments seamlessly.
          </p>
        </div>

        {/* Points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Decorative border accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 rounded-t-2xl"></div>

              {/* Title with Icon */}
              <div className="flex items-center gap-3 mt-2">
                <ArrowRightCircle className="text-blue-600 w-8 h-8 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {point.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mt-3 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUPI;
