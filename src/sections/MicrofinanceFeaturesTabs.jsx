"use client";
import { useState } from "react";

export default function MicrofinanceFeaturesTabs() {
  const [active, setActive] = useState("onboarding");

  const features = {
    onboarding: {
      title: "Digital Customer Onboarding & KYC for MFIs",
      subtitle: "Remote Onboarding for Financial Inclusion",
      items: [
        "Self-registration via mobile number for rural customers",
        "Flexible document upload (Aadhaar, PAN, income proof, land records)",
        "Automated KYC verification with government databases",
        "Manual verification workflows for loan officers",
        "Group lending (SHG/JLG) onboarding processes",
        "Multilingual support for regional languages",
      ],
    },
    transactions: {
      title: "Complete Microfinance Transaction Management",
      subtitle: "End-to-End Lending Operations",
      items: [
        "Loan origination and disbursement workflows",
        "EMI collection and repayment processing",
        "Group lending and Self Help Group (SHG) management",
        "Emergency loan disbursements for urgent needs",
        "Savings account management for microfinance clients",
        "Automated late payment handling and penalties",
        "Field collection agent mobile app integration",
      ],
    },
    risk: {
      title: "MFI Risk Management & Compliance",
      subtitle: "Advanced Risk Assessment (Available Now)",
      items: [
        "AI-powered credit scoring for micro-borrowers",
        "Over-indebtedness prevention and monitoring",
        "Regulatory compliance reporting (RBI, local authorities)",
        "Portfolio risk analysis and early warning systems",
        "Customer protection and fair practice monitoring",
        "Anti-money laundering (AML) compliance tools",
      ],
    },
    crm: {
      title: "Integrated MFI CRM & Customer Management",
      subtitle: "Complete Customer Lifecycle Management",
      items: [
        "360-degree customer view with loan history and social data",
        "Field officer mobile CRM with offline capabilities",
        "Customer communication via SMS, calls, and local languages",
        "Group formation and management for SHGs",
        "Customer financial education tracking",
        "Social performance measurement (SPM) reporting",
      ],
    },
    audit: {
      title: "Comprehensive MFI Audit & Reporting",
      subtitle: "Regulatory & Operational Reporting",
      items: [
        "Complete activity logging for all user actions",
        "Detailed session tracking for field officers and staff",
        "Regulatory reporting for RBI and local authorities",
        "Portfolio quality and performance analytics",
        "Social impact measurement and reporting",
        "Donor reporting and transparency tools",
      ],
    },
    mobile: {
      title: "Mobile-First Field Operations",
      subtitle: "Designed for Rural and Remote Operations",
      items: [
        "Offline-capable mobile apps for field officers",
        "GPS tracking for customer visits and collections",
        "Digital attendance and group meeting management",
        "Photo documentation for loan applications",
        "Instant loan approval workflows on mobile",
        "Real-time synchronization when connectivity is restored",
      ],
    },
  };

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Ready-to-Deploy Smart Microfinance Software for Digital Lending
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Comprehensive microfinance management tools designed specifically for
        MFIs, NBFCs, and NGO-based micro-lenders
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(features).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              active === key
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {features[key].title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow p-6 md:p-10">
        <h3 className="text-2xl font-semibold mb-2">
          {features[active].title}
        </h3>
        <h4 className="text-lg text-indigo-600 mb-4">
          {features[active].subtitle}
        </h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {features[active].items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
