"use client";

import { motion } from "framer-motion";

const NonProfitExpertGuidance = () => {
  const sections = [
    {
      title: "Ready to Transform Your Nonprofit Fundraising?",
      description:
        "Explore AOPAY Nonprofit Solutions, or create an account instantly to get started. Contact our specialists to design a custom donation platform that amplifies your mission and maximizes your impact.",
      buttonText: "Contact Sales",
      buttonLink: "/contact-us",
    },
    {
      title: "Mobile Fundraising Solutions",
      description:
        "Enable seamless donation collection across all devices with mobile-optimized forms, text-to-give capabilities, and event fundraising tools.",
      buttonText: "Explore Mobile Solutions",
      buttonLink: "/mobile-solutions",
    },
    {
      title: "Recurring Donor Management",
      description:
        "Build sustainable funding with automated recurring gift programs, donor retention tools, and personalized engagement strategies.",
      buttonText: "Explore Recurring Giving",
      buttonLink: "/recurring-giving",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
        >
          Build Your Nonprofit Success with AOPAY Experts
        </motion.h2>

        <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
          AOPAY nonprofit payment specialists understand the unique challenges
          of mission-driven organizations. We guide you through optimizing every
          aspect of your donation experience to maximize impact, build lasting
          donor relationships, and advance your cause.
        </p>

        {sections.map((sec, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {sec.title}
            </h3>
            <p className="text-gray-600 mb-4">{sec.description}</p>
            <a
              href={sec.buttonLink}
              className="inline-block bg-gray-100 text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition border"
            >
              {sec.buttonText}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NonProfitExpertGuidance;
