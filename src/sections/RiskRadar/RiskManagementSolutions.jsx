"use client";

const RiskManagementSolutions = () => {
  const solutions = [
    {
      imgSrc : "",
      title: "For Banks & Financial Institutions",
      description:
        "Enterprise-grade risk management with Basel compliance, stress testing, and comprehensive fraud prevention for retail and commercial banking operations.",
      buttonText: "Banking Solutions",
    },
    {
      title: "For NBFCs & Digital Lenders",
      description:
        "Scalable risk assessment and fraud detection tailored for digital lending, microfinance, and alternative credit.",
      buttonText: "NBFC Solutions",
    },
    {
      title: "For Fintech Startups",
      description:
        "Rapid deployment of enterprise-level risk management capabilities without the complexity of building from scratch. API-first architecture for easy integration.",
      buttonText: "Fintech Solutions",
    },
  ];

  const deploymentOptions = [
    {
      imgSrc:
        "/assets/RiskRadar/Flexible Risk Platform Deployment Options/Enterprise Source Code License.png",
      title: "Enterprise Source Code License",
      description:
        "Complete ownership of risk management platform source code with unlimited customization for proprietary risk models, custom fraud rules, and unique compliance requirements.",
    },
    {
      imgSrc:
        "/assets/RiskRadar/Flexible Risk Platform Deployment Options/API-First Risk Integration.png",
      title: "API-First Risk Integration",
      description:
        "Seamlessly integrate risk assessment, fraud detection, and compliance monitoring into existing systems through 470+ REST APIs designed for financial institutions.",
    },
    {
      imgSrc:
        "/assets/RiskRadar/Flexible Risk Platform Deployment Options/Cloud-Native SaaS Deployment.png",
      title: "Cloud-Native SaaS Deployment",
      description:
        "Launch risk management capabilities quickly with our cloud-based platform offering automatic scaling, 99.9% uptime, and continuous threat intelligence updates.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Risk Management Solutions for Every Institution
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 mb-12">
        {solutions.map((sol, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {sol.title}
            </h3>
            <p className="text-gray-600 mb-4">{sol.description}</p>
            <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-50 transition border">
              {sol.buttonText}
            </button>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          Flexible Risk Platform Deployment Options
        </h2>
        {deploymentOptions.map((opt, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            {/* Icon + title in one line */}
            <div className="flex items-center gap-3 mb-2">
              <img src={opt.imgSrc} alt={opt.title} className="w-6 h-auto" />
              <h3 className="text-xl font-semibold text-gray-900">
                {opt.title}
              </h3>
            </div>

            <p className="text-gray-600">{opt.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RiskManagementSolutions;
