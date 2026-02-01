// PayInApiIntegration.jsx
export default function APIIntegration() {
  const steps = [
    "Sign up for API account and get your API credentials.",
    "Generate secure API keys for sandbox and production environments.",
    "Test our API functionality in sandbox environment.",
    "Implement webhooks for real-time payment status updates",
    "Deploy API integration to production.",
  ];

  const languages = [
    "PHP",
    "Python",
    "Node.js",
    "Java",
    ".NET",
    "Ruby",
    "React",
    "Angular",
    "and more...",
  ];

  return (
    <section className="py-12 px-4 md:px-12 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-sm">
      <div className="max-w-5xl mx-auto text-center">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          PayIn API Integration & Documentation
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
          Get started quickly with AOPAY comprehensive API Documentation and
          integration guides. Our API includes detailed code samples, SDKs, and
          step-by-step tutorials for easy integration.
        </p>

        {/* Quick Integration Example */}
        <div className="text-left mb-10">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-3 text-center md:text-left">
            Payment Collection API Integration: Step-by-Step Guide
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto md:mx-0 text-center md:text-left">
            Integrate AOPAY API in minutes with our developer-friendly RESTful
            API.
          </p>
        </div>

        {/* Integration Steps */}
        <div className="text-left mb-10">
          <ol className="space-y-3 list-decimal list-inside text-gray-700 max-w-3xl mx-auto md:mx-0">
            {steps.map((step, index) => (
              <li key={index} className="pl-1">
                <span className="font-medium text-gray-800">{`Step ${
                  index + 1
                }: `}</span>
                {step.replace(/^Step \d+: /, "")}
              </li>
            ))}
          </ol>
        </div>

        {/* Supported Languages */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-3 text-center md:text-left">
            Programming Languages Supported by AOPAY Payment Collection API
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto md:mx-0 text-center md:text-left">
            Our API supports all major programming languages
            including{" "}
            <span className="font-medium">{languages.join(", ")}</span> with
            comprehensive SDKs and detailed documentation.
          </p>
        </div>
      </div>
    </section>
  );
}
