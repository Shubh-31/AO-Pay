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
} from "@/sections/mySection";
import { StepsWithExplanation } from "@/sections/StepsWithExplanation";
import { Video } from "lucide-react";
import Script from "next/script";
import { ArrowRightCircle } from "lucide-react";
import WhyChooseUPI from "@/sections/WhyChooseUPI";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { CardWithFeature } from "@/sections/CardWithFeature";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { HeadingSubheadingSection } from "@/sections/HeadingSubheadingSection";

export const metadata = {
  title: "UPI QR Payment Collection Solution For Merchants & Retailers",
  description:
    "Accept UPI payments seamlessly with AoPay's dynamic QR codes and UPI intent. Enable fast, secure transactions with instant settlement, zero MDR for retail, e-commerce, and logistics.",
  keywords:
    "UPI payment gateway, QR code payments, UPI QR code generator, contactless payments, UPI integration, digital payments, AOPay UPI, merchant QR code, Secure Online Payments, Fast UPI Transfer, UPI Transactions, Instant Payments, UPI Money Transfer, Online Payments, UPI Payment App, UPI Payment Solutions, Quick Payment Solutions, Instant Bank Transfer, Digital Wallet UPI, Secure Transactions, UPI Bill Payment, Fast Payment System, Online UPI Transfer, Mobile UPI Payments, Instant Bill Payment, Easy UPI Payments, Pay with UPI, UPI Transfer System, UPI Platform, Secure Payment Gateway, UPI Network, UPI Payment Features, UPI for Businesses, Instant Payment Options, UPI Transaction Speed, Payment Solutions, Instant Fund Transfer, UPI Security, Digital Transactions, Online Money Transfer, Fast Online Payment, UPI Billing, UPI Payment Process, QR Code Payment Collection, Secure QR Payment, Digital Payment Collection, Instant QR Payments, Easy Payment Acceptance, Fast QR Payment, QR Payment System, Mobile Payment Collection, Digital Payment Gateway, Cashless Payment Solutions, Business Payment Collection, Digital Wallet QR, QR Payment App, QR CodeAcceptance, Instant Fund Collection, Payment Gateway QR Code, QR Code Transactions, QR Payment Method, Seamless Payment Collection, QR Payment Solutions, QR Code for Payments, Fast Payment Gateway, QR Payment Technology, QR Collection Solution, Contactless Transaction, Payment Collection App, Instant Payment Gateway, QR Payment Systems for Small Business, Simplified Payments.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/upi-qr-code-payment-gateway",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "UPI QR Code Payment Gateway | Accept UPI Payments | AoPay",
    description:
      "Accept UPI payments with dynamic QR codes, instant settlement, and zero MDR.",
    url: "https://aopay.in/upi-qr-code-payment-gateway",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/upi-qr-og.jpg",
        width: 1200,
        height: 630,
        alt: "Online UPI Payment Banner",
      },
    ],
  },
};

const QRPayment = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/upi-qr-code-payment-gateway",
    telephone: "011-42151216",

    description:
      "Cheapest UPI & QR Payment Collection solution in India for fast, secure payments, instant settlements, easy integration, and round-the-clock support for businesses.",

    knowsAbout: [
      "White Label UPI & QR Payment Collection Solution",
      "Online UPI & QR Payment Collection Solution",
      "UPI & QR Payment Collection Solution Provider Near Me",
      "Best UPI & QR Payment Collection Solution Provider in India",
      "Digital UPI & QR Payment Collection Services",
      "UPI & QR Payment Collection System for Small Businesses",
      "Online UPI Payment Collection via UPI",
      "Affordable UPI & QR Payment Collection for Small Businesses",
      "UPI & QR Payment Collection with Lowest Transaction Fees in India",
      "Auto UPI & QR Payment Collection Services Provider",
      "Multi UPI QR Payment Solution",
      "Instant UPI Payment Collection Service",
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
    title: "UPI & QR Code API For Instant Merchant Payment Collections",
    subTitle:
      "Collect payments instantly with our UPI & QR API. Allow instant payment collections, dynamic QR code generation, bulk payouts, and seamless wallet integration—all backed by enterprise-grade security and PCI DSS compliance.",
    imgSrc: "assets/Payments/QR_Payment/QR_1.mp4",
    btn1: "Get Started Today",
    btn1Link: "/contact-us",
    alt: "UPI payment API allowing instant peer-to-peer money transfers via mobile apps.",
    video: true,
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
      heading2:
        "AOPAY UPI & QR Payments Collection API for Digital Payment Leaders",

      points: [
        {
          heading3: "UPI Payment Collection Solution for All Business Types",
          heading3Para:
            "Empower merchants, e-commerce platforms, ride-hailing apps, EdTech solutions, and fintech applications with instant UPI payment capabilities. Our API supports diverse business models including retail payments, subscription billing, marketplace transactions, and on-demand service payments.",
          imgSrc:
            "/assets/UPI&QRCodePayment/Enterprise UPI & QR API for Digital Payment Leaders/Comprehensive Payment Solutions for All Business Types.png",
        },
        {
          heading3: "Streamlined Payment Acceptance & Processing",
          heading3Para:
            "Maximize transaction success rates with intelligent payment routing and real-time status updates. Offer frictionless payment experiences for both online and offline transactions while maintaining full compliance with NPCI guidelines and RBI regulations.",
          imgSrc:
            "/assets/UPI&QRCodePayment/Enterprise UPI & QR API for Digital Payment Leaders/Streamlined Payment Acceptance & Processing.png",
        },
        {
          heading3: "Multi-App Support & Universal Compatibility",
          heading3Para:
            "Seamlessly integrate with all UPI-enabled applications and platforms. Support multiple payment methods including UPI ID transfers, QR code scanning, mobile number-based payments, and Aadhaar-enabled payment systems.",
          imgSrc:
            "/assets/UPI&QRCodePayment/Enterprise UPI & QR API for Digital Payment Leaders/Multi-App Support & Universal Compatibility.png",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2: "UPI & QR Payment Collection Solution For Every Business Need",
      heading2Para:
        "Optimize your digital payment operations and increase transaction success rates with our comprehensive UPI & QR API Solution. Our solution empowers businesses seeking instant payment processing while maximizing customer convenience and operational efficiency.",
      points: [
        {
          heading3: "E-commerce & Marketplaces",
          heading3Para:
            "Enable instant checkout with UPI payments and dynamic QR codes for seamless online shopping experiences.",
          imgSrc:
            "/assets/UPI/UPI & QR Solutions for Every Business Need/E-commerce & Marketplaces.png",
        },
        {
          heading3: "Merchants & Retailers",
          heading3Para:
            "Accept payments through static and dynamic QR codes for both online and offline retail transactions.",
          imgSrc:
            "/assets/UPI/UPI & QR Solutions for Every Business Need/QR Code Payment Solutions.png",
        },
        {
          heading3: "Ride-hailing & Delivery",
          heading3Para:
            "Process instant payments for rides, food delivery, and on-demand services with UPI integration.",
          imgSrc:
            "/assets/UPI/UPI & QR Solutions for Every Business Need/Delivery & Logistics.png",
        },
        {
          heading3: "EdTech Platforms",
          heading3Para:
            "Collect course fees, subscription payments, and educational content purchases through UPI.",
          imgSrc:
            "/assets/UPI/UPI & QR Solutions for Every Business Need/Mid-Scale EdTech Platforms.png",
        },
        {
          heading3: "Fintech Applications",
          heading3Para:
            "Allow P2P transfers, wallet top-ups, and financial service payments with secure UPI integration.",
          imgSrc:
            "/assets/UPI/UPI & QR Solutions for Every Business Need/Fintech Applications.png",
        },
        {
          heading3: "Banking & Financial Services",
          heading3Para:
            "Offer UPI-based banking services, loan EMI collections, and account-to-account transfers.",
          imgSrc:
            "/assets/UPI/UPI & QR Solutions for Every Business Need/Banking & Financial Services.png",
        },
        {
          heading3: "Subscription Services",
          heading3Para:
            "Automate recurring subscription billing and membership fee collection through UPI mandates.",
          imgSrc:
            "/assets/UPI/UPI & QR Solutions for Every Business Need/Launch Subscription Services.png",
        },
        {
          heading3: "Healthcare & Utilities",
          heading3Para:
            "Process medical bills, utility payments, and service charges with secure UPI transactions.",
          imgSrc:
            "/assets/UPI/UPI & QR Solutions for Every Business Need/Healthcare Services.png",
        },
      ],
    },
  ];

  const Steps = [
    {
      heading2: "How UPI & QR Payment Processing API Works",

      steps: [
        {
          step1: "UPI Integration Setup",
          step1Para:
            "Integrate our UPI & QR API with simple REST endpoints, comprehensive SDKs, and detailed documentation for rapid deployment.",
          imgSrc:
            "/assets/UPI&QRCodePayment/How UPI & QR Payment Processing Works/Integration Setup.png",
        },
        {
          step2: "QR Code Generation",
          step2Para:
            "Generate dynamic QR codes with payment details, amounts, and merchant information using our secure QR generation engine.",
          imgSrc:
            "/assets/UPI&QRCodePayment/How UPI & QR Payment Processing Works/QR Code Generation.png",
        },
        {
          step3: "Payment Processing",
          step3Para:
            "Customers scan QR codes or enter UPI IDs to initiate instant payments through their preferred UPI applications.",
          imgSrc:
            "/assets/UPI&QRCodePayment/How UPI & QR Payment Processing Works/Payment Processing.png",
        },
        {
          step4: "Real-time Settlement",
          step4Para:
            "Receive instant payment confirmations, status updates, and automated settlement to your designated bank accounts.",
          imgSrc:
            "/assets/UPI&QRCodePayment/How UPI & QR Payment Processing Works/Real-time Settlement.png",
        },
      ],
    },
  ];

  const content = [
    {
      heading2: "Maximize Payment Success Rates with UPI & QR API Integration",
      heading2Para:
        "Transform your payment acceptance capabilities through intelligent UPI processing and dynamic QR code generation.",
      points: [
        {
          heading3: "Enhanced Customer Experience",
          heading3Para:
            "Provide customers with the fastest and most convenient payment method in India. UPI payments complete within seconds, eliminating the need for cash handling or card processing delays.",
          imgSrc:
            "/assets/UPI&QRCodePayment/Maximize Payment Success with UPI & QR Integration/Enhanced Customer Experience.png",
        },

        {
          heading3: "Reduced Transaction Costs",
          heading3Para:
            "Significantly lower your payment processing costs compared to traditional card-based transactions. UPI offers cost-effective payment processing with transparent pricing models.",
          imgSrc:
            "/assets/UPI&QRCodePayment/Maximize Payment Success with UPI & QR Integration/Reduced Transaction Costs.png",
        },
        {
          heading3: "Instant Settlement & Cash Flow",
          heading3Para:
            "Receive instant settlements for UPI transactions, improving your cash flow and reducing working capital requirements. Real-time fund transfers ensure better liquidity management.",
          imgSrc:
            "/assets/UPI&QRCodePayment/Maximize Payment Success with UPI & QR Integration/Instant Settlement & Cash Flow.png",
        },
      ],
    },
  ];

  const features2 = {
    heading2: "Technical Specifications & API Capabilities",
    points: [
      {
        heading3: "API Features",
        type: "list", // tells the renderer to show bullet points
        features: [
          "RESTful API architecture with JSON responses",
          "Comprehensive SDKs for major programming languages",
          "Sandbox environment for testing and development",
          "Real-time webhook notifications",
          "Detailed API documentation and code samples",
        ],
      },
      {
        heading3: "Security Features",
        type: "list",
        features: [
          "End-to-end encryption for all transactions",
          "Advanced fraud detection and prevention",
          "Multi-factor authentication support",
          "Real-time risk assessment and monitoring",
        ],
      },
      {
        heading3: "Mobile Payment Optimization",
        type: "paragraph", // sentence-based card
        description:
          "AOPAY mobile UPI API is specifically optimized for mobile commerce with responsive design, fast loading times, and intuitive user interfaces. Support for progressive web apps (PWA) and native mobile app integration ensures seamless payment experiences across all platforms.",
      },
      {
        heading3: "Cross-Platform Compatibility",
        type: "paragraph",
        description:
          "AOPAY UPI payment integration works flawlessly across web browsers, mobile apps, and desktop applications. Native support for iOS and Android platforms with Flutter, React Native, and Cordova SDKs for hybrid app development.",
      },
    ],
  };

  const upiFeaturesData = {
    title: "AOPAY UPI & QR Collection API: Advanced Features & Capabilities",
    description:
      "Our UPI and QR payment processing solution streamlines digital payment operations with cutting-edge functionality. Help businesses achieve higher transaction success rates, reduce payment friction, and improve customer satisfaction through intelligent payment processing.",
    sections: [
      {
        imgSrc:
          "/assets/UPI&QRCodePayment/Advanced UPI & QR API Features & Capabilities/UPI Payment Integration.png",
        heading: "UPI Payment Integration",
        points: [
          "Real-time UPI payment processing",
          "Support for all major UPI applications",
          "VPA (Virtual Payment Address) validation",
          "Mobile number and MMID integration",
          "Aadhaar-enabled payment support",
          "Intent-based payment flows",
        ],
      },
      {
        imgSrc:
          "/assets/UPI&QRCodePayment/Advanced UPI & QR API Features & Capabilities/QR Code Management.png ",
        heading: "QR Code Management",
        points: [
          "Dynamic QR code generation with custom amounts",
          "Static QR codes for fixed merchant details",
          "QR code customization and branding",
          "Expiry time configuration and management",
          "Bulk QR code generation capabilities",
          "QR analytics and usage tracking",
        ],
      },
      {
        imgSrc:
          "/assets/UPI&QRCodePayment/Advanced UPI & QR API Features & Capabilities/Payment Status & Monitoring.png",
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
        imgSrc:
          "/assets/UPI&QRCodePayment/Advanced UPI & QR API Features & Capabilities/Payout & Settlement.png",
        heading: "Payout & Settlement",
        points: [
          "Instant settlement to bank accounts",
          "Bulk payout processing capabilities",
          "UPI-based payout distribution",
          "Scheduled payout automation",
          "Multi-beneficiary payout support",
          "Real-time payout status tracking",
        ],
      },
      {
        imgSrc:
          "/assets/UPI&QRCodePayment/Advanced UPI & QR API Features & Capabilities/Security & Compliance.png",

        heading: "Security & Compliance",
        points: [
          "NPCI guidelines compliance",
          "PCI DSS certified security",
          "End-to-end encryption",
          "Fraud detection and prevention",
          "Two-factor authentication support",
          "Comprehensive audit trails",
        ],
      },
      {
        imgSrc:
          "/assets/UPI&QRCodePayment/Advanced UPI & QR API Features & Capabilities/Developer Tools & Integration.png",
        heading: "Developer Tools & Integration",
        points: [
          "RESTful API with comprehensive documentation",
          "SDKs for Android, iOS, and web platforms",
          "Sandbox environment for testing",
          "Webhook integration for real-time updates",
          "Code samples and integration guides",
          "24/7 technical support and assistance",
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
      heading2: "Ready-to-Deploy UPI & QR Intent Payment Infrastructure",
      heading2Para:
        "AOPAY UPI & QR intent solution includes pre-built payment flows, comprehensive security frameworks, and advanced analytics for immediate deployment across web and mobile applications.",
      points: [
        {
          heading3: "Rapid Integration Timeline",
          heading3Para:
            "AOPAY UPI & QR API solution provides streamlined integration with detailed documentation, code samples, and SDK support. Launch payment acceptance capabilities within days rather than months.",
          imgSrc:
            "/assets/UPI&QRCodePayment/Ready-to-Deploy UPI & QR Infrastructure/Rapid Integration Timeline.png",
        },
        {
          heading3: "Flexible Deployment Models",
          heading3Para:
            "Choose from cloud-hosted API services for quick deployment or on-premises solutions for complete control. Support for both REST API integration and mobile SDK implementation.",
          imgSrc:
            "/assets/UPI&QRCodePayment/Ready-to-Deploy UPI & QR Infrastructure/Flexible Deployment Models.png",
        },
        {
          heading3: "Comprehensive Developer Support",
          heading3Para:
            "Access extensive documentation, sandbox environments, code libraries, and dedicated technical support to ensure smooth integration and optimal performance.",
          imgSrc:
            "/assets/UPI&QRCodePayment/Ready-to-Deploy UPI & QR Infrastructure/Comprehensive Developer Support.png",
        },
      ],
    },
  ];

  const HeadingSubheadings = [
    {
      heading2: "Grow Revenue with Smart UPI & QR Payment Processing Solution",
      heading2Para:
        "Maximize your business profitability through intelligent fee structures, dynamic pricing models, and comprehensive merchant management tools.",
      points: [
        {
          heading3: "Flexible Pricing Models",
          heading3Para:
            " Implement diversified pricing strategies for UPI transactions, QR code generation, and payout services. Optimize revenue through competitive transaction fees and value-added service charges.",
          imgSrc:
            "/assets/UPI&QRCodePayment/Grow Revenue with Smart Payment Processing/Flexible Pricing Models.png",
        },

        {
          heading3: "Merchant Segmentation & Tariffs",
          heading3Para:
            "Create personalized pricing tiers for different merchant categories, transaction volumes, and business models. Leverage individual tariff plans to meet specific partnership requirements and maximize retention.",
          imgSrc:
            "/assets/UPI&QRCodePayment/Grow Revenue with Smart Payment Processing/Merchant Segmentation & Tariffs.png",
        },
        {
          heading3: "Risk Management & Limits",
          heading3Para:
            "Implement intelligent transaction limits, velocity checks, and risk-based pricing to manage exposure while maintaining competitive rates for trusted merchants.",
          imgSrc:
            "/assets/UPI&QRCodePayment/Grow Revenue with Smart Payment Processing/Risk Management & Limits.png",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is UPI and how does it work with QR codes? ",
        answer:
          "UPI (Unified Payments Interface) is India's instant payment system that enables money transfer between bank accounts using mobile apps. When integrated with QR codes, customers can scan the QR code with any UPI app to instantly transfer money to the merchant's account without sharing sensitive bank details.",
      },
      {
        question:
          "How quickly can I integrate UPI & QR API into my application?",
        answer:
          "Integration typically takes 3-7 days depending on your application complexity. We provide comprehensive REST APIs, SDKs for major platforms, detailed documentation, sandbox environment, and dedicated technical support to ensure rapid deployment.",
      },
      {
        question: "Which UPI apps are supported by your platform?",
        answer:
          "Our platform supports all UPI-enabled apps including Google Pay, PhonePe, Paytm, Amazon Pay, BHIM, and all banking UPI apps. This ensures maximum customer reach and transaction success rates across India's digital payment ecosystem.",
      },
      {
        question: "Is the UPI & QR system secure and compliant?",
        answer:
          "Yes, our platform is fully compliant with NPCI guidelines and RBI regulations. We maintain PCI DSS certification, implement end-to-end encryption, provide comprehensive fraud detection, and ensure secure data handling throughout the payment process.",
      },
      {
        question: "What types of QR codes can I generate?",
        answer:
          "You can generate both static QR codes (fixed merchant details) and dynamic QR codes (with specific amounts and transaction details). Support for customizable expiry times, merchant branding, bulk generation, and comprehensive tracking analytics.",
      },
      {
        question: "How fast are UPI transaction settlements?",
        answer:
          "UPI transactions are processed instantly 24/7, including weekends and holidays. Settlement to your bank account can be configured for real-time, hourly, or daily batches based on your business requirements and banking partner capabilities.",
      },
      {
        question: "Can I process bulk payouts through UPI?",
        answer:
          "Yes, our platform supports bulk payout processing to UPI IDs, bank accounts, and mobile wallets. Features include scheduled payouts, automated retry for failed transactions, real-time status tracking, and comprehensive reporting for all payout operations.",
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
      <StepsWithExplanation Steps={Steps} />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <FeaturesSection
        title={upiFeaturesData.title}
        description={upiFeaturesData.description}
        sections={upiFeaturesData.sections}
      />

      <ContentWithDescriptivePoints content={content} />
      <H2DescH3Desc contentWithDescription={material} />
      <HeadingSubheadingSection HeadingSubheadings={HeadingSubheadings} />
      <GetStarted
        heading="Ready to Start Collecting UPI & QR Payments from Customers & Vendors?"
        subHeading="Connect with our UPI & QR payment experts and discover how AOPAY can transform your digital payment capabilities. Start processing instant payments today."
        btn1="Get Started Now"
        btn2="Schedule Demo"
      />
      {/* <ExploreProducts linkContent={linkContent} /> */}
    </>
  );
};

export default QRPayment;
