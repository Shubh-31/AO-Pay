import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import { PaymentHead, FAQSection } from "@/sections/mySection";
import { CardWithFeature } from "@/sections/CardWithFeature";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";

import { HeadingSubheadingSection } from "@/sections/HeadingSubheadingSection";

import UtilitiesPaymentSection from "@/sections/UtilitiesRechargePortal/UtilitiesPaymentSection";
import ServiceCoverageSection from "@/sections/UtilitiesRechargePortal/ServiceCoverageSection";
import ServiceProviderSolutions from "@/sections/UtilitiesRechargePortal/ServiceProviderSolutions";
import TechIntegrationSection from "@/sections/UtilitiesRechargePortal/TechIntegrationSection";
import ServiceIntegrationSection from "@/sections/UtilitiesRechargePortal/ServiceIntegrationSection";
import ServiceGrowthSection from "@/sections/UtilitiesRechargePortal/ServiceGrowthSection";
import UtilitiesExpertSupport from "@/sections/UtilitiesRechargePortal/UtilitiesExpertSupport";
import UtilitiesCTASection from "@/sections/UtilitiesRechargePortal/UtilitiesCTASection";

export const metadata = {
  title: "Utilities Management Software & Solutions | AOPAY",
  description:
    "Power utility and recharge portals with AoPay's solution. Mobile recharge, DTH, electricity, gas, water bills, broadband payments with instant processing and commission management.",
  keywords:
    "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/utilities-management-solutions",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "Utilities Management Solution | Recharge Portal Platform | AoPay",
    description:
      "Power recharge portals with mobile, DTH, bill payments, and instant processing.",
    url: "https://aopay.in/utilities-management-solutions",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/utilities-solutions-og.jpg",
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

const UtilitiesRechargePortal = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/utilities-management-solutions",
    telephone: "011-42151216",
    description:
      "Cheapest banking solutions for utility management & recharge portals in India providing secure payments, instant settlements, automated collections, and virtual accounts.",
    serviceType: [
      "White Label Banking Solutions for Utilities & Recharge Portals",
      "Payment gateway integration solution for utilities",
      "Utilities & Recharge Portal Payment Solutions Provider Near Me",
      "Best banking solutions provider for utility companies in India",
      "Real-time transaction monitoring solutions for recharge portals",
      "Automated payment solutions for utility bill portals",
      "Payment settlement solutions for prepaid/postpaid platforms",
      "Affordable digital banking solutions for utilities",
      "Utility & Recharge Portal Banking Solution Provider in India",
      "Automated Bill Payment & Settlement Solutions Provider in India",
      "Digital Banking Services Provider for Utility Payments",
      "Banking APIs for Recharge Platforms",
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
      "Integrated Recharge & Bill Payment Solutions for Aggregators, Retailers & BBPS Operators",
    subTitle:
      "Power mobile recharges, DTH payments, and bill settlements with secure aggregator infrastructure. Allow multi-operator support, instant processing, and BBPS integration for retailers and recharge platforms.",
    imgSrc: "/assets/utilities recharge portals final graphic.png",
    alt: "Secure money transfer API enabling instant fund transfers between bank accounts.",
    video: false,
    btn1: "Start Now",
    btn1Link: "/contact-us",
    btn2: "Optimize Revenue Collection",
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
      heading2: "Optimized Payment Gateway for Service Providers",
      heading2Para:
        "Accept payments seamlessly across all channels with our specialized payment gateway designed for utilities and recharge businesses. Support multiple payment methods while ensuring security, compliance, and optimal customer experiences.",
      points: [
        {
          heading3: "Multi-Channel Payment Processing",
          heading3Para:
            "Process payments through web portals, mobile apps, USSD codes, and offline channels with unified management and reporting. Our gateway handles high-volume transactions with sub-second response times and 99.9% uptime reliability.",
          imgSrc:
            "/assets/UtilitiesAndRecharge/Optimized Revenue Collection and Management/Multi-Channel Payment Processing.png",
        },

        {
          heading3: "Real-Time Transaction Processing",
          heading3Para:
            "Enable instant payment processing with real-time confirmation for all services. Customers receive immediate service activation and transaction confirmations while you benefit from improved cash flow and customer satisfaction.",
          imgSrc:
            "/assets/UtilitiesAndRecharge/Optimized Revenue Collection and Management/Real-Time Transaction Processing.png",
        },
        {
          heading3: "Advanced Analytics and Reporting",
          heading3Para:
            "Monitor transaction performance, revenue trends, and customer behavior with comprehensive analytics dashboard. Track success rates, identify optimization opportunities, and generate detailed reports for business insights and decision-making.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/HighPerformanceProcessing.png",
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
      heading2: "Smooth Customer Payment Experience",
      heading2Para:
        "Guide customers through an intuitive payment process that maximizes completion rates while ensuring security and satisfaction throughout their service payment journey.",
      points: [
        {
          heading3: "Service Selection",
          heading3Para:
            "Customers choose their desired service category and provider from an organized, easy-to-navigate interface.",
          imgSrc:
            "/assets/UtilitiesAndRecharge/Smooth Customer Payment Experience/Service Selection.png",
        },
        {
          heading3: "Account Information",
          heading3Para:
            "Simple form completion with automatic validation and bill amount fetch for accurate payment processing.",
          imgSrc:
            "/assets/UtilitiesAndRecharge/Smooth Customer Payment Experience/Account Information.png",
        },
        {
          heading3: "Payment Processing",
          heading3Para:
            "Secure, optimized payment with multiple options and mobile-friendly interface for customer convenience.",
          imgSrc:
            "/assets/UtilitiesAndRecharge/Smooth Customer Payment Experience/Payment Processing.png",
        },
        {
          heading3: "Instant Confirmation",
          heading3Para:
            "Immediate service activation and transaction confirmation with digital receipts and SMS notifications.",
          imgSrc:
            "/assets/UtilitiesAndRecharge/Smooth Customer Payment Experience/Instant Confirmation.png",
        },
        {
          heading3: "Service History",
          heading3Para:
            "Complete transaction history and service management through customer portal and mobile application.",
          imgSrc:
            "/assets/UtilitiesAndRecharge/Smooth Customer Payment Experience/Service History.png",
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
      heading2: "Modern Digital Payment Methods Integration",
      heading2Para:
        "Cater to digital-savvy customers with contemporary payment options including UPI, QR codes, and mobile wallet integration. Simplify payment processes to reduce transaction abandonment and improve customer satisfaction.",
      points: [
        {
          heading3: "UPI Payment Integration",
          heading3Para:
            "Enable seamless UPI payments for all utility and recharge services with instant processing and confirmation. Support UPI autopay for recurring bills, making subscription management effortless for customers while ensuring consistent revenue flowQR Code Payment Solutions.",
          imgSrc:
            "/assets/UtilitiesAndRecharge/Modern Digital Payment Methods Integration/UPI Payment Integration.png",
        },
        {
          heading3: "QR Code Payment Solutions",
          heading3Para:
            "Implement dynamic QR codes for bill payments and recharges with secure, contactless payment experiences. Generate service-specific QR codes for offline payments, kiosk transactions, and customer service centers for maximum payment accessibility.",
          imgSrc:
            "/assets/UtilitiesAndRecharge/Modern Digital Payment Methods Integration/QR Code Payment Solutions.png",
        },
        {
          heading3: "Instant Payment Confirmation",
          heading3Para:
            "Provide immediate payment confirmation and service activation with real-time processing capabilities. Customers receive instant SMS notifications, email receipts, and service confirmations for transparent, reliable payment experiences.",
          imgSrc:
            "/assets/UtilitiesAndRecharge/Modern Digital Payment Methods Integration/Instant Payment Confirmation.png",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question:
          "How quickly can we integrate AOPAY with our existing utility platform?",
        answer:
          "Most utilities and recharge platforms can integrate AOPAY within 1-2 weeks. Our solution includes pre-built integrations for major service providers, comprehensive documentation, and dedicated technical support to ensure smooth implementation with minimal disruption to ongoing operations.",
      },
      {
        question: "What service categories are supported by AOPAY platform?",
        answer:
          "Our platform supports comprehensive service categories including mobile recharges, DTH, electricity bills, water bills, gas bills, internet services, insurance premiums, loan EMIs, municipal taxes, and digital entertainment services with real-time processing and instant confirmation.",
      },
      {
        question:
          "How does AOPAY ensure transaction security for utility payments?",
        answer:
          "All transactions are processed through PCI DSS compliant infrastructure with end-to-end encryption, advanced fraud detection, and real-time monitoring. We maintain banking-grade security standards while ensuring smooth payment experiences for customers.",
      },
      {
        question:
          "Can AOPAY handle high-volume transactions during peak hours?",
        answer:
          "Yes, our scalable infrastructure can process millions of transactions daily with consistent performance during peak hours. The platform includes intelligent load balancing, automatic scaling, and redundant processing capabilities to maintain reliability.",
      },
      {
        question:
          "What makes AOPAY different from other utility payment platforms?",
        answer:
          "AOPAY provides a comprehensive ecosystem including payment processing, service provider integration, customer management, and business analytics in one platform. Our industry-specific features, competitive pricing, and dedicated support differentiate us from generic payment processors.",
      },
      {
        question: "Does AOPAY support AEPS and banking services integration?",
        answer:
          "Yes, our platform includes AEPS integration for rural market penetration, enabling cash withdrawal, balance inquiry, and utility payment services. This expands your reach to underbanked customers while creating additional revenue streams through banking correspondent services.",
      },
    ],
  };

  const HeadingSubheadings = [
    {
      heading2: "Optimized Revenue Collection and Management",
      heading2Para:
        "Maximize revenue collection efficiency with automated payment processing, intelligent retry mechanisms, and comprehensive collection management tools designed for utilities and service providers.",
      points: [
        {
          heading3: "Automated Collection Management",
          heading3Para:
            "Streamline revenue collection with automated payment processing, smart retry logic, and comprehensive dunning management. Reduce collection costs and improve cash flow with intelligent payment recovery strategies.",
          imgSrc:
            "/assets/UtilitiesAndRecharge/Optimized Revenue Collection and Management/Automated Collection Management.png",
        },

        {
          heading3: "Flexible Payment Plans",
          heading3Para:
            "Offer customers flexible payment options including installment plans, partial payments, and deferred payment arrangements. Improve customer satisfaction and payment success rates while maintaining revenue optimization.",
          imgSrc:
            "/assets/UtilitiesAndRecharge/Optimized Revenue Collection and Management/Flexible Payment Plans.png",
        },
        {
          heading3: "Smart Notification System",
          heading3Para:
            "Keep customers informed with automated payment reminders, due date notifications, and service updates. Reduce late payments and improve customer engagement through personalized communication across multiple channels.",
          imgSrc:
            "/assets/UtilitiesAndRecharge/Optimized Revenue Collection and Management/Smart Notification System.png",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints = [
    {
      heading2: "AOPAY Secure Recharge and Bill Payment Infrastructure",
      heading2Para:
        "Provide customers with seamless recharge and bill payment experiences while optimizing your operational efficiency. AOPAY platform supports all major service categories with real-time processing, instant confirmations, and comprehensive transaction management capabilities.",
      points: [
        {
          heading3: "Mobile Recharge Services",
          heading3Para:
            "Enable instant mobile recharges for all major telecom operators with real-time processing and immediate confirmation. Support prepaid, postpaid, and data plan recharges with competitive margins and reliable service availability across all network providers.",
          imgSrc:
            "/assets/UtilitiesAndRecharge/AOPAY Secure Recharge and Bill Payment Infrastructure/Mobile Recharge Services.png",
        },
        {
          heading3: "Utility Bill Payment Processing",
          heading3Para:
            "Streamline utility bill payments including electricity, water, gas, and internet services with automated processing and instant confirmation. Handle recurring payments, due date reminders, and multiple payment methods for enhanced customer convenience.",
          imgSrc:
            "/assets/UtilitiesAndRecharge/AOPAY Secure Recharge and Bill Payment Infrastructure/Utility Bill Payment Processing.png",
        },
        {
          heading3: "Digital Service Recharges",
          heading3Para:
            "Expand service offerings with digital entertainment, gaming, and subscription recharges. Support DTH recharges, streaming service payments, and gaming credit top-ups with instant delivery and comprehensive transaction tracking.",
          imgSrc:
            "/assets/UtilitiesAndRecharge/AOPAY Secure Recharge and Bill Payment Infrastructure/Digital Service Recharges.png",
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
      <UtilitiesPaymentSection />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints} />
      <ContentWithDescriptivePoints content={content} />
      <H2DescH3Desc contentWithDescription={material} />
      <HeadingSubheadingSection HeadingSubheadings={HeadingSubheadings} />
      <ServiceCoverageSection />
      <H2H3WithPoints content={contentWithHeadingsAndPoints2} />
      <ServiceProviderSolutions/>
      <TechIntegrationSection/>
      <ServiceIntegrationSection/>
      <ServiceGrowthSection/>
      <UtilitiesExpertSupport/>
      <FAQSection faqContent={faqContent} />
      <UtilitiesCTASection/>
    </>
  );
};

export default UtilitiesRechargePortal;
