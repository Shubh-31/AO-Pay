import { ExploreProducts } from "@/components/ExploreProducts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CardWithFeature } from "@/sections/CardWithFeature";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import {
  PaymentHead,
  CreditScoreSection,
  ToolsSection,
  GetStarted,
  FAQSection,
} from "@/sections/mySection";
import LoanManagementSection from "@/sections/NBFC/LoanManagementSection";
import NBFCCompliance from "@/sections/NBFC/NBFCCompliance";
import NBFCIntro from "@/sections/NBFC/NBFCInto";
import NBFCLendingCapabilities from "@/sections/NBFC/NBFCLendingCapabilities";
import NBFCSection from "@/sections/NBFC/NBFCSection";
import { StepsWithExplanation } from "@/sections/StepsWithExplanation";
import { Book, CheckCircle, Code2, FlaskConical, Headset } from "lucide-react";
import Script from "next/script";

export const metadata = {
  title: "NBFC Solutions for Lending & Compliance | AOPAY",
  description:
    "Manage NBFC operations end-to-end with AoPay's RBI-compliant software. Handle loan origination, disbursement, collections, compliance, reporting with automated workflows.",
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
    canonical: "https://aopay.in/nbfc-software",
  },
  openGraph: {
    title: "NBFC Software | RBI Compliant NBFC Management | AoPay",
    description:
      "Manage NBFC operations with RBI-compliant software for loans and compliance.",
    url: "https://aopay.in/nbfc-software",
    siteName: "AOPay",
    locale: "en_IN",
    images: [
      {
        url: "https://aopay.in/images/nbfc-software-og.jpg",
        width: 800,
        height: 600,
        alt: "AOPAY Open Graph Image",
      },
    ],
    type: "website",
  },
};

const CoreBanking = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/nbfc-software",
    telephone: "011-42151216",
    description:
      "Cheapest NBFC Software in India providing secure, feature-rich solutions for loans, customer management, and automation to boost efficiency and growth.",
    serviceType: [
      "White Label NBFC Software Solution",
      "Cloud NBFC Software Solution for NBFCs",
      "NBFC Software Provider Near Me",
      "Best NBFC Software Solution Provider in India",
      "API enabled NBFC Software for digital lenders",
      "NBFC software with multi-branch management",
      "NBFC software with repayment tracking Solution",
      "Affordable NBFC software with KYC & compliance modules",
      "NBFC Software for MSMEs in India",
      "Auto loan processing software provider for NBFCs",
      "Digital NBFC Solution for Small Businesses",
      "NBFC Software for microfinances",
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
      "NBFC Software Solutions for Lending, Compliance, & Finance Management",
    subTitle:
      "Transform your NBFC operations with our comprehensive Digital NBFC Solution. Streamline loan origination, payment processing, and customer management while ensuring full regulatory compliance. Our NBFC Banking Solution empowers financial institutions to offer modern lending services with automated workflows, real-time analytics, and seamless integration capabilities.",
    imgSrc: "/assets/NBFC/NBFC.jpg",
    alt: "Multi-channel payment gateway API supporting credit cards, debit cards and digital wallets.",
    btn1: "Request Demo",
    btn1Link: "/contact-us",
    video: false,
  };

  const features = [
    {
      imgSrc: "/assets/NBFC/OutOfTheBox/Customer Onboarding & KYC.png",
      title: "Customer Onboarding & KYC",
      subTitle: "Remote Digital Onboarding",
      items: [
        "Self-registration via email or mobile number",
        "Flexible document upload system (ID, utility bills, income proof)",
        "Automated KYC/KYB verification via pre-integrated vendors",
        "Manual verification through back-office interface",
        "Aadhaar-PAN integration for Indian NBFCs",
      ],
    },
    {
      imgSrc: "/assets/NBFC/OutOfTheBox/Complete Transaction Management.png",

      title: "Complete Transaction Management",
      subTitle: "Comprehensive Payment Operations",
      items: [
        "Loan disbursements and EMI collections",
        "Top-ups and withdrawals processing",
        "Payment gateway integration with leading providers",
        "In-system transfers and peer-to-peer payments",
        "Multi-currency exchange operations",
        "Automated refund and chargeback handling",
      ],
    },
    {
      imgSrc: "/assets/NBFC/OutOfTheBox/AML & Anti-Fraud Protection.png",

      title: "AML & Anti-Fraud Protection",
      subTitle: "Advanced Risk Management",
      items: [
        "Real-time suspicious transaction detection",
        "Customer confirmation workflows for fraud prevention",
        "Income verification for AML compliance",
        "Account freeze/unfreeze capabilities",
        "Comprehensive case management system",
      ],
    },
    {
      imgSrc: "/assets/NBFC/OutOfTheBox/Built-in CRM System.png",

      title: "Built-in CRM System",
      subTitle: "Customer Relationship Management",
      items: [
        "Unified customer dashboard with complete activity history",
        "Multi-channel customer communication tools",
        "In-system messaging and chat functionality",
        "Customer notes and interaction tracking",
        "Automated follow-up and reminder systems",
      ],
    },
    {
      imgSrc: "/assets/NBFC/OutOfTheBox/Comprehensive Activity Logging.png",

      title: "Comprehensive Activity Logging",
      subTitle: "User Actions & System Monitoring",
      items: [
        "Complete log of system activities by customers and staff",
        "Detailed session tracking and login history",
        "Action-level audit trails for compliance",
        "Investigation-ready reporting capabilities",
        "Real-time monitoring and alerting",
      ],
    },
  ];

  const Secondaryfeatures = {
    heading2: "Monetize Your NBFC Operations",
    blocks: [
      {
        imgSrc:
          "/assets/NBFC/Monetize Your NBFC Operations/Flexible Contract Management.png",
        heading3: "Flexible Contract Management",
        items: [
          "Vendor terms and conditions configuration",
          "Multiple customer contract types with varying commission structures",
          "Customer choice between different fee models (with/without monthly fees)",
          "Automated contract generation and digital signing",
        ],
      },
      {
        imgSrc:
          "/assets/NBFC/Monetize Your NBFC Operations/Advanced Fee & Limit Configuration.png",
        heading3: "Advanced Fee & Limit Configuration",
        items: [
          "Customizable transaction fees (percentage, flat fee, or hybrid models)",
          "Configurable fee bearer selection (sender or receiver)",
          "Transaction limits by period, amount, or transaction count",
          "Dynamic pricing based on customer segments",
        ],
      },
      {
        imgSrc:
          "/assets/NBFC/Monetize Your NBFC Operations/Reconciliation & Settlement.png",
        heading3: "Reconciliation & Settlement",
        items: [
          "Automated Financial Management",
          "Company liability reconciliation",
          "Customer and vendor liability tracking",
          "Automated detection of unmatched transactions",
          "Discrepancy identification and resolution workflows",
        ],
      },
      {
        imgSrc:
          "/assets/NBFC/Monetize Your NBFC Operations/Cash Operations Management.png",
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

  const Tertiaryfeatures = {
    heading2: "Enterprise-Grade Architecture for Scalable Growth",
    blocks: [
      {
        imgSrc:
          "/assets/NBFC/Enterprise-Grade Architecture for Scalable Growth/API-First Development.png",
        heading3: "API-First Development",
        heading3Para:
          "470+ REST APIs provide complete flexibility to integrate our NBFC solution into your existing systems and connect with third-party services seamlessly",
        items: [
          "RESTful API architecture",
          "Comprehensive API documentation",
          "SDK support for multiple programming languages",
          "Sandbox environment for testing",
        ],
      },
      {
        imgSrc:
          "/assets/NBFC/Enterprise-Grade Architecture for Scalable Growth/Flexible Deployment.png",
        heading3: "Flexible Deployment Options",
        heading3Para:
          "Choose between cloud-based SaaS model for quick deployment or on-premise installation for maximum control and customization",
        items: [
          "Cloud-based SaaS deployment",
          "On-premise installation options",
          "Hybrid cloud architecture support",
          "Auto-scaling capabilities",
        ],
      },
      {
        imgSrc:
          "/assets/NBFC/Enterprise-Grade Architecture for Scalable Growth/Multi-NBFC Support.png",
        heading3: "Multi-NBFC Support",
        heading3Para:
          "Our platform is designed to serve various types of NBFCs with specialized modules and workflows for different business models",
        items: [
          "Retail loan NBFCs",
          "Gold loan companies",
          "Vehicle finance NBFCs",
          "Microfinance institutions",
          "Housing finance companies",
        ],
      },
    ],
  };

  const contentWithHeadingsAndPoints2 = [
    {
      heading2: "Maximize NBFC Profitability with Smart Analytics",
      heading2Para:
        "Leverage advanced analytics and business intelligence tools to optimize your NBFC operations, reduce operational costs, and maximize profitability through data-driven decision making.",
      points: [
        {
          imgSrc:
            "/assets/NBFC/Maximize NBFC Profitability with Smart Analytics/Portfolio Analytics.png",
          heading3: "Portfolio Analytics",
          heading3Para:
            "Comprehensive portfolio performance analysis with predictive analytics for risk assessment and growth opportunities identification.",
        },
        {
          imgSrc:
            "/assets/NBFC/Maximize NBFC Profitability with Smart Analytics/Customer Lifecycle Management.png",
          heading3: "Customer Lifecycle Management",
          heading3Para:
            "Track customer journey from acquisition to retention, optimizing touchpoints for improved customer satisfaction and loyalty.",
        },
        {
          imgSrc:
            "/assets/NBFC/Maximize NBFC Profitability with Smart Analytics/Operational Efficiency Metrics.png",
          heading3: "Operational Efficiency Metrics",
          heading3Para:
            "Real-time dashboards for monitoring key performance indicators, processing times, and resource utilization optimization.",
        },
      ],
    },
  ];

  const content = [
    {
      heading2: "Drive Business Success with Strategic Advantages",
      points: [
        {
          imgSrc:
            "/assets/NBFC/Drive Business Success with Strategic Advantages/Customer Acquisition & Retention.png",
          heading3: "Customer Acquisition & Retention",
          heading3Para:
            "Attract and retain customers through customizable contracts and competitive pricing plans. Increase customer lifetime value and operational fees through strategic positioning.",
        },

        {
          imgSrc:
            "/assets/NBFC/Drive Business Success with Strategic Advantages/Enhanced Customer Intelligence.png",
          heading3: "Enhanced Customer Intelligence",
          heading3Para:
            "Access comprehensive customer information including transaction history, login patterns, and behavioral analytics. Exceed customer expectations by anticipating needs and resolving issues quickly.",
        },
        {
          imgSrc:
            "/assets/NBFC/Drive Business Success with Strategic Advantages/Team Productivity Optimization.png",
          heading3: "Team Productivity Optimization",
          heading3Para:
            "Empower your staff with an intuitive admin interface and convenient dashboard designed to streamline routine tasks and improve operational efficiency.",
        },
        {
          imgSrc:
            "/assets/NBFC/Drive Business Success with Strategic Advantages/Revenue Maximization.png",
          heading3: "Revenue Maximization",
          heading3Para:
            "Effectively monetize each customer segment using highly customizable transaction fees, limits, and pricing models tailored to different user groups.",
        },
      ],
    },
  ];

  const material = [
    {
      heading2: "NBFC Software Source Code License for Complete Control",
      heading2Para:
        "Get unprecedented flexibility with our enterprise source code licensing option.",
      points: [
        {
          imgSrc:
            "/assets/NBFC/Source Code License for Complete Control/Full Source Code Access.png",
          heading3: "Full Source Code Access",
          heading3Para:
            "Complete freedom to modify, customize, and scale the NBFC according to your specific business requirements. No vendor lock-in, maximum flexibility.",
        },
        {
          imgSrc:
            "/assets/NBFC/Source Code License for Complete Control/Warranty Protection.png",
          heading3: "Warranty Protection",
          heading3Para:
            "Comprehensive coverage for bug fixes, security updates, and platform enhancements. Our team ensures your investment remains protected and up-to-date.",
        },
        {
          imgSrc:
            "/assets/NBFC/Source Code License for Complete Control/Comprehensive Support.png",
          heading3: "Comprehensive Support",
          heading3Para:
            "Empower your development team with in-depth training, technical guidance, and ongoing support from our banking software experts.",
        },
        {
          imgSrc:
            "/assets/NBFC/Source Code License for Complete Control/Meet Your Deadlines.png",
          heading3: "Meet Your Deadlines",
          heading3Para:
            "Work directly with your internal team to meet project deadlines while bypassing traditional vendor delays and dependencies.",
        },
        {
          imgSrc:
            "/assets/NBFC/Source Code License for Complete Control/Minimized Development Risks.png",
          heading3: "Minimized Development Risks",
          heading3Para:
            "Avoid the bottlenecks and uncertainties of building complex banking software from scratch. Leverage our proven, battle-tested codebase.",
        },
        {
          imgSrc:
            "/assets/NBFC/Source Code License for Complete Control/Consistent Updates.png",
          heading3: "Consistent Updates",
          heading3Para:
            "Benefit from regular platform updates, new features, and performance enhancements to maintain peak operational efficiency.",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question:
          "What is NBFC software and how does it help financial institutions?",
        answer:
          "NBFC software is a comprehensive digital platform designed specifically for Non-Banking Financial Companies. It includes payout APIs, loan management, customer onboarding, KYC verification, and compliance tools to streamline operations and ensure regulatory adherence.",
      },
      {
        question:
          "Does the NBFC Banking Platform support loan management and origination?",
        answer:
          "Yes, our NBFC Software includes advanced loan origination software and comprehensive loan management systems. It supports end-to-end loan processing from application to disbursement, with automated underwriting, document management, repayment tracking, and collections management.",
      },
      {
        question: "What types of NBFCs can use this software?",
        answer:
          "Our software serves various NBFC types including retail loan companies, gold loan businesses, vehicle finance NBFCs, microfinance institutions, housing finance companies, and digital wallet providers.",
      },
      {
        question: "How long does implementation typically take?",
        answer:
          "Implementation time varies based on customization requirements. Our SaaS solution can be deployed within 2-4 weeks, while custom implementations with source code licensing typically take 8-12 weeks.",
      },
      {
        question: "Is the NBFC Software compliant with RBI regulations?",
        answer:
          "Absolutely. Our NBFC Banking Platform is built with comprehensive RBI compliance features, including automated KYC/AML processes, regulatory reporting, audit trails, fair practice code implementation, and all necessary controls for NBFC operations in India.",
      },
      {
        question: "Can the platform handle co-lending arrangements?",
        answer:
          "Yes, our NBFC Co-Lending Solution provides complete support for co-lending arrangements with banks and other financial institutions. It includes automated loan syndication, risk sharing mechanisms, partner integration, and compliance features specific to co-lending requirements.",
      },
      {
        question: "What are the transaction fees for Payment Processing API?",
        answer:
          "Our Payment Processing API offers competitive transaction fees starting from 2% per transaction with no setup fees or hidden charges. Volume-based pricing and custom enterprise rates are available for high-volume businesses.",
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
      <NBFCIntro />
      <LoanManagementSection />
      <section className="py-16 px-6 max-w-6xl mx-auto">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          NBFC Retail Banking Solution for Consumer Lending
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
          AOPAY NBFC Retail Solution is specifically designed for
          consumer-focused NBFCs offering personal loans, vehicle financing, and
          other retail lending products. The platform provides comprehensive
          tools for customer acquisition, loan processing, and portfolio
          management.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <img
              src="/assets/NBFC/NBFC Retail Solution for Consumer Lending/Personal Loans.png"
              alt="Personal Loans"
              className="my-2 w-8 h-auto"
            />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Personal Loans
            </h4>
            <p className="text-gray-700">
              Streamlined personal loan processing with instant approval
              capabilities and flexible repayment terms.
            </p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <img
              src="/assets/NBFC/NBFC Retail Solution for Consumer Lending/Vehicle Financing.png"
              alt="Vehicle Financing"
              className="my-2 w-8 h-auto"
            />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Vehicle Financing
            </h4>
            <p className="text-gray-700">
              Complete auto loan management from application to disbursement
              with integrated dealer networks.
            </p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <img
              src="/assets/NBFC/NBFC Retail Solution for Consumer Lending/Business Loans.png"
              alt="Business Loans"
              className="my-2 w-8 h-auto"
            />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Business Loans
            </h4>
            <p className="text-gray-700">
              SME lending solutions with customizable products and automated
              underwriting processes.
            </p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
            <img
              src="/assets/NBFC/NBFC Retail Solution for Consumer Lending/Gold Loans.png"
              alt="Gold Loans"
              className="my-2 w-8 h-auto"
            />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Gold Loans
            </h4>
            <p className="text-gray-700">
              Specialized gold loan management with valuation integration and
              real-time gold rate updates.
            </p>
          </div>
        </div>
      </section>
      <H2DescH3Desc contentWithDescription={material} />
      <NBFCSection />
      <NBFCCompliance />

      <NBFCLendingCapabilities />
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
            Enterprise-Grade NBFC Banking System Performance
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
              <p className="text-2xl font-bold text-indigo-600">10,000+</p>
              <p className="text-gray-700 mt-1">Loan Applications/Day</p>
            </div>
            <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">
              <p className="text-2xl font-bold text-indigo-600">99.9%</p>
              <p className="text-gray-700 mt-1">System Uptime</p>
            </div>
            <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">
              <p className="text-2xl font-bold text-indigo-600">5M+</p>
              <p className="text-gray-700 mt-1">Customer Records</p>
            </div>
            <div className="bg-gray-50 border rounded-2xl p-6 shadow-sm">
              <p className="text-2xl font-bold text-indigo-600">50+</p>
              <p className="text-gray-700 mt-1">Product Configurations</p>
            </div>
          </div>

          {/* Description */}
          <p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-4xl mx-auto"
          >
            AOPAY Global NBFC Banking Solution is built to scale with your
            business growth. Whether you're processing hundreds or thousands of
            loan applications daily, our platform maintains consistent
            performance and reliability across all operations.
          </p>
        </div>
      </section>

      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <section className="py-20 px-6 bg-gray-50">
        {/* Heading */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Out-of-the-Box Features for Quick Market Entry
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Accelerate your go-to-market with pre-integrated modules, regulatory
            compliance tools, and AI-driven automation—all ready to deploy from
            day one.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-center text-center w-full max-w-md"
            >
              {/* Number / Icon */}
              <div className="flex items-center justify-center">
                <img
                  src={feature.imgSrc}
                  alt={feature.title}
                  className="w-10 h-auto mb-2"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <h4 className="text-md font-semibold text-gray-700 mb-2">
                {feature.subTitle}
              </h4>

              {/* Items List */}
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                {feature.items.map((item, k) => (
                  <li key={k} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-6 bg-gray-50">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {Secondaryfeatures.heading2}
        </h2>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {Secondaryfeatures.blocks.map((block, i) => (
            <div
              key={i}
              className="bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-center text-center w-full max-w-md"
            >
              {/* Number Circle */}
              <div className="flex items-center justify-center">
                <img
                  src={block.imgSrc}
                  alt={block.heading3}
                  className="w-12 h-auto mb-4"
                />
              </div>

              {/* Block Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {block.heading3}
              </h3>

              {/* Items List */}
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready-to-Deploy NBFC Mobile Banking Application
          </h2>

          <p
            className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Launch your digital banking services faster with our customizable
            white-label mobile app.
          </p>

          {/* H3 Blocks */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Block 1 */}
            <div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src="/assets/NBFC/Ready-to-Deploy Mobile Banking Application/Complete Mobile Banking Suite.png"
                alt="Complete Mobile Banking Suite"
                className="mx-auto w-14 h-auto mb-5"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-5 text-center">
                Complete Mobile Banking Suite
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-base leading-relaxed">
                <li>Native iOS and Android applications</li>
                <li>Customizable branding and user interface</li>
                <li>Biometric authentication support</li>
                <li>Push notification system</li>
                <li>Offline transaction capability</li>
                <li>Multi-language support</li>
              </ul>
            </div>

            {/* Block 2 */}
            <div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src="/assets/NBFC/Ready-to-Deploy Mobile Banking Application/Fast Time-to-Market Benefits.png"
                alt="Fast Time-to-Market Benefits"
                className="mx-auto w-14 h-auto mb-5"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-5 text-center">
                Fast Time-to-Market Benefits
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-base leading-relaxed">
                <li>Pre-built banking workflows and user journeys</li>
                <li>Integrated security and compliance features</li>
                <li>App store optimization and deployment support</li>
                <li>Continuous updates and maintenance</li>
                <li>24/7 technical support</li>
              </ul>
            </div>
          </div>

          {/* Button */}
          <div
            className="text-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact-us"
              className="inline-block bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Try Mobile App Now
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-gray-50">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 max-w-4xl mx-auto">
          {Tertiaryfeatures.heading2}
        </h2>

        <div className="max-w-6xl mx-auto space-y-12">
          {Tertiaryfeatures.blocks.map((block, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row items-center gap-6 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 bg-white ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Gradient Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r from-blue-500 to-indigo-500"></div>

              {/* Number Circle */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <img
                  src={block.imgSrc}
                  alt={block.heading3}
                  className="w-12 mb-2"
                />
              </div>

              {/* Content */}
              <div className="text-center md:text-left md:max-w-xl">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  {block.heading3}
                </h3>
                <p className="text-lg font-normal text-gray-700 mb-2">
                  {" "}
                  {block.heading3Para}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {block.items.map((item, j) => (
                    <li key={j} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Specialized Solutions for Every NBFC Type
        </h2>

        {/* Solutions Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Retail Neobank Solutions */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-8 flex flex-col">
            <img
              src="/assets/NBFC/Specialized Solutions for Every NBFC Type/Retail Neobank Solutions.png"
              alt="Fast Time-to-Market Benefits.png"
              className="mx-0 w-6 h-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Retail Neobank Solutions
            </h3>
            <p className="text-gray-600 mb-4">
              Build and launch comprehensive neobanking products faster and at
              significantly lower costs with our proven white-label neobank
              software.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 flex-1">
              <li>Complete digital banking infrastructure</li>
              <li>Customer acquisition and retention tools</li>
              <li>Advanced analytics and reporting</li>
              <li>Regulatory compliance automation</li>
            </ul>
            <div className="mt-6">
              <a
                href="/neobank-details"
                className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700 transition"
              >
                View Neobank Details
              </a>
            </div>
          </div>

          {/* Digital Wallet Platform */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-8 flex flex-col">
            <img
              src="/assets/NBFC/Specialized Solutions for Every NBFC Type/Digital Wallet Platform_.png"
              alt="Fast Time-to-Market Benefits.png"
              className="mx-0 w-6 h-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Digital Wallet Platform
            </h3>
            <p className="text-gray-600 mb-4">
              Comprehensive solution for Electronic Money Institutions and
              Payment Institutions. Create products similar to leading digital
              wallets in the market.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 flex-1">
              <li>Multi-wallet management</li>
              <li>P2P and P2M payment capabilities</li>
              <li>Merchant payment processing</li>
              <li>Bill payment and recharge services</li>
            </ul>
            <div className="mt-6">
              <a
                href="/wallet-details"
                className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700 transition"
              >
                View Wallet Details
              </a>
            </div>
          </div>

          {/* Mobile Wallet Solutions */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-8 flex flex-col md:col-span-2">
            <img
              src="/assets/NBFC/Specialized Solutions for Every NBFC Type/Mobile Wallet Solutions.png"
              alt="Fast Time-to-Market Benefits.png"
              className="mx-0 w-6 h-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Mobile Wallet Solutions
            </h3>
            <p className="text-gray-600 mb-4">
              Launch your mobile wallet for customers using our platform and
              significantly reduce expenses and time-to-market while ensuring
              scalability.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 flex-1">
              <li>Cross-platform mobile applications</li>
              <li>QR code and NFC payment support</li>
              <li>Loyalty program integration</li>
              <li>Real-time transaction processing</li>
            </ul>
            <div className="mt-6">
              <a
                href="/mobile-wallet-details"
                className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700 transition"
              >
                View Mobile Details
              </a>
            </div>
          </div>
        </div>
      </section>
      <ContentWithDescriptivePoints content={content} />
      <FAQSection faqContent={faqContent} />
      <GetStarted
        heading="Connect with AOPAY Banking Software Experts"
        subHeading="Discover how our NBFC Solution aligns with your specific business requirements."
        btn1="Request Demo"
        btn4="Get Pricing"
        pricingKey="NBFC"
      />
    </>
  );
};

export default CoreBanking;
