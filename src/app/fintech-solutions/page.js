import ExpandableCards from "@/sections/ExpandableCards";
import ExtraExpandableCards from "@/sections/ExtraExpandableCards";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import MicrofinanceFeaturesTabs from "@/sections/MicrofinanceFeaturesTabs";
import { FAQSection, GetStarted, PaymentHead } from "@/sections/mySection";
import React from "react";
import { CheckCircle, CheckCircle2, Quote } from "lucide-react";
import GlassCard from "@/sections/GlassCard";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import Script from "next/script";


export const metadata = {
  title: "Fintech Software & Solutions | AOPAY",
  description:
    "Power your fintech platform with AoPay's complete banking and payment infrastructure. APIs, white-label solutions, compliance, banking license for fintech startups and enterprises.",
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
    canonical: "https://aopay.in/fintech-solutions",
  },
  openGraph: {
    title: "Fintech Solutions | Complete Banking & Payment Stack | AoPay",
    description:
      "Power fintech platforms with complete banking APIs and payment infrastructure.",
    url: "https://aopay.in/fintech-solutions",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/fintech-solutions-og.jpg",
        width: 800,
        height: 600,
        alt: "AOPAY Open Graph Image",
      },
    ],
    twitter: {
      card: "summary_large_image",
    },
    type: "website",
  },
};


const FinTech = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "AOPAY Technology Pvt. Ltd.",
      url: "https://aopay.in/fintech-solutions",
      telephone: "011-42151216",
      description:
        "Cheapest banking solutions for fintech platforms in India providing secure transactions, instant settlements, automated workflows, and virtual account management.",
      serviceType: [
        "White Label FinTech banking solutions",
        "API banking and Banking-as-a-Service for FinTech companies",
        "Banking solutions for FinTech platforms Near Me",
        "Best Banking Solution Provider for Fintech Companies in India",
        "Embedded banking and payment solutions for digital finance apps",
        "Regulatory-compliant banking infrastructure for FinTech startups",
        "Account management and KYC automation for FinTech platforms",
        "Affordable banking solutions for FinTech startups",
        "Core banking and payment solutions for financial technology companies in India",
        "Digital wallets and card issuing for FinTech apps Provider",
        "Digital banking solutions for FinTech companies",
        "Automated KYC and account opening for FinTech platforms",
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
      "Fintech APIs & Infrastructure for Neobanks, Digital Lenders & Payment Apps",
    subTitle:
      "Build next-generation financial products with developer-friendly APIs for payments, lending, and account management. Access banking infrastructure, compliance tools, and scalable payment rails for fintech innovation.",
    imgSrc: "/assets/FintechSolutions/fintech platform.png",
    alt: "Multi-channel payment gateway API supporting credit cards, debit cards and digital wallets.",
    btn1: "Start Now",
    btn1Link: "/contact-us",

    video: false,
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Enterprise Source Code License for Credit Cooperatives",
      heading2Para:
        "Get complete control over your cooperative banking platform with our comprehensive source code solution designed specifically for credit cooperative societies, employee credit unions, and multi-state cooperative organizations.",
      points: [
        {
          imgSrc:
            "/assets/CreditCooperativeSociety/Enterprise Source Code License for Credit Cooperatives/Full Source Code Access.png",
          heading3: "Full Source Code Access",
          heading3Para:
            "Complete freedom to modify and customize the credit cooperative management system at your own pace. Adapt the platform to meet specific regulatory requirements and operational needs of your cooperative society.",
        },
        {
          imgSrc:
            "/assets/CreditCooperativeSociety/Enterprise Source Code License for Credit Cooperatives/Warranty Protection.png",
          heading3: "Warranty Protection",
          heading3Para:
            "Comprehensive coverage for bug fixes and security updates ensuring your cooperative banking operations remain secure and compliant with financial regulations.",
        },
        {
          imgSrc:
            "/assets/CreditCooperativeSociety/Enterprise Source Code License for Credit Cooperatives/Comprehensive Support.png",
          heading3: "Comprehensive Support",
          heading3Para:
            "Empower your IT team with in-depth training, technical guidance, and ongoing support for seamless implementation of cooperative banking features.",
        },
        {
          imgSrc:
            "/assets/CreditCooperativeSociety/Enterprise Source Code License for Credit Cooperatives/Meet Your Deadlines.png",
          heading3: "Meet Your Deadlines",
          heading3Para:
            "Work with your internal development team to meet project deadlines, bypassing vendor delays and maintaining full control over your cooperative's digital transformation.",
        },
        {
          imgSrc:
            "/assets/CreditCooperativeSociety/Enterprise Source Code License for Credit Cooperatives/Minimized Development Risks.png",
          heading3: "Minimized Development Risks",
          heading3Para:
            "Avoid the bottlenecks and risks of building cooperative banking software from scratch. Leverage our proven platform with built-in compliance features.",
        },
        {
          imgSrc:
            "/assets/CreditCooperativeSociety/Enterprise Source Code License for Credit Cooperatives/Consistent Updates.png",
          heading3: "Consistent Updates",
          heading3Para:
            "Access regular platform updates and enhancements to keep your credit cooperative society software at peak performance and regulatory compliance.",
        },
      ],
      btn1: "More Info on Source Code",
      btnLink: "/contact-us",
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
      heading2: "Scale from Startup to Enterprise",

      points: [
        {
          heading3: "For Startups",
          heading3Para:
            "Launch your fintech MVP quickly with pre-built Payment Gateway APIs and UPI integration. Onboard customers securely using Aadhaar and PAN verification APIs.",
        },
        {
          heading3: "For Growing Businesses",
          heading3Para:
            "Expand operations with Virtual Accounts for automated reconciliation, E-NACH API for recurring payments, and Payout APIs for vendor disbursements.",
        },
        {
          heading3: "For Enterprises",
          heading3Para:
            "Handle high transaction volumes with our scalable infrastructure. Deploy Core Banking Software, Treasury Management Systems, and Connected Banking solutions for complete financial operations.",
        },
     
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question:
          "What types of credit cooperative societies can use this software?",
        answer:
          "Our platform supports Urban Credit Societies, Employee/Industrial Credit Societies, Agricultural/Rural Credit Societies, Multi-State Credit Cooperative Societies, and Housing Societies with Credit Wings.",
      },
      {
        question: "How secure are the payment processing and member data?",
        answer:
          "Our software includes advanced security features, AML compliance tools, comprehensive activity logging, and encrypted data transmission to ensure the highest level of security for cooperative financial operations.",
      },
      {
        question: "Can the software handle bulk payouts and payment links?",
        answer:
          "Yes, our platform provides secure APIs for single payouts, bulk payouts, and payment link generation to bank accounts and digital wallets, making it ideal for cooperative loan disbursements and collections.",
      },
      {
        question: "Is there a mobile application for cooperative members?",
        answer:
          "Yes, we provide a customizable white-label mobile banking application that includes all essential functionalities for modern cooperative banking services.",
      },
      {
        question: "What deployment options are available?",
        answer:
          "We offer cloud-based subscription deployment for quick implementation and source code licensing for organizations requiring complete control and customization capabilities.",
      },
      {
        question:
          "How quickly can we implement the credit cooperative software?",
        answer:
          "Implementation time varies based on customization requirements. Cloud deployment can be completed in weeks, while source code implementations typically take 2-6 months depending on specific cooperative needs.",
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
      heading2: "Payment Solutions for Every Fintech Need",

      points: [
        {
          heading3: "Payment Gateway",
          heading3Para:
            "Enable seamless transactions across multiple channels with PCI-DSS compliant infrastructure. Support credit cards, debit cards, net banking, and digital wallets.",
        },
        {
          heading3: "UPI & QR Payment Collection",
          heading3Para:
            "Integrate India's most popular payment method. Generate dynamic QR codes and accept instant UPI payments with real-time settlement.",
        },
        {
          heading3: "AEPS & Money Transfer",
          heading3Para:
            "Enable Aadhaar-enabled banking services and domestic money transfers. Perfect for financial inclusion initiatives and rural banking.",
        },
        {
          heading3: "Virtual Accounts",
          heading3Para:
            "Create unique virtual accounts for each customer. Automate payment reconciliation and streamline B2B collections.",
        },
      ],
    },
  ];

  const content = [
    {
      heading2: "Banking & Financial Software Solutions",
      heading2Para:
        "Beyond APIs, AOPAY offers complete software platforms for financial institutions:",
      points: [
        {
          heading3: "Core Banking Software",
          heading3Para:
            "Manage deposits, loans, and customer accounts with cloud-native CBS designed for NBFCs and small banks.",
        },

        {
          heading3: "Loan Management System",
          heading3Para:
            "Automate loan origination, disbursement, EMI collection, and portfolio management with integrated APIs.",
        },
        {
          heading3: "NBFC & Microfinance Software",
          heading3Para:
            "Purpose-built for RBI-registered NBFCs, credit cooperatives, and microfinance institutions.",
       
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
      {/* <H2H3WithPoints content={contentWithHeadingsAndPoints} /> */}

      <section className="py-16 px-6 max-w-6xl mx-auto">
        {/* Main H2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Maximize Revenue with Intelligent Payment Solutions
        </h2>
        <p>
          Accept digital payments from customers across India in minutes. AOPAY
          platform supports UPI payments, QR codes, AEPS, IMPS, NEFT, RTGS, and
          all major payment methods. Designed to increase conversion at every
          touchpoint—from optimized checkout flows to frictionless one-click
          payments and RBI-compliant fraud prevention.
        </p>
      </section>

      <H2DescH3Desc contentWithDescription={material} />
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-100">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Automated Fraud Prevention with Machine Learning
            </h2>
            <p className="mt-2 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Fraud detection is built into every AOPAY account. Our AI-powered
              system analyzes transaction patterns in real-time, trained on
              millions of Indian payment data points. On average, businesses
              reduce fraud by 32% while maintaining seamless checkout
              experiences.
            </p>
          </div>

          {/* Content Card */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 px-6 py-7 md:px-8 md:py-9">
              <ul className="space-y-4 text-left text-gray-700 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                  </span>
                  <span>Device fingerprinting and IP geolocation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                  </span>
                  <span>Custom rule engine with allowlists and blocklists</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                  </span>
                  <span>Dynamic 3D Secure authentication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                  </span>
                  <span>Real-time risk scoring and alerts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-100">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-10 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              KYC &amp; Verification Solution for Compliance
            </h2>
            <p className="mt-1 text-gray-600 text-base md:text-lg leading-relaxed">
              Meet RBI and SEBI compliance requirements effortlessly. AOPAY
              verification solutions provide instant identity validation for
              customers and businesses.
            </p>
          </div>

          {/* Card + List */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 px-6 py-7 md:px-8 md:py-9">
              <ul className="space-y-4 text-left text-gray-700 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                  </span>
                  <span>
                    Aadhaar Verification – eKYC and biometric authentication
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                  </span>
                  <span>
                    PAN Verification – Instant PAN validation with income tax
                    database
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                  </span>
                  <span>
                    Bank Account Verification – Penny drop and account holder
                    name verification
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                  </span>
                  <span>
                    GST Verification – Validate business credentials instantly
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                  </span>
                  <span>CIBIL – Credit score checks for lending decisions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContentWithDescriptivePoints content={content} />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <section className="py-16 px-4 bg-gradient-to-b from-white via-gray-50 to-gray-100">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-10 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Why Leading Fintech Companies Choose AOPAY
            </h2>
            <span className="mt-2 inline-block h-1 w-20 rounded-full bg-green-600" />
          </div>

          {/* List Card */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 px-6 py-7 md:px-8 md:py-9">
              <ul className="space-y-4 text-left text-gray-700 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                  </span>
                  <span>
                    99.9% Uptime – Enterprise-grade infrastructure with
                    redundancy
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                  </span>
                  <span>
                    RBI Compliant – Meet all regulatory requirements
                    effortlessly
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                  </span>
                  <span>
                    24/7 Support – Dedicated technical support for integration
                    and operations
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                  </span>
                  <span>
                    Transparent Pricing – No hidden charges or setup fees
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <GetStarted
        heading="Ready to Transform Your Fintech Operations?"
        subHeading="Explore AOPAY's complete suite of banking & financial solutions. Create an account instantly or contact our team to custom pricing for your business needs."
        btn1="Contact Sales"
        btn2="Request Demo"
      />
    </>
  );
};

export default FinTech;
