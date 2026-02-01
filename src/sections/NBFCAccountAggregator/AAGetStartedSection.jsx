"use client";

export default function AAGetStartedSection() {
  const cards = [
    {
      icon: "📞",
      title: "Expert Consultation",
      description:
        "Speak with our NBFC AA License specialists to understand requirements and timelines.",
      buttonText: "Contact Now →",
    },
    {
      icon: "📋",
      title: "Documentation Review",
      description:
        "Get your existing documentation reviewed for AA License readiness and compliance.",
      buttonText: "Request Review →",
    },
    {
      icon: "💻",
      title: "Technology Assessment",
      description:
        "Evaluate your technology infrastructure against SAHAMATI and RBI requirements.",
      buttonText: "Get Assessment →",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
        Get Started with Your NBFC Account Aggregator License Today
      </h2>

      <p className="text-gray-700 text-center max-w-4xl mx-auto mb-10 leading-relaxed">
        Account Aggregator ecosystem represents the future of financial data
        sharing in India, offering unprecedented opportunities for fintechs,
        NBFCs, and technology companies to participate in the digital finance
        revolution. With consent-based architecture, regulatory backing, and
        growing adoption, the AA framework is transforming how financial
        services are delivered.
      </p>

      <div className="bg-gray-50 rounded-2xl shadow-md p-8 mb-10 text-center border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Ready to Become an Account Aggregator?
        </h3>
        <p className="text-gray-700 mb-6">
          Join the AA ecosystem and unlock new business opportunities in
          financial data services.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
          Schedule Free Consultation
        </button>
      </div>

      <div className="text-center text-gray-600 mb-10">
        <p className="text-sm md:text-base">
          ✓ 99% Success Rate &nbsp; | &nbsp; ✓ Complete Documentation Support
          &nbsp; | &nbsp; ✓ Technology Advisory
        </p>
        <p className="text-sm md:text-base">
          ✓ Compliance Management &nbsp; | &nbsp; ✓ Fast-Track Approval
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow text-center"
          >
            <h3 className="text-3xl mb-2">{card.icon}</h3>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              {card.title}
            </h4>
            <p className="text-gray-700 mb-5">{card.description}</p>
            <button className="text-blue-600 hover:text-blue-700 font-semibold transition">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
