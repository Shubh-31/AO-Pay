"use client";

const RetailExpertSupport = () => {
  const supportPoints = [
    {
      imgSrc:
        "/assets/RetailAndPOS/Expert Support for Retail Payment Transformation/Store Setup and Integration.png",
      title: "Store Setup and Integration",
      description:
        "Comprehensive support for implementing payment solutions including POS integration, staff training, and system optimization with dedicated project management and technical assistance.",
    },
    {
      imgSrc:
        "/assets/RetailAndPOS/Expert Support for Retail Payment Transformation/Customer Experience Optimization.png",
      title: "Customer Experience Optimization",
      description:
        "Specialized consultation on improving checkout processes, reducing transaction times, and enhancing customer satisfaction through payment experience design and optimization strategies.",
    },
    {
      imgSrc:
        "/assets/RetailAndPOS/Expert Support for Retail Payment Transformation/Revenue Growth Strategies.png",
      title: "Revenue Growth Strategies",
      description:
        "Ongoing analysis and recommendations to increase sales, optimize payment acceptance, and identify new revenue opportunities through data-driven insights and industry best practices.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Expert Support for Retail Payment Transformation
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Partner with AOPAY's retail payment experts to optimize your store
          operations, enhance customer experiences, and maximize revenue through
          specialized guidance and ongoing platform support.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3">
        {supportPoints.map((point, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg border-t-4 border-black transition duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <img src={point.imgSrc} alt={point.title} className="w-6 h-6" />
              <h3 className="text-xl font-semibold text-gray-900">
                {point.title}
              </h3>
            </div>
            <p className="text-gray-700">{point.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default RetailExpertSupport;
