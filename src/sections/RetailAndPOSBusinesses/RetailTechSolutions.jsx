"use client";

const RetailTechSolutions = () => {
  const features = [
    {
      imgSrc:
        "/assets/RetailAndPOS/Advanced Technology for Modern Retail Operations/AI-Powered Fraud Prevention.png",
      title: "AI-Powered Fraud Prevention",
      description:
        "Advanced machine learning algorithms analyze transaction patterns and customer behavior to detect and prevent fraudulent activities while maintaining smooth experiences for legitimate customers.",
    },
    {
      imgSrc:
        "/assets/RetailAndPOS/Advanced Technology for Modern Retail Operations/Omnichannel Integration.png",
      title: "Omnichannel Integration",
      description:
        "Easily connect online stores, mobile apps, and physical locations with unified customer profiles, inventory management, and consistent pricing across all channels.",
    },
    {
      imgSrc:
        "/assets/RetailAndPOS/Advanced Technology for Modern Retail Operations/Real-Time Business Intelligence.png",
      title: "Real-Time Business Intelligence",
      description:
        "Access real-time insights into sales performance, customer behavior, and market trends with comprehensive analytics dashboards and automated reporting capabilities.",
    },
    {
      imgSrc:
        "/assets/RetailAndPOS/Advanced Technology for Modern Retail Operations/Mobile-First Architecture.png",
      title: "Mobile-First Architecture",
      description:
        "Modern, mobile-optimized architecture ensures consistent performance across smartphones, tablets, and traditional POS terminals while supporting emerging payment technologies.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Advanced Technology for Modern Retail Operations
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Leverage cutting-edge payment technology to optimize retail
          operations, enhance security, and create competitive advantages
          through innovative customer experiences and operational efficiency.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg border-l-4 border-black transition duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="w-6 h-6"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RetailTechSolutions;
