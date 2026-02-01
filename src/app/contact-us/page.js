import {
  ContactForm,
  ContactPage,
  FAQSection,
  GetStarted,
} from "@/sections/mySection";

import {
  Smile,
  FileText,
  User,
  IndianRupee,
  Mail,
  CircleHelp,
  Play,
} from "lucide-react";
import Script from "next/script";

export const metadata = {
  title: "Contact Us | AOPay",
  description:
    "Get in touch with AOPay to explore our digital banking solutions. We're here to support your B2B financial innovation journey. Contact us for inquiries or demos.",
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://aopay.in/contact-us",
  },
  openGraph: {
    title: "Contact AOPay – Talk to Our Team",
    description:
      "Have questions about our B2B digital banking solutions? Contact AOPay today for expert support and partnership opportunities.",
    url: " ",
    siteName: "Contact AOPAY",
    images: [
      {
        url: "https://aopay.in/images/og-contact.jpg",
        width: 800,
        height: 600,
        alt: "AOPAY Open Graph Image",
      },
    ],
    type: "website",
  },
};

const ContactUs = () => {

  
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "AOPAY Technology Pvt. Ltd.",
      url: "https://aopay.in/contact-us",
      telephone: "011-42151216",
      description:
        "Contact AOPAY for all your banking technology needs. Our expert team is available to provide personalized solutions for NBFC, fintech, digital banking, and other financial services in India.",
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
      ],
      logo: "https://aopay.in/logo.png",
      sameAs: [
        "https://www.linkedin.com/company/aopay",
        "https://twitter.com/aopayindia",
      ],
    };



  const faqContent = {
    heading: "Frequently asked questions",
    faqs: [
      {
        icon: <Smile className="text-xl text-gray-600" />,
        question: "Is there a free trial available?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem accusantium porro distinctio nam quam soluta debitis illum repellat provident nesciunt voluptates in, officiis expedita animi veniam ratione earum mollitia maiores sit rerum optio asperiores illo tenetur natus. Quisquam culpa, accusamus nam autem pariatur exercitationem, itaque assumenda consequuntur ex harum illo.",
      },
      {
        icon: <FileText className="text-xl text-gray-600" />,
        question: "Can I change my plan later?",
        answer:
          "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
      },
      {
        icon: <FileText className="text-xl text-gray-600" />,
        question: "What is your cancellation policy?",
        answer:
          "You can cancel your subscription anytime from your account settings without additional fees.",
      },
      {
        icon: <User className="text-xl text-gray-600" />,
        question: "Can other info be added to an invoice?",
        answer:
          "Yes, additional information such as VAT ID or address can be added to invoices from your account settings.",
      },
      {
        icon: <IndianRupee className="text-xl text-gray-600" />,
        question: "How does billing work?",
        answer:
          "Billing is processed monthly or annually depending on your chosen plan.",
      },
      {
        icon: <Mail className="text-xl text-gray-600" />,
        question: "How do I change my account email?",
        answer:
          "You can update your email address in the account settings section of your dashboard.",
      },
      {
        icon: <CircleHelp className="text-xl text-gray-600" />,
        question: "How does support work?",
        answer:
          "Support is available via email or chat. Our team is ready to help you with any issues.",
      },
      {
        icon: <Play className="text-xl text-gray-600" />,
        question: "Do you provide tutorials?",
        answer:
          "Yes, we offer a variety of tutorials and documentation to help you get started.",
      },
    ],
  };
  return (
    <>
      <Script
        id="aopay-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ContactPage />
      <ContactForm />
      {/* <FAQSection faqContent={faqContent} /> */}
      <GetStarted
        heading="Ready to level up your business"
        subHeading="Start your 30-day free trial. Cancel anytime"
      />
    </>
  );
};

export default ContactUs;
