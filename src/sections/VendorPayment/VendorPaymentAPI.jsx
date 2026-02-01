"use client";

import { motion } from "framer-motion";

export default function VendorPaymentAPI({
  btnText1,
  btnLink1,
  btnText2,
  btnLink2,
}) {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* H2 */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Simple Vendor Payment API Integration
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-700 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Get started quickly with our developer-friendly API designed for
          seamless integration with your existing systems, ERP platforms, or
          custom applications.
        </motion.p>

        {/* Code Snippets */}
        <motion.div
          className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto font-mono text-sm space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <pre>
            POST /api/v1/payouts/single
            {`{
  "vendor_id": "VEN12345",
  "amount": 5000.00,
  "currency": "INR",
  "payment_method": "bank_transfer",
  "bank_account": {
    "account_number": "XXXX1234",
    "routing_number": "123456789",
    "account_holder": "Acme Supplies Inc"
  },
  "reference": "INV-2024-001",
  "description": "Payment for Q1 supplies"
}`}
          </pre>

          <pre>
            POST /api/v1/payouts/bulk
            {`{
  "batch_id": "BATCH-20240104",
  "payments": [
    { "vendor_id": "VEN001", "amount": 1500.00, "reference": "INV-001" },
    { "vendor_id": "VEN002", "amount": 2500.00, "reference": "INV-002" }
  ],
  "scheduled_date": "2024-01-15"
}`}
          </pre>

          <pre>
            POST /api/v1/payouts/payment-link
            {`{
  "vendor_id": "VEN789",
  "amount": 3000.00,
  "expires_in": 7200,
  "notification_email": "vendor@example.com"
}`}
          </pre>
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          {btnText1 && btnLink1 && (
            <a
              href={btnLink1}
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              {btnText1}
            </a>
          )}
          {btnText2 && btnLink2 && (
            <a
              href={btnLink2}
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-900 transition-colors"
            >
              {btnText2}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
