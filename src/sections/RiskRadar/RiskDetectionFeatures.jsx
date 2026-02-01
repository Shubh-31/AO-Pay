"use client";

import { useState } from "react";

const RiskDetectionFeatures = () => {
  const features = [
    {
      imgSrc:
        "/assets/RiskRadar/Advanced Risk Detection & Monitoring Features/Real-Time Fraud Detection & Prevention.png",
      title: "Real-Time Fraud Detection & Prevention",
      points: [
        "Real-time transaction screening with machine learning models",
        "Behavioral analytics and anomaly detection",
        "Device fingerprinting and geolocation analysis",
        "Velocity checks and pattern recognition",
        "Account takeover detection and prevention",
        "Synthetic identity fraud detection",
        "Automated fraud case management workflows",
        "False positive reduction with adaptive learning",
      ],
    },
    {
      imgSrc:
        "/assets/RiskRadar/Advanced Risk Detection & Monitoring Features/Comprehensive Credit Risk Assessment.png",
      title: "Comprehensive Credit Risk Assessment",
      points: [
        "Advanced credit scoring & analytics models with alternative data",
        "Real-time creditworthiness assessment",
        "Bureau integration with multi-bureau aggregation",
        "Default probability prediction and early warning",
        "Portfolio risk concentration analysis",
        "Stress testing and scenario modeling",
        "Expected credit loss (ECL) calculation",
        "Risk-based pricing recommendations",
      ],
    },
    {
      imgSrc:
        "/assets/RiskRadar/Advanced Risk Detection & Monitoring Features/TransactionMonitoring.png",
      title: "AML/CFT Compliance & Transaction Monitoring",
      points: [
        "Automated Compliance & Regulatory Reporting",
        "Real-time AML transaction monitoring and screening",
        "Suspicious Activity Report (SAR) generation",
        "Sanctions screening against global watchlists",
        "PEP (Politically Exposed Persons) identification",
        "Customer due diligence (CDD) and enhanced due diligence (EDD)",
        "Transaction pattern analysis and alert generation",
        "Automated regulatory reporting (FATF, FinCEN)",
        "Know Your Customer (KYC) risk scoring",
      ],
    },
    {
      imgSrc : "/assets/RiskRadar/Advanced Risk Detection & Monitoring Features/Automated KYC Processing.png",
      title: "Advanced Customer Onboarding & KYC",
      points: [
        "Risk-Based Customer Verification",
        "Digital KYC with document verification and validation",
        "Identity verification with multiple data sources",
        "Risk-based customer segmentation and profiling",
        "Automated sanctions and adverse media screening",
        "Continuous KYC monitoring and periodic reviews",
        "Video KYC with AI-powered verification",
      ],
    },
    {
      imgSrc:
        "/assets/RiskRadar/Advanced Risk Detection & Monitoring Features/Secure Payment Processing with Risk Controls.png",
      title: "Secure Payment Processing with Risk Controls",
      points: [
        "Risk-Aware Transaction Management",
        "Single payout API with real-time fraud screening",
        "Bulk payment processing with batch risk analysis",
        "Payment link generation with security controls",
        "Transaction velocity limits and threshold monitoring",
        "Multi-factor authentication for high-risk transactions",
        "Automated transaction holds and review queues",
        "Chargeback and dispute management with fraud tagging",
        "Real-time payment fraud detection and blocking",
      ],
    },
    {
      imgSrc:
        "/assets/RiskRadar/Advanced Risk Detection & Monitoring Features/Comprehensive Activity Logging & Investigation.png",
      title: "Comprehensive Activity Logging & Investigation",
      points: [
        "Forensic Analysis & Audit Trail",
        "Complete audit trail of all system activities",
        "Transaction reconstruction and forensic analysis",
        "User behavior analytics and insider threat detection",
        "Detailed session logging and access tracking",
        "Fraud investigation case management tools",
        "Evidence collection and chain of custody",
        "Regulatory examination support and reporting",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Advanced Risk Detection & Monitoring Features
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Protect your financial institution with AI-powered risk management,
          real-time analytics, and comprehensive monitoring systems.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none hover:bg-gray-100 transition"
            >
              {/* Title + Icon Group */}
              <div className="flex items-center gap-3">
                <img
                  src={feature.imgSrc}
                  alt={feature.title}
                  className="w-6 h-6 object-contain"
                />
                <span className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </span>
              </div>

              {/* Expand/Collapse Icon */}
              <span className="text-gray-500 font-bold text-xl">
                {activeIndex === idx ? "−" : "+"}
              </span>
            </button>

            {/* Accordion Content */}
            <div
              className={`px-6 pb-4 text-gray-600 transition-all duration-300 ${
                activeIndex === idx
                  ? "max-h-screen pt-2"
                  : "max-h-0 overflow-hidden"
              }`}
            >
              <ul className="list-disc list-inside space-y-1">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RiskDetectionFeatures;
