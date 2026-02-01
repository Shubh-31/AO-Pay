export const metadata = {
  title: "AOPay Cancellation & Refund Policy - Easy & Transparent",
  description:
    "Get full details on AOPay’s cancellation & refund process. We ensure fast, transparent solutions for your peace of mind.",
  authors: [{ name: "Kushaldeep" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://aopay.in/cancellation-refund",
  },
  openGraph: {
    title: "AOPay Cancellation & Refund Policy - Simple & Clear",
    description:
      "Learn how AOPay's straightforward cancellation and refund process works. We’re committed to providing transparency and ease of use.",
    url: "https://aopay.in/cancellation-refund",
    siteName: "AOPay Solutions Inc.",
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

const Cancellation = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gradient">
            Cancellation & Refund Policy
          </h1>
          {/* <p className="mt-4 text-gray-600">Effective Date: January 6, 2025</p> */}
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            AOPay Technology Private Limited Cancellation and Refund Policy:
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            <strong>AOPay Technology Private Limited</strong> (AOPay) provides a number
            of products & services. This policy outlines the terms for
            cancellation and refunds for our products & services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">Warranties</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            AOPay offers a 2-day limited warranty on its software products.
            This warranty covers defects discovered in functionality within 2
            days of product activation. If a defect is identified during this
            period, AOPay will, at its sole discretion, resolve the product
            defect.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Cancellation and Refunds
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            <strong>Before Project Start:</strong> If clients wish to request
            cancellation of products & services provided by AOPay Technology Private
            Limited within 2 days of signing the agreement. Cancellation
            requests must be submitted in writing via email to the designated
            contact person at AOPay Technology Private Limited. Upon receiving a
            cancellation request, AOPay  Technology Private Limited will review the request
            and process it within a reasonable time frame typically within 30
            days and you will receive a full refund. <br />
            <strong>After Project Start:</strong> Due to the customized nature
            of our products & services,
            <strong>no refunds are permitted</strong> once a project has begun
            and a formal agreement has been signed by both parties. <br />
            <strong>Warranty Claims:</strong> For software products, if you
            discover a defect within the 2-day warranty period, please contact
            AOPay support immediately. We will work diligently to resolve the
            issue. If the issue cannot be resolved, AOPay will, at its sole
            discretion, resolve the defect.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">Exceptions</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            AOPay Technology Private Limited reserves the right to deny cancellation or
            refund requests in cases where:
          </p>
          <ul className="list-disc ml-6 mt-4 text-gray-600">
            <li>
              The client has violated the terms and conditions of the agreement.
            </li>
            <li>
              The product has been modified or tampered with by the client or
              any third party.
            </li>
            <li>
              The issues arise due to factors beyond the control of AOPay Technology
              Private Limited, such as changes in government regulations.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Dispute Resolution
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            If you are dissatisfied with a service or product provided by AOPay, please contact us immediately. We will work with you to find a
            resolution.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Maximum Liability
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            AOPay's maximum liability, under any circumstance, for any products
            & services offered, shall be limited to the total amount received
            from the customer for availing of those services. This excludes any
            cancellation, refund, or other charges that may be applicable.
          </p>
        </section>

        <footer className="text-center mt-12">
          <h3 className="text-xl font-bold text-gray-800">Contact Us</h3>
          <p className="mt-4 text-gray-600">
            If you have any questions about this Cancellation and Refund Policy,
            please contact AOPay:
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
          <p className="mt-4 text-gray-600">
            By signing the agreement with AOPay Technology Private Limited, clients
            acknowledge and agree to abide by the terms and conditions outlined
            in this Cancellation and Refund Policy.
          </p>
          <p className="mt-4 text-gray-600">
            <strong>
              We appreciate your business and look forward to working with you.
            </strong>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Cancellation;
