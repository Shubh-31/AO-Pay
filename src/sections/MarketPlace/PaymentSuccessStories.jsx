"use client";

import { motion } from "framer-motion";

const successStories = [
  {
    heading: "Digital Services Marketplace Scales Globally",
    description:
      "A leading freelance services marketplace needed to expand internationally while maintaining trust between buyers and sellers across different markets and currencies.",
    challenge:
      "The marketplace struggled with cross-border payments, currency conversion costs, and ensuring service quality through payment protection. They needed a solution that could handle complex escrow requirements for digital services delivery.",
    solution:
      "AOPAY's global payment platform enabled the marketplace to process payments in 150+ currencies with intelligent escrow management for service-based transactions. Automated milestone payments and dispute resolution reduced manual intervention by 60%.",
    buttons: [
      { label: "Global Payments" },
      { label: "Service Escrow" },
      { label: "Milestone Payments" },
      { label: "Dispute Resolution" },
    ],
  },
  {
    heading: "Handmade Goods Marketplace Builds Trust",
    description:
      "An artisan marketplace platform needed to protect both creators and buyers while providing flexible payment options for unique, high-value handmade products.",
    challenge:
      "Custom products required longer creation times and quality verification processes. The marketplace needed escrow solutions that could handle extended delivery periods and custom approval workflows.",
    solution:
      "AOPAY's flexible escrow system allowed customizable release conditions based on product photos, buyer approval, and delivery confirmation. Payment plans enabled buyers to purchase higher-value items, increasing average order value by 40%.",
    buttons: [
      { label: "Custom Escrow" },
      { label: "Payment Plans" },
      { label: "Photo Verification" },
      { label: "Quality Control" },
    ],
  },
  {
    heading: "B2B Marketplace Streamlines Enterprise Payments",
    description:
      "A B2B industrial marketplace needed to handle large-value transactions between businesses while managing complex approval workflows and credit terms.",
    challenge:
      "Enterprise buyers required purchase approval processes, custom payment terms, and detailed invoicing. The marketplace needed to balance flexibility with security for high-value B2B transactions.",
    solution:
      "AOPAY's enterprise payment solutions provided approval workflows, custom payment terms, and sophisticated escrow management for B2B transactions. Automated invoicing and settlement processes reduced administrative overhead by 50%.",
    buttons: [
      { label: "B2B Payments" },
      { label: "Approval Workflows" },
      { label: "Credit Terms" },
      { label: "Enterprise Invoicing" },
    ],
  },
];

const PaymentSuccessStories = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
        >
          Marketplace Payment Success Stories
        </motion.h2>

        {successStories.map((story, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
          >
            {/* H3 */}
            <h3 className="text-2xl font-semibold text-gray-800">
              {story.heading}
            </h3>

            {/* Description */}
            <p className="text-gray-600">{story.description}</p>

            {/* Challenge */}
            <div className="mt-4">
              <h4 className="font-semibold text-gray-700">Challenge</h4>
              <p className="text-gray-600">{story.challenge}</p>
            </div>

            {/* Solution */}
            <div className="mt-4">
              <h4 className="font-semibold text-gray-700">Solution</h4>
              <p className="text-gray-600">{story.solution}</p>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex flex-wrap gap-3">
              {story.buttons.map((btn, bIdx) => (
                <button
                  key={bIdx}
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PaymentSuccessStories;
