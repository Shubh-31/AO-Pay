"use client";

import Image from "next/image";
import React from "react";

export default function WhyChooseAOPay() {
  const stats = [
    {
      title: "75% Market Leadership",
      desc: "Commanding position in NBFC registration consulting",
    },
    {
      title: "99% Success Rate",
      desc: "Industry-leading approval success for clients",
    },
    {
      title: "5000+ Hours Saved",
      desc: "Time saved for fintech entrepreneurs through efficiency",
    },
    {
      title: "50+ NBFCs Registered",
      desc: "Successful registrations with RBI license approval",
    },
  ];

  const sections = [
    {
      imgSrc:
        "/assets/NBFCRegistration/Why/Simplified Documentation Process.png",
      h3: "Simplified Documentation Process",
      p: "Our expert team handles all paperwork, document preparation, and certification requirements, eliminating the complexity of NBFC registration documentation. We ensure every submission meets RBI standards, reducing query cycles and delays.",
    },
    {
      imgSrc: "/assets/NBFCRegistration/Why/Pan-India Service Coverage.png",
      h3: "Pan-India Service Coverage",
      p: "With operational reach across 5000+ pin codes, AOPay serves clients nationwide regardless of their location. Our distributed consultant network provides local expertise with centralized quality standards.",
    },
    {
      imgSrc: "/assets/NBFCRegistration/Why/FasterTurnaround.png",
      h3: "50% Faster Turnaround Time",
      p: "Through streamlined processes, proactive regulator engagement, and meticulous preparation, we achieve 50% faster approvals compared to industry averages. This speed advantage helps you launch operations sooner.",
    },
    {
      imgSrc: "/assets/NBFCRegistration/Why/Availability.png",
      h3: "24/7 Consultant Availability",
      p: "Our dedicated NBFC registration consultants remain available round-the-clock to address your queries, provide updates, and guide you through each registration milestone. This accessibility ensures you never face delays due to communication gaps.",
    },
    {
      imgSrc:
        "/assets/NBFCRegistration/Why/Comprehensive Post-Registration Support.png",
      h3: "Comprehensive Post-Registration Support",
      p: "Beyond securing your NBFC license, we provide ongoing compliance guidance, regulatory update alerts, and operational advisory services. Our relationship continues long after registration, supporting your NBFC's growth journey.",
    },
    {
      imgSrc:
        "/assets/NBFCRegistration/Why/End-to-End Business Planning Assistance.png",
      h3: "End-to-End Business Planning Assistance",
      p: "Our consultants collaborate with you to develop robust five-year business plans that satisfy RBI requirements while aligning with your strategic vision. We bring industry insights and financial modeling expertise to create compelling proposals.",
    },
    {
      imgSrc : "/assets/NBFCRegistration/Why/Funding and Capital Support.png",
      h3: "Funding and Capital Support",
      p: "AOPay connects you with investors, venture capitalists, and financial institutions to help arrange the required ₹10 crore minimum capital. Our extensive network accelerates your capital-raising efforts through warm introductions and pitch support.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          Why Choose AOPay for NBFC Registration Success?
        </h2>

        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          AOPay stands as India's leading NBFC registration consultant with an
          unmatched track record of successful registrations. Here's why fintech
          entrepreneurs trust us:
        </p>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((card, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 text-center"
            >
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-700 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* H3 Sections */}
        <div className="flex flex-wrap justify-center md:justify-start gap-8">
          {sections.map((sec, i) => {
            const isLastOdd =
              sections.length % 2 !== 0 && i === sections.length - 1;

            return (
              <div
                key={i}
                className={`bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all w-full md:w-[calc(50%-1rem)] ${
                  isLastOdd ? "md:mx-auto" : ""
                }`}
              >
                <Image
                  src={sec.imgSrc}
                  alt={sec.title}
                  width={100}
                  height={100}
                  className="w-6 mb-2"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {sec.h3}
                </h3>
                <p className="text-gray-700 leading-relaxed">{sec.p}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
