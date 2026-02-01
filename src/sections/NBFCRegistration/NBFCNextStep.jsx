"use client";
import React from "react";
import { motion } from "framer-motion";

export default function NBFCNextStep() {
  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Take the Next Step Toward Your NBFC Registration
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto"
        >
          Starting an NBFC opens tremendous business opportunities in India's
          rapidly expanding financial services sector. With the right guidance,
          regulatory approval becomes a systematic, manageable process rather
          than an overwhelming challenge.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto"
        >
          AOPay brings unmatched expertise, proven processes, and comprehensive
          support to ensure your NBFC registration succeeds. Our{" "}
          <span className="font-semibold text-blue-700">99% success rate</span>,{" "}
          <span className="font-semibold text-blue-700">75% market share</span>,
          and{" "}
          <span className="font-semibold text-blue-700">
            1000+ registered NBFCs
          </span>{" "}
          demonstrate our capability to navigate complex regulatory requirements
          efficiently.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-semibold text-gray-900 mt-10"
        >
          Contact AOPay for NBFC Registration Services
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-3 text-gray-700"
        >
          Join 50+ successful fintech entrepreneurs who secured RBI licenses
          with AOPay
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-8"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-200">
            Get Started with AOPay Today
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-6 text-gray-700 text-sm md:text-base"
        >
          📞 <span className="font-semibold">Available 24/7</span> | ✓ Free
          Initial Consultation | ⚡{" "}
          <span className="font-semibold">50% Faster Processing</span>
        </motion.p>
      </div>
    </section>
  );
}
