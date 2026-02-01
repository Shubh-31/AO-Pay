import { ExploreProducts } from "@/components/ExploreProducts";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import {
  PaymentHead,
  CreditScoreSection,
  VerificationFailure,
  QRPayments,
  GetStarted,
  FeaturesSection,
  FAQSection,
} from "@/sections/mySection";
import { StepsWithExplanation } from "@/sections/StepsWithExplanation";
import { ArrowRight, BookOpen, Video } from "lucide-react";
import Script from "next/script";
import { ArrowRightCircle } from "lucide-react";
import WhyChooseUPI from "@/sections/WhyChooseUPI";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { CardWithFeature } from "@/sections/CardWithFeature";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { HeadingSubheadingSection } from "@/sections/HeadingSubheadingSection";
import SolutionPaymentLink from "@/sections/SolutionPaymentLink";
import PaymentCollectionServices from "@/sections/PaymentCollectionServices";
import BusinessIntelligenceReporting from "@/sections/BusinessIntelligenceReport";
import TrustedByIndustryLeaders from "@/sections/TrustedByIndustryLeaders";
import PaymentProcessingPlatform from "@/sections/PaymentProcessingPlatform";
import QuickIntegration from "@/sections/QuickIntegration";
import TrustedPerformanceMetrics from "@/sections/TrustedPerformanceMetrics";
import QuickIntegrationPaymentAcceptance from "@/sections/QuickIntegrationPaymentAcceptance";
import ComprehensiveIntegrationSupport from "@/sections/ComprehensiveIntegrationSupport";
import TrustedBankingInfrastructure from "@/sections/TrustedBanking";
import FundTransferExample from "@/sections/FundTransferExample";

export const metadata = {
  title: "Connected Banking API for Real-Time Bank Integration | AOPAY",
  description:
    "Access customer financial data securely with AoPay's Connected Banking API. Enable account aggregation, bank statement analysis, consent-based data sharing for lending and wealthtech.",
  keywords:
    "UPI payment gateway, QR code payments, UPI QR code generator, contactless payments, UPI integration, digital payments, AOPay UPI, merchant QR code, Secure Online Payments, Fast UPI Transfer, UPI Transactions, Instant Payments, UPI Money Transfer, Online Payments, UPI Payment App, UPI Payment Solutions, Quick Payment Solutions, Instant Bank Transfer, Digital Wallet UPI, Secure Transactions, UPI Bill Payment, Fast Payment System, Online UPI Transfer, Mobile UPI Payments, Instant Bill Payment, Easy UPI Payments, Pay with UPI, UPI Transfer System, UPI Platform, Secure Payment Gateway, UPI Network, UPI Payment Features, UPI for Businesses, Instant Payment Options, UPI Transaction Speed, Payment Solutions, Instant Fund Transfer, UPI Security, Digital Transactions, Online Money Transfer, Fast Online Payment, UPI Billing, UPI Payment Process, QR Code Payment Collection, Secure QR Payment, Digital Payment Collection, Instant QR Payments, Easy Payment Acceptance, Fast QR Payment, QR Payment System, Mobile Payment Collection, Digital Payment Gateway, Cashless Payment Solutions, Business Payment Collection, Digital Wallet QR, QR Payment App, QR CodeAcceptance, Instant Fund Collection, Payment Gateway QR Code, QR Code Transactions, QR Payment Method, Seamless Payment Collection, QR Payment Solutions, QR Code for Payments, Fast Payment Gateway, QR Payment Technology, QR Collection Solution, Contactless Transaction, Payment Collection App, Instant Payment Gateway, QR Payment Systems for Small Business, Simplified Payments.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/connected-banking-api",
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
      "Access financial data securely with account aggregation and bank statement analysis",
    description:
      "Make easy and secure payments with UPI. Transfer money instantly and enjoy a hassle-free experience.",
    url: "https://aopay.in/connected-banking-api",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/connected-banking-og.jpg",
        width: 1200,
        height: 630,
        alt: "Online UPI Payment Banner",
      },
    ],
  },
};

const PaymentAcceptance = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/connected-banking-api",
    telephone: "011-42151216",
    description:
      "Cheapest Connected Banking API solution in India for secure account linking, real-time transactions, automated banking services, and reliable 24/7 assistance.",
    serviceType: [
      "White Label Connected Banking API Solution",
      "Open Banking Platform Solution",
      "Connected Banking API Provider Near Me",
      "Best Connected Banking API Solution Provider in India",
      "Open Banking Integration API",
      "Connected Banking System for Small Businesses",
      "Connected Banking Solution for Fintechs",
      "Affordable Connected Banking API for Small Businesses",
      "Open Banking API for NBFCs in India",
      "Connected Banking Solution for Digital Lenders",
      "Open Banking API for Payment Aggregators",
      "Banking APIs for Neobanks",
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
      "Connected Banking API Platform - Secure Open Banking Integration Solution",
    subTitle:
      "Transform financial services with our comprehensive Connected Banking. Enable secure bank account connectivity, real-time fund transfers, and seamless financial data integration for modern fintech applications and enterprise solutions.",
    imgSrc: "/assets/ConnectedBanking/ConnectedBanking.png",
    btn1: "Request Live Demo",
    btn1Link: "/contact-us",
   
    alt: "UPI payment API allowing instant peer-to-peer money transfers via mobile apps.",
    video: false,
  };

  const features = [
    {
      icon: "/assets/Payments/QR_Payment/Best_Success_Rate.png",
      title: "Best Success Rates",
      description:
        "Experience best success rate for payment using our solutions",
    },
    {
      icon: "/assets/Payments/QR_Payment/Multiple_UPI_Methods.png",
      title: "Allow Multiple UPI Methods",
      description:
        "Customers can Scan to Pay with their favourite UPI or bank app",
    },
    {
      icon: "/assets/Payments/QR_Payment/Developer_Friendly.png",
      title: "Developer Friendly",
      description: "One SDK to integrate Payment instrument including QR Code",
    },
  ];

  const qrIntent = {
    mainTitle: "QR Intent",
    imgSrc: "/assets/Payments/QR_Payment/QR_2.png",
    alt: "Dynamic QR code payment API for contactless merchant transactions and receipts.",
    content: [
      {
        description:
          "Customer selects his favourite UPI or Bank App to scan QR Code",
      },
      {
        description:
          "UPI app opens checkout page, customer enter the amount and clicks to pay",
      },
      {
        description: "Customer enters the PIN to complete the payment",
      },
      {
        description: "Payment is processed successfully",
      },
    ],
  };

  const qrCollect = {
    mainTitle: "QR Collect",
    imgSrc: "/assets/Payments/QR_Payment/QR_3.png",
    alt: "Unified payment interface API dashboard with transaction analytics and reporting.",
    content: [
      {
        description:
          "Merchant generates a dynamic QR code linked to the payment details during checkout.",
      },
      {
        description:
          "Customer opens their preferred UPI app and scans the merchant's QR code.",
      },
      {
        description:
          "UPI app sends a request with the payment amount and merchant details.",
      },
      {
        description:
          "Customer gets a notification with the payment details from their UPI app.",
      },
      {
        description:
          "Customer confirms the payment and ensures the details are correct within their UPI app.",
      },
      {
        description:
          "To authorize the payment, the customer enters their secure UPI PIN.",
      },
      {
        description:
          "Payment is successfully processed, and the customer is redirected back to the app or website.",
      },
    ],
  };

  const verificationContent1 = {
    para1:
      "AOPay’s cutting-edge technology ensures your QR Code payments are smooth, secure, and hassle-free. By using AOPay App, you'll not see any chances of payment failures, so you can confidently make payments through both static and dynamic QR codes. With AOPay, every transaction is processed reliably and quickly, ensuring a smooth and enjoyable payment experience every time. Whether you’re paying for goods or services, AOPay guarantees your QR Code payments are handled with the utmost efficiency and security.",

    imgUrl: "/assets/Payments/QR_Payment/QR_4.png",
    alt: "UPI collect request API system for seamless business payment collection.",
  };

  const verificationContent2 = {
    para1:
      "AOPay’s advanced technology ensures your QR Code payment collection process is secure, and hassle-free. By using the AOPay QR Code Payment Service, businesses— retail stores, restaurants, or service providers—can enjoy tension-free transactions, without worrying about chances of payment failures. Both static and dynamic QR codes are supported, allowing you to collect payments from customers. With AOPay, every payment is processed quickly and reliably, ensuring smooth transactions that improve the customer experience and facilitate your business operations. Trust AOPay to handle your QR Code payments with the highest level of efficiency and security.",

    imgUrl: "/assets/Payments/QR_Payment/QR_5.png",
    alt: "QR code generator API for retailers enabling quick digital payment acceptance.",
  };

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
        heading: "Money Transfer",
        paragraph:
          "Transfer money to friends, families & others, anytime & anywhere",
        link: "/money-transfer-api",
        icon: "/assets/ExploreProducts/Payment/DMT.png",
        alt: "Money Transfer",
      },
    ],
    url3: [
      {
        heading: "AEPS",
        paragraph:
          "Access Banking Services: Cash Withdrawals, Deposits, & Balance Inquiries with AEPS Service",
        link: "/aeps-api",
        icon: "/assets/ExploreProducts/Payment/AEPS.png",
        alt: "AEPS",
      },
    ],
    url4: [
      {
        heading: "Payment Gateway",
        paragraph:
          "Make online payments for Purchases, Subscriptions, Travel, Entertainment & Donation securely.",
        link: "/payment-gateway",
        icon: "/assets/ExploreProducts/Payment/PaymentGateway.png",
        alt: "Payment Gateway",
      },
    ],
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Open Banking Platform – Solution Across Industries",
      heading2Para:
        "AOPAY open banking serves diverse sectors with customizable solutions that adapt to specific industry requirements and regulatory frameworks.",
      points: [
        {
          heading3: "Enterprise & SMEs",
          heading3Para:
            "Cash flow management, automated reconciliation, supplier payments, and treasury operations.",
          imgSrc:
            "/assets/ConnectedBanking/Perfect Solution for Every Industry/Enterprise & SMEs.png",
        },
        {
          heading3: "Fintech Startups",
          heading3Para:
            "Digital banking, lending platforms, investment apps, and peer-to-peer payment solutions.",
          imgSrc:
            "/assets/ConnectedBanking/Perfect Solution for Every Industry/Fintech Startups.png",
        },
        {
          heading3: "Fintech & Neo-banks",
          heading3Para:
            "Account funding, P2P transfers, investment transactions, and lending solutions.",
          imgSrc:
            "/assets/ConnectedBanking/Perfect Solution for Every Industry/Fintech & Neo-banks.png",
        },
        {
          heading3: "E-commerce & Marketplaces",
          heading3Para:
            "Seller payments, refund processing, escrow services, and marketplace settlements.",
          imgSrc:
            "/assets/ConnectedBanking/Perfect Solution for Every Industry/E-commerce & Marketplaces.png",
        },
        {
          heading3: "Accounting & ERP",
          heading3Para:
            "Automated bank feeds, transaction categorization, and financial reporting integration.",
          imgSrc:
            "/assets/ConnectedBanking/Perfect Solution for Every Industry/Accounting & ERP.png",
        },
        {
          heading3: "Healthcare & Hospitals",
          heading3Para:
            "Insurance claim processing, patient billing, provider payments, and donation management.",
          imgSrc:
            "/assets/ConnectedBanking/Perfect Solution for Every Industry/Health.png",
        },
        {
          heading3: "Educational Institutions",
          heading3Para:
            "Tuition collection, scholarship disbursements, fee management, and donor contributions.",
          imgSrc:
            "/assets/ConnectedBanking/Perfect Solution for Every Industry/Educational Institutions.png",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2:
        "AOPAY Connected Banking: Secure & Scalable Features for Businesses",

      points: [
        {
          heading3: "Intelligent Financial Data Aggregation",
          heading3Para:
            "AOPAY sophisticated data aggregation engine collects, processes, and standardizes financial information from multiple sources. Advanced machine learning algorithms categorize transactions, detect patterns, and provide actionable insights for better financial decision-making.",
          imgSrc:
            "/assets/ConnectedBanking/AOPAY Advanced Connected Banking Solution Features/Intelligent Financial Data Aggregation.png",
        },
        {
          heading3: "Smooth KYC & Identity Verification",
          heading3Para:
            "Streamline customer onboarding with integrated Know Your Customer (KYC) and Anti-Money Laundering (AML) capabilities. Our API connects with leading identity verification providers to ensure compliance while maintaining excellent user experience.",
          imgSrc:
            "/assets/ConnectedBanking/AOPAY Advanced Connected Banking Solution Features/Smooth KYC & Identity Verification.png",
        },
        {
          heading3: "Comprehensive Risk Management",
          heading3Para:
            "Built-in risk assessment tools monitor transaction patterns, detect suspicious activities, and provide real-time risk scoring. Configurable risk rules and automated alerts help maintain regulatory compliance and protect against fraud.",
          imgSrc:
            "/assets/ConnectedBanking/AOPAY Advanced Connected Banking Solution Features/risk-management (2).png",
        },
      ],
    },
  ];

  const Steps = [
    {
      heading2: "How UPI & QR Payment Processing Works",

      steps: [
        {
          step1: "Integration Setup",
          step1Para:
            "Integrate our UPI & QR API with simple REST endpoints, comprehensive SDKs, and detailed documentation for rapid deployment.",
        },
        {
          step2: "QR Code Generation",
          step2Para:
            "Generate dynamic QR codes with payment details, amounts, and merchant information using our secure QR generation engine.",
        },
        {
          step3: "Payment Processing",
          step3Para:
            "Customers scan QR codes or enter UPI IDs to initiate instant payments through their preferred UPI applications.",
        },
        {
          step4: "Real-time Settlement",
          step4Para:
            "Receive instant payment confirmations, status updates, and automated settlement to your designated bank accounts.",
        },
      ],
    },
  ];

  const content = [
    {
      heading2:
        "Enterprise-Grade Open Banking Infrastructure for Business Platforms",

      points: [
        {
          heading3: "Scalable Cloud Architecture",
          heading3Para:
            "Built on modern microservices architecture with auto-scaling capabilities to handle varying transaction volumes. Our distributed infrastructure ensures consistent performance across different geographic regions while maintaining regulatory compliance.",
          imgSrc:
            "/assets/ConnectedBanking/Enterprise-Grade Banking Infrastructure/Scalable Cloud Architecture.png",
        },

        {
          heading3: "Advanced Analytics & Reporting",
          heading3Para:
            "Comprehensive reporting suite with real-time dashboards, transaction analytics, and customizable reports. Monitor API usage, transaction success rates, and financial flows with detailed insights and automated alerts.",
          imgSrc:
            "/assets/ConnectedBanking/Enterprise-Grade Banking Infrastructure/Advanced Analytics & Reporting.png",
        },
        {
          heading3: "Developer-Friendly Integration",
          heading3Para:
            "RESTful API design with comprehensive documentation, interactive testing tools, and SDKs for popular programming languages. Our sandbox environment enables thorough testing before production deployment.",
          imgSrc:
            "/assets/ConnectedBanking/Enterprise-Grade Banking Infrastructure/Developer-Friendly Integration.png",
        },
      ],
    },
  ];

  const upiFeaturesData = {
    title: "AOPAY Advanced Payment Link Solution Features",
    description:
      "Go beyond basic payment links with advanced features designed to optimize your payment collection process and improve customer experience.",
    sections: [
      {
        heading: "Smart Link Customization",
        points: [
          "Custom expiry dates and time-based validity",
          "Minimum and maximum payment amount restrictions",
          "Customer information collection forms",
          "Multi-currency support with real-time conversion",
        ],
      },
      {
        heading: "Payment Method Flexibility",
        points: [
          "Accept credit cards, debit cards, and digital wallets",
          "Bank transfer and UPI payment options",
          "Buy now, pay later (BNPL) integration",
        ],
      },
      {
        heading: "Payment Status & Monitoring",
        points: [
          "Real-time payment status updates",
          "Comprehensive transaction dashboards",
          "Success and failure analytics",
          "Customer payment behavior insights",
          "Automated reconciliation reports",
          "Webhook notifications for status changes",
        ],
      },
      {
        heading: "Intelligent Analytics",
        points: [
          "Real-time payment tracking and status monitoring",
          "Customer behavior analytics and payment patterns",
          "Conversion rate optimization insights",
          "Geographic payment distribution analysis",
        ],
      },
      {
        heading: "Automated Workflows",
        points: [
          "Scheduled payment link generation and distribution",
          "Automatic receipt generation and delivery",
          "Smart retry logic for failed payments",
          "Integration with CRM and accounting systems",
        ],
      },
    ],
  };

  const steps = [
    {
      title: "99.9% Transaction Success Rate",
    },
    {
      title: "2.7k Transactions Per Second (TPS)",
    },
    {
      title: "50M+ QR Codes Generated Daily",
    },
    {
      title: "24/7 Real-time Processing & Support",
    },
  ];

  const material = [
    {
      heading2: "Revenue Optimization & Business Growth",

      points: [
        {
          heading3: "Flexible Pricing Models",
          heading3Para:
            "Maximize revenue with customizable fee structures and intelligent pricing algorithms. Configure transaction-based pricing, volume discounts, and tiered pricing models to optimize profitability while remaining competitive.",
          imgSrc:
            "/assets/ConnectedBanking/Revenue Optimization & Business Growth/Flexible Pricing Models.png",
        },
        {
          heading3: "Automated Compliance Management",
          heading3Para:
            "Stay compliant across multiple jurisdictions with automated regulatory reporting, transaction monitoring, and compliance dashboard. Our compliance engine adapts to changing regulations and ensures continuous adherence to financial standards.",
          imgSrc:
            "/assets/ConnectedBanking/Revenue Optimization & Business Growth/Automated Compliance Management.png",
        },
        {
          heading3: "Advanced Customer Insights",
          heading3Para:
            "Leverage financial data analytics to gain deep insights into customer behavior, spending patterns, and risk profiles. Use these insights to develop targeted products, improve customer experience, and drive business growth.",
          imgSrc:
            "/assets/ConnectedBanking/Revenue Optimization & Business Growth/Advanced Customer Insights.png",
        },
      ],
    },
  ];

  const HeadingSubheadings = [
    {
      heading2: "Revenue Optimization Tools",
      heading2Para:
        "Maximize your payment business profitability through intelligent fee structures, dynamic pricing models, and comprehensive merchant management tools.",
      points: [
        {
          heading3: "Dynamic Pricing & Fee Management",
          heading3Para:
            "Maximize revenue with flexible pricing models and intelligent fee structures. Configure transaction fees, interchange optimization, and custom pricing tiers based on transaction volume, customer segments, or payment methods.",
        },

        {
          heading3: "Advanced Risk Management",
          heading3Para:
            "Protect your business with sophisticated risk management tools including customizable transaction limits, velocity checks, geographic restrictions, and machine learning-based fraud scoring systems.",
        },
        {
          heading3: "Conversion Optimization",
          heading3Para:
            "Increase payment success rates with smart retry logic, alternative payment method suggestions, and checkout optimization features that reduce cart abandonment and improve customer experience.",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is a Connected Banking API?",
        answer:
          "A Connected Banking API is a software interface that enables secure connectivity between applications and banking systems, allowing businesses to access account information, initiate transfers, and integrate financial services into their platforms while maintaining compliance with banking regulations.",
      },
      {
        question: "How secure is the Connected Banking API?",
        answer:
          "Our API implements bank-grade security with OAuth 2.0 authentication, AES-256 encryption, PCI DSS Level 1 compliance, and real-time fraud detection. All data is encrypted in transit and at rest, with comprehensive audit trails for all transactions.",
      },
      {
        question: "Which banks and financial institutions are supported?",
        answer:
          "Our platform connects with 500+ banks and financial institutions globally, including major commercial banks, credit unions, and digital banks across North America, Europe, and Asia-Pacific regions.",
      },
      {
        question: "What types of transactions can be processed?",
        answer:
          "Our API supports various transaction types including instant transfers, scheduled payments, bulk disbursements, international transfers, and automated clearing house (ACH) transactions with real-time status tracking and comprehensive reporting.",
      },
      {
        question: "How long does integration typically take?",
        answer:
          "Basic integration can be completed in 2-4 weeks with our comprehensive documentation, SDKs, and sandbox environment. Enterprise implementations with custom requirements may take 6-12 weeks depending on complexity and compliance needs.",
      },
      {
        question: "Do you support international banking connections?",
        answer:
          "Yes, our platform supports international banking connectivity with compliance to local regulations including Open Banking (EU), PSD2, UK Open Banking standards, and various regional financial regulations across different jurisdictions.",
      },
    ],
  };

  const features2 = {
    heading2: "Developer-Friendly Integration Experience",
    description:
      "Built with developers in mind, our Payment Link API offers comprehensive documentation, multiple SDKs, and flexible integration options to get you started quickly.",
    points: [
      {
        heading3: "RESTful API Architecture",
        type: "paragraph",
        description:
          "Clean, intuitive REST API design with JSON responses, making integration straightforward across different programming languages and platforms.",
      },
      {
        heading3: "Comprehensive SDK Support",
        type: "list",
        features: [
          "Native SDKs for PHP, Python, Node.js, Java, and .NET",
          "Detailed code examples and implementation guides",
          "Interactive API explorer for testing endpoints",
          "Postman collections for quick integration testing",
        ],
      },
      {
        heading3: "Sandbox Testing Environment",
        type: "list",
        features: [
          "Complete testing environment with simulated payments",
          "Test various payment scenarios and webhook events",
          "No real money transactions during development",
          "Instant access to sandbox access",
        ],
      },
      {
        heading3: "Real-Time Webhooks",
        type: "list",
        features: [
          "Instant notifications for payment status updates",
          "Configurable webhook endpoints for different events",
          "Retry mechanisms for failed webhook deliveries",
          "Signature verification for enhanced security",
        ],
      },
    ],
  };

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PaymentHead headerSection={headerContent} />
      <PaymentProcessingPlatform />
      {/* <TrustedBankingInfrastructure /> */}
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      {/* <FundTransferExample /> */}
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <ContentWithDescriptivePoints content={content} />
      <H2DescH3Desc contentWithDescription={material} />

      <FAQSection faqContent={faqContent} />
      <GetStarted
        heading="Ready to Transform Your Financial Operations?"
        subHeading="Join hundreds of businesses that trust AOPAY Connected Banking Solution for secure, scalable, and compliant banking integration. Build the future of financial services with our comprehensive platform."
        btn1="Contact Sales"
      
      />
    </>
  );
};

export default PaymentAcceptance;
