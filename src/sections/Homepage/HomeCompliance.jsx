"use client";
import { motion } from "framer-motion";

export default function HomeCompliance() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        >
          Compliance & Security
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-700 text-lg max-w-3xl mx-auto mb-10"
        >
          RBI guidelines compliant, PCI-DSS certified infrastructure with
          end-to-end encryption, tokenization, and advanced fraud prevention.
          Regular security audits and penetration testing ensure your operations
          remain secure and trustworthy.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto text-left text-gray-700 text-sm">
        <ul className="flex flex-wrap gap-x-24 gap-y-4">
          <li className="flex items-center border border-gray-200 p-2 rounded-lg shadow-md">
            <span className="text-green-600 font-semibold mr-2 text-sm">●</span>
            ISO 27001
          </li>
          <li className="flex items-center border border-gray-200 p-4 rounded-lg shadow-md">
            <span className="text-green-600 font-semibold mr-2 text-sm">●</span>
            PCI-DSS
          </li>
          <li className="flex items-center border border-gray-200 p-4 rounded-lg shadow-md">
            <span className="text-green-600 font-semibold mr-2 text-sm">●</span>
            RBI Compliant
          </li>
          <li className="flex items-center border border-gray-200 p-4 rounded-lg shadow-md">
            <span className="text-green-600 font-semibold mr-2 text-sm">●</span>
            SOC 2 Type II
          </li>
        </ul>
      </div>
    </section>
  );
}
