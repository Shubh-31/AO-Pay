"use client";

const InvestmentBusinessModels = () => {
  const businessModels = [
    {
      title: "Independent Financial Advisors",
      description:
        "For individual advisors and small wealth management firms, AOPAY's investment payment processing enables secure SIP collection without complex infrastructure. Our KYC verification builds client confidence from the first investment, while automated commission processing ensures advisors receive timely payments. Simple integration gets your investment processing running quickly with minimal technical resources.",
      features: [
        "Quick Setup: Start collecting investments in days with advisor-friendly interfaces",
        "Commission Automation: Automated commission calculations and payments for advisors",
        "Client Management: Comprehensive tools for managing investor relationships and portfolios",
      ],
    },
    {
      title: "Growing Investment Platforms",
      description:
        "Scaling investment platforms benefit from AOPAY's advanced portfolio management that handles increasing investment volumes with intelligent routing and verification. Treasury management systems provide sophisticated financial oversight, while comprehensive reporting tools help demonstrate performance to investors and regulatory authorities.",
      features: [
        "Volume Scaling: Handle growing investment volumes with automated processing",
        "Risk Management: Advanced fraud detection and investment risk assessment capabilities",
        "Regulatory Compliance: Comprehensive compliance and regulatory reporting automation",
      ],
    },
    {
      title: "Fintech Investment Platforms and Enterprise Wealth Managers",
      description:
        "Large-scale investment operations and fintech companies require sophisticated payment orchestration across multiple asset classes and investment products. AOPAY's platform supports high transaction volumes with intelligent routing, multi-currency processing, and comprehensive financial management for complex investment ecosystems.",
      features: [
        "Platform Integration: Easy integration with investment platforms and portfolio systems",
        "Multi-Asset Support: Handle diverse investment products from mutual funds to alternatives",
        "Enterprise Features: Advanced treasury management and institutional-grade reporting",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Investment Payment Solutions for Every Business Model
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {businessModels.map((model, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow border-l-4 border-black transition duration-300 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {model.title}
            </h3>
            <p className="text-gray-600 mb-4">{model.description}</p>
            <ul className="space-y-2 list-disc list-inside text-gray-800">
              {model.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentBusinessModels;
