"use client";

const RetailPaymentTransformation = () => {
  const features = [
    {
      imgSrc:
        "/assets/RetailAndPOS/Ready to Transform Your Retail Payment Experience/POS Payment Solutions.png",
      title: "POS Payment Solutions",
      description:
        "Advanced point-of-sale payment processing with multi-method acceptance, inventory integration, and customer management capabilities for modern retail operations.",
      buttonText: "Explore POS Solutions",
    },
    {
      imgSrc:
        "/assets/RetailAndPOS/Ready to Transform Your Retail Payment Experience/Omnichannel Integration.png",
      title: "Omnichannel Integration",
      description:
        "Unified payment experiences across online stores, mobile apps, and physical locations with centralized reporting and customer data management.",
      buttonText: "Explore Omnichannel",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Ready to Transform Your Retail Payment Experience?
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Modernize your retail operations with AOPAY's comprehensive payment
          platform. From POS systems to online integration, we provide
          everything needed to enhance customer experience and grow your retail
          business.
        </p>
        <button className="mt-6 px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300">
          Contact Sales
        </button>
      </div>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg border-t-4 border-black transition duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="w-6 h-6"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-700 mb-4">{feature.description}</p>
            <button className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300">
              {feature.buttonText}
            </button>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-gray-700 text-lg mb-4">
          As retail industry continues transforming through digital innovation,
          omnichannel customer experiences, and emerging payment technologies,
          having secure, flexible payment infrastructure is essential for
          competitive advantage and sustainable growth. AOPAY's comprehensive
          platform ensures your retail business stays at the forefront of
          commerce innovation while maintaining operational excellence, customer
          satisfaction, and revenue optimization in the dynamic retail
          landscape.
        </p>
        <h3 className="text-lg font-semibold text-gray-900">
          Ready to revolutionize retail payments? - Join successful retailers
          and POS businesses already using AOPAY to transform their payment
          operations and deliver exceptional customer experiences.
        </h3>
      </div>
    </section>
  );
};

export default RetailPaymentTransformation;
