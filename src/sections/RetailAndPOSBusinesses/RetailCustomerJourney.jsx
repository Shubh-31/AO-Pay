"use client";

const RetailCustomerJourney = () => {
  const steps = [
    {
      title: "Product Selection",
      description:
        "Customers browse and select products with integrated inventory visibility and pricing information across all channels.",
    },
    {
      title: "Payment Method Choice",
      description:
        "Flexible payment options presented based on customer preferences and transaction amount with clear fee disclosure.",
    },
    {
      title: "Secure Transaction Processing",
      description:
        "Fast, secure payment processing with real-time fraud detection and instant authorization for customer confidence.",
    },
    {
      title: "Instant Confirmation",
      description:
        "Immediate payment confirmation with digital receipts, warranty information, and loyalty program updates.",
    },
    {
      title: "Post-Purchase Services",
      description:
        "Integrated customer support, return processing, and personalized marketing based on purchase history and preferences.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Smooth Customer Payment Experience
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Guide customers through intuitive payment processes that maximize
          satisfaction, reduce transaction time, and ensure security across all
          retail environments and channels.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 bg-white border-l-4 border-black rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {index + 1}. {step.title}
            </h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RetailCustomerJourney;
