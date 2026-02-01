import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import { PaymentHead, FAQSection, GetStarted } from "@/sections/mySection";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { HeadingSubheadingSection } from "@/sections/HeadingSubheadingSection";
import { StepsWithExplanation } from "@/sections/StepsWithExplanation";
import KYCAPIIntegration from "@/sections/KYC/KYCAPIIntegration";
import Features from "@/sections/KYC/Features";
import DeveloperAPIFeatures from "@/sections/KYC/DeveloperAPIFeatures";
import EnterpriseSecurityCompliance from "@/sections/KYC/EnterpriseSecurityCompliance";
import { FraudDetectionAndPrevention } from "@/sections/KYC/FraudDetectionAndPrevention";
import { ReadyToAutomateVerification } from "@/sections/KYC/ReadyToAutomateVerification";

export const metadata = {
  title: "KYC Management Software & Solutions | AOPAY",
  description:
    "Streamline customer verification with AoPay's digital KYC solution. Video KYC, document verification, biometric authentication, e-KYC for banking, fintech, and financial services.",
  keywords:
    "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/kyc-solutions",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "KYC Solution | Know Your Customer Verification | AoPay",
    description:
      "Digital KYC with video verification, document verification, and biometric authentication.",
    url: "https://aopay.in/kyc-solutions",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/kyc-solution-og.jpg",
        width: 1200,
        height: 630,
        alt: "AOPay Money Transfer Banner",
      },
    ],
    twitter: {
      card: "summary_large_image",
    },
  },
};

const KYC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/kyc-solutions",
    telephone: "011-42151216",
    description:
      "Cheapest KYC solution in India for secure, automated identity verification, compliance checks, and document validation with round-the-clock business support.",
    serviceType: [
      "White Label KYC solutions for banks and FinTech platforms",
      "Online KYC Solution",
      "Automated KYC and Customer Due Diligence Software Provider Near Me",
      "Best KYC Solutions Provider in India",
      "Employee Digital KYC Solutions",
      "Real-time KYC Validation for Financial Small Businesses",
      "Regulatory-compliant KYC and Identity Management Solutions",
      "Affordable AML-compliant KYC Verification Software Provider",
      "Real-time KYC Validation and Risk Assessment Services in India",
      "Automated Customer Onboarding and Due Diligence Solutions Provider",
      "Digital KYC and Identity Verification Solution for Small Businesses",
      "Risk-based KYC Assessment Tools",
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
      { "@type": "City", name: "Ghaziabad" },
      { "@type": "City", name: "Lucknow" },
      { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
      { "@type": "AdministrativeArea", name: "Bihar" },
      { "@type": "City", name: "Kolkata" },
      { "@type": "AdministrativeArea", name: "Gujarat" },
      { "@type": "AdministrativeArea", name: "Rajasthan" },
      { "@type": "City", name: "Faridabad" },
      { "@type": "AdministrativeArea", name: "Karnataka" },
      { "@type": "AdministrativeArea", name: "Kerala" },
      { "@type": "AdministrativeArea", name: "Tamil Nadu" },
      { "@type": "City", name: "Bengaluru" },
      { "@type": "AdministrativeArea", name: "Andhra Pradesh" },
      { "@type": "AdministrativeArea", name: "Telangana" },
      { "@type": "AdministrativeArea", name: "Maharashtra" },
      { "@type": "AdministrativeArea", name: "Madhya Pradesh" },
      { "@type": "City", name: "Jaipur" },
      { "@type": "AdministrativeArea", name: "Punjab" },
      { "@type": "City", name: "Chandigarh" },
    ],
  };


  const headerContent = {
    title:
      "Instant KYC & Identity Verification Solutions for Banks, Fintechs & NBFCs",
    subTitle:
      "Verify customer identities instantly with Aadhaar, PAN, and biometric authentication for smooth onboarding. Ensure regulatory compliance with automated KYC verification, document validation, and risk scoring.",
    imgSrc: "/assets/KYC - Individual Verification.png",
    alt: "Secure money transfer API enabling instant fund transfers between bank accounts.",
    video: false,
    btn1: "Request Demo",
    btn1Link: "/contact-us",
    btn2: "API Documentation",
    btn2Link: "/contact-us",
  };

  const features = [
    "All payment modes (IMPS, NEFT, UPI)",
    "Basic API documentation",
    "Email support",
    "Advanced analytics dashboard",
    "24/7 technical support",
    "Webhook notifications",
    "Custom API endpoints",
    "Dedicated account manager",
    "White-label solutions",
    "Priority integration support",
  ];

  const features2 = {
    heading2: "Modern Payment Methods for Logistics Operations",
    description:
      "Leverage UPI and QR code payments to simplify transactions across your logistics network. From customer payments to driver settlements, enable fast, secure digital payments that reduce cash handling and improve operational efficiency.",
    points: [
      {
        imgSrc:
          "/assets/DMTIntegration/DeveloperFriendlyIntegrationExperience/ComprehensiveSDKSupport.png",
        heading3: "Supported Payment Methods for Logistics",
        type: "list",
        features: [
          "UPI Payments",
          "QR Code Scanning",
          "Digital Wallets",
          "Bank Transfers",
          "Mobile Banking",
          "Cash on Delivery",
          "Credit/Debit Cards",
          "Net Banking",
          "IMPS/NEET",
          "Prepaid Cards",
          "AEPS Services",
        ],
      },
    ],
  };


  const benefits = [
    {
      description: "Industry-Best Verification Process",
    },
    {
      description: "Scan & Pay Anyone",
    },
  ];

  const benefitsHeading = {
    heading: "No KYC required to pay using UPI on AOPay App",
    imgUrl: "/assets/Payments/Money_Transfer/Send_Money_2.1.png",
  };

  const toolsContent = {
    imgSrc: "/assets/Payments/Money_Transfer/Send_Money_3.png",
    alt: "Digital money transfer API interface with real-time transaction tracking and notifications.",
    content: [
      {
        icon: "/assets/Payments/Money_Transfer/Money_Transfer.png",
        title: "Money Transfer Made Easier",
        description:
          "With AOPay App, transferring money has never been easier. Enjoy a easy and smooth experience, whether you're sending funds to friends, family, or making payments. AOPay app is designed to put you in control, offering a secure, user-friendly platform for all your money transfer needs.",
      },
      {
        icon: "/assets/Payments/Money_Transfer/Transfer_Money_friends.png",
        title: "Transfer Money Directly to Friends or Family's Bank Account",
        description:
          "Get rid of long bank lines & waitings for fund transfer. Use AOPay for all your bank transfers in a secure & easy way.",
      },
      {
        icon: "/assets/Payments/Money_Transfer/Passbook_Payment_History.png",
        title: "Check Passbook Balance & Payment History",
        description: "Track all your transactions easily with AOPay Passbook.",
      },
    ],
  };

  const content = [
    {
      heading2: "Perfect for Regulated Industries",
      heading2Para:
        "Our customer onboarding solution serves organizations across financial services and regulated sectors.",
      points: [
        {
          heading3: "Banks & Financial Institutions",
          heading3Para:
            "Traditional banks streamline customer onboarding with automated KYC verification, reducing account opening time from days to minutes while maintaining compliance.",
          imgSrc:
            "/assets/KYC/Perfect for Regulated Industries/Banks & Financial Institutions.png",
        },

        {
          heading3: "FinTech Startups",
          heading3Para:
            "Digital financial services companies integrate identity verification to onboard customers quickly, prevent fraud, and meet regulatory requirements cost-effectively.",
          imgSrc:
            "/assets/KYC/Perfect for Regulated Industries/FinTech Startups.png",
        },
        {
          heading3: "Payment Service Providers",
          heading3Para:
            "Payment gateways and PSPs verify customer identities for account creation, transaction authorization, and fraud prevention in real-time.",
          imgSrc:
            "/assets/KYC/Perfect for Regulated Industries/Payment Service Providers.png",
        },
        {
          heading3: "NBFCs & Lending Platforms",
          heading3Para:
            "Non-banking financial companies and digital lenders verify borrower identities, reduce loan fraud, and accelerate loan disbursement processes.",
          imgSrc:
            "/assets/KYC/Perfect for Regulated Industries/NBFCs & Lending Platforms.png",
        },
        {
          heading3: "E-Commerce Platforms",
          heading3Para:
            "High-value transaction platforms verify customer identities to prevent fraud, reduce chargebacks, and build trust in marketplace ecosystems.",
          imgSrc:
            "/assets/KYC/Perfect for Regulated Industries/E-Commerce Platforms.png",
        },
        {
          heading3: "Real Estate Platforms",
          heading3Para:
            "Property rental and sales platforms verify tenant and buyer identities, conduct background checks, and comply with anti-money laundering regulations.",
          imgSrc:
            "/assets/KYC/Perfect for Regulated Industries/Real Estate Platforms.png",
        },
        {
          heading3: "Gig Economy Apps",
          heading3Para:
            "Ride-sharing, delivery, and freelance platforms verify driver and worker identities to ensure safety and regulatory compliance.",
          imgSrc:
            "/assets/KYC/Perfect for Regulated Industries/Gig Economy Apps.png",
        },
        {
          heading3: "API Aggregators",
          heading3Para:
            "Platform providers embed identity verification capabilities to offer KYC-as-a-service to their customers and partners.",
          imgSrc:
            "/assets/KYC/Perfect for Regulated Industries/API Aggregators.png",
        },
      ],
    },
  ];

  const documentationPoints = [
    "RESTful API endpoints with JSON response format",
    "Sandbox environment for testing DMT functionality",
    "Error handling and status code documentation",
    "Integration examples in multiple programming languages",
  ];

  const developerTools = [
    "JavaScript, PHP, Python, and Java SDKs",
    "Webhook testing and validation tools",
    "Real-time transaction monitoring dashboard",
    "API performance analytics and insights",
  ];

  const linkContent = {
    headingContent: "Payment Solutions",
    url1: [
      {
        heading: "Recharge & Bill Payment",
        paragraph:
          "Do Recharges & Pay Bills for Utilities in few clicks, all at one place",
        link: "/recharge-bill-payment",
        icon: "/assets/ExploreProducts/Payment/BBPS.png",
        alt: "Recharge & Bill Payment",
      },
    ],
    url2: [
      {
        heading: "AEPS",
        paragraph:
          "Access Banking Services: Cash Withdrawals, Deposits, & Balance Inquiries with AEPS Service",
        link: "/aeps-api",
        icon: "/assets/ExploreProducts/Payment/AEPS.png",
        alt: "AEPS",
      },
    ],
    url3: [
      {
        heading: "Payment Gateway",
        paragraph:
          "Make online payments for Purchases, Subscriptions, Travel, Entertainment & Donation securely",
        link: "/payment-gateway",
        icon: "/assets/ExploreProducts/Payment/PaymentGateway.png",
        alt: "Payment Gateway",
      },
    ],
    url4: [
      {
        heading: "UPI & QR Payment",
        paragraph:
          "Pay & Collect Payment with QR codes for instant, contactless transactions at stores, online, & more.",
        link: "/upi-qr-payment",
        icon: "/assets/ExploreProducts/Payment/UPI&QR.png",
        alt: "UPI & QR Payment",
      },
    ],
  };

  const contentWithHeadingsAndPoints2 = [
    {
      heading2: "Advanced Verification Capabilities",

      points: [
        {
          heading3: "Multi-Document Verification",
          heading3Para:
            "Verify multiple documents simultaneously for comprehensive identity checks including passport, driver's license, and proof of address validation.",
          imgSrc:
            "/assets/KYC/Advanced Verification Capabilities/Multi-Document Verification.png",
        },
        {
          heading3: "Custom Workflows",
          heading3Para:
            "Simple form completion with automatic validation and bill amount fetch for accurate payment processing.",
          imgSrc:
            "/assets/KYC/Advanced Verification Capabilities/Custom Workflows.png",
        },
        {
          heading3: "White-Label Solution",
          heading3Para:
            "Embed identity verification into your platform with custom branding, seamless UI integration, and your own domain for native user experience.",
          imgSrc:
            "/assets/KYC/Advanced Verification Capabilities/White-Label Solution.png",
        },
      ],
    },
  ];

  const upiFeaturesData = {
    title: "Advanced Security & Compliance Features",
    description:
      "Ensure every transaction meets the highest security standards and regulatory compliance requirements.",
    sections: [
      {
        imgSrc:
          "/assets/DMTIntegration/AdvancedSecurity&ComplianceFeatures/SecurityInfrastructure.png",
        heading: "Bank-Grade Security Infrastructure",
        points: [
          "End-to-end encryption with TLS 1.3 protocol",
          "Multi-factor authentication and API key management",
          "IP whitelisting and access control mechanisms",
          "Regular security audits and penetration testing",
        ],
      },
      {
        imgSrc:
          "/assets/DMTIntegration/AdvancedSecurity&ComplianceFeatures/RegulatoryCompliance.png",
        heading: "Regulatory Compliance",
        points: [
          "RBI guidelines compliance for domestic transfers",
          "AML (Anti-Money Laundering) screening integration",
          "KYC verification and customer due diligence",
          "Transaction monitoring and suspicious activity reporting",
        ],
      },
      {
        imgSrc:
          "/assets/DMTIntegration/AdvancedSecurity&ComplianceFeatures/ProtectionPrivacy.png",
        heading: "Data Protection & Privacy",
        points: [
          "GDPR compliant data processing and storage",
          "Data encryption at rest and in transit",
          "Configurable data retention policies",
          "Privacy-by-design architecture principles",
        ],
      },
    ],
  };

  const material = [
    {
      heading2: "Comprehensive Document Coverage",
      heading2Para:
        "Support for the world's most comprehensive library of identity documents.",
      points: [
        {
          heading3: "Passports",
          heading3Para:
            "Verify international and biometric passports from all countries with MRZ (Machine Readable Zone) validation and security feature authentication.",
          imgSrc: "/assets/KYC/Comprehensive Document Coverage/Passports.png",
        },
        {
          heading3: "National ID Cards",
          heading3Para:
            "Support for national identity cards, citizenship cards, and voter IDs from 220+ countries with front and back validation.",
          imgSrc:
            "/assets/KYC/Comprehensive Document Coverage/National ID Cards.png",
        },
        {
          heading3: "Driver's Licenses",
          heading3Para:
            "Verify driver's licenses and learner permits from all US states, Canadian provinces, and international jurisdictions.",
          imgSrc:
            "/assets/KYC/Comprehensive Document Coverage/Driver's Licenses.png",
        },
        {
          heading3: "Residence Permits",
          heading3Para:
            "Validate residence permits, work permits, visa stamps, and immigration documents for foreign nationals and expatriates.",
          imgSrc:
            "/assets/KYC/Comprehensive Document Coverage/Residence Permits.png",
        },
        {
          heading3: "Proof of Address",
          heading3Para:
            "Verify utility bills, bank statements, tax documents, and lease agreements for address validation and residency confirmation.",
          imgSrc:
            "/assets/KYC/Comprehensive Document Coverage/Proof of Address.png",
        },
        {
          heading3: "Other Documents",
          heading3Para:
            "Support for health insurance cards, social security cards, military IDs, and other government-issued identification documents.",
          imgSrc:
            "/assets/KYC/Comprehensive Document Coverage/Other Documents.png",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "How does identity verification work?",
        answer:
          "Our KYC API uses AI and machine learning to verify identity documents through multiple steps: (1) Customer uploads document photo, (2) AI analyzes document authenticity and extracts data, (3) Customer takes selfie for facial biometric matching, (4) Liveness detection confirms physical presence, (5) System screens against AML/sanctions databases, (6) Comprehensive verification report is generated with pass/fail status and confidence scores.",
      },
      {
        question: "Which documents are supported?",
        answer:
          "Our KYC API supports 10,000+ identity documents from 220+ countries including passports (international and biometric), national ID cards, driver's licenses, residence permits, work permits, voter IDs, and other government-issued identification documents. We also verify proof of address documents like utility bills and bank statements.",
      },
      {
        question: "How accurate is the verification?",
        answer:
          "Our identity verification achieves 98.5% accuracy through advanced AI and machine learning algorithms. Document authentication includes security feature validation, MRZ verification, and tampering detection. Facial recognition accuracy exceeds 99% with sub-second matching times. Our liveness detection successfully blocks 99.7% of presentation attacks including photos, videos, and masks.",
      },
      {
        question: "How long does integration take?",
        answer:
          "Most developers complete basic KYC API integration within 2-4 hours using our comprehensive SDKs and documentation. For web integrations, implementation typically takes 1-2 days. Mobile SDK integration usually requires 3-5 days. Our sandbox environment allows you to test all features before going live, and our technical team provides dedicated integration support throughout the process.",
      },
      {
        question: "Is the API compliant with regulations?",
        answer:
          "Yes, our KYC API is designed to meet global KYC/AML regulations including FATF recommendations, AMLD5 (5th Anti-Money Laundering Directive), BSA/Patriot Act, and jurisdiction-specific requirements. We provide comprehensive audit trails, compliance reports, and documentation suitable for regulatory examinations. Our system is SOC 2 Type II certified, ISO 27001 compliant, and GDPR compliant for data protection.",
      },
      {
        question: "How is customer data protected?",
        answer:
          "Customer data is protected through end-to-end encryption, zero-knowledge architecture, and bank-grade security measures. Documents are encrypted in transit (TLS 1.3) and at rest. We offer configurable data retention policies including immediate deletion after verification. Our infrastructure is SOC 2 Type II certified, ISO 27001 compliant, and GDPR compliant with data processing agreements available.",
      },
    ],
  };

 

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Core Features of AOPAY Customer Verification API",
      heading2Para:
        "Everything you need for complete digital identity verification and KYC compliance in one powerful API.",
      points: [
        {
          heading3: "Document Verification",
          heading3Para:
            "Authenticate 10,000+ identity documents from 220+ countries including passports, driver's licenses, national IDs, and residence permits using AI-powered document analysis.",
          imgSrc:
            "/assets/KYC/Core Features of AOPAY Customer Verification API/Document Verification.png",
        },
        {
          heading3: "AI Data Extraction",
          heading3Para:
            "Automatically extract and validate personal information from identity documents with 98.5% accuracy. Extract names, dates, addresses, document numbers, and more in milliseconds.",
          imgSrc:
            "/assets/KYC/Core Features of AOPAY Customer Verification API/AI Data Extraction.png",
        },
        {
          heading3: "Facial Recognition",
          heading3Para:
            "Match customer selfies against document photos using advanced facial recognition API technology with anti-spoofing and deepfake detection capabilities.",
          imgSrc:
            "/assets/KYC/Core Features of AOPAY Customer Verification API/Facial Recognition.png",
        },

        {
          heading3: "Liveness Detection",
          heading3Para:
            "Prevent identity fraud with liveness detection technology that ensures the person is physically present during verification, blocking photo, video, and mask attacks.",
          imgSrc:
            "/assets/KYC/Core Features of AOPAY Customer Verification API/Liveness Detection.png",
        },
        {
          heading3: "AML Screening",
          heading3Para:
            "Screen customers against global sanctions lists, PEP (Politically Exposed Persons) databases, and adverse media sources for AML compliance and regulatory requirements.",
          imgSrc:
            "/assets/KYC/Core Features of AOPAY Customer Verification API/AML Screening.png",
        },
        {
          heading3: "Address Verification",
          heading3Para:
            "Validate customer addresses through utility bills, bank statements, and proof of residence documents with automated address extraction and verification.",
          imgSrc:
            "/assets/KYC/Core Features of AOPAY Customer Verification API/Address Verification.png",
        },
        {
          heading3: "Age Verification",
          heading3Para:
            "Instantly verify customer age for regulated industries including gambling, alcohol, tobacco, and financial services with document-based age validation.",
          imgSrc:
            "/assets/KYC/Core Features of AOPAY Customer Verification API/Age Verification.png",
        },
        {
          heading3: "Mobile SDKs",
          heading3Para:
            "Native iOS and Android SDKs for seamless mobile identity verification. Enable customers to complete KYC verification within your mobile app.",
          imgSrc:
            "/assets/KYC/Core Features of AOPAY Customer Verification API/Mobile SDKs.png",
        },
        {
          heading3: "Real-Time Verification",
          heading3Para:
            "Get instant verification results in under 30 seconds. Our API processes documents, performs biometric checks, and returns comprehensive verification status immediately.",
          imgSrc:
            "/assets/KYC/Core Features of AOPAY Customer Verification API/Real-Time Verification.png",
        },
      ],
    },
  ];

  
  const Steps = [
    {
      heading2: "How AOPAY Identity Verification API Works",
      heading2Para:
        "Simple integration, powerful results. Start verifying customers in minutes with our developer-friendly KYC API.",
      steps: [
        {
          step1: "Document Capture",
          step1Para:
            "Customer uploads identity document (passport, driver's license, or national ID) via web or mobile interface.",
        },
        {
          step2: "AI Analysis",
          step2Para:
            "Our AI engine analyzes document authenticity, extracts data, and validates security features in real-time.",
        },
        {
          step3: "Biometric Check",
          step3Para:
            "Customer takes selfie for facial recognition and liveness detection to confirm physical presence.",
        },
        {
          step4: "Instant Results", 
          step4Para:
            "Receive comprehensive verification report with pass/fail status, confidence scores, and extracted data.",
        },
      ],
    },
  ];

    const HeadingSubheadings = [
      {
        heading2: "Key Use Cases for Customer Verification API",

        points: [
          {
            heading3: "Customer Onboarding",
            heading3Para:
              "Automate digital customer onboarding with instant identity verification, document authentication, and AML screening. Reduce onboarding time from days to minutes.",
            imgSrc:
              "/assets/KYC/Key Use Cases for Customer Verification API/Customer Onboarding.png",
          },

          {
            heading3: "Account Opening",
            heading3Para:
              "Enable remote account opening for banking services with compliant identity verification that meets KYC regulations and prevents synthetic identity fraud.",
            imgSrc:
              "/assets/KYC/Key Use Cases for Customer Verification API/Account Opening.png",
          },
          {
            heading3: "Age Verification",
            heading3Para:
              "Verify customer age for regulated products and services including alcohol, tobacco, gambling, and adult content with instant document-based validation.",
            imgSrc:
              "/assets/KYC/Key Use Cases for Customer Verification API/Age Verification.png",
          },
          {
            heading3: "Fraud Prevention",
            heading3Para:
              "Detects and prevents identity fraud, account takeover, and synthetic identities with multi-layer verification including liveness detection and biometric matching.",
            imgSrc:
              "/assets/KYC/Key Use Cases for Customer Verification API/Fraud Prevention.png",
          },
          {
            heading3: "AML/KYC Compliance",
            heading3Para:
              "Meet anti-money laundering and know-your-customer regulatory requirements with automated screening against global sanctions and PEP databases.",
            imgSrc:
              "/assets/KYC/Key Use Cases for Customer Verification API/AML_KYC Compliance.png",
          },
          {
            heading3: "Re-Verification",
            heading3Para:
              "Conduct periodic customer re-verification for ongoing compliance, risk assessment, and account security with automated verification workflows.",
            imgSrc:
              "/assets/KYC/Key Use Cases for Customer Verification API/Re-Verification.png",
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
        <h2 className="text-3xl mb-4">
          Complete Identity Verification Solution
        </h2>
        <p className="text-xl mb-4 text-gray-700">
          Our identity verification API combines AI, machine learning, and
          biometric technology to provide instant, accurate customer
          verification. From document authentication to facial recognition and
          AML screening, we automate the entire KYC process.
        </p>
        <p className="text-xl mb-4 text-gray-700">
          Whether you're onboarding new customers, meeting regulatory
          compliance, or preventing fraud, our KYC API delivers real-time
          results with industry-leading accuracy.
        </p>
      </section>
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints} />
      <StepsWithExplanation Steps={Steps} />
      <KYCAPIIntegration />
      <Features />
      <ContentWithDescriptivePoints content={content} />
      <HeadingSubheadingSection HeadingSubheadings={HeadingSubheadings} />
      <DeveloperAPIFeatures />
      <H2H3WithPoints content={contentWithHeadingsAndPoints2} />
      <H2DescH3Desc contentWithDescription={material} />
      <EnterpriseSecurityCompliance />
      <FraudDetectionAndPrevention />
      <ReadyToAutomateVerification />
      <FAQSection faqContent={faqContent} />
    </>
  );
};

export default KYC;
