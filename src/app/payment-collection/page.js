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
import SupportedPaymentMethods from "@/sections/PayIn/SupportedPaymentMethods";
import APIIntegration from "@/sections/PayIn/APIIntegration";
import PaymentGatewayPerformance from "@/sections/PayIn/PaymentGatewayPerformance";
import APICompliance from "@/sections/PayIn/APICompliance";
import GetStartedSteps from "@/sections/PayIn/GetStartedSteps";

export const metadata = {
  title: "Auto Payment Collection Solution & API Integration | AOPAY",
  description:
    "Automate payment collection with AoPay's robust API. Support recurring billing, subscription management, instant reconciliation for e-commerce, SaaS, and lending businesses.",
  keywords:
    "UPI payment gateway, QR code payments, UPI QR code generator, contactless payments, UPI integration, digital payments, AOPay UPI, merchant QR code, Secure Online Payments, Fast UPI Transfer, UPI Transactions, Instant Payments, UPI Money Transfer, Online Payments, UPI Payment App, UPI Payment Solutions, Quick Payment Solutions, Instant Bank Transfer, Digital Wallet UPI, Secure Transactions, UPI Bill Payment, Fast Payment System, Online UPI Transfer, Mobile UPI Payments, Instant Bill Payment, Easy UPI Payments, Pay with UPI, UPI Transfer System, UPI Platform, Secure Payment Gateway, UPI Network, UPI Payment Features, UPI for Businesses, Instant Payment Options, UPI Transaction Speed, Payment Solutions, Instant Fund Transfer, UPI Security, Digital Transactions, Online Money Transfer, Fast Online Payment, UPI Billing, UPI Payment Process, QR Code Payment Collection, Secure QR Payment, Digital Payment Collection, Instant QR Payments, Easy Payment Acceptance, Fast QR Payment, QR Payment System, Mobile Payment Collection, Digital Payment Gateway, Cashless Payment Solutions, Business Payment Collection, Digital Wallet QR, QR Payment App, QR CodeAcceptance, Instant Fund Collection, Payment Gateway QR Code, QR Code Transactions, QR Payment Method, Seamless Payment Collection, QR Payment Solutions, QR Code for Payments, Fast Payment Gateway, QR Payment Technology, QR Collection Solution, Contactless Transaction, Payment Collection App, Instant Payment Gateway, QR Payment Systems for Small Business, Simplified Payments.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/payment-collection",
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
      "Payment Collection API | Automated Recurring Payment Solution | AoPay",
    description:
      "Automate payment collection with recurring billing, subscription management, and instant reconciliation.",
    url: "https://payment-collection",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [ 
      {
        url: "https://aopay.in/images/payment-collection-og.jpg",
        width: 1200,
        height: 630,
        alt: "Online UPI Payment Banner",
      },
    ],
  },
};

const PaymentCollection = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/payment-collection",
    telephone: "011-42151216",

    description:
      "Cheapest Payment Collection Solution in India helping businesses collect payments faster with easy integration, instant settlements, multiple payment options, and 24/7 support.",

    knowsAbout: [
      "White Label Payment Collection Solution",
      "Online Payment Collection Solution",
      "Payment Collection API Provider Near Me",
      "Best Payment Collection API Solution Provider in India",
      "Digital Payment Collection Services",
      "Payment Collection System for Small Businesses",
      "Online Invoice Payment Collection Solution",
      "Affordable Payment Collection API for Small Businesses",
      "Payment Collection with Lowest Transaction Fees in India",
      "Auto Payment Collection Services",
      "Subscription Payment Collection Services",
      "Recurring Payment Collection Services",
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
    title: "Best Payment Collection API for Businesses & Institutions",
    subTitle:
      "Secure and powerful API for accepting payments via cards, UPI, digital wallets, and bank transfers. Transform your payment acceptance with our comprehensive payment solution trusted by thousands of businesses across India.",
    // imgSrc: "/assets/Payments/QR_Payment/QR_1.mp4",
    imgSrc: "/assets/PayInApiIcons/DASHBOARD S/PAY IN DASHBOARD.png",
    btn1: "Get Started Now",
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
      heading2: "AOPAY PayIn API Solution For Businesses",
      heading2Para:
        "AOPAY API provides everything you need for seamless payment collection. From single transactions to enterprise-level processing, our API handles all your business requirements with bank-grade security and reliability.",
      points: [
        {
          imgSrc:
            "/assets/PayInApiIcons/Comprehensive PaIn Solutions ICONS/Payment Gateway API.png",
          heading3: "Online Payment Processing API",
          heading3Para:
            "Complete payment solution with hosted checkout pages, customizable payment forms, and seamless integration. Accept payments from customers worldwide with our secure payment gateway solution.",
        },
        {
          imgSrc:
            "/assets/PayInApiIcons/Comprehensive PaIn Solutions ICONS/UPI PayIn API.png",
          heading3: "UPI Payment Collection API",
          heading3Para:
            "Leverage India's Unified Payments Interface with AOPAY UPI PayIn API. Instant payments, QR code generation, and seamless UPI integration for your business applications.",
        },
        {
          imgSrc:
            "/assets/PayInApiIcons/Comprehensive PaIn Solutions ICONS/Card Payment.png",
          heading3: "Credit/Debit Card Payment Collection API",
          heading3Para:
            "Accept credit and debit card payments with AOPAY secure API. Support for Visa, Mastercard, and Rupay cards with advanced fraud protection.",
        },
        {
          imgSrc:
            "/assets/PayInApiIcons/Comprehensive PaIn Solutions ICONS/Digital Wallet API.png",
          heading3: "Digital Wallet Payment Collection API",
          heading3Para:
            "Integrate popular digital wallets with AOPAY Digital Wallet API. Support for Paytm, PhonePe, Google Pay, Amazon Pay, and other leading wallet providers.",
        },
        {
          imgSrc:
            "/assets/PayInApiIcons/Comprehensive PaIn Solutions ICONS/Net Banking API.png",
          heading3: "Net Banking Payment Collection API",
          heading3Para:
            "Allow direct bank transfers with AOPAY Net Banking API. Support for 100+ banks with real-time payment processing and automatic reconciliation.",
        },
        {
          imgSrc:
            "/assets/PayInApiIcons/Comprehensive PaIn Solutions ICONS/Payment Collection API.png",
          heading3: "Payment Acceptance API",
          heading3Para:
            "Streamline your payment acceptance process with automated invoicing, payment reminders, and multi-channel payment acceptance through AOPAY Payment Solution.",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2:
        "Why Businesses Choose AOPAY Payment Collection API Integration",

      points: [
        {
          heading3: "Real-time Payment Processing",
          heading3Para:
            "Instant payment processing with AOPAY API ensures immediate transaction confirmation and enhanced user experience for your customers.",
          imgSrc: "/assets/PayInApiIcons/Real-time Payment Processing.png",
        },
        {
          heading3: "Bank-Grade Security",
          heading3Para:
            "PCI DSS Level 1 compliant, 256-bit SSL encryption, tokenization, and advanced fraud detection protect every transaction.",
          imgSrc: "/assets/PayInApiIcons/Bank-Grade Security.png",
        },
        {
          heading3: "Developer-Friendly APIs",
          heading3Para:
            "Complete Documentation, RESTful APIs, webhooks, and SDKs for quick and seamless API integration.",
          imgSrc: "/assets/PayInApiIcons/Developer-Friendly APIs.png",
        },
        {
          heading3: "Enterprise Scalability",
          heading3Para:
            "Handle millions of transactions with AOPAY secure API infrastructure designed for high-volume payment processing and enterprise scalability.",
          imgSrc: "/assets/PayInApiIcons/Enterprise Scalability.png",
        },
        {
          heading3: "24/7 Technical Support",
          heading3Para:
            "Round-the-clock technical support, dedicated account management, and expert consultation for all integration related issues.",
          imgSrc: "/assets/PayInApiIcons/Support.png",
        },
        {
          heading3: "Competitive Transaction Rates",
          heading3Para:
            "Transparent pricing with industry-leading transaction rates, no setup fees, and no hidden charges. Best PayIn API pricing in the market.",
          imgSrc: "/assets/PayInApiIcons/Competitive Transaction Rates.png",
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
        "Payment Collection API: Real-World Use Cases for Every Business",
      heading2Para:
        "AOPAY solution serves diverse business needs across industries. Whether you're an e-commerce platform, SaaS company, marketplace, or enterprise, our solution adapts to your specific payment collection requirements.",
      points: [
        {
          heading3: "E-commerce Platforms",
          heading3Para:
            "Perfect for online stores and e-commerce platforms. Accept payments seamlessly during checkout with our solution and increase conversion rates.",
          imgSrc:
            "/assets/PayInApiIcons/PayIn API Use Cases ICONS/E-commerce Platforms.png",
        },

        {
          heading3: "SaaS & Subscription Billing",
          heading3Para:
            "Automate recurring billing and subscription management with our solution. Handle trials, upgrades, downgrades, and payment retries automatically.",
          imgSrc:
            "/assets/PayInApiIcons/PayIn API Use Cases ICONS/SaaS & Subscription Billing.png",
        },
        {
          heading3: "Marketplaces",
          heading3Para:
            "Enable seamless payments between buyers and sellers on your marketplace platform with split payments and escrow functionality.",
          imgSrc:
            "/assets/PayInApiIcons/PayIn API Use Cases ICONS/Marketplaces.png",
        },
        {
          heading3: "Online Services",
          heading3Para:
            "Accept payments for digital services, consultations, bookings, and appointments with flexible payment collection options.",
          imgSrc:
            "/assets/PayInApiIcons/PayIn API Use Cases ICONS/Online Services.png",
        },
        {
          heading3: "Educational Platforms",
          heading3Para:
            "Process course fees, tuition payments, and educational service charges with our secure payment collection solution.",
          imgSrc:
            "/assets/PayInApiIcons/PayIn API Use Cases ICONS/Educational Platforms.png",
        },
        {
          heading3: "Healthcare & Telemedicine",
          heading3Para:
            "Secure payment processing for healthcare services, telemedicine consultations, and medical billing with HIPAA compliance.",
          imgSrc:
            "/assets/PayInApiIcons/PayIn API Use Cases ICONS/Healthcare & Telemedicine.png",
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
      heading2: "AOPAY Pay-in API – Advanced Features for Incoming Payments",

      points: [
        {
          heading3: "Smart Routing",
          heading3Para:
            "Intelligent payment routing to optimize success rates and minimize transaction costs across multiple payment processors.",
          imgSrc:
            "/assets/PayInApiIcons/AO PAY Advance Pay In API Features ICONS/AOPAY Advanced PayIn API Features.png",
        },
        {
          heading3: "Recurring Payments",
          heading3Para:
            "Automated subscription billing, recurring payment processing, and flexible billing cycles with our solution.",
          imgSrc:
            "/assets/PayInApiIcons/AO PAY Advance Pay In API Features ICONS/Automated subscription.png",
        },
        {
          heading3: "Payment Analytics",
          heading3Para:
            "Comprehensive payment analytics, transaction insights, and business intelligence dashboards for data-driven decisions.",
          imgSrc:
            "/assets/PayInApiIcons/AO PAY Advance Pay In API Features ICONS/Payment Analytics.png",
        },
        
        {
          heading3: "Customizable Checkout",
          heading3Para:
            "White-label checkout pages, custom branding, and seamless user experience that matches your brand identity.",
          imgSrc:
            "/assets/PayInApiIcons/AO PAY Advance Pay In API Features ICONS/Checkout.png",
        },
        {
          heading3: "Webhook Integration",
          heading3Para:
            "Real-time payment notifications, status updates, and event-driven integrations with your business systems.",
          imgSrc:
            "/assets/PayInApiIcons/AO PAY Advance Pay In API Features ICONS/Webhook Integration.png",
        },
      ],
    },
  ];

  const HeadingSubheadings = [
    {
      heading2: "Grow Revenue with Smart Payment Processing",
      heading2Para:
        "Maximize your payment business profitability through intelligent fee structures, dynamic pricing models, and comprehensive merchant management tools.",
      points: [
        {
          heading3: "Flexible Pricing Models",
          heading3Para:
            " Implement diversified pricing strategies for UPI transactions, QR code generation, and payout services. Optimize revenue through competitive transaction fees and value-added service charges.",
        },

        {
          heading3: "Merchant Segmentation & Tariffs",
          heading3Para:
            "Create personalized pricing tiers for different merchant categories, transaction volumes, and business models. Leverage individual tariff plans to meet specific partnership requirements and maximize retention.",
        },
        {
          heading3: "Risk Management & Limits",
          heading3Para:
            "Implement intelligent transaction limits, velocity checks, and risk-based pricing to manage exposure while maintaining competitive rates for trusted merchants.",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question:
          "What is PayIn API or Payment Collection API and how does it work?",
        answer:
          "PayIn API or Payment Collection API is a comprehensive paymentsolution that allows businesses to accept payments via cards, UPI, digital wallets, and bank transfers. It works through secure RESTful APIs that process payments in real-time with instant confirmation.",
      },
      {
        question:
          "Which payment methods does the PayIn API or Payment Collection API support?",
        answer:
          "Our API maintains PCI DSS Level 1 compliance, uses end-to-end encryption, and implements advanced fraud detection mechanisms to ensure maximum security for all financial transactions.",
      },
      {
        question:
          "How secure is the PayIn API or Payment Collection API integration?",
        answer:
          "Our API uses PCI DSS Level 1 compliance, 256-bit SSL encryption, tokenization, 3D Secure authentication, and advanced fraud detection systems. We ensure bank-grade security for all payment transactions processed through our payment solution.",
      },
      {
        question: "What industries benefit most from Payment Gateway API?",
        answer:
          "E-commerce platforms, SaaS companies, marketplaces, subscription services, educational platforms, healthcare providers, FinTech companies, and enterprises benefit significantly from our payment solution for seamless payment acceptance and processing.",
      },
      {
        question: "How long does PayIn API integration take?",
        answer:
          "With our comprehensive PayIn API Documentation, RESTful APIs, and developer tools, most integrations can be completed within 1-3 business days. Our technical team provides full support throughout the Payment Gateway API integration process.",
      },
      {
        question:
          "How long does PayIn API or Payment Collection API integration take?",
        answer:
          "With our PayIn or Payment Collection Solution Documentation, RESTful APIs, and developer tools, most integrations can be completed within 1-3 business days. Our technical team provides full support throughout the API integration process.",
      },
      {
        question: "What are the transaction fees for Payment Processing API?",
        answer:
          "Our Payment Processing API offers competitive transaction fees starting from 2% per transaction with lowest setup fees or hidden charges. Volume-based pricing and custom enterprise rates are available for high-volume businesses.",
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
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <SupportedPaymentMethods />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <APIIntegration />
      <ContentWithDescriptivePoints content={content} />
      <H2DescH3Desc contentWithDescription={material} />
      <FAQSection faqContent={faqContent} />
      <PaymentGatewayPerformance />
      <APICompliance />
      <GetStarted
        heading="Ready to Transform Your Payment Collection System?"
        subHeading="Join thousands of businesses already using the AOPAY Payment Solutions for their payment processing needs. Start accepting payments with our PayIn API today."
        btn1="Request Free Demo"
        btn2="View API Docs"
      />
     
    </>
  );
};

export default PaymentCollection;

<TrustedByIndustryLeaders />