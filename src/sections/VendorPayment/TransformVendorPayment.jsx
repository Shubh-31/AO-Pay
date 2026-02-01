"use client";

import { motion } from "framer-motion";

export default function TransformVendorPayments() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center bg-gradient-to-b from-gray-900 to-black rounded-3xl shadow-xl p-10 border border-gray-800"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
          Ready to Transform Your Vendor Payment Operations?
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          Join leading enterprises who have reduced payment processing time by{" "}
          <span className="text-green-400 font-semibold">70%</span> and cut
          costs by <span className="text-green-400 font-semibold">40%</span>{" "}
          with automated vendor payments.
        </p>
      </motion.div>
    </section>
  );
}
