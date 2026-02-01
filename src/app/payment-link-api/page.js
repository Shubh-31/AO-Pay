import { ExploreProducts } from "@/components/ExploreProducts";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import {
  PaymentHead,
  CreditScoreSection,
  VerificationFailure,
  QRPayments,
  GetStarted,
  FeaturesSection,
  FAQSection,
} from "@/sections/mySection";
import { StepsWithExplanation } from "@/sections/StepsWithExplanation";
import { ArrowRight, BookOpen, Video } from "lucide-react";
import Script from "next/script";
import { ArrowRightCircle } from "lucide-react";
import WhyChooseUPI from "@/sections/WhyChooseUPI";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { CardWithFeature } from "@/sections/CardWithFeature";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { HeadingSubheadingSection } from "@/sections/HeadingSubheadingSection";
import SolutionPaymentLink from "@/sections/SolutionPaymentLink";
import PaymentCollectionServices from "@/sections/PaymentCollectionServices";
import BusinessIntelligenceReporting from "@/sections/BusinessIntelligenceReport";
import Link from "next/link";

export const metadata = {
  title:
    "Create instant payment links with AoPay's no-code solution. Share via SMS, email, WhatsApp for quick payment collection. Perfect for e-commerce, freelancers, and service businesses",
  description:
    "Accept UPI payments instantly with AOPay QR Code solutions. Dynamic QR generation, real-time processing, multi-bank support. Perfect for merchants & businesses. Get started now.",
  keywords:
    "UPI payment gateway, QR code payments, UPI QR code generator, contactless payments, UPI integration, digital payments, AOPay UPI, merchant QR code, Secure Online Payments, Fast UPI Transfer, UPI Transactions, Instant Payments, UPI Money Transfer, Online Payments, UPI Payment App, UPI Payment Solutions, Quick Payment Solutions, Instant Bank Transfer, Digital Wallet UPI, Secure Transactions, UPI Bill Payment, Fast Payment System, Online UPI Transfer, Mobile UPI Payments, Instant Bill Payment, Easy UPI Payments, Pay with UPI, UPI Transfer System, UPI Platform, Secure Payment Gateway, UPI Network, UPI Payment Features, UPI for Businesses, Instant Payment Options, UPI Transaction Speed, Payment Solutions, Instant Fund Transfer, UPI Security, Digital Transactions, Online Money Transfer, Fast Online Payment, UPI Billing, UPI Payment Process, QR Code Payment Collection, Secure QR Payment, Digital Payment Collection, Instant QR Payments, Easy Payment Acceptance, Fast QR Payment, QR Payment System, Mobile Payment Collection, Digital Payment Gateway, Cashless Payment Solutions, Business Payment Collection, Digital Wallet QR, QR Payment App, QR CodeAcceptance, Instant Fund Collection, Payment Gateway QR Code, QR Code Transactions, QR Payment Method, Seamless Payment Collection, QR Payment Solutions, QR Code for Payments, Fast Payment Gateway, QR Payment Technology, QR Collection Solution, Contactless Transaction, Payment Collection App, Instant Payment Gateway, QR Payment Systems for Small Business, Simplified Payments.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/payment-link-api",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "Payment Link API | Generate Instant Payment Links | AoPay",
    description:
      "Create and share payment links via SMS, email, or WhatsApp. No coding required.",
    url: "https://aopay.in/payment-link-api",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/payment-link-og.jpg",
        width: 1200,
        height: 630,
        alt: "Online UPI Payment Banner",
      },
    ],
  },
};

const PaymentLink = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/payment-link-api",
    telephone: "011-42151216",

    description:
      "Cheapest Payment Link Solution in India helping businesses collect payments instantly with secure links, easy sharing, quick settlements, multiple payment modes, and 24/7 support.",

    knowsAbout: [
      "White Label Payment Link Solution",
      "Payment Link Service Provider Near Me",
      "Best Payment Link Solution Provider in India",
      "Digital Payment Link Services",
      "Payment Link System for Small Businesses",
      "Online Payment Link Generator Solution",
      "Affordable Payment Link for Small Businesses",
      "Payment Link with Lowest Transaction Fees in India",
      "Instant Payment Link Services",
      "QR Payment Link Services",
      "Recurring Payment Link Services",
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
    title: "Payment Link API - Streamlining Payment Collection Process",
    subTitle:
      "Integrate AOPAY Payment Link Solution to generate secure payment links, automate invoice collection, and accept payments through multiple channels. Perfect for businesses of all sizes looking to simplify their payment collection process.",
    imgSrc: "/assets/PaymentLink/Payment Link API FINAL.png",
    btn1: "Get Demo",
    btn1Link: "/contact-us",
    btn2: "Request API Access",
    btn2Link: "/contact-us",
    alt: "UPI payment API allowing instant peer-to-peer money transfers via mobile apps.",
    video: false,
  };

  const features = [
    {
      icon: "/assets/Payments/QR_Payment/Best_Success_Rate.png",
      title: "Best Success Rates",
      description:
        "Experience best success rate for payment using our solutions",
    },
    {
      icon: "/assets/Payments/QR_Payment/Multiple_UPI_Methods.png",
      title: "Allow Multiple UPI Methods",
      description:
        "Customers can Scan to Pay with their favourite UPI or bank app",
    },
    {
      icon: "/assets/Payments/QR_Payment/Developer_Friendly.png",
      title: "Developer Friendly",
      description: "One SDK to integrate Payment instrument including QR Code",
    },
  ];

  const qrIntent = {
    mainTitle: "QR Intent",
    imgSrc: "/assets/Payments/QR_Payment/QR_2.png",
    alt: "Dynamic QR code payment API for contactless merchant transactions and receipts.",
    content: [
      {
        description:
          "Customer selects his favourite UPI or Bank App to scan QR Code",
      },
      {
        description:
          "UPI app opens checkout page, customer enter the amount and clicks to pay",
      },
      {
        description: "Customer enters the PIN to complete the payment",
      },
      {
        description: "Payment is processed successfully",
      },
    ],
  };

  const qrCollect = {
    mainTitle: "QR Collect",
    imgSrc: "/assets/Payments/QR_Payment/QR_3.png",
    alt: "Unified payment interface API dashboard with transaction analytics and reporting.",
    content: [
      {
        description:
          "Merchant generates a dynamic QR code linked to the payment details during checkout.",
      },
      {
        description:
          "Customer opens their preferred UPI app and scans the merchant's QR code.",
      },
      {
        description:
          "UPI app sends a request with the payment amount and merchant details.",
      },
      {
        description:
          "Customer gets a notification with the payment details from their UPI app.",
      },
      {
        description:
          "Customer confirms the payment and ensures the details are correct within their UPI app.",
      },
      {
        description:
          "To authorize the payment, the customer enters their secure UPI PIN.",
      },
      {
        description:
          "Payment is successfully processed, and the customer is redirected back to the app or website.",
      },
    ],
  };

  const verificationContent1 = {
    para1:
      "AOPay’s cutting-edge technology ensures your QR Code payments are smooth, secure, and hassle-free. By using AOPay App, you'll not see any chances of payment failures, so you can confidently make payments through both static and dynamic QR codes. With AOPay, every transaction is processed reliably and quickly, ensuring a smooth and enjoyable payment experience every time. Whether you’re paying for goods or services, AOPay guarantees your QR Code payments are handled with the utmost efficiency and security.",

    imgUrl: "/assets/Payments/QR_Payment/QR_4.png",
    alt: "UPI collect request API system for seamless business payment collection.",
  };

  const verificationContent2 = {
    para1:
      "AOPay’s advanced technology ensures your QR Code payment collection process is secure, and hassle-free. By using the AOPay QR Code Payment Service, businesses— retail stores, restaurants, or service providers—can enjoy tension-free transactions, without worrying about chances of payment failures. Both static and dynamic QR codes are supported, allowing you to collect payments from customers. With AOPay, every payment is processed quickly and reliably, ensuring smooth transactions that improve the customer experience and facilitate your business operations. Trust AOPay to handle your QR Code payments with the highest level of efficiency and security.",

    imgUrl: "/assets/Payments/QR_Payment/QR_5.png",
    alt: "QR code generator API for retailers enabling quick digital payment acceptance.",
  };

  const linkContent = {
    headingContent: "Payment Solutions",
    url1: [
      {
        heading: "Recharge & Bill Payment",
        paragraph:
          "Do Recharges & Pay Bills for Utilities in few clicks, all at one place",
        link: "/recharge-bill-payment",
        icon: "/assets/ExploreProducts/Payment/BBPS.png",
        alt: "Recharge & Bill Payment",
      },
    ],
    url2: [
      {
        heading: "Money Transfer",
        paragraph:
          "Transfer money to friends, families & others, anytime & anywhere",
        link: "/money-transfer-api",
        icon: "/assets/ExploreProducts/Payment/DMT.png",
        alt: "Money Transfer",
      },
    ],
    url3: [
      {
        heading: "AEPS",
        paragraph:
          "Access Banking Services: Cash Withdrawals, Deposits, & Balance Inquiries with AEPS Service",
        link: "/aeps-api",
        icon: "/assets/ExploreProducts/Payment/AEPS.png",
        alt: "AEPS",
      },
    ],
    url4: [
      {
        heading: "Payment Gateway",
        paragraph:
          "Make online payments for Purchases, Subscriptions, Travel, Entertainment & Donation securely.",
        link: "/payment-gateway",
        icon: "/assets/ExploreProducts/Payment/PaymentGateway.png",
        alt: "Payment Gateway",
      },
    ],
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2: "AOPAY Payment Link API For Seamless Payment Collections",
      heading2Para:
        "AOPAY secure payment link infrastructure allows businesses to generate secure payment links instantly and collect payments through various channels. Whether you're a freelancer sending invoices or an enterprise managing bulk collections, our API provides the foundation for reliable payment processing.",
      points: [
        {
          heading3: "Instant Link Generation",
          heading3Para:
            "Create secure payment links in under 2 seconds with customizable amounts, descriptions, and expiry dates. Perfect for quick invoicing and payment requests.",
          imgSrc:
            "/assets/PaymentLink/Complete Payment Collection Solution/Complete Payment Collection Solution.png",
        },
        {
          heading3: "Multi-Channel Distribution",
          heading3Para:
            "Share payment links via email, SMS, WhatsApp, or any messaging platform. Customers can pay instantly without creating accounts or downloading apps.",
          imgSrc:
            "/assets/PaymentLink/Complete Payment Collection Solution/Multi-Channel Distribution.png",
        },
        {
          heading3: "Customizable Checkout Pages",
          heading3Para:
            "Brand your payment pages with custom logos, colors, and messaging. Create a seamless payment experience that matches your business identity.",
          imgSrc:
            "/assets/PaymentLink/Complete Payment Collection Solution/Customizable Checkout Pages.png",
        },
        {
          heading3: "Smart Payment Reminders",
          heading3Para:
            "Automate payment reminders and follow-ups through email and SMS. Reduce manual effort and improve collection rates with intelligent reminder sequences.",
          imgSrc:
            "/assets/PaymentLink/Complete Payment Collection Solution/Smart Payment Reminders.png",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2:
        "AOPAY Payment Solution: Scalable & Perfect For Every Business Type",
      heading2Para:
        "AOPAY versatile payment solution caters to diverse business needs across multiple industries and use cases.",
      points: [
        {
          heading3: "SMBs & Freelancers",
          heading3Para: "Quick invoicing and payment collection.",
          imgSrc:
            "/assets/PaymentLink/AOPAY Solution Perfect for Every Business Type/SMBs & Freelancers.png",
        },
        {
          heading3: "E-commerce Stores",
          heading3Para: "Cart abandonment recovery.",
          imgSrc:
            "/assets/PaymentLink/AOPAY Solution Perfect for Every Business Type/E-commerce Stores.png",
        },
        {
          heading3: "Educational Institutions",
          heading3Para: "Fee collection and course payments.",
          imgSrc:
            "/assets/PaymentLink/AOPAY Solution Perfect for Every Business Type/Educational Institutions.png",
        },
        {
          heading3: "Healthcare Clinics",
          heading3Para: "Appointment booking payments.",
          imgSrc:
            "/assets/PaymentLink/AOPAY Solution Perfect for Every Business Type/Healthcare Clinics.png",
        },
        {
          heading3: "Event Organizers",
          heading3Para: "Ticket sales and registrations.",
          imgSrc:
            "/assets/PaymentLink/AOPAY Solution Perfect for Every Business Type/Event Organizers.png",
        },
        {
          heading3: "Lending Companies",
          heading3Para: "EMI collection and loan disbursement.",
          imgSrc:
            "/assets/PaymentLink/AOPAY Solution Perfect for Every Business Type/Lending Companies.png",
        },
        {
          heading3: "Real Estate",
          heading3Para: "Property bookings and rent collection.",
          imgSrc:
            "/assets/PaymentLink/AOPAY Solution Perfect for Every Business Type/Real Estate.png",
        },
        {
          heading3: "NGOs & Donations",
          heading3Para: "Fundraising and donation collection.",
          imgSrc:
            "/assets/PaymentLink/AOPAY Solution Perfect for Every Business Type/NGOs & Donations.png",
        },
        {
          heading3: "Small Business Solutions",
          heading3Para:
            "Allow small businesses and freelancers to collect payments instantly with professional-looking payment links and automated invoicing capabilities.",
          imgSrc:
            "/assets/PaymentLink/AOPAY Solution Perfect for Every Business Type/Small Business Solutions.png",
        },
        {
          heading3: "E-commerce Integration",
          heading3Para:
            "Integrate with Shopify, WooCommerce, and other e-commerce platforms to recover abandoned carts and process one-time payments seamlessly.",
          imgSrc:
            "/assets/PaymentLink/AOPAY Solution Perfect for Every Business Type/E-commerce Integration.png",
        },
        {
          heading3: "Enterprise Solutions",
          heading3Para:
            "Support high-volume payment collection with bulk link generation, advanced reporting, and enterprise-grade security features.",
          imgSrc:
            "/assets/PaymentLink/AOPAY Solution Perfect for Every Business Type/Enterprise Solutions.png",
        },
        {
          heading3: "Fintech Platforms",
          heading3Para:
            "AOPAY payment link solution for fintech companies looking to offer payment collection services to their merchants and users.",
          imgSrc:
            "/assets/PaymentLink/AOPAY Solution Perfect for Every Business Type/Fintech Platforms.png",
        },
      ],
    },
  ];

  const Steps = [
    {
      heading2: "How UPI & QR Payment Processing Works",

      steps: [
        {
          step1: "Integration Setup",
          step1Para:
            "Integrate our UPI & QR API with simple REST endpoints, comprehensive SDKs, and detailed documentation for rapid deployment.",
        },
        {
          step2: "QR Code Generation",
          step2Para:
            "Generate dynamic QR codes with payment details, amounts, and merchant information using our secure QR generation engine.",
        },
        {
          step3: "Payment Processing",
          step3Para:
            "Customers scan QR codes or enter UPI IDs to initiate instant payments through their preferred UPI applications.",
        },
        {
          step4: "Real-time Settlement",
          step4Para:
            "Receive instant payment confirmations, status updates, and automated settlement to your designated bank accounts.",
        },
      ],
    },
  ];

  const content = [
    {
      heading2: "AOPAY Payment Links: Performance and Scalability",
      heading2Para:
        "Handle high-volume payment link generation and processing with confidence using our scalable infrastructure.",
      points: [
        {
          heading3: "High-Performance Processing",
          heading3Para:
            "Generate up to 10,000 payment links per minute with average response times under 2 seconds, ensuring your applications remain responsive during peak usage.",
          imgSrc:
            "/assets/PaymentLink/Performance & Scalability/High-Performance Processing.png",
        },

        {
          heading3: "Auto-Scaling Infrastructure",
          heading3Para:
            "Cloud-native architecture automatically scales to handle traffic spikes during sales events, promotional campaigns, and seasonal peaks.",
          imgSrc:
            "/assets/PaymentLink/Performance & Scalability/Auto-Scaling Infrastructure.png",
        },
      
      ],
    },
  ];


  const upiFeaturesData = {
    title:
      "AOPAY White Label Payment Link Solution: Key Features For Businesses",
    description:
      "Go beyond basic payment links with advanced features designed to optimize your payment collection process and improve customer experience.",
    sections: [
      {
        heading: "Smart Link Customization",
        points: [
          "Custom expiry dates and time-based validity",
          "Minimum and maximum payment amount restrictions",
          "Customer information collection forms",
        ],
        imgSrc:
          "/assets/PaymentLink/AOPAY Advanced Payment Link Solution Features/Smart Link Customization.png",
      },
      {
        heading: "Payment Method Flexibility",
        points: [
          "Accept credit cards, debit cards, and digital wallets",
          "Bank transfer and UPI payment options",
          "Buy now, pay later (BNPL) integration",
        ],
        imgSrc:
          "/assets/PaymentLink/AOPAY Advanced Payment Link Solution Features/Payment Method Flexibility.png",
      },
      {
        heading: "Payment Status & Monitoring",
        points: [
          "Real-time payment status updates",
          "Comprehensive transaction dashboards",
          "Success and failure analytics",
          "Customer payment behavior insights",
          "Automated reconciliation reports",
          "Webhook notifications for status changes",
        ],
        imgSrc:
          "/assets/PaymentLink/AOPAY Advanced Payment Link Solution Features/Payment Status & Monitoring.png",
      },
      {
        heading: "Intelligent Analytics",
        points: [
          "Real-time payment tracking and status monitoring",
          "Customer behavior analytics and payment patterns",
          "Conversion rate optimization insights",
          "Geographic payment distribution analysis",
        ],
        imgSrc:
          "/assets/PaymentLink/AOPAY Advanced Payment Link Solution Features/Intelligent Analytics.png",
      },
      {
        heading: "Automated Workflows",
        points: [
          "Scheduled payment link generation and distribution",
          "Automatic receipt generation and delivery",
          "Smart retry logic for failed payments",
          "Integration with CRM and accounting systems",
        ],
        imgSrc:
          "/assets/PaymentLink/AOPAY Advanced Payment Link Solution Features/Automated Workflows.png",
      },
    ],
  };

  const steps = [
    {
      title: "99.9% Transaction Success Rate",
    },
    {
      title: "2.7k Transactions Per Second (TPS)",
    },
    {
      title: "50M+ QR Codes Generated Daily",
    },
    {
      title: "24/7 Real-time Processing & Support",
    },
  ];

  const material = [
    {
      heading2: "AOPAY Payments Solution: Fast Implementation & Support",
      heading2Para:
        "Get your payment collection system operational quickly with our streamlined onboarding process and dedicated support team.",
      points: [
        {
          heading3: "Quick Integration Process",
          heading3Para:
            "Most integrations complete within 1-2 business days with our comprehensive documentation, testing tools, and responsive developer support.",
          imgSrc:
            "/assets/PaymentLink/Fast Implementation & Support/Quick Integration Process.png",
        },
        {
          heading3: "24/7 Technical Support",
          heading3Para:
            "Access round-the-clock technical assistance through multiple channels including email, chat, phone support, and dedicated channels for enterprise clients.",
          imgSrc:
            "/assets/PaymentLink/Fast Implementation & Support/24_7 Technical Support.png",
        },
        {
          heading3: "Dedicated Success Management",
          heading3Para:
            "Assigned customer success managers help optimize your payment collection strategy, provide best practices, and ensure maximum ROI from your integration.",
          imgSrc:
            "/assets/PaymentLink/Fast Implementation & Support/Dedicated Success Management.png",
        },
      ],
    },
  ];

  const HeadingSubheadings = [
    {
      heading2: "Grow Revenue with Smart Payment Processing",
      heading2Para:
        "Maximize your payment business profitability through intelligent fee structures, dynamic pricing models, and comprehensive merchant management tools.",
      points: [
        {
          heading3: "Flexible Pricing Models",
          heading3Para:
            " Implement diversified pricing strategies for UPI transactions, QR code generation, and payout services. Optimize revenue through competitive transaction fees and value-added service charges.",
        },

        {
          heading3: "Merchant Segmentation & Tariffs",
          heading3Para:
            "Create personalized pricing tiers for different merchant categories, transaction volumes, and business models. Leverage individual tariff plans to meet specific partnership requirements and maximize retention.",
        },
        {
          heading3: "Risk Management & Limits",
          heading3Para:
            "Implement intelligent transaction limits, velocity checks, and risk-based pricing to manage exposure while maintaining competitive rates for trusted merchants.",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "How quickly can I integrate the Payment Link API? ",
        answer:
          "Integration typically takes 1-2 business days. Our comprehensive documentation, SDK support, and responsive developer support team ensure a smooth and rapid integration process.",
      },
      {
        question: "What payment methods are supported?",
        answer:
          "We support all major payment methods including credit/debit cards, digital wallets (PayTM, PhonPe, Google Pay), bank transfers, UPI, and BNPL options depending on your region.",
      },
      {
        question: "Can I customize the payment page appearance?",
        answer:
          "Yes, you can fully customize payment pages with your brand colors, logos, custom fields, and messaging to create a seamless branded experience for your customers.",
      },
      {
        question: "Are there any limits on payment link generation?",
        answer:
          "AOPAY payment solution can generate up to 10,000 payment links per minute. For higher volumes, contact our enterprise team for custom scaling solutions tailored to your needs.",
      },
      {
        question: "How secure are the payment links?",
        answer:
          "Payment links use end-to-end encryption, are PCI DSS Level 1 compliant, include fraud detection, and feature configurable expiry times for maximum security.",
      },
      {
        question: "Do you provide webhook notifications?",
        answer:
          "Yes, we provide real-time webhook notifications for all payment events including successful payments, failures, refunds, and chargebacks with retry mechanisms for reliability.",
      },
    ],
  };

  
  const features2 = {
    heading2: "Developer-Friendly Payment Link API Integration",
    description:
      "Built with developers in mind, our payment solution offers comprehensive documentation, multiple SDKs, and flexible integration options to get you started quickly.",
    points: [
      {
        heading3: "RESTful API Architecture",
        type: "paragraph",
        description:
          "Clean, intuitive REST API design with JSON responses, making integration straightforward across different programming languages and platforms.",
        imgSrc:
          "/assets/PaymentLink/Developer-Friendly Integration Experience/RESTful API Architecture.png",
      },
      {
        heading3: "Comprehensive SDK Support",
        type: "list",
        features: [
          "Native SDKs for PHP, Python, Node.js, Java, and .NET",
          "Detailed code examples and implementation guides",
          "Interactive API explorer for testing endpoints",
          "Postman collections for quick integration testing",
        ],
        imgSrc:
          "/assets/PaymentLink/Developer-Friendly Integration Experience/Comprehensive SDK Support.png",
      },
      {
        heading3: "Sandbox Testing Environment",
        type: "list",
        features: [
          "Complete testing environment with simulated payments",
          "Test various payment scenarios and webhook events",
          "No real money transactions during development",
          "Instant access to sandbox access",
        ],
        imgSrc:
          "/assets/PaymentLink/Developer-Friendly Integration Experience/Sandbox Testing Environment.png",
      },
      {
        heading3: "Real-Time Webhooks",
        type: "list",
        features: [
          "Instant notifications for payment status updates",
          "Configurable webhook endpoints for different events",
          "Retry mechanisms for failed webhook deliveries",
          "Signature verification for enhanced security",
        ],
        imgSrc:
          "/assets/PaymentLink/Developer-Friendly Integration Experience/Real-Time Webhooks.png",
      },
    ],
  };


  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PaymentHead headerSection={headerContent} />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <CardWithFeature features={features2} />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <FeaturesSection
        title={upiFeaturesData.title}
        description={upiFeaturesData.description}
        sections={upiFeaturesData.sections}
      />
      <PaymentCollectionServices />
      <ContentWithDescriptivePoints content={content} />
      <BusinessIntelligenceReporting />
      <H2DescH3Desc contentWithDescription={material} />
      <FAQSection faqContent={faqContent} />

      <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-green-100">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          {/* Heading */}
          <h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Start Your Integration Today
          </h3>

          {/* Paragraph */}
          <p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Get API access, comprehensive documentation, and dedicated support
            to launch your payment collection system quickly and efficiently.
          </p>

          {/* Buttons */}
          <div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mt-6"
          >
            <Link href="/contact-us">
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 transition">
                Get API Key <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-green-600 text-green-700 font-semibold hover:bg-green-50 transition">
                View Documentation <BookOpen className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentLink;
