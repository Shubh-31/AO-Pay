"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneSpace } from "react-syntax-highlighter/dist/esm/styles/prism";

const QuickIntegrationPaymentAcceptance = () => {
  const codeString = `# Initialize payment session
curl -X POST https://api.yourcompany.com/v1/payments \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
        "amount": 2500,
        "currency": "USD",
        "payment_method": "card",
        "customer_id": "cust_12345",
        "description": "Payment for Order #12345"
      }'`;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Quick Integration & Setup
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Get started with AOPAY Payment Acceptance API in minutes. Our
          developer-friendly design and comprehensive documentation make
          integration straightforward for any technical team.
        </p>

        {/* Code Example */}
        <div className="mt-10 rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="p-4 border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-700">
            Simple API Integration Example
          </div>
          <SyntaxHighlighter
            language="bash"
            style={duotoneSpace}
            customStyle={{
              padding: "1.5rem",
              fontSize: "0.9rem",
              borderRadius: "0 0 0.75rem 0.75rem",
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
};

export default QuickIntegrationPaymentAcceptance;
