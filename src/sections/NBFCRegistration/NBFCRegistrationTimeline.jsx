"use client";

import React from "react";

export default function NBFCRegistrationTimeline() {
  const timeline = [
    { step: "Company Incorporation", duration: "7–14 days" },
    { step: "PAN and TAN Acquisition", duration: "7 days" },
    { step: "Bank Account Opening", duration: "7 days" },
    { step: "Credit Reports Processing", duration: "7–14 days" },
    { step: "Business Plan Development", duration: "14–28 days" },
    { step: "Application Preparation & Submission", duration: "7 days" },
    { step: "First Stage RBI Clearance", duration: "7 days" },
    {
      step: "RBI Due Diligence & Background Verification",
      duration: "90–180 days",
    },
    { step: "Regional Office Communication", duration: "7 days" },
    {
      step: "Certificate of Registration Receipt",
      duration: "Upon final approval",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          NBFC Registration Timeline - How Long Does It Take?
        </h2>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          NBFC registration is a comprehensive process requiring{" "}
          <span className="font-semibold text-gray-900">
            90 to 180 working days
          </span>{" "}
          from initiation to approval. The duration depends on documentation
          quality, FDI involvement, and application complexity. Here’s the
          detailed breakdown:
        </p>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all p-6"
            >
              <div className="absolute -left-2 top-10 w-3 h-3 bg-green-500 rounded-full"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.step}
              </h3>
              <p className="text-gray-600 font-medium">{item.duration}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-700 text-center max-w-4xl mx-auto mt-10 leading-relaxed">
          AOPay's NBFC registration consultants expedite this process by
          ensuring flawless documentation, reducing back-and-forth queries with
          regulators, and maintaining proactive communication with RBI officials
          throughout the approval journey.
        </p>

        {/* Button */}
        <div className="text-center mt-10">
          <a
            href="/contact-us"
            className="inline-block bg-green-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Get Started with AOPay
          </a>
        </div>
      </div>
    </section>
  );
}
