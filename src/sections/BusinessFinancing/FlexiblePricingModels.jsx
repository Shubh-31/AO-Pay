"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const FlexiblePricingModels = () => {
  const pricingPoints = [
    {
      imgSrc: "/assets/BusinessFinancing/Flexible Pricing Models/saas.png",
      heading3: "SaaS Subscription",
      heading3Para:
        "Cloud-based subscription model with monthly/annual fees. Includes hosting, maintenance, updates, and support. Scale as you grow with flexible plans.",
    },
    {
      imgSrc:
        "/assets/BusinessFinancing/Flexible Pricing Models/Per-Loan Pricing.png",
      heading3: "Per-Loan Pricing",
      heading3Para:
        "Pay only for successful loan disbursements. Ideal for early-stage lenders with variable volumes. No upfront costs, aligned with your success.",
    },
    {
      imgSrc:
        "/assets/BusinessFinancing/Flexible Pricing Models/Enterprise License.png",
      heading3: "Enterprise License",
      heading3Para:
        "One-time license fee with source code access for large financial institutions. Complete customization freedom and no recurring subscription fees.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <motion.div
        className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 md:p-12 space-y-8 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Heading2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Flexible Pricing Models
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-600 leading-relaxed">
          Choose the pricing model that aligns with your business needs and
          growth stage.
        </p>

        {/* H3 Points */}
        <div className="mt-6 space-y-4">
          {pricingPoints.map((point, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4 hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={point.imgSrc}
                alt={point.heading3 || "Feature icon"}
                className="w-6 h-6 flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {point.heading3}
                </h3>
                <p className="text-gray-600 text-base mt-1">
                  {point.heading3Para}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center md:justify-start">
          <a
            href="#"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-green-700 transition"
          >
            Get Quote
          </a>
        </div>
      </motion.div>
    </section>
  );
};
