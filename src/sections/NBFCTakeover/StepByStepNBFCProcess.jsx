"use client";

import { motion } from "framer-motion";

export default function StepByStepNBFCProcess() {
  const steps = [
    {
      title: "1. Memorandum of Understanding (MOU) Execution",
      desc: "The takeover process begins with signing a Memorandum of Understanding between the acquiring company and target NBFC. This document establishes mutual intent to proceed with the acquisition and outlines preliminary terms.",
      subpoints: [
        "Key Elements: The MOU defines roles, responsibilities, timelines, and obligations of both parties. Directors from both entities formally sign the agreement. Upon MOU approval, the acquirer typically pays earnest money or token amount to the target company, demonstrating serious commitment.",
        "Duration: 1-2 weeks for negotiation and execution.",
      ],
    },
    {
      title: "2. Secure RBI Prior Approval (If Required)",
      desc: "This is the most critical regulatory step. If your transaction involves 26%+ shareholding transfer, 30%+ director changes, or change of control, obtaining RBI's prior approval is mandatory before proceeding further.",
      subpoints: [
        "Process: Submit comprehensive application to RBI with all supporting documents, business rationale, acquirer credentials, and target NBFC details. The RBI evaluates compliance, fit and proper criteria, and public interest factors.",
        "Duration: 60-90 days for RBI review and approval.",
      ],
    },
    {
      title: "3. First Public Notice Publication",
      desc: "Publish the first public notice in bilingual format (English + regional language) within 30 days of receiving RBI clearance or, if RBI approval isn't required, before entering formal agreements.",
      subpoints: [
        "Content Requirements: The notice must declare intention to transfer ownership/control, provide transferee particulars, and explain reasons for the transaction. This allows stakeholders to raise objections if any.",
        "Duration: Immediate upon RBI approval.",
      ],
    },
    {
      title: "4. Enter into Formal Acquisition Agreement",
      desc: "After the first public notice and required waiting period, both parties execute formal legal agreements including Share Purchase Agreement (SPA), transfer documents, and ancillary contracts.",
      subpoints: [
        "Documentation: SPA details purchase price, payment terms, representations, warranties, indemnities, closing conditions, and post-closing obligations. Legal counsel draft comprehensive agreements protecting both parties’ interests.",
        "Duration: 2-3 weeks for agreement negotiation and execution.",
      ],
    },
    {
      title: "5. Second Public Notice Publication",
      desc: "Publish the second public notice in bilingual format at least 30 days before completing the share transfer or change of control. This notice confirms the impending transaction and provides final disclosure to stakeholders.",
      subpoints: [
        "Purpose: Final transparency measure ensuring all interested parties have notice of the imminent ownership change, allowing last opportunities for concerns or objections.",
        "Duration: 30-day waiting period post-publication.",
      ],
    },
    {
      title: "6. Asset and Liability Liquidation Process",
      desc: "Conduct comprehensive liquidation and settlement of the target company’s assets and liabilities. This ensures clean transfer with no hidden encumbrances.",
      subpoints: [
        "Activities: Settle outstanding liabilities, collect receivables, dispose of non-core assets if required, and ensure the bank account reflects fair balance representing true net worth as of the takeover date. All calculations use net worth valuation methodology.",
        "Duration: 2-4 weeks depending on complexity.",
      ],
    },
    {
      title: "7. Obtain NOC from Creditors",
      desc: "Before completing the business transfer, the target company must secure No Objection Certificates (NOCs) from all creditors, lenders, and financial institutions having outstanding exposures.",
      subpoints: [
        "Importance: Creditor NOCs confirm their consent to ownership change and often include terms for continuing relationships with the new ownership. This prevents future disputes and ensures smooth transition.",
        "Duration: 2-3 weeks for collecting all NOCs.",
      ],
    },
    {
      title: "8. Complete Asset Transfer",
      desc: "Once RBI provides final approval without objections and all conditions precedent are satisfied, execute the formal transfer of assets, liabilities, and shareholding from target to acquirer.",
      subpoints: [
        "Formalities: File share transfer forms, update register of members, notify ROC, update RBI records, transfer contracts, licenses, and operational controls. Ensure all regulatory filings are completed.",
        "Duration: 1-2 weeks for completing transfers.",
      ],
    },
    {
      title: "9. Entity Valuation per RBI Guidelines",
      desc: "Conduct formal valuation of the target NBFC following RBI-prescribed methodologies. The Discounted Cash Flow (DCF) method is typically preferred, calculating the net present value of future cash flows.",
      subpoints: [
        "Requirements: Engage certified valuers registered with IBBI or other recognized bodies. The valuation report becomes crucial for determining fair acquisition price and must be submitted to RBI as part of approval documentation.",
        "Duration: 2-3 weeks for comprehensive valuation.",
      ],
    },
    {
      title: "10. Post-Takeover Integration and Compliance",
      desc: "After completing the takeover, focus on seamless integration of operations, systems, and teams. Update all regulatory filings, notify stakeholders, and ensure uninterrupted business continuity.",
      subpoints: [
        "Activities: Integrate technology systems, harmonize policies, communicate with customers and employees, update branding if applicable, and ensure ongoing RBI compliance reporting.",
        "Duration: Ongoing for 3-6 months post-acquisition.",
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="relative bg-white rounded-2xl shadow-md p-6 border border-gray-100 mb-10 overflow-hidden">
        {/* Left gradient border */}
        <div className="absolute top-0 left-0 w-1 h-full bg-black rounded-l-2xl" />

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Step-by-Step NBFC Takeover Process – Complete Guide
        </h2>
        <p className="text-gray-700 mb-6">
          NBFC takeover journey involves multiple sequential stages requiring meticulous execution. Here's the comprehensive step-by-step process:
        </p>

        <div className="space-y-6">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all p-5"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#fb923c] to-[#60a5fa] rounded-l-2xl" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-2">{item.desc}</p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm">
                {item.subpoints.map((sp, i) => (
                  <li key={i}>{sp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
