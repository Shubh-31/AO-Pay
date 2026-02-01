"use client";

export default function TechnologyInfrastructureAA() {
  const techPoints = [
    "API Integration Framework: Standardized APIs compliant with SAHAMATI specifications for seamless FIP-FIU connectivity.",
    "Consent Management System: Digital consent capture, storage, management, and revocation capabilities with audit trails.",
    "Data Encryption: End-to-end encryption for data in transit and at rest using industry-standard protocols.",
    "Identity and Access Management: Multi-factor authentication and role-based access controls.",
    "Audit Logging: Comprehensive logging of all data access, consent operations, and system activities.",
    "Disaster Recovery: Business continuity and disaster recovery infrastructure ensuring 99.9% uptime.",
    "Security Monitoring: Real-time threat detection, intrusion prevention, and security incident response capabilities.",
    "Compliance Reporting: Automated generation of regulatory reports and compliance dashboards.",
    "Scalability: Cloud-native architecture capable of handling millions of consent requests and data flows.",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
        Technology Infrastructure Requirements for Account Aggregators
      </h2>

      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
        Successful NBFC Account Aggregators require robust technology
        infrastructure meeting stringent security and operational standards:
      </p>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        <h3 className="text-2xl font-semibold text-blue-600 mb-6 flex items-center gap-2">
          🔧 Essential Technical Components
        </h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
          {techPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      <p className="text-gray-700 text-center mt-10 max-w-3xl mx-auto">
        AOPay provides technical advisory services helping you architect
        compliant, scalable, and secure AA infrastructure from inception.
      </p>
    </section>
  );
}
