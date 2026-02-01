"use client";

import { motion } from "framer-motion";

const GigEconomyOverview = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 px-6 py-10 md:px-10 md:py-12"
        >
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight inline-block relative">
              <span>Transforming Payment Operations in the Gig Economy</span>
              <span className="block h-[3px] w-16 md:w-24 bg-gray-900 mx-auto mt-3 rounded-full" />
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              Gig economy has revolutionized how people work, creating new
              opportunities for freelancers, contractors, and independent
              professionals while enabling businesses to access global talent
              pools. As freelance platforms and gig marketplaces scale from
              startup ventures to enterprise-level operations, they face
              increasing complexity in managing payments, compliance, dispute
              resolution, and trust-building between clients and service
              providers across multiple countries and currencies.
            </p>

            <p>
              Modern gig platforms require sophisticated payment infrastructure
              that can handle diverse payment scenarios, multiple stakeholder
              relationships, regulatory compliance, and security requirements
              while maintaining smooth user experiences. AOPAY&apos;s
              specialized platform addresses these unique challenges with
              purpose-built solutions for the freelance and gig economy sectors.
            </p>
          </div>

          {/* Key Metrics */}
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <li className="bg-gray-50 rounded-2xl px-4 py-4 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                85% Faster freelancer payment processing with automated payout
                systems
              </p>
            </li>
            <li className="bg-gray-50 rounded-2xl px-4 py-4 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                70% Reduction in payment disputes through secure escrow
                management
              </p>
            </li>
            <li className="bg-gray-50 rounded-2xl px-4 py-4 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                90% Improvement in platform trust scores with verified payment
                systems
              </p>
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default GigEconomyOverview;
