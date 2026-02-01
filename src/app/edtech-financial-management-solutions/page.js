import { PaymentHead, FAQSection } from "@/sections/mySection";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { HeadingSubheadingSection } from "@/sections/HeadingSubheadingSection";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import EdTechPaymentSolutions from "@/sections/EdtechAndOnlineLearning/EdTechPaymentSolutions";
import StudentPaymentJourney from "@/sections/EdtechAndOnlineLearning/StudentPaymentJourney";
import Solutions from "@/sections/EdtechAndOnlineLearning/Solutions";
import LMSIntegration from "@/sections/EdtechAndOnlineLearning/LMSIntegration";
import EdTechGrowth from "@/sections/EdtechAndOnlineLearning/EdTechGrowth";
import ExpertSupport from "@/sections/EdtechAndOnlineLearning/ExpertSupport";
import OnlineLearningCTA from "@/sections/EdtechAndOnlineLearning/OnlineLearningCTA";

export const metadata = {
  title: "Education Management Software & Solutions | AOPAY",
  description:
    "Empower EdTech platforms with AoPay's financial solution. Student fee collection, EMI for courses, instructor payouts, scholarship management for online learning and education platforms.",
  keywords:
    "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/edtech-financial-management-solutions",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "EdTech Financial Management Solution | Online Learning | AoPay",
    description:
      "Manage EdTech finances with fee collection, course EMI, and instructor payouts.",
    url: "https://aopay.in/edtech-financial-management-solutions",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/edtech-solutions-og.jpg",
        width: 1200,
        height: 630,
        alt: "AOPay Money Transfer Banner",
      },
    ],
    twitter: {
      card: "summary_large_image",
    },
  },
};

const EdTechAndOnlineLearning = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/edtech-financial-management-solutions",
    telephone: "011-42151216",
    description:
      "Cheapest banking solutions for EdTech & online learning in India providing secure payments, virtual accounts, instant settlements, and automated collections.",
    serviceType: [
      "White Label Banking Solutions for edtech & online learning platforms",
      "Online learning payout automation Solutions",
      "Banking solutions Provider for edtech & online learning platforms Near Me",
      "Best Banking Solutions for edtech & online learning platforms Provider in India",
      "Education credit and financing solutions",
      "Best banking solutions for EdTech platforms",
      "Secure payment solutions for EdTech startups",
      "Affordable banking for e-learning businesses",
      "EdTech Banking Solution Provider in India",
      "Digital Banking solutions provider for Education Platforms",
      "Payment automation for online learning courses Businesses",
      "EdTech cash flow management solutions",
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
      "EdTech Payments Solutions for Online Learning, Schools & Coaching Institutes",
    subTitle:
      "Accept course fees, subscription payments, and EMI options effortlessly with education-focused payment infrastructure. Manage student billing, refunds, and recurring payments for online learning and coaching institutes.",
    imgSrc: "/assets/EdtechAndOnlineLearning/Ed Tech online lerning.png",
    alt: "Secure money transfer API enabling instant fund transfers between bank accounts.",
    video: false,
    btn1: "Start Now",
    btn1Link: "/contact-us",
    btn2: "Grow Your Education Business",
    btn2Link: "/contact-us",
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2: "AOPAY Advanced Payment Gateway Solutions for Education",
      heading2Para:
        "Enable seamless course enrollments and fee collection with our comprehensive payment gateway designed for educational content and services. Support multiple payment methods, currencies, and pricing models while ensuring secure, compliant transactions.",
      points: [
        {
          imgSrc:
            "/assets/DMTIntegration/AOPAYCompleteMoneyTransferAPISolution/InstantBankTransfers.png",
          heading3: "Multi-Channel Payment Processing",
          heading3Para:
            "Accept payments through web platforms, mobile apps, and offline channels with our unified payment gateway. Support credit cards, digital wallets, bank transfers, and regional payment methods to maximize enrollment accessibility for students worldwide.",
        },
        {
          imgSrc:
            "/assets/DMTIntegration/AOPAYCompleteMoneyTransferAPISolution/BulkDisbursementProcessing.png",
          heading3: "Global Payment Support",
          heading3Para:
            "Expand your reach to international students with multi-currency support and localized payment methods. Our gateway handles currency conversion, regional compliance, and local payment preferences automatically for seamless global operations.",
        },
        {
          imgSrc:
            "/assets/DMTIntegration/AOPAYCompleteMoneyTransferAPISolution/DigitalWalletIntegration.png",
          heading3: "Secure Student Data Protection",
          heading3Para:
            "Protect sensitive student and financial information with enterprise-grade security features. Our PCI DSS compliant infrastructure ensures safe payment processing while maintaining educational data privacy standards and regulatory compliance.",
        },
      ],
    },
  ];

  const content = [
    {
      heading2: "Streamlined Payment Collection for Educational Services",
      heading2Para:
        "Optimize revenue collection with flexible payment solutions designed for diverse educational business models. From one-time course purchases to subscription-based learning platforms, manage all payment scenarios efficiently.",
      points: [
        {
          heading3: "Course Payment Management",
          heading3Para:
            "Handle various pricing models including one-time course purchases, bundled programs, certification fees, and premium content access. Our flexible system adapts to your educational offerings while providing transparent pricing and payment options for students.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/HighPerformanceProcessing.png",
        },

        {
          heading3: "Subscription & Recurring Billing",
          heading3Para:
            "Manage subscription-based learning platforms with automated recurring billing, trial periods, and flexible subscription management. Handle plan upgrades, downgrades, and cancellations seamlessly while maintaining continuous access to educational content.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/RetailMoneyTransfer.png",
        },
        {
          heading3: "Revenue Analytics & Reporting",
          heading3Para:
            "Track enrollment revenues, subscription metrics, and payment performance with comprehensive analytics dashboard. Monitor course popularity, revenue trends, and student payment behavior to optimize pricing strategies and business growth.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/AutoScalingInfrastructure.png",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2: "Flexible Payment Link Solutions for Education",
      heading2Para:
        "Generate secure payment links for various educational scenarios including course enrollments, workshop registrations, certification programs, and institutional fee collection. Simplify payment collection across multiple channels.",
      points: [
        {
          heading3: "Dynamic Payment Link Generation",
          heading3Para:
            "Create customized payment links for specific courses, programs, or student cohorts. Include course details, pricing information, and expiry dates while maintaining security and preventing unauthorized access to payment forms.",
          imgSrc:
            "/assets/EdtechAndOnlineLearning/Flexible Payment Link Solutions for Education/Dynamic Payment Link Generation.png",
        },
        {
          heading3: "Multi-Channel Distribution",
          heading3Para:
            "Share payment links through email, SMS, social media, or messaging platforms for maximum reach and convenience. Enable payments through any communication channel while maintaining consistent branding and user experience.",
          imgSrc:
            "/assets/EdtechAndOnlineLearning/Flexible Payment Link Solutions for Education/Multi-Channel Distribution.png",
        },
        {
          heading3: "Bulk Enrollment Management",
          heading3Para:
            "Handle corporate training enrollments and institutional partnerships with bulk payment processing capabilities. Generate multiple payment links, manage group discounts, and process batch enrollments efficiently.",
          imgSrc:
            "/assets/EdtechAndOnlineLearning/Flexible Payment Link Solutions for Education/Bulk Enrollment Management.png",
        },
      ],
    },
  ];

  const material = [
    {
      heading2: "Modern Digital Payment Methods for Students",
      heading2Para:
        "AOPAY simplifies vendor onboarding, verification, and payment management for marketplace operators. Our platform handles complex multi-vendor settlements, automated tax calculations, and compliance requirements while providing vendors with real-time visibility into their earnings.",
      points: [
        {
          heading3: "UPI & Mobile Payment Integration",
          heading3Para:
            "Enable instant payments through UPI and popular mobile payment platforms preferred by students. Our seamless integration supports quick enrollment payments, reducing checkout abandonment and improving conversion rates for course purchases.",
          imgSrc:
            "/assets/DMTIntegration/FastImplementation&Support/UPI PayIn API.png",
        },
        {
          heading3: "QR Code Payment Solutions",
          heading3Para:
            "Implement QR code payments for offline events, workshops, and institutional fee collection. Students can scan and pay instantly using their mobile devices, creating a contactless payment experience ideal for educational settings.",
          imgSrc:
            "/assets/DMTIntegration/FastImplementation&Support/24x7TechnicalSupport.png",
        },
        {
          heading3: "Instant Payment Confirmation",
          heading3Para:
            "Provide immediate payment confirmation and course access with real-time transaction processing. Students receive instant enrollment confirmation and can begin learning immediately after successful payment completion.",
          imgSrc:
            "/assets/DMTIntegration/FastImplementation&Support/DedicatedAccountManagement.png",
        },
      ],
    },
  ];

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question:
          "How quickly can we integrate AOPAY with our existing EdTech platform?",
        answer:
          "Most educational platforms can integrate AOPAY within 1-2 weeks. Our solution includes pre-built integrations for popular learning management systems, comprehensive documentation, and dedicated technical support to ensure smooth implementation with minimal disruption to ongoing courses.",
      },
      {
        question:
          "How does AOPAY handle subscription billing for learning platforms?",
        answer:
          "Our platform provides comprehensive subscription management including automated recurring billing, trial periods, plan upgrades/downgrades, and cancellation handling. Students can manage their subscriptions independently while educators receive detailed analytics on subscription performance and revenue trends.",
      },
      {
        question: "What security measures protect student payment data?",
        answer:
          "All transactions are processed through PCI DSS Level 1 compliant infrastructure with end-to-end encryption, tokenization, and advanced fraud detection. We maintain strict educational data privacy standards and comply with regulations like FERPA while protecting sensitive student financial information.",
      },
      {
        question: "Can AOPAY support corporate training and bulk enrollments?",
        answer:
          "Yes, our platform includes specialized features for corporate training programs including bulk payment processing, group discounts, corporate billing, and invoice-based payments. We support B2B sales processes with purchase orders, multi-level approvals, and enterprise reporting requirements.",
      },
      {
        question:
          "What makes AOPAY different from generic payment processors for education?",
        answer:
          "AOPAY is specifically designed for educational platforms with features like course-specific payment flows, academic calendar integration, student verification systems, and educational compliance tools. Our deep understanding of EdTech challenges enables solutions that generic processors cannot provide.",
      },
    ],
  };

  const HeadingSubheadings = [
    {
      heading2: "Enhanced Student Verification & Onboarding",
      heading2Para:
        "Streamline student registration and financial verification processes with integrated bank verification services. Ensure secure onboarding while preventing fraud and maintaining compliance with educational regulations.",
      points: [
        {
          heading3: "Student Bank Account Verification",
          heading3Para:
            "Verify student bank accounts for scholarship disbursements, refund processing, and financial aid distribution. Our verification service ensures accurate fund transfers while preventing errors and fraudulent activities.",
          imgSrc:
            "/assets/EdtechAndOnlineLearning/Enhanced Student Verification & Onboarding/Student Bank Account Verification.png",
        },

        {
          heading3: "Identity Verification for Certification",
          heading3Para:
            "Implement secure identity verification for certification programs and professional courses. Ensure the integrity of educational credentials while providing a smooth verification experience for legitimate students.",
          imgSrc:
            "/assets/EdtechAndOnlineLearning/Enhanced Student Verification & Onboarding/Identity Verification for Certification.png",
        },
        {
          heading3: "Fraud Prevention for Educational Platforms",
          heading3Para:
            "Protect your platform from payment fraud, fake enrollments, and unauthorized access with advanced security measures. Our fraud detection system identifies suspicious activities while maintaining a frictionless experience for genuine students.",
          imgSrc:
            "/assets/EdtechAndOnlineLearning/Enhanced Student Verification & Onboarding/Fraud Prevention for Educational Platforms.png",
        },
      ],
    },
  ];

  const methods = [
    "Credit/Debit Cards",
    "UPI Payments",
    "Digital Wallets",
    "Net Banking",
    "QR Code Payments",
    "Bank Transfers",
    "International Cards",
    "PayPal",
    "Apple Pay",
    "Google Pay",
    "EMI Options",
    "Student Loans",
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PaymentHead headerSection={headerContent} />
      <EdTechPaymentSolutions />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <ContentWithDescriptivePoints content={content} />
      <H2DescH3Desc contentWithDescription={material} />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <HeadingSubheadingSection HeadingSubheadings={HeadingSubheadings} />
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* H2 */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Comprehensive Payment Method Support
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 text-lg leading-relaxed">
            Accept payments through diverse methods preferred by students,
            parents, and educational institutions worldwide. Maximize enrollment
            accessibility with comprehensive payment options.
          </p>

          {/* List */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
            {methods.map((method, idx) => (
              <div
                key={idx}
                className="p-3 border rounded-lg bg-gray-50 text-gray-800"
              >
                {method}
              </div>
            ))}
          </div>
        </div>
      </section>
      <StudentPaymentJourney />
      <Solutions />
      <LMSIntegration />
      <EdTechGrowth />
      <ExpertSupport />
      <FAQSection faqContent={faqContent} />
      <OnlineLearningCTA />
    </>
  );
};

export default EdTechAndOnlineLearning;
