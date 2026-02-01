"use client";

import { motion } from "framer-motion";

const QuickIntegration = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
        >
          Quick Integration & Setup
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto"
        >
          Get started with AOPAY Payment Acceptance API in minutes. Our
          developer-friendly design and comprehensive documentation make
          integration straightforward for any technical team.
        </motion.p>

        {/* Code Example */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 bg-gray-900 text-gray-100 rounded-xl shadow-lg overflow-x-auto"
        >
          <div className="p-4 border-b border-gray-700 text-sm text-gray-400">
            Simple API Integration Example
          </div>
          <pre className="p-6 text-sm leading-relaxed">
            <code>
              {`# Initialize payment session
curl -X POST https://api.yourcompany.com/v1/payments \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
        "amount": 2500,
        "currency": "USD",
        "payment_method": "card",
        "customer_id": "cust_12345",
        "description": "Payment for Order #12345"
      }'`}
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickIntegration;
