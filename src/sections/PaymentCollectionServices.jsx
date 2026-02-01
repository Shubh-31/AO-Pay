"use client";

import { motion } from "framer-motion";

const PaymentCollectionServices = () => {
  const services = [
    {
      title: "Single Payment Links",
      points: [
        "Generate individual payment links for specific amounts",
        "Customizable payment descriptions and references",
        "Instant link generation with QR code support",
        "Mobile-optimized payment pages",
      ],
      imgSrc:
        "/assets/PaymentLink/Comprehensive Payment Collection Services/Single Payment Links.png",
    },
    {
      title: "Bulk Link Generation",
      points: [
        "Create thousands of payment links simultaneously",
        "CSV upload support for bulk operations",
        "Scheduled link generation and distribution",
        "Progress tracking for bulk operations",
      ],
      imgSrc:
        "/assets/PaymentLink/Comprehensive Payment Collection Services/Bulk Link Generation.png",
    },
    {
      title: "Subscription & Recurring Payments",
      points: [
        "Create recurring payment links for subscriptions",
        "Automated billing cycle management",
        "Failed payment retry mechanisms",
        "Subscription lifecycle notifications",
      ],
      imgSrc:
        "/assets/PaymentLink/Comprehensive Payment Collection Services/Subscription & Recurring Payments.png",
    },
    {
      title: "Invoice Integration",
      points: [
        "Generate professional invoices with payment links",
        "PDF invoice generation and email delivery",
        "Integration with popular accounting software",
        "Tax calculation and compliance features",
      ],
      imgSrc:
        "/assets/PaymentLink/Comprehensive Payment Collection Services/Invoice Integration.png",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900"
        >
          Seamless Payment Collection with AOPAY Payment Links
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto"
        >
          Access a wide range of payment collection solutions through unified
          API endpoints with consistent response formats and real-time
          processing.
        </motion.p>

        {/* Services Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-8 h-auto mb-2"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentCollectionServices;
