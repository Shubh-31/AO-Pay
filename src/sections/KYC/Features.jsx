export default function Features() {
  const features = [
    {
      title: "Highest Accuracy",
      description:
        "98.5% accuracy rate with AI-powered document authentication and fraud detection algorithms.",
      imgSrc:
        "/assets/KYC/Why Go With AOPAY Digital Identity Verification Solution/Highest Accuracy.png",
    },
    {
      title: "Global Coverage",
      description:
        "Support for 10,000+ document types from 220+ countries and territories worldwide.",
      imgSrc:
        "/assets/KYC/Why Go With AOPAY Digital Identity Verification Solution/Global Coverage.png",
    },
    {
      title: "Lightning Fast",
      description:
        "Complete identity verification in under 30 seconds with real-time API responses.",
      imgSrc:
        "/assets/KYC/Why Go With AOPAY Digital Identity Verification Solution/Lightning Fast.png",
    },
    {
      title: "Regulatory Compliant",
      description:
        "Meet KYC/AML regulations, GDPR, and jurisdiction-specific identity verification requirements.",
      imgSrc:
        "/assets/KYC/Why Go With AOPAY Digital Identity Verification Solution/Regulatory Compliant.png",
    },
    {
      title: "Advanced Security",
      description:
        "Bank-grade encryption, SOC 2 Type II certified, ISO 27001 compliant infrastructure.",
      imgSrc:
        "/assets/KYC/Why Go With AOPAY Digital Identity Verification Solution/Advanced Security.png",
    },
    {
      title: "Fraud Prevention",
      description:
        "Multi-layer fraud detection including liveness checks, deepfake detection, and document tampering analysis.",
      imgSrc:
        "/assets/KYC/Why Go With AOPAY Digital Identity Verification Solution/Fraud Prevention.png",
    },
    {
      title: "Developer-First",
      description:
        "RESTful API, comprehensive SDKs, webhooks, detailed documentation, and sandbox testing.",
      imgSrc:
        "/assets/KYC/Why Go With AOPAY Digital Identity Verification Solution/Developer-First.png",
    },
    {
      title: "Mobile Optimized",
      description:
        "Native iOS and Android SDKs for seamless in-app identity verification experiences.",
      imgSrc:
        "/assets/KYC/Why Go With AOPAY Digital Identity Verification Solution/Mobile Optimized.png",
    },
    {
      title: "Cost-Effective",
      description:
        "Reduce manual review costs by up to 95% while improving verification speed and accuracy.",
      imgSrc:
        "/assets/KYC/Why Go With AOPAY Digital Identity Verification Solution/Cost-Effective.png",
    },
    {
      title: "24/7 Support",
      description:
        "Expert technical support and compliance guidance from our dedicated KYC specialists.",
      imgSrc:
        "/assets/KYC/Why Go With AOPAY Digital Identity Verification Solution/Support.png",
    },
  ];

  const certifications = [
    "SOC 2 Type II",
    "ISO 27001",
    "GDPR Compliant",
    "AML Certified",
  ];

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Heading + Subheading */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Why Go With AOPAY Digital Identity Verification Solution?
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Built for banks, fintechs, and digital platforms that demand
            accuracy, speed, and regulatory compliance.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-gray-200/70 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              {/* Icon + Title in one line */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={feature.imgSrc}
                  alt={feature.title}
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications Pills */}
        <div className="flex flex-wrap gap-3">
          {certifications.map((cert, index) => (
            <button
              key={index}
              className="px-5 py-2.5 rounded-full border border-gray-800 bg-gray-900 text-gray-100 text-sm md:text-base font-medium
                         hover:bg-green-500 hover:border-green-500 hover:text-black transition-colors"
            >
              {cert}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
