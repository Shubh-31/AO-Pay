import { Jost } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import QueryProvider from "./QueryProvider";

// ---------------- FONT ----------------
const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

// ---------------- METADATA ----------------
export const metadata = {
  title: {
    default: "AOPAY : Fast & Secure Payments & Bookings",
  },
  description:
    "AOPAY solutions for FinTech, TravelTech, & BusinessTech. Empowering businesses with online recharge & utility bill payments to compliance verification and travel bookings.",
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in",
  },
  verification: {
    google: "BQlwXqpNpzg3YndnqpDUAVX4wMFvdpCzfiInm4-WXyY",
  },

  openGraph: {
    title: "AOPAY | Fast & Secure Payment, Booking & Verification Services",
    description:
      "Payment Solutions & Services, Hotel Booking Services, IRCTC Train Booking Services, Bus Booking Services, Hotel Room Booking Services, and verification services.",
    url: "https://aopay.in",
    siteName: "AOPAY - Fast & Secure Payment & Booking Services",
    images: [
      {
        url: "https://aopay.in/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "AOPAY Open Graph Image",
      },
    ],
    type: "website",
  },
};

// ---------------- VIEWPORT ----------------
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// ---------------- ROOT LAYOUT ----------------
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <meta name="yandex-verification" content="ee057c4554b1f681" />
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5H2NWPLD');
            `,
          }}
        />
      </head>

      <body
        className={`${jost.className} flex flex-col min-h-screen bg-white scrollbar-hide`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5H2NWPLD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />

        <QueryProvider>
          <main className="flex-1 pt-[30px] scrollbar-hide">{children}</main>
        </QueryProvider>

        <Footer />
      </body>
    </html>
  );
}
