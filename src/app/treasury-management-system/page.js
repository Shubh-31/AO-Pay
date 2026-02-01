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
import Script from "next/script";
import Image from "next/image";
import TreasuryFeaturesTabs from "@/sections/TreasuryManagementSystem/TreasuryFeaturesTabs";

export const metadata = {
  title: "Treasury Management Software for Liquidity & Risk | AOPAY",
  description:
    "Send money instantly across India with AOPay Money Transfer. Secure bank-to-bank transfers, mobile wallet support, competitive rates. Perfect for businesses and individuals. Transfer now",
  keywords:
    "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/treasury-management-system",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "Treasury Management | AOPay",
    description:
      "Explore AOPay's Treasury Management solution. Perfect for Corporate, Financial Institutions. Streamline operations with our comprehensive financial management software.",
    url: "https://aopay.in/treasury-management-system",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "hhtps://aopay.in/images/treasury-management-system.jpgg",
        width: 1200,
        height: 630,
        alt: "AOPay Money Transfer Banner",
      },
    ],
    twitter: {
      card: "summary_large_image",
      title: "Treasury Management | AOPay",
      description:
        "Co-lending by AOPay - Designed for Banks, Fintech, NBFCs. Comprehensive financial management & payment solutions.",
      images: ["https://aopay.in/images/treasury-management-system.jpg"],
    },
  },
};


const TreasuryManagementSystem = () => {

   const schema = {
     "@context": "https://schema.org",
     "@type": "LocalBusiness",
     name: "AOPAY Technology Pvt. Ltd.",
     url: "https://aopay.in/treasury-management-system",
     telephone: "011-42151216",
     description:
       "Cheapest Treasury Management Software in India providing secure, feature-rich solutions for cash flow, risk, liquidity, and financial operations management.",
     serviceType: [
       "White Label Treasury Management Software Solution",
       "Cloud based Treasury Management Software Solution",
       "Treasury Management Software Provider Near Me",
       "Best Treasury Management Software Solution Provider in India",
       "Treasury Management System for cash, liquidity & risk management",
       "Corporate Treasury Management Software for investment tracking & analytics",
       "Best Treasury Management Software Solution for Fintechs & NBFCs",
       "Affordable Treasury Management Software for Small Banks",
       "Integrate multiple bank operations with Treasury Management Software in India",
       "Auto Treasury Management Software Provider for corporate finance",
       "Treasury investment & fund management software solution",
       "TMS for NBFCs & financial institutions",
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
      "Treasury Management Software Solution for Liquidity, Investment & Risk Control",
    subTitle:
      "Enterprise-Grade Cash Management & Payment Automation Solution for Corporates, Banks & Financial Institutions | Single Payouts, Bulk Payments & Advanced Treasury Operations.",
    imgSrc:
      "/assets/TreasuryManagement/Comprehensive Treasury Management Features for Enterprise Operations/tresuery management heading graphic.png",
    alt: "Multi-channel payment gateway API supporting credit cards, debit cards and digital wallets.",
    btn1: "Request Demo",
    btn1Link: "/contact-us",
    video: false,
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Treasury Management Software with Source Code License",
      heading2Para:
        "Gain complete control over your treasury operations with our comprehensive source code solution designed specifically for large corporates, multinational enterprises, banks, and financial institutions requiring advanced cash management capabilities.",
      points: [
        {
          imgSrc:
            "/assets/TreasuryManagement/Enterprise Treasury Management Source Code License/Complete Source Code Ownership.png",
          heading3: "Complete Source Code Ownership",
          heading3Para:
            "Full access to modify and customize the treasury management platform to meet your specific enterprise requirements, regulatory compliance needs, and complex multi-entity cash management structures.",
        },
        {
          imgSrc:
            "/assets/TreasuryManagement/Enterprise Treasury Management Source Code License/Enterprise Warranty & Support.png",
          heading3: "Enterprise Warranty & Support",
          heading3Para:
            "Comprehensive protection with regular security updates, compliance enhancements, and dedicated support for mission-critical treasury operations across global locations.",
        },
        {
          imgSrc:
            "/assets/TreasuryManagement/Enterprise Treasury Management Source Code License/Dedicated Implementation Team.png",
          heading3: "Dedicated Implementation Team",
          heading3Para:
            "Expert guidance from treasury management specialists, including comprehensive training for your finance team, CFOs, and treasury controllers on platform optimization.",
        },
        {
          imgSrc:
            "/assets/TreasuryManagement/Enterprise Treasury Management Source Code License/Accelerated Deployment Timeline.png",
          heading3: "Accelerated Deployment Timeline",
          heading3Para:
            "Meet critical implementation deadlines by working with your internal IT and finance teams. Avoid vendor dependencies while maintaining full control over treasury transformation initiatives.",
        },
        {
          imgSrc:
            "/assets/TreasuryManagement/Enterprise Treasury Management Source Code License/Minimized Implementation Riskmanager.png",
          heading3: "Minimized Implementation Risk",
          heading3Para:
            "Eliminate the complexity and risks of building enterprise treasury management from scratch. Leverage proven, bank-grade infrastructure with built-in compliance frameworks.",
        },
        {
          imgSrc:
            "/assets/TreasuryManagement/Enterprise Treasury Management Source Code License/Continuous Platform Enhancement.png",
          heading3: "Continuous Platform Enhancement",
          heading3Para:
            "Access regular updates including new payment rails, enhanced reporting capabilities, and expanded regulatory compliance features to maintain competitive treasury operations.",
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
      heading2: "Flexible Treasury Management System Deployment Options",

      points: [
        {
          imgSrc:
            "/assets/TreasuryManagement/Flexible Treasury Management Deployment Options/Enterprise Source Code License.png",
          heading3: "Enterprise Source Code License",
          heading3Para:
            "Complete control over your treasury infrastructure with full source code access, unlimited customization for complex enterprise requirements, and no recurring subscription fees.",
        },
        {
          imgSrc:
            "/assets/TreasuryManagement/Flexible Treasury Management Deployment Options/API-First Integration Architecture.png",
          heading3: "API-First Integration Architecture",
          heading3Para:
            "Seamless integration with existing ERP, banking systems, and financial platforms through 470+ REST APIs designed for enterprise-scale treasury operations.",
        },
        {
          imgSrc:
            "/assets/TreasuryManagement/Flexible Treasury Management Deployment Options/Enterprise Cloud & On-Premise Options.png",
          heading3: "Enterprise Cloud & On-Premise Options",
          heading3Para:
            "Deploy on secure enterprise cloud infrastructure or on-premise environments with guaranteed 99.9% uptime and bank-grade security standards.",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question:
          "What is Treasury Management Software and how does it benefit large enterprises?",
        answer:
          "Treasury Management Software is a comprehensive platform that automates and optimizes cash flow management, payment processing, risk management, and compliance for large corporations. It provides real-time visibility into global cash positions, automates routine treasury operations, and enables strategic decision-making through advanced analytics.",
      },
      {
        question:
          "How does the platform handle multi-entity and global treasury operations?",
        answer:
          "Our platform supports complex multi-entity structures with centralized cash management, automated inter-company transactions, multi-currency operations, and compliance with local regulations across multiple jurisdictions while maintaining centralized control and reporting.",
      },
      {
        question: "What types of payment processing capabilities are included?",
        answer:
          "The platform includes single payout APIs for high-value transactions, bulk payment processing for vendor and payroll payments, payment link generation, multi-bank connectivity, cross-border payment optimization, and comprehensive payment reconciliation capabilities.",
      },
      {
        question:
          "How does the software ensure regulatory compliance and risk management?",
        answer:
          "Our treasury management software includes automated compliance reporting, real-time risk monitoring, fraud detection, AML/KYC capabilities, comprehensive audit trails, and built-in controls that meet regulatory requirements across multiple jurisdictions including SOX, Basel III, and local financial regulations.",
      },
      {
        question:
          "What is the typical implementation timeline for enterprise treasury management software?",
        answer:
          "Implementation timelines vary based on complexity and customization requirements. Standard cloud deployments typically take 3-6 months, while enterprise source code implementations with extensive customization may take 6-12 months, including training and change management.",
      },
      {
        question:
          "How does the platform integrate with existing ERP and banking systems?",
        answer:
          "Our API-first architecture provides 470+ REST APIs for seamless integration with major ERP systems (SAP, Oracle, Microsoft), core banking platforms, payment networks, and financial data providers, ensuring smooth data flow and process automation.",
      },
    ],
  };

  const Secondaryfeatures = {
    heading2: "Optimize Treasury Operations & Financial Performance",

    blocks: [
      {
        heading3: "Advanced Contract & Relationship Management",
        items: [
          "Banking service agreements and fee optimization analysis",
          "Vendor payment terms negotiation and management",
          "Multi-tier service level agreements with financial institutions",
          "Automated contract compliance monitoring and renewal management",
        ],
      },
      {
        heading3: "Sophisticated Fee Management & Cost Control",
        items: [
          "Comprehensive banking fee analysis and optimization",
          "Transaction cost allocation and chargeback mechanisms",
          "Multi-entity cost center allocation and reporting",
          "ROI tracking for treasury technology investments",
          "Benchmark analysis against industry treasury performance",
        ],
      },
      {
        heading3: "Enterprise Reconciliation & Settlement",
        items: [
          "Automated multi-bank account reconciliation across global locations",
          "Real-time settlement tracking and exception management",
          "Inter-entity reconciliation and netting optimization",
          "Comprehensive variance analysis and discrepancy resolution",
          "Automated month-end and quarter-end treasury closing processes",
        ],
      },
      {
        heading3: "Treasury Operations Optimization",
        items: [
          "Centralized cash management across Indian subsidiaries",
          "Automated investment and borrowing decision optimizationn",
          "Treasury workflow automation and approval processes",
          "Performance analytics and continuous improvement tracking",
        ],
      },
    ],
  };

  const material = [
    {
      heading2: "Specialized Treasury Management Modules",

      points: [
        {
          imgSrc:
            "/assets/TreasuryManagement/Specialized Treasury Management Modules/Cash Management.png",
          heading3: "Cash Management",
          heading3Para:
            "Optimize liquidity across global bank accounts with automated cash concentration, pooling, and investment strategies.",
        },
        {
          imgSrc:
            "/assets/TreasuryManagement/Specialized Treasury Management Modules/Financial Risk Management.png",
          heading3: "Financial Risk Management",
          heading3Para:
            "Advanced risk analytics for market, credit, and operational risk with integrated hedging and mitigation strategies.",
        },
        {
          imgSrc:
            "/assets/TreasuryManagement/Specialized Treasury Management Modules/Bank Relationship Management.png",
          heading3: "Bank Relationship Management",
          heading3Para:
            "Centralized management of banking relationships, fees analysis, and service optimization across multiple institutions.",
        },
        {
          imgSrc:
            "/assets/TreasuryManagement/Specialized Treasury Management Modules/Investment Management.png",
          heading3: "Investment Management",
          heading3Para:
            "Short-term investment optimization, money market fund management, and investment policy compliance monitoring.",
        },
        {
          imgSrc:
            "/assets/TreasuryManagement/Specialized Treasury Management Modules/Foreign Exchange.png",
          heading3: "Foreign Exchange",
          heading3Para:
            "Property purchase escrow management with conditional fund release capabilities.",
        },
        {
          imgSrc:
            "/assets/TreasuryManagement/Specialized Treasury Management Modules/Compliance & Reporting.png",
          heading3: "Compliance & Reporting",
          heading3Para:
            "Automated regulatory reporting, audit trail management, and compliance monitoring for multiple jurisdictions.",
        },
      ],
    },
  ];

  const CoopFeatures = {
    heading2:
      "Comprehensive Treasury Management Software Features for Enterprise Operations",
    heading2Para:
      "Transform your treasury operations with our feature-rich platform designed for exceptional cash flow optimization, payment automation, and risk management across global enterprise environments.",
    sections: [
      {
        imgSrc:
          "/assets/TreasuryManagement/Comprehensive Treasury Management Features for Enterprise Operations/Advanced Cash Flow Management.png",
        h3: "Advanced Cash Flow Management & Forecasting",
        h4: "Intelligent Liquidity Management",
        items: [
          "Real-time cash position monitoring across multiple banks and entities",
          "Automated cash concentration and pooling optimization",
          "Advanced cash flow forecasting with AI-powered analytics",
          "Automated liquidity optimization and investment decisions",
          "Integration with major banking systems and payment networks",
        ],
      },
      {
        imgSrc:
          "/assets/TreasuryManagement/Comprehensive Treasury Management Features for Enterprise Operations/Enterprise Payment Processing.png",
        h3: "Enterprise Payment Processing & Automation",
        h4: "Comprehensive Payment Operations",
        items: [
          "Single payout for individual high-value transactions",
          "Bulk payment processing for vendor and payroll payments",
          "Payment link generation for supplier and customer collections",
          "Multi-bank connectivity with major financial institutions",
          "Cross-border payment optimization and compliance",
          "Automated payment approval workflows and authorization controls",
          "Real-time payment tracking and settlement monitoring",
          "Advanced payment reconciliation and exception handling",
        ],
      },
      {
        imgSrc:
          "/assets/TreasuryManagement/Comprehensive Treasury Management Features for Enterprise Operations/Risk Management.png",
        h3: "Risk Management & Compliance Framework",
        h4: "Enterprise Risk & Compliance Controls",
        items: [
          "Real-time fraud detection and suspicious transaction monitoring",
          "Automated AML and KYC compliance for counterparties",
          "Regulatory reporting automation for multiple jurisdictions",
          "Credit risk assessment and exposure monitoring",
          "Market risk management and hedging strategy optimization",
          "Operational risk controls and segregation of duties",
          "Comprehensive audit trail and investigation capabilities",
        ],
      },
      {
        imgSrc:
          "/assets/TreasuryManagement/Comprehensive Treasury Management Features for Enterprise Operations/Treasury Analytics.png",
        h3: "Treasury Analytics & Reporting",
        h4: "Advanced Financial Intelligence & Insights",
        items: [
          "Executive dashboards for CFOs and treasury teams",
          "Real-time treasury KPI monitoring and alerts",
          "Comprehensive financial reporting and analytics",
          "Cash flow variance analysis and forecasting accuracy",
          "Cost center analysis and treasury performance metrics",
          "Regulatory reporting automation and submission",
        ],
      },
      {
        imgSrc:
          "/assets/TreasuryManagement/Comprehensive Treasury Management Features for Enterprise Operations/Multi-Entity.png",
        h3: "Multi-Entity & Global Treasury Operations",
        h4: "Enterprise-Scale Treasury Management",
        items: [
          "Enterprise-Scale Treasury Management",
          "Global bank relationship management and optimization",
          "Centralized treasury operations with local compliance",
          "Intercompany loan and transfer management",
          "Regional treasury center setup and management",
        ],
      },
    ],
  };

  const content = [
    {
      heading2: "Treasury Solutions for Every Enterprise Sector",
      heading2Para:
        "Whether you're managing treasury for a multinational corporation, regional bank, or government entity, our platform scales to meet the most demanding treasury requirements.",
      points: [
        {
          imgSrc:
            "/assets/TreasuryManagement/Treasury Solutions for Every Enterprise Sector/Large Corporates & MNCs.png",
          heading3: "Large Corporates & MNCs",
          heading3Para:
            "Comprehensive multi-entity cash management, global bank connectivity, and advanced risk management for complex corporate treasury operations across multiple jurisdictions.",
        
        },

        {
          imgSrc:
            "/assets/TreasuryManagement/Treasury Solutions for Every Enterprise Sector/Banks & Financial Institutions.png",
          heading3: "Banks & Financial Institutions",
          heading3Para:
            "Institution-grade treasury management with regulatory compliance, liquidity risk management, and integration with core banking systems for optimal financial performance.",
       
        },
        {
          imgSrc:
            "/assets/TreasuryManagement/Treasury Solutions for Every Enterprise Sector/Government & Public Sector.png",
          heading3: "Government & Public Sector",
          heading3Para:
            "Public sector treasury management with enhanced transparency, audit capabilities, and compliance with government financial regulations and reporting requirements.",
       
        },
      ],
    },
  ];

  const HeadingSubheadings = [
    {
      heading2: "Transform Your Fintech Platform with Secure Escrow Services",

      points: [
        {
          heading3: "Build Customer Trust",
          heading3Para:
            "Increase platform adoption and user confidence with bank-grade escrow security. Protect both buyers and sellers while reducing transaction disputes and chargebacks.",
        },

        {
          heading3: "Accelerate Revenue Growth",
          heading3Para:
            "Monetize every transaction with flexible fee structures. Increase customer lifetime value through improved payment success rates and reduced operational costs.",
        },
        {
          heading3: "Ensure Regulatory Compliance",
          heading3Para:
            "Meet financial regulations with built-in AML, KYC, and compliance reporting tools. Reduce regulatory risk while expanding to new markets and jurisdictions.",
        },
        {
          heading3: "Scale Operations Efficiently",
          heading3Para:
            "Handle millions of transactions with automated processing, real-time monitoring, and intelligent routing. Reduce operational overhead while improving service quality.",
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
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <section className="py-20 px-6 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            {CoopFeatures.heading2}
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600 max-w-3xl mx-auto">
            {CoopFeatures.heading2Para}
          </p>

          {/* Timeline */}
          <div className="mt-16 relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gray-200 h-full"></div>

            <div className="space-y-16">
              {CoopFeatures.sections.map((section, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline marker */}
                  <div className="absolute left-[10px] md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-green-600 border-4 border-white shadow-md"></div>

                  {/* Image */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                      src={section.imgSrc}
                      alt={section.h3}
                      width={500}
                      height={300}
                      className="rounded-2xl object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 w-full md:w-1/2">
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
      <TreasuryFeaturesTabs/>
  
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          {/* H2 */}
          <h2 className="text-5xl md:text-4xl font-bold text-gray-900">
            Transform Treasury Operations with AOPAY Digital Solutions
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-12 grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              imgSrc:
                "/assets/TreasuryManagement/Transform Your Enterprise Treasury Operations/1. Optimize Working Capital Management.png",
              title: "1. Optimize Working Capital Management",
              desc: "Improve cash conversion cycles and reduce financing costs through intelligent cash flow forecasting, automated investment decisions, and optimized payment timing across global operations.",
            },
            {
              imgSrc:
                "/assets/TreasuryManagement/Transform Your Enterprise Treasury Operations/2. Enhance Risk Management & Compliance.png",
              title: "2. Enhance Risk Management & Compliance",
              desc: "Test all escrow functions in our comprehensive sandbox environment.",
            },
            {
              imgSrc:
                "/assets/TreasuryManagement/Transform Your Enterprise Treasury Operations/3. Empower Treasury Teams for Strategic Impact.png",
              title: "3. Empower Treasury Teams for Strategic Impact",
              desc: "Transform treasury from operational to strategic by providing CFOs and treasurers with advanced analytics, automated processes, and real-time insights for data-driven decision making.",
            },
            {
              imgSrc:
                "/assets/TreasuryManagement/Transform Your Enterprise Treasury Operations/4. Maximize Financial Performance.png",
              title: "4. Maximize Financial Performance",
              desc: "Increase treasury efficiency and reduce costs through automation, optimization algorithms, and intelligent cash management that delivers measurable ROI improvements.",
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
              <img
                src={step.imgSrc}
                alt={step.title}
                className="mx-auto w-6 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <section className="relative py-20 px-6 bg-gradient-to-br from-gray-100 via-white to-gray-200 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gray-400 opacity-20 blur-3xl rounded-full"></div>

          <div className="relative max-w-4xl mx-auto text-center">
            {/* Glass Card */}
            <div className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-2xl rounded-3xl p-10">
              {/* Heading */}
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Calculate Your Treasury ROI
              </h2>

              {/* Description */}
              <div className="text-lg md:text-xl text-gray-700 space-y-4 mb-10">
                <p>
                  Leading enterprises reported 15-30% reduction in treasury
                  operational costs and 10-25% improvement in cash optimization
                  within 12 months of implementation.
                </p>
              </div>

              {/* Button */}
            </div>
          </div>
        </section>
      </section>
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <ContentWithDescriptivePoints content={content} />

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
            Proven Treasury Management System Performance
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
              <p className="text-2xl font-bold text-indigo-600">2,700+</p>
              <p className="text-gray-700 mt-1">
                High-value transactions processed per second
              </p>
            </div>
            <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">
              <p className="text-2xl font-bold text-indigo-600">99.99%</p>
              <p className="text-gray-700 mt-1">
                Enterprise-grade system uptime
              </p>
            </div>

            <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">
              <p className="text-2xl font-bold text-indigo-600">470+</p>
              <p className="text-gray-700 mt-1">
                Treasury management API endpoints
              </p>
            </div>
            <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">
              <p className="text-2xl font-bold text-indigo-600">12+</p>
              <p className="text-gray-700 mt-1">
                Years of enterprise treasury expertise
              </p>
            </div>
          </div>
        </div>
      </section>
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
            Connect with Our Treasury Management Specialists
          </h2>

          {/* Paragraph */}
          <p
            className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Discover how our Treasury Management Solution can transform your
            enterprise financial operations with advanced automation, risk
            management, and performance optimization tailored to your specific
            requirements.
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
              className="px-6 py-3 rounded-lg bg-black text-white font-medium shadow-lg hover:bg-gray-900 transition"
            >
              Schedule Executive Demo
            </a>
          </div>
          {/* H3 */}
          <h3
            className="mt-10 text-2xl font-semibold text-gray-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to revolutionize your treasury operations?
          </h3>
          <p className="mt-4">
            Join leading enterprises who have transformed their treasury
            management with our comprehensive platform.
          </p>
          <div
            className="mt-6 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="/request-demo"
              className="px-6 py-3 rounded-lg bg-green-500 text-white font-medium shadow-lg hover:bg-green-700 transition"
            >
              Request Executive Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TreasuryManagementSystem;
