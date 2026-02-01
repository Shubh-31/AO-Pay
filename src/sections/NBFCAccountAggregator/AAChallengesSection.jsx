"use client";

export default function AAChallengesSection() {
  const challenges = [
    {
      title: "⚠️ Challenge 1: Complex Regulatory Documentation",
      solution:
        "Our regulatory experts prepare comprehensive documentation meeting RBI standards, eliminating back-and-forth queries and approval delays.",
    },
    {
      title: "⚠️ Challenge 2: Technology Standards Compliance",
      solution:
        "We guide you through SAHAMATI technical specifications, API implementations, and security requirements ensuring first-time approval.",
    },
    {
      title: "⚠️ Challenge 3: Capital and Business Plan Requirements",
      solution:
        "Our financial advisors help structure optimal capital arrangements and develop compelling business plans demonstrating viability.",
    },
    {
      title: "⚠️ Challenge 4: Fit and Proper Criteria Demonstration",
      solution:
        "We assist in gathering necessary declarations, background verifications, and documentation proving promoter credentials.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
        Common Challenges in AA License Acquisition and How We Solve Them
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {challenges.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium text-blue-600">Solution: </span>
              {item.solution}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
