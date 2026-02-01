import Head from "next/head";
import { BlogHero } from "@/sections/Blog/ChoosingRightDeploymentCorporateBanking/BlogHero";
import TableOfContents from "@/components/TableOfContent";
import { BlogSection } from "@/sections/Blog/ChoosingRightDeploymentCorporateBanking/BlogSection";
import BlogContent from "@/sections/Blog/ChoosingRightDeploymentCorporateBanking/BlogContent";
import { BlogFinal } from "@/sections/Blog/ChoosingRightDeploymentCorporateBanking/BlogFinal";

export const metadata = {
  title: "Corporate Banking Technology Deployment Models| AOPAY",
  description:
    "Explore corporate banking deployment models and learn how banks can balance control and flexibility using cloud, hybrid, and managed service strategies to drive long-term value.",
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/choosing-right-deployment-corporate-banking",
  },
  openGraph: {
    type: "article",
    title: "Choosing the Right Deployment Path in Corporate Banking",
    description:
      "Learn how strategic deployment models in corporate banking technology help banks balance control, flexibility, and innovation while unlocking long-term business value.",
    url: "https:/aopay.in/choosing-right-deployment-corporate-banking",
    siteName: "AOPAY Technology",
    images: [
      {
        url: "https://aopay.in/corporate-banking-system-deployment.jpg",
        width: 800,
        height: 600,
        alt: "Corporate Banking Systen Deployment",
      },
    ],
    publishedTime: "2026-01-19T08:00:00+00:00",
  },
};

const tocItems = [
  {
    id: "blog-hero",
    title:
      "Choosing the Right Deployment Path: Balancing Control and Flexibility in Corporate Banking",
  },
  {
    id: "blog-section",
    title:
      "3 Deployment Models in Corporate Banking: From Control to Partnership",
  },
  {
    id: "blog-content",
    title: "Strategic Factors Influencing Deployment Decisions",
  },
  { id: "blog-final", title: "Final Thoughts" },
];
const CorporateBanking = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Choosing the Right Deployment Path: Balancing Control and Flexibility in Corporate Banking",
              description:
                "An expert perspective on corporate banking deployment models and how banks can balance control, flexibility, and long-term value.",
              image: "https://aopay.in/corporate-banking-system-deployment.jpg",
              author: {
                "@type": "Person",
                name: "Kushaldeep",
                jobTitle: "Digital Marketer",
                worksFor: {
                  "@type": "Organization",
                  name: "AOPAY Technology",
                },
              },
              publisher: {
                "@type": "Organization",
                name: "AOPAY Technology",
                logo: {
                  "@type": "ImageObject",
                  url: "https://aopay.in/logo.png",
                },
              },
              datePublished: "2025-01-10",
              dateModified: "2025-01-10",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://aopay.in/choosing-right-deployment-corporate-banking",
              },
            }),
          }}
        />
      </Head>

      <main className="w-full mx-auto px-4 py-8 flex gap-8">
        {/* ✅ Sticky Sidebar */}
        <aside className="hidden lg:block md:block w-1/5">
          <div className="sticky top-24 left-2">
            <TableOfContents
              items={tocItems}
            //   cta={{
            //     heading: "Core Banking Software for the Digital Age",
            //     subheading: "Your Bank - Our Technology",
            //     imgSrc: "/assets/WhatIsCoreBankingCard.png",
            //     buttonLabel: "Explore",
            //     buttonLink: "https://aopay.in/",
            //   }}
            />
          </div>
        </aside>

        {/* ✅ Main Content */}
        <article className="flex-1 w-full">
          <section id="blog-hero">
            <BlogHero />
          </section>
          <section id="blog-section">
            <BlogSection />
          </section>
          <section id="blog-content">
            <BlogContent />
          </section>
          <section id="blog-final">
            <BlogFinal />
          </section>
        </article>
      </main>
    </>
  );
};

export default CorporateBanking;
