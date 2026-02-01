// SupportedPaymentMethods.jsx
export default function SupportedPaymentMethods() {
  const paymentMethods = [
    {
      category: "Credit Cards",
      details: "Visa, Mastercard, Rupay",
    },
    {
      category: "Debit Cards",
      details: "All major debit cards",
    },
    {
      category: "UPI",
      details: "GPay, PhonePe, Paytm UPI & more.",
    },
    {
      category: "Wallets",
      details: "Paytm, PhonePe, Amazon Pay and more.",
    },
    {
      category: "Net Banking",
      details: "100+ banks supported",
    },
    {
      category: "BNPL",
      details: "Buy Now Pay Later options",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-12 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-sm">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          AOPAY Payment Collection API: Supported Payment Methods
        </h2>
        <p className="text-gray-600 mb-10 text-lg max-w-3xl mx-auto">
          Accept payments seamlessly through <span className="font-semibold">100+ methods </span> with
          AOPAY Pay-In API Integration. Provide your customers with flexible
          payment options and increase conversion rates.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-100 shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {method.category}
              </h3>
              <p className="text-gray-600">{method.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
