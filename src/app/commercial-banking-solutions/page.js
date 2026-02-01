import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import { PaymentHead, FAQSection, GetStarted } from "@/sections/mySection";
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
import DigitalLending from "@/sections/LendingAndLoanApps/DigitalLending";
import { HeadingSubheadingSection } from "@/sections/HeadingSubheadingSection";
import BorrowerVerification from "@/sections/LendingAndLoanApps/BorrowerVerification";
import LendingBusinessSolutions from "@/sections/LendingAndLoanApps/LendingBusinessSolutions";
import LendingRiskCompliance from "@/sections/LendingAndLoanApps/LendingRiskCompliance";
import LendingIntegration from "@/sections/LendingAndLoanApps/LendingIntegration";
import LendingSupport from "@/sections/Logistics/LendingSupport";
import LendingGrowth from "@/sections/LendingAndLoanApps/LendingGrowth";
import LendingCTA from "@/sections/LendingAndLoanApps/LendingCTA";
import RealEstatePaymentSection from "@/sections/RealEstatePropTech/RealEstatePaymentSection";
import PropTechPaymentExperience from "@/sections/RealEstatePropTech/PropTechPaymentExperience";
import RealEstatePaymentSolutions from "@/sections/RealEstatePropTech/RealEstatePaymentSolutions";
import RealEstateExpertSection from "@/sections/RealEstatePropTech/RealEstateExpertSection";
import InsuranceHero from "@/sections/Insurance/InsuranceHero";
import InsurancePremiums from "@/sections/Insurance/InsurancePremium";
import InsuranceBusinessModels from "@/sections/Insurance/InsuranceBusinessModels";
import InsuranceSuccessSection from "@/sections/Insurance/InsuranceSuccessStories";
import UtilitiesPaymentSection from "@/sections/UtilitiesRechargePortal/UtilitiesPaymentSection";
import ServiceCoverageSection from "@/sections/UtilitiesRechargePortal/ServiceCoverageSection";
import ServiceProviderSolutions from "@/sections/UtilitiesRechargePortal/ServiceProviderSolutions";
import TechIntegrationSection from "@/sections/UtilitiesRechargePortal/TechIntegrationSection";
import ServiceIntegrationSection from "@/sections/UtilitiesRechargePortal/ServiceIntegrationSection";
import ServiceGrowthSection from "@/sections/UtilitiesRechargePortal/ServiceGrowthSection";
import UtilitiesExpertSupport from "@/sections/UtilitiesRechargePortal/UtilitiesExpertSupport";
import UtilitiesCTASection from "@/sections/UtilitiesRechargePortal/UtilitiesCTASection";
import { CoLendingCards } from "@/sections/CoLending/CoLendingCards";
import { CoLendingModelsCards } from "@/sections/CoLending/CoLendingModels";
import { DeveloperFriendlyAPIs } from "@/sections/CoLending/DeveloperFriendlyAPIs";
import { CoLendingGuidelines } from "@/sections/CoLending/CoLendingGuidelines";
import { CoLendingMonetization } from "@/sections/CoLending/CoLendingMonetization";
import { StepsWithExplanation } from "@/sections/StepsWithExplanation";
import KYCAPIIntegration from "@/sections/KYC/KYCAPIIntegration";
import Features from "@/sections/KYC/Features";
import DeveloperAPIFeatures from "@/sections/KYC/DeveloperAPIFeatures";
import EnterpriseSecurityCompliance from "@/sections/KYC/EnterpriseSecurityCompliance";
import { FraudDetectionAndPrevention } from "@/sections/KYC/FraudDetectionAndPrevention";
import { ReadyToAutomateVerification } from "@/sections/KYC/ReadyToAutomateVerification";
import { IntelligentAutomatedUnderwriting } from "@/sections/BusinessFinancing/IntelligentAutomatedUnderwriting";
import { RegulatoryComplianceSecurity } from "@/sections/BusinessFinancing/RegulatoryComplianceSecurity";
import { ComprehensiveAnalyticsReporting } from "@/sections/BusinessFinancing/ComprehensiveAnalyticsReporting";
import { CollectionsRecoveryManagement } from "@/sections/BusinessFinancing/CollectionsRecoveryManagement";
import { WhiteLabelAndSupport } from "@/sections/BusinessFinancing/WhiteLabelAndSupport";
import { FlexiblePricingModels } from "@/sections/BusinessFinancing/FlexiblePricingModels";
import Script from "next/script";

export const metadata = {
  title: "Business Lending Management Software & Solutions | AOPAY",
  description:
    "Access business financing with AoPay's commercial banking solution. Working capital loans, trade finance, invoice discounting, supply chain finance for MSMEs and enterprises.",
  keywords:
    "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/commercial-banking-solutions",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "Commercial Banking Solution | Business Financing | AoPay",
    description:
      "Access business financing with working capital, trade finance, and invoice discounting.",
    url: "https://aopay.in/commercial-banking-solutions",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/commercial-banking-og.jpg",
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

const BusinessFinancing = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/commercial-banking-solutions",
    telephone: "011-42151216",
    description:
      "Cheapest Business Financing Solutions in India for quick, secure loans with easy application, flexible repayment, and dedicated 24/7 business support.",
    serviceType: [
      "White Label Business Financing Solutions",
      "Online Loan Repayment and Restructuring Solutions",
      "Corporate Loan and Working Capital Financing Services Provider Near Me",
      "Best Business Financing Solutions Provider for SMEs and Enterprises in India",
      "Digital Business Loans and Credit Line Management",
      "Invoice Factoring and Equipment Financing Solutions",
      "Working Capital Loans and Credit Lines for Businesses",
      "Affordable FinTech-enabled Digital Business Financing Solutions Provider",
      "FinTech-enabled Business Financing with Lowest Fees in India",
      "Commercial Lending and Business Funding Services Provider",
      "Corporate Loan Service Solution for Local Businesses",
      "Commercial Lending Solutions Provider",
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
      "Smart Business Lending Solution for NBFCs, Lenders & Fintech Companies",
    subTitle:
      "Launch digital lending products with end-to-end infrastructure for underwriting, disbursement, and collections. Offer working capital loans, invoice financing, and credit lines with automated risk assessment and compliance.",
    imgSrc: "/assets/Business Financing.png",
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
      heading2: "Why Choose AOPAY Business Financing Platform?",
      heading2Para:
        "Built for modern lenders who demand speed, scalability, and regulatory compliance.",
      points: [
        {
          imgSrc:
            "/assets/BusinessFinancing/Why Choose AOPAY Business Financing Platform/Faster Time-to-Market.png",
          heading3: "Faster Time-to-Market",
          heading3Para:
            "Launch lending products in weeks, not months, with pre-built modules and configurable workflows.",
        
        },

        {
          imgSrc:
            "/assets/BusinessFinancing/Why Choose AOPAY Business Financing Platform/Reduced Operational Costs.png",
          heading3: "Reduced Operational Costs",
          heading3Para:
            "Automate 80% of manual processes, reducing cost per loan by up to 60%.",
       
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Why Choose AOPAY Business Financing Platform/Scalable Architecture.png",
          heading3: "Scalable Architecture",
          heading3Para:
            "Cloud-native platform handles growing loan volumes without performance degradation or infrastructure investments.",
     
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Why Choose AOPAY Business Financing Platform/Improved Decision Accuracy.png",
          heading3: "Improved Decision Accuracy",
          heading3Para:
            "AI-powered underwriting reduces defaults by 30% through better risk assessment.",
   
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Why Choose AOPAY Business Financing Platform/Enhanced Customer Experience.png",
          heading3: "Enhanced Customer Experience",
          heading3Para:
            "Digital-first borrower journey with instant decisions and 24/7 self-service capabilities.",
      
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Why Choose AOPAY Business Financing Platform/Regulatory Compliance.png",
          heading3: "Regulatory Compliance",
          heading3Para:
            "Built-in compliance with RBI guidelines, AML/CFT regulations, and data protection laws.",
        
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Why Choose AOPAY Business Financing Platform/API-First Architecture.png",
          heading3: "API-First Architecture",
          heading3Para:
            "470+ REST APIs enable seamless integration with existing systems and third-party services.",
        
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Why Choose AOPAY Business Financing Platform/Real-Time Analytics.png",
          heading3: "Real-Time Analytics",
          heading3Para:
            "Comprehensive dashboards and reports for data-driven lending decisions and portfolio optimization.",
       
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Why Choose AOPAY Business Financing Platform/White-Label Solution.png",
          heading3: "White-Label Solution",
          heading3Para:
            "Fully customizable platform with your branding, workflows, and business rules.",
     
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Why Choose AOPAY Business Financing Platform/24_7 Support.png",
          heading3: "24/7 Support",
          heading3Para:
            "Dedicated technical support and regular platform updates for peak performance.",
       
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
      heading2: "Support for Multiple Loan Products",
      heading2Para:
        "AOPAY platform supports diverse lending products with configurable terms and workflows.",
      points: [
        {
          imgSrc:
            "/assets/BusinessFinancing/Support for Multiple Loan Products/Working Capital Loans.png",
          heading3: "Working Capital Loans",
          heading3Para:
            "Short-term financing for business operations, inventory purchase, and cash flow management with flexible repayment terms and quick approval processes.",
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Support for Multiple Loan Products/Term Loans.png",
          heading3: "Term Loans",
          heading3Para:
            "Long-term business financing for asset purchase, expansion, and capital investments with fixed or floating interest rates and structured EMI schedules.",
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Support for Multiple Loan Products/Invoice Financing.png",
          heading3: "Invoice Financing",
          heading3Para:
            "Unlock working capital by financing outstanding invoices. Automated invoice verification, credit assessment, and quick disbursement against receivables.",
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Support for Multiple Loan Products/Equipqment Financing.png",
          heading3: "Equipqment Financing",
          heading3Para:
            "Asset-backed loans for machinery and equipment purchase with collateral management, depreciation tracking, and asset valuation integration.",
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Support for Multiple Loan Products/MSME Loans.png",
          heading3: "MSME Loans",
          heading3Para:
            "Specialized lending for micro, small, and medium enterprises with simplified documentation, faster processing, and government scheme integration.",
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Support for Multiple Loan Products/Line of Credit.png",
          heading3: "Line of Credit",
          heading3Para:
            "Revolving credit facilities with automated limit management, drawdown tracking, and interest calculation based on utilized amounts.",
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
      heading2: "Platform Architecture",

      points: [
        {
          heading3: "Cloud-Native Infrastructure",
          heading3Para:
            "Built on AWS/Azure with auto-scaling, high availability, and disaster recovery for 99.9% uptime guarantee and enterprise-grade reliability.",
        },
        {
          heading3: "Microservices Architecture",
          heading3Para:
            "Modular design allows independent scaling of components, easier maintenance, and flexibility to customize specific modules without affecting others.",
        },
        {
          heading3: "API-First Design",
          heading3Para:
            "AOPAY REST APIs enable easy integration with your existing systems, third-party services, and partner platforms for maximum flexibility.",
        },
    
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is a Business Financing Platform?",
        answer:
          "A Business Financing Platform is a comprehensive digital lending software that enables banks, NBFCs, and fintech companies to originate, underwrite, disburse, and service business loans through automated workflows, credit decisioning engines, and portfolio management tools. It covers the entire lending lifecycle from application intake to collections and reporting.",
      },
      {
        question: "What loan products are supported?",
        answer:
          "Our platform supports multiple business loan products including working capital loans, term loans, invoice financing, equipment financing, lines of credit, MSME loans, supply chain financing, and merchant cash advances. Each product can have unique workflows, documentation requirements, and underwriting criteria.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Typical implementation takes 4-8 weeks depending on complexity and integration requirements. This includes system configuration, loan product setup, workflow customization, third-party integrations (credit bureaus, payment gateways), data migration, user training, and testing. We provide a dedicated implementation team and project management throughout.",
      },
      {
        question: "Is the platform compliant with RBI regulations?",
        answer:
          "Yes, our platform is built with compliance as a core feature. It meets RBI guidelines for digital lending, KYC/AML requirements, fair lending practices, data privacy regulations (DPDPA), and audit trail requirements. The system maintains complete documentation, generates regulatory reports, and undergoes regular compliance audits.",
      },
      {
        question: "What integrations are available?",
        answer:
          "Pre-built integrations include credit bureaus (CIBIL, Experian, Equifax, CRIF), account aggregators for bank statement analysis, GST and Income Tax verification APIs, payment gateways (Razorpay, PayU, etc.), e-Sign and e-NACH providers, core banking systems, and document management systems. Custom integrations can be built using our REST APIs.",
      },
      {
        question: "Can the platform scale with our business?",
        answer:
          "Absolutely. Our cloud-native architecture with microservices design allows horizontal scaling to handle growing loan volumes. The platform has processed over $50B in loans and supports lenders ranging from startups processing 50 loans/month to large NBFCs handling 50,000+ applications monthly. Auto-scaling ensures consistent performance during peak loads.",
      },
      {
        question: "Is the source code available?",
        answer:
          "Yes, we offer source code licensing for enterprise clients who need complete control and customization freedom. This includes full access to platform code, database schemas, documentation, and intellectual property rights. Source code license eliminates vendor dependency and allows unlimited customization to meet specific business requirements.",
      },
      {
        question: "What pricing models are available?",
        answer:
          "We offer flexible pricing: (1) SaaS Subscription - monthly/annual fees based on user count and features, (2) Per-Loan Pricing - pay only for successful disbursements, ideal for variable volumes, (3) Enterprise License - one-time fee with source code for large institutions. All models include implementation, training, support, and regular updates. Contact us for custom quotes based on your requirements.",
      },
    ],
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Core Features of AOPAY Customer Verification API",
      heading2Para:
        "Everything you need for modern digital lending operations in one comprehensive platform.",
      points: [
        {
          imgSrc:
            "/assets/BusinessFinancing/Core Features of AOPAY Customer Verification AP/Loan Origination.png",
          heading3: "Loan Origination",
          heading3Para:
            "Streamline application intake with customizable forms, document collection, digital signatures, and automated workflows. Support multiple loan products and borrower types seamlessly.",
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Core Features of AOPAY Customer Verification AP/Automated Underwriting.png",
          heading3: "Automated Underwriting",
          heading3Para:
            "Credit decisioning engine analyzes financial data, credit scores, bank statements, and alternative data to provide instant loan approvals with configurable risk rules.",
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Core Features of AOPAY Customer Verification AP/Credit Assessment.png",
          heading3: "Credit Assessment",
          heading3Para:
            "Comprehensive creditworthiness evaluation using bureau data, financial statements, cash flow analysis, and proprietary scoring models for accurate risk assessment.",
        },

        {
          imgSrc:
            "/assets/BusinessFinancing/Core Features of AOPAY Customer Verification AP/Instant Disbursement.png",
          heading3: "Instant Disbursement",
          heading3Para:
            "Automate loan disbursement to borrower bank accounts with integrated payment systems. Support multiple disbursement methods including NEFT, RTGS, IMPS, and UPI.",
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Core Features of AOPAY Customer Verification AP/Loan Servicing.png",
          heading3: "Loan Servicing",
          heading3Para:
            "Manage entire loan lifecycle including EMI collections, payment reminders, late fees, prepayments, restructuring, and account maintenance with automated workflows.",
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Core Features of AOPAY Customer Verification AP/Portfolio Management.png",
          heading3: "Portfolio Management",
          heading3Para:
            "Real-time portfolio analytics, risk monitoring, delinquency tracking, and performance dashboards to optimize your lending book and minimize credit losses.",
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Core Features of AOPAY Customer Verification AP/Collections Management.png",
          heading3: "Collections Management",
          heading3Para:
            "Automated collection workflows, payment reminders via SMS/email/WhatsApp, dunning strategies, and agent assignment for efficient recovery operations.",
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Core Features of AOPAY Customer Verification AP/Compliance Engine.png",
          heading3: "Compliance Engine",
          heading3Para:
            "Built-in regulatory compliance for RBI guidelines, KYC/AML requirements, data privacy regulations, and audit trails for complete regulatory adherence.",
        },
        {
          imgSrc:
            "/assets/BusinessFinancing/Core Features of AOPAY Customer Verification AP/Mobile & Web Apps.png",
          heading3: "Mobile & Web Apps",
          heading3Para:
            "White-label borrower and agent mobile apps for iOS and Android. Responsive web portals for seamless omnichannel lending experience.",
        },
      ],
    },
  ];

  const Steps = [
    {
      heading2: "How AOPAY Business Financing Platform Works",
      heading2Para:
        "Streamline your entire lending operation with our automated workflow engine.",
      steps: [
        {
          step1: "Application & Onboarding",
          step1Para:
            "Borrowers apply online or via mobile app. Platform automatically collects documents, performs KYC verification, and validates information through integrated APIs.",
        },
        {
          step2: "Credit Assessment",
          step2Para:
            "Automated underwriting engine analyzes credit bureau data, financial statements, bank statements, and GST returns to generate credit scores and loan recommendations.",
        },
        {
          step3: "Approval & Documentation",
          step3Para:
            "Configurable approval workflows route applications to appropriate decision makers. Generate loan agreements, collect digital signatures, and maintain complete audit trails.",
        },
        {
          step4: "Disbursement & Servicing",
          step4Para:
            "Instant loan disbursement to borrower accounts. Automated EMI scheduling, payment collection, account statements, and customer communication throughout loan tenure.",
        },
      ],
    },
  ];

  const HeadingSubheadings = [
    {
      heading2: "Perfect for Financial Institutions",
      heading2Para:
        "AOPAY loan management system serves lenders across the financial services ecosystem.",
      points: [
        {
          heading3: "Banks",
          heading3Para:
            "Traditional banks digitize lending operations, launch new loan products, and improve customer experience with automated workflows and instant decisioning.",
        },

        {
          heading3: "NBFCs",
          heading3Para:
            "Non-banking financial companies scale loan portfolios, reduce TAT (Turn Around Time), and maintain regulatory compliance with comprehensive lending infrastructure.",
        },
        {
          heading3: "Fintech Startups",
          heading3Para:
            "Digital lenders launch quickly with ready-to-use platforms, focus on customer acquisition while we handle the technology and compliance complexity.",
        },
        {
          heading3: "Digital Lenders",
          heading3Para:
            "Online lending platforms automate end-to-end operations from origination to collections, scaling efficiently without proportional cost increases.",
        },
        {
          heading3: "Loan Aggregators",
          heading3Para:
            "Marketplaces connect borrowers with multiple lenders, manage loan marketplace operations, and provide white-label lending solutions to partners.",
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
      <section className="py-20 px-6  mx-auto text-center max-w-5xl">
        <h2 className="text-3xl mb-4">Complete Lending Infrastructure</h2>
        <p className="text-xl mb-4 text-gray-700">
          AOPAY business lending platform provides everything you need to launch
          and scale your lending operations. From automated credit decisioning
          to compliance management, we've built a comprehensive solution that
          reduces time-to-market and operational costs.
        </p>
        <p className="text-xl mb-4 text-gray-700">
          Whether you're a traditional bank digitizing operations, an NBFC
          scaling loan volumes, or a fintech startup launching lending products,
          our platform adapts to your specific business model and regulatory
          requirements.
        </p>
      </section>
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints} />
      <StepsWithExplanation Steps={Steps} />
      <ContentWithDescriptivePoints content={content} />
      <HeadingSubheadingSection HeadingSubheadings={HeadingSubheadings} />
      <H2H3WithPoints content={contentWithHeadingsAndPoints2} />
      <H2DescH3Desc contentWithDescription={material} />
      <IntelligentAutomatedUnderwriting />
      <RegulatoryComplianceSecurity />
      <ComprehensiveAnalyticsReporting />
      <CollectionsRecoveryManagement />
      <WhiteLabelAndSupport />
      <FlexiblePricingModels />
      <GetStarted
        heading="Ready to Transform Your Lending Business?"
        subHeading="Join Banks, NBFCs, and fintech companies that trust our Business Financing Platform. Launch faster, lend smarter, and grow your loan portfolio with confidence."
        btn1="Schedule Demo"
        btn2="Contact Sales"
      />
      <FAQSection faqContent={faqContent} />
    </>
  );
};

export default BusinessFinancing;
