export default function EnterpriseSecurityCompliance() {
  const bankGradeSecurity = [
    "End-to-end encryption for all data transmissions",
    "SOC 2 Type II certified infrastructure",
    "ISO 27001 information security standards",
    "Regular third-party security audits and penetration testing",
    "Zero-knowledge architecture - no data retention after verification",
    "GDPR and CCPA compliant data handling and privacy",
  ];

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-4">
          Enterprise Security & Compliance
        </h2>

        <p className="text-gray-600 text-lg mb-12">
          Your customer data security and regulatory compliance are our top
          priorities.
        </p>

        <div className="space-y-8">
          <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-green-400 mb-6">
              Bank-Grade Security
            </h3>
            <ul className="space-y-3">
              {bankGradeSecurity.map((item, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-3 mt-1">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">
              Regulatory Compliance
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Meet global KYC/AML regulations including FATF recommendations,
              AMLD5, BSA/Patriot Act, and jurisdiction-specific identity
              verification requirements. All verifications include comprehensive
              audit trails and compliance reporting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
