import { ExploreProducts } from "@/components/ExploreProducts";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/cardContent";
import { CardHeader } from "@/components/ui/cardHeader";
import { CardTitle } from "@/components/ui/cardTitle";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import {
  FAQSection,
  GetStarted,
  PaymentHead,
  RechargeSection,
  ToolsSection,
} from "@/sections/mySection";
import { PayOutUseCases } from "@/sections/PayOutAPIUseCases";
import RechargeApiSection from "@/sections/RechargeAPI";

import Script from "next/script";

export const metadata = {
  title: "PayOut API | Instant Bulk Payment & Disbursement Solution | AoPay",
  description:
    "Enable instant vendor payments, salary transfers, and refunds with real-time tracking.",
  keywords:
    "Online Recharge & Bill Payment, Online Bill Payment Solutions, Online Recharge, Online Mobile Recharge, Online Utility Bill Payment, Online Payment Gateway, Online Digital Payments, Online Bill Pay API, Online Recharge Solutions, Online Recharge & Bill Payment App, Online FasTag Recharge, Online LPG Gas Bill Payment, Online Water Bill Payment, Online Internet Bill Payment, Online LPG Cylinder Bill Payment, UPI Payment, Online Electricity Bill Payment, Online DTH Recharge, Online Internet Recharge, Online Municipal Bill Payment, Online Loan EMI Payment, Online Challan Payment, Online Mobile Postpaid Bill Payment, Online Prepaid Mobile Bill Payment, Online Insurance Payment, Online Education Fee Payment, Book Online Gas Cylinder, Online Broadband Bill Payment, Online Landline Bill Payment, Online Apartment Payment, Online TV Payment, Online Piped Gas Payment, Online IGL Gas Payment, Online Credit Card Bill Payment, Online Gold Payment, Online Muncipal Tax Payment, Online Metro Card Recharge, Online rent Payment, Online Hospital Bill Payment, Online Donation, Online Gift Cards, Online Google Play Recharge, Online Co-living-Spaces Payment, Online Co-Working-Spaces Payment, Mobile Recharge API, Bill Payment Solutions, Instant Recharge, DTH Recharge, Telecom Recharge Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/payouts-api",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "PayOut API | Instant Bulk Payment & Disbursement Solution | AoPay",
    description:
      "Enable instant vendor payments, salary transfers, and refunds with real-time tracking.",
    url: "https://aopay.in/payouts-api",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/payouts-api-og.jpg",
        width: 1200,
        height: 630,
        alt: "Recharge and Bill Payment Banner",
      },
    ],
  },
};

const RechargeAndBill = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/payouts-api",
    telephone: "011-42151216",

    description:
      "Cheapest Payout Solution provider in India offering fast, secure bulk payouts with easy integrations, instant settlements, automated transfers, and 24/7 local support.",

    knowsAbout: [
      "White Label Payout Solution",
      "Online Payout Solution",
      "Payout API Provider Near Me",
      "Best Payout API Solution Provider in India",
      "Employee Digital Payout Services",
      "Payout System for Small Businesses",
      "Online Bulk Payout Solution",
      "Affordable Payout for Small Businesses",
      "Payout with Lowest Transaction Fees in India",
      "Auto Payout Services Provider",
      "Digital Payout Solution for Local Businesses",
      "Vendor Payout Service",
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
    title: "Fast & Secure PayOut API Solution For Vendors & Businesses",
    subTitle:
      "Secure and fast payout solution for sending Single Payouts, Bulk Payouts & Payout Links to bank accounts and wallets. Transform your payment processing with AOPAY comprehensive Payout API integration.",
    imgSrc: "/assets/Payout/payout.png",
    alt: "Mobile recharge and bill payment API integration dashboard showing instant transaction processing.",
    video: false,
    btn1: "Get Started Today",
    btn1Link: "/contact-us",
  };

  const toolsContent = {
    imgSrc: "/assets/Payments/Recharge_&_Bill/Recharge_2.png",
    alt: "Comprehensive bill payment API solution for electricity, gas, water and telecom services.",
    content: [
      {
        icon: "/assets/Payments/Recharge_&_Bill/Never_Miss_Payment.png",
        title: "Never miss a payment again with Auto Pay & Reminders. ",
        description:
          "Set up Auto Pay, schedule reminders, or make a payment with just one tap – all within the convenience of AOPay App. Stay on top of your bills effortlessly.",
      },
      {
        icon: "/assets/Payments/Recharge_&_Bill/Automatic_Payment.png",
        title: "Automatic Payments",
        description:
          "Simply set up instructions in your AOPay App, and we'll ensure your payments are made on time, every time. Enjoy peace of mind, knowing your bills are taken care of effortlessly.",
      },
      {
        icon: "/assets/Payments/Recharge_&_Bill/Payment_Reminder.png",
        title: "Get Payment Reminders",
        description:
          "Stay on top of your payments with timely reminders from AOPay App. We’ll notify you about upcoming payments, so you never miss a due date.",
      },
      {
        icon: "/assets/Payments/Recharge_&_Bill/1_Tap_Pay.png",
        title: "1 Tap Payment",
        description:
          "Pay your bills effortlessly with just one tap on AOPay App using your linked bank account. Simple, secure, & fast.",
      },
    ],
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2: "AOPAY Automated Payout API Solutions For Business",
      heading2Para:
        "Our payment solution provides everything you need for seamless payment processing. From single transactions to mass payouts, our API handles all your business requirements with enterprise-grade security and reliability. From single transactions to mass payouts, our API handles all your business requirements with enterprise-grade security and reliability.",
      points: [
        {
          heading3: "Single PayOut API",
          heading3Para:
            "Process individual payments instantly with our single payout solution. Perfect for customer refunds, vendor payments, and one-time transactions to bank accounts and digital wallets.",
          imgSrc:
            "/assets/PayoutApiIcons/PayOut API icons of page IMAGES All/Single PayOut API.png",
        },
        {
          heading3: "Bulk PayOut API",
          heading3Para:
            "Handle mass payments efficiently with our bulk payout solution. Ideal for payroll disbursements, seller payments, and large-scale financial operations with batch processing capabilities.",
          imgSrc:
            "/assets/PayoutApiIcons/PayOut API icons of page IMAGES All/Bulk PayOut API.png",
        },
        {
          heading3: "PayOut Link API",
          heading3Para:
            "Generate secure payment links with our payout link solution. Allow recipients to receive funds through customizable payment links sent via email, SMS, or messaging platforms.",
          imgSrc:
            "/assets/PayoutApiIcons/PayOut API icons of page IMAGES All/PayOut Link API.png",
        },
        {
          heading3: "Bank PayOut API",
          heading3Para:
            "Direct bank account transfers with our bank payout solution. Support for multiple banking networks, real-time processing, and comprehensive transaction tracking.",
          imgSrc:
            "/assets/PayoutApiIcons/PayOut API icons of page IMAGES All/Bank PayOut API.png",
        },
        {
          heading3: "UPI PayOut API",
          heading3Para:
            "Leverage India's Unified Payments Interface with our upi payout solution. Instant transfers, 24/7 availability, and seamless integration with UPI ecosystem.",
          imgSrc:
            "/assets/PayoutApiIcons/PayOut API icons of page IMAGES All/UPI PayOut API.png",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2:
        "Automate Business Transactions with AOPAY Payout API Integration",
      // heading2Para:
      //   "AOPAY's API ecosystem covers every digital payment need for Indian consumers and businesses:",
      points: [
        {
          heading3: "Instant PayOut API Processing",
          heading3Para:
            "Real-time payment processing with AOPAY instant payout solution ensures immediate fund transfers and enhanced user experience.",
          imgSrc:
            "/assets/PayoutApiIcons/the icons/Instant PayOut API Processing.png",
        },
        {
          heading3: "Secure & Compliant",
          heading3Para:
            "Bank-grade security, PCI DSS compliance, and advanced fraud detection protect every transaction.",
          imgSrc: "/assets/PayoutApiIcons/the icons/Secure & Compliant.png",
        },
        {
          heading3: "Developer-Friendly",
          heading3Para:
            "Comprehensive payout documentation, SDKs, and developer tools for quick integration.",
          imgSrc: "/assets/PayoutApiIcons/the icons/Developer-Friendly.png",
        },
        {
          heading3: "Scalable Infrastructure",
          heading3Para:
            "Handle millions of transactions with AOPAY secure payment infrastructure designed for enterprise scalability.",
          imgSrc:
            "/assets/PayoutApiIcons/the icons/scalable infrastructure.png",
        },
        {
          heading3: "24/7 Support",
          heading3Para:
            "Round-the-clock technical support and dedicated account management for all our clients.",
          imgSrc: "/assets/PayoutApiIcons/the icons/247 Support.png",
        },
        {
          heading3: "Competitive Pricing",
          heading3Para:
            "Transparent pricing structure with no hidden fees. Best rates in the market.",
          imgSrc: "/assets/PayoutApiIcons/the icons/Competitive Pricing.png",
        },
      ],
    },
  ];

  const steps = [
    {
      title: "Sign Up",
      description: "Create your PayOut API account and get API credentials.",
      imgSrc:
        "/assets/PayoutApiIcons/Quick Integration Steps icons/Sign Up.png",
    },
    {
      title: "API Keys",
      description:
        "Generate secure API keys for sandbox and production environments.",
      imgSrc:
        "/assets/PayoutApiIcons/Quick Integration Steps icons/API Keys.png",
    },
    {
      title: "Test",
      description:
        "Use our sandbox environment to test PayOut API functionality.",
      imgSrc: "/assets/PayoutApiIcons/Quick Integration Steps icons/Test.png",
    },
    {
      title: "Go Live",
      description: "Deploy your PayOut API integration to production.",
      imgSrc:
        "/assets/PayoutApiIcons/Quick Integration Steps icons/Go Live.png",
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is PayOut API and how does it work?",
        answer:
          "PayOut API is a secure payment processing solution that enables businesses to send Single PayOuts, Bulk Payouts, and PayOut Links to bank accounts and digital wallets. It works through RESTful API calls that process payments in real-time.",
      },
      {
        question: "Which payment methods does the Best PayOut API support?",
        answer:
          "Our payout solution supports bank transfers, UPI payments, digital wallets, and international wire transfers. We provide comprehensive coverage for domestic and global payment processing.",
      },
      {
        question: "How secure is the Payout integration?",
        answer:
          "Our PayOut API uses bank-grade security with 256-bit SSL encryption, PCI DSS compliance, multi-factor authentication, and advanced fraud detection systems to ensure maximum security for all transactions.",
      },
      {
        question: "What industries benefit most from Payout Solution?",
        answer:
          "FinTech companies, e-commerce platforms, marketplaces, payroll services, insurance companies, gig economy platforms, and NBFCs benefit significantly from AOPAY Payout Solution for bulk payment processing.",
      },
      {
        question: "How long does PayOut API integration take?",
        answer:
          "With AOPAY comprehensive API Documentation and developer tools, most integrations can be completed within 2-3 business days. Our technical team provides full support throughout the integration process.",
      },
    
    ],
  };

  const linkContent = {
    headingContent: "Payment Solutions",
    url1: [
      {
        heading: "Money Transfer",
        paragraph:
          "Transfer money to friends, families & others, anytime & anywhere",
        link: "/money-transfer-api",
        icon: "/assets/ExploreProducts/Payment/DMT.png",
        alt: "Money Transfer",
      },
    ],
    url2: [
      {
        heading: "AEPS",
        paragraph:
          "Access Banking Services: Cash Withdrawals, Deposits, & Balance Inquiries with AEPS Service",
        link: "/aeps-api",
        icon: "/assets/ExploreProducts/Payment/AEPS.png",
        alt: "AEPS",
      },
    ],
    url3: [
      {
        heading: "Payment Gateway",
        paragraph:
          "Make online payments for Purchases, Subscriptions, Travel, Entertainment & Donation securely",
        link: "/payment-gateway",
        icon: "/assets/ExploreProducts/Payment/PaymentGateway.png",
        alt: "Payment Gateway",
      },
    ],
    url4: [
      {
        heading: "UPI & QR Payment",
        paragraph:
          "Pay & Collect Payment with QR codes for instant, contactless transactions at stores, online, & more",
        link: "/upi-qr-payment",
        icon: "/assets/ExploreProducts/Payment/UPI&QR.png",
        alt: "UPI & QR Payment",
      },
    ],
  };

  return (
    <>
      <Script
        id="aopay-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PaymentHead headerSection={headerContent} />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />

      <PayOutUseCases />
      <section className="py-16 px-6 max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Payout API Documentation and Integration Guide
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Get started quickly with our comprehensive API Docs and integration
          guides. Our API Documentation includes code samples, SDKs, and
          step-by-step tutorials.
        </p>

        {/* Quick Integration Steps */}
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
          Quick Integration Steps
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-2xl p-6 flex flex-col items-center text-center border border-gray-100"
            >
              <img
                src={step.imgSrc}
                alt={step.title}
                className="w-8 mb-2 mx-auto"
              />
              <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Supported Languages */}
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-16 mb-4 text-center">
          Payout API Compatibility: Supported Programming Languages
        </h3>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          AOPAY PayOut Solution supports all major programming languages
          including{" "}
          <span className="font-medium">
            PHP, Python, Node.js, Java, .NET, Ruby,
          </span>{" "}
          and more with comprehensive SDKs and code examples.
        </p>
      </section>
      <FAQSection faqContent={faqContent} />
      <GetStarted
        heading="Ready to Transform Your Payment Processing with AOPAY Payout Solution?"
        subHeading="Join thousands of businesses already using AOPAY Payout Solution for their payment processing needs. Get started with AOPAY Payout integration today."
        btn1="Request Demo"
        btn2="View Documentation"
      />
      {/* <ExploreProducts linkContent={linkContent} /> */}
    </>
  );
};

export default RechargeAndBill;
