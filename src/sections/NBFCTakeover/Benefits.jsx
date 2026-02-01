"use client";
import React from "react";

export default function Benefits() {
  const benefits = [
    {
      title: "📈 Accelerated Revenue Growth",
      desc: "Immediate access to existing revenue streams and customer relationships drives positive growth in sales and profitability from day one.",
    },
    {
      title: "🗺️ Geographic Expansion",
      desc: "Instantly expand regional presence and access new customer segments across multiple locations without establishing infrastructure from scratch.",
    },
    {
      title: "📊 Portfolio Diversification",
      desc: "Acquire diversified asset portfolios and customer bases that improve financial performance stability and reduce concentration risks.",
    },
    {
      title: "💪 Enhanced Market Control",
      desc: "Increase market share and competitive positioning within your target segments through consolidated operations.",
    },
    {
      title: "⚙️ Operational Efficiency",
      desc: "Leverage established systems, processes, technology platforms, and trained workforce to improve overall operational efficiency.",
    },
    {
      title: "⏱️ Significant Time Savings",
      desc: "Complete acquisition in 60 days versus 6-9 months required for new NBFC registration, enabling faster market entry and competitive advantage.",
    },
    {
      title: "🎯 Reduced Execution Risk",
      desc: "Acquire proven business models with established track records rather than validating new concepts from scratch.",
    },
    {
      title: "🤝 Existing Relationships",
      desc: "Inherit valuable relationships with customers, creditors, partners, and regulators that take years to build organically.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          Strategic Benefits of NBFC Takeover for Acquirers
        </h2>
        <p className="text-gray-700 text-center max-w-7xl mx-auto mb-12">
          Acquiring an existing NBFC delivers substantial strategic and
          operational advantages compared to building a new financial institution
          from scratch:
        </p>

        {/* Benefit Cards */}
        <div className="space-y-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start bg-white rounded-xl shadow-sm border-l-4 border-transparent hover:shadow-md hover:scale-[1.01] transition-all duration-300 p-5"
              style={{
                borderImage:
                  "linear-gradient(to bottom right, #fb923c, #60a5fa) 1",
              }}
            >
              <h3 className="font-semibold text-gray-900 text-lg mb-2 md:mb-0 md:w-1/3">
                {item.title}:
              </h3>
              <p className="text-gray-700 md:w-2/3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
