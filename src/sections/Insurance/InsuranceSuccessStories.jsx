"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const InsuranceSuccessSection = () => {
  const highlights = [
    {
      imgSrc:
        "/assets/Insurance/Build Your Insurance Success with AOPAY Experts/Ready to Transform Your Insurance Payment Processing.png",
      title: "Ready to Transform Your Insurance Payment Processing?",
      desc: "Explore AOPAY Insurance Solutions, or create an account instantly to get started. Contact our specialists to design a custom payment platform that accelerates your insurance operations and ensures regulatory compliance.",
      button: { label: "Contact Sales", link: "/contact" },
    },
    {
      imgSrc:
        "/assets/Insurance/Build Your Insurance Success with AOPAY Experts/Mobile Insurance Payments.png",
      title: "Mobile Insurance Payments",
      desc: "Enable on-the-go premium collection and claims processing with mobile-optimized payment flows designed for insurance agents and customers.",
      button: { label: "Explore Mobile Solutions", link: "/solutions/mobile" },
    },
    {
      imgSrc:
        "/assets/Insurance/Build Your Insurance Success with AOPAY Experts/Usage-Based Insurance Billing.png",
      title: "Usage-Based Insurance Billing",
      desc: "Support innovative insurance models with dynamic pricing, usage-based premiums, and flexible billing cycles for modern insurance products.",
      button: {
        label: "Explore Innovative Billing",
        link: "/solutions/billing",
      },
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto space-y-12 text-center">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Build Your Insurance Success with AOPAY Experts
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
        >
          AOPAY insurance payment specialists understand the unique challenges
          of traditional insurers and innovative InsurTech companies. We guide
          you through optimizing every aspect of your payment experience to
          ensure regulatory compliance, reduce operational costs, and improve
          customer satisfaction.
        </motion.p>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button className="px-6 py-3 text-lg rounded-full" asChild>
            <a href="/learn-more">Learn More</a>
          </Button>
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 pt-12">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <img src = {item.imgSrc} alt = {item.alt} className="w-6 mb-2 mx-auto" />
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
              </div>
              <Button className="w-full rounded-full" asChild>
                <a href={item.button.link}>{item.button.label}</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceSuccessSection;
