import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import { LoanManagementUseCases } from "@/sections/LoanManagementUseCases";
import { FAQSection, GetStarted, PaymentHead } from "@/sections/mySection";
import Script from "next/script";
import React from "react";


export const metadata = {
  title: "Loan Management Solution for NBFCs & Microfinance | AOPAY",
  description:
    "Automate loan lifecycle with AoPay's loan management system. Handle credit assessment, disbursement, EMI collection, portfolio management for personal, business, and gold loans.",
  keywords: [
    "GST verification API",
    "GSTIN verification",
    "GST number verification",
    "GST validation",
    "AOPay GST verification",
    "tax compliance",
    "business verification India",
    "verify GST registration",
    "GST status check",
    "GST compliance verification",
    "check GST details",
    "validate GSTIN",
    "GST online verification",
    "GST registration check",
    "GST number lookup",
    "GST verification portal",
    "verify GSTIN by name",
    "GST certificate verification",
    "GST status India",
    "verify GST supplier",
    "validate GST details",
    "GST registration verification online",
    "GST tax verification",
    "GST lookup tool",
    "GST online search",
    "GST compliance check",
    "verify GST tax payer",
    "GST verification process",
    "verify GST tax number",
    "GST number search tool",
    "check GST validity",
    "GST registration authenticity",
    "GST number validation India",
    "GST verification for suppliers",
    "GST registration and verification",
    "GST invoice verification",
    "verify GST taxpayer status",
    "GST details confirmation",
    "GST system verification",
    "GST status inquiry",
    "GST compliance report",
    "GST registration details",
    "check GSTIN status India",
  ],

  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://aopay.in/loan-management-software",
  },
  openGraph: {
    title: "Loan Management | AOPay",
    description:
      "Loan Management by AOPay - Designed for Microfinance, Banks, Fintech. Comprehensive financial management & payment solutions.",
    url: "https://aopay.in/loan-management-software",
    siteName: "AOPay",
    locale: "en_IN",
    images: [
      {
        url: "https://aopay.in/images/loan-management-software.jpg",
        width: 800,
        height: 600,
        alt: "AOPAY Open Graph Image",
      },
    ],
    twitter: {
      card: "summary_large_image",
      title: "Loan Management | AOPay",
      description:
        "Loan Management by AOPay - Designed for Microfinance, Banks, Fintech. Comprehensive financial management & payment solutions.",
      images: ["https://aopay.in/images/loan-management-software.jpg"],
    },
    type: "website",
  },
};



const LoanManagement = () => {

   const schema = {
     "@context": "https://schema.org",
     "@type": "LocalBusiness",
     name: "AOPAY Technology Pvt. Ltd.",
     url: "https://aopay.in/loan-management-software",
     telephone: "011-42151216",
     description:
       "Cheapest Loan Management Software in India providing secure, feature-rich solutions for loan lifecycle management, tracking, and reporting for lenders.",
     serviceType: [
       "White Label Loan Management Software Solution",
       "Cloud based Loan Management Software Solution",
       "Loan Management Software (LMS) Provider Near Me",
       "Best Loan Management Software Solution Provider in India",
       "SaaS Loan Management Software",
       "Loan Management System for Small Businesses",
       "Bulk loan disbursal & repayment management Solution",
       "Affordable Loan Management Software for Small Businesses",
       "Loan management software for small finance companies in India",
       "Auto Loan processing software Provider",
       "Loan management platform for banks & NBFCs",
       "Digital loan tracking & automation solution",
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
      "Advanced Loan Management Software Solution for Modern Financial Institutions",
    subTitle:
      "Streamline your lending operations with our comprehensive loan management platform designed for NBFCs, banks, microfinance institutions, and fintech companies. Automate loan origination, processing, and disbursement workflows efficiently.",
    imgSrc: "/assets/LoanManagement/LOAN MANAGEMENT.jpg",
    alt: "Multi-channel payment gateway API supporting credit cards, debit cards and digital wallets.",
    btn1: "Request a Demo",
    btn1Link: "/contact-us",
    btn2: "Get Started",
    btn2Link: "/contact-us",
    video: false,
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Lending Solution Tailored For Financial Institutions",
      heading2Para:
        "AOPAY loan management solution is specifically designed to meet the unique requirements of different financial institutions and lending businesses.",
      points: [
        {
          imgSrc:
            "/assets/LoanManagement/Tailored Solutions for Financial Institutions/NBFC Loan Management System.png",
          heading3: "NBFC Loan Management System",
          heading3Para:
            "Complete compliance with RBI guidelines, automated reporting, and seamless integration with existing NBFC operations. Our platform supports all types of NBFC lending including vehicle loans, personal loans, and business loans.",
        },
        {
          imgSrc:
            "/assets/LoanManagement/Tailored Solutions for Financial Institutions/Bank Lending Solutions.png",
          heading3: "Bank Lending Solution",
          heading3Para:
            "Enterprise-grade loan origination, processing, and disbursement system for commercial banks. Features include credit scoring integration, risk assessment tools, and regulatory compliance modules.",
        },
        {
          imgSrc:
            "/assets/LoanManagement/Tailored Solutions for Financial Institutions/Microfinance Institution Software.png",
          heading3: "Microfinance Institution Software",
          heading3Para:
            "Specialized features for microfinance operations including group lending, village banking, and mobile-based loan management. Support for multiple local languages and offline capabilities.",
        },
        {
          imgSrc:
            "/assets/LoanManagement/Tailored Solutions for Financial Institutions/Fintech Integration Platform.png",
          heading3: "Fintech Integration Platform",
          heading3Para:
            "API-first architecture designed for fintech companies building lending products. Quick integration, comprehensive documentation, and developer-friendly tools.",
        },
      ],
    },
  ];

  const material = [
    {
      heading2: "Why Choose AOPAY Best Loan Management Software",

      points: [
        {
          imgSrc:
            "/assets/LoanManagement/Why Choose Our Loan Management Platform/Enhanced Security & Compliance.png",
          heading3: "Enhanced Security & Compliance",
          heading3Para:
            "Bank-grade security with end-to-end encryption, PCI DSS compliance, and comprehensive audit trails. Stay compliant with RBI, regulatory requirements, and industry standards.",
        },
        {
          imgSrc:
            "/assets/LoanManagement/Why Choose Our Loan Management Platform/Scalable Architecture.png",
          heading3: "Scalable Architecture",
          heading3Para:
            "Handle growing loan portfolios with our cloud-native, scalable infrastructure. Process millions of transactions without performance degradation.",
        },
        {
          imgSrc:
            "/assets/LoanManagement/Why Choose Our Loan Management Platform/Real-time Analytics.png",
          heading3: "Real-time Analytics",
          heading3Para:
            "Advanced reporting and analytics dashboard for loan officers, credit underwriters, and risk managers. Make data-driven lending decisions with comprehensive insights.",
        },
      ],
    },
  ];

  const content = [
    {
      heading2: "Easy Integration and Developer Support",
      heading2Para:
        "Our RESTful architecture is designed for easy integration into existing systems. Whether you're a product manager planning integration or a developer implementing the solution, our platform provides all necessary tools.",
      points: [
        {
          imgSrc:
            "/assets/LoanManagement/Easy Integration and Developer Support/Core Banking Integration.png",
          heading3: "Core Banking Integration",
          heading3Para:
            "Connect with popular core banking systems including Finacle, TCS BaNCS, and Temenos. Real-time account validation, fund transfers, and transaction posting capabilities.",
        },

        {
          imgSrc:
            "/assets/LoanManagement/Easy Integration and Developer Support/Third-Party Integrations.png",
          heading3: "Third-Party Integrations",
          heading3Para:
            "Pre-built connectors for credit bureaus, payment gateways, SMS providers, and document verification services. Extensible architecture for custom integrations.",
        },
        {
          imgSrc:
            "/assets/LoanManagement/Easy Integration and Developer Support/API Documentation and Support.png",
          heading3: "API Documentation and Support",
          heading3Para:
            "Comprehensive API documentation, SDKs for popular programming languages, sandbox environment, and dedicated technical support for developers and integration teams.",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2: "Comprehensive Loan Portfolio Management",

      points: [
        {
          imgSrc:
            "/assets/LoanManagement/Comprehensive Loan Portfolio Management/Collections and Recovery.png",
          heading3: "Collections and Recovery",
          heading3Para:
            "Automated collection workflows, payment reminders, and recovery strategies. Integration with collection agencies and legal management systems.",
        },
        {
          imgSrc:
            "/assets/LoanManagement/Comprehensive Loan Portfolio Management/Risk Monitoring.png",
          heading3: "Risk Monitoring",
          heading3Para:
            "Continuous portfolio risk assessment, early warning systems, and predictive analytics for proactive risk management and decision-making.",
        },
        {
          imgSrc:
            "/assets/LoanManagement/Comprehensive Loan Portfolio Management/Regulatory Reporting.png",
          heading3: "Regulatory Reporting",
          heading3Para:
            "Automated generation of regulatory reports including NPA classification, provisioning calculations, and compliance documentation for audits.",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What types of financial institutions can use this software?",
        answer:
          "Our loan management software is designed for NBFCs, commercial banks, microfinance institutions, fintech companies, co-operative societies, NIDHI companies, and any organization involved in lending operations.",
      },
      {
        question: "How secure is the loan processing system?",
        answer:
          "Our platform uses bank-grade security with 256-bit SSL encryption, tokenization, and multi-factor authentication. We are PCI DSS compliant and follow industry best practices for financial data protection.",
      },
      {
        question: "Can I integrate with my existing core banking system?",
        answer:
          "Yes, our API-first architecture allows seamless integration with existing core banking and financial systems. We provide comprehensive documentation, SDKs, and technical support to ensure smooth integration.",
      },
      {
        question: "What is the processing time for loan disbursements?",
        answer:
          "Individual disbursements are processed instantly, while bulk disbursements depend on batch size but typically complete within 5-15 minutes. Real-time status updates are provided throughout the process.",
      },
      {
        question: "Do you support multiple loan products?",
        answer:
          "Yes, our platform supports various loan products including personal loans, business loans, vehicle loans, home loans, microfinance, and custom loan products based on your requirements.",
      },
    ],
  };

  return (
    <>
      <Script
        id="flight-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PaymentHead headerSection={headerContent} />
      <section className="py-16 px-6 max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          AOPAY Loan Processing & Disbursement Software
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          AOPAY loan management solution combines powerful lending workflows
          with secure fund transfer capabilities. Whether you're managing
          microloans or corporate lending, our platform scales with your
          business needs.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Instant Loan Disbursement */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="/assets/LoanManagement/Complete Loan Processing and Disbursement Solutions/Instant Loan Disbursement.png"
              alt="Instant Loan Disbursement"
              className="w-6 h-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Instant Loan Disbursement
            </h3>
            <p className="text-gray-600 mb-4">
              Process individual loan disbursements instantly to bank accounts
              and digital wallets with our secure transfer system. Perfect for
              on-demand lending and emergency loan processing.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Direct bank account transfers</li>
              <li>Digital wallet integration</li>
              <li>Real-time status tracking</li>
              <li>Multi-currency support</li>
            </ul>
          </div>

          {/* Bulk Loan Processing */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="/assets/LoanManagement/Complete Loan Processing and Disbursement Solutions/Bulk Loan Processing.png"
              alt="Bulk Loan Processing"
              className="w-6 h-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Bulk Loan Processing
            </h3>
            <p className="text-gray-600 mb-4">
              Handle thousands of loan disbursements simultaneously with our
              robust batch processing system. Ideal for salary advance programs,
              group loans, and large-scale microfinance operations.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Process up to 10,000 transactions per batch</li>
              <li>CSV/Excel file upload support</li>
              <li>Automated validation and error handling</li>
              <li>Detailed transaction reporting</li>
            </ul>
          </div>

          {/* Secure Fund Transfer Links */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="/assets/LoanManagement/Complete Loan Processing and Disbursement Solutions/Secure Fund Transfer Links.png"
              alt="Secure Fund Transfer Links"
              className="w-6 h-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Secure Fund Transfer Links
            </h3>
            <p className="text-gray-600 mb-4">
              Create secure transfer links for borrowers to receive funds
              directly. Enhanced security and convenience for both lenders and
              borrowers with comprehensive audit trails.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Time-limited secure links</li>
              <li>OTP verification</li>
              <li>Bank account verification</li>
              <li>Complete transaction audit trails</li>
            </ul>
          </div>
        </div>
      </section>
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <H2DescH3Desc contentWithDescription={material} />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <ContentWithDescriptivePoints content={content} />
      <LoanManagementUseCases />
      <section className="py-16 px-6 max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          Advanced Customer Relationship Management
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Borrower Portal */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="/assets/LoanManagement/Advanced Customer Relationship Management/Borrower Portal.png"
              alt="Borrower Portal"
              className="w-6 h-auto mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Borrower Portal
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Self-service portal for borrowers to track application status,
              make payments, download statements, and communicate with loan
              officers. Mobile-responsive design for better user experience.
            </p>
          </div>

          {/* Communication Hub */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="/assets/LoanManagement/Advanced Customer Relationship Management/Communication Hub.png"
              alt="Communication Hub"
              className="w-6 h-auto mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Communication Hub
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Integrated communication tools including SMS, email, and WhatsApp
              messaging. Automated notifications for payment reminders, loan
              updates, and promotional campaigns.
            </p>
          </div>

          {/* Customer Analytics */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="/assets/LoanManagement/Advanced Customer Relationship Management/Customer Analytics.png"
              alt="Customer Analytics"
              className="w-6 h-auto mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Customer Analytics
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Detailed customer insights including payment behavior, risk
              profiles, and lifetime value analysis. Support for targeted
              marketing and retention strategies.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-10 text-center">
          {/* H2 */}
          <h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Trusted by Financial Institutions Worldwide
          </h2>

          {/* Stats */}
          <div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">
              <p className="text-2xl font-bold text-indigo-600">500+</p>
              <p className="text-gray-700 mt-1">Financial Institutions</p>
            </div>
            <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">
              <p className="text-2xl font-bold text-indigo-600">50Cr+</p>
              <p className="text-gray-700 mt-1">Monthly Loan Volume</p>
            </div>
            <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">
              <p className="text-2xl font-bold text-indigo-600">99.9%</p>
              <p className="text-gray-700 mt-1">System Uptime</p>
            </div>
            <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">
              <p className="text-2xl font-bold text-indigo-600">24/7</p>
              <p className="text-gray-700 mt-1">Technical Support</p>
            </div>
          </div>

          {/* Description */}
        </div>
      </section>
      <FAQSection faqContent={faqContent} />

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Get In Touch With Our Lending Experts
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Connect with our lending solution specialists to learn how our
          platform can address your specific lending requirements and
          integration needs.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="/assets/LoanManagement/Get In Touch With Our Lending Experts/For Product Managers.png"
              alt="For Product Managers"
              className="w-6 h-auto mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              For Product Managers
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Discuss feature requirements, integration timelines, and
              customization options for your lending products and business
              workflows.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="/assets/LoanManagement/Get In Touch With Our Lending Experts/For Developers.png"
              alt="For Product Managers"
              className="w-6 h-auto mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              For Developers
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Get technical documentation, API access, and integration support
              for seamless implementation with existing systems.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="/assets/LoanManagement/Get In Touch With Our Lending Experts/For Risk Managers.png"
              alt="For Product Managers"
              className="w-6 h-auto mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              For Risk Managers
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Learn about our security features, compliance capabilities, and
              risk management tools for comprehensive portfolio protection.
            </p>
          </div>
        </div>
      </section>
      <GetStarted
        heading="Ready to Transform Your Lending Operations?"
        subHeading="Join hundreds of financial institutions already using our loan management system to streamline their operations and enhance customer experience."
        btn1="Schedule Consultation"
        btn4="Get Pricing"
        pricingKey="Loan Management"
      />
    </>
  );
};

export default LoanManagement;
