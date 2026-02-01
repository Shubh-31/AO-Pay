"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustSection() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Why Industry Leaders Trust AOPAY
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Points */}
        <ul className="flex-1 space-y-4 text-gray-700 text-lg">
          {[
            "Single unified API layer for all banking and payment services",
            "Pre-integrated with 50+ banks and payment networks",
            "Configurable business rules engine without code changes",
            "Real-time reconciliation and settlement automation",
            "Advanced fraud detection with machine learning algorithms",
            "Comprehensive regulatory compliance built-in",
            "Multi-tenant architecture with complete data isolation",
            "Automated reporting and MIS generation",
          ].map((point, i) => (
            <li key={i} className="flex items-start">
              <span className="text-green-600 font-semibold mr-2">●</span>
              {point}
            </li>
          ))}
        </ul>

        {/* Right: Image */}
        <div className="flex-1 relative w-full h-80 md:h-[400px]">
          <Image
            src="/assets/Home/Leaders.png"
            alt="Why Industry Leaders Trust AOPAY"
            className="rounded-lg"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
}
