import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import { FAQSection, GetStarted, PaymentHead } from "@/sections/mySection";
import React from "react";
import {CheckCircle2 } from "lucide-react";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import Script from "next/script";
import Image from "next/image";
import SecondaryFeatures from "@/sections/CooperativeSociety/SecondaryFeatures";


export const metadata = {
  title: "Credit Co-Operative Society Solution with Core Features | AOPAY",
  description:
    "Explore AOPay's Credit Cooperative Society solution. Perfect for Cooperatives, Community Finance. Streamline operations with our comprehensive financial management software.",
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
    canonical: "https://aopay.in/credit-cooperative-society-software",
  },
  openGraph: {
    title: "Credit Cooperative Society | AOPay",
    description:
      "Credit Cooperative Society by AOPay - Designed for Cooperatives, Community Finance. Comprehensive financial management & payment solutions.",
    url: "https://aopay.in/credit-cooperative-society-software",
    siteName: "AOPay",
    locale: "en_IN",
    images: [
      {
        url: "https://aopay.in/images/credit-cooperative-society-software.jpg",
        width: 800,
        height: 600,
        alt: "AOPAY Open Graph Image",
      },
    ],
    twitter: {
      card: "summary_large_image",
      title: "Credit Cooperative Society | AOPay",
      description:
        "Credit Cooperative Society by AOPay - Designed for Cooperatives, Community Finance. Comprehensive financial management & payment solutions.",
      images: ["https://aopay.in/images/microfinance-software.jpg"],
    },
    type: "website",
  },
};


const CreditCooperativeSociety = () => {


    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "AOPAY Technology Pvt. Ltd.",
      url: "https://aopay.in/credit-cooperative-society-software",
      telephone: "011-42151216",
      description:
        "Cheapest Credit Cooperative Society Software in India providing secure, automated solutions for loans, deposits, member management, and compliance.",
      serviceType: [
        "White Label Credit Cooperative Society Software Solution",
        "Cloud based Credit Society Software Solution",
        "Credit Cooperative Society Software Near Me",
        "Best Credit Cooperative Society Software Solution Provider in India",
        "Credit Cooperative Employee Management Software",
        "SaaS Cooperative Society Management Software",
        "Digital Cooperative Society Management Software Solution",
        "Affordable Credit Cooperative Society Software",
        "Cooperative Banking Software in India",
        "Auto Cooperative Society Software Provider",
        "Credit Cooperative deposit and loan management Software with KYC",
        "Digital Credit Union Software with member tracking",
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
      "Credit Co-Operative Society Software Solution with Banking & Lending Features",
    subTitle:
      "Complete Digital Banking Solution for Credit Cooperatives with Secure Payments, Member Management & Loan Processing.",
    imgSrc: "/assets/NidhiBanking/NID SAHYOG DASH BOARD RE DESING.jpg",
    alt: "Multi-channel payment gateway API supporting credit cards, debit cards and digital wallets.",
    btn1: "Request Free Demo",
    btn1Link: "/contact-us",
    btn2: "Try Now",
    btn2Link: "/contact-us",
    video: false,
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Credit Cooperative Society Software with Source Code License",
      heading2Para:
        "Get complete control over your cooperative banking with our comprehensive source code solution designed specifically for credit cooperative societies, employee credit unions, and multi-state cooperative organizations.",
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
            "Access regular platform updates and enhancements to keep your credit cooperative society solution at peak performance and regulatory compliance..",
        },
      ],
     
    },
  ];

  const CoopFeatures = {
    heading2:
      "Comprehensive Credit Cooperative Society Management Software Features",
    heading2Para:
      "Launch your digital cooperative banking services faster with our out-of-the-box features designed for exceptional member service and operational efficiency.",
    sections: [
      {
        imgSrc:
          "/assets/CreditCooperativeSociety/Comprehensive Features for Credit Cooperative Management/Member Onboarding & KYC.png",
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
        imgSrc:
          "/assets/CreditCooperativeSociety/Comprehensive Features for Credit Cooperative Management/Financial Transactions & Payment Processing.png",
        h3: "Financial Transactions & Payment Processing",
        h4: "Comprehensive Transaction Management",
        items: [
          "Member deposit top-ups and withdrawal processing",
          "Secure payment gateway operations with pre-integrated vendors",
          "Internal cooperative member transfers and payments",
          "Payment link generation for loan collections",
          "QR-code payment collection",
          "Automated refund and chargeback management",
        ],
      },
      {
        imgSrc:
          "/assets/CreditCooperativeSociety/Comprehensive Features for Credit Cooperative Management/Anti-Money Laundering & Fraud Prevention.png",
        h3: "Anti-Money Laundering & Fraud Prevention",
        h4: "Advanced Security Features",
        items: [
          "Real-time identification of suspicious transactions",
          "Member confirmation system to exclude fraudulent activities",
          "Income proof collection for AML compliance",
          "Account freeze/unfreeze capabilities when necessary",
          "Complete case management and resolution tracking",
        ],
      },
      {
        imgSrc:
          "/assets/CreditCooperativeSociety/Comprehensive Features for Credit Cooperative Management/Built-in CRM for Member Relationship Management.png",
        h3: "Built-in CRM for Member Relationship Management",
        h4: "Complete Member Management",
        items: [
          "Centralized member details and activity tracking",
          "Direct communication tools for member engagement",
          "In-system messaging service for member support",
          "Comprehensive member notes and history",
          "Loan application and approval workflow management",
        ],
      },
      {
        imgSrc:
          "/assets/CreditCooperativeSociety/Comprehensive Features for Credit Cooperative Management/Comprehensive Activity Logging.png",
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
      heading2: "Credit Cooperative Software for Your Organization's Success",
      heading2Para:
        "Create powerful QR Code Payment experiences with dynamic QR generation, Bharat QR compliance, and contactless payment solutions.",
      points: [
        {
          imgSrc:
            "/assets/CreditCooperativeSociety/Credit Cooperative Software for Your Organization's Success/Attract & Retain Members.png",
          heading3: "Attract & Retain Members",
          heading3Para:
            "Acquire and retain cooperative members through customizable contracts and competitive pricing plans. Target specific demographics and increase revenue from enhanced member lifetime value and transaction fees.",
        },
        {
          imgSrc:
            "/assets/CreditCooperativeSociety/Credit Cooperative Software for Your Organization's Success/Boost Member Retention.png",
          heading3: "Boost Member Retention",
          heading3Para:
            "Access comprehensive member information from transaction history to login patterns. Exceed member expectations by quickly resolving requests and anticipating their financial needs.",
        },
        {
          imgSrc:
            "/assets/CreditCooperativeSociety/Credit Cooperative Software for Your Organization's Success/Empower Your Team.png",
          heading3: "Empower Your Team",
          heading3Para:
            "Your cooperative staff will appreciate the intuitive admin interface with user-friendly dashboards designed to handle routine banking tasks efficiently and effectively.",
        },
        {
          imgSrc:
            "/assets/CreditCooperativeSociety/Credit Cooperative Software for Your Organization's Success/Maximize Cooperative Revenue.png",
          heading3: "Maximize Cooperative Revenue",
          heading3Para:
            "Effectively monetize each member segment using highly customizable transaction fees, loan interest structures, and service limits tailored to your cooperative's business model.",
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
    heading2: "Monetize Your Credit Cooperative Operations with AOPAY",

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
          "Automated company liability reconciliation",
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
      heading2: "End-to-End Digital Banking Solution for Rapid Deployment",

      points: [
        {
          imgSrc:
            "/assets/CreditCooperativeSociety/End-to-End Digital Banking Solution for Rapid Deployment/Source Code License Available.png",
          heading3: "Source Code License Available",
          heading3Para:
            "Gain complete control over your cooperative banking solution by acquiring the source code license for maximum flexibility and elimination of ongoing subscription fees.",
        },
        {
          imgSrc:
            "/assets/CreditCooperativeSociety/End-to-End Digital Banking Solution for Rapid Deployment/API-First Architecture.png",
          heading3: "API-First Architecture",
          heading3Para:
            "Access 470+ REST APIs to seamlessly integrate the software into your existing cooperative systems and connect essential third-party financial services.",
        },
        {
          imgSrc:
            "/assets/CreditCooperativeSociety/End-to-End Digital Banking Solution for Rapid Deployment/Affordable Subscription Model.png",
          heading3: "Affordable Subscription Model",
          heading3Para:
            "Get full platform functionality available in the cloud, ready to deploy quickly at a reasonable cost structure that fits cooperative budgets.",
        },
      ],
    },
  ];

  const content = [
    {
      heading2: "Digital Banking Software for All Types of Credit Cooperatives",
      heading2Para:
        "Whether you serve urban professionals, agricultural communities, or industrial employees, our solution provides the foundation for modern cooperative banking services.",
      points: [
        {
          imgSrc:
            "/assets/CreditCooperativeSociety/Digital Banking Software for All Types of Credit Cooperatives/Urban Credit Cooperatives.png",
          heading3: "Urban Credit Cooperatives",
          heading3Para:
            "Build comprehensive digital banking services for urban credit societies with advanced loan management, investment tracking, and member services",
      
        },

        {
          imgSrc:
            "/assets/CreditCooperativeSociety/Digital Banking Software for All Types of Credit Cooperatives/Employee_Industrial Credit Societies.png",
          heading3: "Employee/Industrial Credit Societies",
          heading3Para:
            "Create specialized solutions for employee credit cooperatives with payroll integration, salary-based lending, and corporate banking features.",
        
        },
        {
          imgSrc:
            "/assets/CreditCooperativeSociety/Digital Banking Software for All Types of Credit Cooperatives/Agricultural_Rural Credit Cooperatives.png",
          heading3: "Agricultural/Rural Credit Cooperatives",
          heading3Para:
            "Develop rural-focused banking solutions with seasonal loan products, agricultural insurance integration, and mobile-first member access.",
     
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
      <section className="py-20 px-6 bg-gray-50 relative">
        <div className="max-w-5xl mx-auto">
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
                  {/* Timeline Marker */}
                  <div className="absolute left-[10px] md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-green-600 border-4 border-white shadow-md"></div>

                  {/* Image */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                      src={section.imgSrc}
                      alt={section.h3}
                      width={500}
                      height={320}
                      className="rounded-2xl object-contain"
                    />
                  </div>

                  {/* Text Content */}
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

      <SecondaryFeatures />
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-100 via-white to-gray-200 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gray-400 opacity-20 blur-3xl rounded-full"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Glass Card */}
          <div className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-2xl rounded-3xl p-10">
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              White-Label Mobile Banking App for Cooperative Members
            </h2>

            {/* Description */}
            <div className="text-lg md:text-xl text-gray-700 space-y-4 mb-10">
              <p>
                Provide your cooperative members with a customizable mobile
                banking application that includes all essential functionalities
                for modern financial services.
              </p>
            </div>

            {/* Button */}
            <a
              href="/contact-us"
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

      <FAQSection faqContent={faqContent} />
      <GetStarted
        heading="Connect with Our Cooperative Banking Experts"
        subHeading="Discover how our Credit Cooperative Society Solution platform aligns with your organization's specific needs and regulatory requirements."
        btn1="Schedule Consultation"
        btn4="Get Pricing"
        pricingKey="Credit Cooperative Society"
      />

      <section className="py-4 px-6 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          {/* H2 */}

          {/* H3 */}
          <h3
            className="mt-10 text-2xl font-semibold text-gray-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to transform your credit cooperative?
          </h3>
          <p
            className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Contact our specialists today to learn how we can help modernize
            your cooperative banking operations.
          </p>

          {/* CTA Buttons */}
        </div>
      </section>
    </>
  );
};

export default CreditCooperativeSociety;
