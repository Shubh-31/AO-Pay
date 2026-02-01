"use client";

const RetailGrowth = () => {
  const growthPoints = [
    "Location Scaling: Add new stores and locations with consistent payment experiences",
    "Channel Expansion: Integrate online stores, mobile apps, and marketplace presence",
    "Service Diversification: Add financial services, bill payments, and additional revenue streams",
    "Technology Evolution: Integrate emerging technologies like AR/VR shopping and IoT devices",
    "Customer Experience Enhancement: Advanced personalization and loyalty program capabilities",
    "Operational Optimization: AI-powered analytics and automated business intelligence",
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Scale Your Retail Payment Infrastructure with Business Growth
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          As retail industry continues evolving with e-commerce integration,
          social commerce, and customer experience innovation, AOPAY's platform
          grows with your business, supporting expansion from single store to
          multi-location operations without infrastructure limitations.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        {growthPoints.map((point, index) => (
          <div
            key={index}
            className="p-5 bg-white rounded-xl shadow hover:shadow-lg border-l-4 border-black transition duration-300"
          >
            <p className="text-gray-800 font-medium">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RetailGrowth;
