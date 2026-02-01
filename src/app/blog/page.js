import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React from "react";



export const metadata = {
  title: "Read latest news for fintech and digital banks | AOPAY",
  description:
    "Explore expert insights on fintech, digital banking, payments, blockchain, and financial innovation. Stay informed with the latest trends shaping modern finance.",
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/blog",
  },
  openGraph: {
    type: "website",
    title: "Fintech & Digital Banking Insights | AOPAY",
    description:
      "Explore expert insights on fintech, digital banking, payments, AI, blockchain, and financial innovation.",
    url: "https:/aopay.in/blog",
    siteName: "AOPAY Technology",
    images: [
      {
        url: "https://aopay.in/assets/images/fintech-blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "Fintech and Digital Bank Blog",
      },
    ],
    publishedTime: "2026-01-19T08:00:00+00:00",
  },
};



const Blog = () => {
  return (
    <>
      <Script
        id="financial-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            name: "AOPAY Technology",
            url: "https://aopay.in",
            logo: "https://aopay.in/assets/images/logo.png",
            description:
              "Fintech and digital banking solutions providing innovative financial solutions and insights.",
            sameAs: ["https://www.linkedin.com/company/aopay-technology/"],
          }),
        }}
      />
      <section className="mt-12 max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-8">
          <Link
            href="/choosing-right-deployment-corporate-banking"
            className="group relative block w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#001E80]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 space-y-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#001E80]">
                Corporate Banking
              </span>

              <h2 className="text-xl font-semibold leading-snug text-gray-800 group-hover:text-[#001E80] transition-colors">
                Choosing the Right Deployment Path in Corporate Banking
              </h2>

              <div className="flex items-center gap-2 text-sm font-semibold text-[#001E80]">
                <span>Read article</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blog;
