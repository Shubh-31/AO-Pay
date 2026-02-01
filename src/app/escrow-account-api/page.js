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
import { Terminal, Key, Server, Rocket } from "lucide-react";
import { HeadingSubheadingSection } from "@/sections/HeadingSubheadingSection";
import Image from "next/image";
import AutoSlidingSecondaryFeatures from "@/sections/Escrow/AutoSlidingCards";
import Script from "next/script";

export const metadata = {
  title: "ESCROW Account Solutions for Secure Fund Holding | AOPAY",
  description:
    "Manage escrow accounts securely with AoPay's API. Enable trust-based transactions for real estate, marketplace, lending with automated fund release and dispute management.",
  keywords: [
    "virtual account api India",
    "virtual bank account",
    "payment reconciliation",
    "automated settlement",
    "virtual account API",
    "AOPay virtual account",
    "digital banking solutions",
    "Online Virtual Account Creation",
    "Online Digital Account Creation",
    "Online Current Account Creation",
    "Online Saving Account Creation",
    "Online Demat Account Creation",
    "Online Salary Account Creation",
    "Online Digital Current Account Creation for Business",
    "Online Digital Saving Account Creation",
    "Online Digital Demat Account Creation",
    "Online Digital Salary Account Creation for Business",
    "Secure Digital Current Account Creation",
    "Secure Salary Account Creation",
    "Virtual Account for Instant Transactions",
    "Virtual Account for Instant Payments",
    "Current Account for Instant Transactions",
    "Current Account for Instant Payments",
    "Salary Account for Instant Transactions",
    "Digital Account for Instant Transactions",
    "Digital Account for Instant Online Payment",
    "Corporate Account for Instant Transactions",
    "Corporate Account for Instant Payments",
    "Online Wallet Creation",
    "Online Wallet Transactions",
    "Online Wallet Payments",
    "Digital Account Solutions",
    "Virtual Banking",
    "Virtual Account Solutions",
    "Secure Payment Account",
    "Account Management",
    "Online Account API",
    "Virtual Bank API",
  ],

  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/escrow-account-api",
  },
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "ESCROW API | Secure Escrow Account Management | AoPay",
    description:
      "Manage escrow accounts with automated fund release and dispute management.",
    url: "https://aopay.in/escrow-account-api",
    siteName: "AoPay",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/escrow-og.jpg",
        width: 1200,
        height: 630,
        alt: "AOPay Virtual Account",
      },
    ],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AOPAY Technology Pvt. Ltd.",
  url: "https://aopay.in/escrow-account-api",
  telephone: "011-42151216",
  description:
    "Cheapest Escrow Account API in India for secure transactions, automated settlements, transparent fund handling, and dependable 24/7 assistance.",
  serviceType: [
    "White Label ESCROW Account API Solution",
    "Digital ESCROW API Provider Solution",
    "ESCROW Account API Provider Near Me",
    "Best ESCROW Account API Solution Provider in India",
    "ESCROW API for E-commerce Platforms",
    "ESCROW Account API for NBFCs",
    "Dispute Handling ESCROW Account",
    "Affordable ESCROW Account API for Small Businesses",
    "Real-time ESCROW Account Balance & Status Check API in India",
    "Auto ESCROW Account Management API Provider",
    "Multi-party ESCROW API",
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



const Escrow = () => {
  const headerContent = {
    title: "ESCROW Account API for Safe & Regulated Fund Management",
    subTitle:
      "Secure Payment Processing Solution for Fintech Platforms | Single Payouts, Bulk Payments & Payment Links with Enterprise-Grade Security.",
    imgSrc: "/assets/Escrow/final.png",
    alt: "Multi-channel payment gateway API supporting credit cards, debit cards and digital wallets.",
    btn1: "View Integration Guide",
    btn1Link: "/contact-us",
    video: false,
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2:
        "AOPAY Enterprise‑Grade Escrow API Solution for Business Platforms",
      heading2Para:
        "Transform your platform with our comprehensive API & Software solution designed specifically for P2P lending platforms, BNPL services, digital marketplaces, and investment platforms requiring secure multi-party payment processing.",
      points: [
        {
          heading3: "Complete Source Code Control",
          heading3Para:
            "Gain full access to modify and customize the solution at your own pace. Perfect for fintech companies requiring specific compliance features, custom workflows, or unique business logic for escrow management.",
          imgSrc:
            "/assets/Escrow/Enterprise ESCROW API Solution for Fintech Platforms/Complete Source Code Control.png",
        },
        {
          heading3: "Enterprise-Grade Security & Warranty",
          heading3Para:
            "Comprehensive protection with regular security updates, bug fixes, and compliance maintenance. Ensure your escrow operations meet the highest financial industry standards and regulatory requirements.",
          imgSrc:
            "/assets/Escrow/Enterprise ESCROW API Solution for Fintech Platforms/Enterprise-Grade Security & Warranty.png",
        },
        {
          heading3: "Dedicated Technical Support",
          heading3Para:
            "Empower your development team with specialized training, API integration guidance, and ongoing technical support from our fintech and payments experts.",
          imgSrc:
            "/assets/Escrow/Enterprise ESCROW API Solution for Fintech Platforms/Dedicated Technical Support.png",
        },
        {
          heading3: "Accelerated Time-to-Market",
          heading3Para:
            "Launch your escrow-enabled platform faster by working with proven, battle-tested code. Avoid the complexity and time investment of building secure payment infrastructure from scratch.",
          imgSrc:
            "/assets/Escrow/Enterprise ESCROW API Solution for Fintech Platforms/Accelerated Time-to-Market.png",
        },
        {
          heading3: "Risk-Free Development",
          heading3Para:
            "Minimize development risks and compliance challenges with our pre-built, thoroughly tested ESCROW Solution that handles complex multi-party payment scenarios and regulatory requirements.",
          imgSrc:
            "/assets/Escrow/Enterprise ESCROW API Solution for Fintech Platforms/Risk-Free Development.png",
        },
        {
          heading3: "Continuous Platform Evolution",
          heading3Para:
            "Access regular updates, new payment methods, enhanced security features, and expanded compliance capabilities to keep your escrow services competitive.",
          imgSrc:
            "/assets/Escrow/Enterprise ESCROW API Solution for Fintech Platforms/Continuous Platform Evolution.png",
        },
      ],
    },
  ];

  const solutions = [
    {
      title: "Remote Onboarding & KYC",

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
      heading2: "Complete Fintech Platform Solutions",
      heading2Para:
        "Create powerful QR Code Payment API experiences with dynamic QR generation, Bharat QR compliance, and contactless payment solutions.",
      points: [
        {
          heading3: "Enterprise Source Code License",
          heading3Para:
            "Gain complete control over your escrow infrastructure with full source code access, unlimited customization capabilities, and no recurring subscription fees.",
          imgSrc:
            "/assets/Escrow/Complete Fintech Platform Solutions/Enterprise Source Code License.png",
        },
        {
          heading3: "API-First Architecture",
          heading3Para:
            "Access 470+ REST API endpoints designed for seamless integration with existing fintech platforms and third-party financial services.",
          imgSrc:
            "/assets/Escrow/Complete Fintech Platform Solutions/API-First Architecture.png",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is an ESCROW API and how does it work?",
        answer:
          "An ESCROW API enables secure multi-party payment processing by holding funds in a secure account until predetermined conditions are met. Our API handles fund collection, secure storage, and automated release based on your business rules.",
      },
      {
        question: "Which industries can benefit from ESCROW API integration?",
        answer:
          "Our ESCROW API serves P2P lending platforms, BNPL services, digital marketplaces, freelance platforms, real estate companies, investment platforms, and any fintech business requiring secure multi-party payment processing.",
      },
      {
        question: "How secure is the ESCROW API for financial transactions?",
        answer:
          "Our ESCROW API features bank-grade security with PCI DSS compliance, end-to-end encryption, multi-factor authentication, and comprehensive fraud detection. All funds are held in segregated accounts with regulatory oversight.",
      },
      {
        question: "Can I process both single payouts and bulk payments?",
        answer:
          "Yes, our API supports single payout processing for individual transactions, bulk payment processing for high-volume operations, and dynamic payment link generation for flexible collection scenarios.",
      },
      {
        question:
          "What compliance features are included in the ESCROW software?",
        answer:
          "Our platform includes automated KYC/AML processing, suspicious transaction monitoring, regulatory reporting tools, audit trail management, and compliance case resolution workflows to meet financial industry standards.",
      },
      {
        question:
          "How quickly can I integrate the ESCROW API into my platform?",
        answer:
          "Integration typically takes 2-4 weeks depending on complexity. We provide comprehensive API documentation, sandbox testing environment, and dedicated technical support to accelerate your implementation timeline.",
      },
    ],
  };

  const Secondaryfeatures = {
    heading2:
      "Monetize Your Platform With AOPAY Advanced Fee Management Solutions",

    blocks: [
      {
        imgSrc:
          "/assets/Escrow/Monetize Your Platform with Advanced Fee Management/Flexible Contract & Partnership Management.png",
        heading3: "Flexible Contract & Partnership Management",
        items: [
          "Configure partner terms and revenue-sharing agreements",
          "Create customer contracts with customizable fee structures",
          "Multiple subscription tiers and pricing models",
          "White-label branding options for enterprise clients",
        ],
      },
      {
        imgSrc:
          "/assets/Escrow/Monetize Your Platform with Advanced Fee Management/Dynamic Fee Structure & Transaction Limits.png",
        heading3: "Dynamic Fee Structure & Transaction Limits",
        items: [
          "Customizable fees: percentage, flat rate, or hybrid models",
          "Configurable fee allocation between parties",
          "Transaction limits per period, amount, or volume",
          "Dynamic pricing based on transaction type and user tier",
          "Multi-currency fee processing and conversion",
        ],
      },
      {
        imgSrc:
          "/assets/Escrow/Monetize Your Platform with Advanced Fee Management/Advanced Reconciliation & Settlement.png",
        heading3: "Advanced Reconciliation & Settlement",
        items: [
          "Automated financial reconciliation across all escrow accounts",
          "Real-time liability tracking for customers and partners",
          "Automated detection of transaction discrepancies",
          "Streamlined settlement processing and reporting",
          "Multi-party split payment capabilities",
        ],
      },
      {
        imgSrc:
          "/assets/Escrow/Monetize Your Platform with Advanced Fee Management/Flexible Contract & Partnership Management.png",
        heading3: "Cash Flow & Treasury Management",
        items: [
          "Comprehensive cash position monitoring",
          "Automated treasury operations and fund optimization",
          "Multi-bank account management and reconciliation",
          "Liquidity forecasting and cash flow analysis",
        ],
      },
    ],
  };

  const material = [
    {
      heading2: "Escrow API Use Cases Across Business Verticals",

      points: [
        {
          heading3: "P2P Lending Platforms",
          heading3Para:
            "Secure fund management for peer-to-peer lending with automated disbursement and repayment processing.",
          imgSrc:
            "/assets/Escrow/ESCROW API Use Cases Across Fintech Industries/P2P Lending Platforms.png",
        },
        {
          heading3: "BNPL Services",
          heading3Para:
            "Buy Now Pay Later escrow management with merchant payouts and customer installment processing.",
          imgSrc:
            "/assets/Escrow/ESCROW API Use Cases Across Fintech Industries/BNPL Services.png",
        },
        {
          heading3: "Digital Marketplaces",
          heading3Para:
            "Multi-vendor payment processing with automatic seller payouts upon order completion.",
          imgSrc:
            "/assets/Escrow/ESCROW API Use Cases Across Fintech Industries/Digital Marketplaces.png",
        },
        {
          heading3: "Freelance Platforms",
          heading3Para:
            "Project-based escrow services with milestone payments and dispute resolution.",
          imgSrc:
            "/assets/Escrow/ESCROW API Use Cases Across Fintech Industries/Freelance Platforms.png",
        },
        {
          heading3: "Real Estate Transactions",
          heading3Para:
            "Property purchase escrow management with conditional fund release capabilities.",
          imgSrc:
            "/assets/Escrow/ESCROW API Use Cases Across Fintech Industries/Real Estate Transactions.png",
        },
        {
          heading3: "Investment Platforms",
          heading3Para:
            "Secure handling of investment funds with automated distribution and withdrawal processing.",
          imgSrc:
            "/assets/Escrow/ESCROW API Use Cases Across Fintech Industries/Investment Platforms.png",
        },
      ],
    },
  ];

  const CoopFeatures = {
    heading2: "AOPAY Escrow API: Comprehensive Features for Business Platforms",
    heading2Para:
      "Launch sophisticated escrow services with our feature-rich API designed for exceptional security, compliance, and user experience across all fintech verticals.",
    sections: [
      {
        imgSrc:
          "/assets/Escrow/Comprehensive ESCROW API Features for Modern Fintech/Automated User Onboarding & KYC Integration.png",
        h3: "Automated User Onboarding & KYC Integration",
        h4: "Streamlined Customer Verification",
        items: [
          "Self-registration API for platform users and merchants",
          "Flexible document upload endpoints for identity verification",
          "Automated KYC/KYB processing via leading compliance vendors",
          "Real-time verification status updates",
          "Manual review workflows through admin interface",
          "Risk scoring and enhanced due diligence capabilities",
        ],
      },
      {
        imgSrc:
          "/assets/Escrow/Comprehensive ESCROW API Features for Modern Fintech/Compliance & Anti-Fraud Protection.png",
        h3: "Compliance & Anti-Fraud Protection",
        h4: "Advanced Security & AML Features",
        items: [
          "Real-time suspicious transaction detection",
          "Multi-factor authentication for transaction approval",
          "Automated AML compliance reporting",
          "Income verification and proof-of-funds collection",
          "Account freeze/unfreeze capabilities for compliance",
          "Complete audit trail and case management",
          "PCI DSS compliant payment processing",
        ],
      },
      {
        imgSrc:
          "/assets/Escrow/Comprehensive ESCROW API Features for Modern Fintech/Integrated CRM & Customer Management.png",
        h3: "Integrated CRM & Customer Management",
        h4: "Complete Customer Lifecycle Management",
        items: [
          "Unified customer profiles with transaction history",
          "Multi-channel communication tools",
          "In-platform messaging and notification system",
          "Customer notes and interaction tracking",
          "Automated customer journey workflows",
          "Support ticket integration and resolution tracking",
        ],
      },
      {
        imgSrc:
          "/assets/Escrow/Comprehensive ESCROW API Features for Modern Fintech/Comprehensive Activity & Audit Logging.png",
        h3: "Comprehensive Activity & Audit Logging",
        h4: "Enterprise-Grade Monitoring & Reporting",
        items: [
          "Complete API activity logs with detailed metadata",
          "User session tracking and authentication logs",
          "Transaction lifecycle monitoring",
          "Real-time system health and performance metrics",
          "Compliance reporting and audit preparation tools",
          "Custom webhook notifications for critical events",
        ],
      },
    ],
  };

  const content = [
    {
      heading2: "ESCROW Solutions for Every Fintech Vertical",
      heading2Para:
        "Whether you're building the next generation P2P lending platform, BNPL service, or digital marketplace, our ESCROW API provides the secure foundation you need.",
      points: [
        {
          heading3: "P2P Lending & NBFC-P2P",
          heading3Para:
            "Build compliant peer-to-peer lending platforms with automated escrow management, regulatory reporting, and risk assessment tools.",
          heading3Btn: "View P2P Features",
          heading3BtnLink: "/contact-us",
          imgSrc:
            "/assets/Escrow/ESCROW Solutions for Every Fintech Vertical/P2P Lending & NBFC-P2P.png",
        },

        {
          heading3: "BNPL & Digital Credit",
          heading3Para:
            "Create seamless Buy Now Pay Later experiences with instant merchant payouts and flexible customer payment schedules.",
          heading3Btn: "Explore BNPL Solutions",
          heading3BtnLink: "/contact-us",
          imgSrc:
            "/assets/Escrow/ESCROW Solutions for Every Fintech Vertical/BNPL & Digital Credit.png",
        },
        {
          heading3: "Investment & WealthTech",
          heading3Para:
            "Secure investment fund management with automated distributions, withdrawal processing, and comprehensive reporting for wealth management platforms.",
          heading3Btn: "See Investment Features",
          heading3BtnLink: "/contact-us",
          imgSrc:
            "/assets/Escrow/ESCROW Solutions for Every Fintech Vertical/Investment & WealthTech.png",
        },
      ],
    },
  ];

  const HeadingSubheadings = [
    {
      heading2:
        "Transform Your Digital Platform With AOPAY’s Secure Escrow API",

      points: [
        {
          heading3: "Build Customer Trust",
          heading3Para:
            "Increase platform adoption and user confidence with bank-grade escrow security.",
          imgSrc:
            "/assets/Escrow/Transform Your Fintech Platform with Secure Escrow Services/Build Customer Trust.png",
        },

        {
          heading3: "Accelerate Revenue Growth",
          heading3Para:
            "Monetize every transaction with flexible fee structures. Increase customer lifetime value through improved payment success rates and reduced operational costs.",
          imgSrc:
            "/assets/Escrow/Transform Your Fintech Platform with Secure Escrow Services/Accelerate Revenue Growth.png",
        },
        {
          heading3: "Ensure Regulatory Compliance",
          heading3Para:
            "Meet financial regulations with built-in AML, KYC, and compliance reporting tools. Reduce regulatory risk while expanding to new markets and jurisdictions.",
          imgSrc:
            "/assets/Escrow/Transform Your Fintech Platform with Secure Escrow Services/Ensure Regulatory Compliance.png",
        },
        {
          heading3: "Scale Operations Efficiently",
          heading3Para:
            "Handle millions of transactions with automated processing, real-time monitoring, and intelligent routing. Reduce operational overhead while improving service quality.",
          imgSrc:
            "/assets/Escrow/Transform Your Fintech Platform with Secure Escrow Services/Scale Operations Efficiently.png",
        },
      ],
    },
  ];

  return (
    <>
      <Script
        id="aopay-fd-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PaymentHead headerSection={headerContent} />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <section className="py-20 px-6 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto">
          {/* H2 */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            {CoopFeatures.heading2}
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600 max-w-3xl mx-auto">
            {CoopFeatures.heading2Para}
          </p>

          {/* Timeline */}
          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gray-200 h-full"></div>

            <div className="space-y-24">
              {CoopFeatures.sections.map((section, i) => (
                <div
                  key={i}
                  className={`relative md:flex md:items-center ${
                    i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Timeline marker */}
                  <div className="absolute md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-green-600 border-4 border-white shadow-md z-10"></div>

                  {/* Image */}
                  <div
                    className="md:w-1/2 flex justify-center mb-6 md:mb-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={section.imgSrc}
                      alt={section.h3}
                      className="w-full max-w-md rounded-2xl"
                    />
                  </div>

                  {/* Card Content */}
                  <div
                    className="md:w-1/2 bg-white border border-gray-200 shadow-sm rounded-2xl p-6 md:mx-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-gray-900">
                      {section.h3}
                    </h3>
                    <h4 className="mt-1 text-lg font-medium text-green-700">
                      {section.h4}
                    </h4>
                    <ul className="mt-4 space-y-2">
                      {section.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <H2DescH3Desc contentWithDescription={material} />

      <AutoSlidingSecondaryFeatures />
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          {/* H2 */}
          <h2 className="text-3xl font-bold text-gray-900">
            Simple 3‑Step Escrow API Integration Process for Developers &
            Businesses
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get your escrow services up and running quickly with our
            developer-friendly API and comprehensive documentation.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Key className="w-8 h-8 text-green-600" />,
              title: "1. API Key Setup",
              desc: "Register for your free developer account and receive your API keys within minutes.",
            },
            {
              icon: <Server className="w-8 h-8 text-green-600" />,
              title: "2. Sandbox Testing",
              desc: "Test all escrow functions in our comprehensive sandbox environment.",
            },
            {
              icon: <Rocket className="w-8 h-8 text-green-600" />,
              title: "3. Integration & Go-Live",
              desc: "Deploy to production with our support team guidance and monitoring.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-center hover:shadow-md transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Code Example */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Escrow Account Creation via API: Sample Code for Developers
          </h4>
          <div className="bg-black text-gray-100 rounded-xl p-6 font-mono text-sm text-left shadow-lg overflow-x-auto">
            <code>
              POST /api/v1/escrow/create
              <br />
              {`{
  "amount": 10000,
  "currency": "USD",
  "payer_id": "user_123",
  "payee_id": "merchant_456",
  "release_conditions": ["delivery_confirmed"],
  "description": "E-commerce purchase escrow"
}`}
            </code>
          </div>
        </div>

        {/* Buttons */}
      </section>
      {/* <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} /> */}
      {/* <ContentWithDescriptivePoints content={content} /> */}
      <HeadingSubheadingSection HeadingSubheadings={HeadingSubheadings} />

      <FAQSection faqContent={faqContent} />
      <section className="py-20 px-6 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          {/* H2 */}
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Connect With AOPAY’s Escrow Specialists
          </h2>

          {/* Paragraph */}
          <p
            className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Discover how AOPAY ESCROW Solution can transform your digital
            platform with secure, scalable payment processing capabilities
            tailored to your specific industry needs.
          </p>

          {/* CTA Buttons */}
          <div
            className="mt-6 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="/request-demo"
              className="px-6 py-3 rounded-lg bg-black text-white font-medium shadow-lg hover:bg-green-700 transition"
            >
              Schedule Live Demo
            </a>
            <a
              href="/contact-sales"
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium shadow-sm hover:bg-gray-100 transition"
            >
              Speak with Expert
            </a>
          </div>
          {/* H3 */}
        </div>
      </section>
    </>
  );
};

export default Escrow;
