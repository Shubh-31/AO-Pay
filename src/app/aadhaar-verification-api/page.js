import { ExploreProducts } from "@/components/ExploreProducts";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import {
  PaymentHead,
  CreditScoreSection,
  BenefitsSection,
  ValuesSection,
  VerificationFailure,
  ResourcesSection,
  GetStarted,
} from "@/sections/mySection";
import { StepsWithExplanation } from "@/sections/StepsWithExplanation";
import Script from "next/script";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import AadhaarVerificationBenefits from "@/sections/AadharVerification/AadharVerificationBenefits";

export const metadata = {
  title: "Aadhaar Verification API for KYC Compliance | AOPAY",
  description:
    "Verify Aadhaar cards instantly with AoPay's API. Enable e-KYC, demographic verification, biometric authentication for fintech, lending, healthcare with UIDAI-compliant integration.",
  keywords: [
    "Aadhaar verification API",
    "Aadhaar card verification",
    "instant Aadhaar verification",
    "UIDAI verification",
    "AOPay Aadhaar",
    "digital identity verification",
    "Aadhaar authentication",
    "Aadhaar verification online",
    "check Aadhaar status",
    "Aadhaar number verification",
    "verify Aadhaar details",
    "validate Aadhaar card",
    "Aadhaar KYC verification",
    "UIDAI Aadhaar verification",
    "Aadhaar address verification",
    "biometric Aadhaar verification",
    "online Aadhaar check",
    "Aadhaar identity verification",
    "Aadhaar linking verification",
    "Aadhaar mobile number update",
    "eKYC Aadhaar verification",
    "Aadhaar OTP verification",
    "check Aadhaar linked services",
    "UIDAI verification process",
    "verify Aadhaar name",
    "Aadhaar card verification tool",
    "Aadhaar verification status",
    "Aadhaar security check",
    "Aadhaar verification services",
    "Aadhaar card details",
    "Aadhaar biometrics verification",
    "Aadhaar verification by OTP",
    "Aadhaar details validation",
    "Aadhaar verification online India",
    "verify Aadhaar authenticity",
    "UIDAI service verification",
    "Aadhaar registration status",
    "Aadhaar mobile number verification",
    "Aadhaar verification portal",
    "validate Aadhaar number",
    "Aadhaar card lookup",
    "Aadhaar biometric check",
    "Aadhaar address change verification",
    "official Aadhaar verification tool",
  ],

  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://aopay.in/aadhaar-verification-api",
  },
  openGraph: {
    title: "Aadhaar Verification API | Instant KYC Solution | AoPay",
    description:
      "Verify Aadhaar cards instantly with e-KYC and biometric authentication.",
    url: "https://aopay.in/aadhaar-verification-api",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/aadhaar-verify-og.jpg",
        width: 800,
        height: 600,
        alt: "AOPAY Open Graph Image",
      },
    ],
    type: "website",
  },
};

const VerifyAadhar = () => 
  {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/aadhaar-verification-api",
    telephone: "011-42151216",
    description:
      "Cheapest Aadhaar Verification API in India for instant identity validation, secure KYC compliance, real-time verification, and dependable 24/7 assistance.",
    serviceType: [
      "White Label Aadhaar Verification API Solution",
      "Online Aadhaar KYC API Solution",
      "Aadhaar Verification API Provider Near Me",
      "Best Aadhaar Verification API Solution Provider in India",
      "Aadhaar Authentication API for instant KYC",
      "Aadhaar Verification System for Small Businesses",
      "Online Bulk Aadhaar KYC Solution",
      "Affordable Aadhaar KYC for Small Businesses",
      "Aadhaar Verification API for Banks and NBFCs in India",
      "Auto Aadhaar Verification Solution Provider",
      "Digital Aadhaar KYC Solution for Local Businesses",
      "Paperless Aadhaar KYC for fast customer onboarding with Aadhaar API",
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
    title: "Aadhaar Verification API for Instant Digital KYC & Identity Check",
    subTitle: `Secure, Real-time Aadhaar Authentication with 99.9% Accuracy Rate. Streamline Your KYC Process with Government-Approved Digital Identity Verification Solutions.`,
    imgSrc: "/assets/Verifications/Aadhar/Aadhaar_1.png",
    alt: "Aadhaar verification API system for instant identity authentication and KYC compliance.",
    btn1: "Start Integration Now",
    btn1Link: "/contact-us",
  };
  const features = [
    {
      icon: "/assets/Verifications/Validation.png",
      title: "Aadhaar Number Validation",
      description:
        "Verify the authenticity of an Aadhaar number to confirm that it exists and matches government records.",
    },
    {
      icon: "/assets/Verifications/Biometric.png",
      title: "Biometric Matching",
      description:
        "Use biometric data (fingerprints or iris scan) to match the identity with Aadhaar records for heightened security.",
    },
    {
      icon: "/assets/Verifications/OTP_Penny_Less.png",
      title: "Aadhaar OTP Verification",
      description:
        "Verify an Aadhaar number through a One-Time Password (OTP) sent to the registered mobile number, ensuring secure access.",
    },
  ];
  const benefits = [
    {
      description: "Industry-Best Verification Process",
    },
    {
      description: "99.9% Success Rate",
    },
    {
      description: "Instant Verification in 2 seconds",
    },
    {
      description: "Coverage Across Major Government Aadhaar Databases",
    },
  ];

  const benefitsHeading = {
    heading: "Improving Your Aadhaar Verification Process",
    imgUrl: "/assets/Verifications/Aadhar/Aadhaar_2.png",
    alt: "Biometric Aadhaar verification API with OTP validation and demographic data retrieval.",
  };

  const verificationContent = {
    para1:
      "Aadhaar verification may fail if the Aadhaar number is invalid, mismatched, or the mobile number is not registered in the records.",
    para2:
      "Find out the reason for verification failure instantly and take the necessary steps to resolve it.",

    imgUrl: "/assets/Verifications/Aadhar/Aadhaar_3.png",
  };

  const content = [
    {
      heading2: "AOPAY Aadhaar Validation API Solution",
      heading2Para:
        "AOPAY comprehensive Aadhaar verification solution empowers businesses to perform instant digital identity verification with enterprise-grade security and reliability. Built for modern applications requiring seamless KYC compliance and user authentication.",
      points: [
        {
          heading3: "Instant Aadhaar Authentication",
          heading3Para:
            "Verify Aadhaar numbers in real-time with lightning-fast response times under 2 seconds. Our secure infrastructure ensures consistent performance for high-volume identity verification need",
          imgSrc:
            "/assets/AadhaarVerification/AOPAY Aadhaar Validation API/Instant Aadhaar Authentication.png",
        },

        {
          heading3: "Comprehensive KYC Data Extraction",
          heading3Para:
            "Extract verified demographic information including name, address, date of birth, and gender directly from UIDAI database for complete customer onboarding automation",
          imgSrc:
            "/assets/AadhaarVerification/AOPAY Aadhaar Validation API/Comprehensive KYC Data Extraction.png",
        },
        {
          heading3: "Bank-Grade Security & Compliance",
          heading3Para:
            "End-to-end encryption, PCI DSS compliance, and secure data handling ensure complete protection of sensitive Aadhaar information and regulatory compliance.",
          imgSrc:
            "/assets/AadhaarVerification/AOPAY Aadhaar Validation API/Bank-Grade Security & Compliance.png",
        },
        {
          heading3: "OTP-Based Aadhaar Verification",
          heading3Para:
            "Implement secure two-factor authentication using Aadhaar-linked mobile OTP verification for enhanced security and fraud prevention in digital transactions",
          imgSrc:
            "/assets/AadhaarVerification/AOPAY Aadhaar Validation API/OTP-Based Mobile Verification.png",
        },
        {
          heading3: "Real-time Status Updates",
          heading3Para:
            "Receive instant webhook notifications for verification status, ensuring seamless integration with your existing workflow and customer experience optimization.",
          imgSrc:
            "/assets/AadhaarVerification/AOPAY Aadhaar Validation API/Real-time Status Updates.png",
        },
        {
          heading3: "Advanced Analytics Dashboard",
          heading3Para:
            "Monitor verification success rates, transaction volumes, and API performance with detailed analytics and reporting tools for business intelligence.",
          imgSrc:
            "/assets/AadhaarVerification/AOPAY Aadhaar Validation API/Advanced Analytics Dashboard.png",
        },
      ],
    },
  ];

  const Steps = [
    {
      heading2: "Easy Aadhaar Authentication API Integration Process",
      heading2Para:
        "Integrating our Aadhaar solution into your platform is streamlined and developer-friendly. Whether you're building web applications, mobile apps, or enterprise systems, our comprehensive documentation and SDKs ensure rapid deployment.",
      steps: [
        {
          step1: "API Registration",
          step1Para:
            "Sign up for your API credentials and access comprehensive documentation with code examples and integration guides.",
          imgSrc:
            "/assets/AadhaarVerification/Easy Aadhaar Verification API Integration Process/API Registration.png",
        },
        {
          step2: "Authentication Setup",
          step2Para:
            "Configure secure API authentication using your unique keys and implement proper security headers for production environment.",
          imgSrc:
            "/assets/AadhaarVerification/Easy Aadhaar Verification API Integration Process/Authentication Setup.png",
        },
        {
          step3: "API Implementation",
          step3Para:
            "Integrate verification endpoints using our RESTful API with support for multiple programming languages and frameworks.",
          imgSrc:
            "/assets/AadhaarVerification/Easy Aadhaar Verification API Integration Process/API Implementation.png",
        },
        {
          step4: "Testing & Go Live",
          step4Para:
            "Test your integration in sandbox environment before going live with full production access and 24/7 technical support.",
          imgSrc:
            "/assets/AadhaarVerification/Easy Aadhaar Verification API Integration Process/Testing & Go Live.png",
        },
      ],
    },
  ];

  const material = [
    {
      heading2: "How Does Aadhaar Verification API Work?",
      heading2Para:
        "AOPAY Aadhaar verification Solution connects seamlessly with UIDAI's authentication infrastructure to provide real-time identity verification. Here's the complete verification workflow:",
      points: [
        {
          heading3: "1. User Consent & Data Input",
          heading3Para:
            "Customer provides Aadhaar number and explicit consent for verification as per privacy regulations and UIDAI guidelines.",
          imgSrc:
            "/assets/AadhaarVerification/How Does Aadhaar Verification API Work/1. User Consent & Data Input.png",
        },
        {
          heading3: "2. Secure Data Transmission",
          heading3Para:
            "API encrypts and transmits verification request to UIDAI servers through secure channels with end-to-end protection.",
          imgSrc:
            "/assets/AadhaarVerification/How Does Aadhaar Verification API Work/2. Secure Data Transmission.png",
        },
        {
          heading3: "3. Identity Authentication",
          heading3Para:
            "UIDAI validates the Aadhaar number and returns verification status along with demographic information if authorized.",
          imgSrc:
            "/assets/AadhaarVerification/How Does Aadhaar Verification API Work/3. Identity Authentication.png",
        },
        {
          heading3: "4. Instant Response Delivery",
          heading3Para:
            "Receive immediate verification results with detailed response codes and extracted KYC data for seamless customer onboarding.",
          imgSrc:
            "/assets/AadhaarVerification/How Does Aadhaar Verification API Work/4. Instant Response Delivery.png",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Advanced Aadhaar Authentication Methods",

      points: [
        {
          heading3: "Demographic Verification",
          heading3Para:
            "Verify customer identity using basic demographic information including name, date of birth, and address matching against Aadhaar database records for comprehensive identity validation.",
          imgSrc:
            "/assets/AadhaarVerification/Advanced Aadhaar Authentication Methods/demographic verification.png",
        },
        {
          heading3: "Biometric Authentication",
          heading3Para:
            "Implement fingerprint and iris-based biometric verification for highest security standards in financial services and high-risk transactions requiring foolproof identity confirmation.",
          imgSrc:
            "/assets/AadhaarVerification/Advanced Aadhaar Authentication Methods/Biometric Authentication.png",
        },
        {
          heading3: "OTP-Based Aadhaar Verification",
          heading3Para:
            "Leverage Aadhaar-linked mobile number OTP verification for secure two-factor authentication, ensuring genuine user presence and preventing identity fraud attempts.",
          imgSrc:
            "/assets/AadhaarVerification/Advanced Aadhaar Authentication Methods/OTP-Based Mobile Verification.png",
        },
        {
          heading3: "eKYC Document Extraction",
          heading3Para:
            "Extract complete KYC documents including name, address, photo, and demographic details in XML format for automated customer onboarding and regulatory compliance.",
          imgSrc:
            "/assets/AadhaarVerification/Advanced Aadhaar Authentication Methods/eKYC Document Extraction.png",
        },
      ],
    },
  ];

  const benefits1 = [
    "99.9% Verification Accuracy Rate",
    "Real-time Response Under 2 Seconds",
    "UIDAI Compliant & Government Approved",
    "24/7 Technical Support & Monitoring",
    "Comprehensive Developer Documentation",
    "Flexible Integration Options",
    "Advanced Security & Encryption",
    "Scalable Infrastructure for High Volume",
    "Detailed Analytics & Reporting",
    "Regulatory Compliance Support",
  ];

  const features1 = [
    "Successful Aadhaar verification",
    "No setup fees or monthly charges",
    "Volume discounts for 10K+ verifications",
    "Free sandbox environment for testing",
    "24/7 technical support included",
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2: "Why Choose AOPAY Aadhaar Verification Solution?",

      points: [
        {
          heading3: "Plug-and-Play Integration",
          heading3Para:
            "RESTful APIs with comprehensive documentation and SDKs for popular programming languages ensure quick implementation across all platforms.",
          imgSrc:
            "/assets/AadhaarVerification/Why Choose AOPAY Aadhaar Verification Solution/Plug-and-Play Integration.png",
        },
        {
          heading3: "Enterprise Security Standards",
          heading3Para:
            "Bank-grade encryption, PCI DSS compliance, and secure data handling protocols protect sensitive customer information throughout the verification process.",
          imgSrc:
            "/assets/AadhaarVerification/Why Choose AOPAY Aadhaar Verification Solution/Enterprise Security Standards.png",
        },
        {
          heading3: "Rapid Customer Onboarding",
          heading3Para:
            "Reduce customer acquisition time from hours to minutes with instant Aadhaar verification and automated KYC document extraction capabilities.",
          imgSrc:
            "/assets/AadhaarVerification/Why Choose AOPAY Aadhaar Verification Solution/Rapid Customer Onboarding.png",
        },
        {
          heading3: "24/7 Technical Excellence",
          heading3Para:
            "Dedicated technical support team available round-the-clock with guaranteed response times and proactive system monitoring for maximum uptime.",
          imgSrc:
            "/assets/AadhaarVerification/Why Choose AOPAY Aadhaar Verification Solution/Technical.png",
        },
      ],
    },
  ];

  const linkContent = {
    headingContent: "e-KYC Solutions",
    url1: [
      {
        heading: "PAN Verification",
        paragraph:
          "Ensure Validity of PAN Numbers with Quick, Reliable PAN Verify For Official & Financial Purposes",
        link: "/pan-verification",
        icon: "/assets/ExploreProducts/Verification/PANVerify.png",
        alt: "PAN Verification",
      },
    ],
    url2: [
      {
        heading: "GST Verification",
        paragraph:
          "Verify GSTINs & Validate Tax Status For Smooth Transactions & Compliance",
        link: "/gst-verification",
        icon: "/assets/ExploreProducts/Verification/GST.png",
        alt: "GST Verification",
      },
    ],
    url3: [
      {
        heading: "Bank A/C Verification",
        paragraph:
          "Verify Bank Account Details For Accurate Payments, Transfers, & Registrations",
        link: "/bank-account-verification",
        icon: "/assets/ExploreProducts/Verification/BankAC.png",
        alt: "Bank A/C Verification",
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

      <ContentWithDescriptivePoints content={content} />
      <StepsWithExplanation Steps={Steps} />
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Aadhaar Verification API Sample Code For Developers
        </h2>

        <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-xl overflow-x-auto">
          <code>
            {`curl -X POST "https://api.aopay.in/v1/aadhaar/verify" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "aadhaar_number": "XXXX-XXXX-XXXX",
    "consent": true,
    "purpose": "KYC_VERIFICATION"
  }'`}
          </code>
        </pre>
      </section>
      <H2DescH3Desc contentWithDescription={material} />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <AadhaarVerificationBenefits />
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center mb-12">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540]">
            Transparent Aadhaar Verification API Pricing
          </h2>
          <p className="text-gray-700 mt-4 text-lg max-w-3xl mx-auto">
            Simple, transparent pricing with no hidden fees. Pay only for
            successful verifications — with volume discounts for enterprise
            customers.
          </p>
        </div>

        {/* Pricing Block */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-[#0a2540] mb-3">
              Pay-Per-Verification Model
            </h3>
            <p className="text-gray-600 mb-6">
              Flexible pricing that scales with your business needs:
            </p>

            {/* Features List */}
            <ul className="space-y-3 text-left">
              {[
                "Successful Aadhaar verification",
                "No setup fees or monthly charges",
                "Volume discounts for 10K+ verifications",
                "Free sandbox environment for testing",
                "24/7 technical support included",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-[#f9fafc] rounded-xl p-3 hover:bg-[#f1f5fb] transition"
                >
                  <span className="text-green-600 font-bold text-xl leading-none">
                    ✓
                  </span>
                  <span className="text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

      
        </div>
      </section>

      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <GetStarted
        heading="Get Started with Aadhaar Verification Solution Today"
        subHeading="Join thousands of businesses already using our Aadhaar verification solution to streamline their digital identity verification process. Start with our free sandbox environment and go live in minutes"
        btn1="View Documentation"
      />
      {/* <ExploreProducts linkContent={linkContent} /> */}
    </>
  );
};

export default VerifyAadhar;
