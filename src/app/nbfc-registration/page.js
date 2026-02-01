import { ExploreProducts } from "@/components/ExploreProducts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CardWithFeature } from "@/sections/CardWithFeature";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { H2H3WithPointsPart2 } from "@/sections/H2H2WithPointsPart2";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import { HeadingSubheadingSection } from "@/sections/HeadingSubheadingSection";
import {
  PaymentHead,
  CreditScoreSection,
  ToolsSection,
  GetStarted,
  FAQSection,
} from "@/sections/mySection";
import LoanManagementSection from "@/sections/NBFC/LoanManagementSection";
import NBFCCompliance from "@/sections/NBFC/NBFCCompliance";
import NBFCIntro from "@/sections/NBFC/NBFCInto";
import NBFCLendingCapabilities from "@/sections/NBFC/NBFCLendingCapabilities";
import NBFCSection from "@/sections/NBFC/NBFCSection";
import NBFCChallenges from "@/sections/NBFCRegistration/NBFCChallenges";
import NBFCDocumentChecklist from "@/sections/NBFCRegistration/NBFCDocumentCheckList";
import NBFCHeader from "@/sections/NBFCRegistration/NBFCHeader";
import NBFCLicenseSteps from "@/sections/NBFCRegistration/NBFCLicenseSteps";
import NBFCNextStep from "@/sections/NBFCRegistration/NBFCNextStep";
import NBFCOverviewSection from "@/sections/NBFCRegistration/NBFCOverviewSection";
import NBFCPreRequisites from "@/sections/NBFCRegistration/NBFCPreRequisites";
import NBFCRegistrationSection from "@/sections/NBFCRegistration/NBFCRegistrationSection";
import NBFCRegistrationTimeline from "@/sections/NBFCRegistration/NBFCRegistrationTimeline";
import NBFCTypeSection from "@/sections/NBFCRegistration/NBFCTypeSection";
import WhyChooseAOPay from "@/sections/NBFCRegistration/WhyChoseAOPay";
import { StepsWithExplanation } from "@/sections/StepsWithExplanation";
import { Book, CheckCircle, Code2, FlaskConical, Headset } from "lucide-react";
import Script from "next/script";


export const metadata = {
  title: "NBFC Registration Services in India | Expert NBFC Consulting – AOPay",
  description:
    "Get your NBFC registered seamlessly with AOPay’s expert advisory. We assist businesses with RBI compliance, documentation, and NBFC licensing to ensure a smooth approval process.",

  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://aopay.in/nbfc-registration",
  },
  openGraph: {
    title:
      "NBFC Registration Services in India | Expert NBFC Consulting – AOPay",
    description:
      "Get your NBFC registered with AOPay’s end-to-end consulting for RBI compliance, licensing, and documentation.",
    url: "https://aopay.in/nbfc-registration",
    siteName: "AOPay",
    locale: "en_IN",
    images: [
      {
        url: "https://aopay.in/assets/images/nbfc-registration.jpg",
        width: 800,
        height: 600,
        alt: "AOPAY Open Graph Image",
      },
    ],
    type: "website",
  },
};

const NBFCRegistration = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in/nbfc-registration",
    telephone: "011-42151216",
    description:
      "AOPAY provides expert advisory services for NBFC registration in India. We assist businesses with RBI compliance, documentation, and complete registration support for setting up Non-Banking Financial Companies (NBFCs).",
    serviceType: [
      "NBFC registration consulting and advisory",
      "RBI compliance assistance for NBFCs",
      "Documentation and filing services for NBFC registration",
      "Expert guidance for NBFC setup and incorporation",
      "NBFC registration for fintech companies",
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
      { "@type": "City", name: "Bengaluru" },
      { "@type": "City", name: "Gurgaon" },
    ],
    logo: "https://aopay.in/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/aopay",
      "https://twitter.com/aopayindia",
    ],
  };


  const headerContent = {
    title: "NBFC Registration in India - Complete RBI License Services",
    subTitle:
      "Get Your Non-Banking Financial Company Registered with 99% Success Rate | Expert NBFC Consultants Available 24/7. Is your business engaged in lending, investments, or other financial activities? NBFC registration in India is your gateway to legal financial operations. Join 98 out of 100 NBFCs registered with AOPay™ experts who are running successfully today.",
    btn1: "Get Started with AOPay",
    btn1Link: "/contact-us",
    video: false,
  };

  const contentWithHeadingsAndPoints2 = [
    {
      heading2:
        "Benefits of NBFC License Registration - Why Your Business Needs It",
      heading2Para:
        "Obtaining an NBFC license from RBI unlocks significant operational advantages and market opportunities for financial service providers. Here's how registration transforms your business capabilities:",
      points: [
        {
          imgSrc:
            "/assets/NBFCRegistration/Benefits/Legal Authorization for Financial Operations.png",
          heading3: "Legal Authorization for Financial Operations",
          heading3Para:
            "NBFC registration provides legal empowerment to offer loans, credit facilities, and other financial products to customers. This includes specialized products like business loans, working capital financing, and asset-backed lending with complete regulatory backing.",
        },
        {
          imgSrc:
            "/assets/NBFCRegistration/Benefits/Access to Money Market Instruments.png",
          heading3: "Access to Money Market Instruments",
          heading3Para:
            "Licensed NBFCs can trade in money market instruments, enabling them to manage short-term funding needs efficiently. This capability allows companies to optimize liquidity, maintain healthy cash flows, and serve corporate clients requiring treasury solutions.",
        },
        {
          imgSrc:
            "/assets/NBFCRegistration/Benefits/Wealth Management and Investment Services.png",
          heading3: "Wealth Management and Investment Services",
          heading3Para:
            "Registration enables NBFCs to participate in wealth management activities, including portfolio management of stocks, shares, and securities. This diversification opportunity helps capture affluent customer segments seeking professional investment advisory services.",
        },
        {
          imgSrc:
            "/assets/NBFCRegistration/Benefits/Large-Scale Project Financing Opportunities.png",
          heading3: "Large-Scale Project Financing Opportunities",
          heading3Para:
            "Licensed NBFCs can invest substantial capital in diverse infrastructure, manufacturing, and development projects across India. This positioning enables participation in nation-building initiatives while generating attractive returns.",
        },
        {
          imgSrc:
            "/assets/NBFCRegistration/Benefits/Technology-Driven Service Delivery.png",
          heading3: "Technology-Driven Service Delivery",
          heading3Para:
            "Modern NBFCs leverage advanced technology platforms to offer digital-first financial services. With superior tech infrastructure compared to traditional banks, NBFCs provide faster loan approvals, seamless digital onboarding, and enhanced customer experiences through mobile applications and online platforms.",
        },
        {
          imgSrc:
            "/assets/NBFCRegistration/Benefits/Broader Market Reach and Penetration.png",
          heading3: "Broader Market Reach and Penetration",
          heading3Para:
            "Digital capabilities enable NBFCs to serve customers across 5000+ pin codes in India, including underserved rural and semi-urban markets. This extensive reach creates significant growth opportunities while promoting financial inclusion nationwide.",
        },
        {
          imgSrc:
            "/assets/NBFCRegistration/Benefits/Competitive Market Positioning.png",
          heading3: "Competitive Market Positioning",
          heading3Para:
            "By offering flexible interest rates, customized repayment schemes, quick collateral processing, and customer-centric products, NBFCs establish strong market authority and brand goodwill. These competitive advantages help capture market share from traditional banking institutions.",
        },
        {
          imgSrc:
            "/assets/NBFCRegistration/Benefits/Government Partnership Benefits.png",
          heading3: "Government Partnership Benefits",
          heading3Para:
            "Registered NBFCs can collaborate with government schemes and initiatives, reducing operational risks while maximizing profitability. These partnerships provide access to subsidized funding, risk-sharing mechanisms, and co-lending opportunities with public sector banks.",
        },
      ],
    },
  ];

  const content = [
    {
      heading2: "NBFC Registration Eligibility Criteria - Do You Qualify?",
      heading2Para:
        "Meeting the Reserve Bank of India's eligibility requirements is crucial for successful NBFC registration. Here's a detailed breakdown of prerequisites your company must fulfill:",
      points: [
        {
          imgSrc:
            "/assets/NBFCRegistration/EligibilityCriteria/Company Incorporation Status.png",
          heading3: "Company Incorporation Status",
          heading3Para:
            "Your entity must be registered as either a Private Limited Company or Public Limited Company under the Companies Act, 2013. Sole proprietorships, partnerships, and LLPs are not eligible for NBFC registration. The Certificate of Incorporation from the Registrar of Companies serves as fundamental proof of legal existence.",
        },

        {
          imgSrc:
            "/assets/NBFCRegistration/EligibilityCriteria/Minimum Net Owned Fund Requirements.png",
          heading3: "Minimum Net Owned Fund Requirements",
          heading3Para:
            "The RBI mandates a minimum Net Owned Fund (NOF) of ₹10 crore for all NBFC categories, including Investment and Credit Companies (NBFC-ICC), Micro Finance Institutions (NBFC-MFI), and Factoring Companies (NBFC-Factor). This capital requirement, effective from October 1, 2022, must represent genuine equity investment - borrowed funds cannot be counted toward NOF compliance.",
        },
        {
          imgSrc:
            "/assets/NBFCRegistration/EligibilityCriteria/Management Experience Mandate.png",
          heading3: "Management Experience Mandate",
          heading3Para:
            "At least one-third of your board of directors must possess 10+ years of professional experience in banking, financial services, credit operations, risk management, or retail finance. This requirement ensures your NBFC operates under experienced leadership capable of navigating complex financial regulations and market dynamics.",
        },
        {
          imgSrc:
            "/assets/NBFCRegistration/EligibilityCriteria/Comprehensive Business Plan.png",
          heading3: "Comprehensive Business Plan",
          heading3Para:
            "A detailed five-year business plan is mandatory, clearly articulating your company's objectives, target markets, financial projections, risk management strategies, and public benefit proposition. The RBI scrutinizes this document to assess business viability and market contribution potential.",
        },
        {
          imgSrc:
            "/assets/NBFCRegistration/EligibilityCriteria/Clean Credit History.png",
          heading3: "Clean Credit History",
          heading3Para:
            "Your company, along with all directors, shareholders, and associated entities, must maintain unblemished credit records with no history of loan defaults, bankruptcy proceedings, or financial irregularities. The RBI conducts thorough background checks and credit assessments before granting registration approval.",
        },
      ],
    },
  ];

  const contentWithHeadingsAndPoints = [
    {
      heading2: "Activities Prohibited for NBFCs - Know the Boundaries",
      heading2Para:
        "While NBFCs enjoy broad operational flexibility, certain business activities remain outside regulatory permissions. Licensed NBFCs cannot engage in:",
      points: [
        {
          heading3: "Agricultural Operations",
          heading3Para:
            "Direct involvement in farming, cultivation, or agricultural production activities",
        },
        {
          heading3: "Industrial Manufacturing",
          heading3Para:
            "Production, processing, or manufacturing of physical goods",
        },
        {
          heading3: "Trading in Goods",
          heading3Para:
            "Purchase or sale of commodities, merchandise, or physical products (except securities and financial instruments)",
        },
        {
          heading3: "Real Estate Development",
          heading3Para:
            "Construction, purchase, sale, or development of immovable property, except when providing secured loans against such collateral. Understanding these restrictions helps maintain regulatory compliance and avoid potential license cancellation or penalties.",
         
        },
      ],
    },
  ];

  const material = [
    {
      heading2: "RBI's Scale-Based Regulatory Framework for NBFCs",
      heading2Para:
        "The Reserve Bank of India categorizes NBFCs into four regulatory layers based on size, activity type, and risk profile. This framework ensures proportionate regulation:",
      points: [
        {
          heading3: "Base Layer NBFCs (NBFC-BL)",
          heading3Para:
            "Comprises non-deposit-taking NBFCs with assets below ₹1,000 crore. This layer includes specialized entities like Peer-to-Peer lending platforms (NBFC-P2P), Account Aggregators (NBFC-AA), and Non-Operative Financial Holding Companies (NOFHC). These face lighter regulatory requirements given their limited systemic risk.",
        },
        {
          heading3: "Middle Layer NBFCs (NBFC-ML)",
          heading3Para:
            "Includes all deposit-accepting NBFCs regardless of size, plus non-deposit NBFCs engaged in specific regulated activities. Middle layer entities face enhanced regulatory scrutiny with stricter capital adequacy, governance, and disclosure norms.",
        },
        {
          heading3: "Upper Layer NBFCs (NBFC-UL)",
          heading3Para:
            "Comprises the top 10 eligible NBFCs identified by the RBI based on asset size, interconnectedness, and systemic importance. These institutions face bank-like regulations including higher capital requirements and enhanced supervisory oversight.",
        },
        {
          heading3: "Top Layer NBFCs (NBFC-TL)",
          heading3Para:
            "This layer typically remains unoccupied but serves as a classification for systemically critical NBFCs. The RBI may elevate specific upper-layer NBFCs to this category if their failure could pose significant risks to financial stability.",
        },
      ],
    },
  ];

  const HeadingSubheadings = [
    {
      heading2: "NBFCs' Growing Role in India's Economy",
      heading2Para:
        "Non-Banking Financial Companies are instrumental in driving India's economic growth trajectory toward the $7 trillion economy target by 2030. Their impact spans multiple dimensions:",
      points: [
        {
          heading3: "Financial Inclusion Champions",
          heading3Para:
            "NBFCs bridge critical credit gaps by serving MSMEs, small businesses, and individuals often overlooked by traditional banks. Their innovative peer-to-peer lending models and localized approach bring financial services directly to underserved communities across 5000+ pin codes nationwide.",
        },

        {
          heading3: "Diverse Product Offerings",
          heading3Para:
            "From personal loans and business financing to leasing, hire purchase, and investment products, NBFCs offer comprehensive financial solutions tailored to diverse customer needs. This product diversity enables them to capture multiple market segments simultaneously.",
        },
        {
          heading3: "Alternative Financing for Entrepreneurs",
          heading3Para:
            "NBFCs provide flexible financing options for startups and entrepreneurs facing bank rejections due to limited credit history or unconventional business models. This entrepreneurial support fuels innovation and job creation across sectors.",
        },
        {
          heading3: "Customer-Centric Operations",
          heading3Para:
            "With agile processes, faster approvals, and flexible terms, NBFCs deliver superior customer experiences compared to traditional institutions. Their technology-driven platforms enable instant loan decisions, digital documentation, and seamless fund disbursement.",
        },
        {
          heading3: "Underserved Market Focus",
          heading3Para:
            "By targeting rural, semi-urban, and niche market segments ignored by mainstream banks, NBFCs democratize access to credit and financial services. This focus on underserved populations promotes inclusive economic development.",
        },
      ],
    },
  ];

    const faqContent = {
      heading: "Frequently Asked Questions About NBFC Registration",
      faqs: [
        {
          question:
            "What is the minimum capital required for NBFC registration?",
          answer:
            "The RBI mandates a minimum Net Owned Fund (NOF) of ₹10 crore for all NBFC categories. This capital must be genuine equity investment and cannot include borrowed funds. The requirement became effective from October 1, 2022.",
        },
        {
          question: "How long does NBFC registration take?",
          answer:
            "The complete registration process typically takes 90-180 working days from application submission to Certificate of Registration receipt. Timeline depends on documentation quality, application complexity, RBI workload, and whether foreign investment is involved.",
        },
        {
          question: "Can foreign entities register NBFCs in India?",
          answer:
            "Yes, foreign companies and NRIs can register NBFCs in India subject to Foreign Direct Investment (FDI) regulations. Automatic route allows 100% FDI in most NBFC categories under certain conditions, though some restrictions apply to specific business types.",
        },
        {
          question: "What is the difference between NBFC and bank?",
          answer:
            "NBFCs cannot accept demand deposits (current/savings accounts), issue checks, or participate in payment settlement systems. They focus on lending, investments, and specialized financial services while banks offer comprehensive banking products including deposit-taking and payment services.",
        },
        {
          question: "Do NBFCs need deposit insurance?",
          answer:
            "Deposits accepted by NBFCs are not covered under Deposit Insurance and Credit Guarantee Corporation (DICGC) protection unlike bank deposits. This is why deposit-taking NBFCs face stricter regulations and capital requirements.",
        },
        {
          question: "What are ongoing compliance requirements for NBFCs?",
          answer:
            "NBFCs must maintain minimum capital adequacy ratios, submit periodic financial returns to RBI, undergo annual audits, comply with fair practices code, implement KYC/AML guidelines, and maintain corporate governance standards as per regulatory circulars.",
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
      <NBFCHeader/>
      <NBFCRegistrationSection />
      <NBFCOverviewSection />
      <H2H3WithPointsPart2 content={contentWithHeadingsAndPoints2} />
      <ContentWithDescriptivePoints content={content} />
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <NBFCDocumentChecklist />
      <NBFCLicenseSteps />
      <NBFCTypeSection />
      <H2DescH3Desc contentWithDescription={material} />
      <NBFCRegistrationTimeline />
      <HeadingSubheadingSection HeadingSubheadings={HeadingSubheadings} />
      <WhyChooseAOPay />
      <NBFCPreRequisites />
      <NBFCChallenges />
      <FAQSection faqContent={faqContent} />
      <NBFCNextStep/>
    </>
  );
};

export default NBFCRegistration;
