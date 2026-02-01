import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import {
  PaymentHead,
  FAQSection,
} from "@/sections/mySection";
import { CardWithFeature } from "@/sections/CardWithFeature";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import LogisticsPaymentSection from "@/sections/Logistics/LogisticsPaymentSection";
import LogisticsIntegrationSection from "@/sections/Logistics/LogisticsIntegrationSection";
import ECommerceLogisticsScaling from "@/sections/ECommerceLogisticsScaling";
import LogisticsFinalSection from "@/sections/Logistics/LogisticsFinalSection";
import LogisticsFleetWalletSection from "@/sections/Logistics/LogisticsFleetWalletSection";
import LogisticsBusinessSolutions from "@/sections/Logistics/LogisticsBusinessSolutions";
import LogisticsSecurity from "@/sections/Logistics/LogisticsSecurity";

export const metadata = {
  title: "Supply Chain Logistics Management Software & Solutions | AOPAY",
  description:
    "Streamline logistics finances with AoPay's specialized solution. Driver payouts, freight payments, fuel advances, toll management, expense tracking for logistics and fleet companies.",
  keywords:
    "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/logistics-financial-management-solutions",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "Logistics Financial Management Solution | AoPay",
    description:
      "Manage logistics finances with driver payouts, freight payments, and fuel advances.",
    url: "https://aopay.in/logistics-financial-management-solutions",
    siteName: "Online Money Transfer Solution | AOPay",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/logistics-solutions-og.jpg",
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

const Logistics = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/logistics-financial-management-solutions",
    telephone: "011-42151216",
    description:
      "Cheapest banking solutions for logistics in India providing secure payments, instant settlements, automated collections, and virtual account management.",
    serviceType: [
      "White Label Banking solutions for logistic businesses",
      "Fleet management banking solutions",
      "Banking solutions provider for logistics & transportation Near Me",
      "Best Logistics Banking Solution Provider in India",
      "Embedded finance for logistics companies",
      "Best Banking products for supply chain and logistics",
      "Low-cost banking solutions for transport companies in India",
      "Affordable Transport & Logistics Financial Solutions for Small Businesses",
      "Best Logistics Payment & Settlement Service provider in India",
      "Transport & Logistics Financial Solutions Provider",
      "Best digital banking system for logistics operators",
      "Best Supply Chain Banking Services provider in India",
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
      "Integrated Logistics Payments Solutions for 3PL, Freight & Fleet Management Businesses",
    subTitle:
      "Optimize logistics operations with integrated payment solutions for freight billing, driver payouts, and vendor settlements. Manage cash flow efficiently across 3PL operations and fleet management with real-time tracking.",
    imgSrc: "/assets/Logistics.png",
    alt: "Secure money transfer API enabling instant fund transfers between bank accounts.",
    video: false,
    btn1: "Contact Sales",
    btn1Link: "/contact-us",
    btn2: "Optimize Operations",
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
      heading2: "Streamline Driver and Partner Payment Operations",
      heading2Para:
        "Efficiently manage payments to drivers, delivery partners, and contractors with our comprehensive disbursement solutions. Reduce administrative overhead while ensuring timely, accurate payments that keep your workforce satisfied and operations running smoothly.",
      points: [
        {
          imgSrc:
            "/assets/DMTIntegration/AOPAYCompleteMoneyTransferAPISolution/InstantBankTransfers.png",
          heading3: "Automated Driver Settlements",
          heading3Para:
            "Instantly process driver payments based on completed trips, delivered packages, or contracted rates. Our automated settlement system calculates earnings, deducts expenses, and transfers funds directly to driver accounts, eliminating manual processing delays.",
        },
        {
          imgSrc:
            "/assets/DMTIntegration/AOPAYCompleteMoneyTransferAPISolution/BulkDisbursementProcessing.png",
          heading3: "Partner Network Payments",
          heading3Para:
            "Manage payments to contractors, freight brokers, and third-party logistics providers seamlessly. Support bulk payments, scheduled disbursements, and custom payment terms while maintaining complete transaction visibility and audit trails.",
        },
        {
          imgSrc:
            "/assets/DMTIntegration/AOPAYCompleteMoneyTransferAPISolution/DigitalWalletIntegration.png",
          heading3: "Mobile Wallet Integration",
          heading3Para:
            "Enable drivers to receive payments directly into their mobile wallets or digital accounts. Support popular payment methods including UPI, digital wallets, and prepaid cards for maximum convenience and faster access to earnings.",
        },
      ],
    },
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
      heading2: "Optimize Customer Payment Collection Processes",
      heading2Para:
        "Accelerate cash flow with flexible payment collection solutions designed for logistics operations. From freight billing to delivery charges, ensure faster payments while providing customers with convenient payment options.",
      points: [
        {
          heading3: "Flexible Payment Collection",
          heading3Para:
            "Accept payments from customers through multiple channels including online portals, mobile apps, and cash-on-delivery options. Our payment collection system integrates seamlessly with your existing billing and invoicing workflows.",
          imgSrc: "/assets/Logistics/Flexible Payment Processing Options.png",
        },

        {
          heading3: "Real-Time Payment Processing",
          heading3Para:
            "Process customer payments instantly with our high-performance payment infrastructure. Support credit cards, bank transfers, digital wallets, and alternative payment methods to maximize collection rates and customer satisfaction.",
          imgSrc: "/assets/Logistics/Real-time Payment Processing.png",
        },
        {
          heading3: "Automated Reconciliation",
          heading3Para:
            "Streamline financial reconciliation with automated matching of payments to invoices and delivery records. Reduce accounting overhead and improve financial visibility across all customer transactions and service lines.",
          imgSrc: "/assets/Logistics/Automated Reconciliation & Audit.png",
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
      heading2: "Expert Support for Logistics Payment Transformation",
      heading2Para:
        "Partner with AOPAY's logistics payment experts to optimize your financial operations. Our team provides specialized consultation, implementation support, and ongoing optimization to maximize the value of your payment infrastructure investment.",
      points: [
        {
          heading3: "Implementation Consulting",
          heading3Para:
            "Dedicated project managers and technical experts guide you through system integration, ensuring minimal disruption to ongoing operations while maximizing implementation benefits.",
        },
        {
          heading3: "Operational Optimization",
          heading3Para:
            "Ongoing analysis and recommendations to improve payment efficiency, reduce costs, and enhance driver and customer satisfaction through data-driven insights.",
        },
        {
          heading3: "Expense Control & Monitoring",
          heading3Para:
            "Implement spending controls and real-time monitoring for all wallet transactions. Set spending limits, track expense categories, and generate detailed reports for better financial oversight and cost management.",
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
      heading2: "AOPAY Advanced Banking Integration for Fleet Operations",
      heading2Para:
        "Enhance your financial operations with integrated banking services designed for logistics companies. From account verification to expense management, streamline all financial aspects of your transportation business.",
      points: [
        {
          heading3: "Bank Account Verification",
          heading3Para:
            "Instantly verify driver and vendor bank accounts to ensure secure, accurate payments. Reduce failed transactions, prevent fraud, and maintain compliance with financial regulations while onboarding new partners quickly.",
        },
        {
          heading3: "Secure Financial Transactions",
          heading3Para:
            "Process all financial transactions through our secure, PCI-compliant infrastructure. Advanced encryption and fraud detection protect your business and partners from financial threats while maintaining operational continuity.",
        },
        {
          heading3: "AEPS Integration",
          heading3Para:
            "Enable Aadhaar Enabled Payment System (AEPS) services for drivers and customers in remote locations. Provide banking services and cash withdrawal facilities, expanding your service reach and creating additional revenue streams.",
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
      heading2: "AOPAY Tailored Solutions for Every Logistics Business Size",
      heading2Para:
        "AOPAY dynamically optimizes payment authorization across tens of thousands of issuers globally with Adaptive Acceptance. If a payment is declined, we identify the best retry messaging and routing combinations to prevent lost revenue. Payment Acceptance Features:",
      points: [
        {
          heading3: "Small-Scale Logistics Operations",
          heading3Para:
            "Small logistics companies and independent operators benefit from simplified payment processing that eliminates complex administrative tasks. Our driver payment solutions enable immediate settlements without manual calculations or bank visits. UPI and QR code payments facilitate instant customer collections, improving cash flow for growing businesses. Bank account verification ensures secure onboarding of new drivers and partners while maintaining compliance with minimal overhead.",
        },

        {
          heading3: "Mid-Scale Transportation Companies",
          heading3Para:
            "Mid-scale logistics businesses require integrated solutions that connect driver payments with fleet management systems. Our platform enables automated expense management through driver wallets, reducing administrative burden on back-office teams. AEPS integration expands service offerings in rural markets, while comprehensive payment collection tools support diverse customer payment preferences. Real-time financial tracking and reconciliation improve operational visibility and decision-making capabilities.",
        },
        {
          heading3: "Large-Scale Logistics Enterprises",
          heading3Para:
            "Enterprise logistics companies manage complex operations across multiple regions with thousands of drivers and diverse service offerings. Our scalable platform supports high-volume payment processing with advanced fraud detection and compliance features. Integrated banking services facilitate multi-currency operations and international settlements. Comprehensive reporting and analytics provide insights for optimizing costs, managing cash flow, and supporting strategic business decisions across all operational segments.",
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
      <LogisticsPaymentSection />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <ContentWithDescriptivePoints content={content} />
      <H2DescH3Desc contentWithDescription={material} />
      <LogisticsFleetWalletSection />
      <CardWithFeature features={features2} />
      <LogisticsBusinessSolutions />
      <LogisticsSecurity />
      <LogisticsIntegrationSection />
      <ECommerceLogisticsScaling />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <FAQSection faqContent={faqContent} />
      <LogisticsFinalSection />
    </>
  );
};

export default Logistics;
