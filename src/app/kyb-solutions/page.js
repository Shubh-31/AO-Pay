import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import { PaymentHead, FAQSection, GetStarted } from "@/sections/mySection";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { KYBComplianceAPI } from "@/sections/KYB/KYBComplianceAPI";
import { CorporateDueDiligence } from "@/sections/KYB/CorporateDueDiligence";
import { DeveloperFriendlyAPI } from "@/sections/KYB/DeveloperFriendlyAPI";
import SecurityCompliance from "@/sections/KYB/SecurityCompliance";
import KYBFlexiblePricing from "@/sections/KYB/KYBFlexiblePricing";
import KYBCTASection from "@/sections/KYB/KYBCTASection";
import { HeadingSubheadingSection } from "@/sections/HeadingSubheadingSection";



export const metadata = {
  title: "Business Verification Management Software & Solutions | AOPAY",
  description:
    "Verify business entities instantly with AoPay's KYB Solution. Conduct corporate due diligence, verify directors, and stay compliant with AML and KYC regulations.",
  keywords:
    "KYB verification, corporate onboarding, business verification, AML compliance, KYC for companies, director KYC, GST validation, CIN verification, corporate due diligence, financial compliance, business verification API",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/kyb-solutions",
  },
  openGraph: {
    title: "AoPay KYB Solution - Verify Businesses Instantly",
    description:
      "Automate Know Your Business (KYB) verification for corporate clients. Secure onboarding for banks, NBFCs, and fintechs.",
    url: "https://aopay.in/kyb-solutions",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/kyb-og.jpg",
        width: 1200,
        height: 630,
        alt: "AoPay KYB Solution Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AoPay KYB Solution - Verify Businesses Instantly",
    description:
      "Corporate due diligence and instant business verification with AoPay’s KYB API.",
    images: ["https://aopay.in/images/kyb-og.jpg"],
  },
};


const KYB = () => {

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/kyb-solutions",
    telephone: "011-42151216",
    description:
      "AOPAY offers affordable and automated Know Your Business (KYB) solutions in India. We specialize in business verification, compliance management, and document validation for financial institutions and fintechs, backed by 24/7 customer support.",
    serviceType: [
      "Automated KYB solutions for financial institutions",
      "KYB compliance management services for businesses",
      "Digital KYB verification and document validation",
      "Risk-based KYB solutions for financial organizations",
      "Corporate identity verification and ownership checks",
      "24/7 support for business verification needs",
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
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Chennai" },
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Gurgaon" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Bengaluru" },
      { "@type": "City", name: "Kolkata" },
      { "@type": "City", name: "Chandigarh" },
    ],
    logo: "https://aopay.in/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/aopay",
      "https://twitter.com/aopayindia",
    ],
  };




  const headerContent = {
    title:
      "Complete Business Verification Solutions for Banks, Fintechs & Lenders",
    subTitle:
      "Verify business credentials with CIN, GSTIN, and MCA data checks for secure B2B onboarding. Validate company authenticity, director details, and compliance status with best business verification APIs.",
    imgSrc: "/assets/KYB/KYB-API-final.png",
    alt: "Secure money transfer API enabling instant fund transfers between bank accounts.",
    video: false,
    btn1: "Get Started",
    btn1Link: "/contact-us",
    btn2: "API Documentation",
    btn2Link: "/contact-us",
  };

  const content = [
    {
      heading2: "Perfect for Compliance-Heavy Industries",
      heading2Para:
        "Our business identity verification solution serves organizations across regulated sectors.",
      points: [
        {
          heading3: "Financial Institutions",
          heading3Para:
            "Banks and credit unions use our KYB API to onboard corporate clients, verify business accounts, and maintain ongoing compliance with banking regulations.",
          imgSrc:
            "/assets/KYB/Perfect for Compliance-Heavy Industries/Financial Institutions.png",
        },

        {
          heading3: "Fintech Companies",
          heading3Para:
            "Digital payment platforms, lending fintechs, and neobanks automate business verification for merchant onboarding and account opening processes.",
          imgSrc:
            "/assets/KYB/Perfect for Compliance-Heavy Industries/Fintech Companies.png",
        },
        {
          heading3: "Neo-Banks",
          heading3Para:
            "Digital-first banks streamline corporate account opening with automated KYB checks, UBO verification, and real-time compliance screening.",
          imgSrc:
            "/assets/KYB/Perfect for Compliance-Heavy Industries/Neo-Banks.png",
        },
        {
          heading3: "Payment Service Providers",
          heading3Para:
            "PSPs and payment aggregators verify merchant businesses, assess risk profiles, and maintain compliance with payment industry regulations.",
          imgSrc:
            "/assets/KYB/Perfect for Compliance-Heavy Industries/Payment Service Providers.png",
        },
        {
          heading3: "B2B SaaS Platforms",
          heading3Para:
            "Enterprise software platforms embed KYB verification to offer compliant business verification as a feature for their customers.",
          imgSrc:
            "/assets/KYB/Perfect for Compliance-Heavy Industries/B2B SaaS Platforms.png",
        },
        {
          heading3: "B2B Marketplaces",
          heading3Para:
            "Business-to-business marketplaces verify seller legitimacy, reduce fraud, and build trust with automated business verification.",
          imgSrc:
            "/assets/KYB/Perfect for Compliance-Heavy Industries/B2B Marketplaces.png",
        },
        {
          heading3: "Insurance Companies",
          heading3Para:
            "Insurers verify corporate policy holders, assess business risk, and comply with anti-money laundering requirements efficiently.",
          imgSrc:
            "/assets/KYB/Perfect for Compliance-Heavy Industries/Insurance Companies.png",
        },
        {
          heading3: "Accounting & Tax Firms",
          heading3Para:
            "Professional services firms verify client businesses, conduct due diligence, and maintain regulatory compliance documentation.",
          imgSrc:
            "/assets/KYB/Perfect for Compliance-Heavy Industries/Accounting & Tax Firms.png",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2: "Advanced API Capabilities",

      points: [
        {
          heading3: "Batch Processing",
          heading3Para:
            "Verify hundreds of businesses simultaneously with our bulk verification endpoint. Perfect for data migration and compliance audits.",
          imgSrc: "/assets/KYB/Advanced API Capabilities/Batch Processing.png",
        },
        {
          heading3: "Custom Workflows",
          heading3Para:
            "Configure verification rules, risk thresholds, and approval workflows to match your specific compliance requirements.",
          imgSrc: "/assets/KYB/Advanced API Capabilities/Custom Workflows.png",
        },
        {
          heading3: "White-Label Solution",
          heading3Para:
            "Embed our KYB verification into your platform with custom branding, seamless UI integration, and your own domain.",
          imgSrc:
            "/assets/KYB/Advanced API Capabilities/White-Label Solution.png",
        },
      ],
    },
  ];

  const material = [
    {
      heading2: "Comprehensive Data Sources",
      heading2Para:
        "We aggregate data from trusted sources to provide the most complete business verification available.",
      points: [
        {
          heading3: "Official Business Registries",
          heading3Para:
            "Direct connections to companies houses, corporate registries, and commercial registers in 180+ countries for verified company data.",
          imgSrc:
            "/assets/KYB/Comprehensive Data Sources/Official Business Registries.png",
        },
        {
          heading3: "Financial Data Providers",
          heading3Para:
            "Credit reports, financial statements, and business credit scores from leading financial information providers globally.",
          imgSrc:
            "/assets/KYB/Comprehensive Data Sources/Financial Data Providers.png",
        },
        {
          heading3: "Driver's Licenses",
          heading3Para:
            "Verify driver's licenses and learner permits from all US states, Canadian provinces, and international jurisdictions.",
          imgSrc:
            "/assets/KYB/Comprehensive Data Sources/Driver's Licenses.png",
        },
        {
          heading3: "Sanctions & Watchlists",
          heading3Para:
            "Real-time screening against OFAC, UN, EU, HMT, and 200+ global sanctions lists plus PEP and adverse media databases.",
          imgSrc:
            "/assets/KYB/Comprehensive Data Sources/Sanctions & Watchlists.png",
        },
        {
          heading3: "Corporate Filings",
          heading3Para:
            "Access to annual reports, beneficial ownership registers, director information, and corporate structure documents.",
          imgSrc:
            "/assets/KYB/Comprehensive Data Sources/Corporate Filings.png",
        },
        {
          heading3: "Industry Registries",
          heading3Para:
            "Verify licenses, permits, and registrations for regulated industries including financial services, healthcare, and professional services.",
          imgSrc:
            "/assets/KYB/Comprehensive Data Sources/Industry Registries.png",
        },
        {
          heading3: "News & Media",
          heading3Para:
            "Adverse media screening across 50,000+ global news sources in multiple languages for reputation and compliance risks.",
          imgSrc: "/assets/KYB/Comprehensive Data Sources/News & Media.png",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "How does business verification work?",
        answer:
          "Our KYB API automatically verifies businesses by checking company registration details against official registries, validating business documents, identifying Ultimate Beneficial Owners (UBOs) through ownership structures, screening against sanctions lists and PEP databases, and conducting risk assessments. The entire process takes less than 15 seconds and returns a comprehensive verification report.",
      },
      {
        question: "What is UBO verification?",
        answer:
          "UBO (Ultimate Beneficial Owner) verification identifies individuals who ultimately own or control a business entity. Our KYB API traces ownership structures through multiple layers - including holding companies, trusts, and nominee arrangements - to identify beneficial owners holding 25% or more ownership or exercising significant control. This meets AML/CFT and FATF regulatory requirements for beneficial ownership transparency.",
      },
      {
        question: "How long does integration take?",
        answer:
          "Most developers complete basic KYB API integration within 2-4 hours using our comprehensive SDKs and documentation. Our sandbox environment allows you to test all features before going live. For more complex implementations with custom workflows and UI integrations, expect 1-2 weeks. Our technical team provides dedicated integration support throughout the process.",
      },
      {
        question: "Is the API compliant with regulations?",
        answer:
          "Yes, our KYB API is designed to meet AML/CFT regulations, FATF recommendations, AMLD5 (5th Anti-Money Laundering Directive), and jurisdiction-specific KYB requirements. We provide audit trails, compliance reports, and documentation suitable for regulatory examinations. Our system is SOC 2 Type II certified, ISO 27001 compliant, and GDPR compliant for data protection.",
      },
      {
        question: "What data sources do you use?",
        answer:
          "We aggregate data from official government business registries, corporate filings, credit bureaus, financial data providers, sanctions watchlists (OFAC, UN, EU, HMT), PEP databases, adverse media sources, industry-specific licensing authorities, and proprietary data networks. All data sources are verified and updated regularly to ensure accuracy and compliance.",
      },
      {
        question: "What are the pricing models?",
        answer:
          "We offer flexible pricing based on your verification volume and features needed. Options include pay-per-verification for low volumes, monthly subscription plans with included verifications, and custom enterprise pricing for high-volume users. Volume discounts are available. Contact our sales team for a customized quote based on your specific requirements.",
      },
    ],
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Core Features of Our Business Verification API",
      heading2Para:
        "Everything you need for complete corporate due diligence and KYB compliance in one powerful API.",
      points: [
        {
          heading3: "Company Verification",
          heading3Para:
            "Instantly verify business registration status, company name, registration number, incorporation date, business address, and operational status across global registries.",
          imgSrc:
            "/assets/KYB/Core Features of Our Business Verification APi/Company Verification.png",
        },
        {
          heading3: "UBO Identification",
          heading3Para:
            "Automatically identify Ultimate Beneficial Owners (UBOs) through complex ownership structures. Trace ownership chains to individuals holding 25% or more beneficial ownership.",
          imgSrc:
            "/assets/KYB/Core Features of Our Business Verification APi/UBO Identification.png",
        },
        {
          heading3: "Document Verification",
          heading3Para:
            "Validate business documents including certificates of incorporation, tax IDs, business licenses, and corporate resolutions with AI-powered document analysis.",
          imgSrc:
            "/assets/KYB/Core Features of Our Business Verification APi/Document Verification.png",
        },

        {
          heading3: "Regulatory Compliance",
          heading3Para:
            "Meet AML/CFT regulations, FATF recommendations, and industry-specific compliance requirements with automated KYB workflows and audit trails.",
          imgSrc:
            "/assets/KYB/Core Features of Our Business Verification APi/Regulatory Compliance.png",
        },
        {
          heading3: "Risk Assessment",
          heading3Para:
            "Automated risk scoring based on business jurisdiction, industry sector, ownership structure, compliance history, and financial stability indicators.",
          imgSrc:
            "/assets/KYB/Core Features of Our Business Verification APi/Risk Assessment.png",
        },
        {
          heading3: "Ongoing Monitoring",
          heading3Para:
            "Continuous monitoring of business changes, ownership updates, regulatory actions, and adverse news with real-time alerts and webhooks.",
          imgSrc:
            "/assets/KYB/Core Features of Our Business Verification APi/Ongoing Monitoring.png",
        },
        {
          heading3: "Global Coverage",
          heading3Para:
            "Access business data from 180+ countries including corporate registries, trade registers, tax authorities, and local business databases.",
          imgSrc:
            "/assets/KYB/Core Features of Our Business Verification APi/Global Coverage.png",
        },
        {
          heading3: "Real-Time Verification",
          heading3Para:
            "Get instant verification results in under 15 seconds with direct API connections to official registries and proprietary data sources.",
          imgSrc:
            "/assets/KYB/Core Features of Our Business Verification APi/Real-Time Verification.png",
        },
      ],
    },
  ];

  const HeadingSubheadings = [
    {
      heading2: "Key Use Cases for Business Verification API",

      points: [
        {
          heading3: "Business Onboarding",
          heading3Para:
            "Automate corporate customer onboarding with instant company verification, document validation, and UBO identification. Reduce onboarding time from days to minutes.",
          imgSrc:
            "/assets/KYB/Key Use Cases for Business Verification API/Business Onboarding.png",
        },

        {
          heading3: "Merchant Verification",
          heading3Para:
            "Verify merchant businesses for payment processing, e-commerce platforms, and marketplace operations. Assess risk and prevent fraudulent merchant accounts.",
          imgSrc:
            "/assets/KYB/Key Use Cases for Business Verification API/Merchant Verification.png",
        },
        {
          heading3: "Lending & Credit Assessment",
          heading3Para:
            "Verify business borrowers, validate financial documents, and assess corporate creditworthiness for business lending and invoice financing.",
          imgSrc:
            "/assets/KYB/Key Use Cases for Business Verification API/Lending & Credit Assessment.png",
        },
        {
          heading3: "Vendor Due Diligence",
          heading3Para:
            "Screen and verify suppliers, contractors, and business partners to ensure compliance and mitigate third-party risks in your supply chain.",
          imgSrc:
            "/assets/KYB/Key Use Cases for Business Verification API/Vendor Due Diligence.png",
        },
        {
          heading3: "AML/CFT Compliance",
          heading3Para:
            "Meet anti-money laundering and counter-financing of terrorism requirements with comprehensive business screening and UBO verification.",
          imgSrc:
            "/assets/KYB/Key Use Cases for Business Verification API/Compliance.png",
        },
        {
          heading3: "Ongoing Monitoring",
          heading3Para:
            "Continuously monitor existing business relationships for ownership changes, sanctions hits, regulatory actions, and adverse news events.",
          imgSrc:
            "/assets/KYB/Key Use Cases for Business Verification API/Ongoing Monitoring.png",
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PaymentHead headerSection={headerContent} />
      <section className="py-20 px-6  mx-auto text-center max-w-5xl">
        <h2 className="text-3xl mb-4">Complete Business Verification</h2>
        <p className="text-xl mb-4 text-gray-700">
          AOPAY business verification API goes beyond basic company checks. We
          provide real-time access to official business registries, corporate
          filings, ownership structures, and beneficial owner information across
          180+ jurisdictions.
        </p>
        <p className="text-xl mb-4 text-gray-700">
          Whether you're onboarding a new corporate client, conducting ongoing
          due diligence, or meeting regulatory requirements, our KYB API
          automates the entire verification workflow.
        </p>
      </section>
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints} />
      <KYBComplianceAPI />
      <CorporateDueDiligence />
      <ContentWithDescriptivePoints content={content} />
      <HeadingSubheadingSection HeadingSubheadings={HeadingSubheadings} />
      <DeveloperFriendlyAPI />
      <H2H3WithPoints content={contentWithHeadingsAndPoints2} />
      <H2DescH3Desc contentWithDescription={material} />
      <SecurityCompliance />
      <KYBFlexiblePricing />
      <KYBCTASection />
      <FAQSection faqContent={faqContent} />
    </>
  );
};

export default KYB;
