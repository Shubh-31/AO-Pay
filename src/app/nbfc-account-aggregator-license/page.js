import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import AAApplicationProcess from "@/sections/NBFCAccountAggregator/AAApplicationProcess";
import AABenefitsSection from "@/sections/NBFCAccountAggregator/AABenefitsSection";
import AAChallengesSection from "@/sections/NBFCAccountAggregator/AAChallengesSection";
import AADocumentationChecklist from "@/sections/NBFCAccountAggregator/AADocumentationChecklist";
import AAGetStartedSection from "@/sections/NBFCAccountAggregator/AAGetStartedSection";
import AccountAggregatorProgress from "@/sections/NBFCAccountAggregator/AccountAggregatorProgress";
import FinancialInformationCovered from "@/sections/NBFCAccountAggregator/FinancialInformationCovered";
import NBFCAccountAggregatorSection from "@/sections/NBFCAccountAggregator/NBFCAccountAggregatorSection";
import TechnologyInfrastructureAA from "@/sections/NBFCAccountAggregator/TechnologyInfrastructureAA";
import Script from "next/script";

export const metadata = {
  title: "NBFC Account Aggregator License | RBI Compliance Experts – AOPay",
  description:
    "AOPay assists fintechs and NBFCs in obtaining Account Aggregator Licenses. Our consultants guide you through RBI registration, compliance, and technical readiness.",

  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://aopay.in/nbfc-account-aggregator-license",
  },
  openGraph: {
    title: "NBFC Account Aggregator License | RBI Compliance Experts – AOPay",
    description:
      "Obtain your NBFC Account Aggregator License with AO Pay’s professional guidance on RBI compliance and documentation",
    url: "https://aopay.in/nbfc-account-aggregator-license",
    siteName: "AOPay",
    locale: "en_IN",
    images: [
      {
        url: "https://aopay.in/assets/images/nbfc-account-aggregator-license.jpg",
        width: 800,
        height: 600,
        alt: "AOPAY Open Graph Image",
      },
    ],
    type: "website",
  },
};

const NBFCAggregatorLicense = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/nbfc-account-aggregator-license",
    telephone: "011-42151216",
    description:
      "AOPAY specializes in NBFC Account Aggregator license consulting in India, offering expert guidance for businesses seeking to register as Account Aggregators (AA) under RBI regulations. We assist with eligibility, compliance, and documentation for a smooth licensing process.",
    serviceType: [
      "NBFC Account Aggregator License Consulting",
      "RBI Account Aggregator registration services",
      "Account Aggregator license eligibility and compliance",
      "Account Aggregator company setup and advisory",
      "Assistance with RBI regulatory framework for Account Aggregators",
      "How to apply for an Account Aggregator license in India",
      "Compliance guidance for Account Aggregator businesses",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "73, Block B-1, Sewak Park Extension",
      addressLocality: "Uttam Nagar",
      addressRegion: "Delhi",
      postalCode: "110059",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Bengaluru" },
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Chennai" },
      { "@type": "City", name: "Kolkata" },
    ],
    logo: "https://aopay.in/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/aopay",
      "https://twitter.com/aopayindia",
    ],
  };


  const contentWithHeadingsAndPoints = [
    {
      heading2: "Eligibility Requirements for NBFC Account Aggregator License",
      heading2Para:
        "To obtain an NBFC AA License from RBI, entities must comply with specific eligibility criteria outlined in the Non-Banking Financial Company-Account Aggregator (Reserve Bank) Directions, 2016. Here's the complete checklist:",
      points: [
        {
          heading3: "Legal Entity Structure",
          heading3Para:
            "Applicants must be incorporated as a company under the Companies Act, 2013. Partnerships, sole proprietorships, and LLPs are not eligible for AA registration.",
          imgSrc:
            "/assets/NBFCAggregator/Eligible/Legal Entity Structure.png",
        },
        {
          heading3: "Minimum Capital Requirement",
          heading3Para:
            "Every company seeking AA registration must maintain a minimum Net Owned Fund (NOF) of ₹2 crores, or higher amounts as the RBI may specify from time to time.",
          imgSrc:
            "/assets/NBFCAggregator/Eligible/Minimum Capital Requirement.png",
        },
        {
          heading3: "Company Name Compliance",
          heading3Para:
            'Entities must include "AA" (Account Aggregator) in their business/company name to clearly identify their registration category and operational focus.',
          imgSrc: "/assets/NBFCAggregator/Eligible/Company Name Compliance.png",
        },

        {
          heading3: "Strategic Business Plan",
          heading3Para:
            "Comprehensive business plan covering 3-5 years with detailed IT system architecture, HR strategy, business acquisition plans, and manpower requirements.",
          imgSrc: "/assets/NBFCAggregator/Eligible/Strategic Business Plan.png",
        },
        {
          heading3: "Mandatory Declarations",
          heading3Para:
            "Obtain necessary declarations and undertakings including fit and proper declarations as specified in RBI Master Direction for all directors and promoters.",
          imgSrc: "/assets/NBFCAggregator/Eligible/Mandatory Declarations.png",
        },
        {
          heading3: "Covenant Deed Execution",
          heading3Para:
            "Signed Covenant Deed by directors/managing directors/CEO in the format prescribed in Annexure 6 of RBI Master Direction, binding parties to compliance.",
          imgSrc: "/assets/NBFCAggregator/Eligible/Covenant Deed execution.png",
        },
        {
          heading3: "Fit and Proper Criteria",
          heading3Para:
            "Promoters must satisfy fit and proper criteria covering integrity, financial soundness, competence, and reputation as per RBI guidelines.",
          imgSrc: "/assets/NBFCAggregator/Eligible/Fit and Proper Criteria.png",
        },
        {
          heading3: "Technology Infrastructure",
          heading3Para:
            "Secure IT systems capable of secure data handling, encryption, API integrations, and compliance with technical standards set by RBI and SAHAMATI.",
          imgSrc:
            "/assets/NBFCAggregator/Eligible/Technology Infrastructure.png",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2:
        "Mandatory Compliance Requirements for NBFC Account Aggregators",
      heading2Para:
        "Operating as an NBFC Account Aggregator requires ongoing adherence to comprehensive regulatory obligations. Here are the critical compliance areas:",
      points: [
        {
          heading3: "Disclosure Requirements",
          heading3Para:
            "NBFC AAs must comply with disclosure requirements specified in Section I of Annexure-VII of Master Direction-Reserve Bank of India (Non-Banking Financial Company-Scale Based Regulations) Directions, 2023, ensuring transparency in operations and financial reporting.",
        },
        {
          heading3: "Transfer of Control",
          heading3Para:
            "Prior written approval from RBI is mandatory for any takeover, acquisition of control, or change in shareholding of an Account Aggregator exceeding prescribed thresholds, protecting ecosystem stability.",
        },
        {
          heading3: "Dividend Declaration",
          heading3Para:
            "Account Aggregators must meet eligibility criteria specified in paragraph 15A.2 of NBFC AA Directions, 2016 for dividend declaration, with maximum dividend payout ratio capped at 50% of profits.",
        },
        {
          heading3: "Returns & Audits",
          heading3Para:
            "Regular submission of prescribed returns to RBI, along with mandatory financial and data system audits through external auditors accredited by Certified Information System Auditor (CISA) framework.",
        },
        {
          heading3: "Committee Structure",
          heading3Para:
            "Board must constitute Nomination, Audit, and Risk Management Committees for scrutinizing declarations, overseeing financial controls, and managing operational risks effectively.",
        },
        {
          heading3: "Board Policies",
          heading3Para:
            "Maintain board-approved policies for customer grievance resolution, service pricing structures, data security protocols, and operational procedures ensuring consistent governance.",
        },
        {
          heading3: "Grievance Mechanism",
          heading3Para:
            "Establish proper grievance redressal mechanism for resolving customer complaints efficiently, with escalation procedures and timeline commitments protecting consumer interests.",
        },
        {
          heading3: "Data Security",
          heading3Para:
            "Implement enterprise-grade IT security infrastructure protecting data from unauthorized access, alteration, destruction, or disclosure through encryption, access controls, and monitoring systems.",
        },
        {
          heading3: "Annual Clarifications",
          heading3Para:
            "Furnish annual clarifications regarding changes in management, shareholding patterns, business operations, and compliance status to RBI, maintaining regulatory transparency.",
        },
      ],
    },
  ];

    const material = [
      {
        heading2:
          "Why Choose AOPay for NBFC Account Aggregator License Services?",
        heading2Para:
          "AOPay stands as India's most trusted partner for NBFC Account Aggregator License acquisition, combining regulatory expertise with practical implementation support:",
        points: [
          {
            heading3: "Strong Regulatory Liaison",
            heading3Para:
              "Our healthy network with RBI and regulatory bodies creates a stress-free pathway for obtaining NBFC AA License, reducing approval timelines and bureaucratic hurdles.",
            imgSrc: "/assets/NBFCAggregator/Why/Strong Regulatory Liaison.png",
          },
          {
            heading3: "99% Success Rate",
            heading3Para:
              "Thanks to our proficiency in regulations and laws, we've achieved an outstanding 99% success rate in RBI registration services, demonstrating proven expertise.",
            imgSrc: "/assets/NBFCAggregator/Why/SuccessRate.png",
          },
          {
            heading3: "Complete Online Services",
            heading3Para:
              "Smooth and secured online NBFC AA License application services in full consonance with RBI Master Directions, eliminating physical paperwork hassles.",
            imgSrc: "/assets/NBFCAggregator/Why/Complete Online Services.png",
          },
          {
            heading3: "Compliance Assurance",
            heading3Para:
              "We ensure comprehensive compliance with RBI regulations covering data privacy, security, transparency, and consumer protection throughout your operations.",
            imgSrc: "/assets/NBFCAggregator/Why/Compliance Assurance.png",
          },
          {
            heading3: "Documentation Excellence",
            heading3Para:
              "Expert preparation of all mandatory documents required for AA License acquisition, ensuring accuracy and completeness that accelerates approval.",
            imgSrc: "/assets/NBFCAggregator/Why/Documentation Excellence.png",
          },
          {
            heading3: "Record Keeping Services",
            heading3Para:
              "Expertise in comprehensive record-keeping covering financial services, technology systems, data management, and associated regulatory requirements.",
            imgSrc: "/assets/NBFCAggregator/Why/Record Keeping Services.png",
          },
          {
            heading3: "Instant Support Services",
            heading3Para:
              "Round-the-clock support empowering you to share and control financial data securely while maintaining operational excellence.",
            imgSrc: "/assets/NBFCAggregator/Why/Instant Support Services.png",
          },
          {
            heading3: "Free Legal Consultation",
            heading3Para:
              "Access our team of legal professionals and experts for complimentary legal services related to Account Aggregator License acquisition.",
            imgSrc: "/assets/NBFCAggregator/Why/Free Legal Consultation.png",
          },
          {
            heading3: "Fast & Economical Delivery",
            heading3Para:
              "We guarantee economical pricing and accelerated delivery of AA License services, reducing hurdles and ensuring cost-effectiveness.",
            imgSrc: "/assets/NBFCAggregator/Why/Fast & Economical Delivery.png",
          },
          {
            heading3: "End-to-End Encryption",
            heading3Para:
              "Secure, encrypted data sharing platform for smooth and safe aggregation of financial information from FIPs to FIUs.",
            imgSrc: "/assets/NBFCAggregator/Why/End-to-End Encryption.png",
          },
          {
            heading3: "Industry Professionals",
            heading3Para:
              "Team of experts with deep knowledge and understanding of NBFC operations, regulatory frameworks, and technical requirements.",
            imgSrc: "/assets/NBFCAggregator/Why/Industry Professionals.png",
          },
          {
            heading3: "70% Market Leadership",
            heading3Para:
              "As the industry leader with 70% market share, we bring unmatched experience in NBFC Account Aggregator licensing and operations.",
            imgSrc: "/assets/NBFCAggregator/Why/Market.png",
          },
        ],
      },
    ];


  return (
    <>
      <Script
        id="flight-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <NBFCAccountAggregatorSection />
      <AccountAggregatorProgress />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <FinancialInformationCovered />
      <TechnologyInfrastructureAA />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <AADocumentationChecklist/>
      <AAApplicationProcess/>
      <AAChallengesSection/>
      <AABenefitsSection/>
       <H2DescH3Desc contentWithDescription={material} />
       <AAGetStartedSection/>
    </>
  );
};

export default NBFCAggregatorLicense;
