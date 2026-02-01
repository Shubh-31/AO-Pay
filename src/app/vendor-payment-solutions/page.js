import { PaymentHead, FAQSection, GetStarted } from "@/sections/mySection";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { HeadingSubheadingSection } from "@/sections/HeadingSubheadingSection";

import VendorPaymentsFeatures from "@/sections/VendorPayment/VendorPaymentFeatures";
import VendorPaymentAPI from "@/sections/VendorPayment/VendorPaymentAPI";
import OptimizePayments from "@/sections/VendorPayment/OptimizePayments";
import TransformVendorPayments from "@/sections/VendorPayment/TransformVendorPayment";

export const metadata = {
  title: "Vendor Management Software & Payment Solutions | AOPAY",
  description:
    "Streamline vendor payments with AoPay's automated solution. Bulk supplier payments, invoice management, payment scheduling, approval workflows for procurement and accounts payable.",
  keywords:
    "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/vendor-payment-solutions",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "Vendor Payment Solution | Automated Supplier Payments | AoPay",
    description:
      "Streamline vendor payments with bulk payments, invoice management, and workflows.",
    url: "https://aopay.in/vendor-payment-solutions",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/vendor-payment-og.jpg",
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

const VendorPayment = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/vendor-payment-solutions",
    telephone: "011-42151216",
    description:
      "Cheapest Vendor Payments Management software in India for secure, automated vendor payments, real-time tracking, reconciliation, and seamless operations.",
    serviceType: [
      "White Label Vendor payment solutions for businesses",
      "Real-time payments and approval workflow for suppliers",
      "Integrated ERP and vendor payment automation Provider Near Me",
      "Best vendor payment solutions provider for enterprises in India",
      "Multi-currency vendor payment processing for global suppliers",
      "Integrated ERP and vendor payment automation services",
      "Real-time and secure vendor payment processing",
      "Affordable B2B payment solutions for corporate vendors",
      "Digital accounts payable and vendor management solutions provider in India",
      "Automated supplier payment and reconciliation services Provider",
      "Digital Payout Solution for Local Businesses",
      "Corporate supplier payment solutions near me",
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
      "Integrated Vendor Management & Payment Solutions for Payouts & Compliance",
    subTitle:
      "Streamline vendor payouts, invoice management, and payment approvals with automated vendor payment solutions. Track payment schedules, manage compliance documentation, and optimize cash flow for supplier relationships.",
    imgSrc: "/assets/Vendor Payment.png",
    alt: "Secure money transfer API enabling instant fund transfers between bank accounts.",
    video: false,
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
      heading2: "Comprehensive Payment Solutions for Every Business Need",

      points: [
        {
          heading3: "Vendor Payments",
          heading3Para:
            "Automated payments to suppliers and service providers with bulk processing, approval workflows, and real-time tracking.",
          imgSrc:
            "/assets/VendorPayment/Comprehensive Payment Solutions for Every Business Need/Vendor Payments.png",
        },

        {
          heading3: "Payroll Disbursements",
          heading3Para:
            "Streamlined employee salary payments with multi-account support, scheduled processing, and compliance reporting.",
          imgSrc:
            "/assets/VendorPayment/Comprehensive Payment Solutions for Every Business Need/Payroll Disbursements.png",
        },
        {
          heading3: "Customer Refunds",
          heading3Para:
            "Instant refund processing to customer accounts with automated reconciliation and transaction tracking.",
          imgSrc:
            "/assets/VendorPayment/Comprehensive Payment Solutions for Every Business Need/Customer Refunds.png",
        },
        {
          heading3: "Seller Payments",
          heading3Para:
            "Marketplace seller payouts with automated commission calculations, split payments, and settlement management.",
          imgSrc:
            "/assets/VendorPayment/Comprehensive Payment Solutions for Every Business Need/Seller Payments.png",
        },
        {
          heading3: "Gig Economy Payments",
          heading3Para:
            "Flexible payout options for freelancers and gig workers with instant payment capabilities and minimal fees.",
          imgSrc:
            "/assets/VendorPayment/Comprehensive Payment Solutions for Every Business Need/Gig Economy Payments.png",
        },
        {
          heading3: "Employee Reimbursements",
          heading3Para:
            "Quick expense reimbursements with approval workflows, receipt management, and accounting integration.",
          imgSrc:
            "/assets/VendorPayment/Comprehensive Payment Solutions for Every Business Need/Employee Reimbursements.png",
        },
        {
          heading3: "Claim Settlements",
          heading3Para:
            "Insurance and warranty claim payouts with automated validation, approval routing, and beneficiary verification.",
          imgSrc:
            "/assets/VendorPayment/Comprehensive Payment Solutions for Every Business Need/Claim Settlements.png",
        },
        {
          heading3: "Volunteer Expenses",
          heading3Para:
            "Non-profit and volunteer expense reimbursements with budget tracking and transparent reporting",
          imgSrc:
            "/assets/VendorPayment/Comprehensive Payment Solutions for Every Business Need/Volunteer Expenses.png",
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
      heading2: "Tailored Solutions for Every Organization",

      points: [
        {
          heading3: "For Enterprises & Corporates",
          heading3Para:
            "Streamline accounts payable with automated vendor payments, multi-level approvals, ERP integration, and comprehensive reporting for CFO visibility and control.",
        },
        {
          heading3: "For Marketplaces & E-commerce",
          heading3Para:
            "Automate seller payouts with commission calculations, split payments, escrow management, and real-time settlement for seamless marketplace operations.",
        },
        {
          heading3: "For Fintech & Payout Platforms",
          heading3Para:
            "White-label API infrastructure for building payout products, enabling mass disbursements, and offering vendor payment services to your customers.",
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
      heading2: "Comprehensive Data Sources",
      heading2Para:
        "We aggregate data from trusted sources to provide the most complete business verification available.",
      points: [
        {
          heading3: "Official Business Registries",
          heading3Para:
            "Direct connections to companies houses, corporate registries, and commercial registers in 180+ countries for verified company data.",
        },
        {
          heading3: "Financial Data Providers",
          heading3Para:
            "Credit reports, financial statements, and business credit scores from leading financial information providers globally.",
        },
        {
          heading3: "Driver's Licenses",
          heading3Para:
            "Verify driver's licenses and learner permits from all US states, Canadian provinces, and international jurisdictions.",
        },
        {
          heading3: "Sanctions & Watchlists",
          heading3Para:
            "Real-time screening against OFAC, UN, EU, HMT, and 200+ global sanctions lists plus PEP and adverse media databases.",
        },
        {
          heading3: "Corporate Filings",
          heading3Para:
            "Access to annual reports, beneficial ownership registers, director information, and corporate structure documents.",
        },
        {
          heading3: "Industry Registries",
          heading3Para:
            "Verify licenses, permits, and registrations for regulated industries including financial services, healthcare, and professional services.",
        },
        {
          heading3: "News & Media",
          heading3Para:
            "Adverse media screening across 50,000+ global news sources in multiple languages for reputation and compliance risks.",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "How does the Vendor Payment API work?",
        answer:
          "Our Vendor Payment API enables businesses to automate vendor payments through simple RESTful API calls. You can initiate single payouts for individual vendors, process bulk payments for multiple recipients, or generate payment links for vendor self-service collection. The API handles payment routing, compliance checks, and real-time status updates automatically.",
      },
      {
        question: "What payment methods are supported?",
        answer:
          "The API supports multiple payment methods including direct bank transfers (NEFT, RTGS, IMPS), digital wallet payouts (UPI, mobile wallets), card-based disbursements, and wire transfers. You can configure payment methods based on vendor preferences and transaction requirements.",
      },
      {
        question:
          "Can I integrate this with my existing ERP or accounting software?",
        answer:
          "Yes, our API integrates seamlessly with major ERP systems (SAP, Oracle, NetSuite) and accounting platforms (QuickBooks, Xero, Tally). We provide pre-built connectors for popular systems and flexible REST APIs for custom integrations with proprietary platforms.",
      },
      {
        question: "How secure are vendor payments processed through the API?",
        answer:
          "Security is our top priority. The platform is PCI DSS Level 1 compliant with end-to-end encryption for all sensitive data, multi-factor authentication for payment approvals, fraud detection mechanisms, and comprehensive audit trails. All transactions are monitored in real-time for suspicious activity.",
      },
      {
        question: "What is the typical implementation timeline?",
        answer:
          "Basic API integration can be completed in 1-2 weeks for standard use cases. Complex implementations with custom workflows, ERP integration, and multi-level approval systems typically take 4-8 weeks. We provide sandbox environments, comprehensive documentation, and dedicated developer support to accelerate implementation.",
      },
      {
        question: "Can I process bulk vendor payments in a single API call?",
        answer:
          "Yes, our bulk payment API allows you to process thousands of vendor payments in a single batch. You can schedule batch processing, set up approval workflows, track individual payment status, and receive consolidated reports for all transactions in the batch.",
      },
     
    ],
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Enterprise Vendor Payment Automation Platform",
      heading2Para:
        "Transform your accounts payable operations with our comprehensive Vendor Payment API designed specifically for enterprises, marketplaces, e-commerce platforms, and fintech companies requiring automated, scalable, and secure vendor disbursement capabilities.",
      points: [
        {
          heading3: "Complete API Control & Customization",
          heading3Para:
            "Full access to customize payment workflows, approval processes, and vendor management rules. Perfect for enterprises requiring specific compliance features, custom payment routing, or unique business logic for vendor disbursements.",
          imgSrc:
            "/assets/VendorPayment/Enterprise Vendor Payment Automation Platform/Complete API Control & Customization.png",
        },
        {
          heading3: "Enterprise-Grade Security & Compliance",
          heading3Para:
            "Comprehensive protection with PCI DSS compliance, end-to-end encryption, multi-factor authentication, and regular security updates ensuring your vendor payment operations meet the highest financial industry standards.",
          imgSrc:
            "/assets/VendorPayment/Enterprise Vendor Payment Automation Platform/Enterprise-Grade Security & Compliance.png",
        },
        {
          heading3: "Dedicated Integration Support",
          heading3Para:
            "Expert guidance from our payments specialists for seamless integration with your ERP, accounting software, or custom systems. Comprehensive API documentation and developer support for rapid deployment.",
          imgSrc:
            "/assets/VendorPayment/Enterprise Vendor Payment Automation Platform/Dedicated Integration Support.png",
        },

        {
          heading3: "Accelerated Implementation Timeline",
          heading3Para:
            "Launch vendor payment automation faster by working with proven, battle-tested API infrastructure. Avoid the complexity and time investment of building payment systems from scratch.",
          imgSrc:
            "/assets/VendorPayment/Enterprise Vendor Payment Automation Platform/Accelerated Implementation Timeline.png",
        },
        {
          heading3: "Risk-Free Scaling",
          heading3Para:
            "Minimize operational risks with our pre-built, thoroughly tested API that handles high-volume vendor payments, complex approval workflows, and disbursements at enterprise scale.",
          imgSrc:
            "/assets/VendorPayment/Enterprise Vendor Payment Automation Platform/Risk-Free Scaling.png",
        },
        {
          heading3: "Continuous Platform Enhancement",
          heading3Para:
            "Access regular updates including new payment methods, enhanced security features, expanded banking integrations, and improved performance to keep your vendor payment operations competitive.",
          imgSrc:
            "/assets/VendorPayment/Enterprise Vendor Payment Automation Platform/Continuous Platform Enhancement.png",
        },
      ],
    },
  ];

  const Steps = [
    {
      heading2: "How AOPAY Identity Verification API Works",
      heading2Para:
        "Simple integration, powerful results. Start verifying customers in minutes with our developer-friendly KYC API.",
      steps: [
        {
          step1: "Document Capture",
          step1Para:
            "Customer uploads identity document (passport, driver's license, or national ID) via web or mobile interface.",
        },
        {
          step2: "AI Analysis",
          step2Para:
            "Our AI engine analyzes document authenticity, extracts data, and validates security features in real-time.",
        },
        {
          step3: "Biometric Check",
          step3Para:
            "Customer takes selfie for facial recognition and liveness detection to confirm physical presence.",
        },
        {
          step4: "Instant Results",
          step4Para:
            "Receive comprehensive verification report with pass/fail status, confidence scores, and extracted data.",
        },
      ],
    },
  ];

  const HeadingSubheadings = [
    {
      heading2: "Easy Integration with Your Business Tools",
      heading2Para:
        "Connect our Vendor Payment API with your existing enterprise software, ERP systems, and accounting platforms for unified payment operations.",
      points: [
        {
          heading3: "ERP Integration",
          heading3Para:
            "Direct integration with major ERP systems including SAP, Oracle, Microsoft Dynamics, and NetSuite for automated vendor payment processing and reconciliation.",
          imgSrc:
            "/assets/VendorPayment/EasyIntegration with Your Business Tools/ERP Integration.png",
        },

        {
          heading3: "Accounting Software Connectivity",
          heading3Para:
            "Seamless sync with QuickBooks, Xero, FreshBooks, and Tally for real-time financial data synchronization and automated bookkeeping.",
          imgSrc:
            "/assets/VendorPayment/EasyIntegration with Your Business Tools/Accounting Software Connectivity.png",
        },
        {
          heading3: "Custom System Integration",
          heading3Para:
            "Flexible API architecture supports integration with proprietary systems, legacy platforms, and custom-built applications through RESTful APIs and webhooks.",
          imgSrc:
            "/assets/VendorPayment/EasyIntegration with Your Business Tools/Custom System Integration.png",
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
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints} />
      <ContentWithDescriptivePoints content={content} />
      <VendorPaymentsFeatures />
      <VendorPaymentAPI
        btnText1="View Complete API Documentation"
        btnLink1="/docs/payouts"
        btnText2="Access Sandbox Environment"
        btnLink2="/sandbox"
      />
      <HeadingSubheadingSection HeadingSubheadings={HeadingSubheadings} />
      <OptimizePayments />
      <FAQSection faqContent={faqContent} />
      <GetStarted
        heading="Automate Your Vendor Payments Today"
        subHeading="Connect with our payments experts to discover how our Vendor Payment API can streamline your accounts payable operations, reduce processing time, and optimize payment costs."
        btn1="Get API Access"
        btn2="Speak With Expert"
      />
      <TransformVendorPayments/>
    </>
  );
};

export default VendorPayment;
