"use client";

const RetailPaymentMethods = () => {
  const methods = [
    "Credit Cards",
    "Debit Cards",
    "UPI Payments",
    "QR Code Payments",
    "Contactless Payments",
    "Digital Wallets",
    "Apple Pay",
    "Google Pay",
    "Samsung Pay",
    "Net Banking",
    "BNPL Services",
    "Gift Cards",
    "Loyalty Points",
    "EMI Options",
    "Cash Payments",
    "Mobile Banking",
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Comprehensive Payment Method Support for Retail
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Accept all popular payment methods preferred by customers while
          ensuring security, speed, and convenience across all transaction types
          and channels.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {methods.map((method, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-4 shadow-sm flex items-center justify-center hover:shadow-md transition"
          >
            <span className="text-gray-800 font-medium">{method}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RetailPaymentMethods;
