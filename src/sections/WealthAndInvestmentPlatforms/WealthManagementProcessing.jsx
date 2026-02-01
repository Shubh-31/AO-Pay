"use client";

const WealthManagementProcessing = () => {
  const stats = [
    { label: "SIP Collection Success", value: "30% Increase" },
    { label: "E-NACH Success Rate", value: "99%" },
    { label: "Automated Processing", value: "24/7" },
    { label: "Investments Processed", value: "₹10B+" },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Maximize Investment Collection with Smart Wealth Management Processing
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Process SIP investments, lump sum investments, and portfolio
          transactions from investors worldwide in minutes. Our platform is
          designed to increase payment success at every step of the investment
          flow – from optimized investment collection interfaces and regulatory
          compliance to seamless portfolio management and automated settlement
          systems tailored for wealth management operations.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-4 text-center">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow border-t-4 border-black transition duration-300 hover:shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {stat.value}
            </h3>
            <p className="text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WealthManagementProcessing;
