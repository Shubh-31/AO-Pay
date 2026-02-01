"use client";

import { motion } from "framer-motion";

const NBFCIntro = () => {
  return (
    <div className="bg-gray-50">
      {/* --- Section 1 --- */}
      <section className="relative py-20 px-6 max-w-6xl mx-auto text-center overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white">
        {/* Gradient Accent Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 opacity-70"></div>

        {/* Decorative Circle */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
            NBFC Banking Software for Modern Financial Institutions
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            AOPAY Integrated NBFC Solution is specifically designed for
            Non-Banking Financial Companies seeking to modernize their
            operations and expand their service offerings. Built on an Agile
            NBFC Banking architecture, our solution delivers enterprise-grade
            functionality with the flexibility to adapt to your unique business
            requirements and regulatory compliance needs.
          </p>
        </motion.div>
      </section>

      {/* --- Section 2 --- */}
      <section className="relative py-20 px-6 max-w-6xl mx-auto text-center overflow-hidden rounded-2xl mt-16 border border-gray-100 shadow-md bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Background Decorative Gradient Elements */}
        <div className="absolute -top-28 left-1/4 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-25"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-25"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose AOPAY Advanced NBFC Software
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mb-8"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Experience the power of our NBFC Cloud Banking Platform that
            combines traditional NBFC expertise with cutting-edge fintech
            innovation. Our Advanced NBFC Banking Platform is designed for NBFCs
            ready to embrace digital transformation and compete effectively in
            today's dynamic financial services landscape.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default NBFCIntro;
