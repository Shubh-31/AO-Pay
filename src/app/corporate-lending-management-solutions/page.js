import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import { PaymentHead, FAQSection } from "@/sections/mySection";
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

export const metadata = {
  title: "Corporate Lending Management Software & Solutions | AOPAY",
  description:
    "Build digital lending apps with AoPay's corporate lending solution. Instant loan approvals, credit scoring, disbursement, EMI collection for personal, business, MSME loans.",
  keywords:
    "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/corporate-lending-management-solutions",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "Online Money Transfer Solution | AOPay",
    description:
      "Transfer money securely and instantly with AOPay money transfer Solutions. Quick, easy, and hassle-free.",
    url: "https://aopay.in/corporate-lending-management-solutions",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/lending-apps-og.jpg",
        width: 1200,
        height: 630,
        alt: "AOPay Money Transfer Banner",
      },
    ],
  },
};

const Logistics = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/corporate-lending-management-solutions",
    telephone: "011-42151216",
    description:
      "Cheapest banking solutions for corporate lending & loan apps in India providing secure loan management, automated approvals, repayment tracking, and reliable support.",
    serviceType: [
      "White Label Banking Solutions for corporate lendings & loan apps",
      "Best Banking solutions for corporate lending",
      "Best banking solutions Provider lendings Near Me",
      "Best Corporate Lending Banking Solution Provider in India",
      "Banking partner for digital lending startups",
      "Secure payment solutions for loan apps",
      "Low-cost banking solutions for corporate loan companies",
      "Affordable Corporate Loan Disbursement & Repayment Solutions",
      "Fintech Lending Banking API Provider for corporates in India",
      "Digital Lending Banking Infrastructure Provider",
      "Digital Payout Solution for Local Businesses",
      "Loan App Banking Integration Service in India",
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
      "Corporate Lending Solution for NBFCs, Corporate Lenders & Financial Institutions",
    subTitle:
      "Accelerate loan disbursements and automate repayment collections with end-to-end lending infrastructure. Streamline underwriting, compliance, and portfolio management for NBFCs and financial institutions.",
    imgSrc: "/assets/LoanLending/LENDING LOAN.png",
    alt: "Secure money transfer API enabling instant fund transfers between bank accounts.",
    video: false,
    btn1: "Contact Sales",
    btn1Link: "/contact-us",
    btn2: "Scale Your Lending Business",
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
      heading2: "AOPAY Comprehensive Credit Verification Solutions",
      heading2Para:
        "Ensure accurate borrower assessment with our integrated credit verification platform. Access multiple data sources, perform real-time checks, and build comprehensive borrower profiles for informed lending decisions.",
      points: [
        {
          heading3: "CIBIL Credit Scoring Integration",
          heading3Para:
            "Access real-time CIBIL credit scores and detailed credit reports to evaluate borrower creditworthiness. Our seamless integration provides instant credit assessments, helping you make faster, more accurate lending decisions while maintaining regulatory compliance.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/HighPerformanceProcessing.png",
        },

        {
          heading3: "Aadhaar Identity Verification",
          heading3Para:
            "Verify borrower identity instantly with Aadhaar-based authentication. Our secure integration ensures accurate identity verification, prevents fraud, and streamlines the KYC process while maintaining data privacy and security standards.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/HighPerformanceProcessing.png",
        },
        {
          heading3: "PAN & GST Verification",
          heading3Para:
            "Validate borrower income and business credentials through PAN and GST verification services. Access tax filing history, business turnover data, and financial records to assess borrower repayment capacity and business stability.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/HighPerformanceProcessing.png",
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
      heading2: "AOPAY Streamlined Loan Processing Workflow",
      heading2Para:
        "AOPAY automated loan processing system guides borrowers through a seamless application journey while providing lenders with comprehensive risk assessment and decision-making tools.",
      points: [
        {
          heading3: "Application Intake",
          heading3Para:
            "Borrower submits loan application through mobile app or web portal with basic information and required documents.",
          imgSrc:
            "/assets/LoanLending/AOPAY Streamlined Loan Processing Workflow/Application Intake.png",
        },
        {
          heading3: "Identity Verification",
          heading3Para:
            "Automated verification of Aadhaar, PAN, and other identity documents using secure verification services.",
          imgSrc:
            "/assets/LoanLending/AOPAY Streamlined Loan Processing Workflow/Identity Verification.png",
        },
        {
          heading3: "Credit Assessment",
          heading3Para:
            "CIBIL score retrieval, bank statement analysis, and comprehensive creditworthiness evaluation.",
          imgSrc:
            "/assets/LoanLending/AOPAY Streamlined Loan Processing Workflow/Credit Assessment.png",
        },
        {
          heading3: "Automated Decision",
          heading3Para:
            "AI-powered underwriting engine processes all data points and generates loan approval decision with terms.",
          imgSrc:
            "/assets/LoanLending/AOPAY Streamlined Loan Processing Workflow/Automated Decision.png",
        },
        {
          heading3: "Fund Disbursement",
          heading3Para:
            "Instant loan disbursement to verified bank account or digital wallet upon acceptance of terms.",
          imgSrc:
            "/assets/LoanLending/AOPAY Streamlined Loan Processing Workflow/Fund Disbursement.png",
        },
        {
          heading3: "Collection Setup",
          heading3Para:
            "E-NACH mandate setup for automated EMI collection and ongoing loan management.",
          imgSrc:
            "/assets/LoanLending/AOPAY Streamlined Loan Processing Workflow/Collection Setup.png",
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
      heading2: "Integrated Banking Solutions for Seamless Operations",
      heading2Para:
        "Connect your lending platform with comprehensive banking services to streamline fund management, automate collections, and enhance borrower experience with integrated financial services.",
      points: [
        {
          heading3: "Bank Account Verification",
          heading3Para:
            "Instantly verify driver and vendor bank accounts to ensure secure, accurate payments. Reduce failed transactions, prevent fraud, and maintain compliance with financial regulations while onboarding new partners quickly.",
          imgSrc:
            "/assets/LoanLending/Integrated Banking Solutions for Seamless Operations/Bank Account Verification.png",
        },
        {
          heading3: "E-NACH Automated Collections",
          heading3Para:
            "Set up automated loan repayment collections through E-NACH mandates. Streamline EMI collections, reduce default rates, and improve cash flow management with reliable, automated debit collection systems.",
          imgSrc:
            "/assets/LoanLending/Integrated Banking Solutions for Seamless Operations/E-NACH Automated Collections.png",
        },
        {
          heading3: "Virtual Account Management",
          heading3Para:
            "Create dedicated virtual accounts for loan disbursement and collection tracking. Improve reconciliation processes, enhance payment visibility, and provide borrowers with personalized account management experiences.",
          imgSrc:
            "/assets/LoanLending/Integrated Banking Solutions for Seamless Operations/Virtual Account Management.png",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "How quickly can we launch our loan app with AOPAY platform?",
        answer:
          "Most lending companies can launch their loan app within 4-6 weeks. Our comprehensive platform includes pre-built loan management workflows, verification integrations, and compliance features that significantly reduce development time and accelerate time-to-market.",
      },
      {
        question:
          "What verification services are integrated with the AOPAY lending platform?",
        answer:
          "Our platform integrates with CIBIL credit scoring, Aadhaar identity verification, PAN validation, GST records check, bank account verification, and multiple other data sources to provide comprehensive borrower assessment and risk evaluation capabilities.",
      },
      {
        question:
          "How does AOPAY ensure regulatory compliance for lending operations?",
        answer:
          "Our platform includes automated compliance monitoring, regulatory reporting tools, audit trail maintenance, and regular updates aligned with RBI guidelines and industry regulations. We provide built-in compliance features that adapt to changing regulatory requirements.",
      },
      {
        question: "Can AOPAY platform handle high-volume loan processing?",
        answer:
          "Yes, our scalable infrastructure can process thousands of loan applications daily with automated workflows, real-time decision engines, and high-performance verification systems. The platform automatically scales based on transaction volume without compromising processing speed or accuracy.",
      },
      {
        question:
          "What makes AOPAY different from other payment solutions for logistics?",
        answer:
          "AOPAY provides a complete ecosystem including lending management, banking integration, investment services, and payment processing in one platform. Our AI-powered decision engines, comprehensive verification network, and regulatory-ready infrastructure offer unmatched value for lending businesses.",
      },
      {
        question: "Does AOPAY support different types of lending products?",
        answer:
          "Our flexible platform supports personal loans, business loans, microfinance, peer-to-peer lending, buy-now-pay-later, and specialized financing products. Each product type can be configured with specific workflows, approval criteria, and risk parameters.",
      },
    ],
  };

  const HeadingSubheadings = [
    {
      heading2: "Core Banking & Investment Platform Integration",
      heading2Para:
        "Expand your lending services with integrated banking and investment solutions. Offer borrowers comprehensive financial services while creating additional revenue streams and improving customer lifetime value.",
      points: [
        {
          heading3: "Core Banking Software",
          heading3Para:
            "Integrate core banking functionalities to offer savings accounts, current accounts, and banking services to your borrowers. Create a comprehensive financial ecosystem that enhances customer relationships and drives business growth.",
          imgSrc:
            "/assets/LoanLending/Core Banking & Investment Platform Integration/Core Banking Software.png",
        },

        {
          heading3: "FD & RD Investment Services",
          heading3Para:
            "Provide fixed deposit and recurring deposit options to borrowers looking to build savings and improve their credit profiles. Our integrated investment platform helps customers achieve financial goals while generating additional revenue for your business.",
          imgSrc:
            "/assets/LoanLending/Core Banking & Investment Platform Integration/FD & RD Investment Services.png",
        },
        {
          heading3: "Instant Fund Disbursement",
          heading3Para:
            "Disburse approved loans instantly to borrower accounts through our high-speed payment processing infrastructure. Support multiple disbursement channels including bank transfers, digital wallets, and prepaid cards for maximum convenience.",
          imgSrc:
            "/assets/LoanLending/Core Banking & Investment Platform Integration/Instant Fund Disbursement.png",
        },
      ],
    },
  ];

   const contentWithHeadingsAndPoints = [
     {
       heading2: "Virtual Account API Use Cases",
       heading2Para:
         "Discover how businesses across industries leverage our Virtual Account solution for streamlined payment collection:",
       points: [
         {
           heading3: "E-commerce Order Payments",
           heading3Para:
             "Create unique virtual accounts for each customer order. Enable customers to pay via bank transfer with automatic order confirmation and inventory updates upon payment receipt.",
           imgSrc:
             "/assets/LoanLending/Virtual Account API Use Cases/E-commerce Order Payments.png",
         },
         {
           heading3: "B2B Invoice Collection",
           heading3Para:
             "Generate virtual accounts for business invoices with automated reconciliation. Perfect for enterprises managing multiple client payments with varying settlement terms.",
           imgSrc:
             "/assets/LoanLending/Virtual Account API Use Cases/B2B Invoice Collection.png",
         },
         {
           heading3: "Educational Fee Collection",
           heading3Para:
             "Streamline student fee collection with dedicated virtual accounts for each student. Automatic fee reconciliation with student management systems and instant payment confirmations.",
           imgSrc:
             "/assets/LoanLending/Virtual Account API Use Cases/Educational Fee Collection.png",
         },
         {
           heading3: "Real Estate & Property Payments",
           heading3Para:
             "Manage property bookings, EMI collections, and maintenance payments with individual virtual accounts. Automated tracking for property developers and management companies.",
           imgSrc:
             "/assets/LoanLending/Virtual Account API Use Cases/Real Estate & Property Payments.png",
         },
         {
           heading3: "Healthcare & Insurance",
           heading3Para:
             "Collect insurance premiums, treatment fees, and claims settlements with dedicated virtual accounts. Seamless integration with healthcare management systems.",
           imgSrc:
             "/assets/LoanLending/Virtual Account API Use Cases/Healthcare & Insurance.png",
         },
         {
           heading3: "Supply Chain & Logistics",
           heading3Para:
             "Automate vendor payments, freight collections, and COD settlements with virtual account-based payment processing. Perfect for logistics and delivery companies.",
           imgSrc:
             "/assets/LoanLending/Virtual Account API Use Cases/Supply Chain & Logistics.png",
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
      <DigitalLending />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints} />
      <ContentWithDescriptivePoints content={content} />
      <H2DescH3Desc contentWithDescription={material} />
      <HeadingSubheadingSection HeadingSubheadings={HeadingSubheadings} />
      <BorrowerVerification />
      <H2H3WithPoints content={contentWithHeadingsAndPoints2} />
      <LendingBusinessSolutions/>
      <LendingRiskCompliance/>
      <LendingIntegration/>
      <LendingGrowth/>
      <LendingSupport/>  
      <FAQSection faqContent={faqContent} />
      <LendingCTA/>
    </>
  );
};

export default Logistics;
