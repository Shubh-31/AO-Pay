import { ExploreProducts } from "@/components/ExploreProducts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import { PaymentHead, FAQSection, GetStarted } from "@/sections/mySection";
import FeatureCards from "@/sections/NidhiSoftware/FeatureCards";
import BranchFeatureCards from "@/sections/NidhiSoftware/Operations";
import Script from "next/script";


export const metadata = {
  title: "NIDHI Company Solution for Member & Loan Management | AOPAY",
  description:
    "Streamline NIDHI company operations with AoPay's specialized software. Manage member deposits, loans, share capital, dividend distribution with Ministry of Corporate Affairs compliance.",
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
    canonical: "https://aopay.in/nidhi-software",
  },
  openGraph: {
    title: "NIDHI Company Software | Complete Management Solution | AoPay",
    description:
      "Streamline NIDHI operations with member management and MCA compliance.",
    url: "https://aopay.in/nidhi-software",
    siteName: "AOPay",
    locale: "en_IN",
    images: [
      {
        url: "https://aopay.in/images/nidhi-software-og.jpg",
        width: 800,
        height: 600,
        alt: "AOPAY Open Graph Image",
      },
    ],
    type: "website",
  },
};


const nidhi = () => {

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "AOPAY Technology Pvt. Ltd.",
      url: "https://aopay.in/nidhi-software",
      telephone: "011-42151216",
      description:
        "Cheapest NIDHI Software in India providing automated deposit and loan management, member account tracking, and compliance solutions for NIDHI firms.",
      serviceType: [
        "White Label NIDHI Software Solution",
        "Cloud NIDHI company management Software Solution",
        "NIDHI Software Provider Near Me",
        "Best NIDHI Software Solution Provider in India",
        "SaaS NIDHI Company Software",
        "NIDHI employee loan management software",
        "Nidhi software with member management system",
        "Affordable NIDHI Software for NIDHI Companies",
        "Best Nidhi company software for local businesses in India",
        "Nidhi loan disbursal automation software Provider",
        "Cloud-based Nidhi company management solution",
        "Nidhi software for deposit & loan management",
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
      "NIDHI Company Software Solution For Efficient Member & Loan Management",
    subTitle:
      "Streamline your NIDHI company operations with our comprehensive software solution designed specifically for mutual benefit societies. Manage members, handle fund collection and lending, ensure regulatory compliance, and automate daily operations with our advanced platform.",
    imgSrc: "/assets/NidhiBanking/NID SAHYOG DASH BOARD RE DESING.jpg",
    alt: "Multi-channel payment gateway API supporting credit cards, debit cards and digital wallets.",
    btn1: "Get Started",
    btn1Link: "/contact-us",
    video: false,
  };


const Secondaryfeatures = {
  heading2: "NIDHI Company Management Software",
  heading2Para:
    "AOPAY NIDHI Company Software provides complete management capabilities for mutual benefit societies and cooperative organizations. From member onboarding to loan management and regulatory reporting — manage every aspect efficiently within a unified platform.",
  blocks: [
    {
      imgSrc: "/assets/NidhiBanking/Member Management System.png",
      title: "Member Management System",
      description:
        "Manage the complete member lifecycle with digital onboarding, KYC verification, and personalized member access. Keep detailed member profiles and streamline communication.",
      items: [
        "Digital member registration and onboarding",
        "KYC and document verification",
        "Member contribution tracking",
        "Automated member communications",
      ],
    },
    {
      imgSrc: "/assets/NidhiBanking/Fund Collection and Management.png",
      title: "Fund Collection and Management",
      description:
        "Simplify fund collection with automated reminders, multi-channel payments, and transparent tracking. Manage share capital, deposits, and contributions efficiently.",
      items: [
        "Automated collection reminders",
        "Multiple payment gateway integration",
        "Real-time fund tracking",
        "Share capital management",
      ],
    },
    {
      imgSrc: "/assets/NidhiBanking/Lending and Loan Management.png",
      title: "Lending and Loan Management",
      description:
        "Automate your lending workflows — from loan application to approval, disbursement, and repayment. Ensure transparency and accuracy in interest calculations and portfolio tracking.",
      items: [
        "Loan application processing",
        "Automated interest calculations",
        "Repayment schedule management",
        "Loan portfolio analytics",
      ],
    },
  ],
};

const Tertiaryfeatures = {
  heading2: "NIDHi Branch Operations and Administration Management",
  heading2Para:
    "Empower your branch managers and loan officers with intuitive tools for daily operations management. Centralized control with branch-wise reporting and performance monitoring.",
  blocks: [
    {
      imgSrc:
        "/assets/NidhiBanking/Branch Operations and Administration/Branch Management.png",
      heading3:
        "Branch Management: Multi-branch operations support with centralized administration. Track branch performance, manage staff roles, and monitor branch-wise member activities",
      items: [
        "Multi-branch support",
        "Branch performance analytics",
        "Staff role management",
        "Branch-wise reporting",
      ],
    },
    {
      imgSrc:
        "/assets/NidhiBanking/Branch Operations and Administration/Flexible Deployment Options.png",
      heading3:
        "Flexible Deployment Options: Choose between cloud-based SaaS model for quick deployment or on-premise installation for maximum control and customization",
      items: [
        "Cloud-based SaaS deployment",
        "On-premise installation options",
        "Hybrid cloud architecture support",
        "Auto-scaling capabilities",
      ],
    },
    {
      imgSrc:
        "/assets/NidhiBanking/Branch Operations and Administration/Loan Officer Tools.png",
      heading3:
        "Loan Officer Tools: Dedicated tools for loan officers to manage loan applications, conduct member visits, and track collection activities. Mobile-friendly interface for field operations.",
      items: [
        "Mobile loan processing",
        "Field visit management",
        "Collection tracking",
        "Member interaction history",
      ],
    },
    {
      imgSrc:
        "/assets/NidhiBanking/Branch Operations and Administration/Administrative Dashboard.png",
      heading3:
        "Administrative Dashboard: Comprehensive dashboard for NIDHI company administrators with real-time insights, performance metrics, and operational analytics for informed decision-making.",
      items: [
        "Real-time operational insights",
        "Peformance monitoring",
        "Financial analytics",
        "Risk assessment tools",
      ],
    },
  ],
};
  const contentWithHeadingsAndPoints = [
    {
      heading2: "Digital Services and Member Experience",
      heading2Para:
        "Enhance member experience with digital services including online portals, mobile applications, and self-service options. Modernize your NIDHI company operations with digital transformation.",
      points: [
        {
          imgSrc:
            "/assets/NidhiBanking/Digital Services and Member Experience/Member Self-Service Portal.png",
          heading3: "Member Self-Service Portal",
          heading3Para:
            "Enable members to access their accounts, view statements, apply for loans, and make payments through a secure online portal. Reduce operational overhead while improving member satisfaction.",
        },
        {
          imgSrc:
            "/assets/NidhiBanking/Digital Services and Member Experience/Mobile Application.png",
          heading3: "Mobile Application",
          heading3Para:
            "Dedicated mobile app for members and staff with features for account management, loan applications, payment processing, and communication tools.",
        },
        {
          imgSrc:
            "/assets/NidhiBanking/Digital Services and Member Experience/Digital Communication.png",
          heading3: "Digital Communication",
          heading3Para:
            "Automated SMS and email notifications for important updates, payment reminders, loan approvals, and regulatory communications. Maintain regular contact with members efficiently.",
        },
      ],
    },
  ];

  const material = [
    {
      heading2:
        "NIDHI Company: Financial Management and Accounting Made Simple",
      heading2Para:
        "Integrated accounting and financial management system designed for NIDHI companies. Handle all financial operations with automated bookkeeping and comprehensive reporting.",
      points: [
        {
          imgSrc:
            "/assets/NidhiBanking/Financial Management and Accounting/Automated Accounting.png",
          heading3: "Automated Accounting",
          heading3Para:
            "Integrated double-entry bookkeeping system with automated journal entries for all transactions. Maintain accurate financial records with minimal manual intervention.",
        },
        {
          imgSrc:
            "/assets/NidhiBanking/Financial Management and Accounting/Financial Reporting.png",
          heading3: "Financial Reporting",
          heading3Para:
            "Comprehensive financial reports including balance sheets, profit & loss statements, cash flow reports, and regulatory returns. Export capabilities for external audits.",
        },
        {
          imgSrc:
            "/assets/NidhiBanking/Financial Management and Accounting/Treasury Management.png",
          heading3: "Treasury Management",
          heading3Para:
            "Cash flow management, investment tracking, and liquidity management tools. Monitor fund utilization and maintain optimal cash reserves as per regulations.",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2: "White-label NIDHI Company Software",
      heading2Para:
        "Our NIDHI company solution is available as a white-label solution for developers, system integrators, and business solution providers. Customize and rebrand the platform for your clients.",
      points: [
        {
          imgSrc:
            "/assets/NidhiBanking/White-label Solutions for Developers and Resellers/Developer-Friendly Architecture.png",
          heading3: "Developer-Friendly Architecture",
          heading3Para:
            "API-first design with comprehensive documentation, SDKs, and integration support. Build custom solutions and integrations with third-party systems easily.",
        },
        {
          imgSrc:
            "/assets/NidhiBanking/White-label Solutions for Developers and Resellers/Customization Options.png",
          heading3: "Customization Options",
          heading3Para:
            "Flexible configuration options to adapt the software to specific NIDHI company requirements. Custom workflows, forms, reports, and user interfaces can be implemented.",
        },
        {
          imgSrc:
            "/assets/NidhiBanking/White-label Solutions for Developers and Resellers/Reseller Program.png",
          heading3: "Reseller Program",
          heading3Para:
            "Partner with us to offer NIDHI company solution to your clients. Comprehensive training, marketing support, and technical assistance provided to resellers.",
        },
      ],
    },
  ];

  const content = [
    {
      heading2: "Integration Capabilities and Technical Features",
      points: [
        {
          imgSrc:
            "/assets/NidhiBanking/Integration Capabilities and Technical Features/Core Banking Integration.png",
          heading3: "Core Banking Integration",
          heading3Para:
            "Seamless integration with major banks and core banking systems for real-time fund transfers, account verification, and transaction processing.",
        },

        {
          imgSrc:
            "/assets/NidhiBanking/Integration Capabilities and Technical Features/Payment Gateway Integration.png",
          heading3: "Payment Gateway Integration",
          heading3Para:
            "Support for multiple payment gateways enabling members to make contributions and loan repayments through various digital payment methods.",
        },
        {
          imgSrc:
            "/assets/NidhiBanking/Integration Capabilities and Technical Features/Third-party Integrations.png",
          heading3: "Third-party Integrations",
          heading3Para:
            "Pre-built integrations with credit bureaus, SMS providers, email services, and document verification systems. Extensible architecture for custom integrations.",
        },
        {
          imgSrc:
            "/assets/NidhiBanking/Integration Capabilities and Technical Features/Security and Data Protection.png",
          heading3: "Security and Data Protection",
          heading3Para:
            "Bank-grade security with encryption, access controls, and audit trails. Compliant with data protection regulations and industry security standards.",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is NIDHI company software and who needs it?",
        answer:
          "NIDHI company software is a comprehensive management system designed for mutual benefit societies registered under Section 406 of the Companies Act. It's essential for NIDHI companies, branch managers, loan officers, and administrators managing member funds and lending operations.",
      },
      {
        question: "Does the software ensure regulatory compliance?",
        answer:
          "Yes, our software is built with RBI guidelines and NIDHI company regulations in mind. It includes automated compliance monitoring, regulatory reporting, and audit trail maintenance to ensure full compliance.",
      },
      {
        question: "Can the software handle multiple branches?",
        answer:
          "Absolutely. Our platform supports multi-branch operations with centralized administration, branch-wise reporting, and role-based access control for different branch staff members.",
      },
      {
        question: "Is integration with banks and payment gateways possible?",
        answer:
          "Yes, we provide seamless integration with major banks, payment gateways, and core banking systems. This enables real-time fund transfers, account verification, and automated transaction processing.",
      },
      {
        question: "What support is provided for implementation and training?",
        answer:
          "We provide comprehensive implementation support including data migration, staff training, and ongoing technical support. Our team ensures smooth transition and optimal utilization of the software.",
      },
      {
        question: "Is the software available as a white-label solution?",
        answer:
          "Yes, we offer white-label solutions for developers and resellers. The platform can be customized and rebranded according to your requirements with full technical support and documentation.",
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
      <FeatureCards
        heading={Secondaryfeatures.heading2}
        subheading={Secondaryfeatures.heading2Para}
        blocks={Secondaryfeatures.blocks}
      />
      <section className="py-20 px-6 max-w-4xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Regulatory Compliance and Reporting
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stay compliant with NIDHI company regulations and RBI guidelines
            with our built-in compliance management system. Generate required
            reports automatically and maintain audit trails for all
            transactions.
          </p>
        </div>

        {/* Features Grid Card */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "RBI guideline compliance monitoring",
            "Automated regulatory report generation",
            "Audit trail maintenance",
            "Net Owned Fund (NOF) tracking",
            "Prudential norms monitoring",
            "Annual return preparation",
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              {/* Gradient Top Border */}
              <div className="h-2 w-full bg-gradient-to-r from-green-400 to-blue-500"></div>

              <div className="p-6 flex flex-col items-center">
                <div className="mb-3 text-green-600 bg-green-100 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-medium text-gray-700">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BranchFeatureCards
        heading={Tertiaryfeatures.heading2}
        subheading={Tertiaryfeatures.heading2Para}
        blocks={Tertiaryfeatures.blocks}
      />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <H2DescH3Desc contentWithDescription={material} />
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
            Trusted by NIDHI Companies Across India
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
              <p className="text-2xl font-bold text-indigo-600">300+</p>
              <p className="text-gray-700 mt-1">NIDHI Companies</p>
            </div>
            <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">
              <p className="text-2xl font-bold text-indigo-600">1M+</p>
              <p className="text-gray-700 mt-1">Active Members</p>
            </div>
            <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">
              <p className="text-2xl font-bold text-indigo-600">500Cr+</p>
              <p className="text-gray-700 mt-1">Funds Managed</p>
            </div>
            <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">
              <p className="text-2xl font-bold text-indigo-600">99.9%</p>
              <p className="text-gray-700 mt-1">System Uptime</p>
            </div>
          </div>
        </div>
      </section>
      <FAQSection faqContent={faqContent} />
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Connect With Our NIDHI Software Experts
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Get in touch with our specialists to understand how our NIDHI company
          software can transform your operations and ensure regulatory
          compliance.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="/assets/NidhiBanking/Connect With Our NIDHI Software Experts/For NIDHI Companies.png"
              alt="For NIDHI Companies"
              className="w-6 mb-2"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              For NIDHI Companies
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Learn how our software can streamline your operations, ensure
              compliance, and enhance member experience with modern digital
              solutions.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="/assets/NidhiBanking/Connect With Our NIDHI Software Experts/For Developers & Resellers.png"
              alt="For developers & resellers"
              className="w-6 mb-2"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              For Developers & Resellers
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Explore our white-label solutions, API documentation, and
              partnership opportunities for implementing NIDHI solution.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="/assets/NidhiBanking/Connect With Our NIDHI Software Experts/For Regulators & Auditors.png"
              alt="For Regulators & Auditors"
              className="w-6 mb-2"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              For Regulators & Auditors
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Understand our compliance features, audit trail capabilities, and
              regulatory reporting functionalities for oversight and audit
              purposes.
            </p>
          </div>
        </div>
      </section>
         <GetStarted
              heading="Connect with AOPAY Banking Software Experts"
              subHeading="Discover how our NIDHI Solution aligns with your specific business requirements."
              btn1="Request Demo"
              btn4="Get Pricing"
              pricingKey="NIDHI"
            />
    </>
  );
};

export default nidhi;
