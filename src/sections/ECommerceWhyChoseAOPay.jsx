"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const ECommerceWhyChooseAOPAY = () => {
  const reasons = [
    {
      heading3: "Grow Revenue with Unified Experiences",
      description:
        "From try-at-home services to pop-up stores, you can quickly add new business models, acquire new customers, and capture more revenue with a complete payment platform.",
      subPoints: [
        {
          heading4: "Launch Subscription Services",
          description:
            "If you offer memberships or subscriptions, AOPAY Billing can help you set up recurring plans, send invoices, and manage customer lifecycle – all out of the box.",
          imgSrc:
            "/assets/ECommerce/Why Choose AOPAY for Your E-commerce Business/Launch Subscription Services.png",
        },
        {
          heading4: "Extend to In-Person Sales",
          description:
            "AOPAY Terminal lets you build customized point-of-sale experiences and unifies both online and offline sales into a single omnichannel system.",
          imgSrc:
            "/assets/ECommerce/Why Choose AOPAY for Your E-commerce Business/Extend to In-Person Sales.png",
        },
        {
          heading4: "Easy Integrations",
          description:
            "Connect AOPAY with hundreds of popular apps for customer management, inventory, shipping, and accounting. We also partner with leading e-commerce platforms for quick integration.",
          imgSrc:
            "/assets/ECommerce/Why Choose AOPAY for Your E-commerce Business/Easy Integrations.png",
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
        >
          Why Choose AOPAY for Your E-commerce Business
        </motion.h2>

        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-2xl p-8"
          >
            {/* H3 */}
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              {reason.heading3}
            </h3>
            <p className="text-gray-700 mb-6">{reason.description}</p>

            {/* H4 points */}
            <div className="space-y-4">
              {reason.subPoints.map((sub, i) => (
                <div key={i} className="flex items-start gap-3">
                  <img src = {sub.imgSrc} alt = {sub.heading4} className="w-6 h-auto" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">
                      {sub.heading4}
                    </h4>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {sub.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ECommerceWhyChooseAOPAY;
