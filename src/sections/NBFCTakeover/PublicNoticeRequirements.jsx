"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PublicNoticeRequirements() {
  const cards = [
    {
      icon: "📋",
      title: "Intention Statement",
      desc: "Clear declaration of intention to sell, transfer ownership, or transfer control of the NBFC.",
    },
    {
      icon: "📝",
      title: "Rationale Disclosure",
      desc: "Detailed reasons and justification for the proposed sale or transfer of ownership/control.",
    },
    {
      icon: "👥",
      title: "Transferee Information",
      desc: "Complete particulars of the acquiring entity including name, address, and background.",
    },
    {
      icon: "📅",
      title: "Transaction Timeline",
      desc: "Expected timeline for completion of the takeover transaction.",
    },
    {
      icon: "⚖️",
      title: "Stakeholder Rights",
      desc: "Information on how stakeholders can raise objections or concerns.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
        Public Notice Requirements During NBFC Takeover Process
      </h2>
      <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-12">
        Transparency and public disclosure are critical components of the NBFC
        takeover process. The RBI mandates specific public notice requirements
        to protect stakeholder interests.
      </p>

      {/* Mandatory Guidelines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        viewport={{ once: true }}
        className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 overflow-hidden border border-gray-100 mb-10"
      >
        {/* gradient left border */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-400 to-blue-400 rounded-l-2xl" />

        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          📢 Mandatory Public Notice Guidelines
        </h3>
        <div className="pl-2 text-gray-700 space-y-2">
          <p>
            <strong>Timing:</strong> Public notice must be published at least 30
            days before the sale, transfer of shares, or change of control (with
            or without share transfer).
          </p>
          <p>
            <strong>Publication Requirements:</strong> Notice must appear in
            both:
          </p>
          <ul className="list-disc ml-8">
            <li>One leading national newspaper (preferably English)</li>
            <li>One local/regional newspaper in the area of operations</li>
          </ul>
        </div>
      </motion.div>

      {/* Essential Information */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Essential Information in Public Notice
        </h3>
        <p className="text-gray-700 max-w-2xl mx-auto">
          The public notice must clearly communicate the following details to
          all stakeholders:
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-start gap-6">
        {cards.map((item, index) => {
          const isLastOdd =
            cards.length % 2 !== 0 && index === cards.length - 1;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 overflow-hidden border border-gray-100 w-full md:w-[calc(50%-0.75rem)] ${
                isLastOdd ? "md:mx-auto" : ""
              }`}
            >
              {/* Gradient left border */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-400 to-blue-400 rounded-l-2xl" />

              <h4 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                {item.icon} {item.title}
              </h4>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <p className="text-gray-700 mt-12 text-center max-w-3xl mx-auto">
        This public notice requirement ensures transparency, allows stakeholders
        to raise concerns, and gives the RBI opportunity to receive public
        feedback before final approval.
      </p>
    </section>
  );
}
