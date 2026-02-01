import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import { PaymentHead, FAQSection, GetStarted } from "@/sections/mySection";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { HeadingSubheadingSection } from "@/sections/HeadingSubheadingSection";
import PayoutApiFeatures from "@/sections/PaymentSettlement/PayoutAPIFeatures";
import EnterprisePaymentInfra from "@/sections/KYB/EnterprisePaymentInfra";
import CompletePaymentPlatform from "@/sections/PaymentSettlement/CompletePaymentPlatform";

export const metadata = {
  title: "Best Payment Settlement Solutions | AOPAY",
  description:
    "Enable instant payment settlements with AoPay's real-time solution. T+0 settlements, automated reconciliation, split settlements, rolling reserves for marketplaces and platforms.",
  keywords:
    "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/instant-payment-settlement-solutions",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "Instant Payment Settlement Solution | Real-time Settlement | AoPay",
    description:
      "Enable instant T+0 settlements with automated reconciliation and split settlements.",
    url: "https://aopay.in/instant-payment-settlement-solutions",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/og-image.jpg",
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

const PaymentSettlement = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/instant-payment-settlement-solutions",
    telephone: "011-42151216",
    description:
      "Cheapest Payment Settlement solution in India for fast, secure, and seamless fund transfers with real-time tracking, automated reconciliation, and 24/7 support.",
    serviceType: [
      "White Label Payment Settlement Solutions",
      "Online Payment Confirmation and Settlement Tracking Solution",
      "Payment Settlement Solutions for Enterprises Provider Near Me",
      "Best Payment Settlement Solutions Provider in India",
      "Integrated ERP and Treasury Payment Settlement Automation",
      "Secure Payment Settlement with Fraud Detection and Reporting",
      "Cross-border and Multi-currency Payment Settlement Services",
      "Affordable Real-time Corporate and B2B Payment Settlement Solutions",
      "Payment Settlement Solutions for Businesses in India",
      "Automated Digital Payment Settlement and Reconciliation Services Provider",
      "Digital Payout Solution for Local Businesses",
      "Payment Clearing and Settlement Service",
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
      "Automated Payment Settlement Solutions for Fast, Secure Growing Businesses in India",
    subTitle:
      "Accelerate payment settlements with automated reconciliation, instant fund transfers, and real-time reporting. Reduce settlement cycles and improve cash flow visibility with intelligent payment settlement infrastructure.",
    imgSrc: "/assets/Payment Settlement.png",
    alt: "Secure money transfer API enabling instant fund transfers between bank accounts.",
    video: false,
    btn1: "Get Started Now",
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
      heading2: "Build Your Payment Processing Business with AOPAY",
      heading2Para:
        "Beyond settlement APIs, AOPAY provides a complete payment processing platform that enables you to launch your own Payment Service Provider (PSP) business. Offer merchant payment processing for both online and in-store transactions with our white-label solution.",
      points: [
        {
          heading3: "Merchant Payment Acceptance",
          heading3Para:
            "Enable businesses to accept secure online payments via credit and debit cards, bank transfers, and digital wallets. Support POS terminals and QR code payments for brick-and-mortar stores.",
          imgSrc:
            "/assets/PaymentSettlement/Build Your Payment Processing Business with AOPAY/Merchant Payment Acceptance.png",
        },

        {
          heading3: "Customizable Payment Gateway",
          heading3Para:
            "Launch your branded payment gateway with hosted payment pages, host-to-host integration, and customizable checkout experiences for seamless transactions.",
          imgSrc:
            "/assets/PaymentSettlement/Build Your Payment Processing Business with AOPAY/Customizable Payment Gateway.png",
        },
        {
          heading3: "INR-Currency Processing",
          heading3Para:
            "Support INR currency with real-time, letting merchants accept payments and process transactions effortlessly.",
          imgSrc:
            "/assets/PaymentSettlement/Build Your Payment Processing Business with AOPAY/INR-Currency Processing.png",
        },
        {
          heading3: "Comprehensive Merchant Portal",
          heading3Para:
            "Provide merchants with a powerful dashboard for transaction monitoring, balance management, store administration, and automated settlement withdrawals.",
          imgSrc:
            "/assets/PaymentSettlement/Build Your Payment Processing Business with AOPAY/Comprehensive Merchant Portal.png",
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
      heading2: "Why Businesses Choose AOPAY Settlement API",

      points: [
        {
          heading3: "Accelerated Time-to-Market",
          heading3Para:
            "Launch your payout solution in days instead of months with our pre-developed backend, ready-made dashboard, and mobile applications. Focus on your core business while we handle the payment infrastructure.",
          imgSrc:
            "/assets/PaymentSettlement/Why Businesses Choose AOPAY Settlement API/Accelerated Time-to-Market Solutions.png",
        },
        {
          heading3: "Cost-Effective Solution",
          heading3Para:
            "Eliminate the need to build payment infrastructure from scratch. Save on development costs, reduce maintenance overhead, and avoid lengthy certification processes with our ready-to-deploy platform.",
          imgSrc:
            "/assets/PaymentSettlement/Why Businesses Choose AOPAY Settlement API/Cost-Effective Solution.png",
        },
        {
          heading3: "Scalable & Reliable",
          heading3Para:
            "Handle growing transaction volumes effortlessly with our high-performance infrastructure. From startups to enterprises, our API scales with your business needs without compromising on speed or security.",
          imgSrc:
            "/assets/PaymentSettlement/Why Businesses Choose AOPAY Settlement API/Scalable & Reliable.png",
        },
        {
          heading3: "Regulatory Compliance",
          heading3Para:
            "Stay compliant with PCI DSS, GDPR, PSD2, and local regulations. Our solution includes built-in compliance features and regular security audits to protect your business and customers.",
          imgSrc:
            "/assets/PaymentSettlement/Why Businesses Choose AOPAY Settlement API/Regulatory Compliance.png",
        },
        {
          heading3: "Revenue Optimization",
          heading3Para:
            "Maximize profitability with flexible fee structures, personalized pricing models, and transparent transaction cost management. Create segment-based tariffs to attract and retain different customer types.",
          imgSrc:
            "/assets/PaymentSettlement/Why Businesses Choose AOPAY Settlement API/Revenue Optimization.png",
        },
        {
          heading3: "24/7 Technical Support",
          heading3Para:
            "Access round-the-clock technical support, dedicated account management, and continuous platform updates. Our team ensures your payment operations run smoothly at all times.",
          imgSrc:
            "/assets/PaymentSettlement/Why Businesses Choose AOPAY Settlement API/Support.png",
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
        question: "What is a Payment Settlement API?",
        answer:
          "A Payment Settlement API is a secure interface that enables businesses to automate fund transfers to multiple recipients. It facilitates bulk payouts, vendor payments, payroll disbursements, and customer refunds through bank accounts, UPI, and digital wallets using protocols like NEFT, RTGS, and IMPS.",
      },
      {
        question: "How long does it take to process payouts?",
        answer:
          "AOPAY Payment Settlement API supports instant payouts via IMPS and UPI (within seconds), same-day settlements via RTGS, and next-day processing via NEFT. Processing speed depends on the chosen transfer method and banking network availability.",
      },
      {
        question: "Is the Payment Settlement API secure?",
        answer:
          "Yes, our Payment Settlement API is PCI DSS compliant and employs bank-grade encryption, two-factor authentication (2FA), and comprehensive fraud monitoring. All transactions are processed through secure channels with complete audit trails and reconciliation features.",
      },
      {
        question: "Can I process bulk payouts through the API?",
        answer:
          "Absolutely. The API supports unlimited bulk payouts for vendor payments, salary disbursements, affiliate commissions, and customer refunds. You can process thousands of transactions in a single API call with automated reconciliation and settlement tracking.",
      },
      {
        question: "What payment methods are supported?",
        answer:
          "The Payment Settlement API supports multiple disbursement methods including bank account transfers (NEFT/RTGS/IMPS), UPI payments, digital wallet transfers, and card settlements. It also generates payment links for flexible recipient options.",
      },
      {
        question: "Who can benefit from using a Payout API?",
        answer:
          "Marketplaces, fintech companies, payment gateways, e-commerce platforms, gig economy platforms, insurance companies, SaaS providers, accounting platforms, and any business requiring automated vendor payments, payroll processing, or customer refunds can benefit from our payout API.",
      },
      {
        question: "How do I integrate the Payment Settlement API?",
        answer:
          "Integration is straightforward with our RESTful API, comprehensive documentation, and SDKs for multiple programming languages. You can test in our sandbox environment and typically go live within days. Our technical team provides full support throughout the integration process.",
      },
      {
        question: "What are the pricing and transaction fees?",
        answer:
          "Our pricing model is flexible and based on transaction volume, payment methods, and business requirements. We offer competitive per-transaction fees with no hidden charges. Contact our sales team for a customized pricing plan tailored to your needs.",
      },
    ],
  };

 

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Payment Settlement API Use Cases Across Industries",
      heading2Para:
        "From marketplaces to fintech platforms, our payout API serves diverse business models with automated disbursement solutions tailored to your industry needs.",
      points: [
        {
          heading3: "Vendor & Supplier Payments",
          heading3Para:
            "Automate accounts payable and streamline vendor settlements for e-commerce marketplaces, B2B platforms, and supply chain businesses.",
          imgSrc:
            "/assets/PaymentSettlement/Payment Settlement API Use Cases Across Industries/Vendor & Supplier Payments.png",
        },
        {
          heading3: "Payroll Disbursements",
          heading3Para:
            "Process employee salaries, contractor payments, and commission payouts with instant or scheduled bulk transfers directly to bank accounts.",
          imgSrc:
            "/assets/PaymentSettlement/Payment Settlement API Use Cases Across Industries/Payroll Disbursements.png",
        },
        {
          heading3: "Customer Refunds",
          heading3Para:
            "Issue instant refunds to customers via their preferred payment method—bank account, UPI, wallet, or original payment source.",
          imgSrc:
            "/assets/PaymentSettlement/Payment Settlement API Use Cases Across Industries/Customer Refunds.png",
        },

        {
          heading3: "Marketplace Seller Payments",
          heading3Para:
            "Automatically settle payments to sellers and merchants on your platform with configurable payout schedules and fee deductions.",
          imgSrc:
            "/assets/PaymentSettlement/Payment Settlement API Use Cases Across Industries/Marketplace Seller Payments.png",
        },
        {
          heading3: "Gig Economy Disbursements",
          heading3Para:
            "Enable instant payouts for delivery partners, ride-share drivers, freelancers, and on-demand service providers after job completion.",
          imgSrc:
            "/assets/PaymentSettlement/Payment Settlement API Use Cases Across Industries/Gig Economy Disbursements.png",
        },
        {
          heading3: "Employee Reimbursements",
          heading3Para:
            "Simplify expense reimbursements with automated approval workflows and instant fund transfers to employee accounts.",
          imgSrc:
            "/assets/PaymentSettlement/Payment Settlement API Use Cases Across Industries/Employee Reimbursements.png",
        },
        {
          heading3: "Insurance Claim Settlements",
          heading3Para:
            "Expedite insurance payouts and claim settlements with secure, verified transfers to policyholders and beneficiaries.",
          imgSrc:
            "/assets/PaymentSettlement/Payment Settlement API Use Cases Across Industries/Insurance Claim Settlements.png",
        },
        {
          heading3: "Affiliate & Partner Commissions",
          heading3Para:
            "Automate commission payouts to affiliates, influencers, and business partners based on performance metrics and payout cycles.",
          imgSrc:
            "/assets/PaymentSettlement/Payment Settlement API Use Cases Across Industries/Affiliate & Partner Commissions.png",
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
        heading2: "Developer-Friendly API Integration",
        heading2Para:
          "AOPAY Payment Settlement API is designed with developers in mind, offering comprehensive documentation, SDKs, and sandbox environments for seamless integration into your existing systems.",
        points: [
          {
            heading3: "RESTful API Architecture",
            heading3Para:
              "Modern REST API with JSON responses, OAuth 2.0 authentication, and webhook notifications for real-time event updates.",
            imgSrc:
              "/assets/PaymentSettlement/Developer-Friendly API Integration/RESTful API Architecture.png",
          },

          {
            heading3: "Comprehensive Documentation",
            heading3Para:
              "Detailed API reference, integration guides, code samples, and best practices to accelerate your development process.",
            imgSrc:
              "/assets/PaymentSettlement/Developer-Friendly API Integration/Comprehensive Documentation.png",
          },
          {
            heading3: "Sandbox Environment",
            heading3Para:
              "Test your integration thoroughly with our sandbox environment before going live. No risk, no real money involved.",
            imgSrc:
              "/assets/PaymentSettlement/Developer-Friendly API Integration/Sandbox Environment.png",
          },
          {
            heading3: "Multiple SDKs & Libraries",
            heading3Para:
              "Pre-built SDKs for popular programming languages including Node.js, Python, PHP, Java, and Ruby for faster implementation",
            imgSrc:
              "/assets/PaymentSettlement/Developer-Friendly API Integration/Multiple SDKs & Libraries.png",
          },
          {
            heading3: "Expert Development Support",
            heading3Para:
              "Get access to our experienced development team for technical consultation, integration assistance, and ongoing support. We're here to ensure your payment settlement API integration is smooth and successful.",
            imgSrc:
              "/assets/PaymentSettlement/Developer-Friendly API Integration/Expert Development Support.png",
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
          Seamless, Secure, and Real-Time Payment Settlements for Businesses
        </h2>
        <p className="text-xl mb-4 text-gray-700">
          AOPAY's Payment Settlement API empowers marketplaces, fintech
          companies, payment gateways, SaaS platforms, and enterprises to send
          single payouts, process bulk payments, and generate payout links with
          enterprise-grade security and real-time processing capabilities.
        </p>
        <p className="text-xl mb-4 text-gray-700">
          Whether you're onboarding a new corporate client, conducting ongoing
          due diligence, or meeting regulatory requirements, our KYB API
          automates the entire verification workflow.
        </p>
      </section>
      <section className="py-20 px-6  mx-auto text-center max-w-5xl">
        <h2 className="text-3xl mb-4">
          Why Choose AOPAY Payment Settlement API?
        </h2>
        <p className="text-xl mb-4 text-gray-700">
          Our API handles over 230 million transactions per day with a capacity
          of 2,700 TPS (transactions per second), ensuring your business scales
          effortlessly. With PCI DSS compliance, bank-grade encryption, and
          seamless integration, you can launch your payout solution in days, not
          months.
        </p>
        <p className="text-xl mb-4 text-gray-700">
          Whether you're onboarding a new corporate client, conducting ongoing
          due diligence, or meeting regulatory requirements, our KYB API
          automates the entire verification workflow.
        </p>
      </section>
      <PayoutApiFeatures />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints} />
      <ContentWithDescriptivePoints content={content} />
      <EnterprisePaymentInfra />
      <HeadingSubheadingSection HeadingSubheadings={HeadingSubheadings} />
      <H2H3WithPoints content={contentWithHeadingsAndPoints2} />
      <CompletePaymentPlatform />
      <FAQSection faqContent={faqContent} />
    </>
  );
};

export default PaymentSettlement;
