"use client";

import { motion } from "framer-motion";

const TreasurySolutions = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* 1️⃣ Intro Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="/assets/CorporateTreasury/Streamline Treasury Operations with Intelligent Payment Solutions.png"
            alt="Streamline Treasury Operations with Intelligent Payment Solutions"
            className="w-4/5 rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center md:text-left space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Streamline Treasury Operations with Intelligent Payment Solutions
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Managing corporate treasury in today's dynamic environment
              requires more than traditional banking relationships. AOPAY
              empowers modern enterprises with real-time visibility, automated
              workflows, and seamless integration across multiple financial
              systems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our Payment Gateway and Collection solutions form a unified
              ecosystem for payments, collections, and reconciliations —
              supporting UPI, NEFT, RTGS, IMPS, and digital wallets, ensuring
              flexibility and compliance.
            </p>
          </motion.div>
        </div>

        {/* 2️⃣ PayOut & DMT Solution */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4 order-2 md:order-1 text-center md:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              PayOut & DMT Solution
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Automate bulk vendor payments, salary disbursements, and partner
              settlements with our PayOut and Domestic Money Transfer solutions.
              Handle thousands of transactions instantly with real-time tracking
              and complete audit trails.
            </p>
          </motion.div>

          <motion.img
            src="/assets/CorporateTreasury/PayOut & DMT Solution FINAL.png"
            alt="PayOut and DMT Solution"
            className="w-4/5 rounded-2xl shadow-md order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>

        {/* 3️⃣ Virtual Account Management */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="/assets/CorporateTreasury/Virtual Account Management Solution FINAL.png"
            alt="Virtual Account Management Solution"
            className="w-4/5 rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4 text-center md:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Virtual Account Management Solution
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Simplify fund tracking and reconciliation with dedicated Virtual
              Accounts for each department, project, or subsidiary. Gain
              granular visibility into cash movements without managing multiple
              bank accounts.
            </p>
          </motion.div>
        </div>

        {/* 4️⃣ UPI & QR Payments */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4 order-2 md:order-1 text-center md:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              UPI & QR Payment Solutions
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Leverage India’s UPI and QR infrastructure to enable instant,
              contactless payments. Accept payments from customers, pay vendors
              quickly, and eliminate delays with 24/7 payment availability.
            </p>
          </motion.div>

          <motion.img
            src="/assets/CorporateTreasury/UPI & QR Payment Solutions FINAL.png"
            alt="UPI and QR Payment Solutions"
            className="w-4/5 rounded-2xl order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
};

export default TreasurySolutions;
