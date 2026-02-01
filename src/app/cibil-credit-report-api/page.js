import { ExploreProducts } from "@/components/ExploreProducts";
import { CIBILApiFeatures } from "@/sections/CIBILAPIFeatures";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import {
  PaymentHead,
  ToolsSection,
  CreditScoreSection,
  BenefitsSection,
  GetStarted,
} from "@/sections/mySection";
import { StepsWithExplanation } from "@/sections/StepsWithExplanation";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "CIBIL Score API for Credit Check & Risk Analysis | AOPAY",
  description:
    "Access real-time CIBIL credit scores with AoPay's API. Enable instant credit decisioning for lending, NBFC, fintech platforms with comprehensive credit history and risk assessment.",
  keywords: [
    "CIBIL score check, credit report India, free CIBIL score, credit score online, AOPay CIBIL, credit monitoring, credit report analysis, CIBIL report, credit score check, check my credit report, get credit report instantly, credit report and score, view my credit report understand my credit report, credit report services, credit report access, detailed credit report credit history report, credit report breakdown, credit report from bureaus, check credit report for errors, online credit report service, credit report dispute, update credit report, credit score improvement, credit report monitoring, credit report overview, personal credit report, online credit score checker, track credit score progress, free access to credit report, credit report summary, review credit report online, instant credit report access, credit report for loan application, secure credit report download credit report and fraud alerts, improve your credit score, credit report free trial, sign up for credit report service online credit report checker, credit score and report tool free credit report for consumers, check online CIBIL score best CIBIL score, CIBIL report download, get CIBIL report, check CIBIL score for free, view my CIBIL score report CIBIL analysis, consumer CIBIL report, best credit score, improve credit report, improve CIBIL score.",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://aopay.in/cibil-credit-report-api",
  },
  openGraph: {
    title: "CIBIL Credit Score API | Instant Credit Report | AoPay",
    description:
      "Access real-time CIBIL credit scores for instant credit decisioning.",
    url: "https://aopay.in/cibil-credit-report-api",
    siteName: "AOPay",
    locale: "en_IN",
    type : "website" , 
    images: [
      {
        url: "https://aopay.in/images/cibil-api-og.jpg",
        alt: "AOPay CIBIL Credit Report",
      },
    ],
  },
};

const CreditScore = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/cibil-credit-report-api",
    telephone: "011-42151216",

    description:
      "Cheapest CIBIL-based credit check API solution in India providing fast reports, score insights, monitoring features, and secure verification for businesses.",

    serviceType: [
      "White Label CIBIL API Solution",
      "Online CIBIL Report Check Solution",
      "CIBIL API Provider Near Me",
      "Best CIBIL API Solution Provider in India",
      "CIBIL Score API Integration Services",
      "CIBIL API System for Small Businesses",
      "Online Credit Report Check API Solution",
      "Affordable CIBIL API for Small Businesses",
      "CIBIL Report API for Lenders in India",
      "Auto CIBIL Check API Provider",
      "Digital CIBIL Report Solution for Local Businesses",
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
      "CIBIL Score API for Real-Time Credit Score Check & User Risk Assessment",
    subTitle:
      "Empower your fintech, banking, and NBFC operations with AOPAY's comprehensive CIBIL Credit Score Solution. Access real-time credit reports, instant credit verification, and advanced risk assessment tools with enterprise-grade security, regulatory compliance, and 99.5% accuracy rates for informed lending decisions.",
    imgSrc: "/assets/CIBIL/CIBIL.png",
    alt: "AEPS API dashboard for Aadhaar-enabled payment system cash withdrawal services.",
    btn1: "Start Integration",
    btn1Link: "/contact-us",
    btn2: "Request Demo",
    btn2Link: "/contact-us",
    video: false,


  };

  const features = [
    {
      icon: "/assets/Banking/Payment_History.png",
      title: "Payment History (35%)",
      description:
        "Reflects have you made payments on time. Timely payments improves your score, while late payments or defaults lower it.",
    },
    {
      icon: "/assets/Banking/Credit_Utilisation.png",
      title: "Credit Utilization (30%)",
      description:
        "Shows ratio of your credit card balances to your credit limit. Keeping your usage below 30% is ideal for a higher score.",
    },
    {
      icon: "/assets/Banking/Length_Credit_History.png",
      title: "Length of Credit History (15%)",
      description:
        "Longer credit history shows you have experience managing credit. The older your accounts, the more favorably they're viewed.",
    },
    {
      icon: "/assets/Banking/Types_of_Credits_Use.png",
      title: "Types of Credit in Use (10%)",
      description:
        "Variety of credit accounts you have (credit cards, mortgages, auto loans) matters. A balanced mix reflects strong credit management.",
    },
    {
      icon: "/assets/Banking/New_Credit.png",
      title: "New Credit (10%)",
      description:
        "Opening several new accounts or making frequent credit inquiries in a short time can negatively impact your score.",
    },
  ];

  const benefits = [
    {
      description: "Shows a greater reliance on credit",
    },
    {
      description: "Implies multiple hard inquiry attempts by the borrower",
    },
    {
      description: "Highlights responsible credit repayment behaviour",
    },
    {
      description: "Eligible for credit and loans at lower interest rates",
    },
  ];

  const benefitsHeading = {
    heading: "What is a Good Credit Score?",
    imgUrl: "/assets/Banking/Credit_Score/Credit_Score_2.png",
    alt: "Real-time credit score verification API for loan approval and risk assessment.",
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2:
        "AOPAY CIBIL Credit Score API Solution: Instant Credit Insights",
      heading2Para:
        "AOPAY's CIBIL API integration provides financial institutions with instant access to comprehensive credit information. Our API enables real-time credit score verification, detailed credit reports, and advanced risk assessment capabilities for banks, NBFCs, fintech companies, and lending platforms across India.",
      points: [
        {
          heading3: "Real-Time Credit Score API",
          heading3Para:
            "Access instant CIBIL credit scores with comprehensive credit history analysis. Our API provides real-time data retrieval, detailed credit summaries, and historical credit behavior patterns for accurate risk assessment and informed lending decisions with complete audit trails.",
          imgSrc:
            "/assets/CIBIL/Why Choose AOPAY CIBIL Credit Score API/Real-Time Credit Score API.png",
        },
        {
          heading3: "Comprehensive Credit Report API",
          heading3Para:
            "Retrieve detailed CIBIL credit reports including payment history, credit utilization, account details, enquiry information, and credit mix analysis. Our API delivers structured data in JSON/XML format with complete borrower profiles for thorough creditworthiness evaluation and risk management.",
          imgSrc:
            "/assets/CIBIL/Why Choose AOPAY CIBIL Credit Score API/Comprehensive Credit Report API.png",
        },
        {
          heading3: "Enterprise Security & Compliance",
          heading3Para:
            "Bank-grade security with 256-bit SSL encryption, multi-factor authentication, and complete regulatory compliance. Our API maintains RBI guidelines adherence, data privacy protection, PCI DSS certification, and comprehensive audit logging for secure credit information access and processing.",
          imgSrc:
            "/assets/CIBIL/Why Choose AOPAY CIBIL Credit Score API/Enterprise Security & Compliance.png",
        },
        {
          heading3: "Instant CIBIL API Integration",
          heading3Para:
            "Easy integration with comprehensive documentation, SDKs for multiple programming languages, and dedicated sandbox environment. Our developer-friendly API supports RESTful architecture, webhook notifications, and real-time status updates for efficient integration workflows.",
          imgSrc:
            "/assets/CIBIL/Why Choose AOPAY CIBIL Credit Score API/Instant CIBIL API Integration.png",
        },
        {
          heading3: "Advanced Risk Assessment Tools",
          heading3Para:
            "Leverage sophisticated credit analytics including credit score trends, default probability calculations, and behavioral scoring models. Our API provides risk scorecards, credit monitoring alerts, and predictive analytics for enhanced decision-making and portfolio risk management capabilities.",
          imgSrc:
            "/assets/CIBIL/Why Choose AOPAY CIBIL Credit Score API/Advanced Risk Assessment Tools.png",
        },
        {
          heading3: "Multi- Credit Bureau Data Integration",
          heading3Para:
            "Access consolidated credit information from multiple credit bureaus through unified API endpoints. Our comprehensive credit API supports CIBIL, Experian, Equifax, and CRIF High Mark integration with comparative analysis tools and consolidated reporting for complete credit assessment solutions.",
          imgSrc:
            "/assets/CIBIL/Why Choose AOPAY CIBIL Credit Score API/Multi- Credit Bureau Data Integration.png",
        },
      ],
    },
  ];

  const toolsContent = {
    imgSrc: "/assets/Banking/Credit_Score/Credit_Score_3.png",
    alt: "CIBIL API dashboard showing credit history monitoring and score improvement tips.",
    content: [
      {
        icon: "/assets/Banking/Free_Monitoring.png",
        title: "Free Monitoring",
        description:
          "Enjoy free, continuous monitoring of your credit report, keeping you updated with any changes in your credit score",
      },
      {
        icon: "/assets/Banking/Detailed_Analytics.png",
        title: "Detailed Analysis",
        description:
          "Get complete understanding of your credit health with detailed reports that break down all the factors affecting your score",
      },
      {
        icon: "/assets/Banking/Tips_Tricks.png",
        title: "Tips & Tricks",
        description:
          "Receive personalized tips and expert advice to improve your credit score & maintain financial health",
      },
      {
        icon: "/assets/Banking/Safe_Secure.png",
        title: "Safe & Secure",
        description:
          "Rest easy knowing your credit information is protected with industry-leading security measures & encryption",
      },
      {
        icon: "/assets/Travel/Deals_Offers.png",
        title: "Exclusive Loan Offers",
        description:
          "Get access to exclusive loan offers & financing options based on your credit score, helping you make informed decisions for your financial future",
      },
    ],
  };

  const Steps = [
    {
      heading2: "3‑Step Process: How AOPAY CIBIL Credit Score API Works",
      steps: [
        {
          imgSrc:
            "/assets/CIBIL/How AOPAY CIBIL Credit Score API Works/API Authentication.png",
          step1: "CIBIL API Authentication",
          step1Para:
            "Secure API key authentication with encrypted token-based access control and multi-factor verification for authorized credit data access.",
        },
        {
          imgSrc:
            "/assets/CIBIL/How AOPAY CIBIL Credit Score API Works/Data Request Processing.png",
          step2: "Data Request Processing",
          step2Para:
            "Submit borrower details through secure API endpoints with PAN, Aadhaar, or mobile number for instant credit information retrieval.",
        },
        {
          imgSrc:
            "/assets/CIBIL/How AOPAY CIBIL Credit Score API Works/Real-Time Response.png",
          step3: "Real-Time Response",
          step3Para:
            "Receive comprehensive credit reports and scores in structured JSON/XML format within 2-3 seconds for immediate decision making.",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2:
        "AOPAY CIBIL Credit Score API: Real‑World Use Cases by Industry",

      points: [
        {
          heading3: "Banks & NBFCs",
          heading3Para:
            "Streamline loan origination, credit card approvals, and risk assessment processes. Enable instant credit decisions for personal loans, business loans, and credit facilities with comprehensive borrower evaluation and automated underwriting.",
          imgSrc:
            "/assets/CIBIL/AOPAY CIBIL API Use Cases Across Industries/Banks & NBFCs.png",
        },
        {
          heading3: "Fintech Platforms",
          heading3Para:
            "Power digital lending platforms, P2P lending, and instant loan apps with real-time credit scoring capabilities. Enable quick loan disbursals, credit limit assignments, and risk-based pricing for enhanced customer experience.",
          imgSrc:
            "/assets/CIBIL/AOPAY CIBIL API Use Cases Across Industries/Fintech Platforms.png",
        },
        {
          heading3: "Corporate Banking",
          heading3Para:
            "Assess creditworthiness of corporate clients, MSMEs, and business entities for trade finance, working capital loans, and credit facilities. Implement comprehensive risk management and portfolio monitoring solutions.",
          imgSrc:
            "/assets/CIBIL/AOPAY CIBIL API Use Cases Across Industries/Corporate Banking.png",
        },
        {
          heading3: "E-commerce & Retail",
          heading3Para:
            "Enable Buy Now Pay Later (BNPL) services, instant credit approvals for e-commerce transactions, and retail financing solutions. Provide seamless checkout experiences with real-time credit assessment and flexible payment options.",
          imgSrc:
            "/assets/CIBIL/AOPAY CIBIL API Use Cases Across Industries/E-commerce & Retail.png",
        },
      ],
    },
  ];

  const linkContent = {
    headingContent: "Banking Solutions",
    url1: [
      {
        heading: "Virtual Account",
        paragraph:
          "Create Virtual Account for Secure Transactions & Simplified Money Management",
        link: "/virtual-account",
        icon: "/assets/ExploreProducts/Banking/VirtualAC.png",
        alt: "Virtual Account",
      },
    ],
    url2: [
      {
        heading: "FD & Recurring Deposits",
        paragraph:
          "Make Easy & Safe Investments with Recurring Deposits & Fixed Deposits with competitive interest rates",
        link: "/fixed-recurring-deposits",
        icon: "/assets/ExploreProducts/Banking/FD&RD.png",
        alt: "FD & Recurring Deposits",
      },
    ],
  };

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="CIBIL score check, credit
report India, free CIBIL score, credit score online, AOPay
CIBIL, credit monitoring, credit report analysis, CIBIL
report, credit score check, check my credit report, get
credit report instantly, credit report and score, view my
credit report, understand my credit report, credit report
services, credit report access, detailed credit report,
credit history report, credit report breakdown, credit
report from bureaus, check credit report for errors, online
credit report service, credit report dispute, update credit
report, credit score improvement, credit report monitoring,
credit report overview, personal credit report, online
credit score checker, track credit score progress, free
access to credit report, credit report summary, review
credit report online, instant credit report access, credit
report for loan application, secure credit report download,
credit report and fraud alerts, improve your credit score,
credit report free trial, sign up for credit report service,
online credit report checker, credit score and report tool,
free credit report for consumers, check online CIBIL score,
best CIBIL score, CIBIL report download, get CIBIL report,
check CIBIL score for free, view my CIBIL score report,
CIBIL analysis, consumer CIBIL report, best credit score,
improve credit report, improve CIBIL score."
        />
      </Head>
      {/* Structured Data */}
      <Script
        id="aopay-cibil-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PaymentHead headerSection={headerContent} />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <section className="py-20 px-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl shadow-lg">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            CIBIL Credit Score API: Regulatory Compliance &amp; Security
          </h2>
          <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-5"></div>
        </div>

        {/* Compliance Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* RBI Authorized */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src="/assets/CIBIL/CIBIL API Regulatory Compliance & Security/RBI Authorized.png"
              alt="RBI Authorized"
              className="w-6 h-auto mb-2"
            />
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              RBI Authorized
            </h3>
            <p className="text-gray-600">
              Fully authorized by Reserve Bank of India for credit information
              distribution with complete regulatory compliance and adherence to
              banking guidelines.
            </p>
          </div>

          {/* PCI DSS Certified */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src="/assets/CIBIL/CIBIL API Regulatory Compliance & Security/PCI DSS Certified.png"
              alt="PCI DSS Certified"
              className="w-6 h-auto mb-2"
            />
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              PCI DSS Certified
            </h3>
            <p className="text-gray-600">
              Complete Payment Card Industry Data Security Standard compliance
              ensuring highest level of data protection and secure transaction
              processing.
            </p>
          </div>

          {/* Data Privacy */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src="/assets/CIBIL/CIBIL API Regulatory Compliance & Security/Data Privacy.png"
              alt="Data Privacy"
              className="w-6 h-auto mb-2"
            />
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Data Privacy
            </h3>
            <p className="text-gray-600">
              Strict adherence to data protection regulations with consent
              management, data anonymization, and secure storage protocols for
              customer privacy.
            </p>
          </div>

          {/* Audit Compliance */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src="/assets/CIBIL/CIBIL API Regulatory Compliance & Security/Audit Compliance.png"
              alt="Audit Compliance"
              className="w-6 h-auto mb-2"
            />
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Audit Compliance
            </h3>
            <p className="text-gray-600">
              Comprehensive audit trails, transaction logging, and regulatory
              reporting capabilities for complete compliance documentation and
              oversight.
            </p>
          </div>
        </div>
      </section>

      <CIBILApiFeatures />
      <StepsWithExplanation Steps={Steps} />
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            CIBIL API Request & Response Sample Code For Developers
          </h2>

          {/* API Request */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Request
            </h3>
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm">
              <code>
                {`POST /api/v2/cibil/credit-score
{
  "customer_id": "CUST_12345",
  "pan_number": "ABCDE1234F",
  "date_of_birth": "1990-01-15",
  "mobile_number": "9876543210",
  "full_name": "John Doe",
  "consent": "Y"
}`}
              </code>
            </pre>
          </div>

          {/* API Response */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Response
            </h3>
            <pre className="bg-gray-900 text-green-100 p-6 rounded-xl overflow-x-auto text-sm">
              <code>
                {`{
  "status": "success",
  "request_id": "AOPAY_CIBIL_78901",
  "credit_score": 750,
  "credit_grade": "Good",
  "report_date": "2025-09-02",
  "credit_summary": {
    "total_accounts": 8,
    "active_accounts": 5,
    "credit_utilization": "32%",
    "payment_history": "95% on-time",
    "credit_age": "5 years 8 months"
  },
  "account_details": [
    {
      "account_type": "Credit Card",
      "bank_name": "HDFC Bank",
      "credit_limit": 500000,
      "current_balance": 85000,
      "payment_status": "Regular"
    }
  ],
  "risk_factors": [
    "High credit utilization on Card ending 4567",
    "Recent enquiry from ABC Bank"
  ]
}`}
              </code>
            </pre>
          </div>
        </div>
      </section>
      {/* <CreditScoreSection
        features={features}
        creditContent="How to Measure Credit Score?"
      />
      <BenefitsSection benefits={benefits} benefitsHeading={benefitsHeading} />
      <ToolsSection toolsContent={toolsContent} /> */}
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          AOPAY CIBIL Credit Score API – Pricing & Plans for Businesses
        </h2>
        <p className="text-md font-light text-center mb-4 max-w-7xl">
          Choose from our flexible CIBIL API pricing plans designed for
          businesses of all sizes. Transparent pricing with no hidden charges
          and volume-based discounts available.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {/* UPI Payments */}
          <div className="rounded-md shadow-md p-4 border">
            <img
              src="/assets/CIBIL/CIBIL API Pricing & Plans/Starter Plan.png"
              alt="Starter Plan"
              className="w-6 mb-2"
            />
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Starter Plan
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Basic credit score & report</li>
              <li>Standard API documentation</li>
              <li>Email support</li>
              <li>24-hour response time</li>
            </ul>
          </div>

          {/* QR Code Payments */}
          <div className="rounded-md shadow-md p-4 border">
            <img
              src="/assets/CIBIL/CIBIL API Pricing & Plans/Standard Plan.png"
              alt="Standard Plan"
              className="w-6 mb-2"
            />
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Standard Plan
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Detailed credit analysis</li>
              <li>Risk analytics & insights</li>
              <li>Priority API support</li>
              <li>Custom reporting dashboard</li>
              <li>Webhook notifications</li>
            </ul>
          </div>

          {/* Enterprise Solution */}
          <div className="rounded-md shadow-md p-4 border">
            <img
              src="/assets/CIBIL/CIBIL API Pricing & Plans/Enterprise Plan.png"
              alt="Enterprise Plan"
              className="w-6 mb-2"
            />
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Enterprise Plan
            </h3>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Unlimited reports</li>
              <li>Multi-bureau integration</li>
              <li>Advanced risk models</li>
              <li>Dedicated account manager</li>
              <li>Custom API endpoints</li>
              <li>24/7 technical support</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          CIBIL API Integration: Technical Specifications & Requirements
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* UPI Payments */}
          <div className="rounded-md shadow-md p-4 border">
            <img
              src="/assets/CIBIL/CIBIL API Technical Specifications/API Specifications.png"
              alt="API Specifications"
              className="w-6 mb-2"
            />
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              API Specifications
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Protocol:</strong> RESTful API with HTTPS
              </li>
              <li>
                <strong>Authentication:</strong> OAuth 2.0 & API Keys
              </li>
              <li>
                <strong>Response Format:</strong> JSON/XML
              </li>
              <li>
                <strong>Response Time:</strong> within seconds
              </li>
              <li>
                <strong>Uptime:</strong> 99.9% SLA guarantee
              </li>
              <li>
                <strong>Rate Limiting:</strong> 100 requests/minute
              </li>
            </ul>
          </div>

          {/* QR Code Payments */}
          <div className="rounded-md shadow-md p-4 border">
            <img
              src="/assets/CIBIL/CIBIL API Technical Specifications/Data Coverage.png"
              alt="Data Coverage"
              className="w-6 mb-2"
            />
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Data Coverage
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Credit History:</strong> Up to 24 months
              </li>
              <li>
                <strong>Account Types:</strong> Loans, Credit Cards, Overdrafts
              </li>
              <li>
                <strong>Credit Score Range:</strong> 300-900
              </li>
              <li>
                <strong>Bureau Coverage:</strong> Pan-India data
              </li>
              <li>
                <strong>Update Frequency:</strong> Daily data refresh
              </li>
            </ul>
          </div>

          {/* Enterprise Solution */}
          <div className="rounded-md shadow-md p-4 border">
            <img
              src="/assets/CIBIL/CIBIL API Technical Specifications/Supported Programming Languages & SDKs.png"
              alt="Supported Programming Languages & SDKs"
              className="w-6 mb-2"
            />
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Supported Programming Languages & SDKs
            </h3>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Python SDK</li>
              <li>Java SDK</li>
              <li>Node.js SDK</li>
              <li>PHP SDK</li>
              <li>Ruby SDK</li>
              <li>.NET SDK</li>
            </ul>
          </div>
        </div>
      </section>
      <GetStarted
        heading="Ready to Transform Your Credit Assessment Process?"
        subHeading="Join leading banks, NBFCs, and fintech companies using AOPAY's CIBIL API for intelligent credit decisions, risk management, and enhanced customer experiences."
        btn1="Schedule Demo"
      />
      {/* <ExploreProducts linkContent={linkContent} /> */}
    </>
  );
};

export default CreditScore;
