import { ExploreProducts } from "@/components/ExploreProducts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CardWithFeature } from "@/sections/CardWithFeature";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import {
  PaymentHead,
  CreditScoreSection,
  ToolsSection,
  GetStarted,
  FAQSection,
} from "@/sections/mySection";
import AutoSlidingPaymentFeatures from "@/sections/PaymentGateway/AutoSlidingPaymentFeatures";
import { StepsWithExplanation } from "@/sections/StepsWithExplanation";
import { Book, Code2, FlaskConical, Headset } from "lucide-react";

export const metadata = {
  title: "Payment Gateway India | Secure Online Payment Solutions | AOPay",
  description:
    "AOPay's payment gateway offers secure online payment processing with 99.9% uptime and instant settlement.",
  keywords:
    "payment gateway India, online payment processing, secure payment solutions, UPI payments, credit card processing, AOPay gateway, digital payments India, payment API integration, Online Recharge & Bill Payment, Online Bill Payment Solutions, Online Mobile Recharge, Online Utility Bill Payment, Online Payment Gateway, Online Digital Payments, Online Bill Pay API, Online Recharge Solutions, Online FasTag Recharge, Online LPG Gas Bill Payment, Online Water Bill Payment, Online Internet Bill Payment, Online LPG Cylinder Bill Payment, UPI Payment, Online Electricity Bill Payment, Online DTH Recharge, Online Internet Recharge, Online Municipal Bill Payment, Online Loan EMI Payment, Online Challan Payment, Online Mobile Postpaid Bill Payment, Online Prepaid Mobile Bill Payment, Online Insurance Payment, Online Education Fee Payment, Book Online Gas Cylinder, Online Broadband Bill Payment, Online Landline Bill Payment, Online Apartment Payment, Online TV Payment, Online Piped Gas Payment, Online IGL Gas Payment, Online Credit Card Bill Payment, Online Gold Payment, Online Municipal Tax Payment, Online Metro Card Recharge, Online Rent Payment, Online Hospital Bill Payment, Online Donation, Online Gift Cards, Online Google Play Recharge, Online Co-living-Spaces Payment, Online Co-Working-Spaces Payment.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/payment-gateway-india",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "Payment Gateway India | Secure Online Payment Solutions | AOPay",
    description:
      "AOPay's payment gateway offers secure online payment processing with 99.9% uptime and instant settlement.",
    type: "website",
    url: "https://aopay.in/payment-gateway-india",
    siteName: "AOPay",
    locale: "en_IN",
    images: [
      {
        url: "https://aopay.in/images/payment-gateway-og.jpg",
        width: 1200,
        height: 630,
        alt: "AOPay Payment Gateway India",
      },
    ],
  },
};

const PaymentGateway = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/payment-gateway-india",
    telephone: "011-42151216",

    description:
      "Cheapest Payment Gateway provider in India delivering secure payments, fast settlements, multiple payment options, and dedicated support for Indian businesses.",

    knowsAbout: [
      "White Label Payment Gateway Solution",
      "Online Payment Solutions",
      "Best Payment Gateway API Provider in India",
      "Local Payment Gateway Services",
      "Payment Gateway API Provider Near Me",
      "Merchant Payment Services",
      "Mobile Payment Gateway Services",
      "Affordable Payment Gateway for Small Businesses",
      "Payment Gateway with Lowest Transaction Fees in India",
      "Secure Payment Processing Services",
      "Subscription Payment Gateway",
      "E-commerce Payment Gateway",
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
      "Accept Online Payments From Anywere in India with AOPAY Payment Gateway API",
    subTitle:
      "Become a Payment Service Provider (PSP) and revolutionize how businesses handle payments. Our secure Payment Gateway API enables single payouts, bulk payouts, and payout links to bank accounts and wallets with enterprise-grade security.",
    imgSrc: "/assets/Payments/Online_Payment/Online_Payment_1.mp4",
    alt: "Multi-channel payment gateway API supporting credit cards, debit cards and digital wallets.",
    btn1: "Get Started Today",
    btn1Link: "/contact-us",

    video: true,
  };

  const features = [
    {
      title: "Online Payment Processing",
      items: [
        "Online merchant registration and onboarding",
        "Web payment acceptance via hosted payment pages",
        "Host-to-host API integration",
        "Customizable checkout page experiences",
        "PCI DSS compliant payment processing",
      ],
    },
    {
      title: "Payment Initiation & Requests",
      items: [
        "Automated invoice generation and sending",
        "Payment requests via push notifications",
        "Dynamic QR code generation with transaction data",
        "Payment links via email, SMS, and messaging platforms",
        "Scheduled and recurring payment requests",
      ],
    },
    {
      title: "Flexible Payment Acceptance",
      items: [
        "In-store payments via credit/debit cards",
        "Digital wallet integration (Apple Pay, Google Pay, etc.)",
        "Bank account direct payments",
        "Online checkout page payments",
        "Tip and gratuity acceptance",
      ],
    },
    {
      title: "Instant & Scheduled Payouts",
      items: [
        "Real-time payouts to merchant bank accounts",
        "Card-based settlement payments",
        "Mobile wallet payout distribution",
        "Bulk payout processing",
        "Scheduled payout automation",
      ],
    },
    {
      title: "Receipt & Documentation",
      items: [
        "Automated receipt generation",
        "Email receipt delivery",
        "Transaction history management",
        "Customizable receipt templates",
        "Digital receipt storage",
      ],
    },
    {
      title: "Refund & Dispute Management",
      items: [
        "Automated refund processing",
        "Customer-initiated refund requests",
        "Chargeback management",
        "Dispute resolution workflows",
        "Merchant digital wallet integration",
      ],
    },
    {
      section: "Accelerate Your Payment Platform Launch with AOPAY",
      children: [
        {
          title: "Individual & Corporate Clients",
          items: [
            "Streamlined onboarding with 2FA security",
            "Comprehensive customer profiles and settings",
            "Ongoing KYC/KYB compliance with trusted vendors",
            "Card and IBAN linking to accounts",
            "Fund transfer, payment requests, and other key features",
          ],
        },
        {
          title: "Merchant Solutions",
          items: [
            "Offline payment acceptance (POS terminals, QR codes)",
            "Online payment gateway integration",
            "Optimized checkout page experiences",
            "Advanced dispute resolution tools",
            "Comprehensive reporting and analytics",
            "Real-time transaction monitoring",
          ],
        },
        {
          title: "System Management & Control",
          items: [
            "Flexible fee and limit configuration",
            "Integrated CRM and customer chat support",
            "Detailed transaction monitoring and reporting",
            "AML and anti-fraud officer workspace",
            "User action history and audit trails",
            "Advanced reconciliation and settlement",
          ],
        },
      ],
    },
  ];

  const toolsContent = {
    imgSrc: "/assets/Payments/Online_Payment/Online_Payment_2.png",
    alt: "Secure payment gateway API integration with advanced fraud protection and encryption.",
    content: [
      {
        icon: "/assets/Payments/Online_Payment/Your_Favourite_Brands.png",
        title: "Your Favorite Brands Trust AOPay Payments Gateway",
        description:
          "Make secure payments effortlessly on websites and apps using AOPay’s trusted payments gateway. Whether it’s via UPI, Credit Card, Debit Card, NEFT, or EMIs, enjoy a smooth payment experience with your favorite brands. Convenient, safe, & fast — AOPay makes transactions smooth for every customer.",
      },
      {
        icon: "/assets/Payments/Online_Payment/India_Pay_AOPAy.png",
        title: "India Pays Online on AOPay App",
        description:
          "More than a million Indians use AOPay for bill payments, recharges, send money to friends & family, & book travel tickets.",
      },
      {
        icon: "/assets/Payments/Online_Payment/Bank_Grade_Security.png",
        title: "Bank Grade Security every time you pay",
        description:
          "Anti-fraud technology & PCI-DSS compliance, AOPay ensures that every transaction is safeguarded with 128-bit encryption.",
      },
      {
        icon: "/assets/Payments/Online_Payment/Transactions_Per_Second.png",
        title: "10,000 transactions per second",
        description:
          "Our systems are engineered to support high volume of transactions and we ensure that every transaction is processed quickly & efficiently, even during peak loads.",
      },
    ],
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2: "AOPAY Payment Processing API Solution For Businesses",
      heading2Para:
        "Discover our powerful payment gateway solution through an interactive demo. Explore seamless transaction management, real-time balance dashboards, store and merchant management, automated payout processing, and advanced analytics — all designed to empower modern businesses.",
      points: [
        {
          imgSrc:
            "/assets/PaymentGateway/CompletePaymentProcessingSolutionPoweredByAOPay/RealTimeTransactionMonitoring.png",
          heading3: "Real-time Transaction Monitoring",
          heading3Para:
            "Track all payment transactions, payout statuses, and wallet balances in real-time through our intuitive merchant dashboard.",
        },
        {
          imgSrc:
            "/assets/PaymentGateway/CompletePaymentProcessingSolutionPoweredByAOPay/AutomatedPayoutManagement.png",
          heading3: "Automated Payout Management",
          heading3Para:
            "Streamline your payout processes with automated bulk transfers, scheduled payments, and intelligent routing to optimize transaction costs.",
        },
        {
          imgSrc:
            "/assets/PaymentGateway/CompletePaymentProcessingSolutionPoweredByAOPay/MultiStoreManagement.png",
          heading3: "Multi-Store Management",
          heading3Para:
            "Manage multiple business locations, online stores, and payment channels from a single, unified platform.",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2:
        "AOPAY Enterprise Payment Gateway Solution for World-Class Businesses",

      points: [
        {
          imgSrc:
            "/assets/PaymentGateway/WorldClassBusinesses/EveryBusinessModel.png",
          heading3: "Comprehensive Payment Solutions for Every Business Model",
          heading3Para:
            "Empower various business types including e-commerce marketplaces, brick-and-mortar stores, SaaS platforms, subscription services, and digital marketplaces. Our payment solution supports diverse payment acceptance channels and payout methods.",
        },
        {
          imgSrc:
            "/assets/PaymentGateway/WorldClassBusinesses/PayoutProcessing.png",
          heading3: "Automated Payment Acceptance and Payout Processing",
          heading3Para:
            "Maximize flexibility with customizable payment transaction flows. Offer frictionless payment processing for in-store purchases and secure online payment services, while allowing instant payouts to bank accounts and digital wallets.",
        },
        {
          imgSrc:
            "/assets/PaymentGateway/WorldClassBusinesses/MultiCurrency&MultiChannelSupport.png",
          heading3: "Seamless Multi-Channel Payment Support",
          heading3Para:
            "Allow merchants to accept credit card payments, process digital wallet transactions, handle bank transfers, and manage various payout methods across Indian markets.",
        },
      ],
    },
  ];

  const content = [
    {
      heading2: "Maximize Revenue with Flexible Payment Gateway Pricing Models",
      heading2Para:
        "Optimize your payment processing business profitability through intelligent fee structures and personalized merchant pricing strategies.",
      points: [
        {
          imgSrc:
            "/assets/PaymentGateway/FlexiblePricingModels/DiversifiedPricingStrategies.png",
          heading3: "Diversified Pricing Strategies",
          heading3Para:
            "Manage payment processing fees independently from card fees and wire transfer costs to achieve maximum pricing flexibility and competitive positioning.",
        },

        {
          imgSrc:
            "/assets/PaymentGateway/FlexiblePricingModels/PersonalizedMerchantTariffs.png",
          heading3: "Personalized Merchant Tariffs",
          heading3Para:
            "Easily customize pricing structures for different customer segments. Implement individual tariff plans to meet specific business contract requirements and maximize merchant retention.",
        },
        {
          imgSrc:
            "/assets/PaymentGateway/FlexiblePricingModels/RiskBasedTransactionLimits.png",
          heading3: "Risk-Based Transaction Limits",
          heading3Para:
            "Effectively manage potential risks by implementing turnover and transaction limits for specific merchant segments based on comprehensive risk assessment profiles.",
        },
      ],
    },
  ];

  const features3 = {
    heading2: "Payment Checkout Experience Crafted for All Businesses",
    description:
      "Deliver exceptional checkout experiences with our payment gateway checkout API designed for maximum conversion and customer satisfaction.",
    points: [
      {
        heading3: "Web Checkout Solutions",
        type: "list",
        description:
          "Make payments easier on your website with AOPAY's web checkout solutions. Our secure payment interface ensures a frictionless checkout process, reducing cart abandonment and enhancing conversion rates with optimized payment flows.",
        features: [
          "Customizable payment forms and branding",
          "Guest checkout and saved payment methods",
          "Real-time payment validation and error handling",
          "Multi-language and currency support",
        ],
      },
      {
        heading3: "Mobile App Checkout",
        type: "list",
        description:
          "Integrating AOPAY's payment gateway into your mobile app has never been easier. With our dedicated SDKs, businesses can offer customers a fast, one-click payment experience directly from their mobile devices, ensuring a seamless shopping journey on-the-go.",
        features: [
          "Native iOS and Android SDKs",
          "Biometric authentication support",
          "In-app payment completion",
          "Flutter and React Native compatibility",
        ],
      },
    ],
  };

  const Steps = [
    {
      heading2: "Easy Payment Gateway API Integration Process",
      heading2Para:
        "Integrating AOPAY's payment gateway into your platform is hassle-free. Whether you're developing a website or mobile app, our APIs make it easy to connect and start processing payments.",
      steps: [
        {
          step1: "Account Setup & API Keys",
          step1Para:
            "Register for your payment gateway account and receive API credentials instantly. Access comprehensive documentation, sandbox environment, and developer tools for seamless integration planning and testing.",
        },
        {
          step2: "Choose Integration Method",
          step2Para:
            "Select from multiple integration options including hosted checkout, server-to-server API, or mobile SDKs. Our payment API integration supports all major programming languages and frameworks.",
        },
        {
          step3: "Implement & Test",
          step3Para:
            "Implement payment flows using our production-ready code samples and SDKs. Test all scenarios in our sandbox environment with our payment gateway testing tools and validation utilities.",
        },
        {
          step4: "Go Live & Monitor",
          step4Para:
            "Switch to production environment and start accepting payments. Monitor transactions with real-time analytics, automated reporting, and our comprehensive payment dashboard for business insights.",
        },
      ],
    },
  ];

  const resources = [
    {
      icon: <Book className="w-6 h-6 text-blue-600" />,
      title: "API Documentation",
      description: "Complete API reference with examples",
    },
    {
      icon: <Code2 className="w-6 h-6 text-blue-600" />,
      title: "SDKs & Libraries",
      description: "Ready-to-use SDKs for all platforms",
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-blue-600" />,
      title: "API Playground",
      description: "Interactive testing environment",
    },
    {
      icon: <Headset className="w-6 h-6 text-blue-600" />,
      title: "24/7 Support",
      description: "Dedicated technical assistance",
    },
  ];

  const features2 = {
    heading2: "Advanced Payment Gateway Features",
    points: [
      {
        heading3: "Smart Payment Routing",
        type: "paragraph",
        description:
          "Intelligent transaction routing through multiple payment processors ensures maximum success rates. Our payment routing API automatically selects the optimal path for each transaction based on success rates, costs, and performance metrics.",
      },
      {
        heading3: "Instant Refund Processing",
        type: "paragraph",
        description:
          "Delight customers with instant refunds processed within 5 minutes of request. Our refund API supports partial refunds, bulk refunds, and automated refund workflows with real-time status tracking.",
      },
      {
        heading3: "Subscription & Recurring Billing",
        type: "paragraph",
        description:
          "Automate payment collection with flexible subscription management. Our recurring payment gateway handles dunning management, proration, upgrades, and downgrades with intelligent retry mechanisms.",
      },
      {
        heading3: "Native OTP Experience",
        type: "paragraph",
        description:
          "Offer one-click payment experience to your customers for card payments. Seamless OTP handling within your application eliminates redirections and provides a smooth payment gateway checkout experience.",
      },
      {
        heading3: "Token Hub & Vault",
        type: "paragraph",
        description:
          "Store customer payment details securely and become compliant with latest guidelines. Our payment tokenization API enables one-click repeat payments while maintaining PCI compliance.",
      },
      {
        heading3: "Comprehensive Analytics",
        type: "paragraph",
        description:
          "Detailed payment analytics with customizable reports, success rate monitoring, and revenue tracking. Our payment analytics dashboard provides actionable insights for business optimization.",
      },
    ],
  };

  const paymentworks = [
    {
      step: "1",
      title: "Customer Makes Payment",
      description:
        "Customer selects preferred payment method and enters payment details through our secure payment interface.",
    },
    {
      step: "2",
      title: "Secure Data Encryption",
      description:
        "Our payment processing API encrypts payment data and sends it securely to the customer's bank for authorization.",
    },
    {
      step: "3",
      title: "Bank Authorization",
      description:
        "Customer's bank verifies and authorizes the payment through secure banking networks and fraud detection systems.",
    },
    {
      step: "4",
      title: "Instant Confirmation",
      description:
        "Once approved, funds are transferred and both customer and business receive instant confirmation through our payment notification system.",
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is a Payment Gateway API and how does it work? ",
        answer:
          "Payment Gateway is a secure interface that allows businesses to process payments, handle payouts, and manage financial transactions. Our API facilitates single payouts, bulk payouts, and payout links to bank accounts and digital wallets through secure, PCI DSS-compliant infrastructure.",
      },
      {
        question: "How quickly can I start processing payments with AOPAY?",
        answer:
          "With AOPAY's pre-built payment processing infrastructure, you can launch your payment services in days rather than months. Our ready-to-deploy solution includes backend systems, mobile apps, and expert development support.",
      },
      {
        question: "What types of businesses can benefit from payment gateway?",
        answer:
          "Our payment gateway serves startups, e-commerce businesses, SaaS platforms, marketplaces, EdTech companies, retail businesses, NBFCs, and developers. Any business needing secure payment processing and payout capabilities can benefit from our solution.",
      },

      {
        question: "Is the payment system secure and compliant?",
        answer:
          "Yes, AOPAY payment gateway is PCI DSS compliant and includes comprehensive security features including 2FA, KYC/KYB verification, AML compliance, and anti-fraud monitoring systems to ensure secure payment processing.",
      },
      {
        question: "Can I customize the payment processing fees and limits?",
        answer:
          "Absolutely. AOPAY offers flexible fee structures and transaction limits that can be customized for different merchant segments, individual clients, and specific business requirements to maximize your revenue potential.",
      },
    ],
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
        heading: "UPI & QR Payment",
        paragraph:
          "Pay & Collect Payment with QR codes for instant, contactless transactions at stores, online, & more.",
        link: "/upi-qr-payment",
        icon: "/assets/ExploreProducts/Payment/UPI&QR.png",
        alt: "UPI & QR Payment",
      },
    ],
  };

  const material = [
    {
      heading2: "AOPAY Ready-to-Deploy Payment Processing Infrastructure",
      heading2Para:
        "AOPAY payment processing solution includes pre-integrated providers for essential functionalities including payment acceptance, card issuance, and comprehensive KYC/KYB compliance solutions.",
      points: [
        {
          imgSrc: "/assets/PaymentGateway/ReadytoDeploy/TimeToMarket.png",
          heading3: "Accelerated Time-to-Market Solutions",
          heading3Para:
            "AOPAY merchant payment processing solution provides a streamlined path to product development, positioning your business for rapid offline and online payment processing product launches.",
        },
        {
          imgSrc:
            "/assets/PaymentGateway/ReadytoDeploy/FlexibleDeploymentOptions.png",
          heading3: "Flexible Deployment Options",
          heading3Para:
            "Choose from hybrid-cloud deployment for cost-effective quick launches or source code licensing for complete control and vendor independence.",
        },
        {
          imgSrc:
            "/assets/PaymentGateway/ReadytoDeploy/RegulatoryComplianceSupport.png",
          heading3: "Regulatory Compliance Support",
          heading3Para:
            "Access source code to customize your payment solution for specific regulatory standards and ensure compliance across multiple jurisdictions and markets.",
        },
      ],
    },
  ];

  const steps2 = [
    {
      imgSrc:
        "/assets/PaymentGateway/EnterpriseScalePerformance&Integration/2700.png",
      title: "2,700+ Transactions Per Second (TPS) Processing Capacity",
    },
    {
      imgSrc:
        "/assets/PaymentGateway/EnterpriseScalePerformance&Integration/SystemUptime.png",
      title: "99.9% System Uptime & Reliability",
    },
    {
      imgSrc:
        "/assets/PaymentGateway/EnterpriseScalePerformance&Integration/24x7.png",
      title: "24/7 Real-time Payment Processing & Support",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PaymentHead headerSection={headerContent} />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      {/* <CreditScoreSection
        features={features}
        creditContent="Get wide range of Payment Methods when you pay with AOPay"
      />
      <ToolsSection toolsContent={toolsContent} /> */}
     
      <AutoSlidingPaymentFeatures/>
      <ContentWithDescriptivePoints content={content} />

      <H2DescH3Desc contentWithDescription={material} />
      <FAQSection faqContent={faqContent} />
      <GetStarted
        heading="Ready to Transform Your Payment Processing?"
        subHeading="Connect with our payment gateway experts and discover how AOPAY aligns with your business needs. Start processing payments and payouts today."
        btn1="Get Started Now"
        btn2="Request Demo"
      />
      {/* <ExploreProducts linkContent={linkContent} /> */}
    </>
  );
};

export default PaymentGateway;
