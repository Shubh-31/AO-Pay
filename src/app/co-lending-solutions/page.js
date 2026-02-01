import { PaymentHead, FAQSection, GetStarted } from "@/sections/mySection";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";

import { CoLendingCards } from "@/sections/CoLending/CoLendingCards";
import { CoLendingModelsCards } from "@/sections/CoLending/CoLendingModels";
import { DeveloperFriendlyAPIs } from "@/sections/CoLending/DeveloperFriendlyAPIs";
import { CoLendingGuidelines } from "@/sections/CoLending/CoLendingGuidelines";
import { CoLendingMonetization } from "@/sections/CoLending/CoLendingMonetization";
import Script from "next/script";

export const metadata = {
  title: "Co-Lending Platform for Banks & NBFCs Integration | AOPAY",
  description:
    "Send money instantly across India with AOPay Money Transfer. Secure bank-to-bank transfers, mobile wallet support, competitive rates. Perfect for businesses and individuals. Transfer now",
  keywords:
    "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/co-lending-solutions",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "Co-lending | AOPay",
    description:
      "Co-lending by AOPay - Designed for Banks, Fintech, NBFCs. Comprehensive financial management & payment solutions.",
    url: "https://aopay.in/co-lending-solutions",
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
      title: "Co Lending Solition | AOPay",
      description:
        "Co-lending by AOPay - Designed for Banks, Fintech, NBFCs. Comprehensive financial management & payment solutions.",
      images: ["https://aopay.in/images/co-lending-solution.jpg"],
    },
  },
};

const CoLending = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/co-lending-solutions",
    telephone: "011-42151216",
    description:
      "Cheapest Co-Lending Platform in India providing secure joint lending solutions, automated loan management, risk sharing, and real-time monitoring for lenders.",
    serviceType: [
      "White Label Co-lending Platform Software Solution",
      "Cloud based Co-lending Platform Solution",
      "Co-lending Software Provider Near Me",
      "Best Co-lending Software Solution Provider in India",
      "Digital Co-lending Platform for Fintechs & Banks",
      "Co-lending Loan Management Software for Small Businesses",
      "Secure Co-lending Platform Solution for collaborative lendings",
      "Affordable Co-lending Platform for Small Businesses",
      "KYC & compliance integrated Co-lending platform solution in India",
      "Auto loan matching & disbursal Co-lending Software Provider",
      "Digital Co-lending Solution for Banks & NBFCs",
      "Secure Co-lending platform for borrowers & lenders",
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
    title: "Co-Lending Software for Banks & NBFC Collaboration",
    subTitle:
      "Complete Digital Co-Lending Solution | Automated Loan Origination, Multi-Party Disbursement & Portfolio Servicing with RBI-Compliant APIs | Single Payouts, Bulk Payments & Real-Time Settlement.",
    imgSrc: "/assets/LoanManagement/LOAN MANAGEMENT.jpg",
    alt: "Multi-channel payment gateway API supporting credit cards, debit cards and digital wallets.",
    video: false,
    btn1: "Explore Co-Lending",
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
      heading2: "Streamlined Co-Lending Workflow Automation",
      heading2Para:
        "Automate every stage of the co-lending lifecycle from borrower onboarding to loan servicing with our comprehensive solution.",
      points: [
        {
          heading3: "Partnership Setup",
          heading3Para:
            "Configure bank-NBFC agreements, risk-sharing ratios, and operational parameters with flexible partnership models.",
          imgSrc:
            "/assets/CoLending/Streamlined Co-Lending Workflow Automation/Extend to Retail Partnerships.png",
        },

        {
          heading3: "Borrower Onboarding",
          heading3Para:
            "Unified customer acquisition with automated KYC, credit assessment, and multi-party approval workflows.",
          imgSrc:
            "/assets/CoLending/Streamlined Co-Lending Workflow Automation/Borrower Onboarding.png",
        },
        {
          heading3: "Loan Origination",
          heading3Para:
            "Automated loan application processing, credit decisioning, and agreement generation compliant with co-lending norms.",
          imgSrc:
            "/assets/CoLending/Streamlined Co-Lending Workflow Automation/Loan Origination.png",
        },
        {
          heading3: "Multi-Party Disbursement",
          heading3Para:
            "Seamless fund disbursement with automated split between bank and NBFC as per agreed ratios.",
          imgSrc:
            "/assets/CoLending/Streamlined Co-Lending Workflow Automation/Multi-Party Disbursement.png",
        },
        {
          heading3: "Servicing & Collections",
          heading3Para:
            "Comprehensive loan servicing with EMI collection, payment allocation, and automated reconciliation.",
          imgSrc:
            "/assets/CoLending/Streamlined Co-Lending Workflow Automation/Servicing & Collections.png",
        },
        {
          heading3: "Settlement & Reporting",
          heading3Para:
            "Real-time settlement between partners with automated reporting for audit and regulatory compliance.",
          imgSrc:
            "/assets/CoLending/Streamlined Co-Lending Workflow Automation/Settlement & Reporting.png",
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
        },
        {
          heading3: "Account Information",
          heading3Para:
            "Simple form completion with automatic validation and bill amount fetch for accurate payment processing.",
        },
        {
          heading3: "Payment Processing",
          heading3Para:
            "Secure, optimized payment with multiple options and mobile-friendly interface for customer convenience.",
        },
        {
          heading3: "Instant Confirmation",
          heading3Para:
            "Immediate service activation and transaction confirmation with digital receipts and SMS notifications.",
        },
        {
          heading3: "Service History",
          heading3Para:
            "Complete transaction history and service management through customer portal and mobile application.",
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
        },
        {
          heading3: "QR Code Payment Solutions",
          heading3Para:
            "Implement dynamic QR codes for bill payments and recharges with secure, contactless payment experiences. Generate service-specific QR codes for offline payments, kiosk transactions, and customer service centers for maximum payment accessibility.",
        },
        {
          heading3: "Instant Payment Confirmation",
          heading3Para:
            "Provide immediate payment confirmation and service activation with real-time processing capabilities. Customers receive instant SMS notifications, email receipts, and service confirmations for transparent, reliable payment experiences.",
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
        },

        {
          heading3: "Flexible Payment Plans",
          heading3Para:
            "Offer customers flexible payment options including installment plans, partial payments, and deferred payment arrangements. Improve customer satisfaction and payment success rates while maintaining revenue optimization.",
        },
        {
          heading3: "Smart Notification System",
          heading3Para:
            "Keep customers informed with automated payment reminders, due date notifications, and service updates. Reduce late payments and improve customer engagement through personalized communication across multiple channels.",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Co-Lending Software with Source Code License",
      heading2Para:
        "Transform your lending operations with our comprehensive co-lending solution designed specifically for banks, NBFCs, fintech startups, and digital lenders. Enable seamless bank-NBFC partnerships with complete control over your co-lending infrastructure.",
      points: [
        {
          imgSrc:
            "/assets/CoLending/Enterprise Co-Lending Platform with Source Code License/Complete Risk Platform Source Code.png",
          heading3: "Co-Lending Solution with Source Code",
          heading3Para:
            "Full access to modify and customize the co-lending solution for your specific partnership models, compliance requirements, and unique business rules. Perfect for banks and NBFCs requiring tailored co-lending workflows.",
        },
        {
          imgSrc:
            "/assets/CoLending/Enterprise Co-Lending Platform with Source Code License/RBI Compliance & Security Updates.png",
          heading3: "RBI Compliance & Security Updates",
          heading3Para:
            "Comprehensive coverage including regular updates for RBI co-lending guidelines, security patches, and compliance enhancements to keep your operations fully regulated.",
        },
        {
          imgSrc:
            "/assets/CoLending/Enterprise Co-Lending Platform with Source Code License/Specialized Co-Lending Support.png",
          heading3: "Specialized Co-Lending Support",
          heading3Para:
            "Expert guidance from our team with deep expertise in bank-NBFC partnerships, co-lending regulations, and digital lending operations. Comprehensive training for your teams.",
        },

        {
          imgSrc:
            "/assets/CoLending/Enterprise Co-Lending Platform with Source Code License/Rapid Partnership Activation.png",
          heading3: "Rapid Partnership Activation",
          heading3Para:
            "Launch co-lending partnerships faster by working with proven, battle-tested infrastructure. Meet critical go-live deadlines while maintaining complete control over customization.",
        },
        {
          imgSrc:
            "/assets/CoLending/Enterprise Co-Lending Platform with Source Code License/Risk-Free Implementation.png",
          heading3: "Risk-Free Implementation",
          heading3Para:
            "Eliminate the complexity of building co-lending infrastructure from scratch. Leverage our pre-built solution with automated loan origination, disbursement, and servicing capabilities.",
        },
        {
          imgSrc:
            "/assets/CoLending/Enterprise Co-Lending Platform with Source Code License/Continuous Regulatory Updates.png",
          heading3: "Continuous Regulatory Updates",
          heading3Para:
            "Stay ahead of regulatory changes with regular platform updates reflecting the latest RBI guidelines, compliance requirements, and industry best practices for co-lending operations.",
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
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints} />
      <ContentWithDescriptivePoints content={content} />
      <CoLendingCards />
      <CoLendingModelsCards />
      <DeveloperFriendlyAPIs />
      <CoLendingGuidelines />
      <CoLendingMonetization />
      <GetStarted
        heading="Co-Lending Solutions for Every Stakeholder"
        subHeading="Achieve priority sector lending targets, expand reach through NBFC distribution networks, and optimize capital deployment with automated co-lending operations."
        btn1="Contact Now"
        btn4="Get Pricing"
        pricingKey="Co-lending Software"
      />
    </>
  );
};

export default CoLending;

