"use client";

import { motion } from "framer-motion";

export default function NBFCTakeoverTimeline() {
  const tableData = [
    {
      stage: "Initial Due Diligence",
      duration: "3–4 weeks",
      activities:
        "Target identification, preliminary assessment, MOU negotiation",
    },
    {
      stage: "Comprehensive Due Diligence",
      duration: "4–6 weeks",
      activities: "Financial, legal, operational deep-dive analysis",
    },
    {
      stage: "RBI Prior Approval",
      duration: "60–90 days",
      activities: "Application preparation, submission, RBI review",
    },
    {
      stage: "Public Notice (First)",
      duration: "30 days",
      activities: "Stakeholder notification, objection period",
    },
    {
      stage: "Agreement Execution",
      duration: "2–3 weeks",
      activities: "SPA drafting, negotiation, signing",
    },
    {
      stage: "Public Notice (Second)",
      duration: "30 days",
      activities: "Final stakeholder notification",
    },
    {
      stage: "Closing & Transfer",
      duration: "2–4 weeks",
      activities: "Asset transfer, regulatory filings, integration",
    },
  ];

  const cards = [
    {
      icon: "⏱️",
      title: "Factors Affecting Timeline",
      points: [
        "Documentation Quality: Incomplete or incorrect documents cause significant delays",
        "RBI Workload: Regulatory approval timelines vary based on pending applications",
        "Transaction Complexity: Cross-border deals or complex structures require more time",
        "Stakeholder Objections: Public objections during notice periods can extend timelines",
        "Due Diligence Findings: Discovery of issues requiring resolution adds time",
      ],
    },
    {
      icon: "✅",
      title: "AOPay Advantage: 60-Day Takeover",
      desc: "With AOPay's expert guidance, streamlined processes, and regulatory relationships, we compress the NBFC takeover timeline to as little as 60 days for straightforward transactions. Our team handles all complexities, ensuring zero regulatory delays and smooth execution from start to finish.",
    },
  ];

    const material = [
      {
        heading2: "NBFC Software Source Code License for Complete Control",
        heading2Para:
          "Get unprecedented flexibility with our enterprise source code licensing option.",
        points: [
          {
            imgSrc:
              "/assets/NBFC/Source Code License for Complete Control/Full Source Code Access.png",
            heading3: "Full Source Code Access",
            heading3Para:
              "Complete freedom to modify, customize, and scale the NBFC according to your specific business requirements. No vendor lock-in, maximum flexibility.",
          },
          {
            imgSrc:
              "/assets/NBFC/Source Code License for Complete Control/Warranty Protection.png",
            heading3: "Warranty Protection",
            heading3Para:
              "Comprehensive coverage for bug fixes, security updates, and platform enhancements. Our team ensures your investment remains protected and up-to-date.",
          },
          {
            imgSrc:
              "/assets/NBFC/Source Code License for Complete Control/Comprehensive Support.png",
            heading3: "Comprehensive Support",
            heading3Para:
              "Empower your development team with in-depth training, technical guidance, and ongoing support from our banking software experts.",
          },
          {
            imgSrc:
              "/assets/NBFC/Source Code License for Complete Control/Meet Your Deadlines.png",
            heading3: "Meet Your Deadlines",
            heading3Para:
              "Work directly with your internal team to meet project deadlines while bypassing traditional vendor delays and dependencies.",
          },
          {
            imgSrc:
              "/assets/NBFC/Source Code License for Complete Control/Minimized Development Risks.png",
            heading3: "Minimized Development Risks",
            heading3Para:
              "Avoid the bottlenecks and uncertainties of building complex banking software from scratch. Leverage our proven, battle-tested codebase.",
          },
          {
            imgSrc:
              "/assets/NBFC/Source Code License for Complete Control/Consistent Updates.png",
            heading3: "Consistent Updates",
            heading3Para:
              "Benefit from regular platform updates, new features, and performance enhancements to maintain peak operational efficiency.",
          },
        ],
      },
    ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="relative bg-white rounded-2xl shadow-md p-6 border border-gray-100 mb-10 overflow-hidden">
        {/* Left Gradient Border */}
        <div className="absolute top-0 left-0 w-1 h-full bg-black rounded-l-2xl" />

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          NBFC Takeover Timeline – How Long Does It Take?
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Realistic Timeline Expectations
          </h3>
          <p className="text-gray-700 mb-6">
            The complete NBFC takeover process typically requires{" "}
            <strong>5–6 months</strong> under normal circumstances. However,
            timelines can vary based on transaction complexity, RBI workload,
            and documentation quality.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-[#fb923c] to-[#60a5fa] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">
                    Process Stage
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Duration
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Key Activities
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-800">
                {tableData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{item.stage}</td>
                    <td className="px-4 py-3">{item.duration}</td>
                    <td className="px-4 py-3">{item.activities}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-semibold text-gray-900">
                  <td className="px-4 py-3">Total Duration</td>
                  <td className="px-4 py-3">5–6 months</td>
                  <td className="px-4 py-3">Complete takeover process</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all p-6 overflow-hidden"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#fb923c] to-[#60a5fa] rounded-l-2xl" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {card.icon} {card.title}
              </h3>
              {card.points ? (
                <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                  {card.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700">{card.desc}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
