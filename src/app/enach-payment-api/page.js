import { ExploreProducts } from "@/components/ExploreProducts";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/cardContent";
import { CardHeader } from "@/components/ui/cardHeader";
import { CardTitle } from "@/components/ui/cardTitle";
import { CardWithFeature } from "@/sections/CardWithFeature";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import AutoSlidingCards from "@/sections/ENach/AutoSlidingCards";
import CompactPaymentHead from "@/sections/ENach/CompactPaymentHead";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import {
  FAQSection,
  FeaturesSection,
  GetStarted,
  PaymentHead,
  RechargeSection,
  ToolsSection,
} from "@/sections/mySection";
import { PayInUseCases } from "@/sections/PayInUseCases";
import { PayOutUseCases } from "@/sections/PayOutAPIUseCases";
import RechargeApiSection from "@/sections/RechargeAPI";

import Script from "next/script";

export const metadata = {
  title: "ENACH - Recurring Payment Collection Solution | AOPAY",
  description:
    "Simplify recurring payments with AoPay's E-NACH API. Automate EMI collections, subscription billing, mandate management with paperless authorization for lending and SaaS platforms.",
  keywords:
    "Online Recharge & Bill Payment, Online Bill Payment Solutions, Online Recharge, Online Mobile Recharge, Online Utility Bill Payment, Online Payment Gateway, Online Digital Payments, Online Bill Pay API, Online Recharge Solutions, Online Recharge & Bill Payment App, Online FasTag Recharge, Online LPG Gas Bill Payment, Online Water Bill Payment, Online Internet Bill Payment, Online LPG Cylinder Bill Payment, UPI Payment, Online Electricity Bill Payment, Online DTH Recharge, Online Internet Recharge, Online Municipal Bill Payment, Online Loan EMI Payment, Online Challan Payment, Online Mobile Postpaid Bill Payment, Online Prepaid Mobile Bill Payment, Online Insurance Payment, Online Education Fee Payment, Book Online Gas Cylinder, Online Broadband Bill Payment, Online Landline Bill Payment, Online Apartment Payment, Online TV Payment, Online Piped Gas Payment, Online IGL Gas Payment, Online Credit Card Bill Payment, Online Gold Payment, Online Muncipal Tax Payment, Online Metro Card Recharge, Online rent Payment, Online Hospital Bill Payment, Online Donation, Online Gift Cards, Online Google Play Recharge, Online Co-living-Spaces Payment, Online Co-Working-Spaces Payment, Mobile Recharge API, Bill Payment Solutions, Instant Recharge, DTH Recharge, Telecom Recharge Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/enach-payment-api",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "E-NACH API | Automated Recurring Payment Solution | AoPay",
    description:
      "Automate EMI collections and subscription billing with paperless e-mandate.",
    url: "https://aopay.in/enach-payment-api",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/enach-og.jpg",
        width: 1200,
        height: 630,
        alt: "Recharge and Bill Payment Banner",
      },
    ],
  },
};

const ENach = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "AOPAY Technology Pvt. Ltd.",
      url: "https://aopay.in/enach-payment-api",
      telephone: "011-42151216",

      description:
        "Cheapest E-NACH provider in India allowing businesses to automate recurring payments with secure mandates, instant processing, and round-the-clock support.",

      knowsAbout: [
        "White Label E-NACH Solution",
        "Secure Online E-NACH Payment Setup",
        "E-NACH Provider Near Me",
        "Best E-NACH Solution Provider in India",
        "E-NACH for subscription-based businesses",
        "E-NACH System for Small Businesses",
        "E-NACH for EMI collections",
        "Affordable E-NACH Solution for Small Businesses",
        "E-NACH with Lowest Transaction Fees in India",
        "Auto E-NACH Collection Provider",
        "E-NACH for utility bill payments and tuition fee collection",
        "Recurring Payment Solution via E-NACH",
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
    title: "E-NACH API for Auto Debit & Recurring Payments Management Solution",
    subTitle:
      "Automate EMI collections, subscription billing, and recurring payments with PCI DSS compliance and seamless integration, designed for businesses, NBFCs, banks, and fintech platforms.",
    imgSrc: "/assets/ENACH/ENACHDashboard.png",
    // alt: "Mobile recharge and bill payment API integration dashboard showing instant transaction processing.",
    // video: true,
    btn1: "Get Started Now",
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
      heading2: "AOPAY E-NACH API Solution For Automated Payments",
      heading2Para:
        "Explore our seamless Electronic National Automated Clearing House (E-NACH) solution through an interactive demo. Manage mandates automatically, track payments in real time, process bulk transactions, and enterprise-grade security designed for modern financial institutions.",
      points: [
        {
          heading3: "Automated Mandate Management",
          heading3Para:
            "Streamline mandate registration, modification, and cancellation processes with automated workflows. Handle both one-time and recurring payment mandates efficiently through our intuitive dashboard.",
          imgSrc:
            "/assets/ENACH/Enterprise E-NACH API for World-Class Financial Services/Automated Mandate Management.png",
        },
        {
          heading3: "Real-time Payment Processing",
          heading3Para:
            "Process EMI collections, subscription payments, and recurring transactions in real-time with instant status updates and comprehensive reporting capabilities.",
          imgSrc:
            "/assets/ENACH/Comprehensive E-NACH Solution Powered by AOPAY/Real-time Payment Processing.png",
        },

        {
          heading3: "Bulk Processing Engine",
          heading3Para:
            "Handle thousands of transactions simultaneously with our high-performance bulk processing system designed for enterprise-scale operations and financial institutions.",
          imgSrc:
            "/assets/ENACH/Comprehensive E-NACH Solution Powered by AOPAY/Bulk Processing Engine.png",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2: "Enterprise E-NACH API for World-Class Financial Services",
      // heading2Para:
      //   "AOPAY's API ecosystem covers every digital payment need for Indian consumers and businesses:",
      points: [
        {
          heading3:
            "AOPAY E-NACH & M-NACH Solutions for Businesses and Financial Institutions",
          heading3Para:
            "Empower NBFCs, microfinance institutions, banks, credit unions, and lending platforms with automated recurring payment capabilities. Our NACH API supports diverse business models including loan servicing, subscription billing, insurance premium collection, and membership fee automation.",
          imgSrc:
            "/assets/ENACH/Enterprise E-NACH API for World-Class Financial Services/Comprehensive FinTech Solutions for Financial Institutions.png",
        },
        {
          heading3: "Streamlined Recurring Payment Automation",
          heading3Para:
            "Maximize operational efficiency with customizable payment collection workflows. Offer frictionless EMI collection processes and secure automated clearing house services while maintaining full compliance with RBI guidelines and industry standards.",
          imgSrc:
            "/assets/ENACH/Enterprise E-NACH API for World-Class Financial Services/Streamlined Recurring Payment Automation.png",
        },
        {
          heading3: "Multi-Bank Integration & Pan-India Coverage",
          heading3Para:
            "Connect with major Indian banks and financial institutions through a single API. Support multiple payment frequencies, amount variations, and comprehensive mandate lifecycle management across the entire banking network.",
          imgSrc:
            "/assets/ENACH/Comprehensive E-NACH Solution Powered by AOPAY/Multi-Bank Integration & Pan-India Coverage.png",
        },
      ],
    },
  ];

  const steps = [
    {
      imgSrc:
        "/assets/ENACH/Enterprise-Scale E-NACH Performance/Uptime&Reliabilty.png",
      title: "99.9% API Uptime & Reliability",
    },
    {
      imgSrc:
        "/assets/ENACH/Enterprise-Scale E-NACH Performance/10M+ Mandates Processed Monthly.png",
      title: "10M+ Mandates Processed Monthly",
    },
    {
      imgSrc:
        "/assets/ENACH/Enterprise-Scale E-NACH Performance/100+ Integrated Bank Partners.png",
      title: "100+ Integrated Bank Partners",
    },
    {
      imgSrc:
        "/assets/ENACH/Enterprise-Scale E-NACH Performance/24_7 Real-time Processing & Support.png",
      title: "24/7 Real-time Processing & Support",
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question:
          "What is E-NACH and how does it work for recurring payments? ",
        answer:
          "E-NACH (Electronic National Automated Clearing House) is a payment system that facilitates automated recurring collections like EMI payments, subscription bills, and insurance premiums. It works by registering customer mandates with their banks, which then automatically debit the specified amounts on scheduled dates.",
      },
      {
        question:
          "How quickly can I integrate NACH API into my existing system?",
        answer:
          "With AOPAY's NACH Solution, integration typically takes 2-4 days depending on your system complexity. We provide comprehensive documentation, SDK support, sandbox environment, and dedicated technical support to ensure smooth integration.",
      },
      {
        question: "Which banks are supported by AOPAY NACH solution?",
        answer:
          "Our NACH solution connects with 100+ banks across India including all major public, private, and cooperative banks. This ensures maximum coverage for your customers and higher collection success rates.",
      },
      {
        question: "Is the NACH system compliant with RBI guidelines?",
        answer:
          "Yes, our NACH solution is fully compliant with RBI guidelines and regulations. We maintain all required security standards, provide comprehensive audit trails, and ensure adherence to data protection and customer consent requirements.",
      },
      {
        question:
          "What types of mandates can be processed through AOPAY solution?",
        answer:
          "AOPAY solutions supports both fixed and variable amount mandates, one-time and recurring payments, and various frequency options (monthly, quarterly, annually). We handle EMI collections, subscription billing, insurance premiums, utility bills, and more.",
      },
      {
        question: "What is the success rate for NACH transactions?",
        answer:
          "AOPAY NACH solution achieves industry-leading success rates of 85-95% depending on the sector and customer profile. We optimize success rates through intelligent retry mechanisms, optimal timing strategies, and comprehensive bank network coverage.",
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

  const features = [
    {
      icon: "/assets/Travel/Bus/Easy_Booking.png",
      title: "Smart Routing",
      description:
        "Intelligent payment routing to optimize success rates and minimize transaction costs across multiple payment processors.",
    },
    {
      icon: "/assets/Travel/Bus/Easy_Booking.png",
      title: "Recurring Payments",
      description:
        "Automated subscription billing, recurring payment processing, and flexible billing cycles with our PayIn API.",
    },
    {
      icon: "/assets/Travel/Bus/Easy_Booking.png",
      title: "Secure & Fast Payment Options",
      description:
        "Paying for your bus tickets is easy & secure with AOPay’s multiple payment options, including debit/credit cards, UPI, wallets, & net banking. Our encrypted payment system ensures your financial details are safe.",
    },
    {
      icon: "/assets/Travel/Bus/Easy_Booking.png",
      title: "Payment Analytics",
      description:
        "Comprehensive payment analytics, transaction insights, and business intelligence dashboards for data-driven decisions.",
    },
    {
      icon: "/assets/Travel/Bus/Easy_Booking.png",
      title: "Multi-currency Support",
      description:
        "Accept payments in 100+ currencies with real-time exchange rates and automatic currency conversion.",
    },
    {
      icon: "/assets/Travel/Bus/Easy_Booking.png",
      title: "Customizable Checkout",
      description:
        "White-label checkout pages, custom branding, and seamless user experience that matches your brand identity.",
    },
    {
      icon: "/assets/Travel/Bus/Easy_Booking.png",
      title: "Webhook Integration",
      description:
        "Real-time payment notifications, status updates, and event-driven integrations with your business systems.",
    },
  ];

  const steps2 = [
    {
      number: "1",
      title: "Sign Up",
      description: "Create your PayIn API account in minutes",
    },
    {
      number: "2",
      title: "Integrate",
      description: "Use our API docs for quick integration",
    },
    {
      number: "3",
      title: "Go Live",
      description: "Start accepting payments immediately",
    },
  ];

  const features2 = {
    heading2: "Supported Payment Methods",
    description:
      "Accept payments through 100+ payment methods with our comprehensive PayIn API integration. Provide your customers with flexible payment options and increase conversion rates.",
    points: [
      {
        heading3: "Credit Cards: Visa, Mastercard, Rupay",
        type: "list",
      },
      {
        heading3: "Debit Cards: All major debit cards",
        type: "list",
      },
      {
        heading3: "UPI: GPay, PhonePe, Paytm UPI",
        type: "list",
      },
      {
        heading3: "Wallets: Paytm, PhonePe, Amazon Pay",
        type: "list",
      },
      {
        heading3: "Net Banking: 100+ banks supported",
        type: "list",
      },
      {
        heading3: "BNPL: Buy Now Pay Later options",
        type: "list",
      },
    ],
  };

  const metrics = [
    { value: "99.9%", label: "Success Rate" },
    { value: "500ms", label: "Average Response Time" },
    { value: "10k", label: "Transactions/Second" },
    { value: "24/7", label: "System Monitoring" },
  ];

  const content = [
    {
      heading2: "M-NACH API: Automated Payment Collection Solution",
      heading2Para:
        "Transform your payment collection operations through intelligent automation and data-driven insights.",
      points: [
        {
          heading3: "Improved Collection Success Rates",
          heading3Para:
            "Achieve higher collection success rates through optimized payment timing, intelligent retry mechanisms, and comprehensive bank network coverage across India.",
          imgSrc:
            "/assets/ENACH/Maximize Collection Efficiency with E-NACH Automation/Improved Collection Success Rates.png",
        },

        {
          heading3: "Reduced Operational Costs",
          heading3Para:
            "Significantly reduce manual processing costs, eliminate paper-based workflows, and minimize human errors through end-to-end automation of recurring payment processes.",
          imgSrc:
            "/assets/ENACH/Maximize Collection Efficiency with E-NACH Automation/Reduced Operational Costs.png",
        },
        {
          heading3: "Enhanced Customer Experience",
          heading3Para:
            "Provide customers with seamless payment experiences through automated collections, timely notifications, and flexible mandate management options",
          imgSrc:
            "/assets/ENACH/Maximize Collection Efficiency with E-NACH Automation/Enhanced Customer Experience.png",
        },
      ],
    },
  ];

  const material = [
    {
      heading2:
        "Ready-to-Deploy NACH Infrastructure for Seamless Payment Collection",
      heading2Para:
        "AOPAY NACH solution includes pre-integrated bank connections, compliance frameworks, and comprehensive mandate management systems for immediate deployment.",
      points: [
        {
          heading3: "Accelerated Integration Timeline",
          heading3Para:
            "AOPAY NACH solution provides a streamlined integration path, allowing financial institutions to launch automated payment collection services within days rather than months.",
          imgSrc:
            "/assets/ENACH/Ready-to-Deploy/Accelerated Integration Timeline.png",
        },
        {
          heading3: "Flexible Deployment Models",
          heading3Para:
            "Choose from cloud-hosted SaaS solutions for rapid deployment for complete data control and regulatory compliance requirements.",
          imgSrc:
            "/assets/ENACH/Ready-to-Deploy/Flexible Deployment Models.png",
        },
        {
          heading3: "Comprehensive Compliance Support",
          heading3Para:
            "Built-in RBI compliance frameworks, automated regulatory reporting, and comprehensive audit trails ensure adherence to all Indian banking regulations and guidelines.",
          imgSrc:
            "/assets/ENACH/Ready-to-Deploy/Comprehensive Compliance Support.png",
        },
      ],
    },
  ];

  return (
    <>
      <Script
        id="aopay-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CompactPaymentHead headerSection={headerContent} />
      {/* <PaymentHead headerSection={headerContent} /> */}
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <AutoSlidingCards/>
   

      <ContentWithDescriptivePoints content={content} />
      <H2DescH3Desc contentWithDescription={material} />

      <FAQSection faqContent={faqContent} />

      <GetStarted
        heading="Ready to Automate Your Recurring Payment Collections?"
        subHeading="Connect with AOPAY NACH experts and discover how we can transform your payment collection operations. Start processing automated recurring payments today."
        btn1="Get Started Now"
        btn2="Schedule Demo"
      />
    </>
  );
};

export default ENach;
