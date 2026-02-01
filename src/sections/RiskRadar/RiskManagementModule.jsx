"use client";

const RiskManagementModule = () => {
  const modules = [
    {
      imgSrc:
        "/assets/RiskRadar/Comprehensive Risk Management Modules/Fraud Detection.png",
      title: "Fraud Detection",
      description:
        "Real-time fraud detection with behavioral analytics, anomaly detection, and machine learning models.",
      buttonText: "Critical Protection",
    },
    {
      imgSrc:
        "/assets/RiskRadar/Comprehensive Risk Management Modules/Credit Assessment.png",
      title: "Credit Risk Assessment",
      description:
        "Advanced credit scoring, default prediction, and portfolio risk analysis with predictive analytics.",
      buttonText: "High Priority",
    },
    {
      imgSrc:
        "/assets/RiskRadar/Comprehensive Risk Management Modules/AML Compliance.png",
      title: "AML Compliance",
      description:
        "Automated AML/CFT monitoring, suspicious activity detection, and regulatory reporting automation.",
      buttonText: "Critical Protection",
    },
    {
      imgSrc:
        "/assets/RiskRadar/Comprehensive Risk Management Modules/Transaction Monitoring.png",
      title: "Transaction Monitoring",
      description:
        "Real-time transaction screening with rule-based and AI-powered detection of suspicious patterns.",
      buttonText: "Critical Protection",
    },
    {
      imgSrc:
        "/assets/RiskRadar/Comprehensive Risk Management Modules/Operational Risk.png",
      title: "Operational Risk",
      description:
        "System risk monitoring, operational loss tracking, and process failure detection.",
      buttonText: "High Priority",
    },
    {
      imgSrc:
        "/assets/RiskRadar/Comprehensive Risk Management Modules/Risk Analytics.png",
      title: "Risk Analytics",
      description:
        "Comprehensive risk dashboards, predictive modeling, and scenario analysis tools.",
      buttonText: "Essential",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Comprehensive Risk Management Modules
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Empower your financial operations with intelligent, multi-layered risk
          management systems. AOPAY ensures every transaction, account, and
          process operates under advanced protection and regulatory standards.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((mod, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow border-t-4 border-gray-900"
          >
            {/* Icon + title in one line */}
            <div className="flex items-center gap-3 mb-3">
              <img src={mod.imgSrc} alt={mod.title} className="w-6 h-auto" />
              <h3 className="text-xl font-semibold text-gray-900">
                {mod.title}
              </h3>
            </div>

            <p className="text-gray-600 mb-5">{mod.description}</p>
            <button className="px-5 py-2 text-black border rounded-xl font-sm transition bg-none hover:bg-gray-50">
              {mod.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RiskManagementModule;
