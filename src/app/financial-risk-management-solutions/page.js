import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import { FAQSection, GetStarted, PaymentHead } from "@/sections/mySection";
import React from "react";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import RiskManagementModule from "@/sections/RiskRadar/RiskManagementModule";
import RiskDetectionFeatures from "@/sections/RiskRadar/RiskDetectionFeatures";
import RiskOperations from "@/sections/RiskRadar/RiskOperations";
import RiskManagementSolutions from "@/sections/RiskRadar/RiskManagementSolutions";
import RiskRadarCTA from "@/sections/RiskRadar/RiskRadarCTA";
import Script from "next/script";

//   title:
//     "Risk Radar | Financial Risk Management Solution | Fraud Detection | AoPay",
//   description:
//     "Protect your business with AoPay's Risk Radar. AI-powered fraud detection, transaction monitoring, compliance management, risk scoring for financial institutions and fintech.",
//   keywords:
//     "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
//   robots: "index, follow",
//   alternates: {
//     canonical: "https://aopay.in/financial-risk-management-solution",
//   },
//   viewport: {
//     width: "device-width",
//     initialScale: 1,
//   },
//   httpEquiv: {
//     "X-UA-Compatible": "IE=edge",
//   },
//   openGraph: {
//     title: "Risk Radar - Financial Risk Management Solution",
//     description:
//       "Detect, manage, and reduce financial risk with Risk Radar. Built for E-commerce, Logistics, and Fintech industries.",
//     url: "https://aopay.in/financial-risk-management-solution",
//     siteName: "AOPay",
//     locale: "en_IN",
//     type: "product",
//     images: [
//       {
//         url: "https://aopay.in/images/risk-radar-og.jpg",
//         width: 1200,
//         height: 630,
//         alt: "AOPay Money Transfer Banner",
//       },
//     ],
//     twitter: {
//       card: "summary_large_image",
//     },
//   },
// };

export const metadata = {
  title: "Fraud & Risk Management Software & Solutions | AOPAY",
  description:
    "Protect your business with AoPay's Risk Radar. AI-powered fraud detection, transaction monitoring, compliance management, risk scoring for financial institutions and fintech.",
  keywords:
    "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/financial-risk-management-solutions",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "Risk Radar - Financial Risk Management Solution",
    description:
      "Detect, manage, and reduce financial risk with Risk Radar. Built for E-commerce, Logistics, and Fintech industries.",
    url: "https://aopay.in/financial-risk-management-solutions",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/risk-radar-og.jpg",
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


const FinancialRiskManagement = () => {


  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/financial-risk-management-solutions",
    telephone: "011-42151216",
    description:
      "Cheapest Risk Radar Solution in India providing real-time risk monitoring, fraud detection, compliance management, and reliable 24/7 business support.",
    serviceType: [
      "White Label Risk Radar Solutions for enterprise risk management",
      "Real-time monitoring solutions for financial and operational risks",
      "Predictive analytics for risk assessment and reporting",
      "Comprehensive risk radar solutions for organizations in India",
      "Regulatory compliance and risk management services for enterprises",
      "Fraud detection and risk intelligence platforms tailored for small businesses",
      "Enterprise-wide risk assessment and mitigation solutions",
      "Affordable fraud detection tools for small businesses and startups",
      "Regulatory and compliance risk monitoring services for Indian businesses",
      "Automated alerts for corporate risk management and monitoring",
      "Compliance tools designed for small businesses to manage regulatory requirements",
      "Scenario analysis and stress testing tools for effective risk management",
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
      "Smart Fraud & Risk Detection Solutions for Lenders, NBFCs & Financial Institutions",
    subTitle:
      "Detect fraud in real-time with AI-powered risk monitoring, transaction screening, and behavioral analytics. Protect your business from financial fraud, identity theft, and suspicious activities with intelligent detection systems.",
    imgSrc: "/assets/Risk Radar Platform.png",
    alt: "Multi-channel payment gateway API supporting credit cards, debit cards and digital wallets.",
    btn1: "Request Risk Assessment Demo",
    btn1Link: "/contact-us",
    btn2: "Explore Risk Features",
    btn2Link: "/contact-us",
    video: false,
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Enterprise Risk Radar Platform with Source Code License",
      heading2Para:
        "Transform your financial institution's risk management capabilities with our comprehensive Risk Radar Platform designed specifically for banks, NBFCs, fintech startups, and digital lenders requiring advanced fraud detection, credit risk assessment, and real-time compliance monitoring.",
      points: [
        {
          imgSrc:
            "/assets/RiskRadar/Enterprise Risk Radar Platform with Source Code License/Complete Risk Platform Source Code.png",
          heading3: "Complete Risk Platform Source Code",
          heading3Para:
            "Full access to modify and customize the risk management engine, fraud detection algorithms, and compliance rules to meet your specific risk appetite, regulatory requirements, and business needs.",
        },
        {
          imgSrc:
            "/assets/RiskRadar/Enterprise Risk Radar Platform with Source Code License/Continuous Security & Risk Updates.png",
          heading3: "Continuous Security & Risk Updates",
          heading3Para:
            "Comprehensive warranty coverage including regular updates for emerging fraud patterns, new threat vectors, security vulnerabilities, and evolving regulatory compliance requirements.",
        },
        {
          imgSrc:
            "/assets/RiskRadar/Enterprise Risk Radar Platform with Source Code License/Specialized Risk Management Support.png",
          heading3: "Specialized Risk Management Support",
          heading3Para:
            "Expert guidance from our risk management specialists with deep expertise in banking fraud prevention, AML compliance, and credit risk modeling. Comprehensive training for your risk and compliance teams.",
        },
        {
          imgSrc:
            "/assets/RiskRadar/Enterprise Risk Radar Platform with Source Code License/Rapid Risk System Deployment.png",
          heading3: "Rapid Risk System Deployment",
          heading3Para:
            "Launch advanced risk management capabilities faster by working with proven, battle-tested infrastructure. Meet critical compliance deadlines while maintaining complete control over risk rules and policies.",
        },
        {
          imgSrc:
            "/assets/RiskRadar/Enterprise Risk Radar Platform with Source Code License/Minimized Implementation Risks.png",
          heading3: "Minimized Implementation Risks",
          heading3Para:
            "Eliminate the complexity and risks of building risk management systems from scratch. Leverage our pre-built platform with AI-powered fraud detection and automated compliance monitoring.",
        },
        {
          imgSrc:
            "/assets/RiskRadar/Enterprise Risk Radar Platform with Source Code License/Continuous Threat Intelligence Updates.png",
          heading3: "Continuous Threat Intelligence Updates",
          heading3Para:
            "Stay ahead of evolving threats with regular platform updates including new fraud patterns, enhanced detection algorithms, and expanded compliance features based on global threat intelligence.",
        },
      ],
   
    },
  ];

  const CoopFeatures = {
    heading2: "Comprehensive Features for Credit Cooperative Management",
    heading2Para:
      "Launch your digital cooperative banking services faster with our out-of-the-box features designed for exceptional member service and operational efficiency.",
    sections: [
      {
        h3: "Member Onboarding & KYC",
        h4: "Remote Member Registration",
        items: [
          "Self-registration via email or phone for new cooperative members",
          "Flexible survey and document uploading for identity verification",
          "Utility bills and income proof collection",
          "Automated KYC/KYB processing via pre-integrated vendors",
          "Manual verification through back-office interface",
        ],
      },
      {
        h3: "Financial Transactions & Payment Processing",
        h4: "Comprehensive Transaction Management",
        items: [
          "Member deposit top-ups and withdrawal processing",
          "Secure payment gateway operations with pre-integrated vendors",
          "Internal cooperative member transfers and payments",
          "Multi-currency exchange capabilities",
          "External currency exchange via trusted vendors",
          "Payment link generation for loan collections",
          "QR-code payments (coming soon)",
          "Automated refund and chargeback management",
        ],
      },
      {
        h3: "Anti-Money Laundering & Fraud Prevention",
        h4: "Advanced Security Features (Coming Soon)",
        items: [
          "Real-time identification of suspicious transactions",
          "Member confirmation system to exclude fraudulent activities",
          "Income proof collection for AML compliance",
          "Account freeze/unfreeze capabilities when necessary",
          "Complete case management and resolution tracking",
        ],
      },
      {
        h3: "Built-in CRM for Member Relationship Management",
        h4: "Complete Member Management (Coming Soon)",
        items: [
          "Centralized member details and activity tracking",
          "Direct communication tools for member engagement",
          "In-system messaging service for member support",
          "Comprehensive member notes and history",
          "Loan application and approval workflow management",
        ],
      },
      {
        h3: "Comprehensive Activity Logging",
        h4: "User Actions & System Monitoring",
        items: [
          "Complete log of system activities by members and staff",
          "Detailed tracking: logins, sessions, transactions performed",
          "Audit trail for compliance and investigation purposes",
          "Real-time monitoring of cooperative operations",
        ],
      },
    ],
  };

  const features2 = {
    heading2: "Enterprise Architecture for Scalable MFI Growth",
    points: [
      {
        heading3: "API-First Microfinance Platform",
        heading3Para:
          "470+ REST APIs designed specifically for microfinance operations provide complete flexibility to integrate with existing MIS systems, banking partners, and third-party services essential for MFI operations.",
        type: "list",
        features: [
          "RESTful API architecture optimized for microfinance",
          "Comprehensive API documentation with MFI use cases",
          "SDK support for mobile app development",
          "Sandbox environment for safe testing and integration",
          "Webhook integration for real-time notifications",
        ],
      },
      {
        heading3: "Flexible Deployment for MFIs of All Sizes",
        heading3Para:
          "Choose between cloud-based SaaS model for quick deployment or on-premise installation for maximum control.",
        type: "list",
        features: [
          "Cloud-based SaaS deployment for smaller MFIs",
          "On-premise installation for large institutions",
          "Hybrid cloud architecture for multi-region operations",
          "Auto-scaling capabilities for rapid growth",
          "Multi-tenant architecture for MFI networks",
        ],
      },
      {
        heading3: "Multi-Type MFI Support",
        heading3Para:
          "Our platform serves various microfinance institution types with specialized modules and workflows.",
        type: "list",
        features: [
          "Small and mid-sized MFIs",
          "Large MFIs with multiple branches",
          "NGO-based micro-lenders",
          "NBFC-MFIs and regulated institutions",
          "Cooperative societies and credit unions",
          "Self-help group (SHG) federations",
        ],
      },
    ],
  };

  const solutions = [
    {
      title: "Member Onboarding & KYC",

      features: [
        "Self-registration via email or phone",
        "Flexible document uploading (ID, utility bills, income proof)",
        "Automated KYC/KYB via pre-integrated vendors",
        "Manual verification through back-office interface",
        "Compliance with lending regulations",
      ],
    },
    {
      title: "Secure Payment Processing",

      features: [
        "Single and bulk payout API integration",
        "Bank account and wallet transfers",
        "Payment gateway operations",
        "In-system transfers between users",
        "Payment links for easy collections",
        "QR-code payments (coming soon)",
        "Refund and chargeback management",
      ],
    },
    {
      title: "Risk Management & Compliance",

      features: [
        "AML/Anti-fraud detection (coming soon)",
        "Suspicious transaction monitoring",
        "Client confirmation for fraud prevention",
        "Income verification for AML compliance",
        "Account freeze/unfreeze capabilities",
        "Comprehensive audit trails",
      ],
    },
    {
      title: "Customer Relationship Management",
      features: [
        "Built-in CRM system(coming soon)",
        "Centralized customer details and activities",
        "In-system messaging service",
        "Customer communication logs",
        "Notes and case management",
        "Complete user activity tracking",
      ],
    },
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2: "Credit Cooperative Software for Your Organization's Success",
      heading2Para:
        "Create powerful QR Code Payment API experiences with dynamic QR generation, Bharat QR compliance, and contactless payment solutions.",
      points: [
        {
          heading3: "Attract & Retain Members",
          heading3Para:
            "Acquire and retain cooperative members through customizable contracts and competitive pricing plans. Target specific demographics and increase revenue from enhanced member lifetime value and transaction fees.",
        },
        {
          heading3: "Boost Member Retention",
          heading3Para:
            "Access comprehensive member information from transaction history to login patterns. Exceed member expectations by quickly resolving requests and anticipating their financial needs.",
        },
        {
          heading3: "Empower Your Team",
          heading3Para:
            "Your cooperative staff will appreciate the intuitive admin interface with user-friendly dashboards designed to handle routine banking tasks efficiently and effectively.",
        },
        {
          heading3: "Maximize Cooperative Revenue",
          heading3Para:
            "Effectively monetize each member segment using highly customizable transaction fees, loan interest structures, and service limits tailored to your cooperative's business model.",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question:
          "What is Risk Radar Platform and how does it protect financial institutions?",
        answer:
          "Risk Radar Platform is a comprehensive risk management system that combines AI-powered fraud detection, real-time transaction monitoring, credit risk assessment, and AML compliance capabilities. It protects financial institutions by identifying suspicious activities, preventing fraud losses, ensuring regulatory compliance, and providing real-time risk intelligence across all customer touchpoints.",
      },
      {
        question: "How does the platform detect fraud in real-time?",
        answer:
          "Our platform uses advanced machine learning algorithms, behavioral analytics, and anomaly detection to screen every transaction in real-time. It analyzes over 200+ risk parameters including transaction patterns, device fingerprints, geolocation, velocity checks, and historical behavior to identify fraudulent activities within milliseconds.",
      },
      {
        question:
          "Is the platform compliant with AML and regulatory requirements?",
        answer:
          "Yes, Risk Radar Platform is built to comply with global AML/CFT regulations including FATF guidelines, FinCEN requirements, and local regulatory standards. It includes automated suspicious activity reporting (SAR), sanctions screening, PEP identification, transaction monitoring, and comprehensive audit trails for regulatory examinations.",
      },
      {
        question:
          "Can the platform integrate with our existing banking systems?",
        answer:
          "Absolutely. Our API-first architecture provides 470+ REST APIs for seamless integration with core banking systems, payment gateways, loan management systems, and third-party services. The platform supports both real-time API calls and batch processing for flexible integration scenarios.",
      },
      {
        question: "How does credit risk assessment work in the platform?",
        answer:
          "The platform uses AI-driven credit scoring models that analyze traditional bureau data along with alternative data sources including digital footprint, transaction history, and behavioral patterns. It provides real-time creditworthiness assessment, default probability prediction, portfolio risk analysis, and risk-based pricing recommendations.",
      },
      {
        question:
          "What is the typical implementation timeline for Risk Radar Platform?",
        answer:
          "Cloud-based implementations typically take 6-10 weeks including risk rule configuration, API integration, and team training. Enterprise source code implementations may take 3-6 months depending on customization requirements. We provide dedicated risk management specialists throughout the implementation process.",
      },
      {
        question:
          "How does the platform handle false positives in fraud detection?",
        answer:
          "Our platform uses adaptive machine learning that continuously improves based on investigator feedback and transaction outcomes. The system learns from false positives to refine detection models, implements risk-based rules to reduce unnecessary alerts, and provides tuning recommendations to optimize detection accuracy while minimizing customer friction.",
      },
    ],
  };

  const testimonials = [
    {
      quote:
        "The implementation of this microfinance software has transformed our operations. We've reduced loan processing time by 70% and increased our outreach to rural customers by 150% within the first year.",
      author: "CEO, Leading MFI in Southeast Asia",
    },
    {
      quote:
        "The offline mobile capabilities have been game-changing for our field operations. Our loan officers can now serve customers in the most remote areas without worrying about internet connectivity.",
      author: "Operations Director, Rural Microfinance Institution",
    },
    {
      quote:
        "Regulatory compliance reporting that used to take weeks now happens automatically. The audit trails and documentation have simplified our RBI inspections significantly.",
      author: "Compliance Officer, NBFC-MFI",
    },
  ];

  const Secondaryfeatures = {
    heading2: "Monetize Your Credit Cooperative Operations",

    blocks: [
      {
        heading3: "Flexible Contract & Vendor Management",
        items: [
          "Configure vendor terms and conditions for service providers",
          "Create member contracts with different commission structures and loan limits",
          "Allow members to choose preferred contract types (with or without monthly fees)",
          "Automated contract renewal and modification processes",
          "Customizable Fee Structure & Limits",
        ],
      },
      {
        heading3:
          "Set customizable fees for any transaction: percentage, flat fee, or combination",
        items: [
          "Configure fee bearer (member or cooperative)",
          "Implement transaction limits per period, amount, or number of transactions",
          "Different fee structures for various member categories",
        ],
      },
      {
        heading3: "Reconciliation & Settlement Management",
        items: [
          "Automated company liability reconciliation (coming soon)",
          "Track liabilities to cooperative members",
          "Monitor obligations to vendor partners",
          "Identify unmatched transactions and discrepancies",
          "Streamlined issue resolution workflows",
        ],
      },
      {
        heading3: "Cash Operations Management",
        items: [
          "Comprehensive cash accounting for all transaction types",
          "Complete cash-desk operations management",
          "Daily cash reconciliation and reporting",
          "Multi-location cash management for cooperative branches",
        ],
      },
    ],
  };

  const material = [
    {
      heading2: "Real-Time Risk Alerting & Threat Intelligence",
      heading2Para:
        "Receive instant alerts for high-risk transactions, suspicious activities, and compliance violations with customizable notification rules and escalation workflows.",
      points: [
        {
          heading3: "Real-Time Alerts",
          heading3Para: "Instant notifications for fraud.",
        },
        {
          heading3: "Risk Dashboards",
          heading3Para: "Executive risk visibility.",
        },
        {
          heading3: "Case Management",
          heading3Para: "Investigate and resolve alerts.",
        },
      ],
    },
  ];

  const content = [
    {
      heading2: "Digital Banking Software for All Types of Credit Cooperatives",
      heading2Para:
        "Whether you serve urban professionals, agricultural communities, or industrial employees, our platform provides the foundation for modern cooperative banking services.",
      points: [
        {
          heading3: "Urban Credit Cooperatives",
          heading3Para:
            "Build comprehensive digital banking services for urban credit societies with advanced loan management, investment tracking, and member services",
          heading3Btn: "View Details",
          heading3BtnLink: "/contact-us",
        },

        {
          heading3: "Employee/Industrial Credit Societies",
          heading3Para:
            "Create specialized solutions for employee credit cooperatives with payroll integration, salary-based lending, and corporate banking features.",
          heading3Btn: "View Details",
          heading3BtnLink: "/contact-us",
        },
        {
          heading3: "Agricultural/Rural Credit Cooperatives",
          heading3Para:
            "Develop rural-focused banking solutions with seasonal loan products, agricultural insurance integration, and mobile-first member access.",
          heading3Btn: "View Details",
          heading3BtnLink: "/contact-us",
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
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <RiskManagementModule />
      <RiskDetectionFeatures />
      <H2DescH3Desc contentWithDescription={material} />
      <RiskOperations />
      <RiskManagementSolutions />
      <FAQSection faqContent={faqContent} />
      <RiskRadarCTA />
    </>
  );
};

export default FinancialRiskManagement;
