import OurStory from "@/sections/AboutUs/OurStory";
import { ContentWithDescriptivePoints } from "@/sections/ContentWithDescriptivePoints";
import {
  AboutUsHero,
  CreditScoreSection,
  GetStarted,
  Testimonial,
  WorkExperience,
  WorkflowSection,
} from "@/sections/mySection";
import Script from "next/script";

export const metadata = {
  title: "About Us",
  description:
    ": Learn more about AOPay – a digital banking technology company empowering B2B clients with cutting-edge financial solutions. Discover our mission and team.",
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://aopay.in/about-us",
  },
  openGraph: {
    title: "About AOPay – B2B Digital Banking Experts",
    description:
      "AOPay is revolutionizing B2B digital banking. Meet the team behind our mission to build smarter, scalable financial solutions.",
    url: "https://aopay.in/about-us",
    siteName: "About AOPAY",
    images: [
      {
        url: "https://aopay.in/images/og-about.jpg",
        width: 800,
        height: 600,
        alt: "AOPAY Open Graph Image",
      },
    ],
    type: "website",
  },
};

const About = () => {

    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "AOPAY Technology Pvt. Ltd.",
      url: "https://aopay.in/about-us",
      telephone: "011-42151216",
      description:
        "AOPAY is a leading provider of BankTech solutions, specializing in digital banking, fintech innovation, and cloud-based banking software for businesses in India and globally. Our mission is to empower financial institutions with secure, scalable, and efficient banking technology.",
      logo: "https://aopay.in/logo.png",
      sameAs: [
        "https://www.linkedin.com/company/aopay",
        "https://twitter.com/aopayindia",
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
      ],
    };


  const bookFlight = [
    {
      icon: "/assets/Payments/Recharge_&_Bill/Automatic_Payment.png",
      title: "Payment Services",
      description:
        "Simplifying payments, whether it’s for bills, online shopping, or peer-to-peer transfers. We offer a wide range of services, from recharge and bill payments to QR code collections and AEPS, ensuring a smooth, secure.",
    },
    {
      icon: "/assets/Travel/Fast_Booking.png",
      title: "Travel Services",
      description:
        "Plan your next trip effortlessly with our booking solutions. Flights, trains, buses, or hotels – we’ve got you covered. Let us handle the details so you can enjoy the journey.",
    },
    {
      icon: "/assets/Banking/Secure_Transactions.png",
      title: "Banking Solutions",
      description:
        "Empowering businesses and individuals with access to virtual accounts, fixed deposits, recurring deposits, credit score reports, and PAN creation services. Everything you need to manage your financial future, all in one place.",
    },
    {
      icon: "/assets/Verifications/Biometric.png",
      title: "Verification Solutions",
      description:
        "Streamline your verification processes with Aadhaar, PAN, GST, and bank account verification services. We ensure secure, reliable checks to keep your business compliant and efficient.",
    },
  ];
  const testimonials = [
    {
      id: 1,
      image: "/assets/Testimonial/2.png",
      quote:
        "AOPay has made my business transactions so much easier. Aadhaar & PAN verification is quick and easy, which is important for simplifying our processes. AOPay app is user-friendly, & I can access everything I need right from my phone",
      name: "Ravi Kumar",
      role: "Founder & Leader",
    },
    {
      id: 2,
      image: "/assets/Testimonial/5.png",
      quote:
        "Booking my flights, hotels, & even train tickets through AOPay has been smooth. I love how I get instant confirmation for everything.",
      name: "Ayesha Shah",
      role: "Founder & Leader",
    },
    {
      id: 3,
      image: "/assets/Testimonial/1.png",
      quote:
        "I was looking for a trustworthy platform to manage all my online payments & money transfers, and AOPay exceeded my expectations. From bill payments to money transfers, everything is fast & secure. Credit Report feature is also very helpful in getting my credit reports.",
      name: "Sandeep Mehta",
      role: "Founder & Leader",
    },
    {
      id: 4,
      image: "/assets/Testimonial/6.png",
      quote:
        "As someone who travels a lot for work, AOPay helps to book everything from flights to hotel rooms through app is so easy. I can always rely on AOPay for my travel experience.",
      name: "Priya Patel",
      role: "Founder & Leader",
    },
    {
      id: 5,
      image: "/assets/Testimonial/7.png",
      quote:
        "Managing our family finances and bookings has never been easier. AOPay’s recurring deposit and fixed deposit options help us save smarter, while the easy verification services like bank account verification make everything hassle-free. We trust AOPay for everything.",
      name: "Anand & Neha Kapoor",
      role: "Runs Family Business",
    },
    {
      id: 6,
      image: "/assets/Testimonial/4.png",
      quote:
        "I recently started using AOPay for my monthly bill payments and recharges, and the app is fast, & secure. ",
      name: "Suresh Verma",
      role: "Founder & Leader",
    },
    {
      id: 7,
      image: "/assets/Testimonial/3.png",
      quote:
        "AOPay has been a valuable app for my business. Virtual account & GST verification services have helped me streamline our accounting process.",
      name: "Manish Gupta",
      role: "Founder & Leader",
    },
  ];

    const content = [
      {
        heading2: "Our Core Values",
        heading2Para: "The principles that guide everything we do",
        points: [
          {
            heading3: "Security First",
            heading3Para:
              "We prioritize the security and privacy of our clients' data above all else. Every system we build incorporates bank-grade encryption, multi-layer security protocols, and adheres to the strictest compliance standards including RBI guidelines, PCI-DSS, and ISO 27001.",
            imgSrc: "/assets/About/Security.png",
          },

          {
            heading3: "Innovation Driven",
            heading3Para:
              "The financial services landscape evolves rapidly, and so do we. Our dedicated R&D team continuously explores emerging technologies - ensuring our platform stays ahead of industry trends and customer expectations.",
            imgSrc: "/assets/About/technology.png",
          },
          {
            heading3: "Customer Centric",
            heading3Para:
              "Your success is our success. We don't just provide software; we build lasting partnerships. Our dedicated teams, and customized solutions ensure you have the resources and guidance needed to achieve your business objectives.",
            imgSrc: "/assets/About/Customer.png",
          },
          {
            heading3: "Inclusive Finance",
            heading3Para:
              "We believe banking technology shouldn't be exclusive to large institutions. By democratizing access to enterprise-grade infrastructure, we allow businesses of all sizes—from startups to cooperatives—to deliver world-class financial services to their customers.",
            imgSrc: "/assets/About/finanace.png",
          },
        ],
      },
    ];


  return (
    <>
      <Script
        id="aopay-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AboutUsHero />
      <WorkExperience />
      <WorkflowSection />
      <OurStory />
      <ContentWithDescriptivePoints content={content} />
      <GetStarted
        heading="Join Us on This Journey"
        subHeading="We're always looking for strategic partners who share our vision of democratizing access to world-class banking infrastructure."
        btn1="Become a Partner"
      />
    </>
  );
};

export default About;
