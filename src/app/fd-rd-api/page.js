import { ExploreProducts } from "@/components/ExploreProducts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/cardContent";
import {
  PaymentHead,
  CreditScoreSection,
  QRPayments,
  VerificationFailure,
  GetStarted,
} from "@/sections/mySection";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "FD & RD Management APIs for NBFCs & Fintechs | AOPAY",
  description:
    "Digitize FD/RD operations with AoPay's API. Enable online booking, renewals, premature withdrawals for banks, NBFCs, credit societies with automated interest calculations.",
  keywords: [
    "fixed deposit online, recurring deposit India, FD RD services, online investment digital banking, A0Pay FD RD, high interest FD, recurring deposit account, recurring deposit scheme, fixed deposit rates, recurring deposit calculator, fixed deposit options best fixed deposit rates, FD vs RD comparison, fixed deposit interest rates, invest in recurring deposit, long-term fixed deposit, fixed deposit investment, interest on recurring deposits, FD interest calculation, safe investment options, RD and FD benefits, tax-saving fixed deposits, fixed deposit maturity, recurring deposit interest, fixed deposit offers RD investment benefits, fixed deposit plans, secure FD investment, high-interest recurring deposit, online FD booking, fixed deposit withdrawal recurring deposit maturity, FD early withdrawal penalty, fixed deposit with bank, low-risk investments, recurring deposit eligibility best recurring deposit accounts, monthly deposit interest recurring deposit calculator tool, fixed deposit interest calculator, RD fixed deposit combination, fixed deposit tax exemption, safe RD investment options, recurring deposit process, RD schemes in India, best FD schemes, growing your savings with RD, FD lock-in period.",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://aopay.in/fd-rd-api",
  },
  openGraph: {
    title: "FD & RD API | Deposit Management Solution | AoPay",
    description:
      "Digitize FD/RD operations with online booking and automated interest calculations.",
    url: "https://aopay.in/fd-rd-api",
    type: "website",
    siteName: "AOPay",
    locale: "en_IN",
    images: [
      {
        url: "https://aopay.in/images/fd-rd-og.jpg",
        alt: "AOPay FD RD Services",
      },
    ],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AOPAY Technology Pvt. Ltd.",
  url: "https://aopay.in/fd-rd-api",
  telephone: "011-42151216",

  description:
    "Cheapest FD & RD API solution in India for secure deposit management, automated recurring deposits, real-time interest tracking, and dependable 24/7 support.",

  serviceType: [
    "White Label FD & RD API Solution",
    "Fixed deposit account API Solution",
    "FD & RD API Provider Near Me",
    "Best FD & RD API Solution Provider in India",
    "FD & RD API Integration Services",
    "FD & RD System for Small Businesses",
    "FD & RD API for Neobanks",
    "Affordable FD & RD API for Small Businesses",
    "FD & RD API for Microfinances in India",
    "FD & RD API for Insurance & BFSI Apps",
    "Digital FD & RD API Solution for Local Businesses",
    "Deposit API for Investment Platforms",
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



const DepositsInvestment = () => {
  const headerContent = {
    title:
      "Fixed & Recurring Deposit API for Digital Investment Management Solution",
    subTitle: `Launch comprehensive fixed deposit and recurring deposit services with AOPAY's advanced investment API. Offer competitive interest rates with instant FD creation and automated RD management.`,
    imgSrc: "/assets/FDRD/Fixed & Recurring Deposit API FINAL.png",
    alt: "Fixed deposit API integration showing interest calculation and maturity tracking.",
    btn1: "Integrate FD & RD API Today",
    btn1Link: "/contact-us",
  };

  // const features = [
  //   {
  //     icon: "/assets/Banking/Simple_Online_Process.png",
  //     title: "Simple Online Process",
  //     description:
  //       "Opening an FD or RD account is soo easy & simple. Online process ensures you get started in just a few clicks",
  //   },
  //   {
  //     icon: "/assets/Banking/Clear_Transparent_Terms.png",
  //     title: "Clear & Transparent Terms",
  //     description:
  //       "Interest rates & terms are transparent, with no hidden charges or fees. You can rest assured knowing exactly how your investment will grow over time.",
  //   },
  //   {
  //     icon: "/assets/Banking/Track_Investments_Anytime.png",
  //     title: "Track Your Investments Anytime, Anywere",
  //     description:
  //       "Keep track of your FD or RD investments easily with our online platform. Receive timely updates on your interest payouts, & easily access your account at anytime & anywere",
  //   },
  // ];

  const fdContent = {
    mainTitle: "FD Deposits",
    imgSrc: "/assets/Banking/Deposits/Deposits_2.png",
    alt: "Recurring deposit API dashboard with automated monthly investment processing.",
    content: [
      {
        title: "Guaranteed Returns",
        description:
          "Fixed Deposits offer guaranteed returns with a fixed interest rate over a specified tenure, giving you complete peace of mind",
      },
      {
        title: "Flexible Tenure Options",
        description:
          "FD options offer flexible tenures to suit your needs. Choose a tenure that aligns with your financial goals",
      },
      {
        title: "Competitive Interest Rates",
        description:
          "FDs offer competitive interest rates, ensuring your investment grows steadily. Plus, senior citizens enjoy higher interest rates as an added benefit",
      },
      {
        title: "Safe & Secure Investment",
        description:
          "Fixed Deposits are backed by the government, ensuring a low-risk, high-reward investment",
      },
    ],
  };

  const rdContent = {
    mainTitle: "RD Deposits",
    imgSrc: "/assets/Banking/Deposits/Deposits_3.png",
    alt: "Digital FD and RD API solution for banks and financial institutions.",
    content: [
      {
        title: "Disciplined Saving Made Easy",
        description:
          "With Recurring Deposits, saving regularly is easy. Set a fixed amount to deposit monthly, making it easier to build a savings habit",
      },
      {
        title: "Affordable & Accessible",
        description:
          "No matter your financial situation, RDs are designed to fit your budget & goals",
      },
      {
        title: "Interest Compounds Over Time",
        description:
          "Interest you earn on your RD is compounded, which means your savings grow even faster as time goes on",
      },
      {
        title: "Short-Term Goals? No Problem",
        description:
          "For short-term goals like vacations, home repairs, or education, RDs help you save steadily without the worry of market fluctuations",
      },
    ],
  };

  const verificationContent = {
    para1:
      "AOPay believes in helping people build a secure financial future, one investment at a time. Our Fixed Deposit (FD) & Recurring Deposit (RD) options provide a safe, reliable way to make your money work for you. With guaranteed returns & flexible terms, we provide right solutions to meet your financial goals.",
    imgUrl: "/assets/Banking/Deposits/Deposits_4.png",
    alt: "Investment API platform managing fixed and recurring deposits with real-time updates.",
  };

  const linkContent = {
    headingContent: "Banking Solutions",
    url1: [
      {
        heading: "Virtual Account",
        paragraph:
          "Create Virtual Account for Secure Transactions & Simplified Money Management",
        link: "/virtual-account",
        icon: "/assets/ExploreProducts/Banking/VirtualAC.png",
        alt: "Virtual Account",
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

  const features = [
    {
      title: "Instant Fixed Deposit API",
      description:
        "Create fixed deposits instantly with our FD API supporting tenures from 7 days to 10 years. Offer competitive interest rates with flexible deposit amounts starting from ₹1,000. Real-time FD certificate generation and maturity tracking.",
      buttons: ["Instant Creation"],
      imgSrc:
        "/assets/FDRD/AOPAY FD & RD API Features/Instant Fixed Deposit API.png",
    },
    {
      title: "Automated Recurring Deposit Management API",
      description:
        "Enable systematic savings with our RD API supporting monthly deposits from ₹100 to ₹1 lakh. Automated debit scheduling, missed payment alerts, and flexible top-up options. Complete RD lifecycle management with maturity notifications.",
      buttons: ["Auto Debit", "Flexible Plans"],
      imgSrc:
        "/assets/FDRD/AOPAY FD & RD API Features/Automated Recurring Deposit Management.png",
    },
    {
      title: "Investment Portfolio Dashboard",
      description:
        "Comprehensive investment tracking with real-time portfolio updates. Monitor FD maturity dates, RD payment schedules, interest earnings, and total returns. Advanced analytics with investment performance insights and tax calculation support.",
      buttons: ["Real-time Tracking", "Advanced Analytics"],
      imgSrc:
        "/assets/FDRD/AOPAY FD & RD API Features/Investment Portfolio Dashboard.png",
    },
    {
      title: "Multi-Bank Integration Support",
      description:
        "Easy integration with leading banks and NBFCs offering diverse FD and RD products. Support for senior citizen rates, special deposit schemes, and corporate FD options. Single API for multiple financial institutions.",
      buttons: ["Multi-Bank Support"],
      imgSrc:
        "/assets/FDRD/AOPAY FD & RD API Features/Multi-Bank Integration Support.png",
    },
    {
      title: "Smart Notifications & Alerts",
      description:
        "Automated notification system for maturity reminders, RD payment dues, interest credit alerts, and renewal notifications. Configurable alert preferences with SMS, email, and push notification support.",
      buttons: ["Multi-channel Alerts", "Custom Preferences"],
      imgSrc:
        "/assets/FDRD/AOPAY FD & RD API Features/Smart Notifications & Alerts.png",
    },
    {
      title: "Regulatory Compliance & Security",
      description:
        "RBI compliant FD and RD processing with DICGC insurance coverage. Bank-grade security, encrypted data transmission, and comprehensive audit trails. Full compliance with banking regulations and KYC requirements.",
      buttons: ["RBI Compliant", "DICGC Insured"],
      imgSrc:
        "/assets/FDRD/AOPAY FD & RD API Features/Regulatory Compliance & Security.png",
    },
  ];

  const products = [
    {
      imgSrc:
        "/assets/FDRD/FD & RD Investment Products/Regular Fixed Deposits.png",
      title: "Regular Fixed Deposits",
      features: [
        "Minimum deposit",
        "Tenure",
        "Quarterly interest payout",
        "Premature withdrawal facility",
        "Auto-renewal options",
      ],
      description:
        "Perfect for conservative investors seeking guaranteed returns with capital protection and flexible tenure options.",
    },
    {
      imgSrc:
        "/assets/FDRD/FD & RD Investment Products/Senior Citizen Fixed Deposits.png",
      title: "Senior Citizen Fixed Deposits",
      features: [
        "Additional interest for seniors",
        "Age verification through API",
        "Special tax-saving FD options",
        "Monthly interest payout",
        "Health insurance linkage",
      ],
      description:
        "Enhanced returns for senior citizens with additional benefits and preferential interest rates.",
    },
    {
      imgSrc: "/assets/FDRD/FD & RD Investment Products/Recurring Deposits.png",
      title: "Recurring Deposits",
      features: [
        "Monthly deposits",
        "Tenure",
        "Automated monthly debits",
        "Missed payment recovery",
        "Loan against RD facility",
      ],
      description:
        "Systematic investment approach with disciplined savings and compound interest benefits.",
    },
    {
      imgSrc:
        "/assets/FDRD/FD & RD Investment Products/Corporate Fixed Deposits.png",

      title: "Corporate Fixed Deposits",
      features: [
        "Minimum deposit",
        "Bulk deposit processing",
        "Customized interest rates",
        "Corporate governance compliance",
        "Dedicated relationship manager",
      ],
      description:
        "Tailored solutions for businesses and corporations with higher deposit limits and preferential rates.",
    },
  ];
  const highlights = [
    "RESTful API Design: Standard HTTP methods for all operations",
    "Real-time Processing: Instant FD creation and RD setup",
    "Webhook Support: Automated notifications for all events",
    "Multi-language SDKs: Support for PHP, Python, Java, Node.js",
    "Sandbox Environment: Complete testing before production",
    "24/7 Developer Support: Technical assistance and troubleshooting",
  ];

  const endpoints = [
    "POST /api/v1/fixed-deposit/create",
    "POST /api/v1/recurring-deposit/setup",
    "GET /api/v1/investment/portfolio",
    "GET /api/v1/deposit/rates",
  ];

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="keywords"
          content="fixed deposit online, recurring deposit India, FD RD services, online investment, digital banking, AOPay FD RD, high interest FD, recurring deposit account, recurring deposit scheme, fixed deposit rates, recurring deposit calculator, fixed deposit options, best fixed deposit rates, FD vs RD comparison, fixed deposit interest rates, invest in recurring deposit, long-term fixed deposit, fixed deposit investment, interest on recurring deposits, FD interest calculation, safe investment options, RD and FD benefits, tax-saving fixed deposits, fixed deposit maturity, recurring deposit interest, fixed deposit offers, RD investment benefits, fixed deposit plans, secure FD investment, high-interest recurring deposit, online FD booking, fixed deposit withdrawal, recurring deposit maturity, FD early withdrawal penalty, fixed deposit with bank, low-risk investments, recurring deposit eligibility, best recurring deposit accounts, monthly deposit interest, recurring deposit calculator tool, fixed deposit interest calculator, RD fixed deposit combination, fixed deposit tax exemption, safe RD investment options, recurring deposit process, RD schemes in India, best FD schemes, growing your savings with RD, FD lock-in period"
        />
      </Head>

      {/* Structured Data Schema */}
      <Script
        id="aopay-fd-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PaymentHead headerSection={headerContent} />
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            AOPAY Fixed & Recurring Deposit API Solution For Digital Investment
            Platforms
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
            Empower your investment platform with India's most comprehensive
            fixed deposit and recurring deposit solution. Enable seamless
            investment services with enterprise-grade security and competitive
            returns.
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
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          FD & RD Investment Products in India: What You Should Know
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Comprehensive range of fixed deposit and recurring deposit options
          with competitive interest rates.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  className="w-6 mb-2"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  {product.title}
                </h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-600">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* <CreditScoreSection
        features={features}
        creditContent="Deposits Advantage: Easy, Secure, & Flexible"
      />
      <QRPayments
        textContent1={fdContent}
        textContent2={rdContent}
        heading="Why Choose Deposits with AOPay?"
      />
      <VerificationFailure
        heading="AOPay Secures Millions Future with Fixed & Recurring Deposits"
        verificationContent={verificationContent}
      /> */}

      {/* <GetStarted
        heading="Get Started Today"
        subHeading="Ready to start saving? Open an FD or RD account today and take the first step towards a brighter financial future with AOPay"
      /> */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          FD & RD API Integration Guide For Businesses & Developers
        </h2>

        {/* Simple Investment API Integration */}
        <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow mb-8">
          <CardContent className="p-6">
            <img
              src="/assets/FDRD/FD & RD API Integration Process/Simple Investment API Integration.png"
              alt="API Integration"
              className="w-6 mb-2"
            />
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Simple Investment API Integration
            </h3>
            <p className="text-gray-600">
              Integrate AOPAY's FD & RD API with comprehensive documentation and
              developer-friendly endpoints. Our RESTful API design ensures quick
              implementation across web and mobile platforms.
            </p>
          </CardContent>
        </Card>

        {/* Integration Highlights & Key Endpoints */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <img
                src="/assets/FDRD/FD & RD API Integration Process/Integration Highlights.png"
                alt="Integration Highlights"
                className="w-6 mb-2"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Integration Highlights
              </h3>
              <ul className="space-y-2 text-gray-700">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600">•</span> {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <img
                src="/assets/FDRD/FD & RD API Integration Process/Key API Endpoints.png"
                alt="Key API Endpoints"
                className="w-6 mb-2"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Key API Endpoints
              </h3>
              <ul className="space-y-2 text-gray-700 font-mono text-sm">
                {endpoints.map((endpoint, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600">→</span> {endpoint}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Code Example */}
        <div>
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            FD & RD API Sample Code For Developers
          </h3>

          <pre className="bg-gray-900 text-gray-100 p-5 rounded-xl overflow-x-auto text-sm leading-relaxed">
            <code>{`{
  "endpoint": "POST /api/v1/fixed-deposit/create",                                   
  "headers": {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  "payload": {
    "customer_id": "CUST_001",
    "deposit_amount": 50000,
    "tenure_months": 24,
    "interest_rate": 7.5,
    "deposit_type": "regular",
    "maturity_instruction": "auto_renew",
    "nominee_details": {
      "name": "John Doe",
      "relation": "Son",
      "percentage": 100
    }
  },
  "response": {
    "fd_id": "FD_2025_001234",
    "certificate_number": "FD789012",
    "maturity_date": "2027-09-02",
    "maturity_amount": 57812.50,
    "status": "active",
    "created_at": "2025-09-02T10:30:00Z"
  }
}`}</code>
          </pre>
        </div>
      </section>
      <GetStarted
        heading="Ready to Launch Your Investment Platform?"
        subHeading="Join leading investment platforms already using our FD & RD Investment Solution to provide comprehensive deposit services. Get started with our secure, scalable, and compliance-ready solution today."
        btn1="Schedule Demo"
      
      />
      {/* <ExploreProducts linkContent={linkContent} /> */}
    </>
  );
};

export default DepositsInvestment;
