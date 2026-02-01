"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  {
    title: "Complete Field Operations Mobile Suite",
    points: [
      "Native Android applications for field officers",
      "Offline-first architecture for remote area operations",
      "Biometric authentication for secure access",
      "GPS tracking for customer visits and collections",
      "Digital forms and documentation capture",
      "Multi-language support for local languages",
      "Low-bandwidth optimization for rural networks",
    ],
  },
  {
    title: "Rapid Deployment Benefits for MFIs",
    points: [
      "Pre-built microfinance workflows and process",
      "Integrated compliance and regulatory features",
      "Customer onboarding optimized for rural populations",
      "24/7 technical support and maintenance",
      "Regular updates with new microfinance features",
      "Training and change management support",
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

export default function ExtraExpandableCards() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Mobile-First Microfinance Application Suite
      </h2>
      <div className="text-center">
        <p className="mb-4">
          Empower your field operations with cutting-edge mobile technology
          designed for microfinance institutions
        </p>
      </div>

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
      <div className="text-center p-4">
        <Button>Try Mobile App Now</Button>
      </div>
    </section>
  );
}
