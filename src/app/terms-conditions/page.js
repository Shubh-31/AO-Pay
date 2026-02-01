import React from "react";

export const metadata = {
  title: "Terms & Conditions | AOPay",
  description:
    "Review AOPay Terms & Conditions for the use of our website and Solutions. Stay informed about your rights and responsibilities.",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Terms & Conditions | AOPay",
    description:
      "Review AOPay Terms & Conditions for the use of our website and Solutions. Stay informed about your rights and responsibilities.",
    url: "https://www.aopay.in/terms-conditions",
    siteName: "AOPay Terms & Conditions",
    type: "website",
    images: [
      {
        url: "https://aopay.in/images/terms_conditions.jpg", // replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Terms and Conditions AOPay",
      },
    ],
  },
  alternates: {
    canonical: "https://www.aopay.in/terms-conditions",
  },
  httpEquiv: {
    "X-UA-Compatible": "IE=edge",
  }
};


const TermsCondition = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gradient">
            Read Our Terms & Conditions for Transparent Solutions
          </h1>
          {/* <p className="mt-4 text-gray-600">Effective Date: January 6, 2025</p> */}
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            This website ("www.AOPay.in") is published and maintained by ‘AOPay
            Technology Private Limited’ ("AOPay"), a company incorporated and
            existing in accordance with the laws of the Republic of India. When
            you access, browse, or use this Site you accept, without limitation
            or qualification, the terms and conditions set forth below.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Acceptable Use
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            These Terms and Conditions of Use and any additional terms posted on
            this Site together constitute the entire agreement between AOPay
            and you concerning your use of this Site.
          </p>
          <ul className="list-disc ml-6 mt-4 text-gray-600">
            <li>
              Do not distribute, exchange, modify, sell, or transmit anything
              you copy from this Site for commercial purposes.
            </li>
            <li>
              Do not interrupt or attempt to interrupt the operation of this
              Site in any way.
            </li>
            <li>
              Ensure your use complies with all applicable laws and regulations.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Intellectual Property
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            AOPay retains all ownership rights of its products and services,
            including but not limited to software, source code, trademarks,
            logos, and content. You are granted a limited, non-exclusive,
            non-transferable license to use our services and products solely for
            your internal business purposes only.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Payment & Fees
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Payment terms for our services and products shall be as agreed upon
            in writing between AOPay and the client. Unless otherwise
            specified, all fees are non-refundable. AOPay reserves the right to
            suspend or terminate services for non-payment or late payment.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">Disclaimers</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            AOPay warrants that its services will be provided in a professional
            and workmanlike manner. However, AOPay will not be liable for any
            damages arising out of your use of our products & services,
            including direct, indirect, incidental, special, consequential, or
            punitive damages.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Governing Law & Dispute Resolution
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            These Terms shall be governed by and construed in accordance with
            the laws of India, without regard to its conflict of law principles.
            Any dispute arising out of or relating to these Terms will be
            settled by the Arbitration and Conciliation Act, 1996, conducted in
            Delhi, India.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Modification of Terms
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            AOPay reserves the right to modify or update these Terms at any
            time without prior notice by posting on our website. It is your
            responsibility to review these Terms periodically for changes.
          </p>
        </section>

        <footer className="text-center mt-12">
          <h3 className="text-xl font-bold text-gray-800">Contact Us</h3>
          <p className="mt-4 text-gray-600">
            If you have any questions, please contact us:
          </p>
          <a href="tel:01142151216">
            <p className="mt-2 text-gray-600">Phone: 011 421-512-16</p>
          </a>
          <p className="mt-1 text-gray-600">
            Email:{" "}
            <a href="mailto:info@aopay.in" className="text-blue-500 underline">
              info@aopay.in
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsCondition;
