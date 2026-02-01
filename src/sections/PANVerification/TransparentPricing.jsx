"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TransparentPricing() {
  const pricingOptions = [
    {
      title: "Pay-As-You-Verify Model",
      description:
        "Start with our transparent pay-per-verification pricing. Perfect for startups and growing businesses with variable verification volumes. Discounted rates for higher usage tiers.",
    },
    {
      title: "Enterprise Solutions",
      description:
        "Custom pricing for high-volume clients with dedicated infrastructure, priority support, SLA guarantees, and volume discounts for 50,000+ verifications per month.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Transparent Pricing for Every Business
        </h2>
        <p className="text-gray-600 text-lg">
          Choose from our flexible, volume-based pricing plans designed to scale
          with your verification needs. No hidden charges, and custom enterprise
          solutions available.
        </p>
      </div>

      {/* Pricing Options Grid */}
      <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2">
        {pricingOptions.map((option, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 text-center"
          >
            <h3 className="text-xl font-semibold text-black mb-3 border-b border-gray-300 pb-2">
              {option.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {option.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12">
        <Link
          href="/pricing"
          className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
        >
          View Pricing Plans
        </Link>
      </div>
    </section>
  );
}
