import { ExploreProducts } from "@/components/ExploreProducts";

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
import ECommerceCheckoutFlowSection from "@/sections/ECommerceCheckoutFlowSection";
import { HeadingSubheadingSection } from "@/sections/HeadingSubheadingSection";
import EcommerceSolutionsSection from "@/sections/ECommerceSolutionSection";
import ECommerceWhyChooseAOPAY from "@/sections/ECommerceWhyChoseAOPay";
import ECommerceScalePaymentInfrastructure from "@/sections/ECommerceScalePaymentInfrastructure";
import ECommerceExpertSupportSection from "@/sections/ECommerceExpertSupportSection";
import ECommerceTransformPaymentsSection from "@/sections/ECommerceTransformPaymentSection";
import ECommerceLogisticsExpertSupport from "@/sections/ECommerceLogisticsExpertSupport";
import ECommerceLogisticsReadySection from "@/sections/ECommerceLogisticsReadySection";
import ComplianceSection from "@/sections/CorporateTreasury/ComplianceSection";
import FutureReadyTreasury from "@/sections/CorporateTreasury/FutureReadyTreasury";
import Script from "next/script";
import TreasurySolutions from "@/sections/CorporateTreasury/TreasurySolutions";

export const metadata = {
  title: "Digital Corporate Treasury Software & Solutions | AOPAY",
  description:
    "Optimize enterprise treasury with AoPay's solution. Multi-entity cash management, FX hedging, working capital, bank connectivity, liquidity forecasting for large corporations.",
  keywords:
    "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/corporate-treasury-management-solutions",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title:
      "Corporate Treasury Management Solutions | Enterprise Finance | AoPay",
    description:
      "Optimize enterprise treasury with cash management, FX hedging, and liquidity forecasting",
    url: "https://aopay.in/corporate-treasury-management-solutions",

    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/corporate-treasury-og.jpg",
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

const CorporateTreasury = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/corporate-treasury-management-solutions",
    telephone: "011-42151216",
    description:
      "Cheapest banking solutions for corporate treasury & enterprises in India providing secure transactions, cash flow management, instant settlements, and automation.",
    serviceType: [
      "White Label Corporate treasury banking solutions for enterprises",
      "Enterprise payment and disbursement solutions",
      "Cash and liquidity management services for corporations Provider Near Me",
      "Best Digital banking infrastructure provider for corporate treasury in India",
      "FX and hedging banking solutions for enterprises",
      "Digital treasury and liquidity management platforms",
      "Multi-country treasury banking for multinational firms",
      "Affordable Risk and compliance banking services for enterprises",
      "Treasury management banking for multinational firms in India",
      "Auto automated corporate payroll and vendor payments Provider",
      "Enterprise payment processing and disbursement solutions",
      "Corporate cash management software and services",
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
      "Corporate Treasury & Cash Management Solutions for CFOs, Treasurers & Financial Institutions",
    subTitle:
      "Optimize working capital with intelligent treasury management solutions for cash forecasting, liquidity management, and payment optimization. Gain real-time visibility into corporate cash positions and flows.",
    imgSrc: "/assets/Corporate Treasury  Enterprises.png",
    alt: "Secure money transfer API enabling instant fund transfers between bank accounts.",
    video: false,
    btn1: "Contact Sales",
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

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Connected Banking for Unified Treasury Control",
      heading2Para:
        "Break down silos between banking relationships and internal systems with AOPAY's Connected Banking platform. Our Banking solutions integrate directly with your existing ERP, accounting software, and financial planning tools, providing a single source of truth for all treasury data. Real-time bank statement feeds, automated reconciliation, and intelligent cash positioning help treasury teams make informed decisions faster.",
      points: [
        {
          imgSrc:
            "/assets/DMTIntegration/AOPAYCompleteMoneyTransferAPISolution/InstantBankTransfers.png",
          heading3: "Treasury Management System",
          heading3Para:
            "Our Treasury Management solution serves as the central nervous system for corporate finance operations. Manage multiple bank accounts across different institutions, monitor liquidity positions in real-time, and execute sophisticated cash management strategies—all from a unified dashboard. Our system integrates easily with Core Banking Software to provide end-to-end visibility and control.",
        },
        {
          imgSrc:
            "/assets/DMTIntegration/AOPAYCompleteMoneyTransferAPISolution/BulkDisbursementProcessing.png",
          heading3: "Investment & Security Management",
          heading3Para:
            "Optimize idle cash with our FD & RD solution integration. Automatically sweep excess funds into short-term investments and ladder maturities to maintain liquidity while maximizing returns. For high-value transactions requiring security, our ESCROW services provide a trusted third-party mechanism to hold and release funds based on predefined conditions, reducing counterparty risk in complex deals.",
        },
      
      ],
    },
  ];

  const features2 = {
    heading2: "Developer-Friendly Integration Experience",
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
      heading2: "Scalable Solutions for Every Enterprise Stage",

      points: [
        {
          heading3: "Emerging Enterprises",
          heading3Para:
            "Small treasury teams with limited resources benefit from immediate automation. Start with our Payment APIs to eliminate manual payment processing and basic Virtual Account solutions to simplify reconciliation. Our foundational tools typically reduce manual reconciliation time by 70% and eliminate payment errors by up to 90%, freeing your team to focus on strategic activities rather than administrative tasks.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/HighPerformanceProcessing.png",
        },

        {
          heading3: "Mid-Size Corporations",
          heading3Para:
            "Growing businesses face increasing complexity with multiple entities, expanded vendor networks, and cross-border operations. Our Banking solution allows multi-entity cash management and cash pooling strategies, while KYB solutions streamline vendor onboarding and continuous due diligence across your expanding supplier ecosystem. Integration with your existing ERP systems ensures data consistency and reduces duplicate data entry.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/RetailMoneyTransfer.png",
        },
        {
          heading3: "Large Enterprises & Conglomerates",
          heading3Para:
            "Complex organizations with diverse business units require sophisticated treasury infrastructure. Deploy AOPAY Treasury Management System with full Core Banking solution integration for centralized liquidity management across multiple legal entities. Advanced analytics, forecasting models, and scenario planning tools allow strategic decision-making at the CFO level. Support for complex structures including shared service centers, in-house banks, and treasury centers of excellence.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/AutoScalingInfrastructure.png",
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
      heading2: "Identity Verification & Compliance Solutions",
      heading2Para:
        "Ensure regulatory compliance and build trust with comprehensive identity verification:",
      points: [
        {
          heading3: "KYC & KYB Verification",
          heading3Para:
            "KYC and KYB services provide secure identity verification for customers and business partners. Ensure legitimacy, prevent fraud, and meet regulatory standards across different jurisdictions.",
          imgSrc:
            "/assets/ECommerce/Identity Verification & Compliance Solutions/KYC & KYB Verification.png",
        },
        {
          heading3: "CIBIL Credit Scoring",
          heading3Para:
            "Integrate CIBIL credit scoring to assess customer creditworthiness for buy-now-pay-later options, installment plans, or credit-based purchasing programs.",
          imgSrc:
            "/assets/ECommerce/Identity Verification & Compliance Solutions/CIBIL Credit Scoring.png",
        },
        {
          heading3: "RBI Compliance",
          heading3Para:
            "Fully compliant with Reserve Bank of India guidelines, KYC requirements, and anti-money laundering regulations.",
          imgSrc:
            "/assets/ECommerce/Identity Verification & Compliance Solutions/RBI Compliance.png",
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
      heading2: "Automatically Decrease Fraud with Machine Learning",
      heading2Para:
        "Fraud prevention is built into every AOPAY account. AOPAY Radar scores every transaction for risk with machine learning models trained on hundreds of billions of data points. On average, Radar helps businesses reduce fraud by 32%.",
      points: [
        {
          heading3: "Device Fingerprinting",
          heading3Para:
            "Advanced device fingerprinting and proxy detection identify suspicious activities before they impact your business.",
          imgSrc:
            "/assets/DMTIntegration/FastImplementation&Support/RapidIntegrationProcess.png",
        },
        {
          heading3: "Custom Rules Engine",
          heading3Para:
            "Create custom rules and maintain allow and block lists tailored to your business requirements.",
          imgSrc:
            "/assets/DMTIntegration/FastImplementation&Support/24x7TechnicalSupport.png",
        },
        {
          heading3: "Dynamic 3D Secure",
          heading3Para:
            "Intelligent 3D Secure authentication that balances security with user experience.",
          imgSrc:
            "/assets/DMTIntegration/FastImplementation&Support/DedicatedAccountManagement.png",
        },
        {
          heading3: "Advanced Analytics",
          heading3Para:
            "Review queues and advanced fraud insights help you make informed decisions about suspicious transactions.",
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
        question: "What is a corporate treasury management system?",
        answer:
          "A corporate treasury management system is a platform that helps enterprises manage cash flow, liquidity, payments, investments, and financial risk across multiple bank accounts and entities.",
      },
      {
        question: "How do payment solutions benefit corporate treasury teams?",
        answer:
          "Payment solutions automate vendor payments, collections, and reconciliation processes, reducing manual work by up to 80% while providing real-time visibility into cash positions and transaction status.",
      },
      {
        question:
          "What compliance features does AOPAY provide for Indian enterprises?",
        answer:
          "AOPAY offers Aadhaar verification, PAN verification, GST verification, bank account verification, and CIBIL API integration to ensure regulatory compliance and prevent fraud.",
      },
      {
        question: "Can AOPAY integrate with our existing ERP system?",
        answer:
          "Yes, AOPAY's API-first architecture allows seamless integration with major ERP platforms, accounting solution, and custom enterprise systems through REST APIs and webhooks.",
      },
      {
        question:
          "How secure is AOPAY's platform for enterprise treasury operations?",
        answer:
          "AOPAY maintains bank-grade security with end-to-end encryption, multi-factor authentication, role-based access controls, and compliance with RBI guidelines and international security standards.",
      },
    
    ],
  };

  const HeadingSubheadings = [
    {
      heading2: "Maximize Acceptance and Prevent Involuntary Churn",
      heading2Para:
        "AOPAY dynamically optimizes payment authorization across tens of thousands of issuers globally with Adaptive Acceptance. If a payment is declined, we identify the best retry messaging and routing combinations to prevent lost revenue. Payment Acceptance Features:",
      points: [
        {
          heading3: "Intelligent MID and MCC Assignment",
          heading3Para: "Automatic optimization for better approval rates",
          imgSrc:
            "/assets/ECommerce/Maximize Acceptance and Prevent Involuntary Churn/Intelligent MID and MCC Assignment.png",
        },

        {
          heading3: "Direct Card Network Integrations",
          heading3Para: "Reduce processing delays and costs",
          imgSrc:
            "/assets/ECommerce/Maximize Acceptance and Prevent Involuntary Churn/Direct Card Network Integrations.png",
        },
        {
          heading3: "Auto-ISO Optimizations",
          heading3Para: "Smart routing for maximum success rates",
          imgSrc:
            "/assets/ECommerce/Maximize Acceptance and Prevent Involuntary Churn/Auto-ISO Optimizations.png",
        },
        {
          heading3: "Smart Payment Retries",
          heading3Para: "Intelligent retry logic for declined transactions",
          imgSrc:
            "/assets/ECommerce/Maximize Acceptance and Prevent Involuntary Churn/Smart Payment Retries.png",
        },
        {
          heading3: "Card Account Updater",
          heading3Para:
            "Automatic card information updates to prevent subscription failures",
          imgSrc:
            "/assets/ECommerce/Maximize Acceptance and Prevent Involuntary Churn/Card Account Updater.png",
        },
      ],
    },
  ];

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PaymentHead headerSection={headerContent} />
      <TreasurySolutions/>
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints} />
      <ComplianceSection />
      {/* <ECommerceCheckoutFlowSection /> */}
      <ContentWithDescriptivePoints content={content} />
      <FutureReadyTreasury />
      <FAQSection faqContent={faqContent} />
      <GetStarted
        heading="Ready to Optimize Your Corporate Treasury?"
        subHeading="Discover how AOPAY's treasury solutions can streamline your payment operations and enhance financial control. Our enterprise specialists are ready to design a custom implementation tailored to your organization's unique requirements and growth trajectory."
        btn1="Contact Sales"
      />
    </>
  );
};

export default CorporateTreasury;
