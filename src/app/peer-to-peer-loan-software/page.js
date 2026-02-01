import ExpandableCards from "@/sections/ExpandableCards";
import ExtraExpandableCards from "@/sections/ExtraExpandableCards";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import MicrofinanceFeaturesTabs from "@/sections/MicrofinanceFeaturesTabs";
import { FAQSection, GetStarted, PaymentHead } from "@/sections/mySection";
import React from "react";
import { CheckCircle, Quote } from "lucide-react";
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
import SecondaryFeatures from "@/sections/PeerToPeer/SecondaryFeatures";
import Script from "next/script";

export const metadata = {
  title: "P2P Lending Platform Solution for Secure Investments | AOPAY",
  description:
    "Verify GST registration details instantly with AOPay API. Real-time GSTIN validation, business data authentication, tax compliance support. Integrate GST verification today.",
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
    canonical: "https://aopay.in/peer-to-peer-loan-software",
  },
  openGraph: {
    title: "P2P Lending Platform Solution for Secure Investments | AOPAY",
    description:
      "Integrate GST verification for smooth compliance. Use AOPAY GST Verification Solution to verify GSTIN and simplify your tax processes.",
    url: "https://aopay.in/peer-to-peer-loan-software",
    siteName: "AOPay",
    locale: "en_IN",
    images: [
      {
        url: "https://aopay.in/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "AOPAY Open Graph Image",
      },
    ],
    type: "website",
  },
};


const P2PLending = () => {

      const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "AOPAY Technology Pvt. Ltd.",
        url: "https://aopay.in/peer-to-peer-loan-software",
        telephone: "011-42151216",
        description:
          "Cheapest P2P Lending Software in India providing secure, feature-rich solutions for peer lending, automated loan management, and investor tracking.",
        serviceType: [
          "White Label Peer to Peer Lending Software Solution",
          "Cloud based Peer to Peer Lending Software Solution",
          "Peer to Peer Lending Software Provider Near Me",
          "Best Peer to Peer Lending Software Solution Provider in India",
          "Peer to Peer Loan Management Software",
          "SaaS Peer to Peer Loan Management Software for Small Businesses",
          "Bulk Peer to Peer Loan Management Solution",
          "Affordable Peer to Peer Lending Software for Small Businesses",
          "Peer to Peer Lending platform for small investors in India",
          "Auto Peer to Peer loan matching & disbursal Software Provider",
          "P2P lending platform with borrower & lender dashboards",
          "Real-time peer to peer loan tracking & management software",
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
      "Peer-to-Peer Lending Software Solution for Secure Borrower & Lender Management",
    subTitle:
      "Launch Your Peer-to-Peer Lending Business with Secure Solution. Complete white-label platform for fintech companies, NBFCs, and investment platforms to streamline lending operations.",
    imgSrc: "/assets/LoanManagement/LOAN MANAGEMENT.jpg",
    alt: "Multi-channel payment gateway API supporting credit cards, debit cards and digital wallets.",
    btn1: "Get Started Today",
    btn1Link: "/contact-us",

    video: false,
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Peer-to-Peer Lending Software Source Code License",
      heading2Para:
        "Get complete control over your peer-to-peer lending platform with full source code access and enterprise-grade support.",
      points: [
        {
          imgSrc:
            "/assets/P2PLending/Enterprise Source Code License/Full Source Code Access.png",
          heading3: "Full Source Code Access",
          heading3Para:
            "Complete freedom to modify and customize your P2P lending solution at your own pace. Build unique features that differentiate your platform in the competitive fintech market.",
        },
        {
          imgSrc:
            "/assets/P2PLending/Enterprise Source Code License/Warranty Protection.png",
          heading3: "Warranty Protection",
          heading3Para:
            "Comprehensive coverage for bug fixes and security. Our team ensures your lending platform remains secure and operational with regular maintenance.",
        },
        {
          imgSrc:
            "/assets/P2PLending/Enterprise Source Code License/Comprehensive Support.png",
          heading3: "Comprehensive Support",
          heading3Para:
            "Empower your development team with in-depth training, technical guidance, and ongoing support for seamless platform deployment and operation.",
        },
        {
          imgSrc:
            "/assets/P2PLending/Enterprise Source Code License/Meet Your Deadlines.png",
          heading3: "Meet Your Deadlines",
          heading3Para:
            "Work directly with your internal team to meet project deadlines, eliminating vendor delays and maintaining complete control over your development timeline.",
        },
        {
          imgSrc:
            "/assets/P2PLending/Enterprise Source Code License/Minimized Development Risks.png",
          heading3: "Minimized Development Risks",
          heading3Para:
            "Avoid the bottlenecks and uncertainties of building a P2P lending platform from scratch. Start with a proven, tested codebase.",
        },
        {
          imgSrc:
            "/assets/P2PLending/Enterprise Source Code License/Consistent Updates.png",
          heading3: "Consistent Updates",
          heading3Para:
            "Leverage regular platform updates and enhancements to maintain peak performance and stay competitive in the evolving fintech landscape.",
        },
      ],
    },
  ];

  const solutions = [
    {
      imgSrc:
        "/assets/P2PLending/Ready-to-Deploy P2P Lending Features/Remote Onboarding & KYC.png",
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
      imgSrc:
        "/assets/P2PLending/Ready-to-Deploy P2P Lending Features/Secure Payment Processing.png",
      title: "Secure Payment Processing",

      features: [
        "Single and bulk payout integration",
        "Bank account and wallet transfers",
        "Payment gateway operations",
        "In-system transfers between users",
        "Payment links for easy collections",
        "QR-code payment collection",
        "Refund and chargeback management",
      ],
    },
    {
      imgSrc:
        "/assets/P2PLending/Ready-to-Deploy P2P Lending Features/Risk Management & Compliance.png",
      title: "Risk Management & Compliance",

      features: [
        "AML/Anti-fraud detection",
        "Suspicious transaction monitoring",
        "Client confirmation for fraud prevention",
        "Income verification for AML compliance",
        "Account freeze/unfreeze capabilities",
        "Comprehensive audit trails",
      ],
    },
    {
      imgSrc:
        "/assets/P2PLending/Ready-to-Deploy P2P Lending Features/Customer Relationship Management.png",
      title: "Customer Relationship Management",
      features: [
        "Built-in CRM system",
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
      heading2: "Drive P2P Lending Business Success with AOPAY",
      heading2Para:
        "Create powerful QR Code Payment experiences with dynamic QR generation, Bharat QR compliance, and contactless payment solutions.",
      points: [
        {
          heading3: "Attract & Retain Borrowers and Lenders",
          heading3Para:
            "Acquire and retain users with customizable contracts and competitive pricing plans. Attract your target audience and grow profit from increased customer lifetime value and transaction fees.",
          imgSrc:
            "/assets/P2PLending/Drive P2P Lending Business Success/Attract & Retain Borrowers and Lenders.png",
        },
        {
          heading3: "Boost User Retention",
          heading3Para:
            "Access exhaustive information about each user - from transaction history to login patterns. Exceed expectations by quickly resolving requests and anticipating needs.",
          imgSrc:
            "/assets/P2PLending/Drive P2P Lending Business Success/Boost User Retention.png",
        },
        {
          heading3: "Empower Your Operations Team",
          heading3Para:
            "Your staff will appreciate our intuitive admin interface and convenient dashboard designed specifically for P2P lending operations and routine task management.",
          imgSrc:
            "/assets/P2PLending/Drive P2P Lending Business Success/Empower Your Operations Team.png",
        },
        {
          heading3: "Maximize Platform Revenue",
          heading3Para:
            "Effectively monetize each customer segment using endlessly customizable transaction fees, interest rate spreads, and flexible limit configurations.",
          imgSrc:
            "/assets/P2PLending/Drive P2P Lending Business Success/Maximize Platform Revenue.png",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is P2P lending software?",
        answer:
          "P2P lending software is a comprehensive platform that connects borrowers directly with lenders, bypassing traditional financial institutions. Our solution includes user onboarding, credit assessment, payment processing, and regulatory compliance features.",
      },
      {
        question: "How quickly can I launch my P2P lending platform?",
        answer:
          "With our white-label solution, you can launch your peer-to-peer lending platform in as little as 4-6 weeks, depending on customization requirements and regulatory compliance needs in your jurisdiction.",
      },
      {
        question:
          "Is the P2P lending software compliant with financial regulations?",
        answer:
          "Yes, our platform includes built-in compliance features including KYC/AML processes, transaction monitoring, and reporting capabilities. However, you should consult with legal experts for specific regulatory requirements in your operating jurisdictions.",
      },
      {
        question: "What APIs are included in the P2P lending platform?",
        answer:
          "Our platform includes 470+ REST APIs covering user management, loan origination, payment processing, risk assessment, reporting, and third-party integrations for seamless platform operation.",
      },
      {
        question:
          "Can I customize the P2P lending software for my specific needs?",
        answer:
          "Absolutely! Our platform is highly customizable with source code access available. You can modify features, integrate custom risk models, and adapt the user experience to match your brand and business requirements.",
      },
      {
        question: "What support is provided with the P2P lending software?",
        answer:
          "We provide comprehensive support including technical documentation, developer training, ongoing maintenance, regular updates, and dedicated support channels for enterprise clients.",
      },
    ],
  };

  const Secondaryfeatures = {
    heading2: "Monetize Your P2P Lending Platform",
    heading2Para:
      "Maximize revenue with flexible pricing models, customizable fees, and comprehensive financial management tools.",
    blocks: [
      {
        heading3: "Flexible Contracts & Vendor Management",
        items: [
          "Vendor terms and conditions configuration",
          "Multiple customer contract types",
          "Different commission structures and limits",
          "Customer choice of contract preferences",
          "Monthly fee options and fee-free models",
        ],
      },
      {
        heading3: "Dynamic Fee Structure",
        items: [
          "Percentage-based fees",
          "Flat fee structures",
          "Combination fee bearer(sender/receiver)",
          "Transaction limits per period",
          "Amount-based restrictions",
        ],
      },
      {
        heading3: "Financial Reconciliation",
        items: [
          "Company liabilities reconciliation(coming soon)",
          "Client liability management",
          "Vendor obligation tracking",
          "Unmatched transaction identification",
          "Automated discrepancy resolution",
          "Cash desk operations management",
        ],
      },
      {
        heading3: "Cash Operations Management",
        items: [
          "Multi-currency cash accounting",
          "Cash desk operation management",
          "Physical cash-to-digital conversion tracking",
          "Branch-wise cash flow monitoring",
        ],
      },
    ],
  };

  const material = [
    {
      heading2: "End-to-End P2P Loan Solution",
      heading2Para:
        "Deploy your peer-to-peer loan solution in record time with our comprehensive technical infrastructure.",
      points: [
        {
          imgSrc:
            "/assets/P2PLending/End-to-End P2P Lending Solution/Source Code License Available.png",
          heading3: "Source Code License Available",
          heading3Para:
            "Get complete control over your P2P lending solution by acquiring the source code license for maximum flexibility and no recurring subscription fees",
        },
        {
          imgSrc:
            "/assets/P2PLending/End-to-End P2P Lending Solution/API-First Architecture.png",
          heading3: "API-First Architecture",
          heading3Para:
            "470+ REST APIs to integrate the lending software into your existing products and connect third-party services seamlessly.",
        },
        {
          imgSrc:
            "/assets/P2PLending/End-to-End P2P Lending Solution/Affordable Subscription Model.png",
          heading3: "Affordable Subscription Model",
          heading3Para:
            "Access our P2P lending solution functionality in the cloud, ready to use immediately at a reasonable cost with flexible pricing options.",
        },
      ],
    },
  ];

  const content = [
    {
      heading2: "P2P Lending Software for All Business Models",
      heading2Para:
        "Whether you're targeting retail customers, corporate clients, or niche markets, our solution adapts to your specific P2P lending requirements.",
      points: [
        {
          imgSrc:
            "/assets/P2PLending/P2P Lending Software for All Business Models/Retail P2P Lending Platform.png",
          heading3: "P2P Lending Platform",
          heading3Para:
            "Build a consumer-focused peer-to-peer lending product, launch faster and at significantly lower cost with our white-label P2P lending solution.",
          heading3Btn: "View Details",
          heading3BtnLink: "/contact-us",
        },

        {
          imgSrc:
            "/assets/P2PLending/P2P Lending Software for All Business Models/Affordable Subscription Model.png",
          heading3: "Digital Wallet Integration",
          heading3Para:
            "A fully-fledged solution for Electronic Money Institutions and Payment Institutions. Create integrated wallet services for your P2P lending platform.",
          heading3Btn: "View Details",
          heading3BtnLink: "/contact-us",
        },
        {
          imgSrc:
            "/assets/P2PLending/P2P Lending Software for All Business Models/Mobile-First Lending.png",
          heading3: "Mobile-First P2P Lending",
          heading3Para:
            "Base your mobile P2P lending on our proven technology stack and significantly reduce your development expenses and time to market.",
          heading3Btn: "View Details",
          heading3BtnLink: "/contact-us",
        },
      ],
    },
  ];

  return (
    <>
      <Script
        id="flight-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PaymentHead headerSection={headerContent} />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Ready-to-Deploy P2P Lending Software Features
          </h2>
          <p className="text-lg font-semibold text-center text-gray-600 py-4 ">
            Launch your peer-to-peer lending platform with comprehensive
            features for seamless borrower-lender matching and transaction
            processing.
          </p>

          {/* Glass Cards Grid */}
          <div className="flex justify-center">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-5xl">
              {solutions.map((solution, idx) => (
                <GlassCard key={idx} {...solution} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <SecondaryFeatures />
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-100 via-white to-gray-200 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gray-400 opacity-20 blur-3xl rounded-full"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Glass Card */}
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-2xl rounded-3xl p-10">
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              White-Label Peer-to-Peer Mobile Lending App
            </h2>

            {/* Description */}
            <div className="text-lg md:text-xl text-gray-700 space-y-4 mb-10">
              <p>
                Launch faster with our customizable mobile loan application,
                designed specifically for P2P lending platforms.
              </p>
              <p>
                Receive a fully customizable banking mobile app with all
                essential P2P lending functionalities, giving your platform a
                competitive head start in the market.
              </p>
            </div>

            {/* Button */}
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition transform hover:scale-105"
            >
              🚀 Try Mobile App Demo
            </a>
          </div>
        </div>
      </section>

      <H2DescH3Desc contentWithDescription={material} />
      <ContentWithDescriptivePoints content={content} />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
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
            Proven P2P Lending Technology
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
              <p className="text-gray-700 mt-1">Transactions per second</p>
            </div>
            <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">
              <p className="text-2xl font-bold text-indigo-600">12+</p>
              <p className="text-gray-700 mt-1">Years in FinTech</p>
            </div>
            <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">
              <p className="text-2xl font-bold text-indigo-600">470+</p>
              <p className="text-gray-700 mt-1">API endpoints</p>
            </div>
            <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">
              <p className="text-2xl font-bold text-indigo-600">60+</p>
              <p className="text-gray-700 mt-1">Platform modules</p>
            </div>
          </div>
        </div>
      </section>
      <FAQSection faqContent={faqContent} />

  
      <GetStarted
        heading="Launch Your P2P Lending Platform Today"
        subHeading="Connect with our experts to discuss how our P2P lending solution aligns with your business goals and regulatory requirements."
        btn1="Request Demo"
        btn4="Get Pricing"
        pricingKey="P2P Lending Software"
      />
    </>
  );
};

export default P2PLending;
