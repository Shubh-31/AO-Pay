"use client";

const RetailIntegration = () => {
  const integrations = [
    "POS Systems: Integration with popular POS terminals and retail management systems",
    "Inventory Management: Real-time sync with inventory tracking and automated reordering systems",
    "E-commerce Platforms: Seamless connection with online stores and marketplaces",
    "Accounting Software: Automated financial reporting and bookkeeping integration",
    "CRM Systems: Customer data synchronization and loyalty program management",
    "Supply Chain Management: Vendor payment automation and procurement system integration",
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Easy Integration with Retail Ecosystems
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Connect AOPAY with existing retail systems and third-party services to
          create unified operations that maximize efficiency and provide
          comprehensive business management capabilities.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        {integrations.map((item, index) => (
          <div
            key={index}
            className="p-5 bg-white rounded-xl shadow hover:shadow-lg border-l-4 border-black transition duration-300"
          >
            <p className="text-gray-800 font-medium">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RetailIntegration;
