"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OptimizePayments() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Optimize Payment Operations & Reduce Costs
          </h2>
          <p className="text-gray-700 mt-4 text-lg max-w-3xl">
            Automate your payment cost management with intelligent routing,
            transparent fee structures, and actionable analytics designed for
            modern enterprises.
          </p>
        </motion.div>

        {/* Feature Groups */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Fee Management */}
          <motion.div
            className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Icon + Title Row */}
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/VendorPayment/Optimize Payment Operations & Reduce Costs/Flexible Fee Management & Cost Control.png"
                alt="Flexible Fee Management & Cost Control"
                width={28}
                height={28}
                className="shrink-0"
              />
              <h3 className="text-xl font-semibold text-green-700">
                Flexible Fee Management & Cost Control
              </h3>
            </div>

            <ul className="space-y-2 text-gray-700 text-sm md:text-base">
              <li>
                ✓ Customizable transaction fees with percentage, flat, or hybrid
                models
              </li>
              <li>✓ Volume-based pricing tiers for cost optimization</li>
              <li>✓ Fee bearer configuration (company vs. vendor)</li>
              <li>✓ Real-time fee calculation and transparency</li>
            </ul>
          </motion.div>

          {/* Payment Routing */}
          <motion.div
            className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/VendorPayment/Optimize Payment Operations & Reduce Costs/Intelligent Payment Routing & Optimization.png"
                alt="Intelligent Payment Routing & Optimization"
                width={28}
                height={28}
                className="shrink-0"
              />
              <h3 className="text-xl font-semibold text-green-700">
                Intelligent Payment Routing & Optimization
              </h3>
            </div>

            <ul className="space-y-2 text-gray-700 text-sm md:text-base">
              <li>✓ Automated routing to lowest-cost payment rails</li>
              <li>✓ Payment method selection based on cost and speed</li>
              <li>✓ Batch processing for reduced transaction costs</li>
              <li>✓ Settlement timing optimization for cash flow management</li>
            </ul>
          </motion.div>

          {/* Reporting & Analytics */}
          <motion.div
            className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/VendorPayment/Optimize Payment Operations & Reduce Costs/Comprehensive Reporting & Analytics.png"
                alt="Comprehensive Reporting & Analytics"
                width={28}
                height={28}
                className="shrink-0"
              />
              <h3 className="text-xl font-semibold text-green-700">
                Comprehensive Reporting & Analytics
              </h3>
            </div>

            <ul className="space-y-2 text-gray-700 text-sm md:text-base">
              <li>✓ Real-time payment analytics and dashboards</li>
              <li>✓ Vendor payment trends and insights</li>
              <li>✓ Cost analysis and savings reports</li>
              <li>✓ Exception and error tracking</li>
              <li>✓ Custom report generation and scheduling</li>
              <li>✓ Export capabilities for financial systems</li>
            </ul>
          </motion.div>

          {/* Reconciliation & Audit */}
          <motion.div
            className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/VendorPayment/Optimize Payment Operations & Reduce Costs/Automated Reconciliation & Audit.png"
                alt="Automated Reconciliation & Audit"
                width={28}
                height={28}
                className="shrink-0"
              />
              <h3 className="text-xl font-semibold text-green-700">
                Automated Reconciliation & Audit
              </h3>
            </div>

            <ul className="space-y-2 text-gray-700 text-sm md:text-base">
              <li>✓ Automated bank statement reconciliation</li>
              <li>✓ Exception handling and dispute resolution</li>
              <li>✓ Comprehensive audit trails for compliance</li>
              <li>✓ Transaction lifecycle tracking</li>
              <li>✓ Regulatory reporting automation</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
