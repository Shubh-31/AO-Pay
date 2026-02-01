import { PaymentHead, FAQSection, GetStarted } from "@/sections/mySection";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { DigitalBankingExperience } from "@/sections/NeoBanking/DigitalBankingExperience";
import { FraudDetectionSection } from "@/sections/NeoBanking/FraudDetectionSection";
import { SmartPaymentAcceptance } from "@/sections/NeoBanking/SmartPaymentAcceptance";
import { NeoBankingSolutions } from "@/sections/NeoBanking/NeoBankingSolutions";
import { WhyNeoBanksChooseAOPAY } from "@/sections/NeoBanking/WhyNeoBanksChooseAOPay";
import { BuildDigitalBankWithAOPAY } from "@/sections/NeoBanking/BuildDigitalBankWithAOPay";
import { BuildFutureBanking } from "@/sections/NeoBanking/BuildFutureBanking";
import { TransformNeoBank } from "@/sections/NeoBanking/TransformNeoBank";
import { EssentialBankingAPIs } from "@/sections/NeoBanking/EssentialBankingAPIs";

export const metadata = {
  title: "Digital Corporate Banking Software & Solutions | AOPAY",
  description:
    "Launch your neo bank with AoPay's complete digital banking platform. Account opening, cards, payments, savings, investments, lending for next-generation digital banks",
  keywords:
    "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/neo-banking-solutions",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "Neo Banking Solution | Digital Bank Platform | AoPay",
    description:
      "Launch neo bank with complete banking stack including accounts, cards, and payments.",
    url: "https://aopay.in/neo-banking-solutions",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/neo-banking-og.jpg",
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

const NeoBankingSolution = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/neo-banking-solutions",
    telephone: "011-42151216",
    description:
      "Cheapest banking solutions for neo banks & digital banks in India providing secure transactions, instant settlements, automated workflows, and virtual account management.",
    serviceType: [
      "White Label Banking Solutions for Neo Banks & Digital Banks",
      "Online Payout Solution",
      "Neo bank solutions Provider Near Me",
      "Best banking solutions provider for neo banks in India",
      "Recurring payment solutions for digital banks",
      "Neo bank cash flow management solutions",
      "Neo bank infrastructure solutions providers",
      "Affordable banking systems for neobanks",
      "Neo Bank Banking Solution Provider in India",
      "Automated Payment & Settlement Solutions Provider for Neo Banks",
      "Digital Banking API & Infrastructure Services provider for neobanks",
      "Core Banking Solutions provider for Neo Banks",
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
      "Corporate Banking Solutions for Banks, NBFCs & Financial Institutions",
    subTitle:
      "Deliver enterprise-grade banking services with scalable payment infrastructure, cash management tools, and treasury solutions. Empower corporate clients with smooth transaction processing and financial automation.",
    imgSrc: "/assets/Neo Bank  Digital Bank.png",
    alt: "Secure money transfer API enabling instant fund transfers between bank accounts.",
    video: false,
    btn1: "Grow Your Revenue",
    btn1Link: "/contact-us",
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
      heading2: "Expand Your Banking Services",

      points: [
        {
          heading3: "Recurring Payments & Subscriptions",
          heading3Para:
            "Launch premium banking tiers, subscription-based services, or membership programs with AOPAY Billing. Manage recurring billing cycles, automate invoice generation, handle payment retries for failed transactions, and provide customers with self-service subscription management.",
          imgSrc: "/assets/NeoBanking/Payments.png",
        },

        {
          heading3: "Branch & Kiosk Banking",
          heading3Para:
            "Provide seamless customer experiences across digital and physical channels. Enable customers to open accounts online and complete verification at branches, or start applications in-branch and finish digitally. AOPAY Terminal unifies all touchpoints into a single system.",
          imgSrc: "/assets/NeoBanking/Branch.png",
        },
        {
          heading3: "Treasury & Cash Management",
          heading3Para:
            "Offer business banking services with treasury management, bulk payouts, automated reconciliation, and virtual accounts for corporate customers. Enable businesses to manage their cash flow, automate vendor payments, and receive payments from multiple sources seamlessly.",
          imgSrc: "/assets/NeoBanking/CashManagement.png",
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
      heading2: "Tailored Solutions for Every Organization",

      points: [
        {
          heading3: "For Enterprises & Corporates",
          heading3Para:
            "Streamline accounts payable with automated vendor payments, multi-level approvals, ERP integration, and comprehensive reporting for CFO visibility and control.",
        },
        {
          heading3: "For Marketplaces & E-commerce",
          heading3Para:
            "Automate seller payouts with commission calculations, split payments, escrow management, and real-time settlement for seamless marketplace operations.",
        },
        {
          heading3: "For Fintech & Payout Platforms",
          heading3Para:
            "White-label API infrastructure for building payout products, enabling mass disbursements, and offering vendor payment services to your customers.",
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
      heading2: "Comprehensive Data Sources",
      heading2Para:
        "We aggregate data from trusted sources to provide the most complete business verification available.",
      points: [
        {
          heading3: "Official Business Registries",
          heading3Para:
            "Direct connections to companies houses, corporate registries, and commercial registers in 180+ countries for verified company data.",
        },
        {
          heading3: "Financial Data Providers",
          heading3Para:
            "Credit reports, financial statements, and business credit scores from leading financial information providers globally.",
        },
        {
          heading3: "Driver's Licenses",
          heading3Para:
            "Verify driver's licenses and learner permits from all US states, Canadian provinces, and international jurisdictions.",
        },
        {
          heading3: "Sanctions & Watchlists",
          heading3Para:
            "Real-time screening against OFAC, UN, EU, HMT, and 200+ global sanctions lists plus PEP and adverse media databases.",
        },
        {
          heading3: "Corporate Filings",
          heading3Para:
            "Access to annual reports, beneficial ownership registers, director information, and corporate structure documents.",
        },
        {
          heading3: "Industry Registries",
          heading3Para:
            "Verify licenses, permits, and registrations for regulated industries including financial services, healthcare, and professional services.",
        },
        {
          heading3: "News & Media",
          heading3Para:
            "Adverse media screening across 50,000+ global news sources in multiple languages for reputation and compliance risks.",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What banking APIs does AOPAY provide for neo banks?",
        answer:
          "AOPAY provides a comprehensive suite of banking APIs including Payment Gateway API, UPI & QR Payment API, Virtual Account API, E-NACH for mandate management, AEPS API for Aadhaar-based transactions, PayOut API for disbursements, Payment Collection API, E-Wallet integration, ESCROW services, and Connected Banking APIs. These solutions are specifically designed for neo banks and digital banking platforms to handle everything from customer onboarding to transaction processing.",
      },
      {
        question: "How do KYC APIs help digital banks comply with regulations?",
        answer:
          "AOPAY's KYC APIs including Aadhaar Verification, PAN Verification, GST Verification, and Bank Account Verification enable digital banks to verify customer identities in real-time, meet RBI compliance requirements, prevent fraud, and streamline customer onboarding processes. These APIs perform instant verification against government databases, reducing onboarding time from days to minutes while ensuring full regulatory compliance.",
      },
      {
        question:
          "Can AOPAY's platform scale from startup neo bank to enterprise?",
        answer:
          "Yes, AOPAY's modular API architecture scales seamlessly from startup neo banks processing hundreds of transactions to enterprise digital banks handling millions of daily transactions. Our infrastructure supports increasing transaction volumes, additional payment channels, multi-currency operations, and international expansion without requiring platform changes or migrations. You pay only for what you use as you grow.",
      },
      {
        question:
          "What is Connected Banking and how does it benefit neo banks?",
        answer:
          "Connected Banking enables neo banks to aggregate financial data from multiple banks and accounts, providing customers with a unified view of their finances across institutions. This enhances user experience by eliminating the need to switch between banking apps, enables better financial insights and personalized recommendations, and creates opportunities for value-added services like automated savings, spending analysis, and financial planning.",
      },
      {
        question:
          "How does AOPAY ensure security for digital banking transactions?",
        answer:
          "AOPAY uses multiple layers of security including machine learning-powered fraud detection through AOPAY Radar, PCI DSS Level 1 compliance, device fingerprinting to identify suspicious devices, dynamic 3D Secure authentication, end-to-end encryption, real-time risk scoring for every transaction, and proxy detection to flag anonymized connections. Our system processes hundreds of billions of transactions annually, continuously learning and adapting to emerging fraud patterns.",
      },
      {
        question: "How long does it take to integrate AOPAY's APIs?",
        answer:
          "Integration timelines vary based on complexity, but most neo banks complete basic payment processing integration within 2-4 weeks. Our pre-built SDKs, comprehensive documentation, sandbox environment, and dedicated integration support team help accelerate implementation. For complex integrations involving multiple APIs and custom workflows, typical timelines range from 6-12 weeks including testing and compliance certification.",
      },
    ],
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Built to Scale with Your Neo Bank",
      heading2Para:
        "As your digital bank grows from serving hundreds to millions of customers, AOPAY's infrastructure scales seamlessly with your business. Our platform is engineered to handle increasing transaction volumes, support additional payment channels and banking products, and expand into new markets without requiring architecture changes.",
      points: [
        {
          heading3: "Grow Without Limitations",
          heading3Para:
            "Start by accepting basic deposits and transfers, then progressively add UPI payments, international remittances, lending products, investment services, and cryptocurrency integration as your customer base grows. AOPAY's modular API design ensures you only pay for what you use while maintaining the flexibility to activate new features instantly.",
        },
        {
          heading3: "Global Expansion Made Simple",
          heading3Para:
            "When you're ready to expand internationally, AOPAY supports multi-currency accounts, cross-border payments, and local payment methods in over 50 countries. Our compliance framework helps you meet regulatory requirements in new markets, from PSD2 in Europe to RBI guidelines in India.",
        },
        {
          heading3: "Future-Proof Technology",
          heading3Para:
            "Our platform evolves with the digital banking industry. As new payment technologies emerge – whether Open Banking APIs, Central Bank Digital Currencies, or decentralized finance integrations – AOPAY provides early access to cutting-edge capabilities that keep your neo bank competitive.",
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
      heading2: "EasyIntegration with Your Business Tools",
      heading2Para:
        "Connect our Vendor Payment API with your existing enterprise software, ERP systems, and accounting platforms for unified payment operations.",
      points: [
        {
          heading3: "ERP Integration",
          heading3Para:
            "Direct integration with major ERP systems including SAP, Oracle, Microsoft Dynamics, and NetSuite for automated vendor payment processing and reconciliation.",
        },

        {
          heading3: "Accounting Software Connectivity",
          heading3Para:
            "Seamless sync with QuickBooks, Xero, FreshBooks, and Tally for real-time financial data synchronization and automated bookkeeping.",
        },
        {
          heading3: "Custom System Integration",
          heading3Para:
            "Flexible API architecture supports integration with proprietary systems, legacy platforms, and custom-built applications through RESTful APIs and webhooks.",
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
          Maximize Conversion with Intelligent Banking APIs
        </h2>
        <p className="text-xl mb-4 text-gray-700">
          Accept deposits, process payments, and verify customers in real-time
          with AOPAY's comprehensive API platform designed specifically for neo
          banks and digital banking institutions. AOPAY infrastructure is
          engineered to increase conversion rates at every touchpoint – from
          seamless account opening and instant KYC verification to optimized
          payment flows and intelligent fraud prevention.
        </p>
        <p className="text-xl mb-4 text-gray-700">
          Whether you're launching a new digital bank or scaling an existing neo
          banking platform, AOPAY provides the banking APIs, payment processing
          infrastructure, and verification solutions to compete with traditional
          banks while delivering superior customer experiences.
        </p>
      </section>
    <EssentialBankingAPIs/>
      <DigitalBankingExperience/>
      <FraudDetectionSection/>
      <SmartPaymentAcceptance/>
      <NeoBankingSolutions/>
      <WhyNeoBanksChooseAOPAY/>
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints} />
      <BuildDigitalBankWithAOPAY/>
      <ContentWithDescriptivePoints content={content} />
      <FAQSection faqContent={faqContent} />
      <BuildFutureBanking/>
      <TransformNeoBank/>
    </>
  );
};

export default NeoBankingSolution;
