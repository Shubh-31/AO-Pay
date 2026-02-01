"use client";

export default function FinancialInformationCovered() {
  const infoCards = [
    { icon: "💰", title: "Bank Deposits & Savings" },
    { icon: "🏦", title: "Deposits with NBFCs" },
    { icon: "📈", title: "Structured Investment Products (SIP)" },
    { icon: "📄", title: "Commercial Paper (CP)" },
    { icon: "🎫", title: "Certificates of Deposits (CD)" },
    { icon: "🏛️", title: "Government Securities" },
    { icon: "📊", title: "Equity Shares" },
    { icon: "💎", title: "Bonds & Debentures" },
    { icon: "🎯", title: "Mutual Fund Units" },
    { icon: "📉", title: "Exchange Traded Funds (ETF)" },
    { icon: "🌐", title: "Indian Depository Receipts" },
    { icon: "🔄", title: "Collective Investment Schemes" },
    { icon: "🚀", title: "Alternative Investment Funds (AIF)" },
    { icon: "🛡️", title: "Insurance Policies" },
    { icon: "📋", title: "GST Returns" },
    { icon: "👴", title: "National Pension System (NPS)" },
    { icon: "🏗️", title: "Infrastructure Investment Trusts" },
    { icon: "🏘️", title: "Real Estate Investment Trusts" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
        Types of Financial Information Covered Under AA Framework
      </h2>

      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
        The RBI Master Direction for NBFC Account Aggregators specifies
        comprehensive categories of financial information that can be shared
        through the AA framework with customer consent:
      </p>

      {/* Card Grid */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {infoCards.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 w-[45%] sm:w-[30%] lg:w-[22%] xl:w-[18%] 
                       bg-white border border-gray-100 rounded-xl shadow-sm 
                       hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-2xl mb-2">{item.icon}</div>
            <h3 className="text-gray-800 font-medium text-center text-xs sm:text-sm leading-snug">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
        This wide coverage allows Account Aggregators to provide holistic
        financial profiles — enabling better credit decisions, personalized
        wealth management, and innovative financial products.
      </p>

      <div className="text-center">
        <button className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm">
          Start Your AA Journey
        </button>
      </div>
    </section>
  );
}
