import { ExploreProducts } from "@/components/ExploreProducts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CardWithFeature } from "@/sections/CardWithFeature";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import OutOfTheBox from "@/sections/CoreBanking/OutOfTheBox";
import SecondaryFeatures from "@/sections/CoreBanking/SecondaryFeatures";
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
import { StepsWithExplanation } from "@/sections/StepsWithExplanation";
import { Book, Code2, FlaskConical, Headset } from "lucide-react";
import Script from "next/script";

export const metadata = {
  title: "Core Banking Software for Digital Transformation | AOPAY",
  description:
    "Transform banking operations with AoPay's core banking solution. Manage deposits, loans, accounts, transactions with robust CBS for cooperative banks, NBFCs, microfinance institutions.",
  keywords: [
    "bank account verification API",
    "bank verification",
    "IFSC verification",
    "account verification",
    "AOPay bank verification",
    "penny drop verification",
    "banking KYC India",
    "verify bank account details",
    "bank account number verification",
    "online bank account check",
    "verify bank account holder",
    "bank account details confirmation",
    "bank account validation",
    "verify bank account name",
    "account number verification online",
    "bank account linking verification",
    "online account verification service",
    "account holder identity check",
    "secure bank verification",
    "bank account details check",
    "bank KYC verification",
    "verify bank account for payment",
    "bank account status check",
    "check bank account validity",
    "verify account number",
    "verify bank account by IFSC code",
    "bank account authentication",
    "bank account verification service",
    "account verification for transfers",
    "bank account holder check",
    "verify account status for loans",
    "secure bank verification tool",
    "bank account details confirmation online",
    "confirm bank account ownership",
    "online bank account lookup",
    "verify bank account for salary",
    "bank account validation process",
    "verify bank account using PAN",
    "verify account linked mobile",
    "bank account check service",
    "online bank details verification",
  ],

  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://aopay.in/core-banking-solutions",
  },
  openGraph: {
    title: "Core Banking Solution | Complete Banking Software | AoPay",
    description:
      "Transform banking operations with comprehensive CBS for banks and NBFCs.",
    url: "https://aopay.in/core-banking-solutions",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/core-banking-og.jpg",
        width: 800,
        height: 600,
        alt: "AOPAY Open Graph Image",
      },
    ],
    type: "website",
  },
};


const CoreBanking = () => {

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "AOPAY Technology Pvt. Ltd.",
      url: "https://aopay.in/core-banking-solutions",
      telephone: "011-42151216",
      description:
        "Cheapest Core Banking Software in India providing scalable, secure, and feature-rich solutions for banks and financial institutions to enhance efficiency.",
      serviceType: [
        "White Label Core Banking Software Solution",
        "Cloud Core Banking Solution for NBFCs",
        "Core Banking Software Provider Near Me",
        "Best Core Banking Software Solution Provider in India",
        "Core Banking Software with API integration for payments",
        "Mobile banking integration with core banking software",
        "Integrate payments, loans & deposits with core banking software",
        "Affordable Core Banking Software for Small Banks",
        "Core banking solution for seamless digital banking in India",
        "Secure cloud core banking platform for NBFCs",
        "SaaS Digital Core Banking Solution for Banks",
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
      "White-Label Core Banking Software For Modern & Scalable Banking Operations",
    subTitle:
      "Create branchless banking solutions and deliver top-notch financial services with our secure core banking solution. Launch your digital bank faster using our comprehensive white-label platform with complete source code access, designed for commercial banks, neo banks, RRBs, and microfinance institutions.",
    imgSrc: "/assets/CoreBanking/CORE BANKING.jpg",
    alt: "Multi-channel payment gateway API supporting credit cards, debit cards and digital wallets.",
    btn1: "Get Started",
    btn1Link: "/contact-us",
    video: false,
  };


  const Secondaryfeatures = [
    {
      title: "Contracts & Vendor Management",
      items: [
        "Vendor terms and conditions input system",
        "Customer contract creation with variable commissions",
        "Multiple contract types and pricing tiers",
        "Automated contract management workflows",
      ],
    },
    {
      title: "Advanced Fees & Limits Configuration",
      items: [
        "Customizable fees: percentage, flat fee, or combination",
        "Configurable fee bearer (sender or receiver)",
        "Transaction limits per period, amount, or number",
        "Dynamic pricing based on customer segments",
      ],
    },
    {
      title: "Reconciliation & Settlement",
      items: [
        "Company liabilities reconciliation",
        "Client and vendor liability management",
        "Unmatched transaction identification",
        "Automated discrepancy resolution",
      ],
    },
    {
      title: "Cash Operations Management",
      items: [
        "Any type of cash accounting capabilities",
        "Cash-desk operations management",
        "Physical cash integration with digital platform",
        "Multi-location cash management",
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
      heading2: "Core Banking Software with Source Code License",
      heading2Para:
        "Get complete control over your core banking with our enterprise source code license, designed specifically for banks and financial institutions.",
      points: [
        {
          imgSrc:
            "/assets/CoreBanking/Source Code License For Financial Enterprises/Full Source Code Access.png",
          heading3: "Full Source Code Access",
          heading3Para:
            "Complete freedom to modify and customize your core banking solution at your own pace. Build unique features and integrations that differentiate your banking services.",
        },
        {
          imgSrc:
            "/assets/CoreBanking/Source Code License For Financial Enterprises/Warranty Protection.png",
          heading3: "Warranty Protection",
          heading3Para:
            "Comprehensive coverage for bug fixes and security updates ensures your Core Banking Platform remains secure and operational at all times.",
        },
        {
          imgSrc:
            "/assets/CoreBanking/Source Code License For Financial Enterprises/Full Source Code Access.png",
          heading3: "Comprehensive Support",
          heading3Para:
            "We empower your development team with in-depth training, technical guidance, and ongoing support to maximize your core banking solution implementation.",
        },
        {
          imgSrc:
            "/assets/CoreBanking/Source Code License For Financial Enterprises/Meet Your Deadlines.png",
          heading3: "Meet Your Deadlines",
          heading3Para:
            "Operate with your internal team to meet critical deadlines, bypassing vendor dependencies and maintaining complete control over your project timeline.",
        },
        {
          imgSrc:
            "/assets/CoreBanking/Source Code License For Financial Enterprises/Minimized Development Risks.png",
          heading3: "Minimized Development Risks",
          heading3Para:
            "Avoid the bottlenecks and uncertainties of building core banking solution from scratch. Launch with proven, battle-tested banking infrastructure.",
        },
        {
          imgSrc:
            "/assets/CoreBanking/Source Code License For Financial Enterprises/Meet Your Deadlines.png",
          heading3: "Consistent Updates",
          heading3Para:
            "Leverage regular platform updates and enhancements to keep your core banking at peak performance with latest banking features.",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2:
        "Enterprise Payment Gateway Software for World-Class Businesses",

      points: [
        {
          heading3: "Comprehensive FinTech Solutions for Every Business Model",
          heading3Para:
            "Empower various business types including e-commerce marketplaces, brick-and-mortar stores, SaaS platforms, subscription services, and digital marketplaces. Our payment gateway API supports diverse payment acceptance channels and payout methods.",
        },
        {
          heading3: "Streamlined Payment Acceptance & Payout Processing",
          heading3Para:
            "Maximize flexibility with customizable payment transaction flows. Offer frictionless payment processing for in-store purchases and secure online payment gateway services, while enabling instant payouts to bank accounts and digital wallets.",
        },
        {
          heading3: "Multi-Currency & Multi-Channel Support",
          heading3Para:
            "Support unlimited currencies and enable merchants to accept credit card payments, process digital wallet transactions, handle bank transfers, and manage various payout methods across global markets.",
        },
      ],
    },
  ];

  const content = [
    {
      heading2: "Best Core Banking Software for All Types of Banks",
      heading2Para:
        "Whether you're planning to serve retail or corporate customers, our core banking platform provides the perfect foundation for any type of financial institution.",
      points: [
        {
          imgSrc:
            "/assets/CoreBanking/White-Label Core Banking Software for All Types of Banks/Commercial Banks.png",
          heading3: "Commercial Banks",
          heading3Para:
            "Complete core banking solution for traditional commercial banks looking to modernize their digital infrastructure and expand online services.",
        },

        {
          imgSrc:
            "/assets/CoreBanking/White-Label Core Banking Software for All Types of Banks/Neo Banks _ Challenger Banks.png",
          heading3: "Neo Banks / Challenger Banks",
          heading3Para:
            "Build a cutting-edge neobanking product and launch it faster at a much lower cost with our core banking platform..",
        },
        {
          imgSrc:
            "/assets/CoreBanking/White-Label Core Banking Software for All Types of Banks/Regional Rural Banks (RRBs).png",
          heading3: "Regional Rural Banks (RRBs)",
          heading3Para:
            "Specialized core banking features for RRBs including rural-specific workflows, government scheme integration, and local language support.",
        },
        {
          imgSrc:
            "/assets/CoreBanking/White-Label Core Banking Software for All Types of Banks/Co-operative Banks.png",
          heading3: "Co-operative Banks",
          heading3Para:
            "Tailored core banking solution for co-operative banks with member management, share capital tracking, and cooperative-specific banking features.",
        },
        {
          imgSrc:
            "/assets/CoreBanking/White-Label Core Banking Software for All Types of Banks/Microfinance Institutions.png",
          heading3: "Microfinance Institutions",
          heading3Para:
            "Complete microfinance management with group lending, micro-credit processing, and financial inclusion tools built into our core banking solution.",
        },
        {
          imgSrc:
            "/assets/CoreBanking/White-Label Core Banking Software for All Types of Banks/Digital Wallet Solutions.png",
          heading3: "Digital Wallet Solutions",
          heading3Para:
            "Fully-fledged solution for Electronic Money Institutions and Payment Institutions. Create products like digital wallets and payment apps.",
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
        question:
          "What is Core Banking Software and how does it benefit financial institutions?",
        answer:
          "Core Banking Software is a comprehensive white-label banking platform that enables commercial banks, neo banks, RRBs, and microfinance institutions to launch digital banking services quickly. It includes source code access, 470+ APIs, mobile apps, and complete banking functionality, allowing institutions to reduce development time from years to months while ensuring regulatory compliance and security.",
      },
      {
        question:
          "Can I get source code access for the Core Banking Platform? ",
        answer:
          "Yes, we offer full source code license for enterprises, providing complete freedom to modify and customize the platform according to your specific requirements. This includes warranty protection, comprehensive support, regular updates, and the ability to meet your deadlines without vendor dependencies.",
      },
      {
        question: "What types of banks can use this Core Banking Software?",
        answer:
          "Our Core Banking Software supports all types of financial institutions including Commercial Banks, Co-operative Banks, Neo Banks/Challenger Banks, Regional Rural Banks (RRBs), Microfinance Institutions, NBFCs, and Credit Unions. Each deployment can be customized for specific regulatory requirements and business models.",
      },

      {
        question: "How quickly can I deploy the Core Banking Software?",
        answer:
          "Deployment time varies based on customization requirements, but typically ranges from 3-6 months for a full implementation. With our white-label solution and pre-built modules, you can significantly reduce the time-to-market compared to building from scratch, which typically takes 2-3 years.",
      },
      {
        question: "Is the platform compliant with banking regulations?",
        answer:
          "Absolutely. Our Core Banking Software includes built-in compliance features for KYC/AML, audit trails, regulatory reporting, and data protection. The platform is designed to meet banking regulations across different jurisdictions and can be customized for specific regulatory requirements.",
      },
      {
        question:
          "What support do you provide for implementation and maintenance?",
        answer:
          "We provide comprehensive support including technical training for your team, implementation guidance, ongoing maintenance support, regular updates, and 24/7 technical assistance. Our expert team works closely with your IT department to ensure successful deployment and operation.",
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
      heading2: "Core Banking Solution for Your Business Success",
      heading2Para:
        "AOPAY core banking solution is designed to drive business growth through customer acquisition, retention, and operational efficiency improvements.",
      points: [
        {
          imgSrc:
            "/assets/CoreBanking/White-Label Digital Banking Solution for Your Business Success/Attract & Retain Customers.png",
          heading3: "Attract & Retain Customers",
          heading3Para:
            "Acquire and retain customers via customizable contracts and pricing plans. Attract your target audience and grow profit from increased customer LTV and operational fees.",
        },
        {
          imgSrc:
            "/assets/CoreBanking/White-Label Digital Banking Solution for Your Business Success/Boost Customer Retention.png",
          heading3: "Boost Customer Retention",
          heading3Para:
            "Access exhaustive customer information - from operations to login history. Exceed client expectations by quickly resolving requests and anticipating their needs.",
        },
        {
          imgSrc:
            "/assets/CoreBanking/White-Label Digital Banking Solution for Your Business Success/Equip Team for Top Performance.png",
          heading3: "Equip Team for Top Performance",
          heading3Para:
            "Your staff will love our core banking admin area with intuitive UI and convenient dashboard to handle routine banking tasks efficiently.",
        },
        {
          imgSrc:
            "/assets/CoreBanking/White-Label Digital Banking Solution for Your Business Success/Maximize Revenue Potential.png",
          heading3: "Maximize Revenue Potential",
          heading3Para:
            "Effectively monetize each customer segment using endlessly customizable transaction fees, limits, and pricing models tailored to your business strategy.",
        },
      ],
    },
  ];

  const steps2 = [
    {
      imgSrc:
        "/assets/CoreBanking/Enterprise-Grade Performance & Reliability/TransactionsPerSecond.png",
      title: "2,700+ Transactions Per Second",
    },
    {
      imgSrc:
        "/assets/CoreBanking/Enterprise-Grade Performance & Reliability/Enterprise.png",
      title: "470+ REST APIs Available",
    },
    {
      imgSrc:
        "/assets/CoreBanking/Enterprise-Grade Performance & Reliability/Banking.png",
      title: "60+ Banking Modules",
    },
  ];

  const Tertiaryfeatures = [
    {
      imgSrc:
        "/assets/CoreBanking/End-to-End Digital Banking Solution for Record Time Deployment/Source Code License Available.png",
      title: "Source Code License Available",
      description:
        "Get complete control over your core banking by acquiring the source code license for maximum flexibility and no ongoing subscription fees.",
      points: ["Full Customization", "No Vendor Lock-in", "Complete Ownership"],
    },
    {
      imgSrc:
        "/assets/CoreBanking/End-to-End Digital Banking Solution for Record Time Deployment/API-First Architecture.png",
      title: "API-First Architecture",
      description:
        "470+ REST APIs to integrate the core banking into your existing systems and connect third-party services seamlessly.",
      points: ["470+ APIs", "REST Architecture", "Easy Integration"],
    },
    {
      imgSrc:
        "/assets/CoreBanking/End-to-End Digital Banking Solution for Record Time Deployment/Affordable Subscription Model.png",
      title: "Affordable Subscription Model",
      description:
        "Get the core banking functionality available in the cloud, ready to use immediately at a reasonable cost with scalable pricing.",
      points: ["Cloud Ready", "Scalable Pricing", "Instant Deployment"],
    },
  ];

  const superSecondaryFeatures = [
    {
      imgSrc:
        "/assets/CoreBanking/Comprehensive API Integration & Developer Tools/RestAPI.png",
      title: "470+ REST APIs",
      description: "Comprehensive API coverage for all banking operations",
    },
    {
      imgSrc:
        "/assets/CoreBanking/Comprehensive API Integration & Developer Tools/Detailed Documentation.png",
      title: "Detailed Documentation",
      description: "Complete API documentation with code examples",
    },
    {
      imgSrc:
        "/assets/CoreBanking/Comprehensive API Integration & Developer Tools/SDK Libraries.png",
      title: "SDK Libraries",
      description: "Ready-made SDKs for popular programming languages",
    },
    {
      imgSrc:
        "/assets/CoreBanking/Comprehensive API Integration & Developer Tools/Sandbox Environment.png",
      title: "Sandbox Environment",
      description: "Safe testing environment for integration development",
    },
    {
      imgSrc:
        "/assets/CoreBanking/Comprehensive API Integration & Developer Tools/Webhook Support.png",
      title: "Webhook Support",
      description: "Real-time notifications for all banking events",
    },
    {
      imgSrc:
        "/assets/CoreBanking/Comprehensive API Integration & Developer Tools/Webhook Support.png",
      title: "OAuth 2.0 Security",
      description: "Industry-standard authentication and authorization",
    },
  ];

  const superTertiaryfeatures = [
    {
      imgSrc:
        "/assets/CoreBanking/Enterprise Security & Regulatory Compliance/Security Standards.png",
      title: "Security Standards",
      points: [
        "ISO 27001 Certified",
        "PCI DSS Compliance",
        "End-to-end Encryption",
        "Multi-factor Authentication",
      ],
    },
    {
      imgSrc:
        "/assets/CoreBanking/Enterprise Security & Regulatory Compliance/Regulatory Compliance.png",
      title: "Regulatory Compliance",
      points: [
        "KYC/AML Automation",
        "Audit Trail Management",
        "GDPR Compliance",
        "Regulatory Reporting",
      ],
    },
    {
      imgSrc:
        "/assets/CoreBanking/Enterprise Security & Regulatory Compliance/Data Protection.png",
      title: "Data Protection",
      points: [
        "Data Encryption at Rest",
        "Secure API Endpoints",
        "Regular Security Audits",
        "Disaster Recovery",
      ],
    },
  ];

  const options = [
    {
      imgSrc:
        "/assets/CoreBanking/Flexible Deployment Options for Your Core Banking Software/Cloud Deployment.png",
      title: "Cloud Deployment",
      description:
        "Quick launch with our secure cloud infrastructure offering automatic scaling, regular updates, and enterprise-grade security without capital investment in hardware.",
      points: [
        "Rapid deployment (weeks not months)",
        "Automatic scaling and updates",
        "Reduced infrastructure costs",
        "24/7 monitoring and support",
      ],
    },
    {
      imgSrc:
        "/assets/CoreBanking/Flexible Deployment Options for Your Core Banking Software/On-Premise Installation.png",
      title: "On-Premise Installation",
      description:
        "Complete control with on-premise deployment, perfect for banks requiring maximum data sovereignty and customization capabilities.",
      points: [
        "Full data control and sovereignty",
        "Maximum customization flexibility",
        "Integration with existing infrastructure",
        "Compliance with local data laws",
      ],
    },
    {
      imgSrc:
        "/assets/CoreBanking/Flexible Deployment Options for Your Core Banking Software/Hybrid Architecture.png",
      title: "Hybrid Architecture",
      description:
        "Best of both worlds combining cloud scalability with on-premise security for critical banking operations and sensitive data management.",
      points: [
        "Optimized performance and security",
        "Flexible resource allocation",
        "Cost-effective scaling",
        "Regulatory compliance flexibility",
      ],
    },
  ];

  const stories = [
    {
      imgSrc:
        "/assets/CoreBanking/Proven Success Across Financial Institutions/Commercial Bank Transformation.png",
      title: "Commercial Bank Transformation",
      description:
        "Leading commercial bank reduced operational costs by 40% and improved customer onboarding time from days to minutes.",
    },
    {
      imgSrc:
        "/assets/CoreBanking/Proven Success Across Financial Institutions/Neo Bank Launch.png",
      title: "Neo Bank Launch",
      description:
        "Startup neo bank launched their services in just 4 months using our white-label solution, achieving 100K+ customers within the first year of operation.",
    },
    {
      imgSrc:
        "/assets/CoreBanking/Proven Success Across Financial Institutions/Microfinance Digital Transformation.png",
      title: "Microfinance Digital Transformation",
      description:
        "Microfinance institution digitized their entire lending process, increasing loan processing capacity by 300% while maintaining strict compliance standards.",
    },
  ];

  const partners = [
    {
      imgSrc:
        "/assets/CoreBanking/Pre-Integrated Financial Service Providers/Payment Processors.png",
      title: "Payment Processors",
      description: "Major card networks and payment gateways",
    },
    {
      imgSrc:
        "/assets/CoreBanking/Pre-Integrated Financial Service Providers/KYC_AML Providers.png",
      title: "KYC/AML Providers",
      description: "Leading identity verification services",
    },
    {
      imgSrc:
        "/assets/CoreBanking/Pre-Integrated Financial Service Providers/Credit Bureaus.png",
      title: "Credit Bureaus",
      description: "Real-time credit scoring and reporting",
    },
    {
      imgSrc:
        "/assets/CoreBanking/Pre-Integrated Financial Service Providers/Currency Exchange.png",
      title: "Currency Exchange",
      description: "Multi-currency and FX rate providers",
    },
    {
      imgSrc:
        "/assets/CoreBanking/Pre-Integrated Financial Service Providers/Document Verification.png",
      title: "Document Verification",
      description: "AI-powered document processing",
    },
    {
      imgSrc:
        "/assets/CoreBanking/Pre-Integrated Financial Service Providers/SMS_Email Services.png",
      title: "SMS/Email Services",
      description: "Multi-channel communication platforms",
    },
  ];

  return (
    <>
      <Script
        id="flight-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PaymentHead headerSection={headerContent} />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <OutOfTheBox />
      <SecondaryFeatures />
      <section className="py-16 px-6 max-w-6xl mx-auto flex justify-items-center flex-col">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Ready-to-Go White Label Mobile Banking App
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Receive a fully customizable mobile banking app with all essential
          functionalities, giving your core banking deployment a significant
          head start in the market.
        </p>
        <Button className="w-1/2 mx-auto">Try Mobile App Now</Button>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto">
        {/* H2 + Para */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            End-to-End Digital Banking Solution for Record Time Deployment
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            AOPAY core banking provides everything needed for rapid deployment
            of comprehensive digital banking services, with flexible licensing
            and integration options.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {Tertiaryfeatures.map((feature, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white"
            >
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="w-6 h-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {feature.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <ContentWithDescriptivePoints content={content} />
      <H2DescH3Desc contentWithDescription={material} />
      <section className="py-16 px-6 max-w-6xl mx-auto">
        {/* Section Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Enterprise-Grade Performance & Reliability
        </h3>

        {/* Steps Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps2.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-6 text-center border border-gray-100"
            >
              {/* Step Number Badge */}
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <img src={step.imgSrc} alt={step.title} className="w-12 h-auto mb-2" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto">
        {/* H2 + Para */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive API Integration & Developer Tools
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Built with developers in mind, our core banking solution provides
            extensive API coverage and integration capabilities for seamless
            connectivity with existing systems and third-party services.
          </p>
        </div>

        {/* Developer-Friendly Features */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Developer-Friendly Features
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {superSecondaryFeatures.map((feature, i) => (
              <div
                key={i}
                className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
              >
                <img
                  src={feature.imgSrc}
                  alt={feature.title}
                  className="w-6 h-auto mb-4"
                />
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection faqContent={faqContent} />
      <section className="py-16 px-4 max-w-6xl mx-auto">
        {/* Heading & Intro */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enterprise Grade Security & Regulatory Compliance with AOPAY Core
            Banking System
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            AOPAY core banking system is built with security-first architecture
            and comprehensive compliance features to meet the stringent
            requirements of financial institutions worldwide.
          </p>
        </div>

        {/* Features Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Security & Compliance Features
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {superTertiaryfeatures.map((feature, i) => (
              <div
                key={i}
                className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
              >
                <img
                  src={feature.imgSrc}
                  alt={feature.title}
                  className="w-6 h-auto mb-4"
                />
                <h4 className="text-lg font-semibold mb-4">{feature.title}</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {feature.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto">
        {/* H2 + Intro */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Flexible Deployment Options With AOPAY Core Banking Software
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Choose the deployment model that best fits your infrastructure
            requirements, security policies, and business objectives.
          </p>
        </div>

        {/* Deployment Options */}
        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
            >
              <img
                src={option.imgSrc}
                alt={option.title}
                className="mb-4 rounded-lg w-6"
              />
              <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {option.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven Success Across Financial Institutions
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            AOPAY core banking solution has been successfully implemented across
            various types of financial institutions, helping them modernize
            operations and improve customer satisfaction.
          </p>
        </div>

        {/* Success Stories */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
            >
              <img
                src={story.imgSrc}
                alt={story.title}
                className="mb-4 rounded-lg w-6"
              />
              <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
              <p className="text-gray-700">{story.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pre-Integrated Financial Service Providers
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Launch faster with our ecosystem of pre-integrated financial
            service, reducing integration time and complexity.
          </p>
        </div>

        {/* Ready Integration Partners */}
        <div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
              >
                <img
                  src={partner.imgSrc}
                  alt={partner.title}
                  className="mb-4 w-6 rounded-lg"
                />
                <h4 className="text-lg font-semibold mb-2">{partner.title}</h4>
                <p className="text-gray-700">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GetStarted
        heading="Ready to Launch Your Core Banking System?"
        subHeading="Transform your financial institution with our comprehensive core banking system. Connect with our banking experts to discover how our solution aligns with your specific requirements and accelerates your digital transformation journey."
        btn1="Get Started Today"
        btn2="Schedule Consultation"
      />
      {/* <ExploreProducts linkContent={linkContent} /> */}
    </>
  );
};

export default CoreBanking;
