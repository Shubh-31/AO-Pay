import ExpandableCards from "@/sections/ExpandableCards";
import ExtraExpandableCards from "@/sections/ExtraExpandableCards";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import MicrofinanceFeaturesTabs from "@/sections/MicrofinanceFeaturesTabs";
import { FAQSection, GetStarted, PaymentHead } from "@/sections/mySection";
import React from "react";
import { CheckCircle, Quote } from "lucide-react";
import GlassCard from "@/sections/GlassCard";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import Script from "next/script";


export const metadata = {
  title: "Microfinance Solution with Loan & Repayment Tracking | AOPAY",
  description:
    "Explore AOPay's Microfinance solution. Perfect for Microfinance Institutions, Community Banking. Streamline operations with our comprehensive financial management software.",
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
    canonical: "https://aopay.in/microfinance-software",
  },
  openGraph: {
    title: "Microfinance | AOPay",
    description:
      "Microfinance by AOPay - Designed for Microfinance Institutions, Community Banking. Comprehensive financial management & payment solutions.",
    url: "https://aopay.in/microfinance-software",
    siteName: "AOPay",
    locale: "en_IN",
    images: [
      {
        url: "https://aopay.in/images/microfinance-software.jpg",
        width: 800,
        height: 600,
        alt: "AOPAY Open Graph Image",
      },
    ],
    twitter: {
      card: "summary_large_image",
      title: "Microfinance | AOPay",
      description:
        "Microfinance by AOPay - Designed for Microfinance Institutions, Community Banking. Comprehensive financial management & payment solutions.",
      images: ["https://aopay.in/images/microfinance-software.jpg"],
    },
    type: "website",
  },
};


const Microfinance = () => {

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "AOPAY Technology Pvt. Ltd.",
      url: "https://aopay.in/microfinance-software",
      telephone: "011-42151216",
      description:
        "Cheapest Microfinance Software in India providing automated loan and member management, repayment tracking, and secure compliance solutions for MFIs.",
      serviceType: [
        "White Label Microfinance Software Solution",
        "Cloud based Microfinance Software Solution",
        "Microfinance Software Provider Near Me",
        "Best Microfinance Software Solution Provider for MFIs in India",
        "Microfinance lending software for MFIs",
        "Digital microfinance platform for rural lending",
        "Microfinance management solution for NBFCs",
        "Affordable Microfinance Software for Small Businesses",
        "Real-time microloan monitoring system in India",
        "Microfinance software provider for automated loan processing",
        "Bulk mfi loan management & reporting software",
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
    title: "Microfinance Software Solution Complete MFI Management Platform",
    subTitle:
      "Empower microfinance institutions, NBFCs, and NGO-based micro-lenders with comprehensive solution featuring secure payout for single payments, bulk payouts, and payment links. Streamline loan management, customer onboarding, and financial inclusion operations with our white-label solution trusted by MFIs.",
    imgSrc: "/assets/LoanManagement/LOAN MANAGEMENT.jpg",
    alt: "Multi-channel payment gateway API supporting credit cards, debit cards and digital wallets.",
    btn1: "Request Demo",
    btn1Link: "/contact-us",

    video: false,
    SalientFeatures: [
      "2,700+ Transactions per second",
      "12+ Years serving MFIs",
      "470+ REST APIs",
      "60+ Microfinance modules",
    ],
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2:
        "Microfinance Software Source Code License for Complete MFI Control",
      heading2Para:
        "Get unprecedented flexibility with our microfinance solution source code licensing - specifically designed for large MFIs and financial institutions requiring complete customization control.",
      points: [
        {
          imgSrc:
            "/assets/MicroFinance/Enterprise Source Code License for Complete MFI Control/Full Source Code Access.png",
          heading3: "Full Source Code Access",
          heading3Para:
            "Complete freedom to modify, customize, and scale the microfinance solutionaccording to your specific MFI requirements, regulatory needs, and operational workflows. No vendor lock-in, maximum flexibility for your institution.",
        },
        {
          imgSrc:
            "/assets/MicroFinance/Enterprise Source Code License for Complete MFI Control/Warranty.png",
          heading3: "Comprehensive Warranty Protection",
          heading3Para:
            "Extensive coverage for bug fixes, security updates, regulatory compliance updates, and platform enhancements. Our team ensures your microfinance technology investment remains protected and current with industry standards.",
        },
        {
          imgSrc:
            "/assets/MicroFinance/Enterprise Source Code License for Complete MFI Control/Expert Training & Support.png",
          heading3: "Expert Training & Support",
          heading3Para:
            "Empower your IT team and loan officers with in-depth training on microfinance solution, technical guidance, and ongoing support from our banking and microfinance technology experts.",
        },
        {
          imgSrc:
            "/assets/MicroFinance/Enterprise Source Code License for Complete MFI Control/Timeline.png",
          heading3: "Accelerated Implementation Timeline",
          heading3Para:
            "Work directly with your internal development team to meet project deadlines while bypassing traditional vendor delays. Deploy your microfinance platform in as little as 5-6 days instead of traditional 12+ month implementations..",
        },
        {
          imgSrc:
            "/assets/MicroFinance/Enterprise Source Code License for Complete MFI Control/Minimized Development Risks.png",
          heading3: "Minimized Development Risks",
          heading3Para:
            "Avoid the complex bottlenecks and uncertainties of building microfinance solution from scratch. Leverage our proven, battle-tested codebase used by successful MFIs worldwide.",
        },
        {
          imgSrc:
            "/assets/MicroFinance/Enterprise Source Code License for Complete MFI Control/Continuous Platform Updates.png",
          heading3: "Continuous Platform Updates",
          heading3Para:
            "Benefit from regular platform updates, new microfinance features, regulatory compliance updates, and performance enhancements to maintain peak operational efficiency.",
        },
      ],
    },
  ];

  const features2 = {
    heading2: "Enterprise Architecture for Scalable MFI Growth",
    points: [
      {
        imgSrc:
          "/assets/MicroFinance/Enterprise Architecture for Scalable MFI Growth/api-first microfinance platform.png",
        heading3: "API-First Microfinance Solution",
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
        imgSrc:
          "/assets/MicroFinance/Enterprise Architecture for Scalable MFI Growth/dsgwerh.png",
        heading3: "Flexible Deployment for MFIs of All Sizes",
        heading3Para:
          "Choose between cloud-based SaaS model for quick deployment or white label solution for maximum control.",
        type: "list",
        features: [
          "Cloud-based SaaS deployment for smaller MFIs",
          "White label MFI Solution for large institutions",
          "Hybrid cloud architecture for multi-region operations",
          "Auto-scaling capabilities for rapid growth",
          "Multi-tenant architecture for MFI networks",
        ],
      },
      {
        imgSrc:
          "/assets/MicroFinance/Enterprise Architecture for Scalable MFI Growth/Multi-Type MFI Support.png",
        heading3: "Multi-Type MFI Support",
        heading3Para:
          "Our solution serves various microfinance institution types with specialized modules and workflows.",
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
      imgSrc:
        "/assets/MicroFinance/Specialized Solutions for Every Microfinance Model/Rural Microfinance Solutions.png",
      title: "Rural Microfinance Solutions",
      description:
        "Comprehensive platform designed specifically for rural microfinance operations, agricultural lending, and financial inclusion in remote areas with limited infrastructure.",
      features: [
        "Agricultural loan management with seasonal cycles",
        "Group lending and Self-Help Group (SHG) support",
        "Offline mobile capabilities for field operations",
        "Local language support and voice interfaces",
        "Integration with government subsidy schemes",
      ],
    
    },
    {
      imgSrc:
        "/assets/MicroFinance/Specialized Solutions for Every Microfinance Model/Urban Microfinance Platform.png",
      title: "Urban Microfinance Solution",
      description:
        "Advanced digital platform for urban microfinance operations, micro-enterprise lending, and financial services for low-income urban populations.",
      features: [
        "Micro-enterprise and small business loan management",
        "Digital payment integration with urban infrastructure",
        "Advanced credit scoring with digital footprint data",
        "Real-time risk monitoring and portfolio analytics",
        "Integration with digital identity systems",
      ],
      
    },
    {
      imgSrc:
        "/assets/MicroFinance/Specialized Solutions for Every Microfinance Model/Group Lending & SHG Management.png",
      title: "Group Lending & SHG Management",
      description:
        "Specialized tools for managing Self-Help Groups, Joint Liability Groups, and community-based microfinance operations with social collateral mechanisms.",
      features: [
        "Group formation and member management",
        "Joint liability tracking and group guarantee systems",
        "Savings and credit association (SACA) management",
        "Group meeting scheduling and attendance tracking",
        "Social performance measurement and impact tracking",
      ],
      
    },
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2: "Drive MFI Success with Strategic Technology Advantages",
      heading2Para:
        "Create powerful QR Code Payment experiences with dynamic QR generation, Bharat QR compliance, and contactless payment solutions.",
      points: [
        {
          imgSrc:
            "/assets/MicroFinance/Drive MFI Success with Strategic Technology Advantages/Enhanced Financial Inclusion Reac.png",
          heading3: "Enhanced Financial Inclusion Reach",
          heading3Para:
            "Extend your microfinance services to previously underserved populations through digital channels, mobile-first design, and offline capabilities. Increase your customer base while reducing operational costs per client.",
        },
        {
          imgSrc:
            "/assets/MicroFinance/Drive MFI Success with Strategic Technology Advantages/data-driven portfolio management.png",
          heading3: "Data-Driven Portfolio Management",
          heading3Para:
            "Access comprehensive analytics including loan performance, portfolio quality, customer behavior patterns, and risk indicators. Make informed decisions to optimize your microfinance portfolio and reduce default rates.",
        },
        {
          imgSrc:
            "/assets/MicroFinance/Drive MFI Success with Strategic Technology Advantages/Field Team Productivity O.png",
          heading3: "Field Team Productivity Optimization",
          heading3Para:
            "Empower your loan officers and field staff with intuitive mobile applications, automated workflows, and real-time access to customer information. Increase productivity by up to 50% with streamlined operations.",
        },
        {
          imgSrc:
            "/assets/MicroFinance/Drive MFI Success with Strategic Technology Advantages/Operational Cost Reductio.png",
          heading3: "Operational Cost Reduction",
          heading3Para:
            "Reduce operational expenses through automation, digital processes, and efficient resource utilization. Lower cost-per-loan while maintaining service quality and regulatory compliance standards.",
        },
        {
          imgSrc:
            "/assets/MicroFinance/Drive MFI Success with Strategic Technology Advantages/Regulatory Compliance Aut.png",
          heading3: "Regulatory Compliance Automation",
          heading3Para:
            "Ensure continuous compliance with RBI regulations, local microfinance guidelines, and international standards. Automated reporting and audit trails reduce compliance burden on your team.",
        },
        {
          imgSrc:
            "/assets/MicroFinance/Drive MFI Success with Strategic Technology Advantages/Social Impact Measurement.png",
          heading3: "Social Impact Measurement",
          heading3Para:
            "Track and measure your social performance with built-in impact measurement tools. Generate reports for donors, investors, and stakeholders showing your contribution to financial inclusion and poverty alleviation.",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions About Microfinance Software",
    faqs: [
      {
        question: "What is microfinance software and how does it benefit MFIs?",
        answer:
          "Microfinance software is a comprehensive platform designed specifically for microfinance institutions, NBFCs, and micro-lenders. It includes loan management, customer onboarding, payout APIs, field operations management, and regulatory compliance tools to streamline microfinance operations and ensure financial inclusion goals are met efficiently.",
      },
      {
        question: "How secure is the payout API for microfinance transactions?",
        answer:
          "Our microfinance payout API uses bank-grade security with 256-bit SSL encryption, RBI compliance standards, and advanced fraud detection specifically designed for microfinance operations. All transactions are processed through secure channels with comprehensive audit trails for regulatory requirements.",
      },
      {
        question: "Can the software handle group lending and SHG operations?",
        answer:
          "Yes, our platform includes specialized modules for group lending, Self-Help Group (SHG) management, Joint Liability Groups (JLGs), and community-based microfinance. It handles group formation, member management, joint liability tracking, and group meeting coordination.",
      },
      {
        question: "Does the software work offline for rural field operations?",
        answer:
          "Yes, our mobile applications are designed with offline-first architecture, allowing field officers to continue operations in areas with limited or no internet connectivity. Data syncs automatically when connectivity is restored, ensuring uninterrupted service delivery.",
      },
      {
        question:
          "What types of microfinance institutions can use this software?",
        answer:
          "Our software serves all types of MFIs including small and mid-sized microfinance institutions, large MFIs with multiple branches, NGO-based micro-lenders, NBFC-MFIs, cooperative societies, credit unions, and SHG federations.",
      },
      {
        question: "How long does implementation take for a typical MFI?",
        answer:
          "Implementation time varies based on MFI size and customization needs. Small to mid-sized MFIs can be operational within 4-6 weeks using our SaaS model, while large institutions with extensive customization requirements typically take 12-16 weeks for complete deployment.",
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

  return (
    <>
      <Script
        id="flight-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PaymentHead headerSection={headerContent} />
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Digital Lending Software for Microfinance and Micro Loan Management
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Addressing the financial inclusion gap for 1.4 billion unbanked adults
          globally with secure, efficient microfinance technology solutions.
        </p>

        <div className="relative border-l-2 border-indigo-500 pl-6 space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Instant Loan Disbursements & Bulk Payouts
            </h3>
            <p className="text-gray-600 mb-3">
              Process individual loan disbursements or bulk payments to
              thousands of clients with 99.9% uptime and automated
              reconciliation for MFI operations.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                Single payout processing in under 3 seconds for urgent
                disbursements
              </li>
              <li>Bulk payout capability for group lending and SHG payments</li>
              <li>
                Supports for IMPS, NEFT, RTGS, UPI, and mobile wallet transfers
              </li>
              <li>
                Real-time status updates and webhook notifications for loan
                officers
              </li>
              <li>Automated EMI collection and repayment processing</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="relative border-r-2 border-indigo-500 pl-6 space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Payment Links & Digital Collection Tools
            </h3>
            <p className="text-gray-600 mb-3">
              Generate secure payment links for loan repayments, EMI
              collections, and emergency disbursements. Enable QR-based payments
              for seamless customer experience in rural and urban microfinance
              operations
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Customizable payment link generation for EMI collections</li>
              <li>QR code payments for field collection agents(coming soon)</li>
              <li>Multi-language support for diverse customer base</li>
              <li>
                Real-time status updates and webhook notifications for loan
                officers
              </li>
              <li>Automated EMI collection and repayment processing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="relative border-l-2 border-indigo-500 pl-6 space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Bank-Grade Security & MFI Compliance
            </h3>
            <p className="text-gray-600 mb-3">
              Enterprise security with end-to-end encryption, RBI compliance,
              and advanced fraud detection specifically designed for regulated
              microfinance environments and financial inclusion requirements
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>256-bit SSL encryption for all transactions</li>
              <li>RBI and regulatory compliance for MFIs</li>
              <li>Advanced fraud detection for micro-lending</li>
              <li>Comprehensive audit trails for regulatory reporting</li>
              <li>Data protection compliance (GDPR, local regulations)</li>
            </ul>
          </div>
        </div>
      </section>
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <MicrofinanceFeaturesTabs />
      <ExpandableCards />
      <ExtraExpandableCards />
      <div className="flex justify-center px-4">
        <blockquote className="max-w-3xl text-center italic text-gray-700">
          “The mobile-first approach has revolutionized our field operations.
          Our loan officers can now process applications and collect repayments
          even in areas with poor network connectivity, increasing our
          operational efficiency by 60%.”
          <footer className="mt-3 text-sm font-semibold text-gray-900">
            – Branch Manager, Leading MFI in Rural India
          </footer>
        </blockquote>
      </div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            {features2.heading2}
          </h2>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Card 1 - spans 4 cols */}
            <div className="md:col-span-4 bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <img
                src={features2.points[0].imgSrc}
                alt={features2.heading2}
                className="w-20 h-20 p-3 bg-gray-50 rounded-2xl shadow-sm"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {features2.points[0].heading3}
                <p className="text-sm font-normal text-gray-600 my-2">
                  {features2.points[0].heading3Para}
                </p>
              </h3>
              <ul className="space-y-2">
                {features2.points[0].features.map((f, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 - tall block, spans 2 cols */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow hover:shadow-lg transition flex flex-col">
              <img
                src={features2.points[1].imgSrc}
                alt={features2.heading2}
                className="w-20 h-20 p-3 bg-gray-50 rounded-2xl shadow-sm"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {features2.points[1].heading3}
              </h3>
              <p className="text-sm font-normal text-gray-600 my-2">
                {features2.points[1].heading3Para}
              </p>
              <ul className="space-y-2">
                {features2.points[1].features.map((f, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3 - full width bottom row */}
            <div className="md:col-span-6 bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <img
                src={features2.points[2].imgSrc}
                alt={features2.heading2}
                className="w-20 h-20 p-3 bg-gray-50 rounded-2xl shadow-sm"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {features2.points[2].heading3}
              </h3>
              <p className="text-sm font-normal text-gray-600 my-2">
                {features2.points[2].heading3Para}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {features2.points[2].features.map((f, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Specialized Solutions for Every Microfinance Model
          </h2>

          {/* Glass Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, idx) => (
              <GlassCard key={idx} {...solution} />
            ))}
          </div>
        </div>
      </section>
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <FAQSection faqContent={faqContent} />
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Trusted by Leading Microfinance Institutions Worldwide
          </h2>

          {/* Testimonials Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="relative backdrop-blur-md bg-white/70 border border-gray-200 rounded-2xl shadow-lg p-8 flex flex-col hover:shadow-xl transition"
              >
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-blue-500 mb-4" />

                {/* Testimonial Text */}
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  “{t.quote}”
                </p>

                {/* Author */}
                <p className="text-sm font-semibold text-gray-900">
                  {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GetStarted
        heading="Connect with Our Microfinance Technology Experts"
        subHeading="Discover how our microfinance solution can transform your institution's operations and extend your financial inclusion impact."
        btn1="Request Demo"
        btn4="Get Pricing"
        pricingKey="Micro Finance"
      />
    </>
  );
};

export default Microfinance;


 