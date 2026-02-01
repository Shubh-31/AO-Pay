import { PaymentHead, FAQSection, GetStarted } from "@/sections/mySection";

import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";

import { EWalletFeaturesSection } from "@/sections/EWallet/EWalletFeaturesSection";
import { EWalletApiSection } from "@/sections/EWallet/EWalletAPISection";
import { EWalletMonetizationSection } from "@/sections/EWallet/EWalletMonetizationSection";

export const metadata = {
  title: "E-Wallet API | Digital Wallet Payment Integration | AoPay",
  description:
    "Integrate digital wallet with wallet creation, top-up, and P2P transfers.",
  keywords:
    "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/wallet-payment-api",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "Digital E-Wallet API for Secure Digital Transactions | AOPAY",
    description:
      "Transfer money securely and instantly with AOPay money transfer Solutions. Quick, easy, and hassle-free.",
    url: "https://aopay.in/wallet-payment-api",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/wallet-api-og.jpg",
        width: 1200,
        height: 630,
        alt: "AOPay Money Transfer Banner",
      },
    ],
  },
};

const EWallet = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/wallet-payment-api",
    telephone: "011-42151216",

    description:
      "Cheapest E-Wallet solution in India for secure digital payments, quick transfers, easy wallet loading, multi-payment options, and reliable 24/7 support.",

    knowsAbout: [
      "White Label E-Wallet Solution",
      "Online E-Wallet Solution",
      "E-Wallet Provider Near Me",
      "Best E-Wallet Solution Provider in India",
      "Digital E-Wallet Services",
      "E-Wallet System for Small Businesses",
      "Instant E-Wallet Payments Solution",
      "Affordable E-Wallet for Small Businesses",
      "E-Wallet with Lowest Fees in India",
      "Digital Wallet for Merchants",
      "Digital E-Wallet Solution for Local Businesses",
      "E-Wallet Payment Collection for Shops",
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
    title: "White Label E-Wallet API for Secure Digital Money Management",
    subTitle:
      "Complete Digital Wallet Solution for Marketplaces, Fintech Apps & Platforms | Build Custom Wallets with Single Payouts, Bulk Payments, Wallet-to-Wallet Transfers & QR Code Payments | Secure, Scalable, Developer-First API",
    imgSrc: "/assets/EWallet/Final.png",
    alt: "Secure money transfer API enabling instant fund transfers between bank accounts.",
    video: false,
    btn1: "Explore Wallet",
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
      heading2: "Tailored Digital Wallet App Solution For Every Industry",

      points: [
        {
          heading3: "For Marketplaces & E-commerce",
          heading3Para:
            "Enable seamless buyer-seller transactions with marketplace wallets, escrow management, instant settlements, and multi-party payment splits for commissions.",
          imgSrc:
            "/assets/EWallet/Tailored Wallet Solutions for Every Industry/For Marketplaces & E-commerce.png",
        },

        {
          heading3: "For Fintech & Neo-Banking",
          heading3Para:
            "Launch full-featured digital wallets for neo-banks with savings, investments, bill payments, and peer-to-peer transfer capabilities.",
          imgSrc:
            "/assets/EWallet/Tailored Wallet Solutions for Every Industry/For Fintech & Neo-Banking.png",
        },
        {
          heading3: "For Gig Economy Platforms",
          heading3Para:
            "Provide instant earnings access for drivers, delivery partners, and freelancers with flexible payout options and low-fee transfers.",
          imgSrc:
            "/assets/EWallet/Tailored Wallet Solutions for Every Industry/For Gig Economy Platforms.png",
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
        question: "How does the E-Wallet API work?",
        answer:
          "AOPAY E-Wallet solution allows you to create and manage digital wallets for your users programmatically. Through simple REST API calls, you can create wallets, process top-ups, execute transfers between wallets, process withdrawals to bank accounts, and manage all wallet operations with real-time balance updates and transaction notifications.",
      },
      {
        question: "What types of wallets can I create?",
        answer:
          "You can create personal wallets for consumers, business wallets for merchants, royalty point wallets, corporate expense wallets, and specialized wallets for specific use cases like gig economy earnings or marketplace transactions.",
      },
      {
        question: "How secure are the wallet transactions?",
        answer:
          "Security is paramount in our wallet infrastructure. We provide PCI DSS Level 1 compliance, end-to-end encryption, two-factor authentication, fraud detection with machine learning, AML monitoring, and comprehensive audit trails for all transactions. All sensitive data is encrypted and stored in secure, compliant infrastructure.",
      },
      {
        question: "Can users top-up wallets and withdraw funds?",
        answer:
          "Yes, our API supports multiple top-up methods including credit/debit cards, bank transfers, UPI, and third-party payment integrations. Users can withdraw funds to their linked bank accounts, cards, or other wallets with instant or scheduled processing options.",
      },
      {
        question: "Does it support wallet-to-wallet transfers?",
        answer:
          "Yes, our platform enables instant wallet-to-wallet transfers within your ecosystem. Users can send money to other wallet users, request payments, split bills, and perform peer-to-peer transactions with real-time balance updates and notifications.",
      },
    ],
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2:
        "AOPAY: Secure Enterprise E-Wallet Solution For Businesses & Merchants",
      heading2Para:
        "Build and launch your own digital wallet platform with our comprehensive digital wallet designed specifically for fintech companies, marketplaces, gig economy platforms, and entertainment apps requiring secure, scalable, and feature-rich wallet capabilities.",
      points: [
        {
          heading3: "Complete Wallet Management System",
          heading3Para:
            "Create and manage digital wallets for users, merchants, and businesses. Support loyalty points, and virtual balances with real-time synchronization across all channels.",
          imgSrc:
            "/assets/EWallet/Enterprise Digital Wallet Infrastructure/Complete Wallet Management System.png",
        },

        {
          heading3: "Multi-Channel Payment Processing Wallet",
          heading3Para:
            "Enable wallet top-ups via cards, bank transfers, and third-party integrations. Process wallet-to-wallet transfers, QR code payments, payment links, and instant withdrawals to bank accounts.",
          imgSrc:
            "/assets/EWallet/Enterprise Digital Wallet Infrastructure/Multi-Channel Payment Processing.png",
        },
        {
          heading3: "White-Label Digital Wallet Solution",
          heading3Para:
            "Launch branded wallet experiences for your platform with customizable UI, workflows, and business logic. Perfect for marketplaces, neo-banks, and loyalty platforms requiring unique wallet features.",
          imgSrc:
            "/assets/EWallet/Enterprise Digital Wallet Infrastructure/White-Label Wallet Solutions.png",
        },

        {
          heading3: "Real-Time Balance & Transaction Management",
          heading3Para:
            "Instant balance updates, transaction notifications, and real-time settlement capabilities. Support for hold amounts, pending transactions, and automated reconciliation across multiple wallet accounts.",
          imgSrc:
            "/assets/EWallet/Enterprise Digital Wallet Infrastructure/Real-Time Balance & Transaction Management.png",
        },
        {
          heading3: "Compliance & Security Built-In",
          heading3Para:
            "KYC/KYB verification, AML monitoring, fraud detection, and regulatory compliance features integrated into wallet operations. PCI DSS compliant infrastructure for secure payment processing.",
          imgSrc:
            "/assets/EWallet/Enterprise Digital Wallet Infrastructure/Compliance & Security Built-In.png",
        },

        {
          heading3: "Developer-Friendly Integration",
          heading3Para:
            "RESTful APIs, comprehensive documentation, SDKs for major platforms, webhook notifications, and sandbox environment for rapid wallet feature development and testing.",
          imgSrc:
            "/assets/EWallet/Enterprise Digital Wallet Infrastructure/Developer-Friendly Integration.png",
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
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints} />
      <EWalletFeaturesSection/>
      <EWalletApiSection/>
      <EWalletMonetizationSection/>
      <ContentWithDescriptivePoints content={content} />
      <FAQSection faqContent={faqContent} />
    </>
  );
};

export default EWallet;
