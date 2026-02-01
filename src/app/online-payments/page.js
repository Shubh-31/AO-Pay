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
import Script from "next/script";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { HeadingSubheadingSection } from "@/sections/HeadingSubheadingSection";
import PaymentProcessingPlatform from "@/sections/PaymentProcessingPlatform";
import TrustedPerformanceMetrics from "@/sections/TrustedPerformanceMetrics";
import QuickIntegrationPaymentAcceptance from "@/sections/QuickIntegrationPaymentAcceptance";
import ComprehensiveIntegrationSupport from "@/sections/ComprehensiveIntegrationSupport";

export const metadata = {
  title: "Best Payment Collection Management Software & Solutions | AOPAY",
  description:
    "Accept online payments seamlessly with AoPay's comprehensive solution. Credit cards, debit cards, UPI, wallets, net banking, international payments for businesses of all sizes.",
  keywords:
    "UPI payment gateway, QR code payments, UPI QR code generator, contactless payments, UPI integration, digital payments, AOPay UPI, merchant QR code, Secure Online Payments, Fast UPI Transfer, UPI Transactions, Instant Payments, UPI Money Transfer, Online Payments, UPI Payment App, UPI Payment Solutions, Quick Payment Solutions, Instant Bank Transfer, Digital Wallet UPI, Secure Transactions, UPI Bill Payment, Fast Payment System, Online UPI Transfer, Mobile UPI Payments, Instant Bill Payment, Easy UPI Payments, Pay with UPI, UPI Transfer System, UPI Platform, Secure Payment Gateway, UPI Network, UPI Payment Features, UPI for Businesses, Instant Payment Options, UPI Transaction Speed, Payment Solutions, Instant Fund Transfer, UPI Security, Digital Transactions, Online Money Transfer, Fast Online Payment, UPI Billing, UPI Payment Process, QR Code Payment Collection, Secure QR Payment, Digital Payment Collection, Instant QR Payments, Easy Payment Acceptance, Fast QR Payment, QR Payment System, Mobile Payment Collection, Digital Payment Gateway, Cashless Payment Solutions, Business Payment Collection, Digital Wallet QR, QR Payment App, QR CodeAcceptance, Instant Fund Collection, Payment Gateway QR Code, QR Code Transactions, QR Payment Method, Seamless Payment Collection, QR Payment Solutions, QR Code for Payments, Fast Payment Gateway, QR Payment Technology, QR Collection Solution, Contactless Transaction, Payment Collection App, Instant Payment Gateway, QR Payment Systems for Small Business, Simplified Payments.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/online-payments",
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
      "Online Payment Acceptance Solution | Accept Digital Payments | AoPay",
    description:
      "Accept online payments via cards, UPI, wallets, and net banking seamlessly.",
    url: "https://aopay.in/online-payments",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/online-payments-og.jpg",
        width: 1200,
        height: 630,
        alt: "Online UPI Payment Banner",
      },
    ],
    twitter: {
      card: "summary_large_image",
    },
  },
};

const PaymentAcceptance = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/online-payments",
    telephone: "011-42151216",
    description:
      "Cheapest payment acceptance solutions in India for fast, secure, and seamless online & offline transactions with multiple payment options and reliable support.",
    serviceType: [
      "White Label Payment Acceptance Solutions",
      "Secure mobile and online payment solutions",
      "Secure merchant payment solutions Provider Near Me",
      "Best payment acceptance solutions Provider in India",
      "Contactless and card payment acceptance for retail",
      "Payment acceptance solutions for Small Businesses",
      "Digital payment acceptance for multi-location businesses",
      "Affordable POS & e-commerce payment processing solutions for Small Businesses",
      "Multi-channel payment gateway integration for merchants in India",
      "Recurring and subscription payment processing services Provider",
      "Digital and mobile payment acceptance services for Local Businesses",
      "Multi-currency payment acceptance for international merchants",
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
      "Smart Payment Collection Infrastructure for UPI, Cards & Net Banking",
    subTitle:
      "Accept payments through UPI, credit cards, debit cards, and net banking with a single integration. Offer customers multiple payment options with secure, fast, and reliable payment collection infrastructure.",
    imgSrc: "/assets/Payments/QR_Payment/QR_1.mp4",
    btn1: "Start Building Today",
    btn1Link: "/contact-us",
    btn2: "Request Demo",
    btn2Link: "/contact-us",
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
      heading2: "Perfect for Every Business Model",
      heading2Para:
        "AOPAY Payment Acceptance API adapts to diverse business needs, from startups to enterprise-level organizations. Whether you're building an e-commerce platform, SaaS application, or fintech solution, our flexible API scales with your growth.",
      points: [
        {
          heading3: "E-commerce Platforms",
          heading3Para:
            "Smooth checkout experiences, cart abandonment recovery, and subscription billing.",
          imgSrc:
            "/assets/PaymentAcceptance/Perfect for Every Business Model/E-commerce Platforms.png",
        },
        {
          heading3: "SaaS & Subscriptions",
          heading3Para:
            "Recurring billing, trial periods, usage-based pricing, and dunning management.",
          imgSrc:
            "/assets/PaymentAcceptance/Perfect for Every Business Model/SaaS & Subscription Platforms.png",
        },
        {
          heading3: "Fintech & Neo-banks",
          heading3Para:
            "Account funding, P2P transfers, investment transactions, and lending solutions.",
          imgSrc:
            "/assets/PaymentAcceptance/Perfect for Every Business Model/Fintech & Neo-banks.png",
        },
        {
          heading3: "On-Demand Services",
          heading3Para:
            "Real-time payments, driver payouts, tip handling, and fare splitting.",
          imgSrc:
            "/assets/PaymentAcceptance/Perfect for Every Business Model/on-demand services.png",
        },
        {
          heading3: "Education & EdTech",
          heading3Para:
            "Tuition payments, course purchases, installment plans, and certification fees.",
          imgSrc:
            "/assets/PaymentAcceptance/Perfect for Every Business Model/Education & EdTech.png",
        },
        {
          heading3: "Entertainment",
          heading3Para:
            "In-app purchases, virtual currency, subscription tiers, and event ticketing.",
          imgSrc:
            "/assets/PaymentAcceptance/Perfect for Every Business Model/Entertainment.png",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2: "AOPAY Advanced Payment Gateway Solution Features",

      points: [
        {
          heading3: "Intelligent Payment Orchestration",
          heading3Para:
            "AOPAY smart routing technology automatically optimizes payment processing by selecting the best payment processor based on success rates, costs, and geographic factors. This ensures maximum transaction approval rates while minimizing processing fees.",
          imgSrc:
            "/assets/PaymentAcceptance/AOPAY Advanced Payment Gateway Solution Features/Intelligent Payment Orchestration.png",
        },
        {
          heading3: "Multi-Currency & Global Support",
          heading3Para:
            "Accept payments in 150+ currencies with real-time exchange rates and local payment method support. Our global infrastructure ensures fast, reliable payment processing across different regions with compliance to local regulations.",
          imgSrc:
            "/assets/PaymentAcceptance/AOPAY Advanced Payment Gateway Solution Features/Multi-Currency & Global Support.png",
        },
        {
          heading3: "Advanced Analytics & Reporting",
          heading3Para:
            "Gain comprehensive insights into your payment performance with real-time dashboards, detailed transaction analytics, and customizable reporting tools. Monitor success rates, identify trends, and optimize your payment flows for better conversion.",
          imgSrc:
            "/assets/PaymentAcceptance/AOPAY Advanced Payment Gateway Solution Features/Advanced Analytics & Reporting.png",
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
      heading2: "Perfect for Every Business Model",
      heading2Para:
        "AOPAY Payment Acceptance API adapts to diverse business needs, from startups to enterprise-level organizations. Whether you're building an e-commerce platform, SaaS application, or fintech solution, our flexible API scales with your growth.",
      points: [
        {
          heading3: "E-commerce Platforms",
          heading3Para:
            "Smooth checkout experiences, cart abandonment recovery, and subscription billing.",
        },

        {
          heading3: "SaaS & Subscriptions",
          heading3Para:
            "Recurring billing, trial periods, usage-based pricing, and dunning management.",
        },
        {
          heading3: "Fintech & Neo-banks",
          heading3Para:
            "Account funding, P2P transfers, investment transactions, and lending solutions.",
        },
        {
          heading3: "On-Demand Services",
          heading3Para:
            "Real-time payments, driver payouts, tip handling, and fare splitting.",
        },
        {
          heading3: "Education & EdTech",
          heading3Para:
            "Tuition payments, course purchases, installment plans, and certification fees.",
        },
        {
          heading3: "Entertainment",
          heading3Para:
            "In-app purchases, virtual currency, subscription tiers, and event ticketing.",
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
      heading2: "Enterprise-Grade Infrastructure",

      points: [
        {
          heading3: "Scalable Cloud Architecture",
          heading3Para:
            "Built on modern cloud infrastructure that automatically scales to handle traffic spikes and growing transaction volumes. Our distributed architecture ensures consistent performance and reliability across different geographic regions.",
          imgSrc:
            "/assets/PaymentAcceptance/Enterprise-Grade Infrastructure/Scalable Cloud Architecture.png",
        },
        {
          heading3: "Advanced Security Framework",
          heading3Para:
            "Multiple layers of security including tokenization, encryption at rest and in transit, biometric authentication support, and machine learning-powered fraud detection. Our security measures exceed industry standards and regulatory requirements.",
          imgSrc:
            "/assets/PaymentAcceptance/Enterprise-Grade Infrastructure/Advanced Security Framework.png",
        },
        {
          heading3: "Comprehensive Compliance Coverage",
          heading3Para:
            "Maintain compliance across multiple jurisdictions with support for PCI DSS, GDPR, PSD2, and other regional payment regulations. Our compliance team continuously monitors regulatory changes to keep your business protected.",
          imgSrc:
            "/assets/PaymentAcceptance/Enterprise-Grade Infrastructure/Comprehensive Compliance Coverage.png",
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
          imgSrc:
            "/assets/PaymentAcceptance/Revenue Optimization Tools/Dynamic Pricing & Fee Management.png",
        },

        {
          heading3: "Advanced Risk Management",
          heading3Para:
            "Protect your business with sophisticated risk management tools including customizable transaction limits, velocity checks, geographic restrictions, and machine learning-based fraud scoring systems.",
          imgSrc:
            "/assets/PaymentAcceptance/Revenue Optimization Tools/Advanced Risk Management.png",
        },
        {
          heading3: "Conversion Optimization",
          heading3Para:
            "Increase payment success rates with smart retry logic, alternative payment method suggestions, and checkout optimization features that reduce cart abandonment and improve customer experience.",
          imgSrc:
            "/assets/PaymentAcceptance/Revenue Optimization Tools/Conversion Optimization.png",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is a Payment Acceptance API?",
        answer:
          "A Payment Acceptance API is a software interface that enables businesses to securely process online payments, including credit cards, digital wallets, and bank transfers through their applications or websites. It handles the complex process of payment processing, security, and compliance.",
      },
      {
        question: "How secure is the Payment Acceptance API?",
        answer:
          "Our API maintains the highest security standards with PCI DSS Level 1 compliance, end-to-end encryption, tokenization, and advanced fraud detection systems. We employ multiple layers of security to protect sensitive payment data and ensure secure transactions.",
      },
      {
        question: "What payment methods are supported?",
        answer:
          "Our API supports a comprehensive range of payment methods including major credit cards (Visa, MasterCard, American Express), debit cards, digital wallets (Apple Pay, Google Pay, PayPal), bank transfers, ACH payments, and various regional payment methods across 180+ countries.",
      },
      {
        question: "How long does integration typically take?",
        answer:
          "Basic integration can be completed in 1-2 weeks with our comprehensive documentation, SDKs, and sandbox environment. More complex customizations or enterprise implementations may require additional time based on specific requirements and testing needs.",
      },
      {
        question: "Do you support international payments?",
        answer:
          "Yes, our platform supports multi-currency transactions and cross-border payments across 180+ countries. We handle currency conversion, local payment methods, and compliance with regional regulations to enable global payment processing.",
      },
      {
        question: "What kind of support do you provide?",
        answer:
          "We offer comprehensive support including detailed API documentation, code examples, sandbox environment, dedicated developer support team, and 24/7 technical assistance for integration and ongoing operational needs.",
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
      <TrustedPerformanceMetrics />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      {/* <ContentWithDescriptivePoints content={content} /> */}
      <QuickIntegrationPaymentAcceptance />
      <ComprehensiveIntegrationSupport />
      <H2DescH3Desc contentWithDescription={material} />
      <HeadingSubheadingSection HeadingSubheadings={HeadingSubheadings} />
      <FAQSection faqContent={faqContent} />
      <GetStarted
        heading="Ready to Transform Your Payment Experience?"
        subHeading="Join thousands of businesses that trust our Payment Acceptance API for secure, scalable, and efficient payment processing. Start building your payment solution today."
        btn1="Contact Sales"
        btn2="View Documentation"
      />
    </>
  );
};

export default PaymentAcceptance;
