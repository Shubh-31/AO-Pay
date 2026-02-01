

const Secondaryfeatures = {
  heading2: "Comprehensive NIDHI Company Management Solutions",
  heading2Para:
    "AOPAY NIDHI Company Software provides complete management capabilities for mutual benefit societies and cooperative organizations. From member onboarding to loan management and regulatory reporting — manage every aspect efficiently within a unified platform.",
  blocks: [
    {
      title: "Member Management System",
      description:
        "Manage the complete member lifecycle with digital onboarding, KYC verification, and personalized member access. Keep detailed member profiles and streamline communication.",
      items: [
        "Digital member registration and onboarding",
        "KYC and document verification",
        "Member contribution tracking",
        "Automated member communications",
      ],
    },
    {
      title: "Fund Collection and Management",
      description:
        "Simplify fund collection with automated reminders, multi-channel payments, and transparent tracking. Manage share capital, deposits, and contributions efficiently.",
      items: [
        "Automated collection reminders",
        "Multiple payment gateway integration",
        "Real-time fund tracking",
        "Share capital management",
      ],
    },
    {
      title: "Lending and Loan Management",
      description:
        "Automate your lending workflows — from loan application to approval, disbursement, and repayment. Ensure transparency and accuracy in interest calculations and portfolio tracking.",
      items: [
        "Loan application processing",
        "Automated interest calculations",
        "Repayment schedule management",
        "Loan portfolio analytics",
      ],
    },
  ],
};





      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          {Secondaryfeatures.heading2}
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          {Secondaryfeatures.heading2Para}
        </p>

        {/* ✅ type="single" + collapsible = toggleable accordion */}
        <Accordion type="single" collapsible className="w-full space-y-6">
          {Secondaryfeatures.blocks.map((block, i) => (
            <AccordionItem
              key={i}
              value={`block-${i}`}
              className="border border-gray-200 rounded-xl shadow-sm overflow-hidden transition hover:shadow-md"
            >
              <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-gray-800 hover:bg-gray-50">
                {block.title}
              </AccordionTrigger>

              <AccordionContent className="px-6 py-4 bg-gray-50 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {block.description}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {block.items.map((item, j) => (
                    <li key={j} className="font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>;