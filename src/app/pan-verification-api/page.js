import { ExploreProducts } from "@/components/ExploreProducts";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import {
  PaymentHead,
  CreditScoreSection,
  BenefitsSection,
  ValuesSection,
  VerificationFailure,
  ResourcesSection,
  GetStarted,
  FAQSection,
} from "@/sections/mySection";
import PANVerificationSection from "@/sections/PANVerification/PanVerificationSection";
import TransparentPricing from "@/sections/PANVerification/TransparentPricing";
import { StepsWithExplanation } from "@/sections/StepsWithExplanation";
import Script from "next/script";

export const metadata = {
  title: "PAN Verification API for Identity Validation | AOPAY",
  description:
    "Verify PAN cards in real-time with AoPay's API. Validate PAN details, check status, ensure compliance for banking, lending, fintech with instant verification and fraud prevention.",
  keywords: [
    "PAN verification API",
    "PAN card verification",
    "instant PAN verification",
    "PAN validation",
    "AOPay PAN verification",
    "KYC compliance",
    "PAN authentication online",
    "verify PAN details",
    "PAN verification online",
    "check PAN status",
    "validate PAN card number",
    "online PAN verification tool",
    "PAN authentication",
    "PAN KYC verification",
    "PAN details update",
    "check PAN registration status",
    "PAN verification India",
    "verify PAN and name",
    "PAN validation process",
    "PAN verification for tax",
    "verify PAN for loan",
    "official PAN verification",
    "e-PAN verification service",
    "PAN card status check",
    "verify PAN with UIDAI",
    "PAN verification service",
    "PAN number verification",
    "check PAN card link status",
    "PAN registration check",
    "PAN KYC for bank account",
    "PAN linking verification",
    "PAN verification for tax filing",
    "check PAN address",
    "PAN verification by name",
    "PAN update verification",
    "verify PAN for e-filing",
    "PAN status India",
    "verify PAN with date of birth",
    "PAN authentication service",
    "check PAN linked services",
    "PAN details confirmation",
    "PAN verification for business",
    "e-PAN details verification",
    "PAN card inquiry service",
    "PAN verification for mobile",
  ],

  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://aopay.in/pan-verification-api",
  },
  openGraph: {
    title: "PAN Verification API | Instant PAN Validation | AoPay",
    description:
      "Verify PAN cards in real-time with instant validation and fraud prevention.",
    url: "https://aopay.in/pan-verification-api",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/pan-verify-og.jpg",
        width: 800,
        height: 600,
        alt: "AOPAY Open Graph Image",
      },
    ],
    type: "website",
  },
};

const VerifyPanCard = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/pan-verification-api",
    telephone: "011-42151216",
    description:
      "Cheapest PAN Verification API in India for instant PAN validation, secure KYC compliance, real-time verification, and dependable 24/7 assistance.",
    serviceType: [
      "White Label PAN verification API Solution",
      "Online PAN validation API Solution",
      "PAN verification API Provider Near Me",
      "Best PAN verification API Solution Provider in India",
      "Digital PAN authentication API",
      "Best PAN verification API for Fintechs & NBFCs",
      "Bulk PAN verification API Solution",
      "Affordable PAN verification API for Small Businesses",
      "PAN verification API for instant KYC in India",
      "Auto PAN verification Services Provider",
      "Digital PAN verification solution for Local Businesses",
      "PAN API for faster loan approvals",
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
    title: "PAN Verification API for Financial Services & Fintech",
    subTitle: `Enable instant, ITD-compliant PAN card verification with our robust API solution. Trusted by 300+ financial institutions, banks, and fintech companies across India for seamless tax identity validation with 99.9% accuracy guaranteed.`,
    imgSrc: "/assets/Verifications/Pan/PAN_1.png",
    alt: "PAN card verification API for real-time taxpayer identification number validation.",
    btn1: "Get Started",
    btn1Link: "/contact-us",
  };
  const features = [
    {
      icon: "/assets/Verifications/Validation.png",
      title: "PAN Card Number Verification",
      description:
        "Simply input the PAN number to verify its validity and confirm the registered details with official government records.",
    },
    {
      icon: "/assets/Verifications/Matching.png",
      title: "Name and DOB Matching",
      description:
        "Match the PAN holder's name and date of birth with the database to ensure the PAN card details align with the individual’s records.",
    },
    {
      icon: "/assets/Verifications/Tax_Filing.png",
      title: "Tax Filing Status",
      description:
        "Check the status of PAN holders for compliance with income tax filings, ensuring that all records are up to date.",
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
      description: "Coverage Across Major Government PAN Databases",
    },
  ];

  const benefitsHeading = {
    heading: "Improving Your PAN Verification Process",
    imgUrl: "/assets/Verifications/Pan/PAN_2.png",
    alt: "Instant PAN verification API system ensuring accurate customer identity confirmation.",
  };

  const verificationContent = {
    para1:
      "PAN verification may fail if the number is invalid, mismatched, or the PAN holder has not filed taxes for an extended period.",
    para2:
      "Find out the reason for verification failure instantly and take the necessary steps to resolve it.",

    imgUrl: "/assets/Verifications/Pan/PAN_3.png",
  };

  const linkContent = {
    headingContent: "e-KYC Solutions",
    url1: [
      {
        heading: "Aadhaar Verification",
        paragraph:
          "Verify Aadhaar Details Easily & Securely for Identity Confirmation & Authentication",
        link: "/aadhaar-verification",
        icon: "/assets/ExploreProducts/Verification/Aadhaar.png",
        alt: "Aadhar Verification",
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

  const content = [
    {
      heading2: "Why Choose Our PAN Card Verification API?",
      heading2Para:
        "Streamline your KYC processes and ensure tax compliance with India's most reliable PAN verification solution. Our API integrates seamlessly with your existing systems, reducing verification time from minutes to seconds.",
      points: [
        {
          heading3: "Lightning-Fast PAN Validation",
          heading3Para:
            "Complete PAN card verification and name matching in under 2 seconds. Our optimized infrastructure ensures minimal latency for real-time tax identity verification across all your customer onboarding workflows.",
          imgSrc:
            "/assets/PAN/AOPAY Advanced PAN Validation API/Instant PAN Card Validation.png",
        },

        {
          heading3: "ITD Compliant & Secure",
          heading3Para:
            "Built with enterprise-grade security and full Income Tax Department compliance. All verification requests are processed through secure, encrypted channels with comprehensive audit trails for regulatory requirements.",
          imgSrc:
            "/assets/PAN/AOPAY Advanced PAN Validation API/Complete PAN Holder Details.png",
        },
        {
          heading3: "99.9% Verification Accuracy",
          heading3Para:
            "Rely on our advanced matching algorithms with guaranteed 99.9% accuracy. Our intelligent name matching technology handles variations, nicknames, and common spelling differences for precise verification results.",
          imgSrc:
            "/assets/PAN/AOPAY Advanced PAN Validation API/Income Tax Department Compliance.png",
        },
       
      ],
    },
  ];

  const Steps = [
    {
      heading2: "Easy PAN Verification API Integration Process",
      heading2Para:
        "Integrating our PAN verification API into your platform is streamlined and developer-friendly. Whether you're building fintech applications, banking systems, or e-commerce platforms, our comprehensive documentation ensures rapid deployment.",
      steps: [
        {
          step1: "API Registration",
          step1Para:
            "Sign up for your API credentials and access comprehensive documentation with code examples and integration guides for PAN verification.",
          imgSrc:
            "/assets/PAN/Easy PAN Verification API Integration Process/API Registration.png",
        },
        {
          step2: "Authentication Setup",
          step2Para:
            "Configure secure API authentication using your unique keys and implement proper security headers for production environment compliance.",
          imgSrc:
            "/assets/PAN/Easy PAN Verification API Integration Process/Authentication Setup.png",
        },
        {
          step3: "API Implementation",
          step3Para:
            "Integrate PAN verification endpoints using our RESTful API with support for multiple programming languages and frameworks.",
          imgSrc:
            "/assets/PAN/Easy PAN Verification API Integration Process/API Implementation.png",
        },
        {
          step4: "Testing & Go Live",
          step4Para:
            "Test your integration in sandbox environment before going live with full production access and 24/7 technical support.",
          imgSrc:
            "/assets/PAN/Easy PAN Verification API Integration Process/Testing & Go Live.png",
        },
      ],
    },
  ];

  const material = [
    {
      heading2: "Developer-Friendly API Integration",
      heading2Para:
        "Get started with our PAN Verification API in minutes. Our comprehensive documentation, SDK libraries, and dedicated developer support make integration seamless across all technology platforms.",
      points: [
        {
          heading3: "RESTful API Design",
          heading3Para:
            "Clean, intuitive REST endpoints with JSON responses. Support for multiple programming languages including Python, Java, Node.js, PHP, Ruby, and .NET with detailed implementation examples.",
          imgSrc:
            "/assets/PAN/How Does PAN Verification API Work/1. PAN Data Input & Consent.png",
        },
        {
          heading3: "Complete Developer Resources",
          heading3Para:
            "Step-by-step integration guides, comprehensive API reference, and interactive testing console. Access sample code, error handling best practices, and implementation guidelines.",
          imgSrc:
            "/assets/PAN/How Does PAN Verification API Work/2. Secure Data Transmission.png",
        },
        {
          heading3: "Testing Environment",
          heading3Para:
            "Test all verification scenarios in our dedicated sandbox environment before production deployment. Simulate various verification states and error conditions with test PAN numbers.",
          imgSrc:
            "/assets/PAN/How Does PAN Verification API Work/3. PAN Authentication.png",
        },

       
      ],
    },
  ];

  const benefits1 = [
    "99.9% PAN Verification Accuracy",
    "Real-time Response Under 1 Second",
    "Income Tax Department Approved",
    "24/7 Technical Support & Monitoring",
    "Comprehensive Developer Documentation",
    "Bulk Processing Capabilities",
    "Advanced Security & Encryption",
    "Scalable Infrastructure for High Volume",
    "Detailed Analytics & Reporting",
    "Tax Compliance & Regulatory Support",
  ];

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Regulatory Compliance & Security Standards",
      heading2Para:
        "Stay compliant with Indian tax laws and financial regulations. Our platform ensures your verification processes meet all regulatory requirements while maintaining the highest security and data protection standards.",
      points: [
        {
          heading3: "Tax Law Compliance",
          heading3Para:
            "Full compliance with Income Tax Act provisions, RBI guidelines, and SEBI regulations. Secure data transmission, encrypted storage, and automatic data purging as per compliance mandates.",
          imgSrc:
            "/assets/PAN/Advanced PAN Card Verification Methods/Basic PAN Number Validation.png",
        },
        {
          heading3: "Security Certifications",
          heading3Para:
            "ISO 27001 certified infrastructure with SOC 2 Type II compliance. Regular security audits, penetration testing, and vulnerability assessments ensure your data remains protected.",
          imgSrc:
            "/assets/PAN/Advanced PAN Card Verification Methods/Name Matching Verification.png",
        },
        
      ],
    },
  ];

  const features1 = [
    "Pay per successful PAN verification",
    "No setup fees or monthly charges",
    "Volume discounts for 10K+ verifications",
    "Free sandbox environment for testing",
    "24/7 technical support included",
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2: "Enterprise-Grade Performance & Reliability",
      heading2Para:
        "Built for high-volume financial institutions with enterprise-level performance, scalability, and reliability requirements. Handle millions of verifications with consistent sub-second response times.",
      points: [
        {
          heading3: "High Availability Infrastructure",
          heading3Para:
            "99.9% uptime SLA with redundant systems across multiple data centers. Load balancing and failover mechanisms ensure continuous service availability for your critical applications.",
          imgSrc:
            "/assets/PAN/Why Choose AOPAY PAN Verification Solution/Official Government Integration.png",
        },
        {
          heading3: "Scalable Architecture",
          heading3Para:
            "Process up to 10,000 concurrent verification requests with auto-scaling infrastructure. Handle traffic spikes during peak onboarding periods without performance degradation.",
          imgSrc:
            "/assets/PAN/Why Choose AOPAY PAN Verification Solution/Enterprise Security Standards.png",
        },
        
      ],
    },
  ];

  
  const faqContent = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "How fast is the PAN verification process?",
        answer:
          "Our PAN verification API typically processes requests in under 2 seconds, including real-time validation with the Income Tax Department database and advanced name matching algorithms.",
      },
      {
        question: "Is the API ITD compliant and secure?",
        answer:
          "Yes, our API is fully compliant with Income Tax Department guidelines and follows all prescribed security protocols. We maintain proper audit trails and data handling practices as required by tax regulations.",
      },
      {
        question: "What data is stored after PAN verification?",
        answer:
          "We follow strict data retention policies in accordance with tax laws and privacy regulations. Personal information is handled securely and retained only as required for compliance and audit purposes.",
      },
      {
        question: "Do you support bulk PAN verification?",
        answer:
          "Yes, our API supports both real-time individual verifications and batch processing for bulk verification requirements. Contact our team for custom bulk processing solutions and pricing.",
      },
      {
        question: "What is the accuracy rate of name matching?",
        answer:
          "Our advanced name matching algorithms achieve 99.9% accuracy by handling name variations, nicknames, phonetic similarities, and common spelling differences using machine learning and fuzzy logic.",
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

      <PANVerificationSection />

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          PAN Verification Use Cases Across Industries
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              imgSrc:
                "/assets/PAN/PAN Verification Use Cases/Banking & Financial Services.png",
              title: "Banking & Financial Services",
              description:
                "Streamline account opening processes with instant PAN verification for savings accounts, credit cards, loans, and investment products ensuring complete KYC compliance and regulatory adherence.",
            },
            {
              imgSrc:
                "/assets/PAN/PAN Verification Use Cases/Insurance & NBFC Onboarding.png",
              title: "Digital Lending & Fintech",
              description:
                "Enable instant loan approvals with verified tax identity checks. Reduce fraud risk and ensure income tax compliance for digital lending platforms, P2P lending, and BNPL services.",
            },
            {
              imgSrc:
                "/assets/PAN/PAN Verification Use Cases/E-commerce & Digital Payments.png",
              title: "Investment & Wealth Management",
              description:
                "Verify investor identities for mutual fund applications, stock trading accounts, and wealth management services. Meet SEBI compliance requirements with reliable PAN verification.",
            },
            {
              imgSrc:
                "/assets/PAN/PAN Verification Use Cases/Investment & Trading Platforms.png",
              title: "E-commerce & Marketplaces",
              description:
                "Protect your platform from fraudulent seller accounts and ensure tax compliance. Enable secure high-value transactions with verified merchant identities and tax credentials.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-6 h-auto mb-2"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <H2DescH3Desc contentWithDescription={material} />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <TransparentPricing />
      <FAQSection faqContent={faqContent} />
      <GetStarted
        heading="Get Started with PAN Verification API"
        subHeading="Connect with our integration specialists to learn how our PAN Verification API can streamline your KYC processes and ensure tax compliance for your financial services."
        btn1="Email: sales@aopay.in"
        btn2="Phone: +91-XXXXXXXXXX"
        btn3="Documentation"
        btn4="Support: 24/7 Developer Support"
      />
      {/* <ExploreProducts linkContent={linkContent} /> */}
    </>
  );
};

export default VerifyPanCard;
