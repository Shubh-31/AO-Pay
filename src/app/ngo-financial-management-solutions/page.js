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
import NonProfitFundraising from "@/sections/NonProfitNGO/NonProfitFundraising";
import NonProfitDonationExperience from "@/sections/NonProfitNGO/NonProfitDonationExperience";
import NonProfitSolutions from "@/sections/NonProfitNGO/NonProfitSolutions";
import NonProfitExpertGuidance from "@/sections/NonProfitNGO/NonProfitExpertGuidance";

export const metadata = {
  title: "Non Profit Accounting Software & Solutions | AOPAY",
  description:
    "Manage donations, grants, and program expenses with transparent accounting and payment solutions designed for NGOs. Track funding sources, automate receipts, and ensure compliance for charitable organizations.",
  keywords:
    "money transfer India, digital money transfer, instant money transfer, bank transfer API, domestic money transfer, AOPay transfer, online money transfer Solutions, Secure Money Transfer, Fast Money Transfer, International Money Transfer, Money Transfer Solution, Instant Fund Transfer, Reliable Money Transfer, Quick Transfer Solutions, Send Money Online, Transfer Funds Instantly, Cross-Border Money Transfer, Secure Transactions, Digital Fund Transfer, Fast Cash Transfer, Global Money Transfer, Online Fund Transfer, Easy Money Transfer, International Fund Transfer, Money Sending Solution, Quick International Transfer, Money Transfer App, Money Transfer Solution, Transfer to Bank Account, Instant Payment Transfer, Remittance Solution, Fast Cash Transfer Solution, Bank-to-Bank Transfer, Mobile Money Transfer, Transfer via Bank, Secure Online Transfer, Fast Remittance, Send Funds Instantly, Affordable Money Transfer, Digital Remittance, Secure Payment Transfer, Online Transaction Solutions, Quick Remittance Solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/ngo-financial-management-solutions",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
  openGraph: {
    title: "NGO Financial Management Solution | Non-Profits | AoPay",
    description:
      "Manage NGO finances with donation collection, fund management, and beneficiary payouts.",
    url: "https://aopay.in/ngo-financial-management-solutions",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/ngo-solutions-og.jpg",
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

const NonProfitNGO = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/ngo-financial-management-solutions",
    telephone: "011-42151216",
    description:
      "Cheapest banking solutions for NGOs & non-profits in India providing secure donation processing, fund tracking, virtual accounts, and automated collections.",
    serviceType: [
      "White Label Banking Solutions for NGOs & Non Profit Organisations",
      "Crowdfunding & Recurring donation payment solutions",
      "Best banking solutions provider for nonprofits Near Me",
      "Best Donation payment gateway solutions Provider in India",
      "Online payment solutions for nonprofit organizations",
      "Digital banking tools for NGO fundraising",
      "NGO international donation processing Solution",
      "Affordable Nonprofit & NGO Banking Solution Provider in India",
      "NGO Financial & Banking Services provider in India",
      "Auto Donation Payment & Settlement Solutions Provider",
      "Digital Banking Solutions for Nonprofits and NGOs",
      "Grant & Fund Management Solutions for NGOs",
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
      "Non-Profit Accounting & Payment Solutions for NGOs, Charities & Social Enterprises",
    subTitle:
      "Manage donations, grants, and program expenses with transparent accounting and payment solutions designed for NGOs. Track funding sources, automate receipts, and ensure compliance for charitable organizations.",
    imgSrc: "/assets/Non-ProfitNGO.png",
    alt: "Secure money transfer API enabling instant fund transfers between bank accounts.",
    video: false,
    btn1: "Start Now",
    btn1Link: "/contact-us",
    btn2: "Grow Your Impact",
    btn2Link: "/contact-us",
  };

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Build Donor Trust with Transparent Fund Management",
      heading2Para:
        "Transparency is the foundation of nonprofit success. AOPAY's advanced fund tracking and escrow capabilities ensure donors can see exactly how their contributions are being used, building long-term trust and encouraging recurring support.",
      points: [
        {
          imgSrc:
            "/assets/DMTIntegration/AOPAYCompleteMoneyTransferAPISolution/InstantBankTransfers.png",
          heading3: "Transparent Fund Allocation",
          heading3Para:
            "Real-time tracking shows donors exactly how their contributions are allocated across programs, administrative costs, and fundraising activities with complete transparency.",
        },
        {
          imgSrc:
            "/assets/DMTIntegration/AOPAYCompleteMoneyTransferAPISolution/BulkDisbursementProcessing.png",
          heading3: "Secure Escrow Management",
          heading3Para:
            "Protect donor funds with secure escrow services that release payments based on project milestones, ensuring accountability and proper fund utilization.",
        },
        {
          imgSrc:
            "/assets/DMTIntegration/AOPAYCompleteMoneyTransferAPISolution/DigitalWalletIntegration.png",
          heading3: "Impact Reporting Dashboard",
          heading3Para:
            "Automated impact reports show donors the real-world results of their contributions with measurable outcomes and success stories.",
        },
      ],
    },
  ];

  const content = [
    {
      heading2: "Complete Donor Verification and Fraud Protection",
      heading2Para:
        "Protect your nonprofit from fraudulent donations while ensuring legitimate supporters have a smooth giving experience. AOPAY's intelligent verification systems help maintain donor database integrity and comply with regulatory requirements.",
      points: [
        {
          heading3: "Automated Donor Verification",
          heading3Para:
            "Verify donor identities and prevent fraudulent contributions while maintaining a seamless donation experience for legitimate supporters.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/HighPerformanceProcessing.png",
        },

        {
          heading3: "Smart Fraud Detection",
          heading3Para:
            "Machine learning models trained on nonprofit-specific data patterns identify suspicious donations without blocking genuine supporters.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/RetailMoneyTransfer.png",
        },
        {
          heading3: "Compliance Monitoring",
          heading3Para:
            "Automated compliance checks ensure all donations meet regulatory requirements and help maintain your tax-exempt status.",
          imgSrc:
            "/assets/DMTIntegration/Performance&Scalability/AutoScalingInfrastructure.png",
        },
        {
          heading3: "Donor Database Protection",
          heading3Para:
            "Advanced security measures protect sensitive donor information and ensure GDPR and other privacy regulation compliance.",
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
        },
        {
          heading3: "Multi-Channel Distribution",
          heading3Para:
            "Share payment links through email, SMS, social media, or messaging platforms for maximum reach and convenience. Enable payments through any communication channel while maintaining consistent branding and user experience.",
        },
        {
          heading3: "Bulk Enrollment Management",
          heading3Para:
            "Handle corporate training enrollments and institutional partnerships with bulk payment processing capabilities. Generate multiple payment links, manage group discounts, and process batch enrollments efficiently.",
        },
      ],
    },
  ];

  const material = [
    {
      heading2: "Enhanced Transparency Builds Lasting Donor Relationships",
      heading2Para:
        "Modern donors want to see the impact of their contributions. AOPAY's transparency tools provide real-time visibility into fund usage, project progress, and measurable outcomes that keep donors engaged and motivated to continue supporting your cause.",
      points: [
        {
          heading3: "Real-Time Fund Tracking",
          heading3Para:
            "Donors can track their contributions from donation to impact with detailed breakdowns of fund allocation and project progress updates.",
          imgSrc:
            "/assets/DMTIntegration/FastImplementation&Support/RapidIntegrationProcess.png",
        },
        {
          heading3: "Automated Impact Updates",
          heading3Para:
            "Send personalized impact reports to donors showing the specific outcomes their contributions helped achieve with photos, stories, and metrics.",
          imgSrc:
            "/assets/DMTIntegration/FastImplementation&Support/24x7TechnicalSupport.png",
        },
        {
          heading3: "Milestone-Based Releases",
          heading3Para:
            "Configure fund releases based on project milestones, ensuring donors see tangible progress before additional funds are allocated.",
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
          "How does AOPAY ensure transparency in nonprofit fund management?",
        answer:
          "AOPAY provides real-time tracking of all donations from receipt to impact. Donors can see exactly how their contributions are allocated across programs, administrative costs, and fundraising activities. Our platform generates automated impact reports showing measurable outcomes and project progress.",
      },
      {
        question:
          "What donor verification features are included for nonprofits?",
        answer:
          "AOPAY includes comprehensive donor verification including identity confirmation, fraud detection, and compliance monitoring. Our system automatically flags suspicious donations while ensuring legitimate supporters have a smooth giving experience. All verification processes comply with nonprofit regulations and privacy requirements.",
      },
      {
        question: "Can AOPAY handle recurring donation programs?",
        answer:
          "Yes, AOPAY supports sophisticated recurring giving programs with flexible scheduling, automated receipt generation, and donor retention tools. Our platform handles monthly, quarterly, and annual giving programs with intelligent payment retry logic and donor communication automation.",
      },
      {
        question:
          "How quickly can nonprofits start accepting donations with AOPAY?",
        answer:
          "Most nonprofit organizations can begin accepting donations within 2-3 business days after completing our streamlined onboarding process. Our nonprofit specialists help with setup, compliance verification, and integration with existing donor management systems.",
      },
      {
        question: "Does AOPAY support international nonprofit operations?",
        answer:
          "Yes, AOPAY supports global nonprofit operations with multi-currency donation processing, international compliance monitoring, and automated currency conversion. Our platform handles regulatory requirements across 150+ countries and provides localized donation experiences for international supporters.",
      },
    ],
  };

  const HeadingSubheadings = [
    {
      heading2: "Why Mission-Driven Organizations Choose AOPAY",
      heading2Para:
        "Amplify your nonprofit's impact with unified donation experiences. From emergency relief campaigns to long-term development programs, you can quickly adapt to changing needs, engage diverse donor segments, and maximize fundraising effectiveness with our complete nonprofit payment platform.",
      points: [
        {
          heading3: "Launch Recurring Giving Programs",
          heading3Para:
            "AOPAY Billing helps you set up sustainable recurring donation programs, manage monthly giving plans, and send automated thank-you communications – all with built-in donor retention tools.",
        },

        {
          heading3: "Extend to Event Fundraising",
          heading3Para:
            "AOPAY’s mobile payment solutions enable seamless donation collection at fundraising events, galas, and community activities with real-time tracking and receipt generation.",
        },
        {
          heading3: "Integrate with Nonprofit Tools",
          heading3Para:
            "Connect AOPAY with popular nonprofit management platforms, CRM systems, email marketing tools, and accounting software through our comprehensive integration marketplace.",
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
      <NonProfitFundraising/>
      <NonProfitDonationExperience/>
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <ContentWithDescriptivePoints content={content} />
      <H2DescH3Desc contentWithDescription={material} />
      <NonProfitSolutions/>
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <HeadingSubheadingSection HeadingSubheadings={HeadingSubheadings} />
      <FAQSection faqContent={faqContent} />
     <NonProfitExpertGuidance/>
    </>
  );
};

export default NonProfitNGO;
