"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function KYBCTASection() {
  return (
    <section className="bg-gradient-to-b from-gray-950 to-black text-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-green-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ready to Automate Your KYB Compliance?
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join financial institutions and fintechs that trust our KYB API for
          business verification. Start with our free sandbox and experience the
          difference of accurate, fast, and compliant business verification.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button className="bg-green-600 hover:bg-green-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300">
            Schedule Demo
          </Button>
          <Button
            variant="outline"
            className="border-green-600 text-green-400 hover:bg-green-600 hover:text-black font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            Contact Sales
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
