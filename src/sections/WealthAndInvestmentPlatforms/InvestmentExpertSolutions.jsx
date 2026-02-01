"use client";

const InvestmentExpertSolutions = () => {
  const solutions = [
    {
      title: "Ready to Transform Your Investment Payment Processing?",
      description:
        "Explore AOPAY Investment Solutions, or create an account instantly to get started. Contact our specialists to design a custom payment platform that accelerates your wealth management operations and ensures regulatory compliance.",
      buttonText: "Contact Sales",
      buttonLink: "#contact-sales",
    },
    {
      title: "Mobile Investment Platform",
      description:
        "Enable on-the-go investment processing with mobile-optimized SIP collection and portfolio management designed for digital-first investors.",
      buttonText: "Explore Mobile Solutions",
      buttonLink: "#mobile-solutions",
    },
    {
      title: "Robo-Advisory Payments",
      description:
        "Support automated investment advisory with intelligent portfolio rebalancing, systematic investments, and goal-based financial planning tools.",
      buttonText: "Explore Robo-Advisory",
      buttonLink: "#robo-advisory",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Build Your Investment Success with AOPAY Experts
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          AOPAY wealth management payment specialists understand the unique
          challenges of traditional investment firms and innovative fintech
          platforms. We guide you through optimizing every aspect of your
          investment processing to ensure regulatory compliance, maximize
          collection success, and improve investor satisfaction.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition">
          Learn More
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {solutions.map((sol, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow border-l-4 border-black transition duration-300 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {sol.title}
            </h3>
            <p className="text-gray-600 mb-4">{sol.description}</p>
            <a
              href={sol.buttonLink}
              className="inline-block px-5 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
            >
              {sol.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentExpertSolutions;
