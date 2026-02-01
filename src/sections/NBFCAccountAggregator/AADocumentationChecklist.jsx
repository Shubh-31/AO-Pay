"use client";

export default function AADocumentationChecklist() {
  const checklist = [
    "Certificate of Incorporation: Copy of CoI issued by Registrar of Companies proving legal entity status.",
    "Directors' KYC Documentation: Complete Know Your Customer details including Aadhaar, PAN, address proof, and photographs.",
    "Promoters' KYC Details: Comprehensive identification documentation for all promoter entities or individuals.",
    "Net Worth Certificates: CA-certified net worth statements for all directors and shareholders.",
    "Bankers' Report: Confidential banker reports confirming financial standing and banking relationships.",
    "Comprehensive Business Plan: Detailed 3-5 year strategic plan with financial projections, technology roadmap, and growth strategy.",
    "Audited Financial Statements: Last three years' audited financials demonstrating financial stability and capital adequacy.",
    "Fit and Proper Declarations: Sworn declarations from directors and promoters confirming eligibility criteria compliance.",
    "IT System Documentation: Technical architecture, security protocols, data protection measures, and API specifications.",
    "Memorandum and Articles of Association: Duly certified MOA and AOA with appropriate clauses for AA business.",
    "Board Resolutions: Approvals for AA license application, appointment of authorized signatories, and policy adoptions.",
    "Additional Documents: GST registration, PAN card, TAN, professional tax registration, and other statutory registrations.",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
        Complete Documentation Checklist for AA License Application
      </h2>

      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
        Comprehensive and accurate documentation is critical for successful NBFC
        Account Aggregator License approval. Here's what you need to prepare:
      </p>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
          {checklist.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <p className="text-gray-700 text-center mt-10 max-w-3xl mx-auto">
        AOPay ensures meticulous preparation of all mandatory documents,
        reducing the risk of application rejection due to documentation
        deficiencies.
      </p>
    </section>
  );
}
