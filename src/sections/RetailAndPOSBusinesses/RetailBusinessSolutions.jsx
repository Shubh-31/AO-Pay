"use client";

const RetailBusinessSolutions = () => {
  const businessTiers = [
    {
      imgSrc:
        "/assets/RetailAndPOS/AOPAY Tailored Solutions for Every Retail Business Size/Small-Scale Retail Stores and Local Businesses.png",
      title: "Small-Scale Retail Stores and Local Businesses",
      description:
        "Independent retailers and small store owners benefit from cost-effective payment solutions that enable professional payment acceptance without complex setup or high fees. Our platform provides essential POS capabilities, UPI integration, and basic analytics that help local businesses compete with larger retailers while maintaining personalized customer service and community connections.",
    },
    {
      imgSrc:
        "/assets/RetailAndPOS/AOPAY Tailored Solutions for Every Retail Business Size/Mid-Scale Retail Chains and Regional Businesses.png",
      title: "Mid-Scale Retail Chains and Regional Businesses",
      description:
        "Growing retail chains and regional businesses require scalable infrastructure that supports multiple locations, centralized reporting, and consistent customer experiences. Our comprehensive solution handles advanced inventory integration, customer data management, loyalty program support, and detailed analytics that enable efficient multi-location operations and strategic business decisions.",
    },
    {
      imgSrc:
        "/assets/RetailAndPOS/AOPAY Tailored Solutions for Every Retail Business Size/Large-Scale Retail Enterprises and Department Stores.png",
      title: "Large-Scale Retail Enterprises and Department Stores",
      description:
        "Enterprise retailers and department stores need secure platforms that handle high transaction volumes, complex product catalogs, and sophisticated customer management across multiple channels. Our enterprise solution provides advanced features including omnichannel integration, enterprise reporting, compliance management, and custom workflow capabilities that ensure seamless operations at massive scale.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          AOPAY Tailored Solutions for Every Retail Business Size
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-1">
        {businessTiers.map((tier, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg border-l-4 border-black transition duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <img src={tier.imgSrc} alt={tier.title} className="w-4 h-4" />
              <h3 className="text-xl font-semibold text-gray-900">
                {tier.title}
              </h3>
            </div>
            <p className="text-gray-700">{tier.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RetailBusinessSolutions;
