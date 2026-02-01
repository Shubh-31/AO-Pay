// PaymentGatewayPerformance.jsx
export default function PaymentGatewayPerformance() {
  const stats = [
    { value: "99.9%", label: "Success Rate" },
    { value: "500ms", label: "Average Response Time" },
    { value: "24/7", label: "System Monitoring" },
  ];

  return (
    <section className="py-12 px-4 md:px-12 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-sm">
      <div className="max-w-5xl mx-auto text-center">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          AOPAY Pay-in API – Performance Benchmarks
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
          Industry-leading performance metrics that power successful businesses
          across India.
        </p>

        {/* Stats Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full text-center">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl shadow hover:shadow-md transition transform hover:-translate-y-1 p-6"
              >
                <h3 className="text-3xl font-extrabold text-indigo-700 mb-1">
                  {item.value}
                </h3>
                <p className="text-gray-600 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
