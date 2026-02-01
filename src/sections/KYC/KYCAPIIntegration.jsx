"use client";
import { useState } from "react";

export default function KYCAPIIntegration() {
  const [copied, setCopied] = useState(false);

  const codeExample = `// Verify customer identity with our KYC API
POST /api/v1/kyc/verify
{
  "document_front": "base64_encoded_image",
  "document_back": "base64_encoded_image",
  "selfie": "base64_encoded_image",
  "document_type": "passport",
  "country": "US",
  "liveness_check": true,
  "aml_screening": true
}

// Response includes verification status, extracted data, and match scores`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-6">
          Simple API Integration
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          Integrate our KYC API using comprehensive SDKs for Python, Node.js,
          Java, PHP, and more. Our sandbox environment lets you test all
          features before going live.
        </p>

        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex justify-between items-center bg-gray-800 px-4 py-3 border-b border-gray-700">
            <span className="text-sm text-green-500 font-mono">API Request</span>
            <button
              onClick={copyToClipboard}
              className="bg-green-500 hover:bg-green-600 text-black px-3 py-1 rounded text-sm font-medium transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <pre className="p-6 overflow-x-auto">
            <code className="text-sm text-gray-300 font-mono whitespace-pre">
              {codeExample}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
