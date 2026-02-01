"use client";

const InvestmentPlatformExperience = () => {
  const features = [
    "SIP Collections",
    "Lump Sum Investments",
    "E-NACH Setup",
    "Bank Transfers",
    "UPI Investments",
    "Net Banking",
    "Credit Cards",
    "Debit Cards",
    "Fixed Deposits",
    "Recurring Deposits",
    "Portfolio Rebalancing",
    "Redemption Settlements",
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Optimize Your Investment Platform Experience
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          AOPAY's pre-built payment solutions provide an optimized experience
          designed specifically for wealth management firms and investment
          platforms. Our system reduces friction for SIP registrations, supports
          investment-specific payment schedules, and adapts to different
          investment products while maintaining complete regulatory compliance
          and security standards. Build a fully customized investment experience
          that matches your brand and simplify compliance using our flexible
          integration options designed for traditional wealth managers and
          innovative fintech investment platforms.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-5 bg-white rounded-xl shadow border-l-4 border-black transition duration-300 hover:shadow-lg"
          >
            <p className="text-gray-800 font-medium">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentPlatformExperience;
