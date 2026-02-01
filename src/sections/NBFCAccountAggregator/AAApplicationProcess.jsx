"use client";

export default function AAApplicationProcess() {
  const steps = [
    {
      step: "1. Online Application Filing with RBI",
      description:
        "According to RBI Master Direction, applicants must submit their application in the prescribed format (Annexure A) through RBI's online portal. The application captures company identification, promoter details, capital structure, and business objectives. Upon submission, you receive an application reference number for tracking.",
      button: "Duration: 1-2 weeks",
    },
    {
      step: "2. Comprehensive Document Submission",
      description:
        "Submit all mandatory documents including business plan, statement of capital funds, company identification information, directors' KYC, audited financials, and IT system documentation. Documents must be properly certified, attested, and organized as per RBI requirements to demonstrate compliance readiness.",
      button: "Duration: 2-3 weeks",
    },
    {
      step: "3. RBI Review and Due Diligence",
      description:
        "Reserve Bank conducts thorough due diligence reviewing registration conditions specified in Non-Banking Financial Company-Account Aggregator (Reserve Bank) Directions, 2016. This includes verification of fit and proper criteria, capital adequacy, business viability, and technology infrastructure assessment.",
      button: "Duration: 8-12 weeks",
    },
    {
      step: "4. Grant of In-Principle Approval",
      description:
        "Once RBI is satisfied with the review of conditions and compliance demonstration, in-principle approval is granted for AA registration. This approval carries a validity period of 12 months from the grant date, within which you must complete all setup requirements.",
      button: "Validity: 12 months",
    },
    {
      step: "5. Final Certificate of Registration",
      description:
        "After fulfilling all regulatory and technical requirements within the 12-month period—including technology system implementation, security audits, SAHAMATI membership, and operational readiness—RBI grants the final Certificate of Registration authorizing commencement of AA operations.",
      button: "License Issued",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
        Step-by-Step Process to Apply for NBFC Account Aggregator License
      </h2>

      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
        Obtaining an NBFC AA License involves multiple stages with strict
        regulatory oversight. Here's your comprehensive guide to the application
        process:
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {steps.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-white border border-gray-200 rounded-2xl shadow-sm p-6 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(50%-0.75rem)] hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
              {item.step}
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              {item.description}
            </p>
            <button className="self-start text-sm font-medium px-4 py-2 border border-gray-300 rounded-full text-gray-900 hover:bg-blue-700 hover:text-white transition-colors">
              {item.button}
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-700 mb-4">
          <strong>Total Timeline:</strong> The complete process typically spans
          <span className="font-semibold"> 4–6 months </span>
          from initial application to final license receipt, depending on
          documentation quality and regulatory review timelines.
        </p>
        <button className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
          Expedite Your Application
        </button>
      </div>
    </section>
  );
}
