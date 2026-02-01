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

export const metadata = {
  title: "Ecommerce Inventory Management Software & Solutions | AOPAY",
  description:
    "Power your e-commerce platform with AoPay's integrated payment and banking solutions. Payment gateway, COD management, vendor payouts, working capital for online retailers.",
  keywords:
    "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/ecommerce-payment-banking-solutions",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "Corporate Lending Management Solution | Digital Lending | AoPay",
    description:
      "Build lending apps with instant approvals, credit scoring, and disbursement.",
    url: "https://aopay.in/corporate-lending-management-solutions",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/lending-apps-og.jpg",
        width: 1200,
        height: 630,
        alt: "AOPay Money Transfer Banner",
      },
    ],
  },
};

const ECommerce = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/ecommerce-payment-banking-solutions",
    telephone: "011-42151216",
    description:
      "Cheapest banking solutions for eCommerce in India providing secure payments, instant settlements, virtual accounts, and automated reconciliation for businesses.",
    serviceType: [
      "White Label Banking Solutions for Ecommerce & online stores",
      "Digital Banking Services for Online E-commerce Businesses",
      "Ecommerce Payment Gateway Provider Near Me",
      "Best Ecommerce Banking Solution Provider in India",
      "Best Ecommerce payment settlement solutions provider in India",
      "Best Merchant banking solutions for ecommerce Businesses",
      "Best banking solutions for ecommerce platforms",
      "Affordable Banking solutions for Small Ecommerce Businesses",
      "Best Ecommerce Merchant Banking Service Provider in India",
      "Best banking solutions provider for ecommerce businesses",
      "Best Ecommerce Payment & Settlement Support Provider in India",
      "Best Online Seller Banking Solutions",
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
    title: "Ecommerce Payments Solutions for Growing B2B, B2C & D2C Businesses",
    subTitle:
      "Streamline online payments with easy checkout experiences, multiple payment gateways, and automated reconciliation. Scale your ecommerce business with secure payment solutions built for B2B, B2C, and D2C models.",
    imgSrc: "/assets/ECommerce/e-commerce-final.png",
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
      heading2: "Maximize Conversion with Smarter Payment Solutions",
      heading2Para:
        "Accept payments from customers around the world in minutes. Our platform is designed to increase conversion at every step of the payment flow – from optimized checkout flows and fraud prevention to frictionless one-click checkout and issuer-level optimizations.",
      points: [
        {
          imgSrc:
            "/assets/DMTIntegration/AOPAYCompleteMoneyTransferAPISolution/InstantBankTransfers.png",
          heading3: "Payment Gateway Integration",
          heading3Para:
            "AOPAY payment gateway allows smooth and secure transactions across multiple payment methods, enhancing the customer checkout experience while ensuring PCI compliance for e-commerce businesses. Support for over 135 currencies and local payment preferences.",
        },
        {
          imgSrc:
            "/assets/DMTIntegration/AOPAYCompleteMoneyTransferAPISolution/BulkDisbursementProcessing.png",
          heading3: "UPI & QR Payment Processing",
          heading3Para:
            "Integrate popular digital payment methods including UPI and QR code payments to cater to regional preferences. Perfect for businesses targeting markets where mobile payments dominate consumer behavior.",
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
          heading3: "Payment Link Solutions",
          heading3Para:
            "Generate secure payment links instantly for invoices, quotes, or one-time purchases. Ideal for businesses that need flexible payment collection methods without complex integrations.",
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
      heading2: "Advanced Banking & Financial Management Tools",
      heading2Para:
        "AOPAY comprehensive suite of banking and financial solutions streamlines your e-commerce operations:",
      points: [
        {
          heading3: "Domestic Money Transfer Solutions",
          heading3Para:
            "Allow instant money transfers within your domestic market. Perfect for marketplace businesses that need to pay vendors, process refunds, or handle affiliate payments quickly and securely.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/HighPerformanceProcessing.png",
        },

        {
          heading3: "Bank Account Verification",
          heading3Para:
            "Verify customer and vendor bank accounts instantly to reduce payment failures and fraud. Essential for businesses processing large volumes of transactions or onboarding new suppliers.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/RetailMoneyTransfer.png",
        },
        {
          heading3: "ESCROW Solutions",
          heading3Para:
            "Protect high-value transactions with our secure escrow service. Ideal for luxury goods, custom orders, or B2B transactions where buyer and seller protection is crucial.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/AutoScalingInfrastructure.png",
        },
        {
          heading3: "Virtual Account Management",
          heading3Para:
            "Create virtual accounts for better reconciliation and automated payment tracking. Streamline your accounting processes and improve cash flow visibility across multiple revenue streams.",
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
        question:
          "How quickly can we implement AOPAY for our logistics operations?",
        answer:
          "Most logistics companies can start processing payments within 1-2 weeks. Our implementation includes system integration, driver onboarding, payment setup, and comprehensive testing to ensure smooth operations from day one.",
      },
      {
        question:
          "What payment methods does AOPAY support for driver payments?",
        answer:
          "We support bank transfers, UPI payments, digital wallets, prepaid cards, and mobile banking. Drivers can receive payments through their preferred method, ensuring maximum convenience and faster access to earnings.",
      },
      {
        question:
          "How does AOPAY handle payment security for logistics companies?",
        answer:
          "All transactions are processed through PCI DSS compliant infrastructure with advanced encryption and fraud detection. We provide real-time monitoring, secure driver verification, and comprehensive audit trails for complete financial security.",
      },
      {
        question:
          "Can AOPAY integrate with our existing fleet management system?",
        answer:
          "Yes, AOPAY offers flexible integration options for popular fleet management, GPS tracking, and logistics management systems. Our technical team ensures seamless data synchronization and unified operations across all platforms.",
      },
      {
        question:
          "What makes AOPAY different from other payment solutions for logistics?",
        answer:
          "AOPAY is specifically designed for logistics operations with features like automated driver settlements, expense management, fleet-focused digital wallets, and AEPS services for remote areas. We understand the unique challenges of transportation businesses and provide tailored solutions.",
      },
      {
        question: "Does AOPAY support operations in remote or rural areas?",
        answer:
          "Yes, our AEPS integration enables banking services and cash withdrawals in areas with limited banking infrastructure. This expands your operational reach while creating additional revenue streams through financial service offerings.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PaymentHead headerSection={headerContent} />
      <section className="py-16 px-6 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          {/* Heading */}
          <h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Transform Your E-commerce Payment Experience
          </h2>

          <p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 max-w-4xl mx-auto"
          >
            The e-commerce industry has rapidly evolved with the shift to online
            shopping, creating unprecedented opportunities for businesses
            worldwide. As companies scale from startup to enterprise, they face
            increasing complexity in managing payments, customer verification,
            and compliance requirements across multiple markets and currencies.
          </p>
          <p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 max-w-4xl mx-auto mb-4"
          >
            Modern e-commerce businesses require more than just basic payment
            processing. They need comprehensive solutions that can handle global
            transactions, prevent fraud, optimize conversion rates, and provide
            seamless customer experiences across all touchpoints. AOPAY's
            complete payment platform addresses these challenges with advanced
            technology and intelligent automation.
          </p>
        </div>
      </section>
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints} />
      {/* <ECommerceCheckoutFlowSection /> */}
      <ContentWithDescriptivePoints content={content} />
      <H2DescH3Desc contentWithDescription={material} />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <HeadingSubheadingSection HeadingSubheadings={HeadingSubheadings} />
      <EcommerceSolutionsSection />
      <ECommerceWhyChooseAOPAY />
      <ECommerceScalePaymentInfrastructure />
     <ECommerceLogisticsExpertSupport/>
      <FAQSection faqContent={faqContent} />
  <ECommerceLogisticsReadySection/>
     
    </>
  );
};

export default ECommerce;
