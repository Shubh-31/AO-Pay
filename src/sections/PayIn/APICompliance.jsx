// PayInApiCompliance.jsx
export default function APICompliance() {
  const securityPoints = [
    {
      title: "PCI DSS Level 1 Compliance",
      description:
        "Highest level of payment card industry compliance ensuring secure handling of cardholder data and sensitive payment information.",
    },
    {
      title: "3D Secure Authentication",
      description:
        "Enhanced security layer for card transactions with 3D Secure 2.0 protocol reducing fraud and chargebacks significantly.",
    },
    {
      title: "Advanced Fraud Detection",
      description:
        "AI-powered fraud detection system with machine learning algorithms to identify and prevent fraudulent transactions in real-time.",
    },
    {
      title: "Data Encryption",
      description:
        "End-to-end encryption with AES-256 standards, tokenization of sensitive data, and secure key management for maximum data protection.",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Compliant with RBI guidelines, GDPR, SOX, and other international regulatory requirements for payment processing and data privacy.",
    },
    {
      title: "Risk Management",
      description:
        "Comprehensive risk assessment, transaction monitoring, and customizable risk rules to protect your business from financial losses.",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-12 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-sm">
      <div className="max-w-5xl mx-auto text-center">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          AOPAY Pay-in API Compliance & Security Standards
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
          Trust and security are paramount in payment processing. Our payment
          solution meets the highest industry standards for security,
          compliance, and data protection to ensure safe transactions for your
          business and customers.
        </p>

        {/* Security Highlights Grid */}
        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {securityPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-100 rounded-2xl shadow hover:shadow-md transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
