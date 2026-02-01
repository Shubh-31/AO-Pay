import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import { PaymentHead, FAQSection } from "@/sections/mySection";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { HeadingSubheadingSection } from "@/sections/HeadingSubheadingSection";
import WealthManagementProcessing from "@/sections/WealthAndInvestmentPlatforms/WealthManagementProcessing";
import InvestmentPlatformExperience from "@/sections/WealthAndInvestmentPlatforms/InvestmentPlatformExperience";
import InvestmentBusinessModels from "@/sections/WealthAndInvestmentPlatforms/InvestmentBusinessModels";
import InvestmentExpertSolutions from "@/sections/WealthAndInvestmentPlatforms/InvestmentExpertSolutions";

export const metadata = {
  title: "Investment Management Software & Solutions | AOPAY",
  description:
    "Build investment platforms with AoPay's WealthTech solution. Mutual funds, stocks, bonds, portfolio management, SIP automation, goal-based investing for wealth management platforms.",
  keywords:
    "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/wealthtech-solutions",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "WealthTech Solutions | Investment Platform | AoPay",
    description:
      "Build investment platforms with mutual funds, SIP automation, and portfolio management.",
    url: "https://aopay.in/wealthtech-solutions",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/wealthtech-og.jpg",
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

const WealthtechInvestmentPlatforms = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/wealthtech-solutions",
    telephone: "011-42151216",
    description:
      "Cheapest banking solutions for WealthTech & investment platforms in India providing secure transactions, instant settlements, automated collections, and virtual accounts.",
    serviceType: [
      "White Label Banking Solution for Wealthtech & Investment Platforms",
      "ACH/real-time funding solutions for investment portfolios",
      "Wealth management APIs Provider Near Me",
      "Best banking solutions Provider for WealthTech companies in India",
      "Payment rails for automated investment platforms",
      "Banking integrations for digital investment apps",
      "Digital onboarding and KYC for investment platforms",
      "Affordable Banking infrastructure for WealthTech startups",
      "API-driven banking for investment and wealth management firms in India",
      "Integrated banking solutions provider for digital investment platforms",
      "Custodial and funding services for investment apps",
      "Banking solutions for WealthTech platforms",
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
      "Investment & Wealth Management Solutions for AMCs, Advisors & Digital Platforms",
    subTitle:
      "Facilitate SIP collections, redemptions, and portfolio transactions with investment-ready payment infrastructure. Streamline NAV-based payments, mandate management, and investor onboarding for AMCs and advisors.",
    imgSrc: "/assets/WealthTech Investments Platforms.png",
    alt: "Secure money transfer API enabling instant fund transfers between bank accounts.",
    video: false,
    btn1: "Start Now",
    btn1Link: "/contact-us",
    btn2: "Grow Your Revenue",
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

  const Steps = [
    {
      heading2: "How AOPAY Domestic Money Transfer API Works",

      steps: [
        {
          step1: "API Integration",
          step1Para:
            "Integrate our DMT API using comprehensive documentation and sandbox environment for testing money transfer functionality.",
        },
        {
          step2: "Transaction Processing",
          step2Para:
            "Download our SDKs for popular programming languages or use direct REST API calls. Implement UPI payment API endpoints with minimal code changes.",
        },
        {
          step3: "Testing & Validation",
          step3Para:
            "Test all payment flows in our sandbox environment. Validate QR code payment functionality and UPI collect features before going live.",
        },
        {
          step4: "Go Live",
          step4Para:
            "Switch to production environment and start accepting digital payments. Monitor transactions with our real-time dashboard and analytics tools.",
        },
      ],
    },
  ];

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
      heading2: "Complete KYC and Risk Assessment for Investment Platforms",
      heading2Para:
        "Investment platforms must maintain rigorous know-your-customer processes to comply with SEBI regulations and prevent financial crimes. AOPAY's advanced KYC verification system ensures complete regulatory compliance while providing smooth onboarding experiences for investors, meeting all regulatory guidelines and risk assessment requirements.",
      points: [
        {
          heading3: "Automated KYC Processing",
          heading3Para:
            "Comprehensive identity verification using PAN, Aadhaar, and other approved documents with automated validation against regulatory databases and risk screening.",
          imgSrc:
            "/assets/Wealthtech/Complete KYC and Risk Assessment for Investment Platforms/Automated KYC Processing.png",
        },

        {
          heading3: "CIBIL Integration",
          heading3Para:
            "Integrated credit scoring and financial background checks help assess investor risk profiles and determine appropriate investment limits and product eligibility.",
          imgSrc:
            "/assets/Wealthtech/Complete KYC and Risk Assessment for Investment Platforms/Instant CIBIL API Integration.png",
        },
        {
          heading3: "Bank Account Validation",
          heading3Para:
            "Verify bank account details for investment collections and redemption settlements, ensuring accurate financial information and reducing payment failures.",
          imgSrc:
            "/assets/Wealthtech/Complete KYC and Risk Assessment for Investment Platforms/Bank Account Validation.png",
        },
        {
          heading3: "Risk Assessment",
          heading3Para:
            "Automated risk profiling based on financial data, investment history, and regulatory requirements to ensure suitable investment recommendations.",
          imgSrc:
            "/assets/Wealthtech/Complete KYC and Risk Assessment for Investment Platforms/Risk Assessment.png",
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
      heading2: "Utility Bill Payment Services for Customer Convenience",
      heading2Para:
        "Add utility bill payment services to your retail location, creating additional revenue opportunities while providing valuable convenience services that increase customer loyalty and foot traffic.",
      points: [
        {
          heading3: "Comprehensive Bill Payment Platform",
          heading3Para:
            "Enable customers to pay electricity, water, gas, mobile, and internet bills at your retail location with instant processing and confirmation. Our platform supports all major utility providers with competitive commission structures and reliable service delivery.",
          imgSrc:
            "/assets/Wealthtech/Utility Bill Payment Services for Customer Convenience/Comprehensive Bill Payment Platform.png",
        },
        {
          heading3: "Mobile and DTH Recharge Services",
          heading3Para:
            "Offer instant mobile recharges and DTH services with real-time processing and confirmation. Support all major telecom operators and service providers while earning commissions and increasing customer engagement at your retail location.",
          imgSrc:
            "/assets/Wealthtech/Utility Bill Payment Services for Customer Convenience/Mobile and DTH Recharge Services.png",
        },
        {
          heading3: "Business Service Integration",
          heading3Para:
            "Provide business customers with corporate bill payment services, bulk recharge options, and customized payment solutions. Attract commercial customers and increase transaction values through specialized business service offerings.",
          imgSrc:
            "/assets/Wealthtech/Utility Bill Payment Services for Customer Convenience/Business Service Integration.png",
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
      heading2: "AOPAY Advanced Treasury Management for Investment Operations",
      heading2Para:
        "Investment platforms and wealth management firms require sophisticated financial management to handle large volumes of investor funds, regulatory capital requirements, and complex settlement processes. AOPAY's treasury management solutions provide comprehensive financial oversight, liquidity optimization, and automated reporting tailored for investment industry needs.",
      points: [
        {
          heading3: "Investment Fund Management",
          heading3Para:
            "Intelligent management of investor funds, segregated client accounts, and regulatory capital requirements with automated compliance monitoring and optimization.",
          imgSrc:
            "/assets/Wealthtech/AOPAY Advanced Treasury Management for Investment Operations/Investment Fund Management.png",
        },
        {
          heading3: "Settlement Automation",
          heading3Para:
            "Streamlined investment settlement processing with T+1/T+2 cycles, automated reconciliation, and comprehensive audit trails for transparency and compliance.",
          imgSrc:
            "/assets/Wealthtech/AOPAY Advanced Treasury Management for Investment Operations/Settlement Automation.png",
        },
        {
          heading3: "Regulatory Reporting",
          heading3Para:
            "Real-time financial data feeds for regulatory submissions, NAV calculations, and compliance reporting to SEBI, RBI, and other regulatory authorities.",
          imgSrc:
            "/assets/Wealthtech/AOPAY Advanced Treasury Management for Investment Operations/Regulatory Reporting.png",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "How does AOPAY handle SIP collection and E-NACH processing?",
        answer:
          "AOPAY provides comprehensive SIP management including automated E-NACH setup, bank account verification, mandate tracking, and intelligent retry mechanisms for failed collections. Our system handles various SIP frequencies and amounts while ensuring high success rates through smart routing and processing optimization.",
      },
      {
        question: "What KYC verification is required for investment platforms?",
        answer:
          "AOPAY provides comprehensive KYC verification including PAN validation, Aadhaar verification, address confirmation, and integration with CIBIL for financial background checks. Our system automatically validates documents against regulatory databases and maintains compliance with SEBI KYC requirements for investment platforms.",
      },
      {
        question: "Can AOPAY process redemptions and portfolio rebalancing?",
        answer:
          "Yes, AOPAY handles complex investment operations including redemption processing, portfolio rebalancing transactions, dividend distributions, and bonus allocations. Our platform provides real-time settlement with comprehensive audit trails and regulatory reporting for all investment activities.",
      },
      {
        question: "How quickly can investment platforms integrate AOPAY?",
        answer:
          "Most investment platforms can begin processing investments within 1-2 weeks depending on system complexity. Our wealth management specialists provide dedicated support for integration with portfolio management systems, AMC platforms, and regulatory reporting requirements.",
      },
      {
        question: "Does AOPAY support international investment operations?",
        answer:
          "Yes, AOPAY supports global investment operations with multi-currency processing, international fund transfers, and automated compliance with various jurisdictional requirements. Our platform handles the complexity of cross-border investment transactions and regulatory reporting automatically.",
      },
    ],
  };

  const HeadingSubheadings = [
    {
      heading2: "Why Investment Leaders Choose AOPAY",
      heading2Para:
        "Accelerate your wealth management growth with unified payment experiences designed for modern investment operations. From traditional mutual fund distribution to innovative robo-advisory platforms, you can quickly adapt to market changes, ensure regulatory compliance, and maximize investor satisfaction with our comprehensive investment payment platform.",
      points: [
        {
          heading3: "Launch Robo-Advisory Services",
          heading3Para:
            "AOPAY’s flexible payment system supports automated investment advisory services with dynamic portfolio rebalancing, systematic investments, and intelligent asset allocation based on investor goals and risk profiles.",
          imgSrc:
            "/assets/Wealthtech/Why Investment Leaders Choose AOPAY/Launch Robo-Advisory Services.png",
        },

        {
          heading3: "Extend to Alternative Investments",
          heading3Para:
            "Handle sophisticated investment products including REITs, AIFs, and structured products with complex settlement requirements and institutional-grade compliance capabilities.",
          imgSrc:
            "/assets/Wealthtech/Why Investment Leaders Choose AOPAY/Extend to Alternative Investments.png",
        },
        {
          heading3: "Integrate with Wealth Tech Stack",
          heading3Para:
            "Connect AOPAY with popular investment platforms, portfolio management systems, CRM tools, and regulatory reporting software through our comprehensive wealth tech integration marketplace.",
          imgSrc:
            "/assets/Wealthtech/Why Investment Leaders Choose AOPAY/Integrate with Wealth Tech Stack.png",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Easy SIP Collection and E-NACH Management",
      heading2Para:
        "Systematic Investment Plans (SIPs) are the backbone of retail investment growth. AOPAY's advanced SIP collection system ensures maximum success rates through intelligent E-NACH setup, automated retry mechanisms, and comprehensive mandate management. Our platform handles the complexities of recurring investments while providing investors with seamless experiences.",
      points: [
        {
          heading3: "Automated E-NACH Processing",
          heading3Para:
            "Streamlined electronic mandate setup with bank account verification, automated approval workflows, and intelligent routing to maximize mandate acceptance rates.",
          imgSrc:
            "/assets/Wealthtech/Easy SIP Collection and E-NACH Management/Automated E-NACH Processing.png",
        },
        {
          heading3: "Smart SIP Management",
          heading3Para:
            "Flexible SIP schedules, automated collection retries, grace period management, and investor communication tools to minimize missed payments and maximize retention.",
          imgSrc:
            "/assets/Wealthtech/Easy SIP Collection and E-NACH Management/Smart SIP Management.png",
        },
        {
          heading3: "Portfolio Integration",
          heading3Para:
            "Real-time integration with portfolio management systems, automated NAV allocation, and comprehensive reporting for investors and fund managers.",
          imgSrc:
            "/assets/Wealthtech/Easy SIP Collection and E-NACH Management/Portfolio Integration.png",
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
      <WealthManagementProcessing />
      <InvestmentPlatformExperience />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints} />
      <ContentWithDescriptivePoints content={content} />
      <H2DescH3Desc contentWithDescription={material} />
      <InvestmentBusinessModels />
      <HeadingSubheadingSection HeadingSubheadings={HeadingSubheadings} />
      <H2H3WithPoints content={contentWithHeadingsAndPoints2} />
      <FAQSection faqContent={faqContent} />
      <InvestmentExpertSolutions />
    </>
  );
};

export default WealthtechInvestmentPlatforms;
