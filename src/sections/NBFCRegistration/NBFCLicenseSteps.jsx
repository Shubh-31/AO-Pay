"use client";

import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

export default function NBFCLicenseSteps() {
  const steps = [
    {
      title: "Company Incorporation and Capital Arrangement",
      desc: "Register your company under the Companies Act, 2013, and obtain the Certificate of Incorporation (CoI) from the Registrar of Companies. Arrange and deposit ₹10 crore as paid-up equity capital in the company's bank account. This foundational step typically requires 1-2 weeks.",
    },
    {
      title: "Business Plan Development",
      desc: "Prepare a comprehensive five-year business plan detailing your operational strategy, market analysis, revenue projections, risk management framework, human resources planning, and technology infrastructure. This document requires 2-4 weeks of thorough research and financial modeling.",
    },
    {
      title: "Pre-Application Scrutiny",
      desc: "Engage with NBFC consultants to collect and verify documentation from shareholders and promoters. This scrutiny ensures all capital requirements, management qualifications, and regulatory prerequisites align with RBI norms before formal application submission.",
    },
    {
      title: "Online Application Submission",
      desc: "File your NBFC registration application through the RBI's official portal. Download the prescribed e-form, complete all sections accurately, and receive your application reference number. This digital submission process takes approximately one week.",
    },
    {
      title: "Physical Document Submission",
      desc: "After online filing, physically submit all supporting documents to the RBI's Central Office for authentication and verification. Ensure documents are properly organized, certified, and attested as required by regulatory guidelines.",
    },
    {
      title: "RBI Due Diligence and Approval",
      desc: "The RBI conducts comprehensive background verification, financial assessment, and compliance evaluation. This scrutiny process typically spans 3-6 months. Upon successful verification meeting all Section 45-IA requirements, the RBI issues your Certificate of Registration (CoR).",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Get NBFC License from RBI - Step-by-Step Process
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            NBFC registration journey involves multiple stages spanning
            approximately 180 working days. Following this systematic process
            ensures regulatory compliance and approval success:
          </p>
        </motion.div>

        {/* Step Cards */}
        <div className="relative border-l-4 border-green-500 pl-6 ml-4 space-y-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[34px] top-6 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow" />

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-700 text-lg max-w-6xl mx-auto"
        >
          Working with experienced{" "}
          <span className="font-semibold text-green-700">
            NBFC registration consultants at AOPay
          </span>{" "}
          streamlines this complex process, helping you avoid common pitfalls
          and documentation errors that cause delays.
        </motion.p>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            <ArrowRightCircle className="w-5 h-5" />
            Get Started with AOPay
          </a>
        </div>
      </div>
    </section>
  );
}
