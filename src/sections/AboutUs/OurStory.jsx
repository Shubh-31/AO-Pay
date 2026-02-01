"use client";

import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto relative">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500"
        >
          Our Story
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 font-semibold text-center mb-12"
        >
          From a Simple Idea to Powering Financial Institutions
        </motion.h3>

        {/* Paragraphs */}
        <div className="space-y-10 text-gray-700 text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-l-4 border-green-500 pl-4 md:pl-6"
          >
            <span className="font-semibold text-gray-900">
              Mr. Banarji Gupta
            </span>
            founded AOPAY based on a simple yet powerful observation: building
            financial services infrastructure was unnecessarily complex,
            expensive, and time-consuming. He believed there had to be a better
            way.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Having spent years working with banks, NBFCs, and fintech companies,
            our founder witnessed firsthand the challenges these organizations
            faced—legacy systems that took months to integrate, multiple vendors
            that were difficult to manage, security concerns that kept CTOs
            awake at night, and ever-evolving compliance requirements.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="italic text-gray-600 text-lg md:text-xl"
          >
            “What began as a straightforward payment gateway solution quickly
            evolved into a full digital banking platform, empowering clients to
            innovate without limits.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="border-t border-gray-300 pt-6"
          >
            That’s how AOPAY became a trusted infrastructure partner for the
            modern financial ecosystem.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
