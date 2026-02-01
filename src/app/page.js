import CookieConsent from "@/sections/CookieContainer";
import ComplianceSection from "@/sections/CorporateTreasury/ComplianceSection";
import FinancialComplexitySection from "@/sections/Homepage/FinancialComplexitySection";
import HomeCompliance from "@/sections/Homepage/HomeCompliance";
import HomeDeployment from "@/sections/Homepage/HomeDeployment";
import HomeIndustry from "@/sections/Homepage/HomeIndustry";
import TrustSection from "@/sections/Homepage/TrustSection";
import {
  BenefitsSection,
  Hero,
  ServicesSection,
  PricingSection,
  IntegrationSection,
} from "@/sections/mySection";
import Script from "next/script";

export const metadata = {
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in",
  },
  title: "Complete Payment and Banking Platform for India",
  openGraph: {
    title:
      "AOPAY Digital Banking Platform – Smart, Secure & Industry-Leading Banking Solutions",
    description:
      "Drive financial innovation with AOPay’s secure and scalable B2B digital banking solutions. Trusted by banks, NBFCs, and fintechs.",
    images: [
      {
        url: "https://aopay.in/images/og-home.jpg",
        width: 800,
        height: 600,
        alt: "AOPay Banner",
      },
    ],
    url: "https://aopay.in/",
    siteName: "Secure Payment Gateway, UPI, KYC & Travel Solutions | AOPay",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  },
};  

export default function Home() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AOPAY Technology Pvt. Ltd.",
    url: "https://aopay.in",
    telephone: "011-42151216",

    description:
      "Best BankTech and Fintech solutions provider in India delivering secure, scalable banking and lending solutions for financial institutions and businesses.",

    knowsAbout: [
      "White Label Banking Software Solutions",
      "White Label Fintech Software Solutions",
      "Banking Software Development",
      "Fintech Software Development",
      "Cloud Banking Software",
      "Cloud Fintech Software",
      "SaaS Banking Software",
      "SaaS Fintech Software",
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



  const benefits = [
    {
      title: "Boosting Quality with Tech",
      description:
        "Leverage advanced technology for smooth payments & travel booking services, as well as banking & verification solutions. AOPay systems ensure best-quality experiences, meeting your business standards and exceeding customer expectations.",
    },
    {
      title: "Optimization of Processes",
      description:
        "From bill payments to flight bookings & document verification, AOPay solutions streamline your workflows. Automate manual tasks, reduce costs, and enhance customer satisfaction with efficient, real-time services.",
    },
    {
      title: "AI-Driven Technology",
      description:
        "Transform your operations with AI-powered solutions. Speed up payment processing, booking services, & verifications, all while improving accuracy & gaining valuable insights to drive business growth.",
    },
  ];
  const benefitsHeading = {
    heading: "AOPay: Elevating Efficiency & Productivity for Businesses",
    subHeading:
      "At AOPay, we provide advance solutions to boost productivity, optimize operations, & accelerate growth. Whether for D2C or B2B, our services are designed to enhance business performance. Here's how we can help:",
    imgUrl: "/assets/Home/Benifits.svg",
    alt: "AOPAY: Fintech Solutions Provider",
  };

  return (
    <>
      <Script
        id="aopay-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <ServicesSection />
      <FinancialComplexitySection />
      <TrustSection />
      <HomeCompliance />
      <HomeIndustry />
      <HomeDeployment />
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Transform Your Financial Operations Today with AOPAY
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Join the next generation of financial services providers who are
            building faster, scaling smarter, and delivering better customer
            experiences with our unified platform. Whether you're launching a
            new venture or modernizing existing operations, we have the
            infrastructure to support your vision.
          </p>
          <p className="text-lg text-gray-600 mb-10">
            Schedule a personalized consultation with AOPAY solutions architects
            to explore how our platform can accelerate your digital
            transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-black text-white font-semibold rounded-xl shadow hover:bg-gray-900 transition"
            >
              Request Demo & Pricing
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-green-600 text-green-600 font-semibold rounded-xl hover:bg-blue-50 transition"
            >
              View Technical Docs
            </a>
          </div>
        </div>
      </section>

      {/* <BenefitsSection benefits={benefits} benefitsHeading={benefitsHeading} />
      <PricingSection />
      <IntegrationSection /> */}
      <CookieConsent />
    </>
  );
}
