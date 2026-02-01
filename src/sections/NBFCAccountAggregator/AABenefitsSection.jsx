"use client";

export default function AABenefitsSection() {
  const benefits = [
    {
      title: "🛡️ Operational Risk Management",
      description:
        "NBFC Account Aggregators represent an appropriate framework for operational risk management and business continuity planning, with robust systems for handling sensitive financial data securely.",
    },
    {
      title: "💳 Enhanced Credit Access",
      description:
        "Entities registered as Account Aggregators help customers with limited credit history gain improved access to credit products by providing lenders comprehensive financial profiles through consent-based data sharing.",
    },
    {
      title: "💻 Advanced IT Operations",
      description:
        "NBFC Account Aggregators perform sophisticated IT-oriented activities to provide advanced financial data analytics to clients, enabling data-driven decision making across the financial ecosystem.",
    },
    {
      title: "💰 Cost-Efficient Infrastructure",
      description:
        "Account Aggregator ecosystem offers a cost-efficient system for financial institutions by eliminating duplicate data collection efforts and streamlining customer onboarding processes.",
    },
    {
      title: "✅ Regulatory Compliance",
      description:
        "NBFC AA License ensures compliance with stringent regulatory standards, mitigating risks associated with real-time financial information sharing while maintaining legal safeguards.",
    },
    {
      title: "🔒 Data Privacy & Security",
      description:
        "License holders implement robust security protocols that protect customer data privacy and ensure information security for accounts held by clients, building trust in digital financial services.",
    },
    {
      title: "🚀 New-Age Financial Services",
      description:
        "AA License provides access to cutting-edge financing services and enables participation in India's consent-based data sharing framework, opening doors to innovative business models.",
    },
    {
      title: "🌐 Ecosystem Participation",
      description:
        "Join a growing network of 94+ live financial institutions and connect with 353 Financial Information Users actively seeking data aggregation services for their customers.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
        Strategic Benefits of NBFC Account Aggregator License
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
          Get Your AA License Today
        </button>
      </div>
    </section>
  );
}
