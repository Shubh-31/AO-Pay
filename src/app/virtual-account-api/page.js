import { ExploreProducts } from "@/components/ExploreProducts";
import { Button } from "@/components/ui/button";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import {
  FeaturesSection,
  PaymentHead,
  BenefitsSection,
  GetStarted,
} from "@/sections/mySection";
import { StepsWithExplanation } from "@/sections/StepsWithExplanation";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Virtual Account API for Real-Time Payment Tracking | AOPAY",
  description:
    "Create unique virtual accounts for customers with AoPay's automated reconciliation. Simplify collections for e-commerce, lending, subscription businesses with instant notifications.",
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
    canonical: "https://aopay.in/virtual-account-api",
  },
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Virtual Account API | Automated Payment Reconciliation | AoPay",
    description:
      "Create unique virtual accounts with automated reconciliation and instant notifications.",
    url: "https://aopay.in/virtual-account-api",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/virtual-account-og.jpg",
        width: 1200,
        height: 630,
        alt: "AOPay Virtual Account",
      },
    ],
  },
};

const VirtualAccount = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/virtual-account-api",
    telephone: "011-42151216",

    description:
      "Cheapest Virtual Account API solution in India for automated collections, quick settlements, real-time reconciliation, and dedicated round-the-clock support.",

    knowsAbout: [
      "White Label Virtual Account Solution",
      "Virtual Account for NBFCs",
      "Virtual Account Provider Near Me",
      "Best Virtual Account Solution Provider in India",
      "Virtual Account with Real-time Settlement",
      "Virtual Account System for Small Businesses",
      "Virtual Account Solution for E-commerce",
      "Affordable Virtual Payment Account for Small Businesses",
      "Virtual Account with Lowest Fees in India",
      "Digital Virtual Account Services Provider",
      "Digital Virtual Account Solution for Local Businesses",
      "Dynamic Virtual Account Provider",
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
    title: "Virtual Account API for NEFT, IMPS & RTGS Payment Collections & Tracking",
    subTitle: `Revolutionize payment collection with AOPAY's Virtual Account Solution. Create dedicated virtual bank accounts for customers with instant reconciliation and automated settlement tracking.`,
    imgSrc: "/assets/Banking/Virtual_Account/Virtual_Account_1.png",
    alt: "Virtual account API creating unique payment identifiers for automated reconciliation.",
    video: false,
    btn1: "Start Integration",
    btn1Link: "/contact-us",
  };
  const features = [
    {
      title: "Instant Virtual Bank Account Creation API",
      description:
        "Generate unique virtual account numbers instantly for each customer or transaction. Our virtual account solution supports major banks including HDFC, ICICI, SBI, Axis Bank and more with real-time account provisioning and immediate activation for payment collection.",
      buttons: ["Real-time Creation", "Multi-Bank Support"],
      imgSrc:
        "/assets/VirtualAccount/AOPAY Virtual Account Solution Features/Instant Virtual Bank Account Creation.png",
    },
    {
      title: "Automated Payment Reconciliation API",
      description:
        "Eliminate manual reconciliation with our intelligent matching system. Automatically match incoming payments to customer orders, invoices, or transactions with 99.9% accuracy. Real-time webhook notifications ensure instant payment confirmation.",
      buttons: ["Auto-matching", "Instant Webhooks"],
      imgSrc:
        "/assets/VirtualAccount/AOPAY Virtual Account Solution Features/Automated Payment Reconciliation API.png",
    },
    {
      title: "Real-time Payment Tracking & Analytics",
      description:
        "Monitor all virtual account transactions in real-time with comprehensive analytics dashboard. Track payment success rates, settlement timelines, customer payment patterns, and reconciliation status through our advanced reporting tool.",
      buttons: ["Live Dashboard", "Advanced Analytics"],
      imgSrc:
        "/assets/VirtualAccount/AOPAY Virtual Account Solution Features/Real-time Payment Tracking & Analytics.png",
    },
    {
      title: "Smart Notification & Webhook System",
      description:
        "Receive instant notifications for all payment events including successful collections, failed transactions, and reconciliation updates. Our webhook system supports custom retry logic and guaranteed delivery with 99.9% reliability.",
      buttons: ["Instant Alerts", "Guaranteed Delivery"],
      imgSrc:
        "/assets/VirtualAccount/AOPAY Virtual Account Solution Features/Smart Notification & Webhook System.png",
    },
    {
      title: "Flexible Settlement & Fund Management",
      description:
        "Configure custom settlement cycles - daily, weekly, or instant settlements based on your business needs. Automated fund transfers to your primary account with detailed settlement reports and transaction-level breakdowns.",
      buttons: ["Custom Cycles", "Instant Settlements"],
      imgSrc:
        "/assets/VirtualAccount/AOPAY Virtual Account Solution Features/Flexible Settlement & Fund Management.png",
    },
    {
      title: "Enterprise Security & Compliance",
      description:
        "Bank-grade security with end-to-end encryption, PCI DSS compliance, and RBI guidelines adherence. Advanced fraud detection, transaction monitoring, and secure API authentication ensure complete payment security.",
      buttons: ["PCI Compliant", "RBI Approved"],
      imgSrc:
        "/assets/VirtualAccount/AOPAY Virtual Account Solution Features/Enterprise Security & Compliance.png",
    },
  ];

  const benefits = [
    {
      description: "Working Professionals",
    },
    {
      description: "Small Businesses",
    },
    {
      description: "MSMEs",
    },
    {
      description: "Corporates",
    },
  ];

  const benefitsHeading = {
    heading: "Curated For Everyone",
    imgUrl: "/assets/Banking/Virtual_Account/Virtual_Account_2.png",
    alt: "Multi-currency virtual account API solution for businesses and marketplace platforms.",
  };

  
  const content = [
    {
      heading2:
        "AOPAY Virtual Account API: Performance Metrics You Should Monitor",
      points: [
        {
          heading3: "Instant Account Creation",
          heading3Para: "Generate virtual accounts within few seconds",
          imgSrc:
            "/assets/VirtualAccount/Benefits of Virtual Account API/Instant Account Creation.png",
        },

        {
          heading3: "100% Automated Reconciliation",
          heading3Para: "Eliminate manual payment matching processes",
          imgSrc:
            "/assets/VirtualAccount/Benefits of Virtual Account API/AutomatedReconciliation.png",
        },
        {
          heading3: "Improved Cash Flow",
          heading3Para: "Faster payment collection and settlement",
          imgSrc:
            "/assets/VirtualAccount/Benefits of Virtual Account API/Improved Cash Flow.png",
        },
        {
          heading3: "Bank-Grade Security",
          heading3Para: "Enterprise-level security and compliance",
          imgSrc:
            "/assets/VirtualAccount/Benefits of Virtual Account API/Instant Account Creation.png",
        },
        {
          heading3: "Real-time Insights",
          heading3Para: "Comprehensive payment analytics and reporting",
          imgSrc:
            "/assets/VirtualAccount/Benefits of Virtual Account API/Real-time Insights.png",
        },
        {
          heading3: "Easy Integration",
          heading3Para: "RESTful APIs with comprehensive documentation",
          imgSrc:
            "/assets/VirtualAccount/Benefits of Virtual Account API/Easy Integration.png",
        },
      ],
    },
  ];

  const Steps = [
    {
      heading2:
        "How AOPAY Virtual Account API Works for Payments & Collections",
      heading2Para:
        "4-Step Process to Automate Payment Collection and Reconciliation",
      steps: [
        {
          step1: "Create Virtual Account",
          step1Para:
            "Generate unique virtual account numbers for customers using our API. Instantly create dedicated accounts linked to specific transactions or customer IDs.",
          imgSrc:
            "/assets/VirtualAccount/How Virtual Account API Works/Create Virtual Account.png",
        },
        {
          step2: "Customer Payment",
          step2Para:
            "Customers make payments to their assigned virtual account using NEFT, RTGS, IMPS, or UPI transfers. All major banking channels are supported.",
          imgSrc:
            "/assets/VirtualAccount/How Virtual Account API Works/Customer Payment.png",
        },
        {
          step3: "Automatic Reconciliation",
          step3Para:
            "Our system automatically matches incoming payments to the correct transactions and sends real-time webhook notifications with payment details.",
          imgSrc:
            "/assets/VirtualAccount/How Virtual Account API Works/Automatic Reconciliation.png",
        },
        {
          step4: "Instant Settlement",
          step4Para:
            "Funds are automatically settled to your primary account based on configured settlement cycles with detailed transaction reports.",
          imgSrc:
            "/assets/VirtualAccount/How Virtual Account API Works/instant settlement.png",
        },
      ],
    },
  ];

  
  const contentWithHeadingsAndPoints = [
    {
      heading2: "Virtual Account API Use Cases for Businesses",
      heading2Para:
        "Discover how businesses across industries leverage Virtual Account for streamlined payment collection:",
      points: [
        {
          heading3: "E-commerce Order Payment Processing",
          heading3Para:
            "Create unique virtual accounts for each customer order. Allow customers to pay via bank transfer with automatic order confirmation and inventory updates upon payment receipt.",
          imgSrc:
            "/assets/VirtualAccount/Virtual Account API Use Cases/E-commerce Order Payments.png",
        },
        {
          heading3: "B2B Invoice Collection",
          heading3Para:
            "Generate virtual accounts for business invoices with automated reconciliation. Perfect for enterprises managing multiple client payments with varying settlement terms.",
          imgSrc:
            "/assets/VirtualAccount/Virtual Account API Use Cases/B2B Invoice Collection.png",
        },
        {
          heading3: "Educational Fee Collection",
          heading3Para:
            "Streamline student fee collection with dedicated virtual accounts for each student. Automatic fee reconciliation with student management systems and instant payment confirmations.",
          imgSrc:
            "/assets/VirtualAccount/Virtual Account API Use Cases/Educational Fee Collection.png",
        },
        {
          heading3: "Real Estate & Property Payment Processing",
          heading3Para:
            "Manage property bookings, EMI collections, and maintenance payments with individual virtual accounts. Automated tracking for property developers and management companies.",
          imgSrc:
            "/assets/VirtualAccount/Virtual Account API Use Cases/Real Estate & Property Payments.png",
        },
        {
          heading3: "Healthcare & Insurance",
          heading3Para:
            "Collect insurance premiums, treatment fees, and claims settlements with dedicated virtual accounts. Seamless integration with healthcare management systems.",
          imgSrc:
            "/assets/VirtualAccount/Virtual Account API Use Cases/Healthcare & Insurance.png",
        },
        {
          heading3: "Supply Chain & Logistics",
          heading3Para:
            "Automate vendor payments, freight collections, and COD settlements with virtual account-based payment processing. Perfect for logistics and delivery companies.",
          imgSrc:
            "/assets/VirtualAccount/Virtual Account API Use Cases/Supply Chain & Logistics.png",
        },
      ],
    },
  ];

  const linkContent = {
    headingContent: "Banking Solutions",
    url1: [
      {
        heading: "FD & Recurring Deposits",
        paragraph:
          "Make Easy & Safe Investments with Recurring Deposits & Fixed Deposits with competitive interest rates",
        link: "/fixed-recurring-deposits",
        icon: "/assets/ExploreProducts/Banking/FD&RD.png",
        alt: "FD & Recurring Deposits",
      },
    ],
    url2: [
      {
        heading: "CIBIL Credit Report",
        paragraph:
          "Check CIBIL Score Instantly & Monitor Financial Health for Better Financial Decisions",
        link: "/cibil-credit-report",
        icon: "/assets/ExploreProducts/Banking/CIBIL.png",
        alt: "CIBIL Credit Report",
      },
    ],
  };

    const metrics = [
      "99.9% API Uptime Guarantee",
      "Create Account Within Minutes",
      "100% Webhook Delivery Rate",
      "24/7 Support & Monitoring",
    ];

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PaymentHead headerSection={headerContent} />
      {/* <FeaturesSection
        features={features}
        heading="One Digital Account with Many Benefits"
      /> */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            AOPAY Virtual Account API Solution For Secure Payments
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
            Transform your payment collection process with India's most
            comprehensive virtual account management system. Enable seamless
            customer payments with automated reconciliation and real-time
            notifications.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <img
                  src={feature.imgSrc}
                  alt={feature.title}
                  className="w-6 mb-2"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
             
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <BenefitsSection benefits={benefits} benefitsHeading={benefitsHeading} /> */}
      <StepsWithExplanation Steps={Steps} />
      <section className="py-16 px-4 max-w-6xl mx-auto">
        {/* H2 Heading */}
        <h2 className="text-3xl md:text-3xl font-bold text-center mb-6">
          Virtual Account API Integration Guide for Businesses & Developers
        </h2>

        <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
          Developer-Friendly API Documentation. Integrate AOPAY's Virtual
          Account with our comprehensive RESTful API documentation. Support for
          multiple programming languages with ready-to-use code samples and
          SDKs.
        </p>

        {/* Key Integration Features */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Core Integration Features of AOPAY Virtual Account Solution
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              RESTful API Design: Standard HTTP methods for easy integration.
            </li>
            <li>
              Real-time Webhooks: Instant payment notifications and status
              updates.
            </li>
            <li>
              Multi-language SDKs: PHP, Python, Java, Node.js, and .NET support.
            </li>
            <li>
              Sandbox Environment: Complete testing environment before
              production.
            </li>
            <li>
              24/7 Technical Support: Dedicated integration assistance and
              troubleshooting.
            </li>
            <li>
              Detailed Documentation: Step-by-step integration guides with
              examples.
            </li>
          </ul>
        </div>

        {/* Code Example */}
        <div>
          <p className="text-xl font-semibold text-blue-900 mb-4">
            Virtual Account API Sample Code For Developers
          </p>
          <pre className="bg-gray-900 text-gray-100 p-5 rounded-xl overflow-x-auto text-sm leading-relaxed">
            <code>{`// Create Virtual Account
curl -X POST https://api.aopay.in/v1/virtual-accounts \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "customer_id": "CUST_001",
    "order_id": "ORD_12345",
    "amount": 1000.00,
    "currency": "INR",
    "description": "Order Payment",
    "webhook_url": "https://your-site.com/webhook",
    "expire_at": "2025-12-31T23:59:59Z"
  }'

// Response
{
  "id": "va_H6z4L8k9M2n3P4q5",
  "customer_id": "CUST_001",
  "account_number": "2224445556667778",
  "ifsc_code": "HDFC0000001",
  "bank_name": "HDFC Bank",
  "status": "active",
  "created_at": "2025-09-02T10:30:00Z"
}`}</code>
          </pre>
        </div>
      </section>
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow p-8 md:p-10 text-center border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-[#0a2540] mb-6">
              AOPAY Virtual Account API:{" "}
              <span className="text-blue-600">
                Performance Metrics You Should Monitor
              </span>
            </h2>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay ahead with our real-time performance monitoring and
              operational excellence indicators — designed to ensure
              reliability, speed, and consistent uptime.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
              {metrics.map((item, idx) => (
                <li
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContentWithDescriptivePoints content={content} />
      <GetStarted
        heading="Ready to Transform Your Payment Infrastructure?"
        subHeading="Join leading businesses using AOPAY's Virtual Account Solution for automated payment collection and instant reconciliation."
        btn1="Get API Now"
        btn2="View API Docs"
      />
      {/* <ExploreProducts linkContent={linkContent} /> */}
    </>
  );
};

export default VirtualAccount;
