"use client";

import { BarChart2, FileText, TrendingUp } from "lucide-react";

const AEPSAnalytics = () => {
  const sections = [
    {
      icon: <BarChart2 className="w-6 h-6 text-blue-600" />,
      title: "Real-Time Dashboard",
      points: [
        "Live transaction monitoring and status tracking",
        "Success rate analytics and performance metrics",
        "Device utilization and performance insights",
        "Revenue tracking and commission calculations",
      ],
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "Detailed Reporting",
      points: [
        "Daily, weekly, and monthly transaction reports",
        "Bank-wise transaction analysis",
        "Agent performance and productivity reports",
        "Compliance and audit reports for regulators",
      ],
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "Advanced Analytics",
      points: [
        "Transaction pattern analysis and trends",
        "Customer behavior insights and demographics",
        "Geographic transaction distribution analysis",
        "Peak usage time and capacity planning",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          AOPAY AEPS Analytics & Reporting
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Gain valuable insights into your AEPS operations with comprehensive
          reporting and analytics capabilities.
        </p>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {section.title}
                </h3>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AEPSAnalytics;
