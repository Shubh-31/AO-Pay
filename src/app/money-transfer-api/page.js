import { ExploreProducts } from "@/components/ExploreProducts";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import {
  PaymentHead,
  ToolsSection,
  BenefitsSection,
  GetStarted,
  FeaturesSection,
  FAQSection,
} from "@/sections/mySection";
import { CardWithFeature } from "@/sections/CardWithFeature";
import { StepsWithExplanation } from "@/sections/StepsWithExplanation";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { BookOpen, CheckCircle2, Code, Monitor } from "lucide-react";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import DMTUseCases from "@/sections/DMTUseCases";
import TransferServicesSection from "@/sections/TransferServiceSection";
import AnalyticsSection from "@/sections/AnalyticsSection";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";

import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "DMT API for Instant Money Transfers | AOPAY",
  description:
    "Enable instant domestic money transfers with AoPay's DMT API. Support IMPS, NEFT, RTGS with real-time tracking. Ideal for fintech, logistics, and remittance businesses.",
  keywords:
    "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/money-transfer-api",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "DMT API | Domestic Money Transfer Solution | AoPay",
    description:
      "Enable instant money transfers with IMPS, NEFT, and RTGS support.",
    url: "https://aopay.in/money-transfer-api/",
    siteName: "AOPay",
    locale: "en_IN",
    images: [
      {
        url: "https://aopay.in/images/dmt-api-og.jpg",
        width: 1200,
        height: 630,
        alt: "AOPay Money Transfer Banner",
      },
    ],
  },
};

const MoneyTransfer = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/money-transfer-api",
    telephone: "011-42151216",

    description:
      "Cheapest Domestic Money Transfer solution in India enabling fast, secure bank-to-bank transfers with instant settlements and dedicated 24/7 support.",

    knowsAbout: [
      "White Label Domestic Money Transfer Solution",
      "Online Fast Money Transfer Solution",
      "Domestic Money Transfer Provider Near Me",
      "Best Domestic Money Transfer Solution Provider in India",
      "Instant Money Transfer Services",
      "Bank to Bank Money Transfer System for Small Businesses",
      "Online Payroll Transfer Solution",
      "Affordable Money Transfer for Small Businesses",
      "Domestic Money Transfer with Lowest Fees in India",
      "Auto Payout Services Provider",
      "Bulk Domestic Money Transfer for Local Businesses",
      "Recurring Domestic Money Transfer Service",
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
    title: "Domestic Money Transfer API for Instant Fund Transfer Across India",
    subTitle:
      "Integrate our comprehensive money transfer solution to allow instant bank transfers, bulk disbursements, and digital wallet transactions. Perfect for banks, fintech companies, and financial platforms requiring reliable money transfer capabilities.",
    imgSrc: "/assets/DMTIntegration/DMTDashboard.png",
    alt: "Secure money transfer API enabling instant fund transfers between bank accounts.",
    video: false,
    btn1: "Get Demo",
    btn1Link: "/contact-us",
    btn2: "Request API Access",
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

  const contentWithHeadingsAndPoints = [
    {
      heading2: "AOPAY Instant Money Transfer API Solution For Businesses",
      heading2Para:
        "AOPAY secure domestic money transfer infrastructure allows seamless integration of financial transfer services. Whether you're building a banking app, fintech platform, or enterprise solution, our API provides the foundation for reliable money movement.",
      points: [
        {
          imgSrc:
            "/assets/DMTIntegration/AOPAYCompleteMoneyTransferAPISolution/InstantBankTransfers.png",
          heading3: "Instant Bank Transfers API",
          heading3Para:
            "Enable real-time money transfers to any bank account using IMPS, NEFT, and RTGS networks with instant confirmation and status updates.",
        },
        {
          imgSrc:
            "/assets/DMTIntegration/AOPAYCompleteMoneyTransferAPISolution/BulkDisbursementProcessing.png",
          heading3: "Bulk Disbursement Processing API",
          heading3Para:
            "Process thousands of transactions simultaneously with our bulk transfer API. Perfect for salary disbursements, vendor payments, and mass distributions.",
        },
        {
          imgSrc:
            "/assets/DMTIntegration/AOPAYCompleteMoneyTransferAPISolution/DigitalWalletIntegration.png",
          heading3: "Digital Wallet Integration",
          heading3Para:
            "Support transfers to popular digital wallets and UPI-enabled platforms with unified API endpoints and consistent response formats.",
        },
        {
          imgSrc:
            "/assets/DMTIntegration/AOPAYCompleteMoneyTransferAPISolution/TransferLinkGeneration.png",
          heading3: "Money Transfer Link Generation API",
          heading3Para:
            "Create secure payment links for recipients to receive funds directly, eliminating the need for complex account details and reducing transfer friction.",
        },
      ],
    },
  ];

  const features2 = {
    heading2: "Developer-Friendly Money Transfer API Integration",
    description:
      "Designed with developers in mind, our API offers comprehensive documentation, testing environments, and flexible integration options.",
    points: [
      {
        imgSrc:
          "/assets/DMTIntegration/DeveloperFriendlyIntegrationExperience/RESTfulAPIArchitecture.png",
        heading3: "RESTful API Architecture",
        type: "paragraph",
        description:
          "Clean, intuitive REST API design with JSON responses, making integration straightforward across different programming languages and frameworks.",
      },
      {
        imgSrc:
          "/assets/DMTIntegration/DeveloperFriendlyIntegrationExperience/ComprehensiveSDKSupport.png",
        heading3: "Comprehensive SDK Support",
        type: "list",
        features: [
          "Native SDKs for PHP, Python, Java, Node.js, and .NET",
          "Detailed code examples and implementation guides",
          "Interactive API explorer for testing endpoints",
          "Postman collections for quick integration testing",
        ],
      },
      {
        imgSrc:
          "/assets/DMTIntegration/DeveloperFriendlyIntegrationExperience/SandboxTestingEnvironment.png",
        heading3: "Sandbox Testing Environment",
        type: "list",
        features: [
          "Complete testing environment with simulated responses",
          "Test various scenarios including success and failure cases",
          "No real money transactions during development",
          "Instant approval for sandbox access",
        ],
      },
      {
        imgSrc:
          "/assets/DMTIntegration/DeveloperFriendlyIntegrationExperience/WebhookIntegration.png",
        heading3: "Webhook Integration",
        type: "list",
        features: [
          "Real-time status updates through configurable webhooks",
          "Retry mechanisms for failed webhook deliveries",
          "Signature verification for security",
          "Custom endpoint configuration support",
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
      heading2:
        "Optimized Performance & Scalable Money Transfer Infrastructure",
      heading2Para:
        "Handle high-volume transactions with confidence using our scalable infrastructure designed for enterprise workloads.",
      points: [
        {
          heading3: "High-Performance Processing",
          heading3Para:
            "Process up to 10,000 transactions per minute with average response times under 3 seconds, ensuring your applications remain responsive during peak loads.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/HighPerformanceProcessing.png",
        },

        {
          heading3: "Retail Money Transfer",
          heading3Para:
            "Transform retail outlets into mini-banks with our money transfer solution. Enable cash-to-bank transfers, remittance services, and financial inclusion for unbanked customers across rural and urban areas.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/RetailMoneyTransfer.png",
        },
        {
          heading3: "Auto-Scaling Infrastructure",
          heading3Para:
            "Our cloud-native architecture automatically scales to handle traffic spikes, ensuring consistent performance regardless of transaction volume.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/AutoScalingInfrastructure.png",
        },
        {
          heading3: "Global Load Balancing",
          heading3Para:
            "Distributed infrastructure with multiple data centers ensures low latency and high availability for users across different geographical locations.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/GlobalLoadBalancing.png",
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
      heading2: "Advanced Money Transfer API Security Features",
      heading2Para:
        "AOPAY's domestic money transfer API incorporates enterprise-grade security measures to protect every transaction and ensure compliance with banking regulations and data protection standards.",
      points: [
        {
          heading3: "256-bit SSL Encryption",
          heading3Para:
            "All DMT API communications protected with military-grade encryption ensuring complete data security during transmission.",
        },
        {
          heading3: "Real-Time Fraud Detection",
          heading3Para:
            "AI-powered fraud prevention systems monitor transactions 24/7 to detect suspicious activities and prevent unauthorized transfers.",
        },
        {
          heading3: "RBI Compliance",
          heading3Para:
            "Fully compliant with Reserve Bank of India guidelines, KYC requirements, and anti-money laundering regulations.",
        },
      ],
    },
  ];

  const upiFeaturesData = {
    title:
      "Money Transfer API: Advanced Security & Integrated Compliance Features",
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
          "IP whitelisting and access control tools",
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
      heading2: "Fast API Implementation & Reliable Support",
      heading2Para:
        "Get your money transfer services operational quickly with our streamlined onboarding and dedicated support team.",
      points: [
        {
          heading3: "Rapid Integration Process",
          heading3Para:
            "Most integrations complete within 2-3 business days with our comprehensive documentation, testing tools, and responsive developer support.",
          imgSrc:
            "/assets/DMTIntegration/FastImplementation&Support/RapidIntegrationProcess.png",
        },
        {
          heading3: "24/7 Technical Support",
          heading3Para:
            "Access round-the-clock technical assistance through multiple channels including email, chat, phone, and dedicated channels for enterprise clients.",
          imgSrc:
            "/assets/DMTIntegration/FastImplementation&Support/24x7TechnicalSupport.png",
        },
        {
          heading3: "Dedicated Account Management",
          heading3Para:
            "Assigned account managers provide ongoing support, integration guidance, and help optimize your implementation for maximum efficiency and cost-effectiveness.",
          imgSrc:
            "/assets/DMTIntegration/FastImplementation&Support/DedicatedAccountManagement.png",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question:
          "How quickly can I integrate the Domestic Money Transfer API?",
        answer:
          "Integration typically takes 2-3 business days. Our comprehensive documentation, sandbox environment, SDKs, and dedicated support team ensure a smooth and efficient integration process.",
      },
      {
        question: "What types of transfers are supported?",
        answer:
          "We support IMPS (instant), NEFT (standard), RTGS (high-value), UPI transfers, and digital wallet disbursements. Both single and bulk transfer options are available.",
      },
      {
        question: "Is the API secure for financial transactions?",
        answer:
          "Yes, our API uses bank-grade security with end-to-end encryption, multi-factor authentication, fraud detection, and meets all RBI compliance requirements for domestic transfers.",
      },
      {
        question: "What is the maximum transaction limit?",
        answer:
          "Transaction limits vary by transfer method: IMPS up to ₹5 lakhs, NEFT no limit, RTGS minimum ₹2 lakhs. Custom limits can be configured based on your business requirements.",
      },
      {
        question: "Do you provide webhook notifications?",
        answer:
          "Yes, we provide real-time webhook notifications for all transaction status updates including success, failure, and pending states with retry mechanisms for reliability.",
      },
      {
        question: "Can I process bulk transfers?",
        answer:
          "Yes, our bulk transfer API can process up to 10,000 transactions in a single request with CSV upload support and detailed success/failure reporting for each transaction.",
      },
    ],
  };

  

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PaymentHead headerSection={headerContent} />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <CardWithFeature features={features2} />

      <DMTUseCases />
      <FeaturesSection
        img={upiFeaturesData.imgSrc}
        title={upiFeaturesData.title}
        description={upiFeaturesData.description}
        sections={upiFeaturesData.sections}
      />
      <TransferServicesSection />
      <ContentWithDescriptivePoints content={content} />
      <AnalyticsSection />
      <H2DescH3Desc contentWithDescription={material} />
      <FAQSection faqContent={faqContent} />
      <GetStarted
        heading="Ready to Transform Your Money Transfer Operations?"
        subHeading="Launch your money transfer services quickly and securely with AOPAY’s unified API platform."
        btn1="Start Your Integration Today"
      />
   
    </>
  );
};

export default MoneyTransfer;
