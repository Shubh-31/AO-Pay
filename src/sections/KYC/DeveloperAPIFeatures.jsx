export default function DeveloperAPIFeatures() {
  const sections = [
    {
      title: "Comprehensive SDK Support",
      items: [
        "Python, Node.js, Java, PHP, Ruby, C# SDKs",
        "Native iOS (Swift) and Android (Kotlin) SDKs",
        "REST API with JSON responses",
        "Webhook support for async notifications",
        "Batch processing for bulk verifications",
      ],
    },
    {
      title: "Enterprise-Grade Infrastructure",
      items: [
        "99.95% uptime SLA guarantee",
        "Auto-scaling for high-volume processing",
        "Global CDN for fast document uploads",
        "End-to-end encryption (TLS 1.3)",
        "Geographic redundancy and failover",
      ],
    },
  ];

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-4">
          Developer-Friendly API Features
        </h2>

        <p className="text-gray-600 text-lg mb-12">
          Built by developers, for developers. Our API prioritizes ease of
          integration and reliability.
        </p>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-semibold text-green-400 mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start text-gray-300"
                  >
                    <span className="text-green-400 mr-3 mt-1">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
