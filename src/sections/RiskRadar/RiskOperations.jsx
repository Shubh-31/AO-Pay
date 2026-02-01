"use client";

import { useState } from "react";

const RiskOperations = () => {
  const modules = [
    {
      imgSrc:
        "/assets/RiskRadar/Optimize Risk Operations & Reduce Losses/Risk-Based Pricing & Fee Management.png",
      title: "Risk-Based Pricing & Fee Management",
      points: [
        "Dynamic pricing based on customer risk profiles",
        "Risk-adjusted interest rates and fees",
        "Customizable fee structures for different risk tiers",
        "Automated pricing recommendations based on risk scores",
      ],
    },
    {
      imgSrc:
        "/assets/RiskRadar/Optimize Risk Operations & Reduce Losses/Advanced Risk Rule Engine.png",
      title: "Advanced Risk Rule Engine",
      points: [
        "Customizable risk rules and decision trees",
        "Multi-layered risk policies with override capabilities",
        "A/B testing for risk rules optimization",
        "Rule performance analytics and tuning recommendations",
        "Business rules engine with no-code configuration",
      ],
    },
    {
      imgSrc:
        "/assets/RiskRadar/Optimize Risk Operations & Reduce Losses/Comprehensive Risk Reporting & Analytics.png",
      title: "Comprehensive Risk Reporting & Analytics",
      points: [
        "Executive risk dashboards with real-time KPIs",
        "Fraud loss tracking and ROI measurement",
        "Regulatory reporting automation for audit compliance",
        "Portfolio risk analysis and concentration reports",
        "Predictive analytics and early warning indicators",
        "Benchmarking against industry risk standards",
      ],
    },
    {
      imgSrc:
        "/assets/RiskRadar/Optimize Risk Operations & Reduce Losses/Automated Case Management & Workflow.png",
      title: "Automated Case Management & Workflow",
      points: [
        "Intelligent case routing and assignment",
        "SLA tracking and escalation management",
        "Fraud investigation workflow automation",
        "Disposition tracking and outcome analysis",
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
          Optimize Risk Operations & Reduce Losses
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Enhance your risk management processes with intelligent pricing,
          advanced rules, comprehensive analytics, and automated workflows.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-4">
        {modules.map((module, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none hover:bg-gray-100 transition"
            >
              {/* Icon + Title Group */}
              <div className="flex items-center gap-3">
                <img
                  src={module.imgSrc}
                  alt={module.title}
                  className="w-6 h-6 object-contain"
                />
                <span className="text-lg font-semibold text-gray-900">
                  {module.title}
                </span>
              </div>

              {/* Expand / Collapse Symbol */}
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
                {module.points.map((point, i) => (
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

export default RiskOperations;
