import { H2DescH3Desc } from "@/sections/H2DescH3Desc";
import { H2H3WithPoints } from "@/sections/H2H3WithPoints";
import { FAQSection } from "@/sections/mySection";
import AdditionalCollaborationModels from "@/sections/NBFCCollaboration/AdditionalCollaborationModels";
import AOPayBeforeAfter from "@/sections/NBFCCollaboration/AOPayBeforeAfter";
import AOPayServicesSection from "@/sections/NBFCCollaboration/AOPayServicesSection";
import NBFCBackgroundVerification from "@/sections/NBFCCollaboration/NBFCBackgroundVerification";
import NBFCCollabHeader from "@/sections/NBFCCollaboration/NBFCCollabHeader";
import NBFCCollaborationAdvantages from "@/sections/NBFCCollaboration/NBFCCollaborationAdvantages";
import NBFCCollaborationModel from "@/sections/NBFCCollaboration/NBFCCollaborationModel";
import NBFCFintechModels from "@/sections/NBFCCollaboration/NBFCFintechModels";
import NBFCGrowthSection from "@/sections/NBFCCollaboration/NBFCGrowthSection";
import NBFCImpactStats from "@/sections/NBFCCollaboration/NBFCImpactStats";
import NBFCOperationalWorkflows from "@/sections/NBFCCollaboration/NBFCOperationalWorkflows";
import NBFCProcessSection from "@/sections/NBFCCollaboration/NBFCProcessSection";
import PartnershipModelsSection from "@/sections/NBFCCollaboration/PartnershipModelsSection";
import WhyPartnerWithAOPay from "@/sections/NBFCCollaboration/WhyPartnerWithAOPay";
import Script from "next/script";


export const metadata = {
  title:
    "NBFC Collaboration Services | Partnership & Fintech Consulting – AOPay",
  description:
    "Collaborate with top NBFCs and fintech companies through AOPay’s consulting solutions. We assist with partnership models, compliance, and growth strategies.",

  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://aopay.in/nbfc-collaboration",
  },
  openGraph: {
    title: "NBFC Takeover Consulting | Legal & Financial Advisory – AOPay",
    description:
      "End-to-end NBFC takeover advisory with AOPay. Get expert help with due diligence, compliance, and RBI regulations.",
    url: "https://aopay.in/nbfc-collaboration",
    siteName: "AOPay",
    locale: "en_IN",
    images: [
      {
        url: "https://aopay.in/assets/images/nbfc-collaboration.jpg",
        width: 800,
        height: 600,
        alt: "AOPAY Open Graph Image",
      },
    ],
    type: "website",
  },
};

const NBFCCollaboration = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "AOPAY Technology Pvt. Ltd.",
      url: "https://aopay.in/nbfc-collaboration",
      telephone: "011-42151216",
      description:
        "AOPAY provides expert consulting for NBFC collaborations, including fintech partnerships, outsourcing services, and strategic collaborations for lenders and DSAs in India.",
      serviceType: [
        "NBFC collaboration consulting",
        "Fintech-NBFC partnership advisory",
        "Outsourcing solutions for NBFCs",
        "NBFC collaboration for digital lending businesses",
        "Strategic consulting for NBFC partnerships",
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
      ],
      logo: "https://aopay.in/logo.png",
      sameAs: [
        "https://www.linkedin.com/company/aopay",
        "https://twitter.com/aopayindia",
      ],
    };

      const contentWithHeadingsAndPoints = [
        {
          heading2: "Getting Started with NBFC Collaboration - Your Roadmap",
          heading2Para:
            "Ready to unlock the power of strategic partnerships? Here's your step-by-step roadmap to collaboration success:",
          points: [
            {
              heading3: "1. Initial Consultation",
              heading3Para:
                "Schedule a free consultation with our NBFC collaboration experts. We assess your business objectives, capital requirements, target markets, and partnership preferences to recommend optimal collaboration models.",
              imgSrc:
                "/assets/NBFCCollaboration/GettingStarted/InitialConsultation.png",
            },
            {
              heading3: "2. Partner Identification",
              heading3Para:
                "Leverage our network to identify suitable partners—NBFCs, banks, or fintechs—that align with your strategic goals. We conduct preliminary due diligence and facilitate introductions.",
              imgSrc:
                "/assets/NBFCCollaboration/GettingStarted/PartnerIdentification.png",
            },
            {
              heading3: "3. Business Model Design",
              heading3Para:
                "Collaborate with our experts to structure revenue-sharing models, risk allocation frameworks, and operational workflows that maximize value for all parties while maintaining regulatory compliance.",
              imgSrc:
                "/assets/NBFCCollaboration/GettingStarted/BusinessModel.png",
            },
            {
              heading3: "4. Legal Documentation",
              heading3Para:
                "Our legal team drafts comprehensive agreements including MoUs, co-origination contracts, escrow arrangements, and compliance frameworks protecting all stakeholders' interests.",
              imgSrc:
                "/assets/NBFCCollaboration/GettingStarted/LegalDocumentation.png",
            },
            {
              heading3: "5. Infrastructure Setup",
              heading3Para:
                "Establish operational infrastructure including escrow accounts, technology integrations, reporting systems, and compliance mechanisms for seamless collaboration execution.",
              imgSrc:
                "/assets/NBFCCollaboration/GettingStarted/Infrastructure.png",
            },
            {
              heading3: "6. Launch & Ongoing Support",
              heading3Para:
                "Commence operations with our continuous support for performance monitoring, reconciliation, compliance management, and optimization recommendations to maximize partnership ROI.",
              imgSrc:
                "/assets/NBFCCollaboration/GettingStarted/Launch.png",
            },
          ],
          btn1: "Start Your Collaboration Journey Today",
          btnLink: "/contact-us",
        },
      ];
       const faqContent = {
         heading: "Frequently Asked Questions About NBFC Collaboration",
         faqs: [
           {
             question:
               "What is the typical timeline for establishing NBFC collaboration?",
             answer:
               "Complete collaboration setup typically requires 4-8 weeks including partner identification, due diligence, agreement drafting, account setup, and regulatory filings. Timeline varies based on collaboration complexity and regulatory approvals required.",
           },
           {
             question: "How is revenue shared in co-lending models?",
             answer:
               "Revenue sharing varies by agreement structure. Typical co-lending models allocate 24-36% ROI share to fintechs, with remaining profit distributed between NBFCs and banks based on risk contribution. Exact percentages depend on FLDG coverage, capital contribution, and operational responsibilities.",
           },
           {
             question: "What are FLDG limits as per RBI guidelines?",
             answer:
               "RBI regulates FLDG arrangements to ensure risk is appropriately shared. While specific limits vary by circular and NBFC category, fintechs typically provide 50-70% first-loss coverage, with remaining risk borne by NBFCs or banks. Consult current RBI guidelines for exact parameters.",
           },
           {
             question: "Can foreign fintechs collaborate with Indian NBFCs?",
             answer:
               "Yes, foreign fintechs can partner with Indian NBFCs subject to FDI regulations, ECB guidelines, and data localization requirements. Foreign entities must maintain servers in India, comply with data protection laws, and follow RBI's external commercial borrowing norms when raising funds.",
           },
           {
             question:
               "What compliance obligations apply to NBFC-fintech collaborations?",
             answer:
               "Key compliance areas include: TDS on interest/commission payments, GST on services, credit bureau reporting (CIBIL, Experian), CKYC implementation, NPA classification (45/90-day norm), monthly CIC reporting, RBI circular adherence, and fair practices code compliance.",
           },
           {
             question: "How does AOPay charge for collaboration services?",
             answer:
               "Our fee structure depends on service scope—one-time setup fees for agreement drafting and infrastructure establishment, plus optional ongoing support fees for compliance management, reconciliation, and advisory services. Contact us for customized pricing based on your requirements.",
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
      <NBFCCollabHeader/>
      <NBFCCollaborationModel/>
      <NBFCCollaborationAdvantages/>
      <NBFCProcessSection/>
      <NBFCBackgroundVerification/>
      <NBFCFintechModels/>
      <AdditionalCollaborationModels/>
      <NBFCOperationalWorkflows/>
      <AOPayServicesSection/>
      <WhyPartnerWithAOPay/>
      <AOPayBeforeAfter/>
      <PartnershipModelsSection/>
      <NBFCImpactStats/>
      <H2H3WithPoints content={contentWithHeadingsAndPoints} />
      <FAQSection faqContent={faqContent} />
      <NBFCGrowthSection/>
    </>
  );
    
}

export default NBFCCollaboration;