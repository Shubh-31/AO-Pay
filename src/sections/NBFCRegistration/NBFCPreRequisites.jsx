"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NBFCPreRequisites() {
  const items = [
    {
      imgSrc: "/assets/NBFCRegistration/Pre-Requisites/Legal Structure.png",
      title: "Legal Structure",
      desc: "Company must be registered under Companies Act, 2013 as Private Limited or Public Limited entity.",
    },
    {
      imgSrc: "/assets/NBFCRegistration/Pre-Requisites/Capital Requirement.png",
      title: "Capital Requirement",
      desc: "Minimum ₹10 crore owned capital (non-borrowed funds) as per October 2022 RBI guidelines.",
    },
    {
      imgSrc: "/assets/NBFCRegistration/Pre-Requisites/Capital Maintenance.png",
      title: "Capital Maintenance",
      desc: "Ability to maintain minimum NOF throughout operations as mandated by regulatory framework.",
    },
    {
      imgSrc:
        "/assets/NBFCRegistration/Pre-Requisites/Management Expertise.png",
      title: "Management Expertise",
      desc: "One-third of directors must possess 10+ years banking or financial services experience.",
    },
    {
      imgSrc: "/assets/NBFCRegistration/Pre-Requisites/Strategic Planning.png",
      title: "Strategic Planning",
      desc: "Comprehensive five-year business plan demonstrating viability and public benefit.",
    },
    {
      imgSrc: "/assets/NBFCRegistration/Pre-Requisites/Clean Records.png",
      title: "Clean Records",
      desc: "Unblemished credit history for company, directors, shareholders, and associated entities.",
    },
    {
      imgSrc:
        "/assets/NBFCRegistration/Pre-Requisites/Regulatory Compliance.png",
      title: "Regulatory Compliance",
      desc: "Commitment to ongoing RBI compliance, reporting, and governance standards.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Pre-Requisites Summary for NBFC Registration
        </motion.h2>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          Before initiating the NBFC registration process, ensure your company
          meets these fundamental requirements:
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-start gap-6">
        {items.map((item, index) => {
          const isLastOdd =
            items.length % 2 !== 0 && index === items.length - 1;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 text-left w-full md:w-[calc(50%-0.75rem)] ${
                isLastOdd ? "md:mx-auto" : ""
              }`}
            >
               <Image src = {item.imgSrc} alt = {item.title} width={100} height={100} className="w-6 mb-2" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-gray-700 text-lg">
          Meeting these prerequisites positions your application favorably for
          RBI approval.{" "}
          <span className="font-semibold text-blue-700">
            AOPay consultants assess your readiness and address any gaps before
            formal submission.
          </span>
        </p>
      </div>
    </section>
  );
}
