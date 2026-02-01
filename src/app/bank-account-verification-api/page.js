import { ExploreProducts } from "@/components/ExploreProducts";
import { BankAccountPricing } from "@/sections/BankAccountPricing";
import { BankAccountVerifyUseCases } from "@/sections/BankAccountVerifyUseCases";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import {
  PaymentHead,
  CreditScoreSection,
  BenefitsSection,
  ResourcesSection,
  ValuesSection,
  VerificationFailure,
  GetStarted,
} from "@/sections/mySection";
import { StepsWithExplanation } from "@/sections/StepsWithExplanation";
import { CheckCircle2, CheckCircle2Icon } from "lucide-react";
import Script from "next/script";

export const metadata = {
  title: "Bank Account Verification API for Payout Safety | AOPAY",
  description:
    "Verify bank accounts instantly with AoPay's penny drop verification. Validate account holder name, IFSC code, account status for payments, lending, vendor onboarding with 100% accuracy.",
  keywords: [
    "bank account verification API",
    "bank verification",
    "IFSC verification",
    "account verification",
    "AOPay bank verification",
    "penny drop verification",
    "banking KYC India",
    "verify bank account details",
    "bank account number verification",
    "online bank account check",
    "verify bank account holder",
    "bank account details confirmation",
    "bank account validation",
    "verify bank account name",
    "account number verification online",
    "bank account linking verification",
    "online account verification service",
    "account holder identity check",
    "secure bank verification",
    "bank account details check",
    "bank KYC verification",
    "verify bank account for payment",
    "bank account status check",
    "check bank account validity",
    "verify account number",
    "verify bank account by IFSC code",
    "bank account authentication",
    "bank account verification service",
    "account verification for transfers",
    "bank account holder check",
    "verify account status for loans",
    "secure bank verification tool",
    "bank account details confirmation online",
    "confirm bank account ownership",
    "online bank account lookup",
    "verify bank account for salary",
    "bank account validation process",
    "verify bank account using PAN",
    "verify account linked mobile",
    "bank account check service",
    "online bank details verification",
  ],

  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://aopay.in/bank-account-verification-api",
  },
  openGraph: {
    title: "Bank Account Verification API | Penny Drop Solution | AoPay",
    description:
      "Verify bank accounts instantly with penny drop verification and name matching.",
    url: "https://aopay.in/bank-account-verification-api",
    siteName: "AOPay",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/bank-verify-og.jpg",
        width: 800,
        height: 600,
        alt: "AOPAY Open Graph Image",
      },
    ],
    type: "website",
  },
};

const BankAccount = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/bank-account-verification-api",
    telephone: "011-42151216",
    description:
      "Cheapest Bank Account Verification API in India for instant account validation, secure KYC compliance, real-time verification, and dependable 24/7 support.",
    serviceType: [
      "White Label Bank Account Verification API Solution",
      "Online Bank Account Validation API Solution",
      "Bank Account Verification API Provider Near Me",
      "Best Bank Account Verification API Solution Provider in India",
      "Instant Bank Account Verification Services",
      "Real time Bank Account Verification System for Small Businesses",
      "Bulk Bank Account Verification API Solution",
      "Affordable Bank Account Verification Solution for Small Businesses",
      "Bank Account Verification API for NBFCs & Fintechs in India",
      "Auto Bank Account Verification API Provider for payroll processing",
      "Digital Bank Account Verification API for Payment gateways",
      "Bank Account Verification API for digital lending platforms",
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
    title: "Penny Drop Bank Account Verification API For Secure Payouts",
    subTitle:
      "Secure, Real-time Bank Account Validation with Penny Drop Technology. Streamline Your Payment Process with RBI-Compliant Account Verification Solutions for Fintech Platforms.",
    imgSrc: "/assets/Verifications/Bank_AC/Bank_AC_1.png",
    alt: "Bank account verification API for instant account number and IFSC code validation.",
    btn1: "Start Integration Now",
    btn1Link: "/contact-us",
  };
  const features = [
    {
      icon: "/assets/Verifications/UPI_ID.png",
      title: "UPI ID",
      description:
        "Check your UPI ID exists and if exists, matching it with your bank account details. Confirm beneficiary details to complete the process.",
    },
    {
      icon: "/assets/Verifications/Penny.png",
      title: "Penny Testing",
      description:
        "Drop a small amount (usually ₹1) into your account. Check your account or banking app to verify the deposited amount.",
    },
    {
      icon: "/assets/Verifications/IFSC_Code.png",
      title: "IFSC Code",
      description:
        "Enter your bank account number and IFSC code of your bank branch. System checks the validity of IFSC code against bank records and complete the verification process.",
    },
    {
      icon: "/assets/Verifications/OTP_Penny_Less.png",
      title: "Penniless Testing",
      description:
        "Uses various methods like: Aadhaar Based Verification, Bank Statement, OTP Based Verification (Mobile number registered in bank records).",
    },
  ];
  const benefits = [
    {
      description: "Industry Best Verification Process",
    },
    {
      description: "99.9% Success Rate",
    },
    {
      description: "Instant Verification in 2 seconds",
    },
    {
      description: "Coverage of major leading banks",
    },
  ];

  const benefitsHeading = {
    heading: "Improving Your Verification Process",
    imgUrl: "/assets/Verifications/Bank_AC/Bank_AC_2.png",
    alt: "Penny drop bank verification API system ensuring accurate beneficiary account details.",
  };

  const verificationContent = {
    para1:
      "Verification may not go through if there’s an issue with the account number, IFSC code, or if account is blocked, frozen, or closed.",
    para2:
      "Find out the reason for verification failure instantly and take the necessary steps to resolve it.",

    imgUrl: "/assets/Verifications/Bank_AC/Bank_AC_3.png",
  };

  const content = [
    {
      heading2: "AOPAY Bank Account Validation API Solution",
      heading2Para:
        "Our comprehensive bank account verification empowers fintech companies and financial institutions to perform instant account validation with enterprise-grade security. Built for modern payment systems requiring seamless account authentication and penny drop verification.",
      points: [
        {
          heading3: "Instant Account Validation",
          heading3Para:
            "Verify bank account numbers and IFSC codes in real-time with lightning-fast response times under 2 seconds. Our secure infrastructure ensures consistent performance for high-volume payment processing.",
          imgSrc:
            "/assets/BankAccount/AOPAY Advanced Bank Account Validation/Instant Account Validation.png",
        },

        {
          heading3: "Penny Drop Verification",
          heading3Para:
            "Advanced penny drop technology validates account ownership by transferring ₹1 and immediately reversing it, ensuring genuine account holder verification for secure transactions.",
          imgSrc:
            "/assets/BankAccount/AOPAY Advanced Bank Account Validation/Penny Drop Verification.png",
        },
        {
          heading3: "RBI Compliant & Secure",
          heading3Para:
            "Full compliance with RBI guidelines and banking regulations ensures secure account verification with complete data protection and regulatory adherence for financial institutions.",
          imgSrc:
            "/assets/BankAccount/AOPAY Advanced Bank Account Validation/RBI Compliant & Secure.png",
        },
        {
          heading3: "IFSC Code Validation",
          heading3Para:
            "Real-time IFSC code verification with comprehensive bank branch details including bank name, branch address, and routing information for accurate payment processing.",
          imgSrc:
            "/assets/BankAccount/AOPAY Advanced Bank Account Validation/IFSC Code Validation.png",
        },
        {
          heading3: "Account Holder Name Matching",
          heading3Para:
            "Advanced name matching algorithms verify account holder names against provided customer information, ensuring accurate beneficiary validation and fraud prevention.",
          imgSrc:
            "/assets/BankAccount/AOPAY Advanced Bank Account Validation/Account Holder Name Matching.png",
        },
        {
          heading3: "Transaction Analytics Dashboard",
          heading3Para:
            "Monitor verification success rates, transaction volumes, and API performance with detailed analytics and reporting tools for payment optimization and risk management.",
          imgSrc:
            "/assets/BankAccount/AOPAY Advanced Bank Account Validation/Transaction Analytics Dashboard.png",
        },
      ],
    },
  ];

  const Steps = [
    {
      heading2: "Easy Bank Account Verification API Integration Process",
      heading2Para:
        "Integrating bank account verification solution into your fintech platform is streamlined and developer-friendly. Whether you're building payment gateways, digital wallets, or lending platforms, our comprehensive documentation ensures rapid deployment.",
      steps: [
        {
          step1: "API Registration",
          step1Para:
            "Sign up for your API credentials and access comprehensive documentation with code examples and integration guides for banking verification.",
          imgSrc:
            "/assets/BankAccount/Easy Bank Account Verification API Integration/API Registration.png",
        },
        {
          step2: "Authentication Setup",
          step2Para:
            "Configure secure API authentication using your unique keys and implement proper security headers for production banking environment.",
          imgSrc:
            "/assets/BankAccount/Easy Bank Account Verification API Integration/Authentication Setup.png",
        },
        {
          step3: "API Implementation",
          step3Para:
            "Integrate bank verification endpoints using our RESTful API with support for multiple programming languages and payment frameworks.",
          imgSrc:
            "/assets/BankAccount/Easy Bank Account Verification API Integration/API Implementation.png",
        },
        {
          step4: "Testing & Go Live",
          step4Para:
            "Test your integration in sandbox environment before going live with full production access and dedicated fintech support team.",
          imgSrc:
            "/assets/BankAccount/Easy Bank Account Verification API Integration/Testing & Go Live.png",
        },
      ],
    },
  ];

  const material = [
    {
      heading2: "How Does Bank Account Verification API Work?",
      heading2Para:
        "AOPAY bank account verification solution connects with banking networks and NPCI systems to provide real-time account validation and penny drop verification. Here's the complete workflow for secure account authentication:",
      points: [
        {
          heading3: "1. Account Details Input",
          heading3Para:
            "Customer provides bank account number, IFSC code, and account holder name with explicit consent for verification as per banking regulations.",
          imgSrc:
            "/assets/BankAccount/How Does Bank Account Verification API Work/1. Account Details Input.png",
        },
        {
          heading3: "2. Secure Banking Network Connection",
          heading3Para:
            "API securely connects to banking networks and NPCI systems through encrypted channels with complete data protection and regulatory compliance.",
          imgSrc:
            "/assets/BankAccount/How Does Bank Account Verification API Work/2. Secure Banking Network Connection.png",
        },
        {
          heading3: "3. Account Validation & Penny Drop",
          heading3Para:
            "System validates account existence, performs penny drop verification, and matches account holder name for comprehensive authentication.",
          imgSrc:
            "/assets/BankAccount/How Does Bank Account Verification API Work/3. Account Validation & Penny Drop.png",
        },

        {
          heading3: "4. Instant Verification Response",
          heading3Para:
            "Receive immediate verification results with detailed account information and validation status for seamless payment processing integration.",
          imgSrc:
            "/assets/BankAccount/How Does Bank Account Verification API Work/4. Instant Verification Response.png",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints2 = [
    {
      heading2: "Comprehensive Bank Account Verification Types",
      heading2Para:
        "Our API supports multiple verification methods to meet different business needs and compliance requirements for various fintech applications.",
      points: [
        {
          heading3: "Penny Drop Verification",
          heading3Para:
            "Transfer ₹1 to verify account ownership and immediately reverse the transaction for authentic account validation.",
          imgSrc:
            "/assets/BankAccount/Comprehensive Bank Account Verification Types/Penny Drop Verification.png",
        },
        {
          heading3: "IFSC Code Validation",
          heading3Para:
            "Real-time verification of IFSC codes with complete bank branch information and routing details.",
          imgSrc:
            "/assets/BankAccount/Comprehensive Bank Account Verification Types/IFSC Code Validation.png",
        },
        {
          heading3: "Account Holder Name Matching",
          heading3Para:
            "Check account status including active, dormant, or closed status for secure payment processing.",
          imgSrc:
            "/assets/BankAccount/Comprehensive Bank Account Verification Types/Account Holder Name Matching.png",
        },
        {
          heading3: "Account Status Verification",
          heading3Para:
            "Check account status including active, dormant, or closed status for secure payment processing.",
          imgSrc:
            "/assets/BankAccount/Comprehensive Bank Account Verification Types/Account Status Verification.png",
        },
      ],
    },
  ];

  const features2 = [
    "State Bank of India",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra",
    "Punjab National Bank",
    "Bank of Baroda",
    "IndusInd Bank",
    "Yes Bank",
    "Union Bank",
    "Canara Bank",
    "All Major Banks",
  ];

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Why AOPAY’s Bank Account Verification API is the Smart Choice",

      points: [
        {
          heading3: "Direct Banking Network Integration",
          heading3Para:
            "Seamless connection with NPCI and banking networks ensures authentic account verification with complete regulatory compliance and real-time processing.",
          imgSrc:
            "/assets/BankAccount/Why Choose AOPAY Bank Account Verification Solution/Direct Banking Network Integration.png",
        },
        {
          heading3: "Advanced Security Architecture",
          heading3Para:
            "Bank-grade encryption, PCI DSS compliance, and secure API infrastructure protect sensitive financial information throughout the verification process.",
          imgSrc:
            "/assets/BankAccount/Why Choose AOPAY Bank Account Verification Solution/Advanced Security Architecture.png",
        },
        {
          heading3: "Instant Payment Processing",
          heading3Para:
            "Reduce payment failures and fraud with instant account verification, improving transaction success rates and customer experience for fintech platforms.",
          imgSrc:
            "/assets/BankAccount/Why Choose AOPAY Bank Account Verification Solution/Instant Payment Processing.png",
        },
        {
          heading3: "24/7 Fintech Support Excellence",
          heading3Para:
            "Dedicated fintech support team with banking expertise available round-the-clock, ensuring maximum uptime for critical payment operations.",
          imgSrc:
            "/assets/BankAccount/Why Choose AOPAY Bank Account Verification Solution/Support.png",
        },
      ],
    },
  ];

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
        heading: "PAN Verification",
        paragraph:
          "Ensure Validity of PAN Numbers with Quick, Reliable PAN Verify For Official & Financial Purposes",
        link: "/pan-verification",
        icon: "/assets/ExploreProducts/Verification/PANVerify.png",
        alt: "PAN Verification",
      },
    ],
    url3: [
      {
        heading: "GST Verification",
        paragraph:
          "Verify GSTINs & Validate Tax Status For Smooth Transactions & Compliance",
        link: "/gst-verification",
        icon: "/assets/ExploreProducts/Verification/GST.png",
        alt: "GST Verification",
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
      {/* <CreditScoreSection
        features={features}
        creditContent="Easy Methods to Verify Bank Account Online with AOPay"
      />
      <BenefitsSection benefits={benefits} benefitsHeading={benefitsHeading} />
      <ResourcesSection heading="Resourceful Application for Bank Account Verification By AOPay" />
      <VerificationFailure verificationContent={verificationContent} />
      <ValuesSection /> */}
      <ContentWithDescriptivePoints content={content} />
      <StepsWithExplanation Steps={Steps} />
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <div
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Bank Account Verification API Code Sample Code For Developers
            </h2>

            {/* Code Box */}
            <pre className="bg-gray-900 text-green-200 text-sm rounded-xl p-4 overflow-x-auto shadow-inner leading-relaxed">
              <code>
                {`curl -X POST "https://api.aopay.in/v1/bank/verify" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "account_number": "1234567890123456",
    "ifsc_code": "SBIN0001234",
    "account_holder_name": "CUSTOMER NAME",
    "verification_type": "penny_drop",
    "consent": true
  }'`}
              </code>
            </pre>
          </div>
        </div>
      </section>
      <H2DescH3Desc contentWithDescription={material} />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Supported Bank Networks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our API seamlessly integrates with all major Indian banks through
            NPCI networks, ensuring comprehensive coverage for account
            verification across public sector, private sector, and cooperative
            banks.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <ul className="grid sm:grid-cols-2 gap-4 text-left">
            {features2.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-800 text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-20 px-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl shadow-lg">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Benefits of AOPAY Bank Account Validation API for Businesses
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Transform your payment verification process with our
            enterprise-grade bank account validation solution designed for
            fintech companies requiring reliable, secure, and scalable banking
            authentication solutions.
          </p>
          <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-5"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "99.9% Account Verification Accuracy",
            "Real-time Response Under 2 Seconds",
            "RBI Compliant & Secure Infrastructure",
            "24/7 Fintech Technical Support",
            "Comprehensive Banking Documentation",
            "All Major Banks Coverage",
            "Advanced Fraud Prevention",
            "Scalable for High Transaction Volume",
            "Detailed Payment Analytics",
            "Instant Settlement & Reversal",
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-900">{benefit}</h3>
            </div>
          ))}
        </div>
      </section>

      <BankAccountPricing />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <BankAccountVerifyUseCases />
      <GetStarted
        heading="Get Started with Bank Account Verification Solution Today"
        subHeading="Join thousands of fintech companies already using our bank account verification solution to streamline their payment processing. Start with our free sandbox environment and go live in minutes."
        btn1="View Documentation"
      />
      {/* <ExploreProducts linkContent={linkContent} /> */}
    </>
  );
};

export default BankAccount;
