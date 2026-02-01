"use client";

import { motion } from "framer-motion";

const GigPlatformCTA = () => {
  const features = [
    {
      title: "Freelancer Payment Solutions",
      description:
        "Comprehensive payout systems, global payment support, and automated disbursement tools designed for freelancer satisfaction and platform efficiency.",
      buttonText: "Explore Freelancer Solutions",
    },
    {
      title: "Escrow and Security Services",
      description:
        "Project-based escrow management, dispute resolution integration, and trust-building features for secure gig economy transactions.",
      buttonText: "Explore Escrow Solutions",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 border-b-2 border-black inline-block pb-2"
        >
          Ready to Transform Your Gig Economy Platform?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg md:text-xl"
        >
          Launch or optimize your freelance marketplace with AOPAY's
          comprehensive gig economy solution. From escrow services to global
          payments, we provide everything needed to build trusted, scalable gig
          work platforms.
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-left"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 mb-4">{feature.description}</p>
              <button className="px-6 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition">
                {feature.buttonText}
              </button>
            </div>
          ))}
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="mt-10 px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition">
            Contact Sales
          </button>
        </motion.div>

        {/* Closing Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg mt-8"
        >
          As the gig economy continues transforming how work gets done with
          remote collaboration, AI-enhanced matching, and specialized skill
          marketplaces, having secure payment infrastructure is essential for
          platform success and user trust. AOPAY's comprehensive solution
          ensures your gig economy platform stays competitive while maintaining
          operational excellence, regulatory compliance, and exceptional user
          experiences in the dynamic freelance marketplace landscape.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg font-semibold mt-4"
        >
          Ready to revolutionize gig economy payments? Join leading freelance
          platforms and gig marketplaces already using AOPAY to transform their
          payment operations and build trusted work relationships.
        </motion.p>
      </div>
    </section>
  );
};

export default GigPlatformCTA;
