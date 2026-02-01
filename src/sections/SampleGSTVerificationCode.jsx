"use client";

import { motion } from "framer-motion";

export const SampleGSTVerificationCode = () => {
  const curlCommand = `curl -X POST "https://api.aopay.in/v1/gst/verify" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "gstin": "27AAPFU0939F1ZV",
    "business_name": "COMPANY NAME",
    "consent": true,
    "purpose": "VENDOR_VERIFICATION"
  }'`;

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-900">
            GST Verification API Code Sample For Developers
          </h2>

          {/* Code Box */}
          <pre className="bg-gray-900 text-green-200 text-sm rounded-xl p-4 overflow-x-auto shadow-inner leading-relaxed">
            <code>{curlCommand}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};
