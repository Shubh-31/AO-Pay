"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const TransferServicesSection = () => {
  const services = [
    {
      imgSrc:
        "/assets/DMTIntegration/AOPAYComprehensiveTransferServices/IndividualTransferServices.png",
      heading: "Individual Transfer Services",
      features: [
        "Single bank account transfers with instant processing",
        "UPI-enabled transfers to mobile numbers and VPAs",
        "Digital wallet top-ups and transfers",
        "Account verification before transfer execution",
      ],
    },
    {
      imgSrc:
        "/assets/DMTIntegration/AOPAYComprehensiveTransferServices/BulkTransferOperations.png",
      heading: "Bulk Transfer Operations",
      features: [
        "Batch processing of up to 10,000 transfers per request",
        "CSV file upload support for bulk operations",
        "Scheduled transfers with future date execution",
        "Partial success handling with detailed error reporting",
      ],
    },
    {
      imgSrc:
        "/assets/DMTIntegration/AOPAYComprehensiveTransferServices/SmartTransferLinks.png",
      heading: "Smart Transfer Links",
      features: [
        "Generate secure payment links for recipients",
        "Customizable transfer amounts and expiry dates",
        "Multi-language support for recipient communication",
        "Integration with SMS and email notification systems",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          AOPAY Comprehensive Transfer Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Access a wide range of money transfer services through unified API
          endpoints with consistent response formats.
        </motion.p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-green-100"
          >
            <div className="flex flex-col gap-4">
              <img
                src={service.imgSrc}
                alt={service.heading}
                className="w-12"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.heading}
              </h3>
              <ul className="space-y-2 text-gray-700 list-none">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TransferServicesSection;
