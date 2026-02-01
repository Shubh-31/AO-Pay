"use client";

export const CIBILApiFeatures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          AOPAY CIBIL API Features & Capabilities
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6">
            <img
              src="/assets/CIBIL/AOPAY CIBIL API Features & Capabilities/Core API Features.png"
              alt="Core API Features"
              className="w-6 h-auto mb-2"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Core API Features
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                ✅ Credit Score Retrieval: Instant CIBIL score access (300-900)
              </li>
              <li className="flex items-center gap-2">
                ✅ Detailed Credit Reports: Complete borrower credit history
              </li>
              <li className="flex items-center gap-2">
                ✅ Min Settlement Time
              </li>
              <li className="flex items-center gap-2">
                ✅ Account Information: Loan accounts, credit cards, guarantor
                details
              </li>
              <li className="flex items-center gap-2">
                ✅ Payment History: 24-month payment behavior analysis
              </li>
              <li className="flex items-center gap-2">
                ✅ Credit Enquiries: Recent credit application tracking
              </li>
              <li className="flex items-center gap-2">
                ✅ Risk Analytics: Default probability and credit trends
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col justify-between">
            <div>
              <img
                src="/assets/CIBIL/AOPAY CIBIL API Features & Capabilities/Business Benefits.png"
                alt="Cor"
                className="w-6 h-auto mb-2"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Business Benefits
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li>✅ Faster Loan Processing: Reduce approval time by 80%</li>
                <li>✅ Risk Mitigation: Advanced credit risk assessment</li>
                <li>
                  ✅ Regulatory Compliance: RBI and NBFC guidelines adherence
                </li>
                <li>
                  ✅ Cost Optimization: Automated credit verification process
                </li>
                <li>✅ Portfolio Management: Credit monitoring and alerts</li>
                <li>✅ Customer Experience: Instant credit decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
