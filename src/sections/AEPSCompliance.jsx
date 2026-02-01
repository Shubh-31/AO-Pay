"use client";

import { ShieldCheck, Scale, Lock } from "lucide-react";

const AEPSCompliance = () => {
  const sections = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
      title: "Biometric Security Framework",
      points: [
        "UIDAI-approved biometric authentication protocols",
        "Encrypted biometric data transmission",
        "Anti-spoofing and liveness detection",
        "Secure biometric template storage and processing",
      ],
    },
    {
      icon: <Scale className="w-6 h-6 text-green-600" />,
      title: "Regulatory Compliance",
      points: [
        "NPCI AEPS specifications compliance",
        "RBI guidelines adherence for banking services",
        "UIDAI regulations for Aadhaar usage",
        "Data protection and privacy compliance",
      ],
    },
    {
      icon: <Lock className="w-6 h-6 text-green-600" />,
      title: "Transaction Security",
      points: [
        "End-to-end encryption with TLS 1.3",
        "Multi-factor authentication with biometrics",
        "Real-time fraud detection and prevention",
        "Audit trails and transaction logging",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          AEPS Advanced Security & Compliance Features
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Ensure every AEPS transaction meets the highest security standards and
          regulatory compliance requirements.
        </p>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {section.title}
                </h3>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AEPSCompliance;
