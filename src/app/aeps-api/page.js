// app/aeps-api-provider/page.js
import AEPSAnalytics from "@/sections/AEPSAnalytics";
import AEPSCompliance from "@/sections/AEPSCompliance";
import AEPSHead from "@/sections/AEPSHead";
import { CardWithFeature } from "@/sections/CardWithFeature";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import { HeadingSubheadingSection } from "@/sections/HeadingSubheadingSection";
import {
  FeaturesSection,
  FAQSection,
  GetStarted,
  Header,
} from "@/sections/mySection";
import { ArrowRight, BookOpen } from "lucide-react";

// ✅ Metadata API for SEO
export const metadata = {
  title: "AEPS API for Cash Withdrawals & Balance Enquiry | AOPAY",
  description:
    "Provide Aadhaar-based banking services with AoPay's AEPS API. Enable cash withdrawal, balance inquiry, mini statements using biometric authentication for financial inclusion",
  keywords: [
    "AEPS API",
    "Aadhaar enabled payment system",
    "banking correspondent Solutions",
    "biometric banking",
    "cash withdrawal AEPS",
    "AOPay AEPS",
    "rural banking solutions",
    "AEPS",
    "Aadhaar Enabled Payment System",
    "AEPS Transactions",
    "Secure AEPS Payments",
    "Instant AEPS Transfer",
    "Aadhaar Payment",
    "AEPS Banking Solution",
    "AEPS Withdrawals",
    "AEPS Deposits",
    "Aadhaar-based Payments",
    "Fast AEPS Solution",
    "AEPS Solutions",
    "Digital AEPS Transactions",
    "Instant Banking with AEPS",
    "AEPS Payment Gateway",
    "Secure Transaction with AEPS",
    "AEPS for Financial Solutions",
    "Real-time AEPS Transactions",
    "Aadhaar Payment System",
    "Secure Banking",
    "AEPS Mobile App",
    "Aadhaar Authentication for Payments",
    "AEPS Transfers",
    "AEPS Fund Withdrawal",
    "AEPS Digital Solution",
    "AEPS for Banks",
    "AEPS Payment Solutions",
    "AEPS Integration",
    "Quick Banking Transactions",
    "AEPS Withdraw",
    "Instant Bank Transfer with AEPS",
    "Digital Payments with AEPS",
    "Cash Withdrawal through AEPS",
    "AEPS Transaction Features",
    "AEPS Payment Process",
    "Simple AEPS Transactions",
    "Instant Deposit with AEPS",
    "Aadhaar Transaction Solutions",
    "AEPS for Individuals",
    "Mobile AEPS Transactions",
    "Aadhaar-Based Fund Transfer",
  ],
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: { canonical: "https://www.aopay.in/aeps-api" },
  openGraph: {
    title: "AEPS API | Aadhaar Enabled Payment System | AoPay",
    description:
      "Enable Aadhaar-based banking services with cash withdrawal and balance inquiry.",
    url: "https://www.aopay.in/aeps-api",
    siteName: "AOPay",
    locale: "en_IN",
    images: [
      {
        url: "https://aopay.in/images/aeps-og.jpg",
        width: 800,
        height: 600,
        alt: "AOPAY Open Graph Image",
      },
    ],
    type: "website",
  },
};

// ✅ Page Component
const AEPS = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/aeps-api",
    telephone: "011-42151216",

    description:
      "Cheapest AEPS solution in India for safe, quick Aadhaar-based transactions, cash deposits & withdrawals, and balance checks with reliable 24/7 support.",

    knowsAbout: [
      "White Label AEPS Solution",
      "Aadhaar Pay Solution",
      "AEPS Provider Near Me",
      "Best AEPS Solution Provider in India",
      "Aadhaar Pay Solution Provider Near Me",
      "AEPS System for Small Businesses",
      "Best Aadhaar Pay Solution Provider in India",
      "Affordable AEPS for Small Businesses",
      "AEPS with Lowest Transaction Fees in India",
      "AEPS for Banks and Cooperatives",
      "AEPS Solution for Local Businesses",
      "AEPS for Microfinance Institutions",
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



  const contentWithHeadingsAndPoints = [
    {
      heading2: "AOPAY AEPS API Solution For Businesses",
      heading2Para:
        "AOPAY secure AEPS infrastructure enables seamless integration of Aadhaar Enabled Payment System services. Whether you're a banking correspondent, fintech startup, or established financial institution, our API provides the foundation for reliable biometric banking services.",
      points: [
        {
          heading3: "Aadhaar Cash Withdrawal API",
          heading3Para:
            "Enable customers to withdraw cash using Aadhaar number and biometric authentication. Support for all major banks with real-time processing and instant confirmations.",
          imgSrc:
            "/assets/AEPSAPISolution/Easy AEPS API Integration Process/Cash Deposit API.png",
        },
        {
          heading3: "AEPS Balance Inquiry API",
          heading3Para:
            "Allow customers to check their account balance instantly using Aadhaar and fingerprint authentication. Secure and fast balance verification across all participating banks.",
          imgSrc:
            "/assets/AEPSAPISolution/Easy AEPS API Integration Process/Cash Deposit API.png",
        },
        {
          heading3: "Aadhaar Pay Mini Statement API",
          heading3Para:
            "Provide customers with their recent transaction history through biometric authentication. Generate mini statements for the last 10 transactions instantly.",
          imgSrc:
            "/assets/AEPSAPISolution/Easy AEPS API Integration Process/Mini Statement Generation.png",
        },
        {
          heading3: "Aadhaar Pay Integration",
          heading3Para:
            "Enable merchant payments through Aadhaar Pay, allowing customers to pay using their Aadhaar number and biometric authentication without cards or cash.",
          imgSrc:
            "/assets/AEPSAPISolution/Easy AEPS API Integration Process/Aadhaar Pay Integration.png",
        },
        {
          heading3: "NPCI-Certified AEPS Infrastructure",
          heading3Para:
            "Built with NPCI certification and RBI compliance, our AEPS solution ensures the highest standards of security and reliability for biometric banking operations.",
          imgSrc:
            "/assets/AEPSAPISolution/Easy AEPS API Integration Process/Comprehensive AEPS Banking Services API.png",
        },
        {
          heading3: "Aadhaar Biometric Authentication API",
          heading3Para:
            "Advanced fingerprint recognition technology with UIDAI-approved biometric devices, ensuring secure and accurate customer authentication for all transactions.",
          imgSrc:
            "/assets/AEPSAPISolution/Easy AEPS API Integration Process/Biometric Authentication Engine.png",
        },
        {
          heading3: "Real-Time Bank Connectivity",
          heading3Para:
            "Direct integration with NPCI's AEPS switch provides real-time connectivity to all participating banks, ensuring instant transaction processing and status updates.",
          imgSrc:
            "/assets/AEPSAPISolution/Easy AEPS API Integration Process/Real-time Payment Processing.png",
        },
        {
          heading3: "Regulatory Compliance Framework",
          heading3Para:
            "Full compliance with RBI guidelines, NPCI standards, and UIDAI regulations, ensuring your AEPS operations meet all regulatory requirements.",
          imgSrc:
            "/assets/AEPSAPISolution/Easy AEPS API Integration Process/REgulatory Compliance.png",
        },
      ],
    },
  ];

  const features2 = {
    heading2:
      "Developer-Friendly Aadhaar Pay API Solution Integration Experience",
    description:
      "Designed for easy integration, our aadhaar pay solution offers comprehensive documentation, testing environments, and flexible implementation options.",
    points: [
      {
        imgSrc:
          "/assets/AEPSAPISolution/Developer-Friendly Integration Experience/RESTful API Architecture.png",
        heading3: "RESTful API Architecture",
        type: "paragraph",
        description:
          "Clean, intuitive REST API design with JSON responses, making integration straightforward across different programming languages and frameworks.",
      },
      {
        imgSrc:
          "/assets/AEPSAPISolution/Developer-Friendly Integration Experience/Comprehensive SDK Support.png",
        heading3: "Comprehensive SDK Support",
        type: "list",
        features: [
          "Native SDKs for Android, iOS, and web applications",
          "Code samples for Java, PHP, Python, and .NET",
          "Biometric device integration libraries",
          "Real-time response handling examples",
        ],
      },
      {
        imgSrc:
          "/assets/AEPSAPISolution/Developer-Friendly Integration Experience/Sandbox Testing Environment.png",
        heading3: "Sandbox Testing Environment",
        type: "list",
        features: [
          "Complete AEPS testing environment with simulated responses",
          "Mock biometric device integration for development",
          "Test various transaction scenarios and error conditions",
        ],
      },
      {
        imgSrc:
          "/assets/AEPSAPISolution/Developer-Friendly Integration Experience/Universal UPI App Support.png",
        heading3: "Device Integration Support",
        type: "list",
        features: [
          "Support for all UIDAI-certified biometric devices",
          "Morpho, Mantra, Startek device compatibility",
          "Device management and configuration APIs",
          "Automatic device detection and initialization",
        ],
      },
    ],
  };

  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is AEPS and how does it work?",
        answer:
          "AEPS (Aadhaar Enabled Payment System) allows customers to perform banking transactions using their Aadhaar number and biometric authentication. It enables cash withdrawal, balance inquiry, and mini statements without debit cards.",
      },
      {
        question: "Which banks are supported by AOPAY AEPS Solution?",
        answer:
          "Our AEPS solution supports all banks that participate in the NPCI AEPS network, including major public and private sector banks like SBI, HDFC, ICICI, PNB, and many others.",
      },
      {
        question: "What biometric devices are compatible with AOPAY AEPS?",
        answer:
          "We support all UIDAI-certified biometric devices including Morpho, Mantra, Startek, and other RD Service compatible devices for fingerprint authentication.",
      },
      {
        question: "How quickly can I integrate AOPAY AEPS Solution?",
        answer:
          "AEPS integration typically takes 2-3 business days including API setup, device configuration, testing, and compliance verification. Our team provides full support throughout the process.",
      },
      {
        question: "What are the transaction limits for AEPS services?",
        answer:
          "AEPS transaction limits are set by NPCI: ₹10,000 per transaction for cash withdrawal with a maximum of ₹10,000 per day per customer. Balance inquiry and mini statements have no monetary limits.",
      },
      {
        question: "Is AOPAY AEPS API compliant with regulatory requirements?",
        answer:
          "Yes, our AEPS solution is fully compliant with NPCI specifications, RBI guidelines, and UIDAI regulations. We maintain all necessary certifications and undergo regular compliance audits.",
      },
    ],
  };

  
  const content = [
    {
      heading2: "AOPAY AEPS Solution: Perfect For Diverse Business Models",
      heading2Para:
        "AOPAY versatile solution caters to various business needs across the financial services ecosystem.",
      points: [
        {
          heading3: "Banking Correspondents (BC)",
          heading3Para:
            "Enable your BC network with comprehensive AEPS services. Perfect for rural banking, cash withdrawal points, and financial inclusion initiatives.",
          imgSrc:
            "/assets/AEPSAPISolution/Perfect for Diverse Business Models/CSC & Banking Correspondents.png",
        },

        {
          heading3: "Fintech & Neobanks",
          heading3Para:
            "Integrate AEPS services into your digital banking platform to offer biometric banking capabilities and expand your service portfolio.",
          imgSrc:
            "/assets/AEPSAPISolution/Perfect for Diverse Business Models/Retail & Kirana Stores.png",
        },
        {
          heading3: "Retail Networks",
          heading3Para:
            "Transform retail outlets into banking points with AEPS integration, enabling cash withdrawal and banking services for customers.",
          imgSrc:
            "/assets/AEPSAPISolution/Perfect for Diverse Business Models/Retail & Kirana Stores.png",
        },
        {
          heading3: "Government Platforms",
          heading3Para:
            "Support welfare disbursement and benefit distribution through AEPS-enabled authentication and cash withdrawal services.",
          imgSrc:
            "/assets/AEPSAPISolution/Perfect for Diverse Business Models/For Gig Economy Platforms.png",
        },
        {
          heading3: "Microfinance Institutions",
          heading3Para:
            "Enable MFIs to offer banking services to their customers through AEPS integration, supporting financial inclusion goals.",
          imgSrc:
            "/assets/AEPSAPISolution/Perfect for Diverse Business Models/NBFCs & Microfinance.png",
        },
        {
          heading3: "Healthcare & Insurance",
          heading3Para:
            "Integrate AEPS for insurance claim disbursements and healthcare payment processing through biometric authentication.",
          imgSrc:
            "/assets/AEPSAPISolution/Perfect for Diverse Business Models/Healthcare & Insurance.png",
        },
      ],
    },
  ];

  
  const material = [
    {
      heading2: "AEPS High-Performance & Scalable Architecture",
      heading2Para:
        "Handle high-volume AEPS transactions with confidence using our scalable infrastructure designed for enterprise workloads.",
      points: [
        {
          heading3: "Enterprise-Grade Performance",
          heading3Para:
            "Process thousands of concurrent AEPS transactions with average response times under 5 seconds, ensuring smooth customer experience during peak usage periods.",
          imgSrc:
            "/assets/AEPSAPISolution/High Performance & Scalability/Enterprise Solution.png",
        },
        {
          heading3: "Auto-Scaling Architecture",
          heading3Para:
            "Cloud-native infrastructure automatically scales to handle traffic spikes during festival seasons and government disbursement periods.",
          imgSrc:
            "/assets/AEPSAPISolution/High Performance & Scalability/Auto-Scaling Infrastructure.png",
        },
        {
          heading3: "Multi-Region Deployment",
          heading3Para:
            "Distributed infrastructure across multiple regions ensures low latency and high availability for users across different geographical locations.",
          imgSrc:
            "/assets/AEPSAPISolution/High Performance & Scalability/Multi-Channel Distribution.png",
        },
      ],
    },
  ];


  
  const HeadingSubheadings = [
    {
      heading2: "Quick AEPS Integration & Support",
      heading2Para:
        "Get your AEPS services operational quickly with our streamlined onboarding process and dedicated technical support.",
      points: [
        {
          heading3: "Rapid Deployment Process",
          heading3Para:
            "Most AEPS integrations complete within 2-3 business days including device setup, API integration, and compliance verification.",
          imgSrc:
            "/assets/AEPSAPISolution/Quick Implementation & Support/Flexible Deployment Options.png",
        },

        {
          heading3: "24/7 Technical Support",
          heading3Para:
            "Access round-the-clock technical assistance for API issues, device troubleshooting, and transaction support through multiple channels.",
          imgSrc:
            "/assets/AEPSAPISolution/Quick Implementation & Support/Support.png",
        },
        {
          heading3: "Training & Certification",
          heading3Para:
            "Comprehensive training programs for your team on AEPS operations, device handling, and regulatory compliance requirements.",
          imgSrc:
            "/assets/AEPSAPISolution/Quick Implementation & Support/ISO Certification.png",
        },
      ],
    },
  ];


  return (
    <main>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <AEPSHead />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <CardWithFeature features={features2} />
      <ContentWithDescriptivePoints content={content} />
      <FeaturesSection
        title="AOPAY Comprehensive AEPS Service Portfolio"
        description="Access a complete range of AEPS services through unified API endpoints with consistent response formats and real-time processing."
        sections={[
          {
            heading: "Core Banking Services",
            points: [
              "Cash withdrawal with biometric authentication",
              "Balance inquiry for all bank accounts",
              "Mini statement generation (last 10 transactions)",
              "Fund transfer between linked accounts",
            ],
          },
          {
            heading: "Advanced AEPS Features",
            points: [
              "Aadhaar Pay merchant payment processing",
              "Multi-bank account linking and management",
              "Transaction history and reporting",
              "Real-time settlement and reconciliation",
            ],
          },
          {
            heading: "Value-Added Services",
            points: [
              "Know Your Customer (KYC) through Aa",
              "Account opening assistance with biometric verification",
              "Insurance premium collection through AEPS",
              "Government benefit disbursement processing",
            ],
          },
        ]}
      />
      <AEPSCompliance />
      <AEPSAnalytics />
      <H2DescH3Desc contentWithDescription={material} />
      <HeadingSubheadingSection HeadingSubheadings={HeadingSubheadings} />
      <FAQSection faqContent={faqContent} />
      <GetStarted
        heading="Get Started Today & Accelerate Business Growth with AEPS Solution!"
        subHeading="Join businesses already using our AEPS solution to streamline payments, drive financial inclusion, and accelerate business growth."
        btn1="Get API Key"
        btn2="View Documentation"
      />
    </main>
  );
};

export default AEPS;
