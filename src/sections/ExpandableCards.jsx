"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const sections = [
  {
    title: "Flexible MFI Product & Contract Management",
    points: [
      "Multiple loan product configurations (individual, group, emergency)",
      "Customizable interest rates and repayment schedules",
      "Group guarantee and collateral management",
      "Seasonal loan products for agricultural microfinance",
      "Insurance product integration for loan protection",
    ],
  },
  {
    title: "Advanced Fee Structure & Interest Management",
    points: [
      "Flexible interest calculation methods (flat, reducing balance)",
      "Processing fees, service charges, and penalty structures",
      "Graduated interest rates based on loan cycle",
      "Dynamic pricing based on risk assessment",
      "Transparent fee disclosure for customer protection",
    ],
  },
  {
    title: "MFI Financial Reconciliation & Settlement",
    points: [
      "Automated Financial Management",
      "Daily cash flow reconciliation for branches",
      "Automated matching of collections with outstanding loans",
      "Fund transfer reconciliation between branches and head office",
      "Discrepancy identification and resolution workflows",
      "Integration with banking partners for settlement",
    ],
  },
  {
    title: "Cash Operations & Branch Management",
    points: [
      "Multi-branch cash desk operation management",
      "Cash-in-transit tracking and security protocols",
      "Daily cash position reporting for each branch",
      "Physical cash to digital payment conversion tracking",
      "Vault management and cash limit monitoring",
    ],
  },
];

export default function ExpandableCards() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        MFI Revenue Optimization & Financial Management
      </h2>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            {/* Header */}
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-gray-100 transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {section.title}
              </h3>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-gray-600" />
              ) : (
                <Plus className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Body */}
            {openIndex === index && (
              <div className="px-6 py-4 bg-white animate-fadeIn">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
