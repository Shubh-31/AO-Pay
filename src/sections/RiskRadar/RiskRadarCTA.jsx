"use client";

const RiskRadarCTA = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Protect Your Institution with Advanced Risk Management Solution
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          Connect with our risk management experts to discover how the Risk
          Radar Platform can reduce fraud losses, ensure compliance, and enhance
          your institution's risk posture with AI-powered detection and
          real-time monitoring.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            Schedule Risk Assessment Demo
          </button>
          <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-gray-700 transition">
            Speak with Risk Expert
          </button>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
          Ready to strengthen your risk defenses?
        </h3>
        <p className="text-gray-600 mt-2">
          Join leading banks and financial institutions who have reduced fraud
          losses by 60-80% with our Risk Radar Platform.
        </p>
      </div>
    </section>
  );
};

export default RiskRadarCTA;
